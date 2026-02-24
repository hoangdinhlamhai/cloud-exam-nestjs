export const aceExam1 = {
    title: 'Google Cloud Associate Cloud Engineer - Practice Test 1',
    description: 'Associate Cloud Engineer practice test with 50 questions on Compute Engine, GKE, IAM, networking, and cloud operations.',
    durationMinutes: 120,
    courseId: 13,
    questions: [
        {
            content: 'You need to create a Compute Engine instance that can be preempted by Google Cloud at any time. Which VM type should you use?',
            explanation: 'Spot VMs (formerly preemptible VMs) are excess Compute Engine capacity available at a significant discount but can be reclaimed by Google at any time.',
            answers: [
                { content: 'Standard VM', isCorrect: false },
                { content: 'Spot VM', isCorrect: true },
                { content: 'Sole-tenant VM', isCorrect: false },
                { content: 'Shielded VM', isCorrect: false },
            ],
        },
        {
            content: 'Which gcloud command creates a new Compute Engine instance?',
            explanation: 'The "gcloud compute instances create" command is used to create new VM instances in Compute Engine.',
            answers: [
                { content: 'gcloud compute instances start', isCorrect: false },
                { content: 'gcloud compute instances create', isCorrect: true },
                { content: 'gcloud compute instances new', isCorrect: false },
                { content: 'gcloud compute instances deploy', isCorrect: false },
            ],
        },
        {
            content: 'You want to deploy a containerized application to GKE. What is the smallest deployable unit in Kubernetes?',
            explanation: 'A Pod is the smallest deployable unit in Kubernetes, consisting of one or more containers that share storage, network, and specifications.',
            answers: [
                { content: 'Container', isCorrect: false },
                { content: 'Pod', isCorrect: true },
                { content: 'Node', isCorrect: false },
                { content: 'Deployment', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of a Kubernetes Service of type "LoadBalancer" in GKE?',
            explanation: 'A LoadBalancer Service exposes your application externally using a cloud provider\'s load balancer, providing a single external IP address.',
            answers: [
                { content: 'Internal pod-to-pod communication', isCorrect: false },
                { content: 'Exposing the application externally with a cloud load balancer', isCorrect: true },
                { content: 'Auto-scaling pods', isCorrect: false },
                { content: 'Storing persistent data', isCorrect: false },
            ],
        },
        {
            content: 'Which IAM role provides the least privilege to view resources without modifying them?',
            explanation: 'The Viewer role (roles/viewer) provides read-only access to all resources, following the principle of least privilege for viewing.',
            answers: [
                { content: 'roles/editor', isCorrect: false },
                { content: 'roles/viewer', isCorrect: true },
                { content: 'roles/owner', isCorrect: false },
                { content: 'roles/admin', isCorrect: false },
            ],
        },
        {
            content: 'How do you set the default project for the gcloud CLI?',
            explanation: 'The "gcloud config set project PROJECT_ID" command sets the default project for subsequent gcloud commands.',
            answers: [
                { content: 'gcloud set project PROJECT_ID', isCorrect: false },
                { content: 'gcloud config set project PROJECT_ID', isCorrect: true },
                { content: 'gcloud project set PROJECT_ID', isCorrect: false },
                { content: 'gcloud default project PROJECT_ID', isCorrect: false },
            ],
        },
        {
            content: 'Which Google Cloud service provides persistent block storage for VMs?',
            explanation: 'Persistent Disk provides durable and high-performance block storage for virtual machine instances.',
            answers: [
                { content: 'Cloud Storage', isCorrect: false },
                { content: 'Persistent Disk', isCorrect: true },
                { content: 'Cloud Filestore', isCorrect: false },
                { content: 'Local SSD', isCorrect: false },
            ],
        },
        {
            content: 'You need to create a VPC network that allows you to define custom subnets. Which mode should you use?',
            explanation: 'Custom mode VPC networks let you manually create and configure subnets, giving you full control over IP ranges and regions.',
            answers: [
                { content: 'Auto mode', isCorrect: false },
                { content: 'Custom mode', isCorrect: true },
                { content: 'Legacy mode', isCorrect: false },
                { content: 'Shared mode', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of a GKE Node Pool?',
            explanation: 'A Node Pool is a group of nodes within a cluster that share the same configuration (machine type, disk size, etc.).',
            answers: [
                { content: 'A storage location for container images', isCorrect: false },
                { content: 'A group of nodes with identical configuration in a cluster', isCorrect: true },
                { content: 'A network subnet for pods', isCorrect: false },
                { content: 'A logging destination', isCorrect: false },
            ],
        },
        {
            content: 'Which command lists all Compute Engine instances in the current project?',
            explanation: '"gcloud compute instances list" displays all VM instances across all zones in the current project.',
            answers: [
                { content: 'gcloud compute instances show', isCorrect: false },
                { content: 'gcloud compute instances list', isCorrect: true },
                { content: 'gcloud compute instances get', isCorrect: false },
                { content: 'gcloud compute instances describe', isCorrect: false },
            ],
        },
        {
            content: 'You need to allow HTTP traffic to a Compute Engine instance. What should you configure?',
            explanation: 'VPC firewall rules control incoming and outgoing traffic to VM instances. You need a rule allowing TCP port 80 (HTTP).',
            answers: [
                { content: 'Cloud NAT', isCorrect: false },
                { content: 'VPC firewall rule allowing TCP port 80', isCorrect: true },
                { content: 'Cloud Router', isCorrect: false },
                { content: 'Cloud Armor policy', isCorrect: false },
            ],
        },
        {
            content: 'What is a Service Account in Google Cloud?',
            explanation: 'A Service Account is a special type of account used by applications and VMs to make authorized API calls, rather than individual users.',
            answers: [
                { content: 'A user account for administrators', isCorrect: false },
                { content: 'A special account for applications to authenticate with Google Cloud APIs', isCorrect: true },
                { content: 'A billing account', isCorrect: false },
                { content: 'An email group', isCorrect: false },
            ],
        },
        {
            content: 'Which storage option should you use for high-performance, low-latency temporary data on a VM?',
            explanation: 'Local SSDs are physically attached to the server hosting the VM instance, providing very high IOPS and low latency for temporary data.',
            answers: [
                { content: 'Standard Persistent Disk', isCorrect: false },
                { content: 'Local SSD', isCorrect: true },
                { content: 'Cloud Storage', isCorrect: false },
                { content: 'Cloud Filestore', isCorrect: false },
            ],
        },
        {
            content: 'You need to deploy a stateless web application that automatically scales. Which service is most appropriate?',
            explanation: 'App Engine Standard Environment is ideal for stateless web applications that need automatic scaling based on request volume.',
            answers: [
                { content: 'Compute Engine with manual scaling', isCorrect: false },
                { content: 'App Engine Standard Environment', isCorrect: true },
                { content: 'Cloud SQL', isCorrect: false },
                { content: 'Cloud Storage', isCorrect: false },
            ],
        },
        {
            content: 'What is the difference between App Engine Standard and Flexible environments?',
            explanation: 'Standard uses a sandbox with limited runtimes and scales to zero; Flexible runs in Docker containers on Compute Engine with more customization but cannot scale to zero.',
            answers: [
                { content: 'There is no difference', isCorrect: false },
                { content: 'Standard uses sandboxed runtimes and scales to zero; Flexible uses containers with more customization', isCorrect: true },
                { content: 'Flexible is always cheaper', isCorrect: false },
                { content: 'Standard supports all programming languages', isCorrect: false },
            ],
        },
        {
            content: 'Which command deploys an application to App Engine?',
            explanation: '"gcloud app deploy" deploys your application code and configuration to App Engine.',
            answers: [
                { content: 'gcloud app push', isCorrect: false },
                { content: 'gcloud app deploy', isCorrect: true },
                { content: 'gcloud app create', isCorrect: false },
                { content: 'gcloud app run', isCorrect: false },
            ],
        },
        {
            content: 'What is Cloud VPN used for?',
            explanation: 'Cloud VPN securely connects your on-premises network to your Google Cloud VPC network using IPsec VPN tunnels.',
            answers: [
                { content: 'Connecting two VPCs within Google Cloud', isCorrect: false },
                { content: 'Securely connecting on-premises networks to Google Cloud via IPsec tunnels', isCorrect: true },
                { content: 'Encrypting data at rest', isCorrect: false },
                { content: 'Managing DNS records', isCorrect: false },
            ],
        },
        {
            content: 'Which command creates a new GKE cluster?',
            explanation: '"gcloud container clusters create" creates a new Google Kubernetes Engine cluster.',
            answers: [
                { content: 'gcloud gke clusters create', isCorrect: false },
                { content: 'gcloud container clusters create', isCorrect: true },
                { content: 'gcloud kubernetes clusters create', isCorrect: false },
                { content: 'kubectl create cluster', isCorrect: false },
            ],
        },
        {
            content: 'You need to grant a team member access to manage Cloud Storage buckets but nothing else. What should you assign?',
            explanation: 'Predefined roles like "Storage Admin" provide granular, service-specific permissions following the principle of least privilege.',
            answers: [
                { content: 'Project Owner role', isCorrect: false },
                { content: 'Storage Admin role', isCorrect: true },
                { content: 'Project Editor role', isCorrect: false },
                { content: 'Compute Admin role', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of Cloud NAT?',
            explanation: 'Cloud NAT provides outgoing internet access for VM instances without external IP addresses, improving security.',
            answers: [
                { content: 'Providing inbound internet access to VMs', isCorrect: false },
                { content: 'Providing outbound internet access for VMs without public IPs', isCorrect: true },
                { content: 'Translating DNS names', isCorrect: false },
                { content: 'Load balancing traffic', isCorrect: false },
            ],
        },
        {
            content: 'Which Kubernetes object ensures a specified number of pod replicas are running at all times?',
            explanation: 'A ReplicaSet ensures that a specified number of pod replicas are running at any given time for high availability.',
            answers: [
                { content: 'DaemonSet', isCorrect: false },
                { content: 'ReplicaSet', isCorrect: true },
                { content: 'StatefulSet', isCorrect: false },
                { content: 'Job', isCorrect: false },
            ],
        },
        {
            content: 'You need to store your Docker container images in Google Cloud. Which service should you use?',
            explanation: 'Artifact Registry is Google Cloud\'s recommended service for storing and managing container images and other artifacts.',
            answers: [
                { content: 'Cloud Storage', isCorrect: false },
                { content: 'Artifact Registry', isCorrect: true },
                { content: 'Cloud Build', isCorrect: false },
                { content: 'Cloud Source Repositories', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of a Managed Instance Group (MIG)?',
            explanation: 'A MIG manages a group of identical VM instances, providing features like auto-scaling, auto-healing, and rolling updates.',
            answers: [
                { content: 'Storing VM snapshots', isCorrect: false },
                { content: 'Managing identical VMs with auto-scaling and auto-healing', isCorrect: true },
                { content: 'Connecting VMs to a database', isCorrect: false },
                { content: 'Managing user access', isCorrect: false },
            ],
        },
        {
            content: 'Which command creates a Cloud Storage bucket?',
            explanation: '"gcloud storage buckets create" (or gsutil mb) creates a new Cloud Storage bucket.',
            answers: [
                { content: 'gcloud storage create', isCorrect: false },
                { content: 'gcloud storage buckets create', isCorrect: true },
                { content: 'gcloud storage new-bucket', isCorrect: false },
                { content: 'gcloud compute buckets create', isCorrect: false },
            ],
        },
        {
            content: 'You want instances in two different VPC networks to communicate. What should you set up?',
            explanation: 'VPC Network Peering allows private connectivity between two VPC networks regardless of whether they belong to the same project.',
            answers: [
                { content: 'Cloud VPN', isCorrect: false },
                { content: 'VPC Network Peering', isCorrect: true },
                { content: 'Cloud Interconnect', isCorrect: false },
                { content: 'Cloud NAT', isCorrect: false },
            ],
        },
        {
            content: 'What is the maximum number of labels you can attach to a Google Cloud resource?',
            explanation: 'Each Google Cloud resource can have a maximum of 64 labels, each with a key and a value.',
            answers: [
                { content: '10', isCorrect: false },
                { content: '64', isCorrect: true },
                { content: '100', isCorrect: false },
                { content: '256', isCorrect: false },
            ],
        },
        {
            content: 'Which Compute Engine machine type family is optimized for memory-intensive workloads?',
            explanation: 'The M2/M3 machine series (memory-optimized) provides high memory-to-CPU ratios for memory-intensive workloads like SAP HANA.',
            answers: [
                { content: 'N2 (general-purpose)', isCorrect: false },
                { content: 'M2/M3 (memory-optimized)', isCorrect: true },
                { content: 'C2 (compute-optimized)', isCorrect: false },
                { content: 'E2 (cost-optimized)', isCorrect: false },
            ],
        },
        {
            content: 'How can you view Cloud Logging logs for a specific resource?',
            explanation: 'Cloud Logging (formerly Stackdriver Logging) can be accessed via Console, gcloud logging read, or the Logging API with appropriate filters.',
            answers: [
                { content: 'SSH into the VM and check /var/log', isCorrect: false },
                { content: 'Use Cloud Logging in the console or gcloud logging read with filters', isCorrect: true },
                { content: 'Check Cloud Storage automatically', isCorrect: false },
                { content: 'Use kubectl logs for all resources', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of Cloud Router?',
            explanation: 'Cloud Router provides dynamic routing using BGP (Border Gateway Protocol) between your VPC and on-premises or other cloud networks.',
            answers: [
                { content: 'Load balancing HTTP requests', isCorrect: false },
                { content: 'Dynamic BGP routing between networks', isCorrect: true },
                { content: 'DNS resolution', isCorrect: false },
                { content: 'Firewall rule management', isCorrect: false },
            ],
        },
        {
            content: 'You need to create a snapshot of a Persistent Disk for backup purposes. Which command do you use?',
            explanation: '"gcloud compute disks snapshot" or "gcloud compute snapshots create" creates a snapshot of a persistent disk.',
            answers: [
                { content: 'gcloud compute disks backup', isCorrect: false },
                { content: 'gcloud compute snapshots create', isCorrect: true },
                { content: 'gcloud compute disks copy', isCorrect: false },
                { content: 'gcloud storage backup create', isCorrect: false },
            ],
        },
        {
            content: 'Which GKE feature automatically adjusts the number of nodes based on workload demand?',
            explanation: 'Cluster Autoscaler automatically adjusts the number of nodes in a node pool when pods fail to schedule or when nodes are underutilized.',
            answers: [
                { content: 'Horizontal Pod Autoscaler', isCorrect: false },
                { content: 'Cluster Autoscaler', isCorrect: true },
                { content: 'Vertical Pod Autoscaler', isCorrect: false },
                { content: 'Node Auto-Repair', isCorrect: false },
            ],
        },
        {
            content: 'What type of load balancer should you use for distributing TCP traffic that is NOT HTTP(S)?',
            explanation: 'Network Load Balancer (TCP/UDP) handles non-HTTP traffic at Layer 4, distributing TCP and UDP connections.',
            answers: [
                { content: 'HTTP(S) Load Balancer', isCorrect: false },
                { content: 'Network Load Balancer (TCP/UDP)', isCorrect: true },
                { content: 'Cloud CDN', isCorrect: false },
                { content: 'Cloud DNS', isCorrect: false },
            ],
        },
        {
            content: 'You want to configure alerts when Compute Engine CPU utilization exceeds 80%. Which service do you use?',
            explanation: 'Cloud Monitoring allows you to create alerting policies based on metric conditions like CPU utilization thresholds.',
            answers: [
                { content: 'Cloud Logging', isCorrect: false },
                { content: 'Cloud Monitoring', isCorrect: true },
                { content: 'Cloud Trace', isCorrect: false },
                { content: 'Error Reporting', isCorrect: false },
            ],
        },
        {
            content: 'What is a Kubernetes Namespace used for?',
            explanation: 'Namespaces provide a mechanism to partition cluster resources between multiple users, teams, or environments in a single cluster.',
            answers: [
                { content: 'Grouping physical nodes', isCorrect: false },
                { content: 'Logically isolating resources within a cluster', isCorrect: true },
                { content: 'Storing persistent volumes', isCorrect: false },
                { content: 'Managing external DNS', isCorrect: false },
            ],
        },
        {
            content: 'Which Persistent Disk type provides the highest performance?',
            explanation: 'SSD Persistent Disks (pd-ssd) provide higher IOPS and throughput than standard disks, suitable for database workloads.',
            answers: [
                { content: 'Standard Persistent Disk (pd-standard)', isCorrect: false },
                { content: 'SSD Persistent Disk (pd-ssd)', isCorrect: true },
                { content: 'Balanced Persistent Disk (pd-balanced)', isCorrect: false },
                { content: 'Cloud Storage FUSE', isCorrect: false },
            ],
        },
        {
            content: 'You need to give a VM access to Cloud Storage without using user credentials. What is the best approach?',
            explanation: 'Assigning a service account with appropriate IAM roles to the VM allows it to authenticate to Google Cloud APIs automatically.',
            answers: [
                { content: 'Store credentials in environment variables', isCorrect: false },
                { content: 'Attach a service account with Storage permissions to the VM', isCorrect: true },
                { content: 'Use SSH keys', isCorrect: false },
                { content: 'Make the bucket public', isCorrect: false },
            ],
        },
        {
            content: 'How do you switch between multiple gcloud CLI configurations?',
            explanation: '"gcloud config configurations activate" switches between different named configurations for the gcloud CLI.',
            answers: [
                { content: 'gcloud config switch', isCorrect: false },
                { content: 'gcloud config configurations activate', isCorrect: true },
                { content: 'gcloud profile switch', isCorrect: false },
                { content: 'gcloud auth switch', isCorrect: false },
            ],
        },
        {
            content: 'What happens to Compute Engine Local SSD data when a VM is stopped?',
            explanation: 'Local SSD data is ephemeral and is lost when the VM is stopped, terminated, or maintenance-migrated.',
            answers: [
                { content: 'Data is preserved', isCorrect: false },
                { content: 'Data is lost', isCorrect: true },
                { content: 'Data is moved to Cloud Storage', isCorrect: false },
                { content: 'Data is backed up automatically', isCorrect: false },
            ],
        },
        {
            content: 'Which IAM concept allows you to define custom sets of permissions?',
            explanation: 'Custom roles allow you to define a specific set of permissions when predefined roles don\'t meet your needs.',
            answers: [
                { content: 'Basic roles', isCorrect: false },
                { content: 'Custom roles', isCorrect: true },
                { content: 'Service accounts', isCorrect: false },
                { content: 'Organization policies', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of a Kubernetes ConfigMap?',
            explanation: 'A ConfigMap stores non-confidential configuration data as key-value pairs, keeping configuration separate from application code.',
            answers: [
                { content: 'Storing passwords and secrets', isCorrect: false },
                { content: 'Storing non-confidential configuration data for pods', isCorrect: true },
                { content: 'Managing pod replicas', isCorrect: false },
                { content: 'Configuring network policies', isCorrect: false },
            ],
        },
        {
            content: 'You need to access a VM without a public IP. Which Google Cloud service enables browser-based SSH?',
            explanation: 'IAP (Identity-Aware Proxy) TCP forwarding allows you to establish an SSH connection through an encrypted tunnel without a public IP.',
            answers: [
                { content: 'Cloud VPN', isCorrect: false },
                { content: 'Identity-Aware Proxy (IAP) TCP forwarding', isCorrect: true },
                { content: 'Cloud NAT', isCorrect: false },
                { content: 'OS Login', isCorrect: false },
            ],
        },
        {
            content: 'What is the gsutil tool used for?',
            explanation: 'gsutil is a command-line tool for working with Cloud Storage, allowing you to manage buckets and objects.',
            answers: [
                { content: 'Managing Compute Engine instances', isCorrect: false },
                { content: 'Working with Cloud Storage buckets and objects', isCorrect: true },
                { content: 'Managing GKE clusters', isCorrect: false },
                { content: 'Deploying App Engine applications', isCorrect: false },
            ],
        },
        {
            content: 'How can you ensure VMs are distributed across multiple zones for high availability?',
            explanation: 'A Regional Managed Instance Group distributes VMs across multiple zones in a region for higher availability.',
            answers: [
                { content: 'Use a single-zone MIG', isCorrect: false },
                { content: 'Use a Regional Managed Instance Group', isCorrect: true },
                { content: 'Manually create VMs in different zones', isCorrect: false },
                { content: 'Use Sole-tenant Nodes', isCorrect: false },
            ],
        },
        {
            content: 'What is the lifecycle management feature in Cloud Storage?',
            explanation: 'Object Lifecycle Management automatically transitions objects between storage classes or deletes them based on conditions you define.',
            answers: [
                { content: 'Versioning of objects', isCorrect: false },
                { content: 'Automatic transition or deletion of objects based on rules', isCorrect: true },
                { content: 'Encrypting objects', isCorrect: false },
                { content: 'Replicating objects across regions', isCorrect: false },
            ],
        },
        {
            content: 'Which Cloud SQL feature provides high availability through automatic failover?',
            explanation: 'Cloud SQL High Availability uses a regional instance with a standby in another zone for automatic failover.',
            answers: [
                { content: 'Read replicas', isCorrect: false },
                { content: 'High availability (HA) configuration with failover replica', isCorrect: true },
                { content: 'Point-in-time recovery', isCorrect: false },
                { content: 'Backup schedule', isCorrect: false },
            ],
        },
        {
            content: 'What does "gcloud init" do?',
            explanation: '"gcloud init" initializes or re-initializes your gcloud CLI configuration, setting properties like project, region, and authentication.',
            answers: [
                { content: 'Creates a new Google Cloud project', isCorrect: false },
                { content: 'Initializes the gcloud CLI configuration with project, region, and authentication', isCorrect: true },
                { content: 'Installs the gcloud SDK', isCorrect: false },
                { content: 'Starts a new VM', isCorrect: false },
            ],
        },
    ],
};
