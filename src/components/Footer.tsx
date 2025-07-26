import { Flower2, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-garden border-t border-sage-light mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-2 text-xl font-bold text-primary mb-4">
              <Flower2 className="h-6 w-6" />
              <span>Bloom & Blossom</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Bringing nature's beauty to your doorstep with fresh, handpicked flowers and plants. 
              Creating moments of joy through botanical excellence.
            </p>
            <div className="flex gap-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/products" className="block text-muted-foreground hover:text-primary transition-colors">
                Shop
              </Link>
              {/*<Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors">*/}
              {/*  About Us*/}
              {/*</Link>*/}
              <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/*/!* Customer Care *!/*/}
          {/*<div>*/}
          {/*  <h3 className="font-semibold text-foreground mb-4">Customer Care</h3>*/}
          {/*  <div className="space-y-2">*/}
          {/*    <Link to="/shipping" className="block text-muted-foreground hover:text-primary transition-colors">*/}
          {/*      Shipping Info*/}
          {/*    </Link>*/}
          {/*    <Link to="/returns" className="block text-muted-foreground hover:text-primary transition-colors">*/}
          {/*      Returns*/}
          {/*    </Link>*/}
          {/*    <Link to="/care" className="block text-muted-foreground hover:text-primary transition-colors">*/}
          {/*      Plant Care*/}
          {/*    </Link>*/}
          {/*    <Link to="/terms" className="block text-muted-foreground hover:text-primary transition-colors">*/}
          {/*      Terms & Conditions*/}
          {/*    </Link>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>

        <div className="border-t border-sage-light mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Bloom & Blossom. All rights reserved. Made with 🌸 for flower lovers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;