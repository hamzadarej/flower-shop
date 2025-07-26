import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Star, Truck, Leaf, Heart, ArrowRight } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import productsData from '@/data/products.json';
import floralHero from '@/assets/floral-hero.jpg';

const LandingPage = () => {
  const featuredProducts = productsData.filter(product => product.featured);
  
  const categories = [
    { name: "Bouquets", image: "/tulips.jpg", description: "Fresh seasonal arrangements" },
    { name: "Roses", image: "/roses.jpg", description: "Classic romantic blooms" },
    { name: "Indoor Plants", image: "/plant.jpg", description: "Green companions for home" },
    { name: "Gifts", image: "/roses.jpg", description: "Perfect for any occasion" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "Absolutely beautiful flowers! The bouquet lasted for weeks and smelled amazing."
    },
    {
      name: "Mike Chen", 
      rating: 5,
      comment: "Fast delivery and the freshest flowers I've ever received. Highly recommend!"
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      comment: "Perfect for my wedding! The team was professional and the arrangements were stunning."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${floralHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/60"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-bloom">
            Brighten Someone's Day with 
            <span className="text-primary block mt-2">Fresh Flowers</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover our hand-picked collection of the finest flowers and plants, 
            delivered fresh to your doorstep with love and care.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button variant="floral" size="lg" className="text-lg px-8 py-3">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="garden" size="lg" className="text-lg px-8 py-3">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-gradient-garden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Browse Our Collection
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From romantic roses to vibrant bouquets, find the perfect flowers for every occasion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link 
                key={category.name}
                to="/products"
                className="group block"
              >
                <div className="bg-card rounded-lg overflow-hidden shadow-soft hover:shadow-floral transition-all duration-300 transform hover:-translate-y-2">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Customer Favorites
            </h2>
            <p className="text-muted-foreground text-lg">
              Discover our most loved floral arrangements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products">
              <Button variant="outline" size="lg" className="px-8">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-garden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Bloom & Blossom?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-card rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-soft group-hover:shadow-bloom transition-all">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">Fresh Daily</h3>
              <p className="text-muted-foreground">
                Hand-picked every morning to ensure the highest quality and longest-lasting blooms.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-card rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-soft group-hover:shadow-bloom transition-all">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">Free Delivery</h3>
              <p className="text-muted-foreground">
                Complimentary same-day delivery within the city for orders over $25.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-card rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-soft group-hover:shadow-bloom transition-all">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">Eco-Friendly</h3>
              <p className="text-muted-foreground">
                Sustainable packaging and locally sourced flowers to protect our environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-soft hover:shadow-floral transition-all">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.comment}"
                </p>
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;