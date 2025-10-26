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
const FixtureInstallation = lazy(() => import("./pages/services/FixtureInstallation"));
const PipeRepair = lazy(() => import("./pages/services/PipeRepair"));
const LeakDetection = lazy(() => import("./pages/services/LeakDetection"));
const VideoInspection = lazy(() => import("./pages/services/VideoInspection"));
const SewerServices = lazy(() => import("./pages/services/SewerServices"));
const MaintenancePlans = lazy(() => import("./pages/services/MaintenancePlans"));
const Belleair = lazy(() => import("./pages/locations/Belleair"));
const BeachBluffsShores = lazy(() => import("./pages/locations/BeachBluffsShores"));
const Clearwater = lazy(() => import("./pages/locations/Clearwater"));
const ClearwaterBeach = lazy(() => import("./pages/locations/ClearwaterBeach"));
const Dunedin = lazy(() => import("./pages/locations/Dunedin"));
const Gulfport = lazy(() => import("./pages/locations/Gulfport"));
const IndianRocksBeach = lazy(() => import("./pages/locations/IndianRocksBeach"));
const KennethCity = lazy(() => import("./pages/locations/KennethCity"));
const Largo = lazy(() => import("./pages/locations/Largo"));
const MadeiraBeach = lazy(() => import("./pages/locations/MadeiraBeach"));
const Oldsmar = lazy(() => import("./pages/locations/Oldsmar"));
const PalmHarbor = lazy(() => import("./pages/locations/PalmHarbor"));
const PinellasPark = lazy(() => import("./pages/locations/PinellasPark"));
const RedingtonBeach = lazy(() => import("./pages/locations/RedingtonBeach"));
const SafetyHarbor = lazy(() => import("./pages/locations/SafetyHarbor"));
const Seminole = lazy(() => import("./pages/locations/Seminole"));
const TarponSprings = lazy(() => import("./pages/locations/TarponSprings"));
const Westchase = lazy(() => import("./pages/locations/Westchase"));
const Tampa = lazy(() => import("./pages/locations/Tampa"));
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
              <Route path="/services/fixture-installation" element={<FixtureInstallation />} />
              <Route path="/services/pipe-repair" element={<PipeRepair />} />
              <Route path="/services/leak-detection" element={<LeakDetection />} />
              <Route path="/services/video-inspection" element={<VideoInspection />} />
              <Route path="/services/sewer" element={<SewerServices />} />
              <Route path="/services/maintenance-plans" element={<MaintenancePlans />} />
              <Route path="/locations/belleair" element={<Belleair />} />
              <Route path="/locations/beach-bluffs-shores" element={<BeachBluffsShores />} />
              <Route path="/locations/clearwater" element={<Clearwater />} />
              <Route path="/locations/clearwater-beach" element={<ClearwaterBeach />} />
              <Route path="/locations/dunedin" element={<Dunedin />} />
              <Route path="/locations/gulfport" element={<Gulfport />} />
              <Route path="/locations/indian-rocks-beach" element={<IndianRocksBeach />} />
              <Route path="/locations/kenneth-city" element={<KennethCity />} />
              <Route path="/locations/largo" element={<Largo />} />
              <Route path="/locations/madeira-beach" element={<MadeiraBeach />} />
              <Route path="/locations/oldsmar" element={<Oldsmar />} />
              <Route path="/locations/palm-harbor" element={<PalmHarbor />} />
              <Route path="/locations/pinellas-park" element={<PinellasPark />} />
              <Route path="/locations/redington-beach" element={<RedingtonBeach />} />
              <Route path="/locations/safety-harbor" element={<SafetyHarbor />} />
              <Route path="/locations/seminole" element={<Seminole />} />
              <Route path="/locations/tarpon-springs" element={<TarponSprings />} />
              <Route path="/locations/westchase" element={<Westchase />} />
              <Route path="/locations/tampa" element={<Tampa />} />
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
