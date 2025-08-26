import CourseDetail from "@/components/CourseDetail";

export default function AzureCourse() {
  const courseData = {
    title: "Microsoft Azure Expert",
    subtitle: "Master Azure DevOps, AKS, Functions, Security, and Cloud Architecture",
    description: [
      "Master Microsoft Azure cloud platform with comprehensive training covering Azure services, DevOps practices, and cloud architecture. This course prepares you for Azure certifications and enterprise-level cloud implementations.",
      "Learn to build, deploy, and manage applications and infrastructure on Azure using industry best practices. Gain hands-on experience with Azure DevOps, Kubernetes, and serverless computing.",
      "Develop expertise in Azure security, governance, and compliance to design enterprise-ready cloud solutions that meet business requirements and regulatory standards."
    ],
    duration: "11 weeks",
    price: "₹21,999",
    originalPrice: "₹26,999",
    outline: [
      {
        module: "Azure Fundamentals",
        topics: [
          "Azure global infrastructure",
          "Resource groups and subscriptions",
          "Azure Portal and CLI",
          "Azure Resource Manager templates"
        ]
      },
      {
        module: "Compute Services",
        topics: [
          "Virtual Machines and Scale Sets",
          "App Services and Functions",
          "Container Instances and Registry",
          "Azure Batch computing"
        ]
      },
      {
        module: "Azure Kubernetes Service (AKS)",
        topics: [
          "AKS cluster creation and management",
          "Container orchestration",
          "Service mesh and ingress",
          "Monitoring and troubleshooting"
        ]
      },
      {
        module: "Azure DevOps",
        topics: [
          "Azure DevOps Services overview",
          "Build and release pipelines",
          "Test automation integration",
          "Artifacts and package management"
        ]
      },
      {
        module: "Storage and Databases",
        topics: [
          "Azure Storage accounts and tiers",
          "Azure SQL Database and Cosmos DB",
          "Data Lake and Analytics",
          "Backup and disaster recovery"
        ]
      },
      {
        module: "Networking",
        topics: [
          "Virtual Networks and subnets",
          "Application Gateway and Load Balancer",
          "ExpressRoute and VPN Gateway",
          "Azure DNS and Traffic Manager"
        ]
      },
      {
        module: "Security and Identity",
        topics: [
          "Azure Active Directory",
          "Key Vault and security policies",
          "Azure Security Center",
          "Compliance and governance"
        ]
      },
      {
        module: "Serverless Computing",
        topics: [
          "Azure Functions development",
          "Logic Apps workflows",
          "Event Grid and Service Bus",
          "Serverless architecture patterns"
        ]
      },
      {
        module: "Monitoring and Management",
        topics: [
          "Azure Monitor and Log Analytics",
          "Application Insights",
          "Automation and scripting",
          "Cost management and optimization"
        ]
      },
      {
        module: "Enterprise Integration",
        topics: [
          "Hybrid cloud scenarios",
          "Azure Arc management",
          "API Management",
          "Enterprise architecture patterns"
        ]
      }
    ],
    learningOutcomes: [
      "Design and implement Azure cloud solutions",
      "Master Azure DevOps for CI/CD pipelines",
      "Deploy and manage AKS clusters",
      "Implement Azure security and compliance",
      "Build serverless applications with Azure Functions",
      "Prepare for Azure certifications",
      "Optimize Azure costs and performance",
      "Integrate on-premises and cloud environments"
    ],
    gradient: "from-blue-500 to-blue-700",
    icon: "🌐",
    badge: "MICROSOFT CERTIFIED",
    badgeColor: "text-blue-600",
    techStack: ["Azure DevOps", "AKS", "Functions", "ARM"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png"
  };

  return <CourseDetail {...courseData} />;
}