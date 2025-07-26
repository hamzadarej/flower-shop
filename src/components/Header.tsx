import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Flower2, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import ThemeToggle from '@/components/ThemeToggle';
import { useState } from 'react';

const Header = () => {
  const { state } = useCart();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-background border-b border-sage-light sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-primary hover:text-sage-dark transition-colors">
            <Flower2 className="h-6 w-6" />
            <span>Bloom & Blossom</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              className={`font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary border-b-2 border-primary' : 'text-foreground'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`font-medium transition-colors hover:text-primary ${
                isActive('/products') ? 'text-primary border-b-2 border-primary' : 'text-foreground'
              }`}
            >
              Shop
            </Link>
            {/*<Link */}
            {/*  to="/checkout" */}
            {/*  className={`font-medium transition-colors hover:text-primary ${*/}
            {/*    isActive('/checkout') ? 'text-primary border-b-2 border-primary' : 'text-foreground'*/}
            {/*  }`}*/}
            {/*>*/}
            {/*  About*/}
            {/*</Link>*/}
            <Link 
              to="/contact" 
              className={`font-medium transition-colors hover:text-primary ${
                isActive('/contact') ? 'text-primary border-b-2 border-primary' : 'text-foreground'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Cart, Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link to="/checkout">
              <Button variant="garden" size="sm" className="relative">
                <ShoppingCart className="h-4 w-4" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-rose-soft text-secondary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Button>
            </Link>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-sage-light pt-4">
            <div className="flex flex-col gap-2">
              <Link 
                to="/" 
                className={`p-2 rounded-md transition-colors hover:bg-muted ${
                  isActive('/') ? 'bg-secondary text-primary font-medium' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className={`p-2 rounded-md transition-colors hover:bg-muted ${
                  isActive('/products') ? 'bg-secondary text-primary font-medium' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              {/*<Link */}
              {/*  to="/checkout" */}
              {/*  className={`p-2 rounded-md transition-colors hover:bg-muted ${*/}
              {/*    isActive('/checkout') ? 'bg-secondary text-primary font-medium' : ''*/}
              {/*  }`}*/}
              {/*  onClick={() => setIsMenuOpen(false)}*/}
              {/*>*/}
              {/*  About*/}
              {/*</Link>*/}
              <Link 
                to="/contact" 
                className={`p-2 rounded-md transition-colors hover:bg-muted ${
                  isActive('/contact') ? 'bg-secondary text-primary font-medium' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;