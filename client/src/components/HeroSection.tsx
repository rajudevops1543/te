import { Button } from "@/components/ui/button";
import { useEffect } from "react";

interface Slide {
  id: string;
  title: string;
  subtitle: string;
  gradient: string;
  icon: string;
  description: string;
}

interface HeroSectionProps {
  slides: Slide[];
  currentSlide: number;
  setCurrentSlide: (slide: number) => void;
}

export default function HeroSection({ slides, currentSlide, setCurrentSlide }: HeroSectionProps) {

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentSlide, slides.length, setCurrentSlide]);

  const currentSlideData = slides[currentSlide];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${currentSlideData.gradient} opacity-10 transition-all duration-1000`}></div>
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900/90 to-dark-800/90"></div>
      
      {/* Enhanced Animated Particles */}
      <div className="particle w-4 h-4 top-20 left-20 animate-bounce" style={{ animationDelay: '0s' }}></div>
      <div className="particle w-6 h-6 top-40 right-32 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="particle w-3 h-3 top-60 left-1/4 animate-ping" style={{ animationDelay: '4s' }}></div>
      <div className="particle w-5 h-5 bottom-40 right-20 animate-spin" style={{ animationDelay: '6s' }}></div>
      <div className="particle w-8 h-8 top-1/3 left-10 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="particle w-4 h-4 bottom-1/3 right-10 animate-bounce" style={{ animationDelay: '3s' }}></div>
      
      <div className="container mx-auto px-6 text-center z-10">
        <div className="max-w-5xl mx-auto">
          {/* Slide Icon */}
          <div className="text-8xl mb-6 animate-bounce">
            {currentSlideData.icon}
          </div>
          
          {/* Main Title with slide transition */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 transform">
            <span className={`bg-gradient-to-r ${currentSlideData.gradient} bg-clip-text text-transparent animate-pulse`}>
              {currentSlideData.title}
            </span>
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-4 font-semibold transition-all duration-1000">
            {currentSlideData.subtitle}
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed transition-all duration-1000">
            {currentSlideData.description}
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              className="btn-primary px-10 py-4 rounded-full text-lg font-semibold transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl"
              onClick={() => scrollToSection('courses')}
              data-testid="button-explore-courses"
            >
              Explore Courses
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-white/30 hover:border-blue-400 px-10 py-4 rounded-full text-lg font-semibold transition-all hover:bg-white/10 bg-transparent text-white transform hover:scale-110 duration-300"
              onClick={() => scrollToSection('contact')}
              data-testid="button-get-started-hero"
            >
              Get Started
            </Button>
          </div>
          
          {/* Slide Indicators */}
          <div className="flex justify-center space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? `bg-gradient-to-r ${currentSlideData.gradient} scale-125` 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Enhanced Floating Shapes */}
      <div className={`absolute top-20 right-20 w-32 h-32 bg-gradient-to-r ${currentSlideData.gradient} opacity-20 rounded-full blur-xl animate-float transition-all duration-1000`}></div>
      <div className={`absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-r ${currentSlideData.gradient} opacity-15 rounded-full blur-2xl animate-float transition-all duration-1000`} style={{ animationDelay: '3s' }}></div>
      <div className={`absolute top-1/2 right-10 w-24 h-24 bg-gradient-to-r ${currentSlideData.gradient} opacity-25 rounded-full blur-lg animate-pulse transition-all duration-1000`}></div>
    </section>
  );
}
