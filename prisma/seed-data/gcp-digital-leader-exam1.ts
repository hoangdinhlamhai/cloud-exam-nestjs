export const gcpCloudDigitalLeaderExam1 = {
    title: 'Google Cloud Digital Leader - Practice Exam 1',
    description:
        'Đề thi thử Google Cloud Digital Leader. 30 câu hỏi về Google Cloud products, services, digital transformation và business use cases.',
    durationMinutes: 60,
    courseId: 12,
    questions: [
        {
            content:
                'Which Google Cloud service provides serverless compute for running code in response to events?',
            explanation:
                'Cloud Functions is Google Cloud\'s serverless compute service for running event-driven code. You write simple, single-purpose functions that are attached to events. Cloud Functions automatically scales up and down.',
            answers: [
                { content: 'Compute Engine', isCorrect: false },
                { content: 'Cloud Functions', isCorrect: true },
                { content: 'Google Kubernetes Engine', isCorrect: false },
                { content: 'App Engine', isCorrect: false },
            ],
        },
        {
            content:
                'What is Google Cloud\'s primary object storage service?',
            explanation:
                'Cloud Storage is Google Cloud\'s object storage service for storing and accessing data on Google\'s infrastructure. It offers high durability, availability, and performance for any amount of data.',
            answers: [
                { content: 'Cloud SQL', isCorrect: false },
                { content: 'Cloud Storage', isCorrect: true },
                { content: 'Persistent Disk', isCorrect: false },
                { content: 'Cloud Filestore', isCorrect: false },
            ],
        },
        {
            content:
                'Which Google Cloud service provides a fully managed relational database for MySQL, PostgreSQL, and SQL Server?',
            explanation:
                'Cloud SQL is a fully managed database service that makes it easy to set up, maintain, manage, and administer relational databases including MySQL, PostgreSQL, and SQL Server on Google Cloud.',
            answers: [
                { content: 'Cloud Spanner', isCorrect: false },
                { content: 'Cloud SQL', isCorrect: true },
                { content: 'BigQuery', isCorrect: false },
                { content: 'Cloud Bigtable', isCorrect: false },
            ],
        },
        {
            content:
                'What is BigQuery used for?',
            explanation:
                'BigQuery is Google Cloud\'s fully managed, serverless, and cost-effective multi-cloud data warehouse designed for business agility. It can analyze terabytes to petabytes of data using ANSI SQL.',
            answers: [
                { content: 'Real-time messaging', isCorrect: false },
                { content: 'Serverless data warehouse and analytics', isCorrect: true },
                { content: 'Container orchestration', isCorrect: false },
                { content: 'Virtual machine management', isCorrect: false },
            ],
        },
        {
            content:
                'Which Google Cloud service provides managed Kubernetes?',
            explanation:
                'Google Kubernetes Engine (GKE) provides a managed environment for deploying, managing, and scaling your containerized applications using Google infrastructure. GKE uses Kubernetes, the open-source cluster management system.',
            answers: [
                { content: 'Cloud Run', isCorrect: false },
                { content: 'Google Kubernetes Engine (GKE)', isCorrect: true },
                { content: 'App Engine', isCorrect: false },
                { content: 'Compute Engine', isCorrect: false },
            ],
        },
        {
            content:
                'What is the purpose of Google Cloud\'s Virtual Private Cloud (VPC)?',
            explanation:
                'Google Cloud VPC provides networking functionality for your cloud-based resources. It offers a global, scalable, and flexible networking solution that lets you define and control your network topology.',
            answers: [
                { content: 'Store data in the cloud', isCorrect: false },
                { content: 'Provide networking for cloud resources', isCorrect: true },
                { content: 'Manage DNS records', isCorrect: false },
                { content: 'Run serverless code', isCorrect: false },
            ],
        },
        {
            content:
                'Which Google Cloud service provides a content delivery network (CDN)?',
            explanation:
                'Cloud CDN (Content Delivery Network) uses Google\'s globally distributed edge points of presence to cache HTTP(S) load-balanced content close to your users, providing faster delivery with lower latency.',
            answers: [
                { content: 'Cloud DNS', isCorrect: false },
                { content: 'Cloud CDN', isCorrect: true },
                { content: 'Cloud Armor', isCorrect: false },
                { content: 'Cloud Load Balancing', isCorrect: false },
            ],
        },
        {
            content:
                'What is Cloud Spanner?',
            explanation:
                'Cloud Spanner is a fully managed, mission-critical, relational database service that offers transactional consistency at global scale, automatic, synchronous replication for high availability, and support for SQL queries.',
            answers: [
                { content: 'A NoSQL database', isCorrect: false },
                { content: 'A globally distributed, strongly consistent relational database', isCorrect: true },
                { content: 'A data warehouse service', isCorrect: false },
                { content: 'An in-memory cache', isCorrect: false },
            ],
        },
        {
            content:
                'Which Google Cloud service is used for Identity and Access Management?',
            explanation:
                'Cloud IAM lets you manage access control by defining who (identity) has what access (role) for which resource. It provides a unified view into security policy across your entire organization.',
            answers: [
                { content: 'Cloud Armor', isCorrect: false },
                { content: 'Cloud IAM', isCorrect: true },
                { content: 'Cloud KMS', isCorrect: false },
                { content: 'Cloud Identity', isCorrect: false },
            ],
        },
        {
            content:
                'What is the purpose of Google Cloud Pub/Sub?',
            explanation:
                'Cloud Pub/Sub is a fully managed, real-time messaging service that allows you to send and receive messages between independent applications. It provides reliable, many-to-many, asynchronous messaging.',
            answers: [
                { content: 'Database management', isCorrect: false },
                { content: 'Asynchronous messaging between applications', isCorrect: true },
                { content: 'Container orchestration', isCorrect: false },
                { content: 'Static website hosting', isCorrect: false },
            ],
        },
        {
            content:
                'Which Google Cloud service provides a fully managed NoSQL database optimized for large analytical and operational workloads?',
            explanation:
                'Cloud Bigtable is a fully managed, scalable NoSQL database service for large analytical and operational workloads. It is the same database that powers many core Google services, including Search, Analytics, Maps, and Gmail.',
            answers: [
                { content: 'Firestore', isCorrect: false },
                { content: 'Cloud Bigtable', isCorrect: true },
                { content: 'Cloud SQL', isCorrect: false },
                { content: 'Memorystore', isCorrect: false },
            ],
        },
        {
            content:
                'What does Google Cloud App Engine provide?',
            explanation:
                'App Engine is a fully managed, serverless platform for developing and hosting web applications at scale. It handles infrastructure management, so you can focus on writing code.',
            answers: [
                { content: 'Virtual machines', isCorrect: false },
                { content: 'A fully managed platform for web applications', isCorrect: true },
                { content: 'Container orchestration', isCorrect: false },
                { content: 'Data analytics', isCorrect: false },
            ],
        },
        {
            content:
                'Which Google Cloud service provides managed Redis and Memcached instances?',
            explanation:
                'Memorystore is a fully managed in-memory data store service for Redis and Memcached. It provides a fast, fully managed, in-memory data store to build application caches that provide sub-millisecond data access.',
            answers: [
                { content: 'Cloud SQL', isCorrect: false },
                { content: 'Memorystore', isCorrect: true },
                { content: 'Cloud Bigtable', isCorrect: false },
                { content: 'Firestore', isCorrect: false },
            ],
        },
        {
            content:
                'What is Cloud Run?',
            explanation:
                'Cloud Run is a managed compute platform that enables you to run containers directly on top of Google\'s scalable infrastructure. It is serverless, so you don\'t have to manage any infrastructure.',
            answers: [
                { content: 'A CI/CD pipeline service', isCorrect: false },
                { content: 'A serverless platform for running containers', isCorrect: true },
                { content: 'A virtual machine service', isCorrect: false },
                { content: 'A Kubernetes management service', isCorrect: false },
            ],
        },
        {
            content:
                'Which service provides real-time threat detection for Google Cloud?',
            explanation:
                'Security Command Center is Google Cloud\'s centralized vulnerability and threat reporting service. It helps you strengthen your security posture by evaluating your security and data attack surface.',
            answers: [
                { content: 'Cloud Armor', isCorrect: false },
                { content: 'Security Command Center', isCorrect: true },
                { content: 'Cloud IAM', isCorrect: false },
                { content: 'Cloud KMS', isCorrect: false },
            ],
        },
        {
            content:
                'What is Google Cloud\'s Anthos platform used for?',
            explanation:
                'Anthos is a modern application management platform that provides a consistent development and operations experience for cloud and on-premises environments. It enables you to modernize applications, build new ones, and run them anywhere in a secure manner.',
            answers: [
                { content: 'Data analytics', isCorrect: false },
                { content: 'Managing applications across hybrid and multi-cloud environments', isCorrect: true },
                { content: 'Machine learning', isCorrect: false },
                { content: 'DNS management', isCorrect: false },
            ],
        },
        {
            content:
                'Which Google Cloud service is best for running Machine Learning workloads?',
            explanation:
                'Vertex AI is Google Cloud\'s unified ML platform that helps you build, deploy, and scale ML models. It brings together Google Cloud services for building ML under one unified UI and API.',
            answers: [
                { content: 'BigQuery', isCorrect: false },
                { content: 'Vertex AI', isCorrect: true },
                { content: 'Cloud Functions', isCorrect: false },
                { content: 'Dataflow', isCorrect: false },
            ],
        },
        {
            content:
                'What is the purpose of Cloud Logging (formerly Stackdriver Logging)?',
            explanation:
                'Cloud Logging allows you to store, search, analyze, monitor, and alert on log data and events from Google Cloud and other sources. It is a fully managed service that scales to handle any volume.',
            answers: [
                { content: 'Managing DNS records', isCorrect: false },
                { content: 'Storing and analyzing log data', isCorrect: true },
                { content: 'Deploying applications', isCorrect: false },
                { content: 'Managing containers', isCorrect: false },
            ],
        },
        {
            content:
                'Which Google Cloud service provides DDoS protection and WAF capabilities?',
            explanation:
                'Cloud Armor is Google Cloud\'s DDoS protection and WAF (Web Application Firewall) service. It protects your applications and websites against denial of service and web attacks.',
            answers: [
                { content: 'Cloud IAM', isCorrect: false },
                { content: 'Cloud Armor', isCorrect: true },
                { content: 'Cloud KMS', isCorrect: false },
                { content: 'VPC Firewall', isCorrect: false },
            ],
        },
        {
            content:
                'What is the Google Cloud Free Tier?',
            explanation:
                'Google Cloud Free Tier provides free resources to help you learn about Google Cloud services. It includes a 90-day, $300 free trial and Always Free products with monthly usage limits.',
            answers: [
                { content: 'Unlimited free access to all services', isCorrect: false },
                { content: 'Free trial credits and Always Free products with usage limits', isCorrect: true },
                { content: 'Free access only for students', isCorrect: false },
                { content: 'Free access for the first month only', isCorrect: false },
            ],
        },
        {
            content:
                'Which Google Cloud service is used for batch and stream data processing?',
            explanation:
                'Dataflow is a fully managed service for executing Apache Beam pipelines within the Google Cloud ecosystem. It supports both batch and stream data processing with automatic scaling.',
            answers: [
                { content: 'Pub/Sub', isCorrect: false },
                { content: 'Dataflow', isCorrect: true },
                { content: 'BigQuery', isCorrect: false },
                { content: 'Dataproc', isCorrect: false },
            ],
        },
        {
            content:
                'What is the difference between Cloud Storage classes: Standard, Nearline, Coldline, and Archive?',
            explanation:
                'The storage classes differ in minimum storage duration and access costs. Standard is for frequently accessed data, Nearline for data accessed less than once a month, Coldline for data accessed less than once a quarter, and Archive for data accessed less than once a year.',
            answers: [
                { content: 'They differ in data durability', isCorrect: false },
                { content: 'They differ in access frequency and cost optimization', isCorrect: true },
                { content: 'They differ in geographic availability', isCorrect: false },
                { content: 'They differ in encryption methods', isCorrect: false },
            ],
        },
        {
            content:
                'What is the purpose of Google Cloud\'s Resource Hierarchy?',
            explanation:
                'Google Cloud\'s resource hierarchy (Organization > Folders > Projects > Resources) provides a way to organize resources and apply policies. IAM policies and organizational policies are inherited down the hierarchy.',
            answers: [
                { content: 'To manage billing only', isCorrect: false },
                { content: 'To organize resources and apply policies with inheritance', isCorrect: true },
                { content: 'To monitor application performance', isCorrect: false },
                { content: 'To deploy applications', isCorrect: false },
            ],
        },
        {
            content:
                'Which Google Cloud service provides a document database similar to MongoDB?',
            explanation:
                'Cloud Firestore (Datastore mode) is a NoSQL document database built for automatic scaling, high performance, and ease of application development. It supports ACID transactions and is similar to MongoDB.',
            answers: [
                { content: 'Cloud SQL', isCorrect: false },
                { content: 'Cloud Firestore', isCorrect: true },
                { content: 'Cloud Bigtable', isCorrect: false },
                { content: 'BigQuery', isCorrect: false },
            ],
        },
        {
            content:
                'What is the Shared Responsibility Model in Google Cloud?',
            explanation:
                'The Shared Responsibility Model outlines the security responsibilities of Google Cloud (infrastructure security) vs. the customer (data security, access management, application security). The exact split depends on the service type (IaaS, PaaS, SaaS).',
            answers: [
                { content: 'Google manages all security', isCorrect: false },
                { content: 'Security responsibilities are shared between Google and the customer', isCorrect: true },
                { content: 'Customers manage all security', isCorrect: false },
                { content: 'Third-party vendors manage security', isCorrect: false },
            ],
        },
        {
            content:
                'Which Google Cloud service provides load balancing?',
            explanation:
                'Cloud Load Balancing is a fully distributed, software-defined managed service that distributes user traffic across multiple backends. It supports both global and regional load balancing for HTTP(S), TCP/SSL, and UDP traffic.',
            answers: [
                { content: 'Cloud CDN', isCorrect: false },
                { content: 'Cloud Load Balancing', isCorrect: true },
                { content: 'Cloud DNS', isCorrect: false },
                { content: 'Cloud Interconnect', isCorrect: false },
            ],
        },
        {
            content:
                'What is Google Cloud Dataproc used for?',
            explanation:
                'Dataproc is a managed Spark and Hadoop service that lets you take advantage of open-source data tools for batch processing, querying, streaming, and machine learning. It manages the cluster for you.',
            answers: [
                { content: 'Serverless functions', isCorrect: false },
                { content: 'Managed Apache Spark and Hadoop clusters', isCorrect: true },
                { content: 'Container orchestration', isCorrect: false },
                { content: 'Object storage', isCorrect: false },
            ],
        },
        {
            content:
                'Which concept describes Google Cloud\'s approach to sustainable operations?',
            explanation:
                'Google Cloud has been carbon neutral since 2007 and aims to run on carbon-free energy 24/7 by 2030. Google matches 100% of its energy consumption with renewable energy purchases.',
            answers: [
                { content: 'Only using renewable energy', isCorrect: false },
                { content: 'Carbon neutral operations with a goal of 24/7 carbon-free energy', isCorrect: true },
                { content: 'Using nuclear power exclusively', isCorrect: false },
                { content: 'Reducing data center operations', isCorrect: false },
            ],
        },
        {
            content:
                'What is Cloud Interconnect used for?',
            explanation:
                'Cloud Interconnect provides direct physical connections between your on-premises network and Google\'s network. It provides high-bandwidth, low-latency connections that are more reliable than internet-based connections.',
            answers: [
                { content: 'Connecting VPCs within Google Cloud', isCorrect: false },
                { content: 'Providing dedicated connections between on-premises and Google Cloud', isCorrect: true },
                { content: 'Load balancing traffic', isCorrect: false },
                { content: 'Managing DNS records', isCorrect: false },
            ],
        },
        {
            content:
                'Which Google Cloud service helps you manage and deploy infrastructure using code?',
            explanation:
                'Cloud Deployment Manager allows you to specify all the resources needed for your application in a declarative format using YAML. You can also use Terraform with Google Cloud for infrastructure as code.',
            answers: [
                { content: 'Cloud Console', isCorrect: false },
                { content: 'Cloud Deployment Manager / Terraform', isCorrect: true },
                { content: 'Cloud Shell', isCorrect: false },
                { content: 'Cloud SDK', isCorrect: false },
            ],
        },
    ],
};
