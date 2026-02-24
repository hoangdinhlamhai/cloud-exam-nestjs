export const cdlExam2 = {
    title: 'Google Cloud Digital Leader - Practice Test 2',
    description: 'Google Cloud Digital Leader practice test with 50 questions focusing on AI/ML, data analytics, security & compliance, and cloud migration strategies.',
    durationMinutes: 90,
    courseId: 12,
    questions: [
        {
            content: 'What is the key advantage of using managed services in Google Cloud compared to self-managed infrastructure?',
            explanation: 'Managed services reduce operational overhead by having Google handle maintenance, patching, scaling, and availability, allowing teams to focus on business logic.',
            answers: [
                { content: 'Lower initial hardware cost', isCorrect: false },
                { content: 'Reduced operational burden as Google handles infrastructure management', isCorrect: true },
                { content: 'Complete customization of the OS kernel', isCorrect: false },
                { content: 'No network latency', isCorrect: false },
            ],
        },
        {
            content: 'Which Google Cloud AI service can extract text from images and documents?',
            explanation: 'Cloud Vision API uses ML models to detect and extract text (OCR), labels, faces, and objects from images.',
            answers: [
                { content: 'Natural Language API', isCorrect: false },
                { content: 'Cloud Vision API', isCorrect: true },
                { content: 'Speech-to-Text', isCorrect: false },
                { content: 'Dialogflow', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of a Service Level Agreement (SLA) in Google Cloud?',
            explanation: 'An SLA is a formal commitment by Google regarding service availability and performance, typically expressed as uptime percentage.',
            answers: [
                { content: 'A pricing guide', isCorrect: false },
                { content: 'A formal commitment on service availability and performance', isCorrect: true },
                { content: 'A user access policy', isCorrect: false },
                { content: 'A data residency requirement', isCorrect: false },
            ],
        },
        {
            content: 'Which Google Cloud service is best suited for building conversational AI agents?',
            explanation: 'Dialogflow is a natural language understanding platform for designing and integrating conversational user interfaces into applications.',
            answers: [
                { content: 'Cloud Vision API', isCorrect: false },
                { content: 'Dialogflow', isCorrect: true },
                { content: 'Cloud Translation API', isCorrect: false },
                { content: 'BigQuery ML', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of Google Cloud\'s Migrate to Virtual Machines service?',
            explanation: 'Migrate to Virtual Machines helps you migrate VMs from on-premises, other clouds, or between Google Cloud regions with minimal downtime.',
            answers: [
                { content: 'Creating new applications', isCorrect: false },
                { content: 'Migrating virtual machines to Google Cloud from other environments', isCorrect: true },
                { content: 'Backing up databases', isCorrect: false },
                { content: 'Managing DNS records', isCorrect: false },
            ],
        },
        {
            content: 'What does "data sovereignty" mean in cloud computing?',
            explanation: 'Data sovereignty refers to the concept that data is subject to the laws and regulations of the country where it is stored or processed.',
            answers: [
                { content: 'Data can be stored anywhere without restrictions', isCorrect: false },
                { content: 'Data is subject to laws of the country where it is stored', isCorrect: true },
                { content: 'Only Google employees can access the data', isCorrect: false },
                { content: 'Data is always encrypted', isCorrect: false },
            ],
        },
        {
            content: 'Which Google Cloud service provides natural language processing capabilities?',
            explanation: 'Cloud Natural Language API provides sentiment analysis, entity recognition, content classification, and syntax analysis for text.',
            answers: [
                { content: 'Cloud Vision API', isCorrect: false },
                { content: 'Cloud Natural Language API', isCorrect: true },
                { content: 'Cloud Speech-to-Text', isCorrect: false },
                { content: 'Recommendations AI', isCorrect: false },
            ],
        },
        {
            content: 'What is the benefit of using Cloud Load Balancing?',
            explanation: 'Cloud Load Balancing distributes user traffic across multiple instances to optimize resource utilization, maximize throughput, and ensure high availability.',
            answers: [
                { content: 'Storing static files', isCorrect: false },
                { content: 'Distributing traffic across instances for high availability and performance', isCorrect: true },
                { content: 'Encrypting network traffic', isCorrect: false },
                { content: 'Managing user identities', isCorrect: false },
            ],
        },
        {
            content: 'What is Google Cloud\'s approach to "data encryption at rest"?',
            explanation: 'Google Cloud encrypts all customer data at rest by default using AES-256 encryption, without any customer action required.',
            answers: [
                { content: 'Encryption must be manually configured', isCorrect: false },
                { content: 'All data at rest is encrypted by default with AES-256', isCorrect: true },
                { content: 'Only premium customers get encryption', isCorrect: false },
                { content: 'Encryption is not available', isCorrect: false },
            ],
        },
        {
            content: 'Which Google Cloud service helps you run Apache Kafka workloads?',
            explanation: 'Managed Service for Apache Kafka provides a fully managed Apache Kafka service that reduces operational complexity.',
            answers: [
                { content: 'Pub/Sub', isCorrect: false },
                { content: 'Managed Service for Apache Kafka', isCorrect: true },
                { content: 'Dataflow', isCorrect: false },
                { content: 'Cloud Tasks', isCorrect: false },
            ],
        },
        {
            content: 'What is the concept of "total cost of ownership (TCO)" in cloud migration?',
            explanation: 'TCO includes all costs of running IT infrastructure: hardware, software, personnel, facilities, power, and maintenance costs — both direct and indirect.',
            answers: [
                { content: 'Only the monthly cloud bill', isCorrect: false },
                { content: 'All direct and indirect costs of owning and operating IT infrastructure', isCorrect: true },
                { content: 'The cost of the initial cloud setup', isCorrect: false },
                { content: 'Only hardware purchase costs', isCorrect: false },
            ],
        },
        {
            content: 'Which Google Cloud service converts speech to text?',
            explanation: 'Cloud Speech-to-Text enables developers to convert audio to text using powerful neural network models.',
            answers: [
                { content: 'Cloud Translation API', isCorrect: false },
                { content: 'Cloud Speech-to-Text', isCorrect: true },
                { content: 'Cloud Text-to-Speech', isCorrect: false },
                { content: 'Dialogflow', isCorrect: false },
            ],
        },
        {
            content: 'What is the "6 Rs" framework in cloud migration?',
            explanation: 'The 6 Rs are migration strategies: Rehost (lift and shift), Replatform, Repurchase, Refactor, Retire, and Retain.',
            answers: [
                { content: 'Six Google Cloud regions', isCorrect: false },
                { content: 'Six migration strategies: Rehost, Replatform, Repurchase, Refactor, Retire, Retain', isCorrect: true },
                { content: 'Six types of virtual machines', isCorrect: false },
                { content: 'Six security layers', isCorrect: false },
            ],
        },
        {
            content: 'Which Google Cloud compliance certification ensures protection of healthcare data?',
            explanation: 'Google Cloud supports HIPAA compliance through Business Associate Agreements (BAAs) for protecting healthcare information.',
            answers: [
                { content: 'SOC 2', isCorrect: false },
                { content: 'HIPAA', isCorrect: true },
                { content: 'ISO 27001', isCorrect: false },
                { content: 'FedRAMP', isCorrect: false },
            ],
        },
        {
            content: 'What is BigQuery ML used for?',
            explanation: 'BigQuery ML enables users to create and execute machine learning models directly in BigQuery using SQL queries.',
            answers: [
                { content: 'Managing Kubernetes clusters', isCorrect: false },
                { content: 'Creating ML models using SQL directly in BigQuery', isCorrect: true },
                { content: 'Storing machine learning datasets', isCorrect: false },
                { content: 'Monitoring application performance', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of Google Cloud\'s Security Command Center?',
            explanation: 'Security Command Center is the centralized vulnerability and threat reporting service that helps detect, investigate, and address threats.',
            answers: [
                { content: 'Managing billing', isCorrect: false },
                { content: 'Centralized security and risk management for Google Cloud assets', isCorrect: true },
                { content: 'Deploying applications', isCorrect: false },
                { content: 'Managing DNS', isCorrect: false },
            ],
        },
        {
            content: 'Which Google Cloud service is used for translating text between languages?',
            explanation: 'Cloud Translation API provides a simple programmatic interface for translating text dynamically between thousands of language pairs.',
            answers: [
                { content: 'Natural Language API', isCorrect: false },
                { content: 'Cloud Translation API', isCorrect: true },
                { content: 'Dialogflow', isCorrect: false },
                { content: 'Cloud Vision API', isCorrect: false },
            ],
        },
        {
            content: 'What is a Google Cloud Project?',
            explanation: 'A Project organizes all your Google Cloud resources. Every resource belongs to exactly one Project, which acts as a billing and access control boundary.',
            answers: [
                { content: 'A physical data center', isCorrect: false },
                { content: 'An organizational unit that groups and manages related cloud resources', isCorrect: true },
                { content: 'A type of virtual machine', isCorrect: false },
                { content: 'A networking configuration', isCorrect: false },
            ],
        },
        {
            content: 'Which service provides Google Cloud\'s managed database for wide-column NoSQL workloads?',
            explanation: 'Cloud Bigtable is a fully managed, scalable NoSQL wide-column database suitable for large analytical and operational workloads.',
            answers: [
                { content: 'Firestore', isCorrect: false },
                { content: 'Cloud Bigtable', isCorrect: true },
                { content: 'Cloud SQL', isCorrect: false },
                { content: 'Memorystore', isCorrect: false },
            ],
        },
        {
            content: 'What does "elasticity" mean in cloud computing?',
            explanation: 'Elasticity is the ability to automatically scale resources up or down based on demand, ensuring efficient usage with no over-provisioning.',
            answers: [
                { content: 'Resources are fixed and cannot change', isCorrect: false },
                { content: 'Ability to automatically scale resources dynamically based on demand', isCorrect: true },
                { content: 'Only scaling up is possible', isCorrect: false },
                { content: 'Requires manual intervention', isCorrect: false },
            ],
        },
        {
            content: 'Which Google Cloud service provides managed Redis and Memcached instances?',
            explanation: 'Memorystore is a fully managed in-memory data store service for Redis and Memcached, providing sub-millisecond data access.',
            answers: [
                { content: 'Cloud SQL', isCorrect: false },
                { content: 'Memorystore', isCorrect: true },
                { content: 'Firestore', isCorrect: false },
                { content: 'Bigtable', isCorrect: false },
            ],
        },
        {
            content: 'What is the Google Cloud Adoption Framework?',
            explanation: 'The Cloud Adoption Framework provides guidance for organizations to plan and execute their cloud transformation journey across technology, process, and people.',
            answers: [
                { content: 'A billing tool', isCorrect: false },
                { content: 'A structured approach to plan and execute cloud adoption', isCorrect: true },
                { content: 'A programming framework', isCorrect: false },
                { content: 'A container orchestration tool', isCorrect: false },
            ],
        },
        {
            content: 'Which Google Cloud service provides video intelligence capabilities?',
            explanation: 'Video Intelligence API enables you to annotate videos with contextual information such as labels, shot changes, and explicit content detection.',
            answers: [
                { content: 'Cloud Vision API', isCorrect: false },
                { content: 'Video Intelligence API', isCorrect: true },
                { content: 'Cloud Speech-to-Text', isCorrect: false },
                { content: 'Dialogflow', isCorrect: false },
            ],
        },
        {
            content: 'What are Labels in Google Cloud used for?',
            explanation: 'Labels are key-value pairs that help organize resources and can be used for cost allocation, filtering, and managing resources.',
            answers: [
                { content: 'Encrypting data', isCorrect: false },
                { content: 'Organizing and categorizing resources for management and billing', isCorrect: true },
                { content: 'Running queries on databases', isCorrect: false },
                { content: 'Controlling network traffic', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of Cloud Interconnect?',
            explanation: 'Cloud Interconnect provides high-bandwidth, low-latency connections between your on-premises network and Google Cloud VPC.',
            answers: [
                { content: 'Connecting two VPCs together', isCorrect: false },
                { content: 'Providing dedicated or partner connectivity between on-premises and Google Cloud', isCorrect: true },
                { content: 'Managing DNS records', isCorrect: false },
                { content: 'Load balancing traffic', isCorrect: false },
            ],
        },
        {
            content: 'What are the three main categories of Google Cloud services?',
            explanation: 'Google Cloud services fall into three categories: IaaS (like Compute Engine), PaaS (like App Engine), and SaaS (like Google Workspace).',
            answers: [
                { content: 'Bronze, Silver, Gold', isCorrect: false },
                { content: 'Infrastructure as a Service, Platform as a Service, Software as a Service', isCorrect: true },
                { content: 'Basic, Standard, Premium', isCorrect: false },
                { content: 'Free, Paid, Enterprise', isCorrect: false },
            ],
        },
        {
            content: 'What does Google Cloud\'s "defense in depth" security approach mean?',
            explanation: 'Defense in depth is a layered approach to security where multiple security controls are placed at different levels to protect against various threats.',
            answers: [
                { content: 'Using only one strong firewall', isCorrect: false },
                { content: 'Multiple layers of security controls to protect data and workloads', isCorrect: true },
                { content: 'Encrypting data only at rest', isCorrect: false },
                { content: 'Security is only Google\'s responsibility', isCorrect: false },
            ],
        },
        {
            content: 'Which service allows running SQL analytics directly on Cloud Storage data without loading it?',
            explanation: 'BigQuery can query data stored directly in Cloud Storage through external tables, without needing to load the data first.',
            answers: [
                { content: 'Cloud SQL', isCorrect: false },
                { content: 'BigQuery (with external tables)', isCorrect: true },
                { content: 'Dataflow', isCorrect: false },
                { content: 'Dataproc', isCorrect: false },
            ],
        },
        {
            content: 'What is an API in the context of Google Cloud?',
            explanation: 'An API (Application Programming Interface) is a set of protocols and tools for building software, allowing different applications and services to communicate.',
            answers: [
                { content: 'A physical server', isCorrect: false },
                { content: 'A set of protocols enabling applications and services to communicate', isCorrect: true },
                { content: 'A database type', isCorrect: false },
                { content: 'A billing plan', isCorrect: false },
            ],
        },
        {
            content: 'What are Sole-tenant nodes in Compute Engine?',
            explanation: 'Sole-tenant nodes are physical Compute Engine servers dedicated exclusively to your workloads, useful for compliance and licensing requirements.',
            answers: [
                { content: 'Free virtual machines', isCorrect: false },
                { content: 'Dedicated physical servers for a single customer\'s workloads', isCorrect: true },
                { content: 'Shared virtual machines with priority access', isCorrect: false },
                { content: 'Serverless compute instances', isCorrect: false },
            ],
        },
        {
            content: 'How does Google Cloud help organizations with regulatory compliance?',
            explanation: 'Google Cloud maintains numerous industry certifications (ISO, SOC, HIPAA, PCI DSS, etc.) and provides compliance tools and data residency controls.',
            answers: [
                { content: 'Compliance is not supported', isCorrect: false },
                { content: 'Through certifications, compliance tools, and data residency controls', isCorrect: true },
                { content: 'Only for government customers', isCorrect: false },
                { content: 'By storing all data in one country', isCorrect: false },
            ],
        },
        {
            content: 'What is Active Assist in Google Cloud?',
            explanation: 'Active Assist uses data, intelligence, and ML to reduce cloud complexity and administrative toil by providing recommendations for cost, performance, and security.',
            answers: [
                { content: 'A chatbot service', isCorrect: false },
                { content: 'AI-powered recommendations for optimizing cost, performance, and security', isCorrect: true },
                { content: 'A customer support tool', isCorrect: false },
                { content: 'A deployment automation service', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of Google Cloud Billing Budgets and Alerts?',
            explanation: 'Billing budgets and alerts help you monitor and control costs by setting spending thresholds and receiving notifications when costs approach or exceed them.',
            answers: [
                { content: 'To automatically stop all services when budget is exceeded', isCorrect: false },
                { content: 'To monitor spending and receive notifications at defined thresholds', isCorrect: true },
                { content: 'To get discounts on services', isCorrect: false },
                { content: 'To share billing between projects', isCorrect: false },
            ],
        },
        {
            content: 'What is the key difference between horizontal and vertical scaling?',
            explanation: 'Horizontal scaling adds more instances to distribute load, while vertical scaling increases the resources (CPU, RAM) of existing instances.',
            answers: [
                { content: 'They are the same', isCorrect: false },
                { content: 'Horizontal adds instances; vertical increases resources on existing instances', isCorrect: true },
                { content: 'Only horizontal scaling is possible in the cloud', isCorrect: false },
                { content: 'Vertical scaling is always cheaper', isCorrect: false },
            ],
        },
        {
            content: 'Which Google Cloud service provides Transfer Appliance for large-scale data migration?',
            explanation: 'Transfer Appliance is a high-capacity storage device shipped to your location that enables you to securely transfer large amounts of data to Google Cloud.',
            answers: [
                { content: 'Cloud Interconnect', isCorrect: false },
                { content: 'Transfer Appliance', isCorrect: true },
                { content: 'Storage Transfer Service', isCorrect: false },
                { content: 'Cloud VPN', isCorrect: false },
            ],
        },
        {
            content: 'What is the concept of "multi-cloud" strategy?',
            explanation: 'A multi-cloud strategy involves using services from multiple cloud providers to avoid vendor lock-in, increase resilience, and leverage best-of-breed services.',
            answers: [
                { content: 'Using only Google Cloud services', isCorrect: false },
                { content: 'Using services from multiple cloud providers simultaneously', isCorrect: true },
                { content: 'Having multiple data centers on-premises', isCorrect: false },
                { content: 'Running multiple applications on one VM', isCorrect: false },
            ],
        },
        {
            content: 'What is the Google Cloud Partner Advantage Program?',
            explanation: 'The Partner Advantage Program helps partners build, market, and sell with Google Cloud by providing training, resources, and go-to-market support.',
            answers: [
                { content: 'A free tier for individual developers', isCorrect: false },
                { content: 'A program for partners to build and sell solutions with Google Cloud', isCorrect: true },
                { content: 'An enterprise support tier', isCorrect: false },
                { content: 'A student learning program', isCorrect: false },
            ],
        },
        {
            content: 'Which Google Cloud service provides a managed CI/CD platform?',
            explanation: 'Cloud Build is a fully managed CI/CD platform that lets you build, test, and deploy software quickly across all languages and frameworks.',
            answers: [
                { content: 'Cloud Source Repositories', isCorrect: false },
                { content: 'Cloud Build', isCorrect: true },
                { content: 'Cloud Run', isCorrect: false },
                { content: 'Artifact Registry', isCorrect: false },
            ],
        },
        {
            content: 'What is "vendor lock-in" in the context of cloud computing?',
            explanation: 'Vendor lock-in occurs when switching to another cloud provider becomes difficult or costly due to proprietary technologies, data formats, or APIs.',
            answers: [
                { content: 'Physical security of servers', isCorrect: false },
                { content: 'Difficulty switching providers due to dependency on proprietary services', isCorrect: true },
                { content: 'Being limited to one data center', isCorrect: false },
                { content: 'A type of access control', isCorrect: false },
            ],
        },
        {
            content: 'What is the benefit of Google Cloud\'s global fiber network?',
            explanation: 'Google\'s private global fiber network reduces latency and improves performance by routing traffic through Google\'s own backbone rather than the public Internet.',
            answers: [
                { content: 'Free internet for customers', isCorrect: false },
                { content: 'Low latency and high performance through private global infrastructure', isCorrect: true },
                { content: 'Unlimited bandwidth for all customers', isCorrect: false },
                { content: 'Only available in North America', isCorrect: false },
            ],
        },
    ],
};
