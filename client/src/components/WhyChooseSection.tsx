import { BookOpen, Award, Clock, CheckCircle } from "lucide-react";

export default function WhyChooseSection() {
  const features = [
    {
      icon: BookOpen,
      title: "Expert Trainers",
      description: "Industry professionals with years of hands-on experience",
      color: "text-blue-400",
      bgColor: "bg-blue-500/20",
      borderColor: "border-blue-500/20"
    },
    {
      icon: Award,
      title: "Real-World Projects",
      description: "Hands-on labs and practical experience with actual scenarios",
      color: "text-purple-400",
      bgColor: "bg-purple-500/20",
      borderColor: "border-purple-500/20"
    },
    {
      icon: CheckCircle,
      title: "Certification Ready",
      description: "Comprehensive training aligned with industry certifications",
      color: "text-green-400",
      bgColor: "bg-green-500/20",
      borderColor: "border-green-500/20"
    },
    {
      icon: Clock,
      title: "Lifetime Access",
      description: "Unlimited access to all course materials and future updates",
      color: "text-orange-400",
      bgColor: "bg-orange-500/20",
      borderColor: "border-orange-500/20"
    }
  ];

  return (
    <section id="about" className="py-20 bg-dark-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-blue-400">Tech EduVate</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We're committed to delivering world-class training that transforms careers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className={`group text-center p-6 rounded-2xl bg-gradient-to-b from-${feature.bgColor} to-transparent border ${feature.borderColor} hover:scale-105 hover:shadow-2xl hover:shadow-${feature.color}/20 transition-all duration-500 cursor-pointer`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-float`}
                     style={{ animationDelay: `${index * 0.5}s` }}>
                  <IconComponent className={`w-8 h-8 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
