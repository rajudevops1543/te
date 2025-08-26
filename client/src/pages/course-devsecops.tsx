import CourseDetail from "@/components/CourseDetail";

export default function DevSecOpsCourse() {
  const courseData = {
    title: "DevSecOps Essentials",
    subtitle: "Secure your pipelines with best practices, SAST, DAST, IaC security",
    description: [
      "Learn to integrate security practices seamlessly into your DevOps workflows. This comprehensive course covers the essential skills needed to implement security at every stage of the software development lifecycle.",
      "Master the art of 'shifting security left' by incorporating automated security testing, vulnerability scanning, and compliance monitoring directly into your CI/CD pipelines.",
      "Gain hands-on experience with industry-leading security tools and learn to build secure, compliant, and resilient applications that can withstand modern cyber threats."
    ],
    duration: "8 weeks",
    price: "₹17,999",
    originalPrice: "₹22,999",
    outline: [
      {
        module: "DevSecOps Fundamentals",
        topics: [
          "Security in DevOps culture",
          "Threat modeling basics",
          "Security requirements in Agile",
          "Compliance and governance frameworks"
        ]
      },
      {
        module: "Secure Code Development",
        topics: [
          "Secure coding practices",
          "Code review for security",
          "IDE security plugins",
          "Pre-commit security hooks"
        ]
      },
      {
        module: "Static Application Security Testing (SAST)",
        topics: [
          "SAST tools and techniques",
          "SonarQube implementation",
          "Custom security rules",
          "False positive management"
        ]
      },
      {
        module: "Dynamic Application Security Testing (DAST)",
        topics: [
          "DAST methodology",
          "OWASP ZAP automation",
          "Web application scanning",
          "API security testing"
        ]
      },
      {
        module: "Container Security",
        topics: [
          "Docker security best practices",
          "Image vulnerability scanning",
          "Runtime security monitoring",
          "Kubernetes security policies"
        ]
      },
      {
        module: "Infrastructure as Code Security",
        topics: [
          "IaC security scanning",
          "Terraform security policies",
          "Cloud security configurations",
          "Compliance automation"
        ]
      },
      {
        module: "Security Monitoring & Incident Response",
        topics: [
          "Security event monitoring",
          "Log analysis for threats",
          "Automated incident response",
          "Forensics and reporting"
        ]
      },
      {
        module: "DevSecOps Pipeline Implementation",
        topics: [
          "End-to-end secure pipeline",
          "Security gate integration",
          "Automated compliance reporting",
          "Security metrics and KPIs"
        ]
      }
    ],
    learningOutcomes: [
      "Implement comprehensive security scanning in CI/CD pipelines",
      "Master SAST and DAST tools and techniques",
      "Secure containerized applications and infrastructure",
      "Automate security compliance and reporting",
      "Design incident response workflows",
      "Perform security risk assessments",
      "Build security-first development culture",
      "Prepare for security certifications"
    ],
    gradient: "from-purple-600 to-pink-600",
    icon: "🔒",
    badge: "SECURITY FOCUSED",
    badgeColor: "text-purple-400",
    techStack: ["SonarQube", "Snyk", "OWASP", "Terraform"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1200px-Jenkins_logo.svg.png"
  };

  return <CourseDetail {...courseData} />;
}