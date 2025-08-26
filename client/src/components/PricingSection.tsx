import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function PricingSection() {
  const pricingPlans = [
    {
      id: "individual",
      title: "Individual Plans",
      price: "$299",
      period: "/course",
      features: [
        "Lifetime course access",
        "Hands-on labs & projects",
        "Certificate of completion",
        "Community access"
      ],
      buttonText: "Get Started",
      featured: false
    },
    {
      id: "corporate",
      title: "Corporate Training",
      price: "$2,499",
      period: "/team",
      features: [
        "Up to 20 team members",
        "Custom learning paths",
        "Dedicated support manager",
        "Progress analytics dashboard"
      ],
      buttonText: "Contact Sales",
      featured: true
    },
    {
      id: "custom",
      title: "Custom Learning Paths",
      price: "Custom",
      period: "Contact us",
      features: [
        "Tailored curriculum",
        "1-on-1 mentoring",
        "Flexible scheduling",
        "Enterprise integrations"
      ],
      buttonText: "Contact Us",
      featured: false
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-dark-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your <span className="text-blue-400">Learning Path</span>
          </h2>
          <p className="text-xl text-gray-300">Flexible pricing options to suit your needs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.id}
              className={`group rounded-2xl p-8 border relative transition-all duration-500 hover:scale-105 hover:shadow-2xl card-hover ${
                plan.featured
                  ? 'bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500/50 transform scale-105 animate-glow'
                  : 'bg-gradient-to-br from-dark-800 to-dark-900 border-white/10 hover:border-blue-500/30 hover:shadow-blue-500/20'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 px-4 py-1 rounded-full text-sm font-semibold">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-300">{plan.title}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-blue-400 group-hover:scale-110 transition-transform duration-300 inline-block">{plan.price}</span>
                <span className="text-gray-300 block text-sm group-hover:text-gray-200 transition-colors duration-300">{plan.period}</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                className={`w-full py-3 rounded-xl font-semibold ${
                  plan.featured
                    ? 'btn-primary'
                    : plan.id === 'custom'
                    ? 'border-2 border-blue-400 hover:bg-blue-400 hover:text-dark-900 bg-transparent'
                    : 'btn-primary'
                }`}
                variant={plan.id === 'custom' ? 'outline' : 'default'}
                onClick={scrollToContact}
                data-testid={`button-pricing-${plan.id}`}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
