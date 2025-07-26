import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';
import { Minus, Plus, Trash2, ShoppingBag, CreditCard } from 'lucide-react';
import {Link} from "react-router-dom";

const Checkout = () => {
  const { state, dispatch } = useCart();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    notes: ''
  });

  const updateQuantity = (id: string, newQuantity: number) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id, quantity: newQuantity }
    });
  };

  const removeItem = (id: string) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: id
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Mock order processing
    setTimeout(() => {
      dispatch({ type: 'CLEAR_CART' });
      toast({
        title: "Order placed successfully! 🌸",
        description: "Thank you for your purchase. You'll receive a confirmation email shortly.",
      });
      setIsProcessing(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        postalCode: '',
        country: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        notes: ''
      });
    }, 2000);
  };

  const shipping = state.total > 25 ? 0 : 5.99;
  const finalTotal = state.total + shipping;

  if (state.items.length === 0) {

    return (
      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-card rounded-lg p-12 shadow-soft">
              <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-foreground mb-4">Your Cart is Empty</h1>
              <p className="text-muted-foreground mb-6">
                Looks like you haven't added any beautiful flowers to your cart yet.
              </p>
              <Link
                  to="/products">
                <Button variant="floral" size="lg">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
          Checkout
        </h1>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Cart Items */}
          <div className="bg-card rounded-lg p-6 shadow-soft">
            <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" />
              Your Order ({state.items.length} items)
            </h2>

            <div className="space-y-4">
              {state.items.map(item => (
                <div key={item.id} className="flex items-center gap-4 p-4 border border-sage-light rounded-lg">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground">{item.name}</h3>
                    <p className="text-primary font-semibold">${item.price}</p>
                  </div>
                 <div className='flex items-center flex-wrap justify-center gap-2'>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="h-8 w-8 p-0"
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="h-8 w-8 p-0"
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeItem(item.id)}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                 </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="mt-6 pt-6 border-t border-sage-light">
              <div className="space-y-2">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal:</span>
                  <span>${state.total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping:</span>
                  <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-lg font-semibold text-foreground pt-2 border-t border-sage-light">
                  <span>Total:</span>
                  <span className="text-primary">${finalTotal.toFixed(2)}</span>
                </div>
              </div>
              {state.total < 25 && (
                <p className="text-sm text-muted-foreground mt-2">
                  Add ${(25 - state.total).toFixed(2)} more for free shipping!
                </p>
              )}
            </div>
          </div>

          {/* Checkout Form */}
          <div className="bg-card rounded-lg p-6 shadow-soft">
            <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Shipping & Payment
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Shipping Address */}
              <div>
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="postalCode">Postal Code</Label>
                  <Input
                    id="postalCode"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="country">Country</Label>
                  <Input
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {/* Payment Information */}
              <div className="pt-4 border-t border-sage-light">
                <h3 className="font-medium text-foreground mb-4">Payment Information (Mock)</h3>
                
                <div>
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    id="cardNumber"
                    name="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiryDate">Expiry Date</Label>
                    <Input
                      id="expiryDate"
                      name="expiryDate"
                      placeholder="MM/YY"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      name="cvv"
                      placeholder="123"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Special Notes */}
              <div>
                <Label htmlFor="notes">Special Instructions (Optional)</Label>
                <Textarea
                  id="notes"
                  name="notes"
                  placeholder="Any special delivery instructions..."
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={3}
                />
              </div>

              <Button 
                type="submit" 
                variant="floral" 
                size="lg" 
                className="w-full text-lg py-3"
                disabled={isProcessing}
              >
                {isProcessing ? 'Processing...' : `Place Order - $${finalTotal.toFixed(2)}`}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;