import CourseDetail from "@/components/CourseDetail";

export default function DevOpsCourse() {
  const courseData = {
    title: "DevOps Mastery",
    subtitle: "Master CI/CD, Kubernetes, and Infrastructure as Code",
    description: [
      "Transform your career with comprehensive DevOps training that covers the entire software delivery lifecycle. Learn industry-standard tools and practices used by leading tech companies worldwide.",
      "This course combines theoretical knowledge with hands-on projects, ensuring you gain practical experience in real-world scenarios. You'll work with Docker containers, Kubernetes clusters, and implement CI/CD pipelines from scratch.",
      "By the end of this course, you'll be equipped with the skills to streamline development workflows, automate deployments, and manage scalable infrastructure efficiently."
    ],
    duration: "10 weeks",
    price: "₹19,999",
    originalPrice: "₹24,999",
    outline: [
      {
        module: "Introduction to DevOps",
        topics: [
          "DevOps principles and culture",
          "Traditional vs. DevOps approach",
          "DevOps tools ecosystem overview",
          "Setting up development environment"
        ]
      },
      {
        module: "Version Control with Git & GitHub",
        topics: [
          "Git fundamentals and workflows",
          "Branching strategies",
          "GitHub Actions introduction",
          "Collaborative development practices"
        ]
      },
      {
        module: "CI/CD Pipelines",
        topics: [
          "Jenkins installation and configuration",
          "GitLab CI/CD pipelines",
          "GitHub Actions workflows",
          "Automated testing integration",
          "Deployment strategies"
        ]
      },
      {
        module: "Containers & Docker",
        topics: [
          "Docker fundamentals",
          "Creating custom images",
          "Docker Compose for multi-container apps",
          "Container optimization techniques"
        ]
      },
      {
        module: "Kubernetes Fundamentals",
        topics: [
          "Kubernetes architecture",
          "Pods, Services, and Deployments",
          "ConfigMaps and Secrets",
          "Scaling and load balancing",
          "Monitoring and troubleshooting"
        ]
      },
      {
        module: "Monitoring with Prometheus & Grafana",
        topics: [
          "Infrastructure monitoring",
          "Application performance monitoring",
          "Creating custom dashboards",
          "Alerting and incident response"
        ]
      },
      {
        module: "Infrastructure as Code",
        topics: [
          "Terraform fundamentals",
          "Ansible automation",
          "Cloud infrastructure provisioning",
          "State management and best practices"
        ]
      },
      {
        module: "Capstone Project",
        topics: [
          "End-to-end DevOps pipeline",
          "Multi-environment deployment",
          "Production monitoring setup",
          "Project presentation and review"
        ]
      }
    ],
    learningOutcomes: [
      "Design and implement complete CI/CD pipelines",
      "Master Docker containerization and Kubernetes orchestration",
      "Automate infrastructure provisioning with Terraform",
      "Set up comprehensive monitoring and alerting systems",
      "Implement security best practices in DevOps workflows",
      "Troubleshoot and optimize deployment processes",
      "Prepare for DevOps certification exams",
      "Build production-ready DevOps solutions"
    ],
    gradient: "from-blue-600 to-cyan-500",
    icon: "🚀",
    badge: "FEATURED COURSE",
    badgeColor: "text-blue-400",
    techStack: ["Docker", "Kubernetes", "Jenkins", "GitLab"],
    image: "https://logos-world.net/wp-content/uploads/2021/02/Docker-Logo.png"
  };

  return <CourseDetail {...courseData} />;
}