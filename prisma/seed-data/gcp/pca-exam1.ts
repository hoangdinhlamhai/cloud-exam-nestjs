export const pcaExam1 = {
    title: 'Google Cloud Professional Cloud Architect - Practice Test 1',
    description: 'Professional Cloud Architect practice test with 50 questions on designing reliable, secure, and cost-effective solutions on Google Cloud.',
    durationMinutes: 120,
    courseId: 14,
    questions: [
        {
            content: 'A company wants to ensure their application maintains 99.99% availability. Which deployment strategy should they use?',
            explanation: 'Multi-region deployment with global load balancing provides the highest availability (99.99%+) by distributing workloads across geographically separated regions.',
            answers: [
                { content: 'Single zone deployment', isCorrect: false },
                { content: 'Multi-region deployment with global load balancing', isCorrect: true },
                { content: 'Single region with multiple zones', isCorrect: false },
                { content: 'On-premises with cloud backup', isCorrect: false },
            ],
        },
        {
            content: 'A startup needs a globally consistent relational database that scales horizontally. Which service should they choose?',
            explanation: 'Cloud Spanner provides global consistency with horizontal scaling, combining the benefits of relational databases with NoSQL scalability.',
            answers: [
                { content: 'Cloud SQL', isCorrect: false },
                { content: 'Cloud Spanner', isCorrect: true },
                { content: 'Firestore', isCorrect: false },
                { content: 'BigQuery', isCorrect: false },
            ],
        },
        {
            content: 'An organization wants to implement a microservices architecture. Which Google Cloud services are most appropriate for container orchestration?',
            explanation: 'GKE provides enterprise-grade container orchestration with Kubernetes, supporting complex microservices deployments.',
            answers: [
                { content: 'Compute Engine with Docker', isCorrect: false },
                { content: 'Google Kubernetes Engine (GKE)', isCorrect: true },
                { content: 'Cloud Functions', isCorrect: false },
                { content: 'App Engine Standard', isCorrect: false },
            ],
        },
        {
            content: 'A company needs to process millions of events per second from IoT devices. Which architecture pattern should they use?',
            explanation: 'Pub/Sub for event ingestion, followed by Dataflow for stream processing, and BigQuery or Bigtable for storage is the recommended pattern.',
            answers: [
                { content: 'Cloud SQL with polling', isCorrect: false },
                { content: 'Pub/Sub → Dataflow → BigQuery/Bigtable', isCorrect: true },
                { content: 'Cloud Functions with Cloud Storage', isCorrect: false },
                { content: 'Compute Engine with custom message queue', isCorrect: false },
            ],
        },
        {
            content: 'A financial services company requires that all data be encrypted with keys they control. Which encryption approach should they use?',
            explanation: 'Customer-Managed Encryption Keys (CMEK) in Cloud KMS give the customer full control over encryption key lifecycle.',
            answers: [
                { content: 'Google default encryption', isCorrect: false },
                { content: 'Customer-Managed Encryption Keys (CMEK)', isCorrect: true },
                { content: 'Client-side encryption only', isCorrect: false },
                { content: 'No encryption needed', isCorrect: false },
            ],
        },
        {
            content: 'Which design pattern best supports a system that needs to be loosely coupled and asynchronous?',
            explanation: 'Event-driven architecture using Pub/Sub allows components to communicate asynchronously, promoting loose coupling.',
            answers: [
                { content: 'Synchronous REST API calls', isCorrect: false },
                { content: 'Event-driven architecture with Pub/Sub', isCorrect: true },
                { content: 'Direct database sharing', isCorrect: false },
                { content: 'Shared file system', isCorrect: false },
            ],
        },
        {
            content: 'A company is migrating a monolithic application to Google Cloud. What is the recommended first step?',
            explanation: 'Lift-and-shift (rehosting) to Compute Engine is the fastest initial migration step, allowing later modernization without blocking migration.',
            answers: [
                { content: 'Immediately refactor into microservices', isCorrect: false },
                { content: 'Lift-and-shift to Compute Engine first, then modernize', isCorrect: true },
                { content: 'Rewrite from scratch on Cloud Run', isCorrect: false },
                { content: 'Keep on-premises and use VPN', isCorrect: false },
            ],
        },
        {
            content: 'Which Google Cloud service is best for running stateless, request-driven microservices?',
            explanation: 'Cloud Run is ideal for stateless, request-driven microservices because it scales automatically (including to zero) and charges only for actual usage.',
            answers: [
                { content: 'Compute Engine', isCorrect: false },
                { content: 'Cloud Run', isCorrect: true },
                { content: 'Cloud SQL', isCorrect: false },
                { content: 'GKE with always-on pods', isCorrect: false },
            ],
        },
        {
            content: 'A company needs to implement a disaster recovery plan with an RPO of near-zero and RTO of minutes. Which strategy should they use?',
            explanation: 'Hot standby (active-passive) with continuous replication provides near-zero RPO and minutes RTO, though at higher cost.',
            answers: [
                { content: 'Cold backup with weekly snapshots', isCorrect: false },
                { content: 'Hot standby with continuous replication', isCorrect: true },
                { content: 'Warm standby checked daily', isCorrect: false },
                { content: 'Backup to Cloud Storage only', isCorrect: false },
            ],
        },
        {
            content: 'Which network topology should you use to connect multiple VPCs in a hub-and-spoke model?',
            explanation: 'A hub-and-spoke topology can be implemented using VPC peering or Cloud VPN to/from a central "hub" VPC that provides shared services.',
            answers: [
                { content: 'Full mesh peering', isCorrect: false },
                { content: 'Hub VPC with VPC peering or VPN to spoke VPCs', isCorrect: true },
                { content: 'Single shared VPC', isCorrect: false },
                { content: 'Cloud CDN', isCorrect: false },
            ],
        },
        {
            content: 'An e-commerce company needs real-time product recommendations. Which Google Cloud services should they use?',
            explanation: 'Recommendations AI (part of Vertex AI) provides pre-built models specifically designed for product recommendation use cases.',
            answers: [
                { content: 'Cloud SQL with manual queries', isCorrect: false },
                { content: 'Recommendations AI / Vertex AI', isCorrect: true },
                { content: 'BigQuery only', isCorrect: false },
                { content: 'Pub/Sub', isCorrect: false },
            ],
        },
        {
            content: 'Which caching strategy reduces database load for frequently accessed, rarely changing data?',
            explanation: 'Memorystore (Redis) provides an in-memory cache that dramatically reduces latency and database load for read-heavy workloads.',
            answers: [
                { content: 'Write-through to multiple databases', isCorrect: false },
                { content: 'Read-through cache with Memorystore (Redis)', isCorrect: true },
                { content: 'No caching, scale the database', isCorrect: false },
                { content: 'Cache in Cloud Storage', isCorrect: false },
            ],
        },
        {
            content: 'A healthcare organization must ensure data residency within a specific country. Which Google Cloud feature helps?',
            explanation: 'Resource location policies using Organization Policy constraints can restrict where resources are deployed.',
            answers: [
                { content: 'Cloud CDN', isCorrect: false },
                { content: 'Organization Policy with location constraints', isCorrect: true },
                { content: 'VPC Firewall rules', isCorrect: false },
                { content: 'Cloud Armor', isCorrect: false },
            ],
        },
        {
            content: 'Which Google Cloud service should you use for a data warehouse that handles petabyte-scale analytics?',
            explanation: 'BigQuery is purpose-built for petabyte-scale analytics, offering serverless architecture and built-in ML capabilities.',
            answers: [
                { content: 'Cloud SQL', isCorrect: false },
                { content: 'BigQuery', isCorrect: true },
                { content: 'Cloud Spanner', isCorrect: false },
                { content: 'Firestore', isCorrect: false },
            ],
        },
        {
            content: 'A company wants to implement a zero-trust security model. Which Google Cloud service supports this?',
            explanation: 'BeyondCorp Enterprise implements Google\'s zero-trust approach, verifying every request regardless of network location.',
            answers: [
                { content: 'Cloud VPN', isCorrect: false },
                { content: 'BeyondCorp Enterprise', isCorrect: true },
                { content: 'Cloud NAT', isCorrect: false },
                { content: 'Cloud DNS', isCorrect: false },
            ],
        },
        {
            content: 'Which architecture pattern is best for handling variable, unpredictable traffic with minimal cost?',
            explanation: 'Serverless architecture (Cloud Run, Cloud Functions) auto-scales with demand and charges only for usage, ideal for variable traffic.',
            answers: [
                { content: 'Fixed-size Compute Engine fleet', isCorrect: false },
                { content: 'Serverless architecture (Cloud Run / Cloud Functions)', isCorrect: true },
                { content: 'Dedicated hosts', isCorrect: false },
                { content: 'Pre-provisioned GKE cluster', isCorrect: false },
            ],
        },
        {
            content: 'An organization needs to migrate petabytes of data to Google Cloud. Which service is most appropriate?',
            explanation: 'Transfer Appliance is a physical device for ultra-large data migrations where network transfer would take too long.',
            answers: [
                { content: 'gsutil cp', isCorrect: false },
                { content: 'Transfer Appliance', isCorrect: true },
                { content: 'Cloud VPN', isCorrect: false },
                { content: 'Cloud CDN', isCorrect: false },
            ],
        },
        {
            content: 'Which database service is best for a gaming application that needs single-digit millisecond latency for player session data?',
            explanation: 'Memorystore (Redis) provides sub-millisecond latency for session data, leaderboards, and other real-time gaming needs.',
            answers: [
                { content: 'Cloud SQL', isCorrect: false },
                { content: 'Memorystore for Redis', isCorrect: true },
                { content: 'BigQuery', isCorrect: false },
                { content: 'Cloud Storage', isCorrect: false },
            ],
        },
        {
            content: 'A company wants to ensure only approved container images run in their GKE clusters. Which feature should they use?',
            explanation: 'Binary Authorization ensures that only trusted container images are deployed to GKE by requiring attestations.',
            answers: [
                { content: 'Cloud Armor', isCorrect: false },
                { content: 'Binary Authorization', isCorrect: true },
                { content: 'VPC Service Controls', isCorrect: false },
                { content: 'Cloud IAM', isCorrect: false },
            ],
        },
        {
            content: 'Which Google Cloud service provides a fully managed ETL service for data integration?',
            explanation: 'Cloud Data Fusion is a fully managed, cloud-native ETL/ELT service for building and managing data pipelines.',
            answers: [
                { content: 'Dataflow', isCorrect: false },
                { content: 'Cloud Data Fusion', isCorrect: true },
                { content: 'Dataproc', isCorrect: false },
                { content: 'Cloud Composer', isCorrect: false },
            ],
        },
        {
            content: 'A company needs to run Windows .NET applications on Google Cloud. Which service is most appropriate?',
            explanation: 'Compute Engine supports Windows Server images and can run .NET applications, including legacy .NET Framework applications.',
            answers: [
                { content: 'Cloud Functions', isCorrect: false },
                { content: 'Compute Engine with Windows Server', isCorrect: true },
                { content: 'Cloud Run', isCorrect: false },
                { content: 'App Engine Standard', isCorrect: false },
            ],
        },
        {
            content: 'Which design principle helps make distributed systems more resilient to failures?',
            explanation: 'Circuit breaker pattern prevents cascading failures by detecting failures and temporarily stopping requests to failing services.',
            answers: [
                { content: 'Making all calls synchronous', isCorrect: false },
                { content: 'Implementing the circuit breaker pattern', isCorrect: true },
                { content: 'Using a single point of failure', isCorrect: false },
                { content: 'Sharing databases between services', isCorrect: false },
            ],
        },
        {
            content: 'A company needs a CI/CD pipeline that builds, tests, and deploys to GKE. Which tools should they use?',
            explanation: 'Cloud Build for CI/CD, Artifact Registry for container images, and Cloud Deploy for continuous delivery to GKE.',
            answers: [
                { content: 'Only kubectl commands', isCorrect: false },
                { content: 'Cloud Build + Artifact Registry + Cloud Deploy', isCorrect: true },
                { content: 'Manual uploads to Cloud Storage', isCorrect: false },
                { content: 'FTP to Compute Engine', isCorrect: false },
            ],
        },
        {
            content: 'Which Google Cloud feature provides serverless access to BigQuery through scheduled queries?',
            explanation: 'BigQuery scheduled queries allow you to run recurring queries at specified intervals without managing any infrastructure.',
            answers: [
                { content: 'Cloud Scheduler', isCorrect: false },
                { content: 'BigQuery scheduled queries', isCorrect: true },
                { content: 'Cloud Composer', isCorrect: false },
                { content: 'Dataflow', isCorrect: false },
            ],
        },
        {
            content: 'An application needs to serve static assets globally with low latency. Which architecture should you use?',
            explanation: 'Cloud Storage with Cloud CDN serves static content from globally distributed edge locations for minimal latency.',
            answers: [
                { content: 'Compute Engine in every region', isCorrect: false },
                { content: 'Cloud Storage + Cloud CDN', isCorrect: true },
                { content: 'Cloud SQL replication', isCorrect: false },
                { content: 'App Engine in one region', isCorrect: false },
            ],
        },
        {
            content: 'Which approach should you use to manage costs for a development environment?',
            explanation: 'Using preemptible/Spot VMs, smaller machine types, and stopping resources outside business hours significantly reduces dev costs.',
            answers: [
                { content: 'Use the same resources as production', isCorrect: false },
                { content: 'Use Spot VMs, smaller instances, and schedule non-business-hours shutdown', isCorrect: true },
                { content: 'Run everything on a single VM', isCorrect: false },
                { content: 'Only use free tier services', isCorrect: false },
            ],
        },
        {
            content: 'A company needs to enforce that all Cloud Storage buckets have uniform access control. Which mechanism should they use?',
            explanation: 'Organization Policy can enforce the "uniformBucketLevelAccess" constraint across all projects in the organization.',
            answers: [
                { content: 'IAM roles', isCorrect: false },
                { content: 'Organization Policy constraint for uniform bucket-level access', isCorrect: true },
                { content: 'VPC Firewall rules', isCorrect: false },
                { content: 'Cloud Armor', isCorrect: false },
            ],
        },
        {
            content: 'Which migration approach minimizes risk and allows gradual transition?',
            explanation: 'Strangler fig pattern gradually replaces parts of the legacy system while keeping both old and new running side by side.',
            answers: [
                { content: 'Big bang migration', isCorrect: false },
                { content: 'Strangler fig pattern (gradual migration)', isCorrect: true },
                { content: 'Parallel run with instant cutover', isCorrect: false },
                { content: 'Complete rewrite', isCorrect: false },
            ],
        },
        {
            content: 'A company wants to analyze real-time user behavior on their website. Which pipeline should they build?',
            explanation: 'Pub/Sub captures events in real-time, Dataflow processes them as streams, and BigQuery stores and analyses the data.',
            answers: [
                { content: 'Upload CSV files to Cloud Storage daily', isCorrect: false },
                { content: 'Pub/Sub → Dataflow (streaming) → BigQuery', isCorrect: true },
                { content: 'Cloud SQL with hourly batch jobs', isCorrect: false },
                { content: 'Firestore with periodic exports', isCorrect: false },
            ],
        },
        {
            content: 'Which service mesh solution does Google Cloud offer for microservices communication?',
            explanation: 'Anthos Service Mesh (based on Istio) provides traffic management, security, and observability for microservices.',
            answers: [
                { content: 'Cloud DNS', isCorrect: false },
                { content: 'Anthos Service Mesh', isCorrect: true },
                { content: 'Cloud Load Balancing', isCorrect: false },
                { content: 'Cloud VPN', isCorrect: false },
            ],
        },
        {
            content: 'A company needs a database for user profiles with flexible schema. Which database should they choose?',
            explanation: 'Firestore is a flexible, scalable NoSQL document database that supports complex, nested data structures without fixed schemas.',
            answers: [
                { content: 'Cloud SQL', isCorrect: false },
                { content: 'Firestore', isCorrect: true },
                { content: 'Cloud Spanner', isCorrect: false },
                { content: 'Bigtable', isCorrect: false },
            ],
        },
        {
            content: 'Which strategy should you use to deploy a new version with zero downtime?',
            explanation: 'Blue-green deployment maintains two identical environments. Traffic is switched from the old (blue) to new (green) version instantly.',
            answers: [
                { content: 'In-place update with downtime window', isCorrect: false },
                { content: 'Blue-green deployment', isCorrect: true },
                { content: 'Manual server replacement', isCorrect: false },
                { content: 'Single server deployment', isCorrect: false },
            ],
        },
        {
            content: 'A company needs to classify and label sensitive data across multiple Cloud Storage buckets. Which service should they use?',
            explanation: 'Cloud DLP automatically discovers, classifies, and protects sensitive data including PII, credit card numbers, and more.',
            answers: [
                { content: 'Cloud IAM', isCorrect: false },
                { content: 'Cloud DLP (Data Loss Prevention)', isCorrect: true },
                { content: 'Cloud Armor', isCorrect: false },
                { content: 'Security Command Center only', isCorrect: false },
            ],
        },
        {
            content: 'Which Google Cloud service provides managed Terraform for infrastructure provisioning?',
            explanation: 'Infrastructure Manager (or Config Controller) provides managed Terraform workflows for Google Cloud resource provisioning.',
            answers: [
                { content: 'Cloud Deployment Manager', isCorrect: false },
                { content: 'Infrastructure Manager', isCorrect: true },
                { content: 'Cloud Build', isCorrect: false },
                { content: 'Cloud Shell', isCorrect: false },
            ],
        },
        {
            content: 'A company wants to monitor SLOs (Service Level Objectives) for their services. Which tool should they use?',
            explanation: 'Cloud Monitoring provides SLO monitoring capabilities that let you define and track service reliability against targets.',
            answers: [
                { content: 'Cloud Logging', isCorrect: false },
                { content: 'Cloud Monitoring with SLO monitoring', isCorrect: true },
                { content: 'BigQuery', isCorrect: false },
                { content: 'Cloud Trace', isCorrect: false },
            ],
        },
        {
            content: 'Which design consideration is most important when designing a multi-tenant SaaS application?',
            explanation: 'Data isolation between tenants is critical for security, privacy, and compliance in multi-tenant architectures.',
            answers: [
                { content: 'Using the cheapest VM type', isCorrect: false },
                { content: 'Data isolation and tenant boundary enforcement', isCorrect: true },
                { content: 'Using a single database table', isCorrect: false },
                { content: 'Minimizing the number of services', isCorrect: false },
            ],
        },
        {
            content: 'A company needs to run ML training jobs on GPUs. Which Compute Engine option should they use?',
            explanation: 'Compute Engine instances with attached NVIDIA GPUs (A100, T4, V100) provide accelerated computing for ML training.',
            answers: [
                { content: 'Standard CPU instances', isCorrect: false },
                { content: 'GPU-attached Compute Engine instances or Vertex AI Training', isCorrect: true },
                { content: 'Cloud Functions', isCorrect: false },
                { content: 'App Engine', isCorrect: false },
            ],
        },
        {
            content: 'Which strategy best handles a gradual increase in traffic for an auto-scaling web application?',
            explanation: 'Horizontal auto-scaling with a target CPU utilization adds/removes instances based on load, handling gradual traffic increases efficiently.',
            answers: [
                { content: 'Manual capacity planning and provisioning', isCorrect: false },
                { content: 'Horizontal auto-scaling based on CPU or request metrics', isCorrect: true },
                { content: 'Vertical scaling of a single instance', isCorrect: false },
                { content: 'Fixed instance count', isCorrect: false },
            ],
        },
        {
            content: 'A company needs a unified logging solution across GKE, Compute Engine, and App Engine. What should they use?',
            explanation: 'Cloud Logging (Operations Suite) provides unified log collection and analysis across all Google Cloud services.',
            answers: [
                { content: 'Separate logging tools for each service', isCorrect: false },
                { content: 'Cloud Logging (Operations Suite)', isCorrect: true },
                { content: 'Only Cloud Monitoring', isCorrect: false },
                { content: 'Third-party logging only', isCorrect: false },
            ],
        },
        {
            content: 'Which approach should you use to secure communication between microservices?',
            explanation: 'mTLS (mutual TLS) ensures both client and server authenticate each other, providing secure service-to-service communication.',
            answers: [
                { content: 'No encryption for internal services', isCorrect: false },
                { content: 'Mutual TLS (mTLS) between services', isCorrect: true },
                { content: 'API keys only', isCorrect: false },
                { content: 'IP whitelisting only', isCorrect: false },
            ],
        },
        {
            content: 'A retailer needs to handle Black Friday traffic spikes. Which infrastructure decision is most critical?',
            explanation: 'Pre-warming auto-scalers and configuring appropriate max instance limits ensures the system can handle sudden traffic spikes.',
            answers: [
                { content: 'Using the cheapest instances', isCorrect: false },
                { content: 'Pre-configuring auto-scaling with appropriate max limits and load testing', isCorrect: true },
                { content: 'Disabling all monitoring during the event', isCorrect: false },
                { content: 'Manual scaling on the day', isCorrect: false },
            ],
        },
        {
            content: 'Which Google Cloud service helps detect and respond to security threats across your environment?',
            explanation: 'Chronicle (Google Cloud\'s SIEM) ingests security telemetry and uses Google\'s threat intelligence to detect and investigate threats.',
            answers: [
                { content: 'Cloud Monitoring', isCorrect: false },
                { content: 'Chronicle Security Operations', isCorrect: true },
                { content: 'Cloud CDN', isCorrect: false },
                { content: 'Cloud DNS', isCorrect: false },
            ],
        },
        {
            content: 'A company wants to avoid vendor lock-in while using Google Cloud. Which approach should they prioritize?',
            explanation: 'Using open-source technologies (Kubernetes, PostgreSQL, Apache Beam) and standard APIs reduces dependency on proprietary services.',
            answers: [
                { content: 'Use only Google-proprietary services', isCorrect: false },
                { content: 'Leverage open-source technologies and standard APIs', isCorrect: true },
                { content: 'Avoid cloud services entirely', isCorrect: false },
                { content: 'Build custom versions of all services', isCorrect: false },
            ],
        },
        {
            content: 'Which access pattern would benefit most from Cloud Bigtable over Cloud SQL?',
            explanation: 'Bigtable excels at high-throughput, low-latency reads/writes for large-scale, single-keyed data access patterns like time-series.',
            answers: [
                { content: 'Complex SQL joins across many tables', isCorrect: false },
                { content: 'High-throughput single-key lookups on massive datasets', isCorrect: true },
                { content: 'Small datasets with complex relationships', isCorrect: false },
                { content: 'ACID transactions with foreign keys', isCorrect: false },
            ],
        },
        {
            content: 'A company needs to implement API versioning for backward compatibility. Which approach is recommended?',
            explanation: 'URL-based versioning (e.g., /v1/resource, /v2/resource) is the most common and clearest approach for API versioning.',
            answers: [
                { content: 'Never version APIs', isCorrect: false },
                { content: 'URL path-based versioning (e.g., /v1/, /v2/)', isCorrect: true },
                { content: 'Break backward compatibility freely', isCorrect: false },
                { content: 'Use different domains for each version', isCorrect: false },
            ],
        },
        {
            content: 'Which networking feature allows you to centrally manage network security policies across multiple VPCs?',
            explanation: 'Hierarchical firewall policies (at organization or folder level) apply security rules across all VPCs in scope.',
            answers: [
                { content: 'VPC-level firewall rules only', isCorrect: false },
                { content: 'Hierarchical firewall policies', isCorrect: true },
                { content: 'Cloud NAT', isCorrect: false },
                { content: 'Cloud DNS', isCorrect: false },
            ],
        },
        {
            content: 'A company needs to modernize a legacy COBOL application. Which migration strategy is most appropriate?',
            explanation: 'For legacy COBOL applications, repurchasing a modern SaaS alternative or complete refactoring is typically more cost-effective than lifting and shifting.',
            answers: [
                { content: 'Lift and shift to Compute Engine', isCorrect: false },
                { content: 'Repurchase (replace with SaaS) or Refactor', isCorrect: true },
                { content: 'Run COBOL directly on Cloud Run', isCorrect: false },
                { content: 'Keep on-premises permanently', isCorrect: false },
            ],
        },
    ],
};
