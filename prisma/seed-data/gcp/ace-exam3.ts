export const aceExam3 = {
    title: 'Google Cloud Associate Cloud Engineer - Practice Test 3',
    description: 'Associate Cloud Engineer practice test with 50 questions on advanced networking, Deployment Manager, billing, and troubleshooting.',
    durationMinutes: 120,
    courseId: 13,
    questions: [
        {
            content: 'You need to deploy infrastructure as code on Google Cloud. Which native service should you use?',
            explanation: 'Cloud Deployment Manager is Google Cloud\'s native IaC service that allows you to define resources using YAML, Python, or Jinja2 templates.',
            answers: [
                { content: 'Cloud Build', isCorrect: false },
                { content: 'Cloud Deployment Manager', isCorrect: true },
                { content: 'Cloud Composer', isCorrect: false },
                { content: 'Cloud Source Repositories', isCorrect: false },
            ],
        },
        {
            content: 'What is the recommended way to authenticate applications running on Compute Engine to other Google Cloud services?',
            explanation: 'Service accounts attached to VM instances provide automatic authentication to Google Cloud APIs without storing credentials.',
            answers: [
                { content: 'Store API keys in environment variables', isCorrect: false },
                { content: 'Use attached service accounts', isCorrect: true },
                { content: 'Use user accounts', isCorrect: false },
                { content: 'Hard-code credentials in source code', isCorrect: false },
            ],
        },
        {
            content: 'Which command exports IAM policy for a project?',
            explanation: '"gcloud projects get-iam-policy" retrieves the IAM policy for the specified project in YAML or JSON format.',
            answers: [
                { content: 'gcloud iam policies export', isCorrect: false },
                { content: 'gcloud projects get-iam-policy', isCorrect: true },
                { content: 'gcloud projects show-permissions', isCorrect: false },
                { content: 'gcloud auth list-policies', isCorrect: false },
            ],
        },
        {
            content: 'You have a Deployment Manager template and need to preview changes before applying. What flag should you use?',
            explanation: 'The --preview flag lets you see what changes will be made without actually creating or modifying resources.',
            answers: [
                { content: '--dry-run', isCorrect: false },
                { content: '--preview', isCorrect: true },
                { content: '--test', isCorrect: false },
                { content: '--validate', isCorrect: false },
            ],
        },
        {
            content: 'Which billing export destination allows you to analyze costs using SQL queries?',
            explanation: 'Exporting billing data to BigQuery allows you to run SQL queries for detailed cost analysis and create custom dashboards.',
            answers: [
                { content: 'Cloud Storage', isCorrect: false },
                { content: 'BigQuery', isCorrect: true },
                { content: 'Pub/Sub', isCorrect: false },
                { content: 'Cloud Logging', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of a VPC Firewall rule\'s "priority" field?',
            explanation: 'Priority determines the order in which rules are evaluated. Lower numbers have higher priority (0 is highest, 65535 is lowest).',
            answers: [
                { content: 'It determines how fast the rule is applied', isCorrect: false },
                { content: 'It determines the order rules are evaluated; lower numbers = higher priority', isCorrect: true },
                { content: 'It indicates the rule creation date', isCorrect: false },
                { content: 'It has no effect', isCorrect: false },
            ],
        },
        {
            content: 'You need to ensure a Compute Engine VM keeps running even during planned maintenance events. What should you configure?',
            explanation: 'Setting the maintenance policy to "MIGRATE" enables live migration, moving the VM to another host without downtime.',
            answers: [
                { content: 'Set availability policy to TERMINATE', isCorrect: false },
                { content: 'Set maintenance policy to MIGRATE (live migration)', isCorrect: true },
                { content: 'Use preemptible VMs', isCorrect: false },
                { content: 'Use Local SSDs', isCorrect: false },
            ],
        },
        {
            content: 'Which command adds an IAM role binding to a service account?',
            explanation: '"gcloud projects add-iam-policy-binding" adds a role binding to a project for a member (user, group, or service account).',
            answers: [
                { content: 'gcloud iam roles create', isCorrect: false },
                { content: 'gcloud projects add-iam-policy-binding', isCorrect: true },
                { content: 'gcloud iam add-binding', isCorrect: false },
                { content: 'gcloud auth add-role', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of Cloud Billing Account?',
            explanation: 'A Billing Account is linked to one or more projects and defines who pays for the resources used in those projects.',
            answers: [
                { content: 'Managing user access', isCorrect: false },
                { content: 'Tracking and paying for GCP resource usage', isCorrect: true },
                { content: 'Monitoring application performance', isCorrect: false },
                { content: 'Managing API quotas', isCorrect: false },
            ],
        },
        {
            content: 'You need to create a firewall rule that allows SSH from a specific IP range. Which parameters do you need?',
            explanation: 'You need to specify: direction (INGRESS), action (ALLOW), protocol:port (tcp:22), source ranges, and target tags or service accounts.',
            answers: [
                { content: 'Only the source IP and port', isCorrect: false },
                { content: 'Direction, action, protocol:port (tcp:22), source ranges, and target', isCorrect: true },
                { content: 'Only the VPC name', isCorrect: false },
                { content: 'Only the VM instance name', isCorrect: false },
            ],
        },
        {
            content: 'Which GKE cluster type has the control plane managed across multiple zones?',
            explanation: 'A Regional cluster distributes the control plane across multiple zones for higher availability compared to a zonal cluster.',
            answers: [
                { content: 'Zonal cluster', isCorrect: false },
                { content: 'Regional cluster', isCorrect: true },
                { content: 'Private cluster', isCorrect: false },
                { content: 'Autopilot cluster', isCorrect: false },
            ],
        },
        {
            content: 'What is GKE Autopilot?',
            explanation: 'Autopilot is a mode of operation in GKE where Google manages the cluster infrastructure including nodes, reducing operational overhead.',
            answers: [
                { content: 'Automatic code deployment', isCorrect: false },
                { content: 'A fully managed GKE mode where Google manages nodes and infrastructure', isCorrect: true },
                { content: 'Auto-scaling for databases', isCorrect: false },
                { content: 'Automatic security patching for apps', isCorrect: false },
            ],
        },
        {
            content: 'You need to copy a large amount of data between Cloud Storage buckets in different regions. Which command should you use?',
            explanation: '"gsutil cp" (or "gcloud storage cp") copies objects between Cloud Storage locations, supporting cross-region transfers.',
            answers: [
                { content: 'gsutil mv', isCorrect: false },
                { content: 'gsutil cp or gcloud storage cp', isCorrect: true },
                { content: 'gcloud storage transfer', isCorrect: false },
                { content: 'gsutil sync', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of Google Cloud\'s API quotas?',
            explanation: 'API quotas protect shared infrastructure by limiting the number of API calls a project can make, preventing abuse.',
            answers: [
                { content: 'To increase API performance', isCorrect: false },
                { content: 'To limit API usage and protect shared infrastructure', isCorrect: true },
                { content: 'To encrypt API calls', isCorrect: false },
                { content: 'To authenticate users', isCorrect: false },
            ],
        },
        {
            content: 'Which command attaches a disk to a running Compute Engine instance?',
            explanation: '"gcloud compute instances attach-disk" attaches a persistent disk to a running VM instance.',
            answers: [
                { content: 'gcloud compute disks attach', isCorrect: false },
                { content: 'gcloud compute instances attach-disk', isCorrect: true },
                { content: 'gcloud compute instances add-disk', isCorrect: false },
                { content: 'gcloud compute disks mount', isCorrect: false },
            ],
        },
        {
            content: 'What is a Kubernetes DaemonSet?',
            explanation: 'A DaemonSet ensures that a copy of a pod runs on all (or some) nodes in the cluster, commonly used for monitoring agents or log collectors.',
            answers: [
                { content: 'A deployment with automatic scaling', isCorrect: false },
                { content: 'Ensures a pod runs on every node in the cluster', isCorrect: true },
                { content: 'A batch processing job', isCorrect: false },
                { content: 'A service discovery mechanism', isCorrect: false },
            ],
        },
        {
            content: 'You want to create a VM from a custom image. Which command do you use?',
            explanation: 'Use "gcloud compute instances create" with the --image flag pointing to your custom image.',
            answers: [
                { content: 'gcloud compute images deploy', isCorrect: false },
                { content: 'gcloud compute instances create --image=CUSTOM_IMAGE', isCorrect: true },
                { content: 'gcloud compute instances clone', isCorrect: false },
                { content: 'gcloud compute templates create', isCorrect: false },
            ],
        },
        {
            content: 'What is the difference between an Instance Template and Instance Group?',
            explanation: 'An Instance Template defines the VM configuration (machine type, disk, etc.). An Instance Group manages a set of VMs created from a template.',
            answers: [
                { content: 'They are the same thing', isCorrect: false },
                { content: 'Template defines VM config; Instance Group manages multiple VMs using that template', isCorrect: true },
                { content: 'Instance Groups are templates for containers', isCorrect: false },
                { content: 'Templates can only create one VM', isCorrect: false },
            ],
        },
        {
            content: 'Which log explorer filter syntax searches for ERROR level logs?',
            explanation: 'In Cloud Logging, you can filter by severity using: severity="ERROR" or severity>=ERROR.',
            answers: [
                { content: 'level:ERROR', isCorrect: false },
                { content: 'severity="ERROR"', isCorrect: true },
                { content: 'type=ERROR', isCorrect: false },
                { content: 'log.error=true', isCorrect: false },
            ],
        },
        {
            content: 'You need to allow a Cloud Function to access a Cloud SQL instance. What is the recommended approach?',
            explanation: 'Use the Cloud SQL Auth Proxy or direct VPC connector. For Cloud Functions, configure the Cloud SQL connection string with the instance connection name.',
            answers: [
                { content: 'Whitelist the Cloud Function\'s IP in Cloud SQL', isCorrect: false },
                { content: 'Use Cloud SQL connection with instance connection name or VPC connector', isCorrect: true },
                { content: 'Make Cloud SQL public', isCorrect: false },
                { content: 'Use SSH tunneling', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of Terraform in Google Cloud?',
            explanation: 'Terraform is a third-party IaC tool by HashiCorp that can provision and manage Google Cloud resources using declarative configuration files.',
            answers: [
                { content: 'A Google-native monitoring tool', isCorrect: false },
                { content: 'A third-party infrastructure as code tool for provisioning cloud resources', isCorrect: true },
                { content: 'A container runtime', isCorrect: false },
                { content: 'A security scanning tool', isCorrect: false },
            ],
        },
        {
            content: 'Which command creates a snapshot schedule for Persistent Disks?',
            explanation: '"gcloud compute resource-policies create snapshot-schedule" creates a policy for automated disk snapshots.',
            answers: [
                { content: 'gcloud compute snapshots schedule', isCorrect: false },
                { content: 'gcloud compute resource-policies create snapshot-schedule', isCorrect: true },
                { content: 'gcloud compute disks create-schedule', isCorrect: false },
                { content: 'gcloud compute backup-schedule create', isCorrect: false },
            ],
        },
        {
            content: 'What is the benefit of using Customer-Managed Encryption Keys (CMEK)?',
            explanation: 'CMEK allows you to control encryption keys in Cloud KMS, providing more control over data encryption than Google-managed keys.',
            answers: [
                { content: 'Faster encryption', isCorrect: false },
                { content: 'Greater control over encryption key lifecycle and access', isCorrect: true },
                { content: 'Free encryption', isCorrect: false },
                { content: 'Automatic key rotation', isCorrect: false },
            ],
        },
        {
            content: 'You need to limit the number of CPU cores a project can use. Which mechanism should you use?',
            explanation: 'Compute Engine quotas limit the total resources (CPUs, GPUs, IPs, etc.) a project can use. You can request quota increases.',
            answers: [
                { content: 'IAM policies', isCorrect: false },
                { content: 'Quotas', isCorrect: true },
                { content: 'Organization policies', isCorrect: false },
                { content: 'Budget alerts', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of a Kubernetes PersistentVolumeClaim (PVC)?',
            explanation: 'A PVC is a request for storage by a user. It binds to a PersistentVolume and provides persistent storage for pods.',
            answers: [
                { content: 'Claiming CPU resources', isCorrect: false },
                { content: 'Requesting persistent storage for pods', isCorrect: true },
                { content: 'Claiming network bandwidth', isCorrect: false },
                { content: 'Requesting memory resources', isCorrect: false },
            ],
        },
        {
            content: 'Which gcloud command shows detailed information about a specific VM instance?',
            explanation: '"gcloud compute instances describe" displays all configuration details of a specific VM instance.',
            answers: [
                { content: 'gcloud compute instances show', isCorrect: false },
                { content: 'gcloud compute instances describe', isCorrect: true },
                { content: 'gcloud compute instances details', isCorrect: false },
                { content: 'gcloud compute instances info', isCorrect: false },
            ],
        },
        {
            content: 'You need to monitor a custom application metric. What should you use?',
            explanation: 'Cloud Monitoring supports custom metrics through the Monitoring API or OpenTelemetry, allowing you to track application-specific data.',
            answers: [
                { content: 'Cloud Logging only', isCorrect: false },
                { content: 'Cloud Monitoring custom metrics', isCorrect: true },
                { content: 'Cloud Trace', isCorrect: false },
                { content: 'Cloud Profiler', isCorrect: false },
            ],
        },
        {
            content: 'What is the default network in a new Google Cloud project?',
            explanation: 'Every new project has a "default" auto-mode VPC network with subnets in each region and default firewall rules.',
            answers: [
                { content: 'There is no default network', isCorrect: false },
                { content: 'An auto-mode VPC called "default" with subnets in all regions', isCorrect: true },
                { content: 'A custom-mode VPC with no subnets', isCorrect: false },
                { content: 'A legacy network', isCorrect: false },
            ],
        },
        {
            content: 'Which Cloud SQL feature allows you to offload read traffic from the primary instance?',
            explanation: 'Read replicas handle read queries, reducing the load on the primary instance for better read performance.',
            answers: [
                { content: 'High availability configuration', isCorrect: false },
                { content: 'Read replicas', isCorrect: true },
                { content: 'Backups', isCorrect: false },
                { content: 'Point-in-time recovery', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of Cloud Identity?',
            explanation: 'Cloud Identity provides identity services (user management, device management, SSO) for organizations, even without using Google Cloud.',
            answers: [
                { content: 'Managing virtual machines', isCorrect: false },
                { content: 'Providing identity and device management for organizations', isCorrect: true },
                { content: 'Encrypting data', isCorrect: false },
                { content: 'Managing APIs', isCorrect: false },
            ],
        },
        {
            content: 'You need to troubleshoot why a VM cannot reach the internet. Which tool should you use first?',
            explanation: 'VPC Flow Logs and Firewall Rules Logging help diagnose connectivity issues by showing allowed and denied connections.',
            answers: [
                { content: 'Cloud Profiler', isCorrect: false },
                { content: 'VPC Flow Logs and Firewall Rules Logging', isCorrect: true },
                { content: 'Cloud Trace', isCorrect: false },
                { content: 'BigQuery', isCorrect: false },
            ],
        },
        {
            content: 'Which service provides managed TLS/SSL certificates for Google Cloud load balancers?',
            explanation: 'Google-managed SSL certificates are automatically provisioned and renewed for use with Cloud Load Balancing.',
            answers: [
                { content: 'Cloud KMS', isCorrect: false },
                { content: 'Google-managed SSL certificates', isCorrect: true },
                { content: 'Secret Manager', isCorrect: false },
                { content: 'Certificate Authority Service', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of the gcloud compute ssh command?',
            explanation: '"gcloud compute ssh" establishes an SSH connection to a VM instance, automatically managing SSH keys.',
            answers: [
                { content: 'Creating a new VM', isCorrect: false },
                { content: 'Connecting to a VM via SSH with automatic key management', isCorrect: true },
                { content: 'Copying files to a VM', isCorrect: false },
                { content: 'Restarting a VM', isCorrect: false },
            ],
        },
        {
            content: 'Which Kubernetes object stores TLS certificates for Ingress?',
            explanation: 'Kubernetes Secrets of type "kubernetes.io/tls" store TLS certificates and private keys for use with Ingress resources.',
            answers: [
                { content: 'ConfigMap', isCorrect: false },
                { content: 'Secret of type TLS', isCorrect: true },
                { content: 'PersistentVolume', isCorrect: false },
                { content: 'ServiceAccount', isCorrect: false },
            ],
        },
        {
            content: 'You need to migrate VMs to Google Cloud with minimal downtime. Which service should you use?',
            explanation: 'Migrate to Virtual Machines provides continuous block-level replication for VM migration with minimal downtime cutover.',
            answers: [
                { content: 'Cloud Storage Transfer Service', isCorrect: false },
                { content: 'Migrate to Virtual Machines', isCorrect: true },
                { content: 'Deployment Manager', isCorrect: false },
                { content: 'Transfer Appliance', isCorrect: false },
            ],
        },
        {
            content: 'What is the difference between "gcloud auth login" and "gcloud auth application-default login"?',
            explanation: '"gcloud auth login" authenticates the user for gcloud CLI. "gcloud auth application-default login" sets up Application Default Credentials for local development.',
            answers: [
                { content: 'They are identical', isCorrect: false },
                { content: '"auth login" for CLI commands; "application-default login" for local application authentication', isCorrect: true },
                { content: 'Only "auth login" works with service accounts', isCorrect: false },
                { content: '"application-default login" is deprecated', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of Network Tags on Compute Engine instances?',
            explanation: 'Network tags identify VMs for applying firewall rules and routes, allowing selective traffic control.',
            answers: [
                { content: 'Billing purposes', isCorrect: false },
                { content: 'Identifying VMs for firewall rules and routes', isCorrect: true },
                { content: 'Organizing resources for search', isCorrect: false },
                { content: 'Setting VM priority', isCorrect: false },
            ],
        },
        {
            content: 'Which command updates a GKE cluster to enable auto-upgrade for nodes?',
            explanation: '"gcloud container node-pools update" with --enable-autoupgrade enables automatic Kubernetes version upgrades for node pools.',
            answers: [
                { content: 'gcloud container clusters update --enable-autoupgrade', isCorrect: false },
                { content: 'gcloud container node-pools update --enable-autoupgrade', isCorrect: true },
                { content: 'kubectl upgrade nodes', isCorrect: false },
                { content: 'gcloud gke enable-upgrade', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of Cloud Asset Inventory?',
            explanation: 'Cloud Asset Inventory provides a searchable inventory of all your Google Cloud resources and IAM policies.',
            answers: [
                { content: 'Managing billing', isCorrect: false },
                { content: 'Searching and inventorying all cloud resources and IAM policies', isCorrect: true },
                { content: 'Deploying applications', isCorrect: false },
                { content: 'Monitoring performance', isCorrect: false },
            ],
        },
        {
            content: 'You need a database that can handle high-throughput writes for IoT telemetry data. Which service is best?',
            explanation: 'Cloud Bigtable is designed for high-throughput, low-latency workloads like IoT time-series data, with consistent sub-10ms latency.',
            answers: [
                { content: 'Cloud SQL', isCorrect: false },
                { content: 'Cloud Bigtable', isCorrect: true },
                { content: 'Firestore', isCorrect: false },
                { content: 'Cloud Spanner', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of Packet Mirroring in VPC?',
            explanation: 'Packet Mirroring captures and inspects network traffic to and from VMs for security monitoring and troubleshooting.',
            answers: [
                { content: 'Duplicating VM instances', isCorrect: false },
                { content: 'Capturing and inspecting network traffic for security and troubleshooting', isCorrect: true },
                { content: 'Load balancing packets', isCorrect: false },
                { content: 'Compressing network data', isCorrect: false },
            ],
        },
        {
            content: 'Which command creates a new service account?',
            explanation: '"gcloud iam service-accounts create" creates a new service account in the specified project.',
            answers: [
                { content: 'gcloud auth create-service-account', isCorrect: false },
                { content: 'gcloud iam service-accounts create', isCorrect: true },
                { content: 'gcloud compute service-accounts new', isCorrect: false },
                { content: 'gcloud iam accounts create', isCorrect: false },
            ],
        },
        {
            content: 'What is the recommended way to access Cloud SQL from App Engine?',
            explanation: 'App Engine uses built-in Cloud SQL connectivity via Unix sockets, requiring only the instance connection name.',
            answers: [
                { content: 'Use the public IP with SSL', isCorrect: false },
                { content: 'Use built-in Cloud SQL connectivity via Unix sockets', isCorrect: true },
                { content: 'Set up a VPN tunnel', isCorrect: false },
                { content: 'Use SSH tunneling', isCorrect: false },
            ],
        },
        {
            content: 'Which command is used to update an existing Deployment Manager deployment?',
            explanation: '"gcloud deployment-manager deployments update" updates existing resources based on the modified configuration file.',
            answers: [
                { content: 'gcloud deployment-manager deployments modify', isCorrect: false },
                { content: 'gcloud deployment-manager deployments update', isCorrect: true },
                { content: 'gcloud deployment-manager deployments apply', isCorrect: false },
                { content: 'gcloud deployment-manager deployments patch', isCorrect: false },
            ],
        },
    ],
};
