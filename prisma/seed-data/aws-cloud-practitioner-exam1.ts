export const awsCloudPractitionerExam1 = {
    title: 'AWS Cloud Practitioner - Practice Exam 1',
    description:
        'Đề thi thử AWS Cloud Practitioner CLF-C02. Bao gồm 35 câu hỏi về Cloud Concepts, Security, Technology và Billing & Pricing.',
    durationMinutes: 60,
    courseId: 1,
    questions: [
        {
            content:
                'Which AWS service allows you to run code without provisioning or managing servers?',
            explanation:
                'AWS Lambda lets you run code without provisioning or managing servers. You pay only for the compute time you consume. Lambda automatically scales your application by running code in response to each trigger.',
            answers: [
                { content: 'Amazon EC2', isCorrect: false },
                { content: 'AWS Lambda', isCorrect: true },
                { content: 'Amazon ECS', isCorrect: false },
                { content: 'AWS Elastic Beanstalk', isCorrect: false },
            ],
        },
        {
            content:
                'What does Amazon S3 stand for?',
            explanation:
                'Amazon S3 stands for Simple Storage Service. It is an object storage service offering industry-leading scalability, data availability, security, and performance.',
            answers: [
                { content: 'Simple Storage Service', isCorrect: true },
                { content: 'Secure Storage System', isCorrect: false },
                { content: 'Simple Server Service', isCorrect: false },
                { content: 'Scalable Storage Solution', isCorrect: false },
            ],
        },
        {
            content:
                'Which of the following is a benefit of cloud computing?',
            explanation:
                'One of the six advantages of cloud computing is trading fixed expense (capital expense) for variable expense. Instead of having to invest heavily in data centers and servers before you know how you will use them, you can pay only when you consume computing resources.',
            answers: [
                { content: 'Trade variable expense for capital expense', isCorrect: false },
                { content: 'Trade capital expense for variable expense', isCorrect: true },
                { content: 'Increase time to market', isCorrect: false },
                { content: 'Decrease agility', isCorrect: false },
            ],
        },
        {
            content:
                'Which AWS service provides a fully managed NoSQL database?',
            explanation:
                'Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability.',
            answers: [
                { content: 'Amazon RDS', isCorrect: false },
                { content: 'Amazon Redshift', isCorrect: false },
                { content: 'Amazon DynamoDB', isCorrect: true },
                { content: 'Amazon Aurora', isCorrect: false },
            ],
        },
        {
            content:
                'What is the AWS shared responsibility model?',
            explanation:
                'The AWS shared responsibility model defines that AWS manages security OF the cloud (hardware, software, networking, and facilities), while customers are responsible for security IN the cloud (customer data, platform, applications, identity and access management).',
            answers: [
                { content: 'AWS is responsible for all security', isCorrect: false },
                { content: 'Customers are responsible for all security', isCorrect: false },
                {
                    content:
                        'AWS manages security of the cloud, customers manage security in the cloud',
                    isCorrect: true,
                },
                {
                    content: 'Security responsibilities are randomly assigned',
                    isCorrect: false,
                },
            ],
        },
        {
            content:
                'Which AWS service is used to manage user access and encryption keys?',
            explanation:
                'AWS Identity and Access Management (IAM) enables you to manage access to AWS services and resources securely. IAM allows you to create and manage AWS users and groups, and use permissions to allow and deny their access to AWS resources.',
            answers: [
                { content: 'Amazon GuardDuty', isCorrect: false },
                { content: 'AWS IAM', isCorrect: true },
                { content: 'AWS Shield', isCorrect: false },
                { content: 'Amazon Inspector', isCorrect: false },
            ],
        },
        {
            content:
                'Which of the following best describes an AWS Region?',
            explanation:
                'An AWS Region is a physical location around the world where Amazon clusters data centers. Each Region consists of multiple, isolated, and physically separate Availability Zones within a geographic area.',
            answers: [
                { content: 'A single data center', isCorrect: false },
                {
                    content:
                        'A geographical area consisting of two or more Availability Zones',
                    isCorrect: true,
                },
                { content: 'A content delivery network endpoint', isCorrect: false },
                { content: 'A virtual private cloud', isCorrect: false },
            ],
        },
        {
            content:
                'What is the purpose of Amazon CloudFront?',
            explanation:
                'Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency and high transfer speeds.',
            answers: [
                { content: 'Manage DNS records', isCorrect: false },
                { content: 'Provide a content delivery network (CDN)', isCorrect: true },
                { content: 'Monitor application performance', isCorrect: false },
                { content: 'Manage container orchestration', isCorrect: false },
            ],
        },
        {
            content:
                'Which pricing model allows you to pay for compute capacity by the hour or second with no long-term commitments?',
            explanation:
                'On-Demand Instances let you pay for compute capacity by the hour or second (minimum of 60 seconds) with no long-term commitments. This frees you from the costs and complexities of planning, purchasing, and maintaining hardware.',
            answers: [
                { content: 'Reserved Instances', isCorrect: false },
                { content: 'Spot Instances', isCorrect: false },
                { content: 'On-Demand Instances', isCorrect: true },
                { content: 'Dedicated Hosts', isCorrect: false },
            ],
        },
        {
            content:
                'Which AWS service can be used to set up a virtual private cloud?',
            explanation:
                'Amazon VPC (Virtual Private Cloud) lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define.',
            answers: [
                { content: 'AWS Direct Connect', isCorrect: false },
                { content: 'Amazon VPC', isCorrect: true },
                { content: 'Amazon Route 53', isCorrect: false },
                { content: 'AWS CloudFormation', isCorrect: false },
            ],
        },
        {
            content:
                'Which AWS service provides a managed Kubernetes service?',
            explanation:
                'Amazon EKS (Elastic Kubernetes Service) is a fully managed Kubernetes service that makes it easy to deploy, manage, and scale containerized applications using Kubernetes on AWS.',
            answers: [
                { content: 'Amazon ECS', isCorrect: false },
                { content: 'Amazon EKS', isCorrect: true },
                { content: 'AWS Fargate', isCorrect: false },
                { content: 'AWS App Runner', isCorrect: false },
            ],
        },
        {
            content:
                'What is AWS CloudFormation used for?',
            explanation:
                'AWS CloudFormation provides a common language for you to model and provision AWS and third-party application resources in your cloud environment. It allows you to use Infrastructure as Code (IaC) to automate resource deployment.',
            answers: [
                {
                    content: 'Infrastructure as Code to model and provision resources',
                    isCorrect: true,
                },
                { content: 'Monitoring application performance', isCorrect: false },
                { content: 'Managing user authentication', isCorrect: false },
                { content: 'Content delivery acceleration', isCorrect: false },
            ],
        },
        {
            content:
                'Which AWS support plan provides access to a Technical Account Manager (TAM)?',
            explanation:
                'The Enterprise Support plan includes a designated Technical Account Manager (TAM) who provides guidance, architectural review, and ongoing communication to help you plan, deploy, and optimize your AWS solutions.',
            answers: [
                { content: 'Basic', isCorrect: false },
                { content: 'Developer', isCorrect: false },
                { content: 'Business', isCorrect: false },
                { content: 'Enterprise', isCorrect: true },
            ],
        },
        {
            content:
                'Which service provides recommendations for cost optimization, security, fault tolerance, performance, and service limits?',
            explanation:
                'AWS Trusted Advisor is an online tool that provides real-time guidance to help you provision your resources following AWS best practices. It provides recommendations in five categories: cost optimization, security, fault tolerance, performance, and service limits.',
            answers: [
                { content: 'AWS Config', isCorrect: false },
                { content: 'AWS Trusted Advisor', isCorrect: true },
                { content: 'Amazon Inspector', isCorrect: false },
                { content: 'AWS CloudTrail', isCorrect: false },
            ],
        },
        {
            content:
                'What is the purpose of the AWS Well-Architected Framework?',
            explanation:
                'The AWS Well-Architected Framework helps cloud architects build secure, high-performing, resilient, and efficient infrastructure for their applications. It is built around six pillars: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability.',
            answers: [
                { content: 'To deploy applications faster', isCorrect: false },
                {
                    content:
                        'To help build secure, high-performing, resilient, and efficient infrastructure',
                    isCorrect: true,
                },
                { content: 'To automate code deployment', isCorrect: false },
                { content: 'To manage DNS records', isCorrect: false },
            ],
        },
        {
            content:
                'Which AWS service is designed to protect web applications from common web exploits?',
            explanation:
                'AWS WAF (Web Application Firewall) helps protect your web applications or APIs against common web exploits and bots that may affect availability, compromise security, or consume excessive resources.',
            answers: [
                { content: 'AWS Shield', isCorrect: false },
                { content: 'AWS WAF', isCorrect: true },
                { content: 'Amazon GuardDuty', isCorrect: false },
                { content: 'AWS Firewall Manager', isCorrect: false },
            ],
        },
        {
            content:
                'Which AWS service can be used to send notifications via email, SMS, or HTTP endpoints?',
            explanation:
                'Amazon SNS (Simple Notification Service) is a fully managed messaging service for both application-to-application (A2A) and application-to-person (A2P) communication. It can send messages via email, SMS, HTTP/HTTPS, and push notifications.',
            answers: [
                { content: 'Amazon SQS', isCorrect: false },
                { content: 'Amazon SNS', isCorrect: true },
                { content: 'Amazon SES', isCorrect: false },
                { content: 'AWS Step Functions', isCorrect: false },
            ],
        },
        {
            content:
                'What does Amazon RDS manage for you?',
            explanation:
                'Amazon RDS manages the setup, operation, and scaling of relational databases. This includes provisioning, patching, backup, recovery, failure detection, and repair. You can focus on your application while RDS handles routine database tasks.',
            answers: [
                { content: 'Container orchestration', isCorrect: false },
                {
                    content:
                        'Database provisioning, patching, backup, recovery, and scaling',
                    isCorrect: true,
                },
                { content: 'DNS management', isCorrect: false },
                { content: 'Load balancing', isCorrect: false },
            ],
        },
        {
            content:
                'Which of the following is a serverless compute service?',
            explanation:
                'AWS Fargate is a serverless, pay-as-you-go compute engine that lets you focus on building applications without managing servers. AWS Fargate is compatible with both Amazon ECS and Amazon EKS.',
            answers: [
                { content: 'Amazon EC2', isCorrect: false },
                { content: 'AWS Fargate', isCorrect: true },
                { content: 'Amazon ECS', isCorrect: false },
                { content: 'AWS Outposts', isCorrect: false },
            ],
        },
        {
            content:
                'Which AWS service provides distributed denial of service (DDoS) protection?',
            explanation:
                'AWS Shield is a managed DDoS protection service that safeguards applications running on AWS. AWS Shield Standard is automatically included at no extra cost. AWS Shield Advanced provides additional detection and mitigation against large and sophisticated DDoS attacks.',
            answers: [
                { content: 'AWS WAF', isCorrect: false },
                { content: 'AWS Shield', isCorrect: true },
                { content: 'Amazon GuardDuty', isCorrect: false },
                { content: 'AWS Firewall Manager', isCorrect: false },
            ],
        },
        {
            content:
                'What is the purpose of AWS CloudTrail?',
            explanation:
                'AWS CloudTrail is a service that enables governance, compliance, operational auditing, and risk auditing of your AWS account. It records AWS API calls for your account and delivers log files to an Amazon S3 bucket.',
            answers: [
                { content: 'Monitor application performance', isCorrect: false },
                { content: 'Manage DNS records', isCorrect: false },
                {
                    content: 'Record AWS API calls for auditing and compliance',
                    isCorrect: true,
                },
                { content: 'Deploy infrastructure as code', isCorrect: false },
            ],
        },
        {
            content:
                'Which service allows you to run relational databases that are compatible with MySQL, PostgreSQL, and more in a serverless manner?',
            explanation:
                'Amazon Aurora Serverless is an on-demand, auto-scaling configuration for Amazon Aurora. It automatically starts up, shuts down, and scales capacity up or down based on your application needs. It supports MySQL and PostgreSQL compatibility.',
            answers: [
                { content: 'Amazon DynamoDB', isCorrect: false },
                { content: 'Amazon Aurora Serverless', isCorrect: true },
                { content: 'Amazon ElastiCache', isCorrect: false },
                { content: 'Amazon DocumentDB', isCorrect: false },
            ],
        },
        {
            content:
                'Which AWS service provides a managed message queue?',
            explanation:
                'Amazon SQS (Simple Queue Service) is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications.',
            answers: [
                { content: 'Amazon SNS', isCorrect: false },
                { content: 'Amazon SQS', isCorrect: true },
                { content: 'Amazon Kinesis', isCorrect: false },
                { content: 'AWS Step Functions', isCorrect: false },
            ],
        },
        {
            content:
                'What is Amazon Elastic Load Balancing (ELB) used for?',
            explanation:
                'Elastic Load Balancing automatically distributes incoming application traffic across multiple targets, such as Amazon EC2 instances, containers, IP addresses, and Lambda functions, in one or more Availability Zones.',
            answers: [
                {
                    content:
                        'Distribute incoming traffic across multiple targets',
                    isCorrect: true,
                },
                { content: 'Store objects in the cloud', isCorrect: false },
                { content: 'Manage DNS records', isCorrect: false },
                { content: 'Run serverless code', isCorrect: false },
            ],
        },
        {
            content:
                'Which AWS service is used for real-time monitoring of AWS resources and applications?',
            explanation:
                'Amazon CloudWatch is a monitoring and observability service that provides data and actionable insights to monitor applications, respond to system-wide performance changes, and optimize resource utilization.',
            answers: [
                { content: 'AWS CloudTrail', isCorrect: false },
                { content: 'Amazon CloudWatch', isCorrect: true },
                { content: 'AWS Config', isCorrect: false },
                { content: 'AWS X-Ray', isCorrect: false },
            ],
        },
        {
            content:
                'Which of the following is NOT one of the pillars of the AWS Well-Architected Framework?',
            explanation:
                'The six pillars of the AWS Well-Architected Framework are: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability. Automation is not a separate pillar.',
            answers: [
                { content: 'Security', isCorrect: false },
                { content: 'Reliability', isCorrect: false },
                { content: 'Automation', isCorrect: true },
                { content: 'Cost Optimization', isCorrect: false },
            ],
        },
        {
            content:
                'What is the benefit of using Amazon ElastiCache?',
            explanation:
                'Amazon ElastiCache is a fully managed in-memory data store and cache service. It improves the performance of web applications by allowing you to retrieve information from fast, managed, in-memory data stores, instead of relying entirely on slower disk-based databases.',
            answers: [
                { content: 'Long-term data archival', isCorrect: false },
                { content: 'In-memory caching to improve application performance', isCorrect: true },
                { content: 'Real-time data streaming', isCorrect: false },
                { content: 'Machine learning model training', isCorrect: false },
            ],
        },
        {
            content:
                'Which AWS service can automatically scale the number of EC2 instances based on demand?',
            explanation:
                'Amazon EC2 Auto Scaling helps you maintain application availability and allows you to automatically add or remove EC2 instances according to conditions you define. You can use Auto Scaling to ensure that you are running your desired number of instances.',
            answers: [
                { content: 'AWS Lambda', isCorrect: false },
                { content: 'Amazon EC2 Auto Scaling', isCorrect: true },
                { content: 'Elastic Load Balancing', isCorrect: false },
                { content: 'AWS CloudFormation', isCorrect: false },
            ],
        },
        {
            content:
                'What is the purpose of AWS Organizations?',
            explanation:
                'AWS Organizations helps you centrally manage and govern your environment as you grow and scale your AWS resources. You can create accounts, group them, and apply policies to those groups.',
            answers: [
                {
                    content: 'Centrally manage multiple AWS accounts',
                    isCorrect: true,
                },
                { content: 'Monitor application performance', isCorrect: false },
                { content: 'Deploy containers', isCorrect: false },
                { content: 'Provide CDN services', isCorrect: false },
            ],
        },
        {
            content:
                'Which AWS service offers a petabyte-scale data warehouse solution?',
            explanation:
                'Amazon Redshift is a fully managed, petabyte-scale data warehouse service in the cloud. You can start with just a few hundred gigabytes of data and scale to a petabyte or more.',
            answers: [
                { content: 'Amazon RDS', isCorrect: false },
                { content: 'Amazon DynamoDB', isCorrect: false },
                { content: 'Amazon Redshift', isCorrect: true },
                { content: 'Amazon ElastiCache', isCorrect: false },
            ],
        },
        {
            content:
                'What does the AWS Free Tier provide?',
            explanation:
                'The AWS Free Tier enables you to gain free, hands-on experience with the AWS platform, products, and services. It includes three types of offers: Always Free, 12 Months Free, and Trials.',
            answers: [
                { content: 'Unlimited free access to all AWS services', isCorrect: false },
                {
                    content:
                        'Free access to certain AWS services within specified usage limits',
                    isCorrect: true,
                },
                {
                    content: 'Free access to AWS only for educational institutions',
                    isCorrect: false,
                },
                { content: 'Free access to AWS for the first year only', isCorrect: false },
            ],
        },
        {
            content:
                'What is the purpose of Amazon Route 53?',
            explanation:
                'Amazon Route 53 is a highly available and scalable cloud DNS (Domain Name System) web service. It is designed to give developers and businesses a reliable way to route end users to Internet applications.',
            answers: [
                { content: 'Load balancing', isCorrect: false },
                { content: 'DNS web service', isCorrect: true },
                { content: 'Content delivery network', isCorrect: false },
                { content: 'Virtual private network', isCorrect: false },
            ],
        },
        {
            content:
                'Which service should you use to store session data for a web application with low latency requirements?',
            explanation:
                'Amazon ElastiCache provides a high-performance, scalable, and cost-effective caching solution. It is ideal for storing session data as it provides sub-millisecond latency for data retrieval.',
            answers: [
                { content: 'Amazon S3', isCorrect: false },
                { content: 'Amazon ElastiCache', isCorrect: true },
                { content: 'Amazon EBS', isCorrect: false },
                { content: 'Amazon Glacier', isCorrect: false },
            ],
        },
        {
            content:
                'Which type of cloud computing model provides the most control over the underlying infrastructure?',
            explanation:
                'Infrastructure as a Service (IaaS) provides the most control over IT resources. It gives you access to networking features, computers (virtual or on dedicated hardware), and data storage space.',
            answers: [
                { content: 'Software as a Service (SaaS)', isCorrect: false },
                { content: 'Platform as a Service (PaaS)', isCorrect: false },
                { content: 'Infrastructure as a Service (IaaS)', isCorrect: true },
                { content: 'Function as a Service (FaaS)', isCorrect: false },
            ],
        },
        {
            content:
                'Which AWS service helps you discover, classify, and protect sensitive data such as PII (Personally Identifiable Information)?',
            explanation:
                'Amazon Macie is a fully managed data security and data privacy service that uses machine learning and pattern matching to discover and protect your sensitive data in AWS, including PII.',
            answers: [
                { content: 'Amazon Inspector', isCorrect: false },
                { content: 'Amazon Macie', isCorrect: true },
                { content: 'AWS GuardDuty', isCorrect: false },
                { content: 'AWS Config', isCorrect: false },
            ],
        },
    ],
};
