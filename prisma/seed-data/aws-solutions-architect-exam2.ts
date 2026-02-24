export const awsSolutionsArchitectExam2 = {
    title: 'AWS Solutions Architect Associate - Practice Exam 2',
    description:
        'Đề thi thử AWS Solutions Architect Associate SAA-C03 (Đề 2). 30 câu hỏi chuyên sâu về high availability, disaster recovery, serverless và migration.',
    durationMinutes: 60,
    courseId: 2,
    questions: [
        {
            content:
                'A company runs a critical application on Amazon EC2. The application must have a Recovery Time Objective (RTO) of less than 4 hours and a Recovery Point Objective (RPO) of less than 1 hour. Which disaster recovery strategy meets these requirements?',
            explanation:
                'Warm standby maintains a scaled-down but fully functional copy of the production environment in another region. It can meet RTO of less than 4 hours (scale up takes minutes) and RPO of less than 1 hour (continuous data replication).',
            answers: [
                { content: 'Backup and Restore', isCorrect: false },
                { content: 'Warm Standby', isCorrect: true },
                { content: 'Pilot Light', isCorrect: false },
                { content: 'Multi-Site Active/Active', isCorrect: false },
            ],
        },
        {
            content:
                'A serverless application needs to process files uploaded to an S3 bucket. The processing takes less than 15 minutes. Which architecture is MOST cost-effective?',
            explanation:
                'S3 event notifications can directly trigger a Lambda function when a file is uploaded. This is the most cost-effective serverless approach as you only pay for the compute time used to process each file.',
            answers: [
                { content: 'EC2 instance polling S3 for new objects', isCorrect: false },
                { content: 'S3 event notification triggering a Lambda function', isCorrect: true },
                { content: 'CloudWatch Events rule triggering an ECS task', isCorrect: false },
                { content: 'SQS queue with EC2 consumer instances', isCorrect: false },
            ],
        },
        {
            content:
                'A company needs to host a static website with a custom domain name and HTTPS. What is the MOST cost-effective solution?',
            explanation:
                'Hosting a static website on S3 with CloudFront for HTTPS support and AWS Certificate Manager for a free SSL/TLS certificate is the most cost-effective solution. S3 provides low-cost storage and CloudFront provides global content delivery.',
            answers: [
                { content: 'EC2 instances with an Application Load Balancer', isCorrect: false },
                { content: 'Amazon S3 with CloudFront and ACM certificate', isCorrect: true },
                { content: 'AWS Amplify', isCorrect: false },
                { content: 'Amazon Lightsail', isCorrect: false },
            ],
        },
        {
            content:
                'A company uses Amazon RDS for PostgreSQL. They need to run complex analytical queries without impacting the performance of the production database. What solution should the architect recommend?',
            explanation:
                'Creating a read replica of the RDS instance allows analytical queries to be run against the replica without impacting the production database. The read replica continuously syncs with the primary instance.',
            answers: [
                { content: 'Enable RDS Multi-AZ deployment', isCorrect: false },
                { content: 'Create an RDS read replica for analytical queries', isCorrect: true },
                { content: 'Increase the instance size of the primary database', isCorrect: false },
                { content: 'Use Amazon ElastiCache to cache query results', isCorrect: false },
            ],
        },
        {
            content:
                'A company wants to implement a microservices architecture using containers. They want minimal operational overhead and do not want to manage the underlying infrastructure. Which combination of services should the architect recommend?',
            explanation:
                'Amazon ECS with AWS Fargate provides a serverless container solution. Fargate removes the need to manage EC2 instances, allowing the team to focus on building applications rather than managing infrastructure.',
            answers: [
                { content: 'Amazon ECS with EC2 launch type', isCorrect: false },
                { content: 'Amazon ECS with AWS Fargate', isCorrect: true },
                { content: 'Amazon EKS with managed node groups', isCorrect: false },
                { content: 'Docker on Amazon EC2 instances', isCorrect: false },
            ],
        },
        {
            content:
                'An application must store configuration data that can change frequently and must be accessible across multiple Lambda functions. Which service provides the BEST solution?',
            explanation:
                'AWS Systems Manager Parameter Store provides secure, hierarchical storage for configuration data and secrets management. It integrates natively with Lambda and provides versioning and change notification.',
            answers: [
                { content: 'Amazon S3', isCorrect: false },
                { content: 'AWS Systems Manager Parameter Store', isCorrect: true },
                { content: 'AWS CloudFormation', isCorrect: false },
                { content: 'Environment variables in Lambda', isCorrect: false },
            ],
        },
        {
            content:
                'A company needs to transfer data between Amazon S3 buckets in different AWS accounts. What is the recommended approach?',
            explanation:
                'Cross-account S3 bucket access can be achieved by creating an IAM role in the destination account and configuring a bucket policy on the source bucket. S3 Cross-Region Replication also works across accounts with proper IAM configuration.',
            answers: [
                { content: 'Use AWS DataSync', isCorrect: false },
                { content: 'Configure cross-account IAM roles and bucket policies', isCorrect: true },
                { content: 'Use AWS Transfer Family', isCorrect: false },
                { content: 'Copy data to EBS, then to the other account', isCorrect: false },
            ],
        },
        {
            content:
                'A company is designing a three-tier web application. The presentation tier, application tier, and data tier must each be in separate subnets. The data tier should only be accessible from the application tier. How should the architect configure the security?',
            explanation:
                'Security groups can reference other security groups. By configuring the data tier security group to only accept inbound traffic from the application tier security group, you ensure proper network isolation.',
            answers: [
                { content: 'Use NACLs only on the data tier subnet', isCorrect: false },
                { content: 'Configure security groups on the data tier to only allow inbound from the application tier security group', isCorrect: true },
                { content: 'Use AWS WAF to filter traffic', isCorrect: false },
                { content: 'Place all tiers in the same security group', isCorrect: false },
            ],
        },
        {
            content:
                'A company needs an event-driven architecture that can route events from multiple sources to different targets based on rules. Which AWS service should be used?',
            explanation:
                'Amazon EventBridge is a serverless event bus service that makes it easy to connect applications using data from your own apps, SaaS applications, and AWS services. It supports event filtering and routing rules.',
            answers: [
                { content: 'Amazon SNS', isCorrect: false },
                { content: 'Amazon EventBridge', isCorrect: true },
                { content: 'Amazon SQS', isCorrect: false },
                { content: 'AWS Step Functions', isCorrect: false },
            ],
        },
        {
            content:
                'A solutions architect needs to design a solution for a highly available Amazon Aurora database that must survive a regional failure. Which feature should be used?',
            explanation:
                'Amazon Aurora Global Database spans multiple AWS Regions, enabling low-latency global reads and providing disaster recovery from region-wide outages. It allows a secondary region to be promoted in less than a minute.',
            answers: [
                { content: 'Aurora Multi-AZ deployment', isCorrect: false },
                { content: 'Aurora Global Database', isCorrect: true },
                { content: 'Aurora read replicas', isCorrect: false },
                { content: 'RDS cross-Region read replicas', isCorrect: false },
            ],
        },
        {
            content:
                'A company wants to implement a CI/CD pipeline that automatically deploys code to Amazon ECS when changes are pushed to a Git repository. Which set of services provides the BEST solution?',
            explanation:
                'AWS CodePipeline orchestrates the CI/CD pipeline, CodeBuild compiles and tests the code and builds Docker images, and Amazon ECR stores the container images. CodePipeline can then deploy to ECS automatically.',
            answers: [
                { content: 'AWS CodePipeline, CodeBuild, and Amazon ECR', isCorrect: true },
                { content: 'AWS CodeDeploy only', isCorrect: false },
                { content: 'Jenkins on EC2 with manual deployment', isCorrect: false },
                { content: 'AWS CloudFormation with manual triggers', isCorrect: false },
            ],
        },
        {
            content:
                'An application needs to send the same message to multiple SQS queues simultaneously. What is the recommended architecture?',
            explanation:
                'The fanout pattern using SNS with SQS is the recommended approach. The application publishes a message to an SNS topic, and multiple SQS queues subscribe to that topic, each receiving a copy of the message.',
            answers: [
                { content: 'Application writes to each SQS queue individually', isCorrect: false },
                { content: 'SNS topic with multiple SQS queue subscriptions (fanout pattern)', isCorrect: true },
                { content: 'Use SQS dead letter queues', isCorrect: false },
                { content: 'Use Amazon Kinesis with multiple consumers', isCorrect: false },
            ],
        },
        {
            content:
                'A company needs to implement a solution that provides global content delivery with the ability to execute custom logic at edge locations. Which feature should be used?',
            explanation:
                'Lambda@Edge allows you to run Lambda functions at CloudFront edge locations, customizing content delivery close to users. This is useful for request/response manipulation, A/B testing, and authentication.',
            answers: [
                { content: 'Amazon CloudFront with S3', isCorrect: false },
                { content: 'CloudFront with Lambda@Edge', isCorrect: true },
                { content: 'AWS Global Accelerator', isCorrect: false },
                { content: 'Amazon API Gateway with Lambda', isCorrect: false },
            ],
        },
        {
            content:
                'A company needs to ensure that no AWS IAM user can access resources without multi-factor authentication (MFA). How should the architect implement this?',
            explanation:
                'An IAM policy with an explicit deny and a condition that checks for MFA (aws:MultiFactorAuthPresent) ensures that all actions are denied unless MFA is used, regardless of other permissions.',
            answers: [
                { content: 'Enable MFA for the root account only', isCorrect: false },
                { content: 'Create an IAM policy that denies all actions unless MFA is present', isCorrect: true },
                { content: 'Configure AWS Config rules', isCorrect: false },
                { content: 'Use AWS Organizations SCP', isCorrect: false },
            ],
        },
        {
            content:
                'A company needs to optimize their Amazon S3 costs. They have millions of objects, and access patterns are unpredictable. Which S3 storage class should the architect recommend?',
            explanation:
                'S3 Intelligent-Tiering automatically moves objects between access tiers based on changing access patterns. It is ideal when access patterns are unpredictable, as it optimizes costs without performance impact or operational overhead.',
            answers: [
                { content: 'S3 Standard', isCorrect: false },
                { content: 'S3 Intelligent-Tiering', isCorrect: true },
                { content: 'S3 Standard-IA', isCorrect: false },
                { content: 'S3 One Zone-IA', isCorrect: false },
            ],
        },
        {
            content:
                'A company needs to securely store database credentials for use by AWS Lambda functions. Which service provides the BEST solution with automatic rotation?',
            explanation:
                'AWS Secrets Manager is designed specifically for storing, retrieving, and rotating secrets such as database credentials. It integrates with RDS for automatic credential rotation.',
            answers: [
                { content: 'AWS Systems Manager Parameter Store', isCorrect: false },
                { content: 'AWS Secrets Manager', isCorrect: true },
                { content: 'AWS KMS', isCorrect: false },
                { content: 'Amazon S3 with encryption', isCorrect: false },
            ],
        },
        {
            content:
                'A company needs to build a GraphQL API that provides real-time updates to mobile applications. Which AWS service should the architect recommend?',
            explanation:
                'AWS AppSync is a managed GraphQL service that provides real-time data synchronization and offline programming features. It supports real-time subscriptions for mobile and web applications.',
            answers: [
                { content: 'Amazon API Gateway', isCorrect: false },
                { content: 'AWS AppSync', isCorrect: true },
                { content: 'AWS Lambda', isCorrect: false },
                { content: 'Amazon SNS', isCorrect: false },
            ],
        },
        {
            content:
                'An application requires a shared file system that can be mounted by multiple EC2 instances simultaneously across multiple AZs. Which service should be used?',
            explanation:
                'Amazon EFS provides a fully managed, elastic, shared file system that can be mounted by multiple EC2 instances across multiple Availability Zones simultaneously. It automatically grows and shrinks as you add and remove files.',
            answers: [
                { content: 'Amazon EBS', isCorrect: false },
                { content: 'Amazon EFS', isCorrect: true },
                { content: 'Amazon S3', isCorrect: false },
                { content: 'Amazon FSx for Windows', isCorrect: false },
            ],
        },
        {
            content:
                'A company wants to improve the availability of their application by routing traffic to healthy endpoints across multiple AWS Regions. Which service should be used?',
            explanation:
                'Amazon Route 53 health checks and routing policies (e.g., failover, latency-based, weighted) allow you to route traffic to healthy endpoints across multiple regions. If an endpoint becomes unhealthy, Route 53 automatically routes traffic away from it.',
            answers: [
                { content: 'Amazon CloudFront', isCorrect: false },
                { content: 'Amazon Route 53 with health checks', isCorrect: true },
                { content: 'AWS Direct Connect', isCorrect: false },
                { content: 'Elastic Load Balancing', isCorrect: false },
            ],
        },
        {
            content:
                'A company needs to process video files. Each file takes approximately 2 hours to process. The company wants to minimize costs. Which compute solution is MOST cost-effective?',
            explanation:
                'For long-running, cost-sensitive batch processing tasks, EC2 Spot Instances provide up to 90% savings. Using SQS as a buffer ensures that if a Spot Instance is interrupted, the message returns to the queue for another instance to process.',
            answers: [
                { content: 'AWS Lambda', isCorrect: false },
                { content: 'EC2 Spot Instances with SQS queue', isCorrect: true },
                { content: 'EC2 On-Demand Instances', isCorrect: false },
                { content: 'AWS Batch with Fargate', isCorrect: false },
            ],
        },
        {
            content:
                'A company needs to create a data lake on AWS. They want to catalog all data and make it searchable across the organization. Which service provides a centralized metadata repository?',
            explanation:
                'AWS Glue Data Catalog is a centralized metadata repository that stores table definitions, schema information, and other metadata about your data. It integrates with Amazon Athena, Redshift Spectrum, and EMR.',
            answers: [
                { content: 'Amazon S3 with tagging', isCorrect: false },
                { content: 'AWS Glue Data Catalog', isCorrect: true },
                { content: 'Amazon DynamoDB', isCorrect: false },
                { content: 'AWS CloudFormation', isCorrect: false },
            ],
        },
        {
            content:
                'A company needs to improve application performance by caching API responses. The cache should support complex data types and pub/sub messaging. Which caching solution should be used?',
            explanation:
                'Amazon ElastiCache for Redis supports complex data types (strings, hashes, lists, sets, sorted sets) and pub/sub messaging. Redis also supports data persistence and replication for high availability.',
            answers: [
                { content: 'Amazon ElastiCache for Memcached', isCorrect: false },
                { content: 'Amazon ElastiCache for Redis', isCorrect: true },
                { content: 'Amazon DynamoDB DAX', isCorrect: false },
                { content: 'Amazon CloudFront', isCorrect: false },
            ],
        },
        {
            content:
                'A company has an application that needs to process incoming data records in real-time with exactly-once semantics and maintain ordering within a partition key. Which service should be used?',
            explanation:
                'Amazon Kinesis Data Streams provides real-time data streaming with ordering guarantees within each shard (partition key). With enhanced fan-out, consumers can process records with exactly-once semantics.',
            answers: [
                { content: 'Amazon SQS Standard', isCorrect: false },
                { content: 'Amazon Kinesis Data Streams', isCorrect: true },
                { content: 'Amazon SNS', isCorrect: false },
                { content: 'Amazon MQ', isCorrect: false },
            ],
        },
        {
            content:
                'A company wants to use infrastructure as code and needs drift detection to alert when resources are manually changed. Which service should the architect recommend?',
            explanation:
                'AWS CloudFormation provides drift detection, which identifies resources whose actual configuration differs from the expected template configuration. This helps maintain infrastructure consistency.',
            answers: [
                { content: 'AWS Terraform', isCorrect: false },
                { content: 'AWS CloudFormation with drift detection', isCorrect: true },
                { content: 'AWS OpsWorks', isCorrect: false },
                { content: 'AWS Elastic Beanstalk', isCorrect: false },
            ],
        },
        {
            content:
                'A company needs to implement a solution for running scheduled tasks (like cron jobs) in a serverless manner. Which combination of services should be used?',
            explanation:
                'Amazon EventBridge Scheduler (formerly CloudWatch Events) can trigger Lambda functions on a schedule, providing a serverless cron-like service without needing to manage any servers.',
            answers: [
                { content: 'Cron on EC2 instance', isCorrect: false },
                { content: 'Amazon EventBridge schedule rule with AWS Lambda', isCorrect: true },
                { content: 'AWS Batch', isCorrect: false },
                { content: 'Amazon ECS scheduled tasks', isCorrect: false },
            ],
        },
        {
            content:
                'A company needs a solution to throttle API requests to prevent overload and implement usage plans for different client tiers. Which service should be used?',
            explanation:
                'Amazon API Gateway provides built-in throttling capabilities and usage plans. You can set rate limits and burst limits per client, and create usage plans with API keys to manage different client tiers.',
            answers: [
                { content: 'Application Load Balancer', isCorrect: false },
                { content: 'Amazon API Gateway with usage plans', isCorrect: true },
                { content: 'AWS WAF rate limiting', isCorrect: false },
                { content: 'Amazon CloudFront', isCorrect: false },
            ],
        },
        {
            content:
                'A company needs to deploy a Windows-based file system that is accessible from multiple EC2 instances. Which AWS service should be used?',
            explanation:
                'Amazon FSx for Windows File Server provides a fully managed native Windows file system built on Windows Server. It supports SMB protocol and is accessible from multiple EC2 instances.',
            answers: [
                { content: 'Amazon EFS', isCorrect: false },
                { content: 'Amazon FSx for Windows File Server', isCorrect: true },
                { content: 'Amazon S3', isCorrect: false },
                { content: 'Amazon EBS Multi-Attach', isCorrect: false },
            ],
        },
        {
            content:
                'A company needs to implement a solution where failed messages from an SQS queue are automatically moved to a separate queue for investigation. What should the architect configure?',
            explanation:
                'A dead letter queue (DLQ) is a queue that one or more source queues can use to collect messages that fail to be processed successfully. When a message exceeds the maxReceiveCount, it is automatically moved to the DLQ.',
            answers: [
                { content: 'SQS message timer', isCorrect: false },
                { content: 'SQS dead letter queue (DLQ)', isCorrect: true },
                { content: 'SQS visibility timeout', isCorrect: false },
                { content: 'SQS FIFO queue', isCorrect: false },
            ],
        },
        {
            content:
                'A company wants to accelerate the performance of their global application by routing user traffic through the AWS global network instead of the public internet. Which service should be used?',
            explanation:
                'AWS Global Accelerator improves the availability and performance of applications for global users. It uses the AWS global network to route traffic to the optimal endpoint, providing consistent performance.',
            answers: [
                { content: 'Amazon CloudFront', isCorrect: false },
                { content: 'AWS Global Accelerator', isCorrect: true },
                { content: 'Amazon Route 53', isCorrect: false },
                { content: 'AWS Transit Gateway', isCorrect: false },
            ],
        },
    ],
};
