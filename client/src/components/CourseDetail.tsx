import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CheckCircle, Clock, DollarSign, Award, Users, CreditCard, X } from "lucide-react";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface CourseDetailProps {
  title: string;
  subtitle: string;
  description: string[];
  duration: string;
  price: string;
  originalPrice?: string;
  outline: { module: string; topics: string[] }[];
  learningOutcomes: string[];
  gradient: string;
  icon: string;
  badge: string;
  badgeColor: string;
  techStack: string[];
  image: string;
}

export default function CourseDetail({
  title,
  subtitle,
  description,
  duration,
  price,
  originalPrice,
  outline,
  learningOutcomes,
  gradient,
  icon,
  badge,
  badgeColor,
  techStack,
  image
}: CourseDetailProps) {
  const [enrollForm, setEnrollForm] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const [paymentModal, setPaymentModal] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState("");
  const [paymentForm, setPaymentForm] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
    email: "",
    billingAddress: ""
  });

  const handleInputChange = (field: keyof typeof enrollForm, value: string) => {
    setEnrollForm(prev => ({ ...prev, [field]: value }));
  };

  const handlePaymentInputChange = (field: keyof typeof paymentForm, value: string) => {
    setPaymentForm(prev => ({ ...prev, [field]: value }));
  };

  const handleEnrollNow = () => {
    setPaymentModal(true);
  };

  const handlePaymentSubmit = () => {
    console.log("Processing payment:", { selectedPayment, paymentForm, enrollForm });
    setPaymentModal(false);
    // Reset forms
    setPaymentForm({
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      cardName: "",
      email: "",
      billingAddress: ""
    });
  };

  return (
    <div className="min-h-screen bg-dark-900 text-white overflow-x-hidden">
      <Navigation currentSlideGradient={gradient} />
      
      {/* Hero Section with Enhanced Animations */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10`}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900/90 to-dark-800/90"></div>
        
        {/* Enhanced Animated Particles */}
        <div className="particle w-4 h-4 top-20 left-20 animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="particle w-6 h-6 top-40 right-32 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="particle w-3 h-3 top-60 left-1/4 animate-ping" style={{ animationDelay: '4s' }}></div>
        <div className="particle w-5 h-5 bottom-40 right-20 animate-spin" style={{ animationDelay: '6s' }}></div>
        <div className="particle w-8 h-8 top-1/3 left-10 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="particle w-4 h-4 bottom-1/3 right-10 animate-bounce" style={{ animationDelay: '3s' }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6 animate-bounce">{icon}</div>
            <div className="flex items-center justify-center mb-4">
              <span className={`${badgeColor} font-semibold text-sm tracking-wide px-3 py-1 bg-white/10 rounded-full animate-pulse`}>
                {badge}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent animate-pulse`}>
                {title}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 transition-all duration-1000">{subtitle}</p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {techStack.map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full font-medium border border-blue-500/30 transform hover:scale-110 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Enhanced Floating Shapes */}
        <div className={`absolute top-20 right-20 w-32 h-32 bg-gradient-to-r ${gradient} opacity-20 rounded-full blur-xl animate-float transition-all duration-1000`}></div>
        <div className={`absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-r ${gradient} opacity-15 rounded-full blur-2xl animate-float transition-all duration-1000`} style={{ animationDelay: '3s' }}></div>
        <div className={`absolute top-1/2 right-10 w-24 h-24 bg-gradient-to-r ${gradient} opacity-25 rounded-full blur-lg animate-pulse transition-all duration-1000`}></div>
      </section>

      {/* Course Overview */}
      <section className="py-16 bg-dark-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About This Course</h2>
              {description.map((paragraph, index) => (
                <p key={index} className="text-gray-300 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="bg-white/10 p-4 rounded-2xl">
              <img 
                src={image}
                alt={title}
                className="w-full h-64 object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Outline */}
      <section className="py-16 bg-dark-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Course Outline</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {outline.map((module, index) => (
                <AccordionItem key={index} value={`module-${index}`} className="border border-white/10 rounded-xl">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline text-left">
                    <span className="font-semibold">Module {index + 1}: {module.module}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <ul className="space-y-2">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 bg-dark-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What You'll Learn</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {learningOutcomes.map((outcome, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Duration & Pricing */}
      <section className="py-16 bg-dark-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Course Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-dark-800 to-dark-900 border-white/10 text-center">
                <CardHeader>
                  <Clock className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <CardTitle className="text-white">Duration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-blue-400">{duration}</p>
                  <p className="text-gray-300">Self-paced learning</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-dark-800 to-dark-900 border-white/10 text-center">
                <CardHeader>
                  <Award className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <CardTitle className="text-white">Certificate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-green-400">Included</p>
                  <p className="text-gray-300">Industry recognized</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-dark-800 to-dark-900 border-white/10 text-center">
                <CardHeader>
                  <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <CardTitle className="text-white">Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-purple-400">24/7</p>
                  <p className="text-gray-300">Expert mentorship</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Section */}
      <section className="py-16 bg-dark-800">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Pricing Card */}
              <Card className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500/50 relative overflow-hidden">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 px-4 py-1 rounded-full text-sm font-semibold">
                    LIMITED TIME OFFER
                  </span>
                </div>
                <CardHeader className="text-center pt-8">
                  <DollarSign className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                  <CardTitle className="text-3xl font-bold">
                    <span className="text-4xl text-blue-400">{price}</span>
                    {originalPrice && (
                      <span className="text-xl text-gray-400 line-through ml-3">{originalPrice}</span>
                    )}
                  </CardTitle>
                  <p className="text-gray-300">One-time payment</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>Lifetime access to course materials</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>Industry certification included</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>Expert mentor support</span>
                  </div>
                </CardContent>
              </Card>

              {/* Enrollment Form */}
              <Card className="bg-gradient-to-br from-dark-900 to-dark-800 border-white/10">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Enroll Now</CardTitle>
                  <p className="text-center text-gray-300">Start your learning journey today!</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      type="text"
                      id="name"
                      value={enrollForm.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="bg-dark-800 border-white/20 text-white"
                      placeholder="Enter your full name"
                      data-testid="input-enroll-name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      type="email"
                      id="email"
                      value={enrollForm.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="bg-dark-800 border-white/20 text-white"
                      placeholder="Enter your email"
                      data-testid="input-enroll-email"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      type="tel"
                      id="phone"
                      value={enrollForm.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="bg-dark-800 border-white/20 text-white"
                      placeholder="Enter your phone number"
                      data-testid="input-enroll-phone"
                    />
                  </div>
                  <Button 
                    onClick={handleEnrollNow}
                    className="w-full btn-primary py-3 text-lg font-semibold"
                    data-testid="button-enroll-now"
                  >
                    Enroll Now - {price}
                  </Button>
                  <p className="text-sm text-gray-400 text-center">
                    Secure checkout with Stripe & PayPal
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA with Hero Section Background Animations */}
      <section className="py-16 bg-dark-900 relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10`}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900/90 to-dark-800/90"></div>
        
        {/* Enhanced Animated Particles */}
        <div className="particle w-4 h-4 top-20 left-20 animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="particle w-6 h-6 top-40 right-32 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="particle w-3 h-3 top-60 left-1/4 animate-ping" style={{ animationDelay: '4s' }}></div>
        <div className="particle w-5 h-5 bottom-40 right-20 animate-spin" style={{ animationDelay: '6s' }}></div>
        <div className="particle w-8 h-8 top-1/3 left-10 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="particle w-4 h-4 bottom-1/3 right-10 animate-bounce" style={{ animationDelay: '3s' }}></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Take the next step in your career with{" "}
            <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent animate-pulse`}>Tech EduVate!</span>
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join thousands of professionals who have transformed their careers with our industry-leading training programs.
          </p>
          <Button 
            onClick={handleEnrollNow}
            className="btn-primary px-12 py-4 text-xl font-bold rounded-full transform hover:scale-105 transition-all"
            data-testid="button-enroll-today"
          >
            Enroll Today
          </Button>
        </div>
        
        {/* Enhanced Floating Shapes */}
        <div className={`absolute top-20 right-20 w-32 h-32 bg-gradient-to-r ${gradient} opacity-20 rounded-full blur-xl animate-float transition-all duration-1000`}></div>
        <div className={`absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-r ${gradient} opacity-15 rounded-full blur-2xl animate-float transition-all duration-1000`} style={{ animationDelay: '3s' }}></div>
        <div className={`absolute top-1/2 right-10 w-24 h-24 bg-gradient-to-r ${gradient} opacity-25 rounded-full blur-lg animate-pulse transition-all duration-1000`}></div>
      </section>

      {/* Payment Modal */}
      <Dialog open={paymentModal} onOpenChange={setPaymentModal}>
        <DialogContent className="bg-dark-800 border-white/20 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center mb-4">
              Complete Your Enrollment
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            {/* Course Summary */}
            <Card className="bg-dark-900 border-white/10">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-gray-400 text-sm">{subtitle}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-400">{price}</div>
                    {originalPrice && (
                      <div className="text-gray-400 line-through text-sm">{originalPrice}</div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method Selection */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Select Payment Method</h3>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setSelectedPayment("card")}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    selectedPayment === "card"
                      ? "border-blue-500 bg-blue-500/20"
                      : "border-white/20 hover:border-white/40"
                  }`}
                  data-testid="button-payment-card"
                >
                  <CreditCard className="w-8 h-8 mx-auto mb-2" />
                  <div className="font-medium">Credit/Debit Card</div>
                </button>
                
                <button
                  onClick={() => setSelectedPayment("paypal")}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    selectedPayment === "paypal"
                      ? "border-blue-500 bg-blue-500/20"
                      : "border-white/20 hover:border-white/40"
                  }`}
                  data-testid="button-payment-paypal"
                >
                  <div className="w-8 h-8 mx-auto mb-2 bg-blue-600 rounded text-white flex items-center justify-center font-bold">PP</div>
                  <div className="font-medium">PayPal</div>
                </button>
                
                <button
                  onClick={() => setSelectedPayment("stripe")}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    selectedPayment === "stripe"
                      ? "border-blue-500 bg-blue-500/20"
                      : "border-white/20 hover:border-white/40"
                  }`}
                  data-testid="button-payment-stripe"
                >
                  <div className="w-8 h-8 mx-auto mb-2 bg-purple-600 rounded text-white flex items-center justify-center font-bold">S</div>
                  <div className="font-medium">Stripe</div>
                </button>
                
                <button
                  onClick={() => setSelectedPayment("bank")}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    selectedPayment === "bank"
                      ? "border-blue-500 bg-blue-500/20"
                      : "border-white/20 hover:border-white/40"
                  }`}
                  data-testid="button-payment-bank"
                >
                  <div className="w-8 h-8 mx-auto mb-2 bg-green-600 rounded text-white flex items-center justify-center font-bold">B</div>
                  <div className="font-medium">Bank Transfer</div>
                </button>
              </div>
            </div>

            {/* Payment Form */}
            {selectedPayment && (
              <Card className="bg-dark-900 border-white/10">
                <CardHeader>
                  <CardTitle className="text-lg">
                    {selectedPayment === "card" && "Card Information"}
                    {selectedPayment === "paypal" && "PayPal Payment"}
                    {selectedPayment === "stripe" && "Stripe Payment"}
                    {selectedPayment === "bank" && "Bank Transfer Details"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {selectedPayment === "card" && (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input
                            type="text"
                            id="cardNumber"
                            placeholder="1234 5678 9012 3456"
                            value={paymentForm.cardNumber}
                            onChange={(e) => handlePaymentInputChange("cardNumber", e.target.value)}
                            className="bg-dark-800 border-white/20 text-white"
                            data-testid="input-card-number"
                          />
                        </div>
                        <div>
                          <Label htmlFor="cardName">Cardholder Name</Label>
                          <Input
                            type="text"
                            id="cardName"
                            placeholder="John Doe"
                            value={paymentForm.cardName}
                            onChange={(e) => handlePaymentInputChange("cardName", e.target.value)}
                            className="bg-dark-800 border-white/20 text-white"
                            data-testid="input-card-name"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiryDate">Expiry Date</Label>
                          <Input
                            type="text"
                            id="expiryDate"
                            placeholder="MM/YY"
                            value={paymentForm.expiryDate}
                            onChange={(e) => handlePaymentInputChange("expiryDate", e.target.value)}
                            className="bg-dark-800 border-white/20 text-white"
                            data-testid="input-expiry"
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input
                            type="text"
                            id="cvv"
                            placeholder="123"
                            value={paymentForm.cvv}
                            onChange={(e) => handlePaymentInputChange("cvv", e.target.value)}
                            className="bg-dark-800 border-white/20 text-white"
                            data-testid="input-cvv"
                          />
                        </div>
                      </div>
                    </>
                  )}
                  
                  {selectedPayment === "paypal" && (
                    <div className="text-center py-8">
                      <div className="text-6xl mb-4">💳</div>
                      <p className="text-gray-300">You will be redirected to PayPal to complete your payment securely.</p>
                    </div>
                  )}
                  
                  {selectedPayment === "stripe" && (
                    <div className="text-center py-8">
                      <div className="text-6xl mb-4">🔒</div>
                      <p className="text-gray-300">Secure payment processing powered by Stripe.</p>
                    </div>
                  )}
                  
                  {selectedPayment === "bank" && (
                    <div className="space-y-4">
                      <div className="bg-dark-700 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Bank Details:</h4>
                        <p className="text-sm text-gray-300">Account: Tech EduVate Training</p>
                        <p className="text-sm text-gray-300">Account Number: 1234567890</p>
                        <p className="text-sm text-gray-300">Routing: 987654321</p>
                        <p className="text-sm text-gray-300">Reference: Your Email Address</p>
                      </div>
                    </div>
                  )}

                  <div>
                    <Label htmlFor="paymentEmail">Email Address</Label>
                    <Input
                      type="email"
                      id="paymentEmail"
                      placeholder="your-email@example.com"
                      value={paymentForm.email}
                      onChange={(e) => handlePaymentInputChange("email", e.target.value)}
                      className="bg-dark-800 border-white/20 text-white"
                      data-testid="input-payment-email"
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <Button
                variant="outline"
                onClick={() => setPaymentModal(false)}
                className="flex-1 border-white/30 text-white hover:bg-white/10"
                data-testid="button-cancel-payment"
              >
                Cancel
              </Button>
              <Button
                onClick={handlePaymentSubmit}
                disabled={!selectedPayment}
                className="flex-1 btn-primary"
                data-testid="button-complete-payment"
              >
                Complete Payment - {price}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}