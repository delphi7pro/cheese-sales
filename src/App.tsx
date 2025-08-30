import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";

// Импорт страниц
import Index from "./pages/Index";
import Catalog from "./pages/Catalog";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Recipes from "./pages/Recipes";
import News from "./pages/News";
import Contacts from "./pages/Contacts";
import Delivery from "./pages/Delivery";
import Reviews from "./pages/Reviews";
import FAQ from "./pages/FAQ";
import CheeseGuide from "./pages/CheeseGuide";
import Wholesale from "./pages/Wholesale";
import Loyalty from "./pages/Loyalty";
import Blog from "./pages/Blog";
import Events from "./pages/Events";
import Careers from "./pages/Careers";
import Partnership from "./pages/Partnership";
import Sustainability from "./pages/Sustainability";
import GiftCards from "./pages/GiftCards";
import Subscription from "./pages/Subscription";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/about" element={<About />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/news" element={<News />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/cheese-guide" element={<CheeseGuide />} />
            <Route path="/wholesale" element={<Wholesale />} />
            <Route path="/loyalty" element={<Loyalty />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/events" element={<Events />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/partnership" element={<Partnership />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/gift-cards" element={<GiftCards />} />
            <Route path="/subscription" element={<Subscription />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;