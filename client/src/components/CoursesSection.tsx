import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function CoursesSection() {
  const [, setLocation] = useLocation();
  
  const courses = [
    {
      id: "devops-mastery",
      title: "DevOps Mastery",
      description: "Learn CI/CD, automation, Kubernetes, Docker, and modern pipeline workflows.",
      image: "https://logos-world.net/wp-content/uploads/2021/02/Docker-Logo.png",
      alt: "DevOps Docker and Kubernetes",
      badge: "FEATURED COURSE",
      badgeColor: "text-blue-400",
      dotColor: "bg-blue-400",
      techStack: ["Docker", "Kubernetes", "Jenkins", "GitLab"],
      route: "/courses/devops"
    },
    {
      id: "devsecops-essentials",
      title: "DevSecOps Essentials",
      description: "Secure your pipelines with best practices, SAST, DAST, IaC security.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1200px-Jenkins_logo.svg.png",
      alt: "DevSecOps Security Pipeline",
      badge: "SECURITY FOCUSED",
      badgeColor: "text-purple-400",
      dotColor: "bg-purple-400",
      techStack: ["SonarQube", "Snyk", "OWASP", "Terraform"],
      route: "/courses/devsecops"
    },
    {
      id: "aws-cloud-professional",
      title: "AWS Cloud Professional",
      description: "Hands-on labs with EC2, S3, Lambda, EKS, IAM, and networking.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png",
      alt: "AWS Cloud Services",
      badge: "AWS CERTIFIED",
      badgeColor: "text-orange-400",
      dotColor: "bg-orange-400",
      techStack: ["EC2", "S3", "Lambda", "EKS"],
      route: "/courses/aws"
    },
    {
      id: "microsoft-azure-expert",
      title: "Microsoft Azure Expert",
      description: "Master Azure DevOps, AKS, Functions, Security, and Cloud Architecture.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png",
      alt: "Microsoft Azure Cloud",
      badge: "MICROSOFT CERTIFIED",
      badgeColor: "text-blue-600",
      dotColor: "bg-blue-600",
      techStack: ["Azure DevOps", "AKS", "Functions", "ARM"],
      route: "/courses/azure"
    },
    {
      id: "google-cloud-platform",
      title: "Google Cloud Platform (GCP)",
      description: "Learn Compute Engine, BigQuery, Kubernetes, and AI integrations.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/1280px-Google_Cloud_logo.svg.png",
      alt: "Google Cloud Platform",
      badge: "GOOGLE CERTIFIED",
      badgeColor: "text-green-400",
      dotColor: "bg-green-400",
      techStack: ["GKE", "BigQuery", "Cloud Functions", "AI/ML"],
      route: "/courses/gcp"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-dark-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-blue-400">Featured Courses</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Master cutting-edge technologies with our comprehensive, hands-on training programs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className={`group card-hover bg-gradient-to-br from-dark-900 to-dark-800 rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:scale-105 hover:animate-glow cursor-pointer ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="relative overflow-hidden rounded-xl mb-6 bg-white/10 p-4">
                <img 
                  src={course.image} 
                  alt={course.alt}
                  className="w-full h-32 object-contain group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="flex items-center mb-4">
                <div className={`w-3 h-3 ${course.dotColor} rounded-full mr-3 animate-pulse group-hover:animate-ping`}></div>
                <span className={`${course.badgeColor} font-semibold text-sm tracking-wide group-hover:animate-pulse`}>{course.badge}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-300">{course.title}</h3>
              <p className="text-gray-300 mb-6">{course.description}</p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {course.techStack.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <Button 
                className="w-full btn-primary py-3 rounded-xl font-semibold group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300"
                onClick={() => setLocation(course.route)}
                data-testid={`button-learn-more-${course.id}`}
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
