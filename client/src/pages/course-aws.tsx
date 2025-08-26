import CourseDetail from "@/components/CourseDetail";

export default function AWSCourse() {
  const courseData = {
    title: "AWS Cloud Professional",
    subtitle: "Master EC2, S3, Lambda, EKS, IAM, and advanced AWS services",
    description: [
      "Become an AWS cloud expert with comprehensive hands-on training covering all major AWS services. This course is designed to prepare you for AWS certifications and real-world cloud architecture challenges.",
      "Learn to design, deploy, and manage scalable, highly available, and fault-tolerant systems on Amazon Web Services. Work with real AWS environments and solve practical cloud computing problems.",
      "Master advanced AWS services including serverless computing, container orchestration, and cloud security to build modern, cloud-native applications that scale globally."
    ],
    duration: "12 weeks",
    price: "₹22,999",
    originalPrice: "₹27,999",
    outline: [
      {
        module: "AWS Fundamentals",
        topics: [
          "AWS global infrastructure",
          "Account setup and billing",
          "AWS Management Console",
          "CLI and SDK configuration"
        ]
      },
      {
        module: "Compute Services",
        topics: [
          "EC2 instances and pricing models",
          "Auto Scaling Groups",
          "Elastic Load Balancing",
          "AWS Batch and EC2 Spot Instances"
        ]
      },
      {
        module: "Storage Services",
        topics: [
          "S3 buckets and storage classes",
          "EBS volumes and snapshots",
          "EFS file systems",
          "Storage Gateway and DataSync"
        ]
      },
      {
        module: "Serverless Computing",
        topics: [
          "Lambda functions and triggers",
          "API Gateway integration",
          "Step Functions workflows",
          "EventBridge and SQS"
        ]
      },
      {
        module: "Container Services",
        topics: [
          "ECS and Fargate",
          "EKS cluster management",
          "ECR container registry",
          "Container deployment strategies"
        ]
      },
      {
        module: "Networking & Security",
        topics: [
          "VPC design and configuration",
          "IAM roles and policies",
          "Security Groups and NACLs",
          "AWS WAF and Shield"
        ]
      },
      {
        module: "Database Services",
        topics: [
          "RDS and Aurora",
          "DynamoDB NoSQL",
          "ElastiCache",
          "Database migration strategies"
        ]
      },
      {
        module: "Monitoring & DevOps",
        topics: [
          "CloudWatch metrics and logs",
          "CloudFormation templates",
          "CodePipeline and CodeDeploy",
          "AWS Systems Manager"
        ]
      },
      {
        module: "Advanced Services",
        topics: [
          "Machine Learning services",
          "Data analytics with Athena",
          "Content delivery with CloudFront",
          "Disaster recovery planning"
        ]
      },
      {
        module: "Certification Preparation",
        topics: [
          "AWS certification paths",
          "Practice exams and mock tests",
          "Hands-on lab exercises",
          "Best practices review"
        ]
      }
    ],
    learningOutcomes: [
      "Design and deploy scalable AWS architectures",
      "Master core AWS services and their use cases",
      "Implement serverless and container-based solutions",
      "Configure advanced networking and security",
      "Optimize costs and performance in AWS",
      "Prepare for AWS Solution Architect certification",
      "Build CI/CD pipelines with AWS services",
      "Implement monitoring and disaster recovery"
    ],
    gradient: "from-orange-500 to-yellow-500",
    icon: "☁️",
    badge: "AWS CERTIFIED",
    badgeColor: "text-orange-400",
    techStack: ["EC2", "S3", "Lambda", "EKS"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png"
  };

  return <CourseDetail {...courseData} />;
}