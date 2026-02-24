export const awsCloudPractitionerExam2 = {
    title: 'AWS Cloud Practitioner - Practice Exam 2',
    description:
        'Đề thi thử AWS Cloud Practitioner CLF-C02 (Đề 2). Tập trung vào Billing, Pricing, Security và các dịch vụ quan trọng.',
    durationMinutes: 60,
    courseId: 1,
    questions: [
        {
            content:
                'Which AWS service enables you to consolidate billing across multiple AWS accounts?',
            explanation:
                'AWS Organizations provides consolidated billing, which enables you to receive a single bill for all accounts in your organization. This can help reduce costs through volume pricing discounts.',
            answers: [
                { content: 'AWS Budgets', isCorrect: false },
                { content: 'AWS Organizations', isCorrect: true },
                { content: 'AWS Cost Explorer', isCorrect: false },
                { content: 'AWS Billing Console', isCorrect: false },
            ],
        },
        {
            content:
                'Which of the following is a benefit of Amazon EC2 Reserved Instances?',
            explanation:
                'Reserved Instances provide a significant discount (up to 75%) compared to On-Demand instance pricing. In exchange, you commit to a specific instance type in a specific Region for a 1- or 3-year term.',
            answers: [
                { content: 'Automatic scaling based on demand', isCorrect: false },
                { content: 'Significant cost savings for predictable workloads', isCorrect: true },
                { content: 'No upfront payment required', isCorrect: false },
                { content: 'Ability to bid on unused capacity', isCorrect: false },
            ],
        },
        {
            content:
                'What is Amazon Glacier (S3 Glacier) primarily used for?',
            explanation:
                'Amazon S3 Glacier is a secure, durable, and extremely low-cost Amazon S3 cloud storage class for data archiving and long-term backup. It provides retrieval options from minutes to hours.',
            answers: [
                { content: 'Real-time data processing', isCorrect: false },
                { content: 'High-performance computing', isCorrect: false },
                { content: 'Long-term data archiving and backup', isCorrect: true },
                { content: 'In-memory caching', isCorrect: false },
            ],
        },
        {
            content:
                'Which AWS service helps you estimate the cost of your AWS usage?',
            explanation:
                'AWS Pricing Calculator lets you explore AWS services and create an estimate for the cost of your use cases on AWS. You can model your solutions before building them.',
            answers: [
                { content: 'AWS Cost Explorer', isCorrect: false },
                { content: 'AWS Pricing Calculator', isCorrect: true },
                { content: 'AWS Budgets', isCorrect: false },
                { content: 'AWS CloudWatch', isCorrect: false },
            ],
        },
        {
            content:
                'Which of the following is an advantage of deploying applications in multiple Availability Zones?',
            explanation:
                'Deploying applications across multiple Availability Zones provides high availability and fault tolerance. Each AZ is a physically separate location with independent power, networking, and connectivity, reducing the risk of a single point of failure.',
            answers: [
                { content: 'Lower costs', isCorrect: false },
                { content: 'Higher performance', isCorrect: false },
                { content: 'High availability and fault tolerance', isCorrect: true },
                { content: 'Easier deployment process', isCorrect: false },
            ],
        },
        {
            content:
                'Which AWS service allows you to create and manage cryptographic keys?',
            explanation:
                'AWS Key Management Service (KMS) makes it easy for you to create and manage cryptographic keys and control their use across a wide range of AWS services and in your applications.',
            answers: [
                { content: 'AWS IAM', isCorrect: false },
                { content: 'AWS KMS', isCorrect: true },
                { content: 'AWS Certificate Manager', isCorrect: false },
                { content: 'AWS Secrets Manager', isCorrect: false },
            ],
        },
        {
            content:
                'What is the primary purpose of Amazon VPC Security Groups?',
            explanation:
                'A security group acts as a virtual firewall for your instance to control inbound and outbound traffic. Security groups act at the instance level, not at the subnet level.',
            answers: [
                { content: 'Encrypt data at rest', isCorrect: false },
                { content: 'Control inbound and outbound traffic at the instance level', isCorrect: true },
                { content: 'Manage DNS records', isCorrect: false },
                { content: 'Monitor network performance', isCorrect: false },
            ],
        },
        {
            content:
                'Which AWS service provides a managed Apache Hadoop framework?',
            explanation:
                'Amazon EMR (Elastic MapReduce) is a cloud-based big data platform that allows you to process vast amounts of data using open-source tools such as Apache Hadoop, Apache Spark, Apache Hive, and others.',
            answers: [
                { content: 'Amazon Redshift', isCorrect: false },
                { content: 'Amazon EMR', isCorrect: true },
                { content: 'Amazon Athena', isCorrect: false },
                { content: 'AWS Glue', isCorrect: false },
            ],
        },
        {
            content:
                'Which of the following best describes the concept of elasticity in AWS?',
            explanation:
                'Elasticity is the ability to acquire resources as you need them and release resources when you no longer need them. In the cloud, you want to do this automatically.',
            answers: [
                { content: 'The ability to recover from failures', isCorrect: false },
                { content: 'The ability to acquire and release resources as needed', isCorrect: true },
                { content: 'The ability to secure data at rest', isCorrect: false },
                { content: 'The ability to access resources globally', isCorrect: false },
            ],
        },
        {
            content:
                'Which AWS service should you use to detect threats and unauthorized access in your AWS environment?',
            explanation:
                'Amazon GuardDuty is a threat detection service that continuously monitors for malicious activity and unauthorized behavior to protect your AWS accounts, workloads, and data stored in Amazon S3.',
            answers: [
                { content: 'AWS WAF', isCorrect: false },
                { content: 'Amazon GuardDuty', isCorrect: true },
                { content: 'AWS Shield', isCorrect: false },
                { content: 'Amazon Inspector', isCorrect: false },
            ],
        },
        {
            content:
                'Which of the following best describes AWS Elastic Beanstalk?',
            explanation:
                'AWS Elastic Beanstalk is a PaaS (Platform as a Service) that allows you to quickly deploy and manage applications in the AWS Cloud without having to learn about the infrastructure. You simply upload your application, and Elastic Beanstalk handles capacity provisioning, load balancing, scaling, and health monitoring.',
            answers: [
                { content: 'A serverless computing service', isCorrect: false },
                { content: 'A PaaS for deploying and managing applications', isCorrect: true },
                { content: 'A container orchestration service', isCorrect: false },
                { content: 'An infrastructure as code tool', isCorrect: false },
            ],
        },
        {
            content:
                'What is the purpose of AWS Config?',
            explanation:
                'AWS Config is a service that enables you to assess, audit, and evaluate the configurations of your AWS resources. It continuously monitors and records your AWS resource configurations and allows you to automate the evaluation of recorded configurations against desired configurations.',
            answers: [
                { content: 'Deploy infrastructure as code', isCorrect: false },
                { content: 'Assess, audit, and evaluate resource configurations', isCorrect: true },
                { content: 'Monitor application performance', isCorrect: false },
                { content: 'Manage network access control', isCorrect: false },
            ],
        },
        {
            content:
                'Which of the following is an example of a horizontal scaling approach?',
            explanation:
                'Horizontal scaling (scaling out) means adding more instances to handle increased load, rather than increasing the size of a single instance (vertical scaling/scaling up).',
            answers: [
                { content: 'Upgrading an instance from t2.micro to t2.large', isCorrect: false },
                { content: 'Adding more EC2 instances behind a load balancer', isCorrect: true },
                { content: 'Adding more memory to an existing instance', isCorrect: false },
                { content: 'Upgrading to a faster processor', isCorrect: false },
            ],
        },
        {
            content:
                'Which AWS service can be used to deploy and manage Docker containers?',
            explanation:
                'Amazon ECS (Elastic Container Service) is a fully managed container orchestration service that helps you easily deploy, manage, and scale containerized applications using Docker.',
            answers: [
                { content: 'AWS Lambda', isCorrect: false },
                { content: 'Amazon ECS', isCorrect: true },
                { content: 'Amazon EC2', isCorrect: false },
                { content: 'AWS Elastic Beanstalk', isCorrect: false },
            ],
        },
        {
            content:
                'What is the maximum duration of a Spot Instance interruption notice?',
            explanation:
                'Amazon EC2 sends a Spot Instance interruption notice two minutes before it interrupts your Spot Instance. The notice gives you time to save your work and gracefully shut down your application.',
            answers: [
                { content: '30 seconds', isCorrect: false },
                { content: '2 minutes', isCorrect: true },
                { content: '5 minutes', isCorrect: false },
                { content: '10 minutes', isCorrect: false },
            ],
        },
        {
            content:
                'Which AWS service provides a way to transfer large amounts of data into and out of AWS using physical storage devices?',
            explanation:
                'AWS Snowball is a petabyte-scale data transport solution that uses secure appliances to transfer large amounts of data into and out of the AWS Cloud. Using Snowball addresses common challenges with large-scale data transfers.',
            answers: [
                { content: 'AWS Direct Connect', isCorrect: false },
                { content: 'AWS Snowball', isCorrect: true },
                { content: 'AWS Storage Gateway', isCorrect: false },
                { content: 'Amazon S3 Transfer Acceleration', isCorrect: false },
            ],
        },
        {
            content:
                'What is the AWS Marketplace?',
            explanation:
                'AWS Marketplace is a digital catalog with thousands of software listings from independent software vendors that make it easy to find, test, buy, and deploy software that runs on AWS.',
            answers: [
                { content: 'A service for managing AWS accounts', isCorrect: false },
                { content: 'A digital catalog for finding and buying third-party software', isCorrect: true },
                { content: 'A tool for monitoring AWS costs', isCorrect: false },
                { content: 'A deployment management service', isCorrect: false },
            ],
        },
        {
            content:
                'Which AWS service enables you to analyze and visualize your AWS cost and usage data?',
            explanation:
                'AWS Cost Explorer is a tool that enables you to view and analyze your costs and usage. You can explore your usage and costs using the main graph, the Cost Explorer cost and usage reports, or the Cost Explorer RI reports.',
            answers: [
                { content: 'AWS Budgets', isCorrect: false },
                { content: 'AWS Cost Explorer', isCorrect: true },
                { content: 'AWS Pricing Calculator', isCorrect: false },
                { content: 'AWS CloudWatch', isCorrect: false },
            ],
        },
        {
            content:
                'Which of the following is a characteristic of cloud computing?',
            explanation:
                'Resource pooling is one of the five essential characteristics of cloud computing as defined by NIST. The provider\'s computing resources are pooled to serve multiple consumers using a multi-tenant model.',
            answers: [
                { content: 'Fixed capacity planning', isCorrect: false },
                { content: 'Resource pooling', isCorrect: true },
                { content: 'Manual scaling', isCorrect: false },
                { content: 'Single-tenant infrastructure', isCorrect: false },
            ],
        },
        {
            content:
                'Which service helps you achieve compliance by providing automated compliance checks against AWS best practices?',
            explanation:
                'AWS Security Hub gives you a comprehensive view of your security state in AWS and helps you check your environment against security industry standards and best practices, including automated compliance checks.',
            answers: [
                { content: 'AWS Artifact', isCorrect: false },
                { content: 'AWS Security Hub', isCorrect: true },
                { content: 'AWS Config', isCorrect: false },
                { content: 'Amazon Inspector', isCorrect: false },
            ],
        },
        {
            content:
                'What is Amazon Athena used for?',
            explanation:
                'Amazon Athena is an interactive query service that makes it easy to analyze data in Amazon S3 using standard SQL. Athena is serverless, so there is no infrastructure to manage.',
            answers: [
                { content: 'Managing relational databases', isCorrect: false },
                { content: 'Querying data in S3 using SQL', isCorrect: true },
                { content: 'Real-time stream processing', isCorrect: false },
                { content: 'Container orchestration', isCorrect: false },
            ],
        },
        {
            content:
                'Which AWS service provides a fully managed ETL (Extract, Transform, Load) service?',
            explanation:
                'AWS Glue is a fully managed ETL service that makes it easy to prepare and load data for analytics. You can create and run an ETL job with a few clicks in the AWS Management Console.',
            answers: [
                { content: 'Amazon Kinesis', isCorrect: false },
                { content: 'AWS Glue', isCorrect: true },
                { content: 'Amazon EMR', isCorrect: false },
                { content: 'AWS Data Pipeline', isCorrect: false },
            ],
        },
        {
            content:
                'Which AWS service is used for DNS-based service discovery?',
            explanation:
                'AWS Cloud Map is a cloud resource discovery service. It allows you to define custom names for your application resources, and it maintains the updated location of these dynamically changing resources.',
            answers: [
                { content: 'Amazon Route 53', isCorrect: false },
                { content: 'AWS Cloud Map', isCorrect: true },
                { content: 'Amazon CloudFront', isCorrect: false },
                { content: 'Elastic Load Balancing', isCorrect: false },
            ],
        },
        {
            content:
                'What does the principle of least privilege recommend?',
            explanation:
                'The principle of least privilege recommends granting only the permissions required to perform a task. This is an important security best practice that helps reduce the risk of unauthorized access.',
            answers: [
                { content: 'Grant all users full administrative access', isCorrect: false },
                { content: 'Grant only the minimum permissions needed to complete a task', isCorrect: true },
                { content: 'Deny all access by default and require approval for every action', isCorrect: false },
                { content: 'Grant permissions based on seniority level', isCorrect: false },
            ],
        },
        {
            content:
                'Which AWS service allows you to store and retrieve any amount of data at any time from the web?',
            explanation:
                'Amazon S3 is an object storage service that offers industry-leading scalability, data availability, security, and performance. You can store and retrieve any amount of data at any time from anywhere on the web.',
            answers: [
                { content: 'Amazon EBS', isCorrect: false },
                { content: 'Amazon S3', isCorrect: true },
                { content: 'Amazon EFS', isCorrect: false },
                { content: 'Amazon FSx', isCorrect: false },
            ],
        },
        {
            content:
                'Which of the following describes the concept of "agility" in the context of cloud computing?',
            explanation:
                'In cloud computing, agility refers to the ability to rapidly develop, test, and launch software applications that drive business growth. The cloud enables you to innovate faster because you can quickly spin up resources as you need them.',
            answers: [
                { content: 'The ability to reduce costs', isCorrect: false },
                { content: 'The speed at which AWS resources can be created and used', isCorrect: true },
                { content: 'The ability to withstand failures', isCorrect: false },
                { content: 'The level of security provided', isCorrect: false },
            ],
        },
        {
            content:
                'Which service allows you to define budgets and receive alerts when costs exceed defined thresholds?',
            explanation:
                'AWS Budgets allows you to set custom cost and usage budgets that alert you when your costs or usage exceed (or are forecasted to exceed) your budgeted amount.',
            answers: [
                { content: 'AWS Cost Explorer', isCorrect: false },
                { content: 'AWS Budgets', isCorrect: true },
                { content: 'AWS Pricing Calculator', isCorrect: false },
                { content: 'AWS Trusted Advisor', isCorrect: false },
            ],
        },
        {
            content:
                'Which of the following is a managed service for running Apache Kafka on AWS?',
            explanation:
                'Amazon MSK (Managed Streaming for Apache Kafka) is a fully managed service that makes it easy for you to build and run applications that use Apache Kafka to process streaming data.',
            answers: [
                { content: 'Amazon Kinesis', isCorrect: false },
                { content: 'Amazon MSK', isCorrect: true },
                { content: 'Amazon SQS', isCorrect: false },
                { content: 'Amazon EventBridge', isCorrect: false },
            ],
        },
        {
            content:
                'What is the main advantage of using AWS Savings Plans?',
            explanation:
                'AWS Savings Plans offer significant savings over On-Demand prices, in exchange for a commitment to use a specific amount of compute power (measured in $/hour) for a 1 or 3 year period. They provide flexibility across EC2, Lambda, and Fargate usage.',
            answers: [
                { content: 'No commitment required', isCorrect: false },
                { content: 'Flexible pricing with significant discounts for committed usage', isCorrect: true },
                { content: 'Automatic scaling of resources', isCorrect: false },
                { content: 'Free tier access', isCorrect: false },
            ],
        },
        {
            content:
                'Which of the following can be used to provide temporary, limited-privilege credentials for AWS resources?',
            explanation:
                'AWS Security Token Service (STS) is a web service that enables you to request temporary, limited-privilege credentials for IAM users or for users that you authenticate (federated users).',
            answers: [
                { content: 'AWS IAM Access Keys', isCorrect: false },
                { content: 'AWS STS (Security Token Service)', isCorrect: true },
                { content: 'AWS KMS', isCorrect: false },
                { content: 'AWS Secrets Manager', isCorrect: false },
            ],
        },
        {
            content:
                'What is Amazon Cognito used for?',
            explanation:
                'Amazon Cognito provides authentication, authorization, and user management for your web and mobile apps. Users can sign in directly with a user name and password, or through a third party such as Facebook, Amazon, Google, or Apple.',
            answers: [
                { content: 'Managing infrastructure as code', isCorrect: false },
                { content: 'User authentication and authorization for applications', isCorrect: true },
                { content: 'Monitoring application logs', isCorrect: false },
                { content: 'Database management', isCorrect: false },
            ],
        },
        {
            content:
                'Which AWS service provides a managed workflow orchestration service?',
            explanation:
                'AWS Step Functions is a serverless orchestration service that lets you combine AWS Lambda functions and other AWS services to build business-critical applications. Through its visual workflow, you can create and run a series of checkpointed and event-driven workflows.',
            answers: [
                { content: 'Amazon SQS', isCorrect: false },
                { content: 'AWS Step Functions', isCorrect: true },
                { content: 'Amazon EventBridge', isCorrect: false },
                { content: 'AWS Batch', isCorrect: false },
            ],
        },
        {
            content:
                'Which AWS service provides detailed billing reports and allows you to tag resources for cost allocation?',
            explanation:
                'AWS Cost and Usage Report contains the most comprehensive set of AWS cost and usage data available. You can use cost allocation tags to track your AWS costs on a detailed level.',
            answers: [
                { content: 'AWS Budgets', isCorrect: false },
                { content: 'AWS Cost and Usage Report', isCorrect: true },
                { content: 'AWS Cost Explorer', isCorrect: false },
                { content: 'AWS Pricing Calculator', isCorrect: false },
            ],
        },
        {
            content:
                'Which of the following is an advantage of using AWS over traditional on-premises computing?',
            explanation:
                'AWS allows you to go global in minutes. You can easily deploy your application in multiple regions around the world with just a few clicks. This means you can provide lower latency and a better experience for your customers at minimal cost.',
            answers: [
                { content: 'Complete control over physical hardware', isCorrect: false },
                { content: 'Ability to go global in minutes', isCorrect: true },
                { content: 'No need for an internet connection', isCorrect: false },
                { content: 'Lower data transfer speeds', isCorrect: false },
            ],
        },
    ],
};
