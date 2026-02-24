export const aceExam2 = {
    title: 'Google Cloud Associate Cloud Engineer - Practice Test 2',
    description: 'Associate Cloud Engineer practice test with 50 questions on Cloud SQL, App Engine, Cloud Run, monitoring, and security.',
    durationMinutes: 120,
    courseId: 13,
    questions: [
        {
            content: 'You need to migrate an on-premises MySQL database to Google Cloud with minimal changes. Which service should you use?',
            explanation: 'Cloud SQL for MySQL is a fully managed MySQL-compatible database, making it the simplest migration path for existing MySQL workloads.',
            answers: [
                { content: 'Cloud Spanner', isCorrect: false },
                { content: 'Cloud SQL for MySQL', isCorrect: true },
                { content: 'Firestore', isCorrect: false },
                { content: 'Bigtable', isCorrect: false },
            ],
        },
        {
            content: 'Which Cloud Run revision strategy routes all traffic to the latest revision?',
            explanation: 'By default, Cloud Run routes 100% of traffic to the latest revision unless you configure traffic splitting.',
            answers: [
                { content: 'Canary deployment', isCorrect: false },
                { content: 'Route all traffic to latest revision', isCorrect: true },
                { content: 'Blue-green deployment', isCorrect: false },
                { content: 'Rolling update', isCorrect: false },
            ],
        },
        {
            content: 'You want to create a Cloud SQL instance with automatic failover. What configuration should you enable?',
            explanation: 'High Availability (HA) configuration creates a standby instance in a different zone for automatic failover.',
            answers: [
                { content: 'Read replicas', isCorrect: false },
                { content: 'High Availability (HA) configuration', isCorrect: true },
                { content: 'Backups only', isCorrect: false },
                { content: 'Cross-region replication', isCorrect: false },
            ],
        },
        {
            content: 'What is the gcloud command to deploy a container image to Cloud Run?',
            explanation: '"gcloud run deploy" deploys a container image to Cloud Run, creating a new service or updating an existing one.',
            answers: [
                { content: 'gcloud run create', isCorrect: false },
                { content: 'gcloud run deploy', isCorrect: true },
                { content: 'gcloud run start', isCorrect: false },
                { content: 'gcloud run push', isCorrect: false },
            ],
        },
        {
            content: 'Which log type captures API calls and administrative actions in Google Cloud?',
            explanation: 'Admin Activity audit logs record administrative actions and API calls that modify the configuration or metadata of resources.',
            answers: [
                { content: 'Data Access logs', isCorrect: false },
                { content: 'Admin Activity audit logs', isCorrect: true },
                { content: 'System Event logs', isCorrect: false },
                { content: 'Policy Denied logs', isCorrect: false },
            ],
        },
        {
            content: 'You need to schedule a recurring task that runs every day at midnight. Which service should you use?',
            explanation: 'Cloud Scheduler is a fully managed cron job service for scheduling virtually any job, including HTTP, Pub/Sub, and App Engine targets.',
            answers: [
                { content: 'Cloud Tasks', isCorrect: false },
                { content: 'Cloud Scheduler', isCorrect: true },
                { content: 'Cloud Composer', isCorrect: false },
                { content: 'Cloud Functions', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of VPC Service Controls?',
            explanation: 'VPC Service Controls create a security perimeter around Google Cloud resources to prevent data exfiltration.',
            answers: [
                { content: 'Managing VPC subnets', isCorrect: false },
                { content: 'Creating security perimeters to prevent data exfiltration', isCorrect: true },
                { content: 'Load balancing traffic', isCorrect: false },
                { content: 'Monitoring network performance', isCorrect: false },
            ],
        },
        {
            content: 'Which command exports Cloud Logging logs to Cloud Storage?',
            explanation: 'Log sinks (created via gcloud logging sinks create) route log entries to destinations like Cloud Storage, BigQuery, or Pub/Sub.',
            answers: [
                { content: 'gcloud logging export', isCorrect: false },
                { content: 'gcloud logging sinks create', isCorrect: true },
                { content: 'gcloud logging copy', isCorrect: false },
                { content: 'gcloud storage import-logs', isCorrect: false },
            ],
        },
        {
            content: 'You need to run a batch processing job that processes data once and then terminates. Which Kubernetes object should you use?',
            explanation: 'A Kubernetes Job creates one or more pods to perform a task and ensures the specified number of them successfully terminate.',
            answers: [
                { content: 'Deployment', isCorrect: false },
                { content: 'Job', isCorrect: true },
                { content: 'DaemonSet', isCorrect: false },
                { content: 'StatefulSet', isCorrect: false },
            ],
        },
        {
            content: 'What is the maximum retention period for Cloud Logging log entries by default?',
            explanation: 'Admin Activity audit logs are retained for 400 days. Other logs have a default retention of 30 days, configurable up to 3,650 days.',
            answers: [
                { content: '7 days', isCorrect: false },
                { content: '30 days for most logs', isCorrect: true },
                { content: '90 days', isCorrect: false },
                { content: '365 days', isCorrect: false },
            ],
        },
        {
            content: 'Which Cloud Storage feature allows you to keep historical versions of an object?',
            explanation: 'Object Versioning retains previous versions of an object when it is overwritten or deleted, enabling recovery of older versions.',
            answers: [
                { content: 'Lifecycle management', isCorrect: false },
                { content: 'Object Versioning', isCorrect: true },
                { content: 'Retention policies', isCorrect: false },
                { content: 'Object holds', isCorrect: false },
            ],
        },
        {
            content: 'You want to deploy Cloud Functions triggered by a Cloud Storage upload. Which trigger type should you use?',
            explanation: 'Cloud Storage triggers invoke a Cloud Function when an object is created, deleted, archived, or metadata is updated in a specified bucket.',
            answers: [
                { content: 'HTTP trigger', isCorrect: false },
                { content: 'Cloud Storage trigger', isCorrect: true },
                { content: 'Pub/Sub trigger', isCorrect: false },
                { content: 'Firestore trigger', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of Cloud Trace?',
            explanation: 'Cloud Trace is a distributed tracing system that helps you understand how long it takes your application to handle incoming requests.',
            answers: [
                { content: 'Monitoring CPU usage', isCorrect: false },
                { content: 'Analyzing request latency and tracing distributed requests', isCorrect: true },
                { content: 'Logging error messages', isCorrect: false },
                { content: 'Managing firewall rules', isCorrect: false },
            ],
        },
        {
            content: 'Which command resizes a Compute Engine instance\'s machine type?',
            explanation: 'You need to stop the instance first, then use "gcloud compute instances set-machine-type" to change its machine type.',
            answers: [
                { content: 'gcloud compute instances resize', isCorrect: false },
                { content: 'gcloud compute instances set-machine-type', isCorrect: true },
                { content: 'gcloud compute instances update-type', isCorrect: false },
                { content: 'gcloud compute instances scale', isCorrect: false },
            ],
        },
        {
            content: 'You need to give external users temporary access to a Cloud Storage object. What should you use?',
            explanation: 'Signed URLs provide time-limited access to a specific Cloud Storage object without requiring users to have a Google account.',
            answers: [
                { content: 'Make the object public', isCorrect: false },
                { content: 'Signed URLs', isCorrect: true },
                { content: 'IAM binding', isCorrect: false },
                { content: 'Service account key', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of Kubernetes Secrets?',
            explanation: 'Kubernetes Secrets store sensitive information such as passwords, tokens, and keys, keeping them separate from pod specs and container images.',
            answers: [
                { content: 'Storing application logs', isCorrect: false },
                { content: 'Storing sensitive data like passwords and tokens', isCorrect: true },
                { content: 'Managing node configurations', isCorrect: false },
                { content: 'Defining resource quotas', isCorrect: false },
            ],
        },
        {
            content: 'Which GKE feature automatically repairs unhealthy nodes?',
            explanation: 'Node Auto-Repair automatically monitors and repairs nodes that become unhealthy, ensuring cluster health.',
            answers: [
                { content: 'Cluster Autoscaler', isCorrect: false },
                { content: 'Node Auto-Repair', isCorrect: true },
                { content: 'Pod Disruption Budget', isCorrect: false },
                { content: 'Horizontal Pod Autoscaler', isCorrect: false },
            ],
        },
        {
            content: 'You need to restrict which regions resources can be deployed in. Which service should you use?',
            explanation: 'Organization Policy Service allows you to set constraints like restricting resource locations to specific regions.',
            answers: [
                { content: 'Cloud IAM', isCorrect: false },
                { content: 'Organization Policy Service', isCorrect: true },
                { content: 'VPC Firewall rules', isCorrect: false },
                { content: 'Cloud Monitoring', isCorrect: false },
            ],
        },
        {
            content: 'What is the difference between a zonal and regional Persistent Disk?',
            explanation: 'A zonal disk is available in one zone. A regional disk replicates data across two zones in the same region for higher availability.',
            answers: [
                { content: 'Zonal disks are faster', isCorrect: false },
                { content: 'Regional disks replicate across two zones for higher availability', isCorrect: true },
                { content: 'Regional disks are cheaper', isCorrect: false },
                { content: 'There is no difference', isCorrect: false },
            ],
        },
        {
            content: 'Which command creates a Cloud SQL database instance?',
            explanation: '"gcloud sql instances create" provisions a new Cloud SQL database instance.',
            answers: [
                { content: 'gcloud sql databases create', isCorrect: false },
                { content: 'gcloud sql instances create', isCorrect: true },
                { content: 'gcloud database instances create', isCorrect: false },
                { content: 'gcloud compute sql create', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of Cloud Profiler?',
            explanation: 'Cloud Profiler continuously analyzes CPU and memory usage to help identify performance bottlenecks in production applications.',
            answers: [
                { content: 'Profiling network traffic', isCorrect: false },
                { content: 'Identifying CPU and memory performance bottlenecks', isCorrect: true },
                { content: 'Managing user profiles', isCorrect: false },
                { content: 'Logging application errors', isCorrect: false },
            ],
        },
        {
            content: 'You need to set up a shared VPC so multiple projects can use the same network. What do you need?',
            explanation: 'Shared VPC requires a host project that owns the VPC and service projects that use subnets from the shared VPC.',
            answers: [
                { content: 'VPC peering between all projects', isCorrect: false },
                { content: 'A host project and service projects using Shared VPC', isCorrect: true },
                { content: 'Cloud VPN tunnels between projects', isCorrect: false },
                { content: 'Cloud Interconnect', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of a Cloud Storage bucket retention policy?',
            explanation: 'A retention policy specifies a minimum duration that objects must be retained and cannot be deleted or modified during that period.',
            answers: [
                { content: 'Automatically deleting old objects', isCorrect: false },
                { content: 'Ensuring objects cannot be deleted before a specified duration', isCorrect: true },
                { content: 'Compressing stored objects', isCorrect: false },
                { content: 'Encrypting objects at rest', isCorrect: false },
            ],
        },
        {
            content: 'Which Kubernetes resource defines how external traffic reaches Services in a cluster?',
            explanation: 'An Ingress manages external HTTP(S) access to services within a cluster, providing URL-based routing and SSL termination.',
            answers: [
                { content: 'Service', isCorrect: false },
                { content: 'Ingress', isCorrect: true },
                { content: 'Endpoint', isCorrect: false },
                { content: 'NetworkPolicy', isCorrect: false },
            ],
        },
        {
            content: 'You need to connect to a Cloud SQL instance from a Compute Engine VM in the same VPC. What is the recommended approach?',
            explanation: 'Private IP connectivity allows VMs in the same VPC to access Cloud SQL using a private IP address, which is more secure and performant.',
            answers: [
                { content: 'Use the public IP of Cloud SQL', isCorrect: false },
                { content: 'Configure private IP connectivity for Cloud SQL', isCorrect: true },
                { content: 'Use Cloud SQL Proxy on a public IP', isCorrect: false },
                { content: 'Create a VPN tunnel', isCorrect: false },
            ],
        },
        {
            content: 'What is the gcloud command to view the current project configuration?',
            explanation: '"gcloud config list" displays the current configuration properties including the project, account, and region.',
            answers: [
                { content: 'gcloud config show', isCorrect: false },
                { content: 'gcloud config list', isCorrect: true },
                { content: 'gcloud config view', isCorrect: false },
                { content: 'gcloud config get', isCorrect: false },
            ],
        },
        {
            content: 'Which service should you use to manage asynchronous task execution with guaranteed delivery?',
            explanation: 'Cloud Tasks manages the execution, dispatch, and delivery of a large number of distributed asynchronous tasks.',
            answers: [
                { content: 'Cloud Scheduler', isCorrect: false },
                { content: 'Cloud Tasks', isCorrect: true },
                { content: 'Pub/Sub', isCorrect: false },
                { content: 'Cloud Functions', isCorrect: false },
            ],
        },
        {
            content: 'What is the difference between gcloud, gsutil, and bq commands?',
            explanation: 'gcloud manages Google Cloud resources, gsutil manages Cloud Storage, and bq is the command-line tool for BigQuery.',
            answers: [
                { content: 'They all do the same thing', isCorrect: false },
                { content: 'gcloud for GCP resources, gsutil for Cloud Storage, bq for BigQuery', isCorrect: true },
                { content: 'gsutil is deprecated', isCorrect: false },
                { content: 'bq manages billing', isCorrect: false },
            ],
        },
        {
            content: 'You need to ensure that deleted Cloud Storage objects can be recovered. What feature should you enable?',
            explanation: 'Soft delete (or Object Versioning) allows recovery of deleted objects within a configurable retention window.',
            answers: [
                { content: 'Lifecycle management', isCorrect: false },
                { content: 'Object Versioning or Soft Delete', isCorrect: true },
                { content: 'Bucket Lock', isCorrect: false },
                { content: 'Customer-managed encryption keys', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of a Kubernetes Horizontal Pod Autoscaler (HPA)?',
            explanation: 'HPA automatically scales the number of pods in a deployment based on observed CPU utilization or custom metrics.',
            answers: [
                { content: 'Scaling cluster nodes', isCorrect: false },
                { content: 'Automatically adjusting the number of pod replicas based on metrics', isCorrect: true },
                { content: 'Scaling persistent storage', isCorrect: false },
                { content: 'Managing Docker images', isCorrect: false },
            ],
        },
        {
            content: 'Which IAM condition allows time-based access control?',
            explanation: 'IAM Conditions allow you to define conditional role bindings, including time-based conditions with access expiration.',
            answers: [
                { content: 'Custom roles', isCorrect: false },
                { content: 'IAM Conditions with temporal attributes', isCorrect: true },
                { content: 'Service account keys', isCorrect: false },
                { content: 'Organization policies', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of Error Reporting in Google Cloud?',
            explanation: 'Error Reporting aggregates and displays errors produced in your running cloud services, helping you identify and fix issues quickly.',
            answers: [
                { content: 'Generating billing reports', isCorrect: false },
                { content: 'Aggregating and displaying application errors for quick identification', isCorrect: true },
                { content: 'Reporting security vulnerabilities', isCorrect: false },
                { content: 'Filing support tickets', isCorrect: false },
            ],
        },
        {
            content: 'You need to create a custom machine type with 6 vCPUs and 20 GB RAM. Is this possible?',
            explanation: 'Custom machine types allow you to specify the exact number of vCPUs and memory, with memory between 0.9 GB and 6.5 GB per vCPU.',
            answers: [
                { content: 'No, only predefined machine types are available', isCorrect: false },
                { content: 'Yes, Compute Engine supports custom machine types', isCorrect: true },
                { content: 'Only with special permission from Google', isCorrect: false },
                { content: 'Only in certain regions', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of a GKE private cluster?',
            explanation: 'A private cluster uses internal IP addresses for nodes, preventing direct internet access and improving security.',
            answers: [
                { content: 'A cluster accessible only from Google Console', isCorrect: false },
                { content: 'A cluster where nodes have only internal IP addresses', isCorrect: true },
                { content: 'A cluster with encrypted storage', isCorrect: false },
                { content: 'A single-user cluster', isCorrect: false },
            ],
        },
        {
            content: 'Which command retrieves credentials for a GKE cluster to use with kubectl?',
            explanation: '"gcloud container clusters get-credentials" configures kubectl with the appropriate credentials and endpoint for a GKE cluster.',
            answers: [
                { content: 'kubectl get credentials', isCorrect: false },
                { content: 'gcloud container clusters get-credentials', isCorrect: true },
                { content: 'gcloud gke auth', isCorrect: false },
                { content: 'gcloud auth gke', isCorrect: false },
            ],
        },
        {
            content: 'What is the Compute Engine live migration feature?',
            explanation: 'Live migration moves running VM instances to another host machine during maintenance events without a reboot or noticeable impact.',
            answers: [
                { content: 'Moving VMs between regions', isCorrect: false },
                { content: 'Automatically migrating VMs to new hosts during maintenance without downtime', isCorrect: true },
                { content: 'Migrating VMs from on-premises to cloud', isCorrect: false },
                { content: 'Moving data between storage classes', isCorrect: false },
            ],
        },
        {
            content: 'You want to enforce that all new projects must have a budget alert. Which mechanism should you use?',
            explanation: 'Organization policies and Terraform/Config Connector can enforce budget creation, but Cloud Billing budgets with programmatic notifications are the standard approach.',
            answers: [
                { content: 'VPC Firewall rules', isCorrect: false },
                { content: 'Organization Policy with budget notification configuration', isCorrect: true },
                { content: 'Cloud Armor policies', isCorrect: false },
                { content: 'Custom IAM roles', isCorrect: false },
            ],
        },
        {
            content: 'Which Cloud Storage access control model provides bucket-level and object-level fine-grained permissions?',
            explanation: 'Fine-grained ACLs (Access Control Lists) provide per-object access control, while uniform bucket-level access uses IAM only.',
            answers: [
                { content: 'Uniform bucket-level access', isCorrect: false },
                { content: 'Fine-grained access control (ACLs)', isCorrect: true },
                { content: 'Signed URLs only', isCorrect: false },
                { content: 'Service account keys', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of OS Login in Compute Engine?',
            explanation: 'OS Login provides a centralized way to manage SSH access using IAM roles, eliminating the need to manage SSH keys manually.',
            answers: [
                { content: 'Installing operating systems', isCorrect: false },
                { content: 'Managing SSH access to VMs using IAM', isCorrect: true },
                { content: 'Monitoring OS performance', isCorrect: false },
                { content: 'Updating OS patches', isCorrect: false },
            ],
        },
        {
            content: 'You need to implement a CI/CD pipeline that builds container images on code push. Which services should you use?',
            explanation: 'Cloud Build can be triggered by source repository changes to automatically build images and store them in Artifact Registry.',
            answers: [
                { content: 'Cloud Functions and Cloud Storage', isCorrect: false },
                { content: 'Cloud Build with Cloud Source Repositories or GitHub trigger', isCorrect: true },
                { content: 'Compute Engine with cron jobs', isCorrect: false },
                { content: 'App Engine with manual deployment', isCorrect: false },
            ],
        },
        {
            content: 'What is the benefit of using Workload Identity in GKE?',
            explanation: 'Workload Identity allows Kubernetes Service Accounts to act as Google IAM service accounts, eliminating the need for keys.',
            answers: [
                { content: 'Faster pod deployment', isCorrect: false },
                { content: 'Securely accessing Google APIs from pods without service account keys', isCorrect: true },
                { content: 'Automatic pod scaling', isCorrect: false },
                { content: 'Network policy enforcement', isCorrect: false },
            ],
        },
        {
            content: 'Which command lists all available zones in a Google Cloud region?',
            explanation: '"gcloud compute zones list" displays all available zones, optionally filtered by region.',
            answers: [
                { content: 'gcloud compute zones show', isCorrect: false },
                { content: 'gcloud compute zones list', isCorrect: true },
                { content: 'gcloud regions zones list', isCorrect: false },
                { content: 'gcloud zones get', isCorrect: false },
            ],
        },
        {
            content: 'What happens when you delete a Google Cloud project?',
            explanation: 'Deleting a project shuts down all resources and enters a 30-day pending deletion period during which it can be recovered.',
            answers: [
                { content: 'All resources are immediately and permanently deleted', isCorrect: false },
                { content: 'Project enters a 30-day pending deletion period and can be recovered', isCorrect: true },
                { content: 'Only billing stops but resources remain', isCorrect: false },
                { content: 'Resources are moved to another project', isCorrect: false },
            ],
        },
    ],
};
