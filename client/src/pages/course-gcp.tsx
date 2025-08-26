import CourseDetail from "@/components/CourseDetail";

export default function GCPCourse() {
  const courseData = {
    title: "Google Cloud Platform (GCP)",
    subtitle: "Master GKE, BigQuery, AI/ML Integration, and Google Cloud Architecture",
    description: [
      "Master Google Cloud Platform with comprehensive training covering compute, storage, networking, and advanced services like AI/ML and data analytics. This course prepares you for Google Cloud certifications.",
      "Learn to leverage Google's cutting-edge cloud technologies including Kubernetes Engine, BigQuery, and AI/ML services to build modern, scalable applications with global reach.",
      "Develop expertise in Google Cloud's unique services like Anthos, Vertex AI, and serverless computing to create innovative solutions that take advantage of Google's infrastructure and AI capabilities."
    ],
    duration: "10 weeks",
    price: "₹20,999",
    originalPrice: "₹25,999",
    outline: [
      {
        module: "GCP Fundamentals",
        topics: [
          "Google Cloud global infrastructure",
          "Projects and billing management",
          "Cloud Console and SDK",
          "Identity and Access Management"
        ]
      },
      {
        module: "Compute Services",
        topics: [
          "Compute Engine instances",
          "App Engine applications",
          "Cloud Functions serverless",
          "Cloud Run containers"
        ]
      },
      {
        module: "Google Kubernetes Engine (GKE)",
        topics: [
          "GKE cluster management",
          "Autopilot vs Standard mode",
          "Workload deployment",
          "Service mesh with Istio"
        ]
      },
      {
        module: "Storage and Databases",
        topics: [
          "Cloud Storage buckets",
          "Cloud SQL and Spanner",
          "Firestore NoSQL database",
          "Persistent disks and filestore"
        ]
      },
      {
        module: "BigQuery and Data Analytics",
        topics: [
          "BigQuery fundamentals",
          "SQL queries and optimization",
          "Data pipeline with Dataflow",
          "Looker and Data Studio"
        ]
      },
      {
        module: "Machine Learning and AI",
        topics: [
          "Vertex AI platform",
          "AutoML services",
          "ML APIs and custom models",
          "AI Platform training and deployment"
        ]
      },
      {
        module: "Networking",
        topics: [
          "VPC networks and subnets",
          "Cloud Load Balancing",
          "Cloud CDN and DNS",
          "Hybrid connectivity"
        ]
      },
      {
        module: "DevOps and CI/CD",
        topics: [
          "Cloud Build pipelines",
          "Container Registry and Artifact Registry",
          "Cloud Deploy and operations",
          "Infrastructure as Code with Terraform"
        ]
      },
      {
        module: "Security and Compliance",
        topics: [
          "Cloud IAM best practices",
          "Security Command Center",
          "Data encryption and key management",
          "Compliance and audit tools"
        ]
      },
      {
        module: "Advanced Services",
        topics: [
          "Anthos hybrid and multi-cloud",
          "Pub/Sub messaging",
          "Cloud Scheduler and Tasks",
          "Firebase integration"
        ]
      }
    ],
    learningOutcomes: [
      "Design and implement GCP cloud architectures",
      "Master GKE for container orchestration",
      "Build data analytics pipelines with BigQuery",
      "Implement AI/ML solutions with Vertex AI",
      "Configure advanced networking and security",
      "Prepare for Google Cloud certifications",
      "Optimize costs and performance in GCP",
      "Build serverless and event-driven applications"
    ],
    gradient: "from-green-500 to-emerald-600",
    icon: "🧠",
    badge: "GOOGLE CERTIFIED",
    badgeColor: "text-green-400",
    techStack: ["GKE", "BigQuery", "Cloud Functions", "AI/ML"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/1280px-Google_Cloud_logo.svg.png"
  };

  return <CourseDetail {...courseData} />;
}