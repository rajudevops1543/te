import { Button } from "@/components/ui/button";

export default function CTASection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-20 gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Kickstart Your Cloud Journey{" "}
          <span className="text-blue-400">Today!</span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Join thousands of professionals who have accelerated their careers with our industry-leading training programs
        </p>
        <Button 
          className="btn-primary px-12 py-4 text-xl font-bold rounded-full transform hover:scale-105 transition-all"
          onClick={scrollToContact}
          data-testid="button-enroll-now"
        >
          Enroll Now
        </Button>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/30 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500/30 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
}
