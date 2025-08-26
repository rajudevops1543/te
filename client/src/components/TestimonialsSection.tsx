import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Michael Chen",
      title: "Senior DevOps Engineer at Google",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      alt: "Michael Chen - Senior DevOps Engineer",
      content: "Tech EduVate's DevOps course was a game-changer. The hands-on labs and real-world projects prepared me perfectly for my current role. Highly recommended!"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      title: "Cloud Architect at Microsoft",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      alt: "Sarah Johnson - Cloud Architect",
      content: "The Azure training exceeded my expectations. Expert instructors and comprehensive curriculum made all the difference in my career advancement."
    },
    {
      id: 3,
      name: "David Rodriguez",
      title: "DevSecOps Lead at AWS",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      alt: "David Rodriguez - DevSecOps Lead",
      content: "Outstanding DevSecOps program! The security-focused approach and practical exercises gave me the skills I needed to land my dream job."
    }
  ];

  return (
    <section className="py-20 bg-dark-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-blue-400">Students Say</span>
          </h2>
          <p className="text-xl text-gray-300">Real success stories from our graduates</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group bg-gradient-to-br from-dark-900 to-dark-800 rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:scale-105 card-hover"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.alt}
                  className="w-16 h-16 rounded-full object-cover mr-4 group-hover:scale-110 transition-transform duration-300 ring-2 ring-blue-500/20 group-hover:ring-blue-500/50"
                />
                <div>
                  <h4 className="font-bold text-lg group-hover:text-blue-400 transition-colors duration-300">{testimonial.name}</h4>
                  <p className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">{testimonial.title}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300 animate-pulse" 
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
              <p className="text-gray-300 italic group-hover:text-gray-200 transition-colors duration-300">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
