export const pcaExam2 = {
    title: 'Google Cloud Professional Cloud Architect - Practice Test 2',
    description: 'Professional Cloud Architect practice test with 50 questions on migration planning, hybrid cloud, compliance, and advanced architecture patterns.',
    durationMinutes: 120,
    courseId: 14,
    questions: [
        {
            content: 'A company is evaluating whether to use Cloud SQL or Cloud Spanner. Which factor favors Cloud Spanner?',
            explanation: 'Cloud Spanner is uniquely suited when you need a relational database with global consistency, horizontal scaling, and high availability (99.999%).',
            answers: [
                { content: 'Small dataset under 10 GB', isCorrect: false },
                { content: 'Need for global distribution with strong consistency and horizontal scaling', isCorrect: true },
                { content: 'Simple single-region application', isCorrect: false },
                { content: 'Only PostgreSQL compatibility is needed', isCorrect: false },
            ],
        },
        {
            content: 'A healthcare company must comply with HIPAA regulations on Google Cloud. What is required?',
            explanation: 'A Business Associate Agreement (BAA) must be signed with Google, and only HIPAA-eligible services should be used for PHI.',
            answers: [
                { content: 'No special requirements', isCorrect: false },
                { content: 'Sign a BAA with Google and use only HIPAA-eligible services', isCorrect: true },
                { content: 'Use only Compute Engine', isCorrect: false },
                { content: 'Encrypt data manually', isCorrect: false },
            ],
        },
        {
            content: 'Which disaster recovery strategy provides the lowest RTO but highest cost?',
            explanation: 'Hot standby (active-active or active-passive) maintains a fully operational secondary environment, providing the lowest RTO but at the highest cost.',
            answers: [
                { content: 'Backup and restore', isCorrect: false },
                { content: 'Hot standby / multi-site active-active', isCorrect: true },
                { content: 'Pilot light', isCorrect: false },
                { content: 'Cold standby', isCorrect: false },
            ],
        },
        {
            content: 'An organization needs to centrally manage network connectivity for 50+ projects. Which approach should they use?',
            explanation: 'Shared VPC allows a central network team to manage VPC networks that are shared across multiple projects.',
            answers: [
                { content: 'Individual VPCs per project with peering', isCorrect: false },
                { content: 'Shared VPC with centralized network management', isCorrect: true },
                { content: 'Cloud VPN between all projects', isCorrect: false },
                { content: 'Internet-based communication', isCorrect: false },
            ],
        },
        {
            content: 'A company wants to implement canary deployments on GKE. Which approach is recommended?',
            explanation: 'Using Kubernetes traffic splitting or Anthos Service Mesh, you can route a small percentage of traffic to the new version.',
            answers: [
                { content: 'Deploy to all pods simultaneously', isCorrect: false },
                { content: 'Use traffic splitting with Anthos Service Mesh or Ingress to route partial traffic to new version', isCorrect: true },
                { content: 'Manual DNS switching', isCorrect: false },
                { content: 'Use a separate cluster', isCorrect: false },
            ],
        },
        {
            content: 'Which Google Cloud service provides managed Apache Airflow for workflow orchestration?',
            explanation: 'Cloud Composer is a fully managed Apache Airflow service for creating, scheduling, and monitoring workflow pipelines.',
            answers: [
                { content: 'Cloud Scheduler', isCorrect: false },
                { content: 'Cloud Composer', isCorrect: true },
                { content: 'Cloud Tasks', isCorrect: false },
                { content: 'Cloud Build', isCorrect: false },
            ],
        },
        {
            content: 'A company has strict requirements that VM workloads must not share physical hardware with other customers. What should they use?',
            explanation: 'Sole-tenant nodes provide physical servers dedicated exclusively to a single customer for compliance and licensing requirements.',
            answers: [
                { content: 'Standard VMs', isCorrect: false },
                { content: 'Sole-tenant nodes', isCorrect: true },
                { content: 'Preemptible VMs', isCorrect: false },
                { content: 'Cloud Functions', isCorrect: false },
            ],
        },
        {
            content: 'Which approach provides the most cost-effective way to process large batch analytics workloads?',
            explanation: 'Using Dataproc with preemptible worker nodes provides significant cost savings for batch processing that can tolerate interruptions.',
            answers: [
                { content: 'Standard Compute Engine instances running 24/7', isCorrect: false },
                { content: 'Dataproc clusters with preemptible worker nodes', isCorrect: true },
                { content: 'Always-on GKE cluster', isCorrect: false },
                { content: 'Cloud Functions', isCorrect: false },
            ],
        },
        {
            content: 'A company needs to implement centralized logging with long-term retention. What is the recommended architecture?',
            explanation: 'Use organization-level log sinks to route logs to BigQuery for analysis and Cloud Storage for cost-effective long-term archival.',
            answers: [
                { content: 'Keep logs in Cloud Logging indefinitely', isCorrect: false },
                { content: 'Organization log sinks → BigQuery (analysis) + Cloud Storage (archival)', isCorrect: true },
                { content: 'Store logs on VM local disks', isCorrect: false },
                { content: 'Only keep logs for 30 days', isCorrect: false },
            ],
        },
        {
            content: 'Which Google Cloud feature allows you to test changes to IAM policies without applying them?',
            explanation: 'Policy Simulator lets you simulate changes to IAM policies to see their effects before applying them.',
            answers: [
                { content: 'Policy Troubleshooter', isCorrect: false },
                { content: 'Policy Simulator', isCorrect: true },
                { content: 'Access Transparency', isCorrect: false },
                { content: 'Cloud Audit Logs', isCorrect: false },
            ],
        },
        {
            content: 'A company needs to migrate a 50 TB database from on-premises PostgreSQL to Google Cloud with minimal downtime. Which approach is best?',
            explanation: 'Database Migration Service provides continuous replication from on-premises to Cloud SQL, enabling a minimal-downtime cutover.',
            answers: [
                { content: 'pg_dump and pg_restore', isCorrect: false },
                { content: 'Database Migration Service with continuous replication', isCorrect: true },
                { content: 'Manual export to CSV', isCorrect: false },
                { content: 'Transfer Appliance', isCorrect: false },
            ],
        },
        {
            content: 'Which architecture pattern should you use for a system that processes orders with exactly-once delivery semantics?',
            explanation: 'Pub/Sub with Dataflow provides exactly-once processing semantics, ensuring each message is processed exactly once.',
            answers: [
                { content: 'HTTP webhooks with retries', isCorrect: false },
                { content: 'Pub/Sub with Dataflow for exactly-once processing', isCorrect: true },
                { content: 'Polling a database table', isCorrect: false },
                { content: 'Cloud Functions with no error handling', isCorrect: false },
            ],
        },
        {
            content: 'A company wants to implement a data lake on Google Cloud. Which storage service should form the foundation?',
            explanation: 'Cloud Storage serves as an ideal data lake foundation due to its durability, scalability, and integration with analytics services.',
            answers: [
                { content: 'Persistent Disk', isCorrect: false },
                { content: 'Cloud Storage', isCorrect: true },
                { content: 'Local SSD', isCorrect: false },
                { content: 'Cloud Filestore', isCorrect: false },
            ],
        },
        {
            content: 'Which approach best prevents credential leakage in CI/CD pipelines?',
            explanation: 'Using Workload Identity Federation for CI/CD eliminates the need for static service account keys.',
            answers: [
                { content: 'Store credentials in source code', isCorrect: false },
                { content: 'Use Workload Identity Federation and Secret Manager', isCorrect: true },
                { content: 'Share service account keys via email', isCorrect: false },
                { content: 'Hard-code credentials in CI/CD config', isCorrect: false },
            ],
        },
        {
            content: 'A media company needs to transcode video files uploaded to Cloud Storage. Which architecture should they use?',
            explanation: 'Cloud Storage event → Pub/Sub → Cloud Function/Cloud Run triggers the transcoding pipeline automatically on file upload.',
            answers: [
                { content: 'Manual processing', isCorrect: false },
                { content: 'Event-driven: Cloud Storage notification → Pub/Sub → Cloud Run/GKE transcoding', isCorrect: true },
                { content: 'Polling Cloud Storage periodically', isCorrect: false },
                { content: 'FTP server', isCorrect: false },
            ],
        },
        {
            content: 'Which Google Cloud feature allows you to understand who accessed what data and when?',
            explanation: 'Data Access audit logs record when users read or modify data in Google Cloud services.',
            answers: [
                { content: 'Admin Activity logs', isCorrect: false },
                { content: 'Data Access audit logs', isCorrect: true },
                { content: 'VPC Flow Logs', isCorrect: false },
                { content: 'Cloud Monitoring metrics', isCorrect: false },
            ],
        },
        {
            content: 'A company needs to run SAP HANA on Google Cloud. Which machine type should they use?',
            explanation: 'Memory-optimized machine types (M2/M3) with certified SAP HANA configurations support large in-memory databases.',
            answers: [
                { content: 'E2 general-purpose', isCorrect: false },
                { content: 'M2/M3 memory-optimized (SAP-certified)', isCorrect: true },
                { content: 'C2 compute-optimized', isCorrect: false },
                { content: 'N1 standard', isCorrect: false },
            ],
        },
        {
            content: 'Which database should you choose for a globally distributed e-commerce catalog requiring strong consistency?',
            explanation: 'Cloud Spanner provides global distribution with external consistency (strongest guarantee), ideal for globally consistent catalogs.',
            answers: [
                { content: 'Firestore', isCorrect: false },
                { content: 'Cloud Spanner', isCorrect: true },
                { content: 'Cloud SQL with read replicas', isCorrect: false },
                { content: 'Memorystore', isCorrect: false },
            ],
        },
        {
            content: 'A company wants to shift from waterfall to DevOps culture. What Google Cloud tools support this transformation?',
            explanation: 'Cloud Build (CI/CD), Cloud Deploy (CD), Artifact Registry, and Cloud Monitoring form a comprehensive DevOps toolchain.',
            answers: [
                { content: 'Only Compute Engine', isCorrect: false },
                { content: 'Cloud Build, Cloud Deploy, Artifact Registry, and Cloud Monitoring', isCorrect: true },
                { content: 'Cloud SQL only', isCorrect: false },
                { content: 'Manual deployments with gsutil', isCorrect: false },
            ],
        },
        {
            content: 'Which architecture is best for a mobile backend that needs offline-first capabilities?',
            explanation: 'Firestore provides real-time sync and offline support natively, making it ideal for mobile backends with offline-first requirements.',
            answers: [
                { content: 'Cloud SQL', isCorrect: false },
                { content: 'Firestore with real-time sync', isCorrect: true },
                { content: 'BigQuery', isCorrect: false },
                { content: 'Bigtable', isCorrect: false },
            ],
        },
        {
            content: 'A company needs cross-project networking without exposure to the public internet. What should they use?',
            explanation: 'Private Service Connect and Shared VPC provide private connectivity between projects without public internet exposure.',
            answers: [
                { content: 'Public APIs', isCorrect: false },
                { content: 'Private Service Connect or Shared VPC', isCorrect: true },
                { content: 'Cloud CDN', isCorrect: false },
                { content: 'Internet-facing load balancers', isCorrect: false },
            ],
        },
        {
            content: 'Which Google Cloud service helps manage ML model lifecycle from development to deployment?',
            explanation: 'Vertex AI provides end-to-end ML lifecycle management including development, training, deployment, and monitoring.',
            answers: [
                { content: 'BigQuery', isCorrect: false },
                { content: 'Vertex AI', isCorrect: true },
                { content: 'Dataflow', isCorrect: false },
                { content: 'Cloud Build', isCorrect: false },
            ],
        },
        {
            content: 'A company needs to enforce that all resources are tagged with a cost center. How should they implement this?',
            explanation: 'Organization Policy with tag requirements combined with Cloud Functions or Eventarc for automated validation.',
            answers: [
                { content: 'Train all employees manually', isCorrect: false },
                { content: 'Use Organization Policy constraints and automated tag validation', isCorrect: true },
                { content: 'Delete untagged resources', isCorrect: false },
                { content: 'No enforcement is possible', isCorrect: false },
            ],
        },
        {
            content: 'Which approach should you use to implement a reliable message processing system with dead-letter handling?',
            explanation: 'Pub/Sub supports dead-letter topics where messages that cannot be processed after multiple retries are automatically forwarded.',
            answers: [
                { content: 'Discard failed messages', isCorrect: false },
                { content: 'Pub/Sub with dead-letter topics for failed message handling', isCorrect: true },
                { content: 'Log failures and ignore', isCorrect: false },
                { content: 'Retry infinitely', isCorrect: false },
            ],
        },
        {
            content: 'A company needs to implement network segmentation for PCI DSS compliance. Which Google Cloud features should they use?',
            explanation: 'VPC firewall rules, VPC Service Controls, and network segmentation with separate subnets provide PCI DSS-compliant isolation.',
            answers: [
                { content: 'A single flat network', isCorrect: false },
                { content: 'VPC subnets with firewall rules and VPC Service Controls', isCorrect: true },
                { content: 'Cloud CDN only', isCorrect: false },
                { content: 'No segmentation needed', isCorrect: false },
            ],
        },
        {
            content: 'Which storage option is best for a shared file system accessible by multiple Compute Engine instances?',
            explanation: 'Cloud Filestore provides a managed NFS file system that can be mounted by multiple Compute Engine instances simultaneously.',
            answers: [
                { content: 'Persistent Disk', isCorrect: false },
                { content: 'Cloud Filestore', isCorrect: true },
                { content: 'Cloud Storage', isCorrect: false },
                { content: 'Local SSD', isCorrect: false },
            ],
        },
        {
            content: 'A company needs to process credit card transactions with ACID compliance. Which database should they use?',
            explanation: 'Cloud SQL or Cloud Spanner both provide ACID compliance. For single-region, Cloud SQL is cost-effective; for global, use Spanner.',
            answers: [
                { content: 'Firestore', isCorrect: false },
                { content: 'Cloud SQL or Cloud Spanner (for ACID transactions)', isCorrect: true },
                { content: 'Bigtable', isCorrect: false },
                { content: 'Cloud Storage', isCorrect: false },
            ],
        },
        {
            content: 'Which traffic management strategy enables gradual rollout of a new service version?',
            explanation: 'Traffic splitting (e.g., 90/10, 80/20) gradually shifts traffic from the old version to the new version.',
            answers: [
                { content: 'Immediate full deployment', isCorrect: false },
                { content: 'Traffic splitting with gradual percentage increase', isCorrect: true },
                { content: 'DNS-based switching', isCorrect: false },
                { content: 'Deploying to a different domain', isCorrect: false },
            ],
        },
        {
            content: 'A company needs to detect anomalous network activity in their VPC. Which tool should they use?',
            explanation: 'VPC Flow Logs combined with Security Command Center and threat detection rules can identify anomalous network patterns.',
            answers: [
                { content: 'Cloud CDN', isCorrect: false },
                { content: 'VPC Flow Logs with Security Command Center', isCorrect: true },
                { content: 'Cloud DNS', isCorrect: false },
                { content: 'Cloud NAT', isCorrect: false },
            ],
        },
        {
            content: 'Which Google Cloud service is best for running legacy HPC (High Performance Computing) workloads?',
            explanation: 'HPC VMs on Compute Engine with high-performance networking (gVNIC, Tier_1) and autoscaling batch schedulers handle HPC workloads.',
            answers: [
                { content: 'Cloud Functions', isCorrect: false },
                { content: 'Compute Engine with HPC-optimized VMs and Batch service', isCorrect: true },
                { content: 'App Engine', isCorrect: false },
                { content: 'Cloud Run', isCorrect: false },
            ],
        },
        {
            content: 'A company wants to implement a multi-cloud strategy using Kubernetes. Which Google Cloud platform facilitates this?',
            explanation: 'Anthos provides a consistent platform for managing Kubernetes workloads across Google Cloud, on-premises, and other clouds.',
            answers: [
                { content: 'Cloud Functions', isCorrect: false },
                { content: 'Anthos', isCorrect: true },
                { content: 'Cloud SQL', isCorrect: false },
                { content: 'Compute Engine', isCorrect: false },
            ],
        },
        {
            content: 'Which approach should you use to minimize data transfer costs between Google Cloud regions?',
            explanation: 'Keeping data processing and storage in the same region eliminates inter-region data transfer charges.',
            answers: [
                { content: 'Distribute data across all regions', isCorrect: false },
                { content: 'Co-locate compute and storage in the same region', isCorrect: true },
                { content: 'Use public internet for transfers', isCorrect: false },
                { content: 'Store all data in US regions', isCorrect: false },
            ],
        },
        {
            content: 'A company needs to authorize API calls based on the client\'s geographic location. Which service supports this?',
            explanation: 'Cloud Armor security policies can include geo-based rules to allow or deny traffic based on the client\'s country.',
            answers: [
                { content: 'Cloud DNS', isCorrect: false },
                { content: 'Cloud Armor with geo-based security policies', isCorrect: true },
                { content: 'Cloud CDN', isCorrect: false },
                { content: 'Cloud NAT', isCorrect: false },
            ],
        },
        {
            content: 'Which Google Cloud service provides real-time event streaming for change data capture (CDC)?',
            explanation: 'Datastream is a serverless CDC and replication service that streams data changes to BigQuery, Cloud Storage, or GCS.',
            answers: [
                { content: 'Pub/Sub', isCorrect: false },
                { content: 'Datastream', isCorrect: true },
                { content: 'Dataflow', isCorrect: false },
                { content: 'Cloud SQL', isCorrect: false },
            ],
        },
        {
            content: 'A company wants to implement Infrastructure as Code with version control and automated testing. Which approach is recommended?',
            explanation: 'Terraform with Git version control and CI/CD pipeline (Cloud Build) for plan/apply provides a mature IaC workflow.',
            answers: [
                { content: 'Manually create resources via Console', isCorrect: false },
                { content: 'Terraform in Git with Cloud Build CI/CD for automated plan/apply', isCorrect: true },
                { content: 'Shared scripts without version control', isCorrect: false },
                { content: 'gcloud commands in emails', isCorrect: false },
            ],
        },
        {
            content: 'Which monitoring approach is recommended for a microservices architecture?',
            explanation: 'Distributed tracing (Cloud Trace), structured logging, and custom metrics provide comprehensive observability for microservices.',
            answers: [
                { content: 'Only application logs', isCorrect: false },
                { content: 'Distributed tracing, structured logging, and custom metrics (the three pillars of observability)', isCorrect: true },
                { content: 'Only CPU monitoring', isCorrect: false },
                { content: 'Manual health checks', isCorrect: false },
            ],
        },
        {
            content: 'A company needs to restrict API access to only verified mobile applications. Which platform feature should they use?',
            explanation: 'API keys with application restrictions (Android/iOS) and Identity Platform or Firebase Auth ensure only authorized apps make API calls.',
            answers: [
                { content: 'IP whitelisting', isCorrect: false },
                { content: 'API keys with application restrictions and Identity Platform authentication', isCorrect: true },
                { content: 'No restrictions', isCorrect: false },
                { content: 'VPN only', isCorrect: false },
            ],
        },
        {
            content: 'Which approach should you use to handle schema evolution in a streaming data pipeline?',
            explanation: 'Using schema registries, backward-compatible schema changes, and BigQuery schema auto-detect helps handle evolving schemas.',
            answers: [
                { content: 'Reject all schema changes', isCorrect: false },
                { content: 'Backward-compatible schema evolution with schema registry', isCorrect: true },
                { content: 'Recreate the pipeline for each change', isCorrect: false },
                { content: 'Store all data as unstructured text', isCorrect: false },
            ],
        },
        {
            content: 'A company wants to minimize the blast radius of a security breach. Which architectural principle should they follow?',
            explanation: 'Defense in depth with network segmentation, least privilege, and microservice isolation limits the impact of any breach.',
            answers: [
                { content: 'Use a single shared account for everything', isCorrect: false },
                { content: 'Defense in depth with network segmentation, least privilege, and isolation', isCorrect: true },
                { content: 'Store all secrets in one location', isCorrect: false },
                { content: 'Give all users admin access for productivity', isCorrect: false },
            ],
        },
        {
            content: 'Which Google Cloud service allows you to run containers with GPU access for ML inference?',
            explanation: 'GKE with GPU node pools or Cloud Run with GPU support allows running containerized ML inference workloads with GPU acceleration.',
            answers: [
                { content: 'Cloud Functions', isCorrect: false },
                { content: 'GKE with GPU-enabled node pools or Vertex AI Prediction', isCorrect: true },
                { content: 'App Engine Standard', isCorrect: false },
                { content: 'Cloud SQL', isCorrect: false },
            ],
        },
    ],
};
