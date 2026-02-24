export const cdlExam1 = {
    title: 'Google Cloud Digital Leader - Practice Test 1',
    description: 'Google Cloud Digital Leader practice test with 50 questions on cloud concepts, GCP products & services, digital transformation, and business use cases.',
    durationMinutes: 90,
    courseId: 12,
    questions: [
        {
            content: 'Which Google Cloud service provides serverless compute for running code in response to events?',
            explanation: 'Cloud Functions is Google Cloud\'s serverless, event-driven compute platform that lets you run your code without managing servers.',
            answers: [
                { content: 'Compute Engine', isCorrect: false },
                { content: 'Cloud Functions', isCorrect: true },
                { content: 'Google Kubernetes Engine', isCorrect: false },
                { content: 'App Engine', isCorrect: false },
            ],
        },
        {
            content: 'What is Google Cloud\'s primary object storage service?',
            explanation: 'Cloud Storage is a unified object storage service offering high durability, availability, and performance for any amount of data.',
            answers: [
                { content: 'Cloud SQL', isCorrect: false },
                { content: 'Cloud Storage', isCorrect: true },
                { content: 'Persistent Disk', isCorrect: false },
                { content: 'Cloud Filestore', isCorrect: false },
            ],
        },
        {
            content: 'Which service is Google Cloud\'s fully managed data warehouse for large-scale analytics?',
            explanation: 'BigQuery is a serverless, multi-cloud data warehouse designed for business agility, built-in ML, and petabyte-scale analytics.',
            answers: [
                { content: 'Cloud Spanner', isCorrect: false },
                { content: 'BigQuery', isCorrect: true },
                { content: 'Dataflow', isCorrect: false },
                { content: 'Cloud SQL', isCorrect: false },
            ],
        },
        {
            content: 'What does the term "digital transformation" refer to in Google Cloud context?',
            explanation: 'Digital transformation is the adoption of digital technology to fundamentally change how businesses operate and deliver value to customers.',
            answers: [
                { content: 'Moving all data to paper records', isCorrect: false },
                { content: 'Using technology to fundamentally change business operations and customer value', isCorrect: true },
                { content: 'Replacing all employees with robots', isCorrect: false },
                { content: 'Only using Google products', isCorrect: false },
            ],
        },
        {
            content: 'Which Google Cloud service provides managed relational databases?',
            explanation: 'Cloud SQL is a fully managed relational database service that supports MySQL, PostgreSQL, and SQL Server.',
            answers: [
                { content: 'Cloud Spanner', isCorrect: false },
                { content: 'Cloud SQL', isCorrect: true },
                { content: 'Firestore', isCorrect: false },
                { content: 'Bigtable', isCorrect: false },
            ],
        },
        {
            content: 'What is the Google Cloud resource hierarchy from top to bottom?',
            explanation: 'The Google Cloud resource hierarchy is Organization → Folders → Projects → Resources, providing structured management and policy inheritance.',
            answers: [
                { content: 'Projects → Resources → Organization → Folders', isCorrect: false },
                { content: 'Organization → Folders → Projects → Resources', isCorrect: true },
                { content: 'Resources → Projects → Folders → Organization', isCorrect: false },
                { content: 'Folders → Organization → Projects → Resources', isCorrect: false },
            ],
        },
        {
            content: 'Which Google Cloud service allows you to run containers without managing the underlying infrastructure?',
            explanation: 'Cloud Run is a fully managed serverless platform that lets you run stateless containers invocable via HTTP requests.',
            answers: [
                { content: 'Compute Engine', isCorrect: false },
                { content: 'Cloud Run', isCorrect: true },
                { content: 'Cloud Functions', isCorrect: false },
                { content: 'Cloud Composer', isCorrect: false },
            ],
        },
        {
            content: 'What is the primary benefit of using Google Kubernetes Engine (GKE)?',
            explanation: 'GKE provides a managed Kubernetes environment for deploying, managing, and scaling containerized applications using Google infrastructure.',
            answers: [
                { content: 'Hosting static websites', isCorrect: false },
                { content: 'Orchestrating and managing containerized applications at scale', isCorrect: true },
                { content: 'Storing large files', isCorrect: false },
                { content: 'Running SQL queries', isCorrect: false },
            ],
        },
        {
            content: 'Which pricing model does Google Cloud primarily use?',
            explanation: 'Google Cloud primarily uses a pay-as-you-go (consumption-based) pricing model where you only pay for resources you actually use.',
            answers: [
                { content: 'Fixed annual fee', isCorrect: false },
                { content: 'Pay-as-you-go (consumption-based)', isCorrect: true },
                { content: 'Free for all services', isCorrect: false },
                { content: 'Per-user licensing only', isCorrect: false },
            ],
        },
        {
            content: 'What is Cloud Identity and Access Management (IAM) used for?',
            explanation: 'Cloud IAM lets you manage access control by defining who (identity) has what access (role) for which resource.',
            answers: [
                { content: 'Encrypting data at rest', isCorrect: false },
                { content: 'Managing who has access to what resources', isCorrect: true },
                { content: 'Monitoring application performance', isCorrect: false },
                { content: 'Creating virtual machines', isCorrect: false },
            ],
        },
        {
            content: 'Which Google Cloud service is best suited for building machine learning models without extensive ML expertise?',
            explanation: 'Vertex AI (including AutoML) enables developers to build, deploy, and scale ML models with minimal ML expertise using automated tools.',
            answers: [
                { content: 'BigQuery', isCorrect: false },
                { content: 'Vertex AI / AutoML', isCorrect: true },
                { content: 'Dataflow', isCorrect: false },
                { content: 'Cloud Functions', isCorrect: false },
            ],
        },
        {
            content: 'What does Google Cloud\'s Shared Responsibility Model define?',
            explanation: 'The Shared Responsibility Model defines which security responsibilities belong to Google and which belong to the customer, varying by service type.',
            answers: [
                { content: 'How to share data between organizations', isCorrect: false },
                { content: 'Security responsibilities split between Google and the customer', isCorrect: true },
                { content: 'How to share billing between teams', isCorrect: false },
                { content: 'Google\'s internal team structure', isCorrect: false },
            ],
        },
        {
            content: 'Which Google Cloud service provides a Content Delivery Network (CDN)?',
            explanation: 'Cloud CDN leverages Google\'s globally distributed edge points of presence to cache content close to end users for faster delivery.',
            answers: [
                { content: 'Cloud DNS', isCorrect: false },
                { content: 'Cloud CDN', isCorrect: true },
                { content: 'Cloud Armor', isCorrect: false },
                { content: 'Cloud Load Balancing', isCorrect: false },
            ],
        },
        {
            content: 'What is the benefit of using Committed Use Discounts (CUDs) in Google Cloud?',
            explanation: 'CUDs provide significant discounts (up to 57%) when you commit to using a minimum level of resources for 1 or 3 years.',
            answers: [
                { content: 'Free access to all services', isCorrect: false },
                { content: 'Significant discounts for committing to resource usage over 1-3 years', isCorrect: true },
                { content: 'Faster network speeds', isCorrect: false },
                { content: 'Priority customer support', isCorrect: false },
            ],
        },
        {
            content: 'Which Google Cloud service is used for real-time messaging between applications?',
            explanation: 'Pub/Sub is an asynchronous messaging service that decouples services that produce events from services that process events.',
            answers: [
                { content: 'Cloud Tasks', isCorrect: false },
                { content: 'Pub/Sub', isCorrect: true },
                { content: 'Cloud Scheduler', isCorrect: false },
                { content: 'Cloud Endpoints', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of Google Cloud\'s Virtual Private Cloud (VPC)?',
            explanation: 'VPC provides networking functionality for your Google Cloud resources, offering isolation, subnetting, routing, and firewall capabilities.',
            answers: [
                { content: 'Storing files in the cloud', isCorrect: false },
                { content: 'Providing private networking for cloud resources', isCorrect: true },
                { content: 'Running machine learning models', isCorrect: false },
                { content: 'Managing user identities', isCorrect: false },
            ],
        },
        {
            content: 'Which storage class in Cloud Storage is best for data accessed less than once a month?',
            explanation: 'Coldline storage is designed for data accessed less than once a quarter, offering lower storage costs with higher access costs.',
            answers: [
                { content: 'Standard', isCorrect: false },
                { content: 'Nearline', isCorrect: false },
                { content: 'Coldline', isCorrect: true },
                { content: 'Archive', isCorrect: false },
            ],
        },
        {
            content: 'What does Google Cloud\'s Operations Suite (formerly Stackdriver) provide?',
            explanation: 'Cloud Operations Suite provides monitoring, logging, and diagnostics for applications running on Google Cloud and other environments.',
            answers: [
                { content: 'Database management', isCorrect: false },
                { content: 'Monitoring, logging, and application diagnostics', isCorrect: true },
                { content: 'Container orchestration', isCorrect: false },
                { content: 'Network load balancing', isCorrect: false },
            ],
        },
        {
            content: 'Which Google Cloud service provides DDoS protection and Web Application Firewall (WAF)?',
            explanation: 'Cloud Armor provides DDoS protection and WAF capabilities to defend applications from web attacks.',
            answers: [
                { content: 'Cloud NAT', isCorrect: false },
                { content: 'Cloud Armor', isCorrect: true },
                { content: 'Cloud DNS', isCorrect: false },
                { content: 'VPC Firewall', isCorrect: false },
            ],
        },
        {
            content: 'What is the benefit of using Google Cloud\'s Sustained Use Discounts?',
            explanation: 'Sustained Use Discounts are automatic discounts for running specific Compute Engine resources for a significant portion of the billing month.',
            answers: [
                { content: 'You must commit for 3 years', isCorrect: false },
                { content: 'Automatic discounts for running workloads for extended periods in a month', isCorrect: true },
                { content: 'Only available for enterprise customers', isCorrect: false },
                { content: 'Must apply through a partner', isCorrect: false },
            ],
        },
        {
            content: 'Which Google Cloud service is used for batch and stream data processing?',
            explanation: 'Dataflow is a fully managed service for executing Apache Beam pipelines for batch and streaming data processing.',
            answers: [
                { content: 'Dataproc', isCorrect: false },
                { content: 'Dataflow', isCorrect: true },
                { content: 'BigQuery', isCorrect: false },
                { content: 'Pub/Sub', isCorrect: false },
            ],
        },
        {
            content: 'What does the principle of "Least Privilege" mean in Google Cloud IAM?',
            explanation: 'The principle of least privilege means granting users only the minimum permissions necessary to perform their job duties.',
            answers: [
                { content: 'Everyone should have owner access', isCorrect: false },
                { content: 'Grant only the minimum permissions necessary for a task', isCorrect: true },
                { content: 'Restrict access to only one person', isCorrect: false },
                { content: 'Use only service accounts', isCorrect: false },
            ],
        },
        {
            content: 'Which Google Cloud service provides a globally consistent, horizontally scalable relational database?',
            explanation: 'Cloud Spanner is a fully managed relational database offering transactional consistency at global scale, schemas, SQL, and automatic replication.',
            answers: [
                { content: 'Cloud SQL', isCorrect: false },
                { content: 'Cloud Spanner', isCorrect: true },
                { content: 'Firestore', isCorrect: false },
                { content: 'Bigtable', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of Google Cloud\'s Anthos platform?',
            explanation: 'Anthos is a hybrid and multi-cloud platform that lets you build, deploy, and manage applications consistently across on-premises, Google Cloud, and other clouds.',
            answers: [
                { content: 'A machine learning framework', isCorrect: false },
                { content: 'A hybrid and multi-cloud application platform', isCorrect: true },
                { content: 'A data visualization tool', isCorrect: false },
                { content: 'A database migration service', isCorrect: false },
            ],
        },
        {
            content: 'Which type of cloud deployment model does Google Cloud primarily offer?',
            explanation: 'Google Cloud primarily operates as a public cloud, providing computing resources over the Internet to multiple customers (multi-tenant).',
            answers: [
                { content: 'Private Cloud only', isCorrect: false },
                { content: 'Public Cloud', isCorrect: true },
                { content: 'Community Cloud', isCorrect: false },
                { content: 'On-premises only', isCorrect: false },
            ],
        },
        {
            content: 'What is Google Cloud\'s App Engine?',
            explanation: 'App Engine is a fully managed, serverless platform for building and deploying applications at scale without managing infrastructure.',
            answers: [
                { content: 'A virtual machine service', isCorrect: false },
                { content: 'A fully managed PaaS for building scalable web applications', isCorrect: true },
                { content: 'A container orchestration tool', isCorrect: false },
                { content: 'A data analytics service', isCorrect: false },
            ],
        },
        {
            content: 'Which Google Cloud service provides managed Apache Hadoop and Apache Spark clusters?',
            explanation: 'Dataproc is a managed service for running Apache Hadoop, Spark, and other open-source big data frameworks.',
            answers: [
                { content: 'Dataflow', isCorrect: false },
                { content: 'Dataproc', isCorrect: true },
                { content: 'BigQuery', isCorrect: false },
                { content: 'Cloud Composer', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of the Google Cloud Pricing Calculator?',
            explanation: 'The Pricing Calculator allows you to estimate costs for Google Cloud products and services based on your expected usage.',
            answers: [
                { content: 'To monitor real-time spending', isCorrect: false },
                { content: 'To estimate costs for GCP services before deployment', isCorrect: true },
                { content: 'To automatically reduce billing', isCorrect: false },
                { content: 'To compare GCP with AWS pricing', isCorrect: false },
            ],
        },
        {
            content: 'Which Google Cloud service provides a NoSQL document database?',
            explanation: 'Firestore is a NoSQL document database built for automatic scaling, high performance, and ease of application development.',
            answers: [
                { content: 'Cloud SQL', isCorrect: false },
                { content: 'Firestore', isCorrect: true },
                { content: 'Cloud Spanner', isCorrect: false },
                { content: 'Bigtable', isCorrect: false },
            ],
        },
        {
            content: 'What is the concept of "CapEx vs OpEx" in cloud computing?',
            explanation: 'Cloud computing shifts spending from CapEx (large upfront investment in hardware) to OpEx (ongoing operational expenses based on usage).',
            answers: [
                { content: 'CapEx and OpEx are the same thing', isCorrect: false },
                { content: 'Cloud shifts from upfront capital investment (CapEx) to operational expenses (OpEx)', isCorrect: true },
                { content: 'Cloud always requires CapEx', isCorrect: false },
                { content: 'OpEx only applies to on-premises', isCorrect: false },
            ],
        },
        {
            content: 'Which Google Cloud service helps protect sensitive data through inspection, classification, and de-identification?',
            explanation: 'Cloud Data Loss Prevention (DLP) helps discover, classify, and protect sensitive information across your organization.',
            answers: [
                { content: 'Cloud Armor', isCorrect: false },
                { content: 'Cloud DLP (Data Loss Prevention)', isCorrect: true },
                { content: 'Secret Manager', isCorrect: false },
                { content: 'Cloud IAM', isCorrect: false },
            ],
        },
        {
            content: 'What is a Google Cloud Region?',
            explanation: 'A Region is a specific geographic location where you can run your resources, containing multiple zones for high availability.',
            answers: [
                { content: 'A single server rack', isCorrect: false },
                { content: 'A geographic area with multiple zones for hosting resources', isCorrect: true },
                { content: 'A virtual network', isCorrect: false },
                { content: 'A billing account', isCorrect: false },
            ],
        },
        {
            content: 'What is the difference between a Region and a Zone in Google Cloud?',
            explanation: 'A Region is a geographic area containing multiple Zones. A Zone is an isolated deployment area within a Region with independent power, cooling, and networking.',
            answers: [
                { content: 'They are the same concept', isCorrect: false },
                { content: 'A Region contains multiple Zones; each Zone is an independent deployment area', isCorrect: true },
                { content: 'A Zone is larger than a Region', isCorrect: false },
                { content: 'Zones only exist in the US', isCorrect: false },
            ],
        },
        {
            content: 'Which Google Cloud service allows you to manage secrets such as API keys and passwords?',
            explanation: 'Secret Manager provides a secure and convenient place to store API keys, passwords, certificates, and other sensitive data.',
            answers: [
                { content: 'Cloud KMS', isCorrect: false },
                { content: 'Secret Manager', isCorrect: true },
                { content: 'Cloud IAM', isCorrect: false },
                { content: 'Cloud Armor', isCorrect: false },
            ],
        },
        {
            content: 'What is the primary use case for Compute Engine?',
            explanation: 'Compute Engine provides highly customizable virtual machines running on Google\'s infrastructure, suitable for a wide range of workloads.',
            answers: [
                { content: 'Serverless function execution', isCorrect: false },
                { content: 'Running customizable virtual machines (IaaS)', isCorrect: true },
                { content: 'Managed container orchestration', isCorrect: false },
                { content: 'Data analytics', isCorrect: false },
            ],
        },
        {
            content: 'What does Google Cloud\'s Carbon Footprint tool help with?',
            explanation: 'The Carbon Footprint tool measures the gross carbon emissions associated with your Google Cloud usage and helps you make informed sustainability decisions.',
            answers: [
                { content: 'Reducing billing costs', isCorrect: false },
                { content: 'Measuring and reducing the carbon emissions of your cloud usage', isCorrect: true },
                { content: 'Optimizing network performance', isCorrect: false },
                { content: 'Managing user access', isCorrect: false },
            ],
        },
        {
            content: 'Which service provides Google Cloud\'s managed DNS?',
            explanation: 'Cloud DNS is a scalable, reliable, and managed authoritative DNS hosting service running on the same infrastructure as Google.',
            answers: [
                { content: 'Cloud CDN', isCorrect: false },
                { content: 'Cloud DNS', isCorrect: true },
                { content: 'Cloud Domains', isCorrect: false },
                { content: 'Cloud Load Balancing', isCorrect: false },
            ],
        },
        {
            content: 'What does "Infrastructure as a Service (IaaS)" mean in Google Cloud?',
            explanation: 'IaaS provides virtualized computing resources over the Internet. In Google Cloud, Compute Engine is the primary IaaS offering.',
            answers: [
                { content: 'Google manages everything including your applications', isCorrect: false },
                { content: 'Google provides virtualized infrastructure; the customer manages OS and applications', isCorrect: true },
                { content: 'The customer manages physical hardware', isCorrect: false },
                { content: 'Only containers are available', isCorrect: false },
            ],
        },
        {
            content: 'What is Google Workspace?',
            explanation: 'Google Workspace is a SaaS productivity suite including Gmail, Drive, Docs, Sheets, Meet, and more for collaboration.',
            answers: [
                { content: 'A virtual machine service', isCorrect: false },
                { content: 'A SaaS productivity and collaboration suite', isCorrect: true },
                { content: 'A database service', isCorrect: false },
                { content: 'A container platform', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of Google Cloud\'s Data Catalog?',
            explanation: 'Data Catalog is a fully managed, scalable metadata management service that helps organizations quickly discover, understand, and manage data.',
            answers: [
                { content: 'Storing large datasets', isCorrect: false },
                { content: 'Discovering and managing metadata for data governance', isCorrect: true },
                { content: 'Running machine learning models', isCorrect: false },
                { content: 'Monitoring application performance', isCorrect: false },
            ],
        },
        {
            content: 'Which Google Cloud service is used for workflow orchestration of data pipelines?',
            explanation: 'Cloud Composer is a fully managed workflow orchestration service built on Apache Airflow for authoring, scheduling, and monitoring pipelines.',
            answers: [
                { content: 'Dataflow', isCorrect: false },
                { content: 'Cloud Composer', isCorrect: true },
                { content: 'Dataproc', isCorrect: false },
                { content: 'Pub/Sub', isCorrect: false },
            ],
        },
        {
            content: 'What is the Google Cloud Free Tier?',
            explanation: 'The Google Cloud Free Tier includes $300 in free credits for 90 days and always-free products with certain usage limits.',
            answers: [
                { content: 'Unlimited free access to all services', isCorrect: false },
                { content: 'Free credits for 90 days plus always-free products with usage limits', isCorrect: true },
                { content: 'Free for students only', isCorrect: false },
                { content: 'Only available in the US', isCorrect: false },
            ],
        },
        {
            content: 'What is Looker (Google Cloud) primarily used for?',
            explanation: 'Looker is a business intelligence and data analytics platform that helps organizations explore, share, and visualize data.',
            answers: [
                { content: 'Container management', isCorrect: false },
                { content: 'Business intelligence and data visualization', isCorrect: true },
                { content: 'Network security', isCorrect: false },
                { content: 'DNS hosting', isCorrect: false },
            ],
        },
        {
            content: 'Which Google Cloud service provides encryption key management?',
            explanation: 'Cloud KMS (Key Management Service) lets you manage cryptographic keys for your cloud services and applications.',
            answers: [
                { content: 'Secret Manager', isCorrect: false },
                { content: 'Cloud KMS', isCorrect: true },
                { content: 'Cloud IAM', isCorrect: false },
                { content: 'Cloud DLP', isCorrect: false },
            ],
        },
        {
            content: 'What happens to data stored in Google Cloud when resources are deleted?',
            explanation: 'Google follows data deletion policies that ensure data is securely erased from storage media when resources are deleted or decommissioned.',
            answers: [
                { content: 'Data remains forever', isCorrect: false },
                { content: 'Data is securely erased following Google\'s data deletion policies', isCorrect: true },
                { content: 'Data is moved to another account', isCorrect: false },
                { content: 'Data is only hidden but not deleted', isCorrect: false },
            ],
        },
        {
            content: 'What is the benefit of using preemptible VMs (Spot VMs) in Compute Engine?',
            explanation: 'Preemptible/Spot VMs are short-lived instances available at a much lower price (60-91% discount) than regular instances, suitable for fault-tolerant workloads.',
            answers: [
                { content: 'Guaranteed 99.99% uptime', isCorrect: false },
                { content: 'Significant cost savings for fault-tolerant, non-critical workloads', isCorrect: true },
                { content: 'Faster CPU performance', isCorrect: false },
                { content: 'Free network egress', isCorrect: false },
            ],
        },
        {
            content: 'What is Google Cloud\'s approach to sustainability?',
            explanation: 'Google matches 100% of its electricity consumption with renewable energy and aims to run on carbon-free energy 24/7 by 2030.',
            answers: [
                { content: 'No sustainability goals', isCorrect: false },
                { content: 'Matches 100% electricity with renewable energy, aiming for 24/7 carbon-free by 2030', isCorrect: true },
                { content: 'Only uses solar panels', isCorrect: false },
                { content: 'Sustainability is customer responsibility', isCorrect: false },
            ],
        },
        {
            content: 'Which Google Cloud service provides API management capabilities?',
            explanation: 'Apigee is Google Cloud\'s full-lifecycle API management platform that helps design, secure, analyze, and scale APIs.',
            answers: [
                { content: 'Cloud Endpoints', isCorrect: false },
                { content: 'Apigee', isCorrect: true },
                { content: 'Cloud Run', isCorrect: false },
                { content: 'Cloud Functions', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of Google Cloud\'s Organization Policy Service?',
            explanation: 'Organization Policy Service provides centralized, programmatic control over your organization\'s cloud resources to enforce constraints.',
            answers: [
                { content: 'Managing billing', isCorrect: false },
                { content: 'Enforcing constraints and governance across cloud resources', isCorrect: true },
                { content: 'Deploying applications', isCorrect: false },
                { content: 'Monitoring logs', isCorrect: false },
            ],
        },
    ],
};
