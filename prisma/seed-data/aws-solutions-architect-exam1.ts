export const awsSolutionsArchitectExam1 = {
    title: 'AWS Solutions Architect Associate - Practice Exam 1',
    description:
        'Đề thi thử AWS Solutions Architect Associate SAA-C03. 35 câu hỏi về thiết kế hệ thống phân tán, compute, storage, networking và security trên AWS.',
    durationMinutes: 60,
    courseId: 2,
    questions: [
        {
            content:
                'A company needs to store frequently accessed data with millisecond latency. The data must be highly available across multiple Availability Zones. Which storage solution should the solutions architect recommend?',
            explanation:
                'Amazon EFS (Elastic File System) provides a simple, serverless, elastic file system that is built to scale on demand to petabytes. It is designed to be highly available and durable, automatically replicating data across multiple AZs.',
            answers: [
                { content: 'Amazon S3 Standard', isCorrect: false },
                { content: 'Amazon EFS', isCorrect: true },
                { content: 'Amazon S3 Glacier', isCorrect: false },
                { content: 'Amazon EBS', isCorrect: false },
            ],
        },
        {
            content:
                'A web application runs on Amazon EC2 instances behind an Application Load Balancer (ALB). The application needs to handle a sudden increase in traffic. Which combination of services provides the best solution for automatic scaling?',
            explanation:
                'The combination of an ALB with an Auto Scaling group provides automatic scaling. The ALB distributes traffic, and the Auto Scaling group automatically adjusts the number of EC2 instances based on demand.',
            answers: [
                { content: 'ALB with Amazon EC2 Auto Scaling group', isCorrect: true },
                { content: 'Network Load Balancer with AWS Lambda', isCorrect: false },
                { content: 'ALB with fixed number of EC2 instances', isCorrect: false },
                { content: 'Amazon CloudFront with AWS Fargate', isCorrect: false },
            ],
        },
        {
            content:
                'A company wants to migrate an on-premises MySQL database to AWS. The application requires automatic failover, read replicas, and minimal administrative overhead. Which AWS service is the BEST solution?',
            explanation:
                'Amazon Aurora MySQL-Compatible Edition provides up to five times the throughput of standard MySQL, automatic failover with up to 15 read replicas, and is fully managed, reducing administrative overhead significantly.',
            answers: [
                { content: 'Amazon RDS MySQL', isCorrect: false },
                { content: 'Amazon Aurora MySQL-Compatible', isCorrect: true },
                { content: 'MySQL on Amazon EC2', isCorrect: false },
                { content: 'Amazon DynamoDB', isCorrect: false },
            ],
        },
        {
            content:
                'A solutions architect needs to design a decoupled architecture for a microservices application. Messages must be processed in order and exactly once. Which service should be used?',
            explanation:
                'Amazon SQS FIFO (First-In-First-Out) queues are designed to guarantee that messages are processed exactly once, in the exact order that they are sent. This makes them ideal for decoupled architectures requiring ordered processing.',
            answers: [
                { content: 'Amazon SQS Standard Queue', isCorrect: false },
                { content: 'Amazon SQS FIFO Queue', isCorrect: true },
                { content: 'Amazon SNS', isCorrect: false },
                { content: 'Amazon Kinesis Data Streams', isCorrect: false },
            ],
        },
        {
            content:
                'A company needs to serve static content from Amazon S3 with low latency to users worldwide. Which architecture provides the BEST performance?',
            explanation:
                'Using Amazon CloudFront as a CDN in front of S3 provides the best performance for serving static content globally. CloudFront caches content at edge locations worldwide, reducing latency for users.',
            answers: [
                { content: 'S3 with Cross-Region Replication', isCorrect: false },
                { content: 'CloudFront distribution with S3 origin', isCorrect: true },
                { content: 'S3 Transfer Acceleration', isCorrect: false },
                { content: 'S3 with multiple endpoints', isCorrect: false },
            ],
        },
        {
            content:
                'An application processes sensitive customer data and requires encryption at rest for all storage. Which approach encrypts data by default without additional configuration?',
            explanation:
                'Amazon S3 automatically applies server-side encryption using Amazon S3-managed keys (SSE-S3) for all new objects. EBS volumes and RDS instances need encryption to be explicitly enabled.',
            answers: [
                { content: 'Amazon EBS volumes', isCorrect: false },
                { content: 'Amazon S3 (SSE-S3)', isCorrect: true },
                { content: 'Amazon RDS instances', isCorrect: false },
                { content: 'Amazon EC2 instance store', isCorrect: false },
            ],
        },
        {
            content:
                'A company runs a web application that stores session data. The sessions require low latency access and automatic expiration. Which AWS service is BEST suited for this use case?',
            explanation:
                'Amazon ElastiCache for Redis provides sub-millisecond latency and supports TTL (Time To Live) for automatic data expiration, making it ideal for session management in web applications.',
            answers: [
                { content: 'Amazon RDS', isCorrect: false },
                { content: 'Amazon ElastiCache for Redis', isCorrect: true },
                { content: 'Amazon DynamoDB', isCorrect: false },
                { content: 'Amazon S3', isCorrect: false },
            ],
        },
        {
            content:
                'A company wants to host a highly available web application. The application servers must be launched across at least two Availability Zones. Which configuration ensures high availability?',
            explanation:
                'An Auto Scaling group spanning multiple AZs behind an ALB ensures that the application remains available even if one AZ fails. The ALB distributes traffic only to healthy instances across the remaining AZs.',
            answers: [
                { content: 'Single EC2 instance with Elastic IP', isCorrect: false },
                { content: 'Auto Scaling group across multiple AZs with ALB', isCorrect: true },
                { content: 'EC2 instances in a single AZ with reserved capacity', isCorrect: false },
                { content: 'AWS Lambda with API Gateway', isCorrect: false },
            ],
        },
        {
            content:
                'A company needs to migrate 50 TB of data from an on-premises data center to Amazon S3. The company has a 100 Mbps internet connection. What is the MOST cost-effective way to transfer the data?',
            explanation:
                'AWS Snowball Edge is a data migration and edge computing device. For 50 TB of data over a 100 Mbps connection, network transfer would take approximately 46 days. Snowball can complete the transfer in about a week, making it more practical and cost-effective.',
            answers: [
                { content: 'AWS Direct Connect', isCorrect: false },
                { content: 'AWS Snowball Edge', isCorrect: true },
                { content: 'S3 multipart upload over the internet', isCorrect: false },
                { content: 'AWS Storage Gateway', isCorrect: false },
            ],
        },
        {
            content:
                'A solutions architect needs to design a solution for running a batch processing job that can tolerate interruptions. The job is not time-sensitive. Which EC2 pricing model provides the MOST cost-effective solution?',
            explanation:
                'Spot Instances provide up to 90% discount compared to On-Demand pricing. They are ideal for batch processing workloads that can tolerate interruptions and are not time-sensitive.',
            answers: [
                { content: 'On-Demand Instances', isCorrect: false },
                { content: 'Reserved Instances', isCorrect: false },
                { content: 'Spot Instances', isCorrect: true },
                { content: 'Dedicated Hosts', isCorrect: false },
            ],
        },
        {
            content:
                'A company has a requirement to process real-time streaming data from IoT devices. Which AWS service should the architect use to ingest and process the data?',
            explanation:
                'Amazon Kinesis Data Streams is designed for real-time data streaming. It can continuously capture and process gigabytes of data per second from hundreds of thousands of sources such as IoT devices.',
            answers: [
                { content: 'Amazon SQS', isCorrect: false },
                { content: 'Amazon Kinesis Data Streams', isCorrect: true },
                { content: 'Amazon SNS', isCorrect: false },
                { content: 'AWS Batch', isCorrect: false },
            ],
        },
        {
            content:
                'A company needs to create a read replica of an Amazon RDS database in another AWS Region for disaster recovery. Which feature should the architect use?',
            explanation:
                'Amazon RDS cross-Region read replicas provide disaster recovery capability for RDS databases. They allow you to create a read replica in a different AWS Region, which can be promoted to a standalone database instance if needed.',
            answers: [
                { content: 'RDS Multi-AZ deployment', isCorrect: false },
                { content: 'RDS cross-Region read replicas', isCorrect: true },
                { content: 'Amazon Aurora Global Database', isCorrect: false },
                { content: 'AWS Database Migration Service', isCorrect: false },
            ],
        },
        {
            content:
                'An application needs access to an Amazon S3 bucket from within a VPC without traversing the internet. What is the recommended approach?',
            explanation:
                'A VPC Gateway Endpoint for S3 allows instances in the VPC to access S3 without traversing the internet. Traffic stays within the AWS network, providing better security and lower latency.',
            answers: [
                { content: 'NAT Gateway', isCorrect: false },
                { content: 'VPC Gateway Endpoint for S3', isCorrect: true },
                { content: 'AWS PrivateLink', isCorrect: false },
                { content: 'Internet Gateway', isCorrect: false },
            ],
        },
        {
            content:
                'A company is designing a multi-tier architecture. The web tier must be in public subnets, and the database tier must be in private subnets. How should the architect configure internet access for database instances to download software updates?',
            explanation:
                'A NAT Gateway in a public subnet allows instances in private subnets to connect to the internet for outbound traffic (like software updates) while preventing inbound connections from the internet.',
            answers: [
                { content: 'Place database instances in public subnets', isCorrect: false },
                { content: 'Use a NAT Gateway in a public subnet', isCorrect: true },
                { content: 'Use an Internet Gateway directly', isCorrect: false },
                { content: 'Use AWS Direct Connect', isCorrect: false },
            ],
        },
        {
            content:
                'A company wants to restrict access to an Amazon S3 bucket so that only a specific CloudFront distribution can access it. Which feature should the architect use?',
            explanation:
                'Origin Access Control (OAC) restricts S3 bucket access so that it is only accessible through the specified CloudFront distribution. This prevents users from accessing S3 content directly using S3 URLs.',
            answers: [
                { content: 'S3 bucket policy with IP restriction', isCorrect: false },
                { content: 'CloudFront Origin Access Control (OAC)', isCorrect: true },
                { content: 'S3 Access Points', isCorrect: false },
                { content: 'AWS WAF with CloudFront', isCorrect: false },
            ],
        },
        {
            content:
                'A solutions architect is designing a solution for a company that requires a relational database with microsecond read latency for a high-traffic application. Which solution meets this requirement?',
            explanation:
                'Amazon ElastiCache placed in front of an RDS database can provide microsecond read latency by caching frequently accessed data in memory. This reduces the load on the database and improves application performance.',
            answers: [
                { content: 'Amazon RDS with Provisioned IOPS', isCorrect: false },
                { content: 'Amazon RDS with ElastiCache', isCorrect: true },
                { content: 'Amazon DynamoDB with DAX', isCorrect: false },
                { content: 'Amazon Aurora with read replicas', isCorrect: false },
            ],
        },
        {
            content:
                'An application stores files in Amazon S3. Files older than 90 days are rarely accessed, and files older than 365 days are almost never accessed. Which S3 lifecycle configuration provides the MOST cost-effective storage solution?',
            explanation:
                'Transitioning objects to S3 Standard-IA after 90 days reduces storage costs for infrequently accessed data. Moving to S3 Glacier Deep Archive after 365 days provides the lowest cost for data that is almost never accessed.',
            answers: [
                { content: 'Transition to S3 One Zone-IA after 90 days, delete after 365 days', isCorrect: false },
                { content: 'Transition to S3 Standard-IA after 90 days, then S3 Glacier Deep Archive after 365 days', isCorrect: true },
                { content: 'Keep all data in S3 Standard', isCorrect: false },
                { content: 'Transition to S3 Glacier after 90 days, delete after 365 days', isCorrect: false },
            ],
        },
        {
            content:
                'A company needs a serverless solution to build a REST API that integrates with an existing AWS Lambda function. Which AWS service should be used?',
            explanation:
                'Amazon API Gateway is a fully managed service that makes it easy to create, publish, maintain, monitor, and secure REST APIs. It integrates seamlessly with AWS Lambda to create serverless APIs.',
            answers: [
                { content: 'Amazon CloudFront', isCorrect: false },
                { content: 'Amazon API Gateway', isCorrect: true },
                { content: 'Application Load Balancer', isCorrect: false },
                { content: 'AWS AppSync', isCorrect: false },
            ],
        },
        {
            content:
                'A company needs to ensure that its Amazon RDS database can survive the loss of a single Availability Zone. Which configuration should the solutions architect recommend?',
            explanation:
                'Amazon RDS Multi-AZ deployment provides high availability by automatically provisioning and maintaining a synchronous standby replica in a different Availability Zone. If the primary instance fails, RDS automatically fails over to the standby.',
            answers: [
                { content: 'RDS read replica in the same AZ', isCorrect: false },
                { content: 'RDS Multi-AZ deployment', isCorrect: true },
                { content: 'RDS with manual snapshots', isCorrect: false },
                { content: 'RDS single instance with automated backups', isCorrect: false },
            ],
        },
        {
            content:
                'A company wants to use IAM roles to provide temporary security credentials for applications running on Amazon EC2 instances. How should the architect configure this?',
            explanation:
                'Instance profiles allow you to attach an IAM role to an EC2 instance. The applications on the instance can then use the role to get temporary credentials to make AWS API calls, without needing to manage long-term credentials.',
            answers: [
                { content: 'Store IAM access keys in the application code', isCorrect: false },
                { content: 'Attach an IAM role to the EC2 instance using an instance profile', isCorrect: true },
                { content: 'Create IAM users for each application', isCorrect: false },
                { content: 'Use environment variables to store credentials', isCorrect: false },
            ],
        },
        {
            content:
                'A company needs a managed service to run Apache Spark workloads for big data analytics. Which AWS service should the architect recommend?',
            explanation:
                'Amazon EMR (Elastic MapReduce) is a managed cluster platform that simplifies running big data frameworks, such as Apache Spark and Apache Hadoop, on AWS to process and analyze vast amounts of data.',
            answers: [
                { content: 'Amazon Redshift', isCorrect: false },
                { content: 'Amazon EMR', isCorrect: true },
                { content: 'AWS Glue', isCorrect: false },
                { content: 'Amazon Athena', isCorrect: false },
            ],
        },
        {
            content:
                'A company has an application that must process messages from an SQS queue. The processing takes up to 15 minutes per message. How should the architect handle this?',
            explanation:
                'The visibility timeout should be set to at least the maximum processing time (15 minutes) to prevent other consumers from processing the same message while it is being processed by the first consumer.',
            answers: [
                { content: 'Use SQS short polling', isCorrect: false },
                { content: 'Increase the visibility timeout to 15 minutes or more', isCorrect: true },
                { content: 'Use SQS dead letter queue', isCorrect: false },
                { content: 'Use multiple SQS queues', isCorrect: false },
            ],
        },
        {
            content:
                'A company wants to store Docker container images in a managed registry. Which AWS service should be used?',
            explanation:
                'Amazon ECR (Elastic Container Registry) is a fully managed container image registry that supports private repositories with resource-based permissions using IAM.',
            answers: [
                { content: 'Amazon ECS', isCorrect: false },
                { content: 'Amazon ECR', isCorrect: true },
                { content: 'Amazon EKS', isCorrect: false },
                { content: 'AWS CodeCommit', isCorrect: false },
            ],
        },
        {
            content:
                'A company needs to track changes to AWS resources and maintain a history of API calls for compliance purposes. Which combination of services should be used?',
            explanation:
                'AWS CloudTrail records API calls and events for your AWS account, while AWS Config tracks resource configuration changes. Together, they provide a comprehensive audit trail for compliance.',
            answers: [
                { content: 'Amazon CloudWatch and AWS Lambda', isCorrect: false },
                { content: 'AWS CloudTrail and AWS Config', isCorrect: true },
                { content: 'Amazon GuardDuty and AWS Shield', isCorrect: false },
                { content: 'AWS Trusted Advisor and AWS Config', isCorrect: false },
            ],
        },
        {
            content:
                'An application requires a database that can handle more than 10,000 requests per second with single-digit millisecond latency. Which database service should the solutions architect recommend?',
            explanation:
                'Amazon DynamoDB is designed for single-digit millisecond performance at any scale. It can handle more than 10 trillion requests per day and can support peaks of more than 20 million requests per second.',
            answers: [
                { content: 'Amazon RDS', isCorrect: false },
                { content: 'Amazon DynamoDB', isCorrect: true },
                { content: 'Amazon Redshift', isCorrect: false },
                { content: 'Amazon Neptune', isCorrect: false },
            ],
        },
        {
            content:
                'A company wants to automate the deployment of infrastructure across multiple AWS accounts and regions. Which service should the architect use?',
            explanation:
                'AWS CloudFormation StackSets extends the functionality of stacks by enabling you to create, update, or delete stacks across multiple accounts and regions with a single operation.',
            answers: [
                { content: 'AWS CodeDeploy', isCorrect: false },
                { content: 'AWS CloudFormation StackSets', isCorrect: true },
                { content: 'AWS Systems Manager', isCorrect: false },
                { content: 'AWS OpsWorks', isCorrect: false },
            ],
        },
        {
            content:
                'A company needs a network connection between an on-premises data center and AWS. The connection must provide consistent network performance with bandwidth of 10 Gbps. Which service should the architect recommend?',
            explanation:
                'AWS Direct Connect provides a dedicated, private network connection from on-premises to AWS. It supports bandwidth of up to 100 Gbps and provides consistent network performance, lower latency, and higher throughput compared to internet-based connections.',
            answers: [
                { content: 'AWS VPN', isCorrect: false },
                { content: 'AWS Direct Connect', isCorrect: true },
                { content: 'AWS Transit Gateway', isCorrect: false },
                { content: 'Amazon CloudFront', isCorrect: false },
            ],
        },
        {
            content:
                'A company needs to allow secure communication between VPCs in different AWS accounts. Which service provides the MOST scalable solution?',
            explanation:
                'AWS Transit Gateway acts as a hub that controls how traffic is routed among all the connected networks. It simplifies network management and provides a scalable way to connect VPCs across accounts and regions.',
            answers: [
                { content: 'VPC Peering', isCorrect: false },
                { content: 'AWS Transit Gateway', isCorrect: true },
                { content: 'AWS VPN', isCorrect: false },
                { content: 'AWS Direct Connect', isCorrect: false },
            ],
        },
        {
            content:
                'A company needs to run a one-time data migration task using containers. The task should not require managing servers. Which AWS service should be used?',
            explanation:
                'AWS Fargate is a serverless compute engine for containers that works with both Amazon ECS and Amazon EKS. You do not need to provision or manage servers, making it ideal for one-time tasks.',
            answers: [
                { content: 'Amazon EC2', isCorrect: false },
                { content: 'AWS Fargate', isCorrect: true },
                { content: 'AWS Batch', isCorrect: false },
                { content: 'Amazon Lightsail', isCorrect: false },
            ],
        },
        {
            content:
                'A company has a web application that uses Amazon CloudFront. The application is experiencing high origin load. Which feature can reduce the number of requests to the origin?',
            explanation:
                'CloudFront Origin Shield adds an additional caching layer between CloudFront edge locations and the origin. This reduces the number of requests to the origin, improving cache hit ratio and reducing origin load.',
            answers: [
                { content: 'CloudFront field-level encryption', isCorrect: false },
                { content: 'CloudFront Origin Shield', isCorrect: true },
                { content: 'CloudFront signed URLs', isCorrect: false },
                { content: 'CloudFront Lambda@Edge', isCorrect: false },
            ],
        },
        {
            content:
                'A solutions architect needs to design a solution that ensures an Amazon S3 bucket receives only encrypted objects. What should the architect do?',
            explanation:
                'A bucket policy that denies any PutObject request without the x-amz-server-side-encryption header ensures that all objects uploaded to the bucket are encrypted. This enforces encryption at the bucket level.',
            answers: [
                { content: 'Enable default encryption on the S3 bucket', isCorrect: false },
                { content: 'Create a bucket policy that denies unencrypted object uploads', isCorrect: true },
                { content: 'Enable S3 versioning', isCorrect: false },
                { content: 'Use AWS KMS to encrypt all objects', isCorrect: false },
            ],
        },
        {
            content:
                'A company needs a graph database for building applications that work with highly connected datasets. Which AWS service should the architect recommend?',
            explanation:
                'Amazon Neptune is a fully managed graph database service optimized for storing billions of relationships and querying the graph with milliseconds latency. It is ideal for highly connected datasets.',
            answers: [
                { content: 'Amazon DynamoDB', isCorrect: false },
                { content: 'Amazon Neptune', isCorrect: true },
                { content: 'Amazon DocumentDB', isCorrect: false },
                { content: 'Amazon Timestream', isCorrect: false },
            ],
        },
        {
            content:
                'A company needs to implement a caching solution for its DynamoDB table to reduce read latency to microseconds. Which service should the architect use?',
            explanation:
                'Amazon DynamoDB Accelerator (DAX) is a fully managed, highly available, in-memory cache for DynamoDB that delivers up to a 10x performance improvement from milliseconds to microseconds.',
            answers: [
                { content: 'Amazon ElastiCache for Redis', isCorrect: false },
                { content: 'Amazon DynamoDB Accelerator (DAX)', isCorrect: true },
                { content: 'Amazon ElastiCache for Memcached', isCorrect: false },
                { content: 'Amazon CloudFront', isCorrect: false },
            ],
        },
        {
            content:
                'A company needs to invoke a Lambda function in response to changes in an Amazon DynamoDB table. Which feature should be used?',
            explanation:
                'DynamoDB Streams captures a time-ordered sequence of item-level modifications in any DynamoDB table and stores this information for up to 24 hours. You can use a Lambda trigger to invoke a function when a new stream record is available.',
            answers: [
                { content: 'Amazon SNS', isCorrect: false },
                { content: 'DynamoDB Streams with Lambda trigger', isCorrect: true },
                { content: 'Amazon SQS', isCorrect: false },
                { content: 'Amazon EventBridge', isCorrect: false },
            ],
        },
    ],
};
