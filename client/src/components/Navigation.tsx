import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { useLocation } from "wouter";

interface NavigationProps {
  currentSlideGradient?: string;
}

export default function Navigation({ currentSlideGradient }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [, setLocation] = useLocation();

  const scrollToSection = (sectionId: string) => {
    // If we're on a course detail page, navigate to home first
    if (window.location.pathname !== '/') {
      setLocation(`/#${sectionId}`);
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Courses", id: "courses" },
    { label: "About", id: "about" },
    { label: "Pricing", id: "pricing" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-dark-900/90 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo gradient={currentSlideGradient} />
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-blue-400 transition-colors"
                data-testid={`nav-link-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          {/* CTA Button */}
          <Button 
            className="hidden md:block btn-primary px-6 py-2 rounded-full font-medium"
            onClick={() => scrollToSection('contact')}
            data-testid="button-get-started-nav"
          >
            Get Started
          </Button>
          
          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" data-testid="button-mobile-menu">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-dark-900 border-white/10">
              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left hover:text-blue-400 transition-colors text-lg"
                    data-testid={`nav-link-mobile-${item.id}`}
                  >
                    {item.label}
                  </button>
                ))}
                <Button 
                  className="btn-primary mt-4"
                  onClick={() => scrollToSection('contact')}
                  data-testid="button-get-started-mobile"
                >
                  Get Started
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
