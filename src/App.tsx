import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LandingPage from "./pages/LandingPage";
import ProductList from "./pages/ProductList";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTop from "@/components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => {

  const routes=[
    {path:"/", component:<LandingPage/>},
    {path:"/products", component:<ProductList/>},
    {path:"/checkout", component:<Checkout/>},
    {path:"/contact", component:<Contact/>},
    {path:"/*", component:<NotFound/>},

  ]

  return (
      <QueryClientProvider client={queryClient}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <CartProvider>
            <TooltipProvider>
              <Toaster/>
              <Sonner/>
              <BrowserRouter>
                <div className="min-h-screen flex flex-col">
                  <Header/>
                  <main className="flex-1">
                    <Routes>
                      {routes.map(route => (
                          <Route path={route.path} element={
                            <>
                            <ScrollToTop />
                            {route.component}
                            </>
                          }/>
                      ))}
                    </Routes>
                  </main>
                  <Footer/>
                </div>
              </BrowserRouter>
            </TooltipProvider>
          </CartProvider>
        </ThemeProvider>
      </QueryClientProvider>
  );
};

export default App;
