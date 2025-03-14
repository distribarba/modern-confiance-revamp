
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServiceLimpeza from "./pages/ServiceLimpeza";
import ServiceManutencao from "./pages/ServiceManutencao";
import ServicePortaria from "./pages/ServicePortaria";
import ServiceMaoDeObra from "./pages/ServiceMaoDeObra";
import AllServices from "./pages/AllServices";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicos" element={<AllServices />} />
          <Route path="/servicos/limpeza-e-conservacao" element={<ServiceLimpeza />} />
          <Route path="/servicos/manutencao-predial" element={<ServiceManutencao />} />
          <Route path="/servicos/portaria-zeladoria-recepcao" element={<ServicePortaria />} />
          <Route path="/servicos/mao-de-obra-temporaria" element={<ServiceMaoDeObra />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
