import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";

// Code splitting: Lazy load route components
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const Emergency = lazy(() => import("./pages/services/Emergency"));
const Drain = lazy(() => import("./pages/services/Drain"));
const WaterHeater = lazy(() => import("./pages/services/WaterHeater"));
const WaterTreatment = lazy(() => import("./pages/services/WaterTreatment"));
const Gas = lazy(() => import("./pages/services/Gas"));
const RePipe = lazy(() => import("./pages/services/RePipe"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services/emergency" element={<Emergency />} />
              <Route path="/services/drain" element={<Drain />} />
              <Route path="/services/water-heater" element={<WaterHeater />} />
              <Route path="/services/water-treatment" element={<WaterTreatment />} />
              <Route path="/services/gas" element={<Gas />} />
              <Route path="/services/re-pipe" element={<RePipe />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
