import { Linkedin, Twitter, Youtube } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const quickLinks = [
    { label: "Courses", id: "courses" },
    { label: "About", id: "about" },
    { label: "Pricing", id: "pricing" },
    { label: "Contact", id: "contact" },
    { label: "Privacy Policy", id: "" }
  ];

  const socialLinks = [
    { 
      icon: Linkedin, 
      href: "#", 
      className: "w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors",
      testId: "link-linkedin"
    },
    { 
      icon: Twitter, 
      href: "#", 
      className: "w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-300 transition-colors",
      testId: "link-twitter"
    },
    { 
      icon: Youtube, 
      href: "#", 
      className: "w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors",
      testId: "link-youtube"
    }
  ];

  return (
    <footer className="bg-dark-900 border-t border-white/10 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="md:col-span-2">
            <Logo className="text-3xl font-bold mb-4" />
            <p className="text-gray-300 mb-6 text-lg italic">Empowering Careers in Cloud & DevOps</p>
            <p className="text-gray-400 max-w-md">
              Transform your career with industry-leading cloud and DevOps training. Join thousands of professionals who have accelerated their careers with us.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.id ? (
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-300 hover:text-blue-400 transition-colors text-left"
                      data-testid={`footer-link-${link.id}`}
                    >
                      {link.label}
                    </button>
                  ) : (
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                      data-testid="footer-link-privacy"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Social Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={social.className}
                    data-testid={social.testId}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Tech EduVate. All rights reserved. Built with passion for education and technology.</p>
        </div>
      </div>
    </footer>
  );
}
