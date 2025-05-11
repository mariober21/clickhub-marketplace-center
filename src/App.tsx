
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import NotFound from "@/pages/NotFound";
import Products from "@/pages/Products";
import HowItWorks from "@/pages/HowItWorks";
import AffiliateProgram from "@/pages/AffiliateProgram";
import ForCreators from "@/pages/ForCreators";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/login" element={<Layout><Login /></Layout>} />
          <Route path="/registro" element={<Layout><Register /></Layout>} />
          <Route path="/registro/:tipo" element={<Layout><Register /></Layout>} />
          <Route path="/produtos" element={<Layout><Products /></Layout>} />
          <Route path="/como-funciona" element={<Layout><HowItWorks /></Layout>} />
          <Route path="/afiliados" element={<Layout><AffiliateProgram /></Layout>} />
          <Route path="/criadores" element={<Layout><ForCreators /></Layout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
