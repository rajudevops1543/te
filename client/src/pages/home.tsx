import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Handle hash navigation from course detail pages
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  const slides = [
    {
      id: "devops",
      title: "Master DevOps Excellence",
      subtitle: "CI/CD, Docker, Kubernetes & Automation",
      gradient: "from-blue-600 to-cyan-500",
      icon: "🚀",
      description: "Transform your deployment workflows with cutting-edge DevOps practices"
    },
    {
      id: "aws",
      title: "AWS Cloud Mastery",
      subtitle: "EC2, S3, Lambda & Advanced Services",
      gradient: "from-orange-500 to-yellow-500",
      icon: "☁️",
      description: "Become an AWS expert with hands-on cloud architecture training"
    },
    {
      id: "azure",
      title: "Microsoft Azure Expert",
      subtitle: "Azure DevOps, AKS & Cloud Architecture",
      gradient: "from-blue-500 to-blue-700",
      icon: "🌐",
      description: "Master Azure cloud solutions and enterprise-grade deployments"
    },
    {
      id: "gcp",
      title: "Google Cloud Platform",
      subtitle: "GKE, BigQuery & AI/ML Integration",
      gradient: "from-green-500 to-emerald-600",
      icon: "🧠",
      description: "Leverage Google's powerful cloud and AI capabilities"
    },
    {
      id: "devsecops",
      title: "DevSecOps Security",
      subtitle: "SAST, DAST & Pipeline Security",
      gradient: "from-purple-600 to-pink-600",
      icon: "🔒",
      description: "Secure your development lifecycle with advanced security practices"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-dark-900 text-white overflow-x-hidden">
      <Navigation currentSlideGradient={slides[currentSlide].gradient} />
      <main>
        <HeroSection 
          slides={slides}
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
        />
        <CoursesSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      
      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-primary hover:bg-primary-600 rounded-full p-0 z-40 transition-all duration-300 ${
          showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        data-testid="button-scroll-to-top"
      >
        <ArrowUp className="w-6 h-6" />
      </Button>
    </div>
  );
}
