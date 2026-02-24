export const pcaExam3 = {
    title: 'Google Cloud Professional Cloud Architect - Practice Test 3',
    description: 'Professional Cloud Architect practice test with 50 questions on case studies, cost optimization, security architecture, and advanced design patterns.',
    durationMinutes: 120,
    courseId: 14,
    questions: [
        {
            content: 'A retail company with seasonal traffic spikes wants to minimize costs during off-peak periods. Which architecture should they adopt?',
            explanation: 'Serverless services (Cloud Run, Cloud Functions) automatically scale to zero during off-peak, eliminating idle costs.',
            answers: [
                { content: 'Fixed-size Compute Engine fleet running 24/7', isCorrect: false },
                { content: 'Serverless architecture with Cloud Run and Cloud Functions', isCorrect: true },
                { content: 'Reserved Compute Engine instances for peak capacity', isCorrect: false },
                { content: 'On-premises with cloud bursting', isCorrect: false },
            ],
        },
        {
            content: 'A company needs to implement data masking for non-production environments. Which service should they use?',
            explanation: 'Cloud DLP can de-identify and mask sensitive data, creating safe copies for development and testing environments.',
            answers: [
                { content: 'Cloud IAM', isCorrect: false },
                { content: 'Cloud DLP with de-identification', isCorrect: true },
                { content: 'Cloud CDN', isCorrect: false },
                { content: 'Cloud Monitoring', isCorrect: false },
            ],
        },
        {
            content: 'Which approach provides the best performance for a REST API that serves frequently requested, cacheable responses?',
            explanation: 'HTTP(S) Load Balancer with Cloud CDN caches API responses at edge locations, reducing backend load and latency.',
            answers: [
                { content: 'Direct connection to backend', isCorrect: false },
                { content: 'HTTP(S) Load Balancer with Cloud CDN caching', isCorrect: true },
                { content: 'Cloud DNS round-robin', isCorrect: false },
                { content: 'VPN connection', isCorrect: false },
            ],
        },
        {
            content: 'A company is designing a multi-region active-active architecture. Which database supports this natively?',
            explanation: 'Cloud Spanner supports multi-region configurations with automatic replication and strong consistency across all regions.',
            answers: [
                { content: 'Cloud SQL', isCorrect: false },
                { content: 'Cloud Spanner (multi-region configuration)', isCorrect: true },
                { content: 'Bigtable', isCorrect: false },
                { content: 'Memorystore', isCorrect: false },
            ],
        },
        {
            content: 'Which Google Cloud feature allows you to continuously assess and improve your security posture?',
            explanation: 'Security Command Center Premium provides continuous security assessment, threat detection, and compliance monitoring.',
            answers: [
                { content: 'Cloud Monitoring', isCorrect: false },
                { content: 'Security Command Center Premium', isCorrect: true },
                { content: 'Cloud Logging', isCorrect: false },
                { content: 'Cloud DNS', isCorrect: false },
            ],
        },
        {
            content: 'A logistics company needs to track real-time vehicle locations. Which architecture is most appropriate?',
            explanation: 'Pub/Sub ingests real-time GPS data, Dataflow processes the stream, and Bigtable or BigQuery stores time-series location data.',
            answers: [
                { content: 'Cloud SQL with periodic batch updates', isCorrect: false },
                { content: 'Pub/Sub → Dataflow → Bigtable (real-time) + BigQuery (analytics)', isCorrect: true },
                { content: 'Cloud Storage CSV files', isCorrect: false },
                { content: 'Firestore only', isCorrect: false },
            ],
        },
        {
            content: 'Which strategy should you use to implement blue-green deployments on GKE?',
            explanation: 'Using separate Kubernetes Deployments with Service selector switching or Anthos Service Mesh traffic management.',
            answers: [
                { content: 'Delete old pods first, then create new ones', isCorrect: false },
                { content: 'Two Deployments with Service selector switching or Istio traffic management', isCorrect: true },
                { content: 'In-place container updates', isCorrect: false },
                { content: 'Manual kubectl rollout', isCorrect: false },
            ],
        },
        {
            content: 'A company needs to implement a data pipeline that processes data exactly once, even on failure. Which service provides this?',
            explanation: 'Dataflow provides exactly-once processing semantics with automatic checkpointing and retry mechanisms.',
            answers: [
                { content: 'Cloud Functions with manual retry', isCorrect: false },
                { content: 'Dataflow with exactly-once processing semantics', isCorrect: true },
                { content: 'Cron jobs on Compute Engine', isCorrect: false },
                { content: 'Manual batch scripts', isCorrect: false },
            ],
        },
        {
            content: 'An organization wants to control cloud spending across departments. Which approach is recommended?',
            explanation: 'Separate billing accounts or projects per department with labels, budgets, and alerts provide cost visibility and control.',
            answers: [
                { content: 'One project for everyone', isCorrect: false },
                { content: 'Projects per department with labels, budgets, alerts, and quota management', isCorrect: true },
                { content: 'No budget tracking', isCorrect: false },
                { content: 'Manual monthly reviews only', isCorrect: false },
            ],
        },
        {
            content: 'Which Google Cloud feature provides visibility into Google\'s access to your data?',
            explanation: 'Access Transparency provides near-real-time logs of actions taken by Google personnel on your data.',
            answers: [
                { content: 'Cloud Audit Logs', isCorrect: false },
                { content: 'Access Transparency', isCorrect: true },
                { content: 'Cloud Monitoring', isCorrect: false },
                { content: 'VPC Flow Logs', isCorrect: false },
            ],
        },
        {
            content: 'A startup needs a quick backend for their mobile app with real-time sync. Which Firebase/Google Cloud service is best?',
            explanation: 'Firebase (backed by Firestore) provides real-time sync, authentication, and serverless backend features ideal for rapid mobile development.',
            answers: [
                { content: 'Cloud SQL with custom API', isCorrect: false },
                { content: 'Firebase with Firestore for real-time sync', isCorrect: true },
                { content: 'BigQuery', isCorrect: false },
                { content: 'Compute Engine with REST API', isCorrect: false },
            ],
        },
        {
            content: 'Which networking pattern prevents data exfiltration from Google Cloud managed services?',
            explanation: 'VPC Service Controls create a security perimeter that prevents data from being copied to unauthorized projects or services.',
            answers: [
                { content: 'Cloud NAT', isCorrect: false },
                { content: 'VPC Service Controls', isCorrect: true },
                { content: 'Cloud CDN', isCorrect: false },
                { content: 'Cloud DNS', isCorrect: false },
            ],
        },
        {
            content: 'A company needs to implement rate limiting on their public API. Which service should they use?',
            explanation: 'Cloud Armor rate limiting rules, along with Apigee API management, provide comprehensive API rate limiting.',
            answers: [
                { content: 'Cloud DNS', isCorrect: false },
                { content: 'Cloud Armor rate limiting or Apigee', isCorrect: true },
                { content: 'Cloud NAT', isCorrect: false },
                { content: 'Cloud VPN', isCorrect: false },
            ],
        },
        {
            content: 'Which design pattern helps decouple data producers from consumers in a microservices architecture?',
            explanation: 'The publish-subscribe pattern (Pub/Sub) decouples producers from consumers by routing messages through a message broker.',
            answers: [
                { content: 'Direct API calls', isCorrect: false },
                { content: 'Publish-subscribe (Pub/Sub) pattern', isCorrect: true },
                { content: 'Shared database', isCorrect: false },
                { content: 'File-based integration', isCorrect: false },
            ],
        },
        {
            content: 'A company needs to generate PDF reports from data stored in BigQuery. Which serverless approach is best?',
            explanation: 'Cloud Functions or Cloud Run triggered by a scheduling or event mechanism can query BigQuery and generate PDFs serverlessly.',
            answers: [
                { content: 'Dedicated VM running 24/7', isCorrect: false },
                { content: 'Cloud Functions/Cloud Run triggered by Cloud Scheduler', isCorrect: true },
                { content: 'Manual generation', isCorrect: false },
                { content: 'App Engine with persistent process', isCorrect: false },
            ],
        },
        {
            content: 'Which Google Cloud service supports FIDO2/WebAuthn passwordless authentication?',
            explanation: 'Identity Platform supports FIDO2/WebAuthn for passwordless authentication, enhancing security and user experience.',
            answers: [
                { content: 'Cloud IAM', isCorrect: false },
                { content: 'Identity Platform', isCorrect: true },
                { content: 'Cloud Armor', isCorrect: false },
                { content: 'Cloud KMS', isCorrect: false },
            ],
        },
        {
            content: 'A company runs batch ML training jobs that take 6+ hours. Which cost optimization strategy should they use?',
            explanation: 'Spot VMs provide up to 91% discount for fault-tolerant workloads. ML training with checkpointing can resume from interruptions.',
            answers: [
                { content: 'On-demand instances', isCorrect: false },
                { content: 'Spot VMs with checkpoint/restart capability', isCorrect: true },
                { content: 'Reserved instances', isCorrect: false },
                { content: 'Cloud Functions', isCorrect: false },
            ],
        },
        {
            content: 'Which approach is best for implementing a global API gateway?',
            explanation: 'Global HTTP(S) Load Balancer with Cloud Armor and Apigee provides a comprehensive global API gateway solution.',
            answers: [
                { content: 'Regional load balancers in each region', isCorrect: false },
                { content: 'Global HTTP(S) Load Balancer with Apigee for API management', isCorrect: true },
                { content: 'DNS-based routing', isCorrect: false },
                { content: 'Cloud VPN', isCorrect: false },
            ],
        },
        {
            content: 'A company needs to ensure no single person can deploy to production without approval. Which practice should they implement?',
            explanation: 'Separation of duties ensures that at least two people are involved in critical operations, preventing unauthorized changes.',
            answers: [
                { content: 'Give everyone admin access', isCorrect: false },
                { content: 'Separation of duties with approval workflows in CI/CD', isCorrect: true },
                { content: 'Only one person has access', isCorrect: false },
                { content: 'No access controls needed', isCorrect: false },
            ],
        },
        {
            content: 'Which Google Cloud service is best for running Apache Spark ETL jobs?',
            explanation: 'Dataproc provides managed Spark clusters that can be created on-demand, run jobs, and be deleted to save costs.',
            answers: [
                { content: 'Cloud Functions', isCorrect: false },
                { content: 'Dataproc', isCorrect: true },
                { content: 'App Engine', isCorrect: false },
                { content: 'Cloud SQL', isCorrect: false },
            ],
        },
        {
            content: 'A company has 200+ microservices and needs to manage service-to-service communication. What should they implement?',
            explanation: 'A service mesh (like Anthos Service Mesh/Istio) provides traffic management, security, and observability for complex microservice architectures.',
            answers: [
                { content: 'Point-to-point connections', isCorrect: false },
                { content: 'Service mesh (Anthos Service Mesh / Istio)', isCorrect: true },
                { content: 'Shared database for all services', isCorrect: false },
                { content: 'Single monolithic gateway', isCorrect: false },
            ],
        },
        {
            content: 'Which Google Cloud service helps you assess your on-premises infrastructure for cloud migration?',
            explanation: 'Migration Center collects and analyzes data about your on-premises infrastructure to recommend migration strategies.',
            answers: [
                { content: 'Cloud Monitoring', isCorrect: false },
                { content: 'Migration Center', isCorrect: true },
                { content: 'Cloud Logging', isCorrect: false },
                { content: 'Cloud Shell', isCorrect: false },
            ],
        },
        {
            content: 'A company needs to implement a notification system that sends emails, SMS, and push notifications based on events. Which architecture is best?',
            explanation: 'Pub/Sub for event routing with Cloud Functions subscribers handling different notification channels provides a scalable, decoupled solution.',
            answers: [
                { content: 'Single monolithic notification service', isCorrect: false },
                { content: 'Event-driven with Pub/Sub fan-out to specialized notification handlers', isCorrect: true },
                { content: 'Database polling', isCorrect: false },
                { content: 'Manual notification sending', isCorrect: false },
            ],
        },
        {
            content: 'Which approach should you use to handle cross-cutting concerns in a microservices architecture?',
            explanation: 'A service mesh handles cross-cutting concerns like authentication, authorization, encryption, and logging without modifying application code.',
            answers: [
                { content: 'Implement in each microservice independently', isCorrect: false },
                { content: 'Use a service mesh or API gateway for centralized cross-cutting concerns', isCorrect: true },
                { content: 'Ignore cross-cutting concerns', isCorrect: false },
                { content: 'Use a shared library only', isCorrect: false },
            ],
        },
        {
            content: 'A company needs to store and query graph data (social network relationships). Which database approach is suitable on Google Cloud?',
            explanation: 'Cloud Spanner Graph or Memorystore with Redis Graph, or using BigQuery with graph queries can handle graph workloads.',
            answers: [
                { content: 'Cloud SQL with JSON columns', isCorrect: false },
                { content: 'Cloud Spanner Graph or a graph database on GKE', isCorrect: true },
                { content: 'Cloud Storage', isCorrect: false },
                { content: 'Cloud Functions', isCorrect: false },
            ],
        },
        {
            content: 'Which cost optimization technique provides the highest savings for predictable workloads?',
            explanation: '3-year Committed Use Discounts provide up to 57% savings for predictable, steady-state workloads.',
            answers: [
                { content: 'On-demand pricing', isCorrect: false },
                { content: '3-year Committed Use Discounts (CUDs)', isCorrect: true },
                { content: 'Spot VMs', isCorrect: false },
                { content: 'Free tier only', isCorrect: false },
            ],
        },
        {
            content: 'A fintech company needs to store transaction logs immutably for 7 years. Which storage solution should they use?',
            explanation: 'Cloud Storage with a bucket lock and 7-year retention policy ensures data cannot be deleted or modified for the specified period.',
            answers: [
                { content: 'Local SSD', isCorrect: false },
                { content: 'Cloud Storage with bucket lock and retention policy (7 years)', isCorrect: true },
                { content: 'Persistent Disk', isCorrect: false },
                { content: 'Memorystore', isCorrect: false },
            ],
        },
        {
            content: 'Which approach should you use to ensure high availability of a GKE application?',
            explanation: 'Pod Disruption Budgets, multi-zone deployment, resource requests/limits, and health checks provide comprehensive HA.',
            answers: [
                { content: 'Single replica in one zone', isCorrect: false },
                { content: 'Multi-zone node pools, Pod Disruption Budgets, health probes, and multiple replicas', isCorrect: true },
                { content: 'No health checks', isCorrect: false },
                { content: 'Manual monitoring', isCorrect: false },
            ],
        },
        {
            content: 'A company wants to build a real-time fraud detection system. Which architecture should they use?',
            explanation: 'Pub/Sub for event ingestion, Dataflow for real-time processing with ML models, and immediate alerting for suspicious transactions.',
            answers: [
                { content: 'Daily batch processing', isCorrect: false },
                { content: 'Pub/Sub → Dataflow with ML model → real-time alerting', isCorrect: true },
                { content: 'Manual review of all transactions', isCorrect: false },
                { content: 'Cloud Storage with periodic checks', isCorrect: false },
            ],
        },
        {
            content: 'Which Google Cloud tool helps you identify unused and idle resources?',
            explanation: 'Recommender (Active Assist) identifies idle VMs, disks, IP addresses, and provides right-sizing recommendations.',
            answers: [
                { content: 'Cloud Logging', isCorrect: false },
                { content: 'Recommender / Active Assist', isCorrect: true },
                { content: 'Cloud DNS', isCorrect: false },
                { content: 'Cloud CDN', isCorrect: false },
            ],
        },
        {
            content: 'A company needs to implement a content management system with version control on Google Cloud. Which storage feature is essential?',
            explanation: 'Cloud Storage Object Versioning maintains all previous versions of objects, providing version history and rollback capability.',
            answers: [
                { content: 'Lifecycle Management', isCorrect: false },
                { content: 'Object Versioning in Cloud Storage', isCorrect: true },
                { content: 'Bucket Lock', isCorrect: false },
                { content: 'Customer-managed encryption', isCorrect: false },
            ],
        },
        {
            content: 'Which architecture pattern is recommended for a system that needs to handle 10 million concurrent WebSocket connections?',
            explanation: 'Global Load Balancer with multiple Cloud Run or GKE instances across regions, using Pub/Sub for message distribution.',
            answers: [
                { content: 'Single VM with WebSocket server', isCorrect: false },
                { content: 'Global Load Balancer + auto-scaling GKE/Cloud Run + Pub/Sub for message fan-out', isCorrect: true },
                { content: 'Cloud Functions', isCorrect: false },
                { content: 'App Engine Standard', isCorrect: false },
            ],
        },
        {
            content: 'A company wants to implement API monetization. Which Google Cloud service supports this?',
            explanation: 'Apigee provides API management features including developer portal, analytics, rate limiting, and monetization capabilities.',
            answers: [
                { content: 'Cloud Endpoints', isCorrect: false },
                { content: 'Apigee', isCorrect: true },
                { content: 'Cloud Run', isCorrect: false },
                { content: 'Cloud DNS', isCorrect: false },
            ],
        },
        {
            content: 'Which approach should you take to implement a data mesh architecture on Google Cloud?',
            explanation: 'Data mesh emphasizes domain-oriented ownership. Dataplex helps manage and govern data across domains with BigQuery for analytics.',
            answers: [
                { content: 'Centralized data team manages everything', isCorrect: false },
                { content: 'Domain-oriented data ownership with Dataplex for governance and BigQuery for analytics', isCorrect: true },
                { content: 'Single shared database', isCorrect: false },
                { content: 'FTP file sharing', isCorrect: false },
            ],
        },
        {
            content: 'A company needs to implement A/B testing for their web application. Which Google Cloud services support this?',
            explanation: 'Firebase A/B Testing with Remote Config or traffic splitting on Cloud Run/App Engine enables controlled experiments.',
            answers: [
                { content: 'Big Query only', isCorrect: false },
                { content: 'Firebase A/B Testing or Cloud Run/App Engine traffic splitting', isCorrect: true },
                { content: 'Cloud DNS', isCorrect: false },
                { content: 'Cloud NAT', isCorrect: false },
            ],
        },
        {
            content: 'Which Google Cloud service provides policy-based admission control for Kubernetes?',
            explanation: 'Policy Controller (based on OPA Gatekeeper) enforces custom policies on Kubernetes resources before they are admitted.',
            answers: [
                { content: 'Cloud IAM', isCorrect: false },
                { content: 'Policy Controller / OPA Gatekeeper', isCorrect: true },
                { content: 'Cloud Armor', isCorrect: false },
                { content: 'Network Policy', isCorrect: false },
            ],
        },
        {
            content: 'A company wants to implement chaos engineering for their GKE-based application. Which approach is recommended?',
            explanation: 'Tools like Chaos Monkey, LitmusChaos, or Gremlin on GKE allow controlled failure injection to test system resilience.',
            answers: [
                { content: 'Never test failures', isCorrect: false },
                { content: 'Use chaos engineering tools (LitmusChaos/Gremlin) on GKE to test resilience', isCorrect: true },
                { content: 'Only test in production during peak hours', isCorrect: false },
                { content: 'Chaos engineering is unnecessary', isCorrect: false },
            ],
        },
        {
            content: 'Which approach does Google Cloud recommend for managing secrets in a microservices environment?',
            explanation: 'Secret Manager provides centralized, versioned, and audited secret management with IAM-based access control.',
            answers: [
                { content: 'Environment variables in Dockerfiles', isCorrect: false },
                { content: 'Secret Manager with IAM-based access control', isCorrect: true },
                { content: 'Config files in source code', isCorrect: false },
                { content: 'Shared network drives', isCorrect: false },
            ],
        },
        {
            content: 'A company needs to implement a queue-based load leveling pattern. Which service should they use?',
            explanation: 'Cloud Tasks provides ordered task queues with rate limiting, HTTP dispatch, and guaranteed delivery for load leveling.',
            answers: [
                { content: 'Cloud CDN', isCorrect: false },
                { content: 'Cloud Tasks for queue-based load leveling', isCorrect: true },
                { content: 'Cloud DNS', isCorrect: false },
                { content: 'Cloud NAT', isCorrect: false },
            ],
        },
        {
            content: 'Which Google Cloud feature helps enforce encryption standards across an organization?',
            explanation: 'Organization Policy constraints can enforce CMEK requirements, ensuring all resources use customer-managed encryption keys.',
            answers: [
                { content: 'Cloud CDN', isCorrect: false },
                { content: 'Organization Policy with CMEK constraints', isCorrect: true },
                { content: 'Cloud DNS', isCorrect: false },
                { content: 'Cloud Monitoring', isCorrect: false },
            ],
        },
        {
            content: 'A company needs to build a recommendation engine that personalizes content for millions of users. Which Google Cloud services should they combine?',
            explanation: 'Vertex AI for model training, Recommendations AI for pre-built recommendation models, and Bigtable/Firestore for user profiles.',
            answers: [
                { content: 'Cloud SQL only', isCorrect: false },
                { content: 'Vertex AI + Recommendations AI + Bigtable/Firestore', isCorrect: true },
                { content: 'Cloud Functions only', isCorrect: false },
                { content: 'Cloud Storage only', isCorrect: false },
            ],
        },
        {
            content: 'Which approach should you use for disaster recovery testing?',
            explanation: 'Regular DR drills, automated failover testing, and documented runbooks ensure the DR plan works when needed.',
            answers: [
                { content: 'Never test DR plans', isCorrect: false },
                { content: 'Regular DR drills with automated testing and documented runbooks', isCorrect: true },
                { content: 'Wait for an actual disaster', isCorrect: false },
                { content: 'Only review plans annually', isCorrect: false },
            ],
        },
        {
            content: 'A company needs to implement event sourcing for their order management system. Which architecture is recommended?',
            explanation: 'Pub/Sub for event publishing, Cloud Storage or Bigtable for event store, and Dataflow for building read models from events.',
            answers: [
                { content: 'Traditional CRUD with Cloud SQL', isCorrect: false },
                { content: 'Pub/Sub for events + event store (Bigtable/Cloud Storage) + Dataflow for projections', isCorrect: true },
                { content: 'Cloud DNS', isCorrect: false },
                { content: 'Cloud CDN only', isCorrect: false },
            ],
        },
    ],
};
