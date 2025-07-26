import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xleavopp");
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSubmit(e);
    
    if (state.succeeded) {
      toast({
        title: "Message sent successfully! 🌸",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }
  };

  if (state.succeeded) {
    return (
      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="p-12 shadow-floral">
              <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-foreground mb-4">
                Thank You!
              </h1>
              <p className="text-muted-foreground mb-6">
                Your message has been sent successfully. We'll get back to you within 24 hours.
              </p>
              <Button 
                variant="floral" 
                onClick={() => window.location.reload()}
              >
                Send Another Message
              </Button>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have questions about our flowers or need help with your order? 
            We'd love to hear from you and help make your floral dreams come true.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-card rounded-lg shadow-soft">
                  <div className="bg-primary/10 rounded-full p-3">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Email</h3>
                    <p className="text-muted-foreground">darejhamza@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-card rounded-lg shadow-soft">
                  <div className="bg-primary/10 rounded-full p-3">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Phone</h3>
                    <p className="text-muted-foreground">+49 176 60387683</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-card rounded-lg shadow-soft">
                  <div className="bg-primary/10 rounded-full p-3">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Visit Us</h3>
                    <p className="text-muted-foreground">
                      Germany, leipzig<br />
                      Seeburgstrasse 123
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-garden rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-4">Business Hours</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>10:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-6 shadow-floral">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Send us a Message
            </h2>

            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={state.submitting}
                  />
                  <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors}
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={state.submitting}
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={state.submitting}
                  />
                  <ValidationError 
                    prefix="Phone" 
                    field="phone"
                    errors={state.errors}
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    disabled={state.submitting}
                  />
                  <ValidationError 
                    prefix="Subject" 
                    field="subject"
                    errors={state.errors}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  placeholder="Tell us about your floral needs, special requests, or any questions you have..."
                  required
                  disabled={state.submitting}
                />
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                />
              </div>

              <Button 
                type="submit" 
                variant="floral" 
                size="lg" 
                className="w-full"
                disabled={state.submitting}
              >
                {state.submitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                We typically respond within 24 hours during business days.
              </p>
            </form>
          </Card>
        </div>

        {/* Setup Instructions */}
        {state.errors && Object.keys(state.errors).length > 0 && (
          <div className="max-w-4xl mx-auto mt-8">
            <Card className="p-6 bg-yellow-50 border-yellow-200">
              <h3 className="font-semibold text-yellow-800 mb-2">
                Setup Required
              </h3>
              <p className="text-yellow-700 text-sm">
                To use this contact form, you need to:
                <br />
                1. Sign up at <a href="https://formspree.io/" target="_blank" rel="noopener noreferrer" className="underline">formspree.io</a>
                <br />
                2. Create a new form and get your form ID
                <br />
                3. Replace "your-form-id" in the code with your actual Formspree form ID
              </p>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;