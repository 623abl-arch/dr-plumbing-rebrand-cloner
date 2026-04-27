// Edge function: contact-lead
// Receives custom contact form submissions from /contact1 and forwards
// them to a Discord webhook for A2P 10DLC-compliant lead capture.
// Public endpoint (verify_jwt = false). Hardened against bots and abuse.

import { z } from "npm:zod@3.23.8";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const FAKE_PHONE_PATTERNS = new Set([
  "1234567890",
  "0987654321",
  "0000000000",
  "1111111111",
  "2222222222",
  "3333333333",
  "4444444444",
  "5555555555",
  "6666666666",
  "7777777777",
  "8888888888",
  "9999999999",
]);

const SubmissionSchema = z.object({
  first_name: z.string().trim().min(1).max(100),
  last_name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(1).max(40),
  address: z.string().trim().min(1).max(255),
  city: z.string().trim().min(1).max(100),
  zip: z
    .string()
    .trim()
    .regex(/^\d{5}$/, "ZIP must be 5 digits"),
  service_needed: z.string().trim().min(1).max(100),
  description: z.string().trim().min(1).max(2000),
  contact_method: z.enum(["Phone Call", "Text", "Email"]),
  best_time: z.string().trim().max(60).optional().default(""),
  transactional_consent: z.literal(true),
  marketing_consent: z.boolean(),
  consent_disclosure: z.string().trim().min(1).max(2000),
  submission_url: z.string().trim().min(1).max(500),
  // Honeypot — must be empty for real users; we accept any string and check manually
  website: z.string().max(500).optional().default(""),
});

function jsonResponse(body: unknown, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

Deno.serve(async (req) => {
  // CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Method enforcement
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
      status: 405,
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
        Allow: "POST, OPTIONS",
      },
    });
  }

  // Content-Type enforcement
  const contentType = req.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return jsonResponse(
      { error: "Unsupported Media Type — expected application/json" },
      415,
    );
  }

  // Parse body
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return jsonResponse({ error: "Invalid JSON" }, 400);
  }

  // Validate
  const parsed = SubmissionSchema.safeParse(raw);
  if (!parsed.success) {
    return jsonResponse(
      { error: "Validation failed", details: parsed.error.flatten() },
      400,
    );
  }
  const data = parsed.data;

  // Honeypot — silently accept and drop
  if (data.website && data.website.length > 0) {
    return jsonResponse({ ok: true }, 200);
  }

  // Server-side phone validation: exactly 10 digits, not a known fake
  const phoneDigits = data.phone.replace(/\D/g, "");
  if (phoneDigits.length !== 10 || FAKE_PHONE_PATTERNS.has(phoneDigits)) {
    return jsonResponse(
      { error: "Invalid phone number", field: "phone" },
      400,
    );
  }
  const formattedPhone = `(${phoneDigits.slice(0, 3)}) ${phoneDigits.slice(
    3,
    6,
  )}-${phoneDigits.slice(6)}`;

  // Audit-trail headers
  const ipHeader = req.headers.get("x-forwarded-for") ?? "";
  const ipAddress = ipHeader.split(",")[0]?.trim() || "unknown";
  const userAgent = req.headers.get("user-agent") ?? "unknown";
  const acceptLanguage = req.headers.get("accept-language") ?? "unknown";
  const timestamp = new Date().toISOString();

  // Webhook
  const webhookUrl = Deno.env.get("DISCORD_LEADS_WEBHOOK");
  if (!webhookUrl) {
    console.error("DISCORD_LEADS_WEBHOOK is not configured");
    return jsonResponse({ error: "Server misconfigured" }, 500);
  }

  const embed = {
    title: "🔧 New Service Request",
    color: 15158332,
    fields: [
      {
        name: "Name",
        value: `${data.first_name} ${data.last_name}`,
        inline: true,
      },
      { name: "Phone", value: formattedPhone, inline: true },
      { name: "Email", value: data.email, inline: true },
      {
        name: "Service Address",
        value: `${data.address}, ${data.city} ${data.zip}`,
      },
      { name: "Service Needed", value: data.service_needed, inline: true },
      { name: "Preferred Contact", value: data.contact_method, inline: true },
      {
        name: "Best Time",
        value: data.best_time?.trim() ? data.best_time : "Anytime",
        inline: true,
      },
      { name: "Description", value: data.description },
      {
        name: "Transactional SMS Consent",
        value: "✅ Yes",
        inline: true,
      },
      {
        name: "Marketing SMS Consent",
        value: data.marketing_consent ? "✅ Yes" : "❌ No",
        inline: true,
      },
      { name: "IP Address", value: ipAddress, inline: true },
      { name: "Accept-Language", value: acceptLanguage, inline: true },
      { name: "User Agent", value: userAgent.slice(0, 1024) },
      { name: "Submission URL", value: data.submission_url },
      {
        name: "Consent Disclosure Shown",
        value: data.consent_disclosure.slice(0, 1024),
      },
    ],
    timestamp,
    footer: { text: data.submission_url },
  };

  const payload = {
    username: "Contact Form",
    embeds: [embed],
  };

  try {
    const discordRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!discordRes.ok) {
      const text = await discordRes.text();
      console.error(
        `Discord webhook failed [${discordRes.status}]: ${text.slice(0, 500)}`,
      );
      return jsonResponse({ error: "Webhook delivery failed" }, 500);
    }

    return jsonResponse({ ok: true }, 200);
  } catch (err) {
    console.error("Discord webhook error:", err);
    return jsonResponse({ error: "Webhook delivery failed" }, 500);
  }
});
