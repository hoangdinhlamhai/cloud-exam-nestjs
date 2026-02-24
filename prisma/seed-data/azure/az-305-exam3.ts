export const az305Exam3 = {
    title: 'Azure Solutions Architect Expert AZ-305 - Practice Test 3',
    description: 'Azure Solutions Architect Expert AZ-305 Practice Test focusing on Monitoring, Migration, and Network Security.',
    durationMinutes: 120,
    courseId: 10,
    questions: [
        {
            content: 'You are designing the monitoring for a complex multi-tier application. You need to capture logs from the operating system, the application code, and the infrastructure. Which service should be your centralized repository?',
            explanation: 'Azure Monitor Logs (Log Analytics Workspace) is the primary centralized container for logs from diverse sources.',
            answers: [
                { content: 'Azure Storage Account', isCorrect: false },
                { content: 'Log Analytics Workspace', isCorrect: true },
                { content: 'Azure Event Hubs', isCorrect: false },
                { content: 'Azure SQL Database', isCorrect: false },
            ],
        },
        {
            content: 'According to the Microsoft Cloud Adoption Framework (CAF), which phase involves migrating existing workloads to the cloud?',
            explanation: 'The "Adopt" phase is where migration and modernization of workloads take place.',
            answers: [
                { content: 'Strategy', isCorrect: false },
                { content: 'Plan', isCorrect: false },
                { content: 'Adopt', isCorrect: true },
                { content: 'Ready', isCorrect: false },
            ],
        },
        {
            content: 'Your organization requires an ExpressRoute connection. You need to ensure the connection is resilient against a failure of a single peering location. What is the best design?',
            explanation: 'ExpressRoute by default provides high availability at a peering location, but for site-level resilience, you should use two ExpressRoute circuits in different peering locations.',
            answers: [
                { content: 'Double the bandwidth of a single circuit', isCorrect: false },
                { content: 'Deploy two ExpressRoute circuits in separate peering locations', isCorrect: true },
                { content: 'Add a VPN backup', isCorrect: false },
                { content: 'Use the Premium circuit tier', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure SQL deployment option provides the highest compatibility with SQL Server on-premises while maintaining a managed service experience?',
            explanation: 'Azure SQL Managed Instance provides nearly 100% compatibility with the latest SQL Server Enterprise Edition engine.',
            answers: [
                { content: 'Azure SQL Database (Single)', isCorrect: false },
                { content: 'Azure SQL Managed Instance', isCorrect: true },
                { content: 'SQL Server on Azure VM', isCorrect: false },
                { content: 'Azure SQL Database (Elastic Pool)', isCorrect: false },
            ],
        },
        {
            content: 'In your design for a video on demand (VOD) service, you need to minimize the delivery time for 10GB video files to global users. Which service is essential?',
            explanation: 'Azure Content Delivery Network (CDN) caches content closer to users to reduce latency and speed up delivery of large files.',
            answers: [
                { content: 'Azure Global Server Load Balancer', isCorrect: false },
                { content: 'Azure CDN', isCorrect: true },
                { content: 'Azure ExpressRoute', isCorrect: false },
                { content: 'Azure Traffic Manager', isCorrect: false },
            ],
        },
        {
            content: 'To prevent users from accidentally deleting a critical virtual machine used for the company\'s ERP system, what should you apply?',
            explanation: 'A "CanNotDelete" lock prevents the deletion of a resource even by administrators.',
            answers: [
                { content: 'Role-Based Access Control (RBAC)', isCorrect: false },
                { content: 'Resource Lock (Delete)', isCorrect: true },
                { content: 'Azure Policy', isCorrect: false },
                { content: 'Diagnostic Settings', isCorrect: false },
            ],
        },
        {
            content: 'You are designing an identity solution for a company that wants to use their existing on-premises Active Directory credentials to log into Azure. Which tool do you recommend?',
            explanation: 'Microsoft Entra Connect (formerly Azure AD Connect) synchronizes on-premises identities with the cloud.',
            answers: [
                { content: 'Active Directory Domain Services (AD DS)', isCorrect: false },
                { content: 'Microsoft Entra Connect', isCorrect: true },
                { content: 'Azure Bastion', isCorrect: false },
                { content: 'Managed Identity', isCorrect: false },
            ],
        },
        {
            content: 'Your company policy dictates that all SQL databases must be encrypted using keys managed by the company, not by Microsoft. Which feature should you enable?',
            explanation: 'Transparent Data Encryption (TDE) with Customer-Managed Keys (BYOK) stores the keys in Azure Key Vault.',
            answers: [
                { content: 'Always Encrypted', isCorrect: false },
                { content: 'TDE with Customer-Managed Keys', isCorrect: true },
                { content: 'Storage Service Encryption', isCorrect: false },
                { content: 'SSL/TLS only', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service would you use to store large amounts of unstructured data, specifically images and videos, accessible via HTTP/HTTPS?',
            explanation: 'Azure Blob Storage is optimized for storing massive amounts of unstructured data.',
            answers: [
                { content: 'Azure Files', isCorrect: false },
                { content: 'Azure Blob Storage', isCorrect: true },
                { content: 'Azure Data Lake Storage', isCorrect: false },
                { content: 'Azure Table Storage', isCorrect: false },
            ],
        },
        {
            content: 'You need to automate the deployment of multi-tier infrastructure using templates. You want to use a language that provides great "What-If" analysis and decomposition. Which is the native Azure choice?',
            explanation: 'Azure Bicep is the modern, domain-specific language for deploying Azure resources via ARM.',
            answers: [
                { content: 'Terraform', isCorrect: false },
                { content: 'Azure Bicep', isCorrect: true },
                { content: 'JSON ARM Templates', isCorrect: false },
                { content: 'PowerShell', isCorrect: false },
            ],
        },
        {
            content: 'What is the primary purpose of the Azure Well-Architected Framework (WAF)?',
            explanation: 'To provide a set of guiding tenets (Reliability, Security, Cost Optimization, Operational Excellence, and Performance Efficiency) to improve the quality of a workload.',
            answers: [
                { content: 'To provide free training', isCorrect: false },
                { content: 'Guiding framework to build high-quality, reliable, and efficient cloud solutions', isCorrect: true },
                { content: 'A catalog of Azure services', isCorrect: false },
                { content: 'A technical support portal', isCorrect: false },
            ],
        },
        {
            content: 'In your design for a distributed application, you need to ensure that traffic is directed to the healthiest regional endpoint based on the user\'s geographic location. Which service is best suited?',
            explanation: 'Azure Traffic Manager (DNS-based) or Azure Front Door (Anycast-based) can do this. Front Door is better for web applications.',
            answers: [
                { content: 'Azure Load Balancer', isCorrect: false },
                { content: 'Azure Front Door', isCorrect: true },
                { content: 'Azure Application Gateway', isCorrect: false },
                { content: 'Azure Bastion', isCorrect: false },
            ],
        },
        {
            content: 'To securely manage access to Azure resources for a virtual machine without storing any passwords or keys in the application code, what should you use?',
            explanation: 'Managed Identities provide an identity for applications to use when connecting to resources that support Azure AD authentication.',
            answers: [
                { content: 'Service Principal with a secret', isCorrect: false },
                { content: 'Managed Identity', isCorrect: true },
                { content: 'App Service Auth', isCorrect: false },
                { content: 'SSH Public Key', isCorrect: false },
            ],
        },
        {
            content: 'Your company needs to integrate an on-premises network with an Azure VNet. The requirements include encryption and a cost-effective solution for low traffic volumes. Which option should you choose?',
            explanation: 'Site-to-Site (S2S) VPN is an encrypted connection over the public internet and is more cost-effective than ExpressRoute for lower bandwidth needs.',
            answers: [
                { content: 'ExpressRoute', isCorrect: false },
                { content: 'Site-to-Site VPN', isCorrect: true },
                { content: 'VNet Peering', isCorrect: false },
                { content: 'Point-to-Site VPN', isCorrect: false },
            ],
        },
        {
            content: 'When designing a data warehouse solution on Azure that scales to petabytes of data and provides massively parallel processing (MPP), which service is the best fit?',
            explanation: 'Azure Synapse Analytics (Dedicated SQL pools) is Microsoft\'s MPP data warehouse solution.',
            answers: [
                { content: 'Azure SQL Database', isCorrect: false },
                { content: 'Azure Synapse Analytics', isCorrect: true },
                { content: 'Azure Data Factory', isCorrect: false },
                { content: 'Azure Databricks', isCorrect: false },
            ],
        },
        {
            content: 'You need to implement a solution that provides "Just-In-Time" (JIT) administrative access to Azure resources. Which Microsoft Entra feature do you recommend?',
            explanation: 'Privileged Identity Management (PIM) allows for time-bound and approval-based role activation.',
            answers: [
                { content: 'Multi-Factor Authentication', isCorrect: false },
                { content: 'Privileged Identity Management (PIM)', isCorrect: true },
                { content: 'Azure Policy', isCorrect: false },
                { content: 'Conditional Access', isCorrect: false },
            ],
        },
        {
            content: 'In your cloud governance design, you want to ensure that all Virtual Machines created in a specific Resource Group must have a "Environment" tag. Which component should you use?',
            explanation: 'Azure Policy can enforce rules and effects (like Deny or Append) on resources.',
            answers: [
                { content: 'Azure RBAC', isCorrect: false },
                { content: 'Azure Policy', isCorrect: true },
                { content: 'Azure Monitor', isCorrect: false },
                { content: 'Management Groups', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure messaging service is best suited for complex business process orchestration where message order and "at-least-once" delivery are critical?',
            explanation: 'Azure Service Bus is a highly reliable enterprise messaging service with support for queues and topics.',
            answers: [
                { content: 'Azure Storage Queues', isCorrect: false },
                { content: 'Azure Service Bus', isCorrect: true },
                { content: 'Azure Event Grid', isCorrect: false },
                { content: 'Azure Event Hubs', isCorrect: false },
            ],
        },
        {
            content: 'When planning a migration from an on-premises Hyper-V environment to Azure, which tool provides automated discovery and assessment?',
            explanation: 'Azure Migrate is the central hub to discover, assess, and migrate on-premises workloads to Azure.',
            answers: [
                { content: 'Azure Data Data Assistant', isCorrect: false },
                { content: 'Azure Migrate', isCorrect: true },
                { content: 'Azure Site Recovery', isCorrect: false },
                { content: 'Azure Import/Export', isCorrect: false },
            ],
        },
        {
            content: 'Which service provides a cloud-native Security Information and Event Management (SIEM) and Security Orchestration Automated Response (SOAR) solution?',
            explanation: 'Microsoft Sentinel (formerly Azure Sentinel) is a scalable, cloud-native SIEM/SOAR.',
            answers: [
                { content: 'Microsoft Defender for Cloud', isCorrect: false },
                { content: 'Microsoft Sentinel', isCorrect: true },
                { content: 'Azure Firewall', isCorrect: false },
                { content: 'Azure Key Vault', isCorrect: false },
            ],
        },
        {
            content: 'To share 100TB of log data between thousands of servers at a very low cost, which storage service do you choose?',
            explanation: 'Azure Blob Storage is the most cost-effective for large-scale data storage at this volume.',
            answers: [
                { content: 'Azure NetApp Files', isCorrect: false },
                { content: 'Azure Blob Storage', isCorrect: true },
                { content: 'Azure Files (Premium)', isCorrect: false },
                { content: 'Azure Data Box', isCorrect: false },
            ],
        },
        {
            content: 'To connect 100 separate Branch Offices to a central VNet in Azure using VPN, what is the best architecture?',
            explanation: 'Azure Virtual WAN provides a "branch-to-Azure" and "branch-to-branch" connectivity hub.',
            answers: [
                { content: '100 separate VPN Gateways', isCorrect: false },
                { content: 'Azure Virtual WAN', isCorrect: true },
                { content: 'VNet Peering', isCorrect: false },
                { content: 'ExpressRoute Global Reach', isCorrect: false },
            ],
        },
        {
            content: 'How do you prevent "Configuration Drift" in Azure Virtual Machines at scale?',
            explanation: 'Use Azure Automation State Configuration (DSC) or a managed solution like Azure Automanage.',
            answers: [
                { content: 'Update machines manually', isCorrect: false },
                { content: 'Azure Automation State Configuration (DSC)', isCorrect: true },
                { content: 'Restart machines daily', isCorrect: false },
                { content: 'There is no way', isCorrect: false },
            ],
        },
        {
            content: 'Which service should you use to host a containerized application that requires automatic scaling and does not need orchestration like Kubernetes?',
            explanation: 'Azure Container Apps (Serverless) is ideal for microservices and scaled containers without K8s complexity.',
            answers: [
                { content: 'Azure Virtual Machines', isCorrect: false },
                { content: 'Azure Container Apps', isCorrect: true },
                { content: 'Azure Kubernetes Service', isCorrect: false },
                { content: 'Azure Batch', isCorrect: false },
            ],
        },
        {
            content: 'In storage design, the "Archive Tier" has which characteristic compared to "Hot"?',
            explanation: 'Lowest storage cost but highest access cost and potentially hours of retrieval latency (Rehydration).',
            answers: [
                { content: 'Faster access', isCorrect: false },
                { content: 'Lowest storage cost but highest latency for data retrieval', isCorrect: true },
                { content: 'Cheapest access fees', isCorrect: false },
                { content: 'Only for SQL databases', isCorrect: false },
            ],
        },
        {
            content: 'Why should you use Management Groups for a large corporation with 50+ Azure Subscriptions?',
            explanation: 'Management Groups allow you to apply Policies and RBAC at scale across multiple Subscriptions hierarchically.',
            answers: [
                { content: 'To increase bandwidth', isCorrect: false },
                { content: 'To efficiently manage governance, security, and policies across multiple subscriptions', isCorrect: true },
                { content: 'They are required for billing', isCorrect: false },
                { content: 'To speed up the Azure Portal', isCorrect: false },
            ],
        },
        {
            content: 'To track who changed a Firewall rule 2 hours ago, which log do you check?',
            explanation: 'Azure Activity Log tracks all control plane operations (write/update/delete) on resources.',
            answers: [
                { content: 'Diagnostic Logs', isCorrect: false },
                { content: 'Azure Activity Log', isCorrect: true },
                { content: 'Sentinel Logs', isCorrect: false },
                { content: 'App Insights Logs', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service allows you to query data sitting in an Azure Data Lake using standard T-SQL without moving it into a database?',
            explanation: 'Azure Synapse Serverless SQL Pool allows "query-in-place" for files in storage.',
            answers: [
                { content: 'Azure SQL Database', isCorrect: false },
                { content: 'Azure Synapse Serverless SQL pool', isCorrect: true },
                { content: 'Azure Data Factory', isCorrect: false },
                { content: 'Azure Cosmos DB', isCorrect: false },
            ],
        },
        {
            content: 'In your Disaster Recovery plan, you need to replicate Virtual Machines to a secondary region. Which tool is designed specifically for this?',
            explanation: 'Azure Site Recovery (ASR) provides replication, failover, and recovery for VMs.',
            answers: [
                { content: 'Azure Backup', isCorrect: false },
                { content: 'Azure Site Recovery (ASR)', isCorrect: true },
                { content: 'Azure Migrate', isCorrect: false },
                { content: 'VNet Peering', isCorrect: false },
            ],
        },
        {
            content: 'How do you optimize costs for a database that is used only during business hours (9 AM - 5 PM)?',
            explanation: 'Use Azure SQL Serverless (Auto-pause) or use an Automation runbook to stop/start the database (if IaaS/MI).',
            answers: [
                { content: 'Buy a Reservation', isCorrect: false },
                { content: 'Use Azure SQL Database Serverless with Auto-pause enabled', isCorrect: true },
                { content: 'There is no way', isCorrect: false },
                { content: 'Always keep it running', isCorrect: false },
            ],
        },
        {
            content: 'In the Hub-and-Spoke model, why use "Gateway Transit" in VNet Peering?',
            explanation: 'It allows Spokes to use the VPN or ExpressRoute Gateway in the Hub to reach on-premises networks, saving costs.',
            answers: [
                { content: 'Makes internet faster', isCorrect: false },
                { content: 'To allow Spokes to share and use the central Gateway in the Hub', isCorrect: true },
                { content: 'Required for security', isCorrect: false },
                { content: 'Increases CPU of Spokes', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure SQL configuration is best for an application that provides many small databases for thousands of different clients?',
            explanation: 'Elastic Pools are designed to manage and scale multiple databases that have varying and unpredictable usage demands.',
            answers: [
                { content: 'Hyperscale', isCorrect: false },
                { content: 'Azure SQL Elastic Pools', isCorrect: true },
                { content: 'Managed Instance', isCorrect: false },
                { content: 'Serverless', isCorrect: false },
            ],
        },
        {
            content: 'To prevent a Resource Group from having more than 10 Virtual Machines, how do you enforce this?',
            explanation: 'Azure Policy with the "DeployIfNotExists" or custom "Deny" policies can evaluate resource quantities.',
            answers: [
                { content: 'Check manually every day', isCorrect: false },
                { content: 'Azure Policy', isCorrect: true },
                { content: 'Azure RBAC', isCorrect: false },
                { content: 'Azure Monitor Alert', isCorrect: false },
            ],
        },
        {
            content: 'Which storage feature allows you to recover a single accidentally deleted file from a Storage Account without needing a full backup?',
            explanation: 'Soft Delete for Blobs or Files allows you to restore deleted data for a specific retention period.',
            answers: [
                { content: 'Geo-replication', isCorrect: false },
                { content: 'Soft Delete', isCorrect: true },
                { content: 'Read-access GRS', isCorrect: false },
                { content: 'Locking', isCorrect: false },
            ],
        },
        {
            content: 'To analyze "Customer Sentiment" from a stream of tweets daily, which AI service should you use?',
            explanation: 'Azure AI Language (part of Cognitive Services) provides Sentiment Analysis.',
            answers: [
                { content: 'Azure AI Vision', isCorrect: false },
                { content: 'Azure AI Language', isCorrect: true },
                { content: 'Azure AI Search', isCorrect: false },
                { content: 'Azure AI Video Indexer', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of "Azure Landing Zones"?',
            explanation: 'A Landing Zone is an environment for hosting your workloads, pre-configured via code to include networking, identity, and governance.',
            answers: [
                { content: 'A place to land drones', isCorrect: false },
                { content: 'Architecture guidance and templates to start a cloud environment with best practices', isCorrect: true },
                { content: 'A special disk for OS', isCorrect: false },
                { content: 'The Azure login page', isCorrect: false },
            ],
        },
        {
            content: 'You need an extremely high performance Parallel File System for an AI/HPC workload. Which service is best?',
            explanation: 'Azure Managed Lustre or Azure NetApp Files are designed for high-performance file storage.',
            answers: [
                { content: 'Azure Files (Standard)', isCorrect: false },
                { content: 'Azure Managed Lustre', isCorrect: true },
                { content: 'Azure Blob Storage', isCorrect: false },
                { content: 'Premium SSD', isCorrect: false },
            ],
        },
        {
            content: 'In your identity design, you want to block all login attempts from countries where your company does not operate. Which feature do you use?',
            explanation: 'Conditional Access (Location-based policies) allows blocking or requiring MFA based on IP geography.',
            answers: [
                { content: 'Azure Firewall', isCorrect: false },
                { content: 'Conditional Access', isCorrect: true },
                { content: 'NSG', isCorrect: false },
                { content: 'PIM', isCorrect: false },
            ],
        },
        {
            content: 'To identify "Zombie" resources (unused VMs) and save costs, which tool should you use regularly?',
            explanation: 'Azure Advisor provides cost recommendations for underutilized resources.',
            answers: [
                { content: 'Azure Monitor', isCorrect: false },
                { content: 'Azure Advisor (Cost tab)', isCorrect: true },
                { content: 'Log Analytics', isCorrect: false },
                { content: 'Sentinel', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure database service provides globally distributed, multi-model support with guaranteed single-digit millisecond latency?',
            explanation: 'Azure Cosmos DB is a globally distributed, multi-model database service.',
            answers: [
                { content: 'Azure SQL Database', isCorrect: false },
                { content: 'Azure Cosmos DB', isCorrect: true },
                { content: 'Azure Database for PostgreSQL', isCorrect: false },
                { content: 'Azure Synapse', isCorrect: false },
            ],
        },
        {
            content: 'Your application needs to store secrets. You want to ensure those secrets are never exposed on a public network. What do you use?',
            explanation: 'Azure Key Vault with Service Endpoints or Private Endpoints.',
            answers: [
                { content: 'Standard Firewall', isCorrect: false },
                { content: 'Azure Key Vault with Private Link/Endpoint', isCorrect: true },
                { content: 'Complex passwords', isCorrect: false },
                { content: 'Encryption at rest', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure tool allows you to simulate a region-wide outage to test your BCDR plan for an AKS cluster?',
            explanation: 'Azure Chaos Studio allows you to inject faults and simulate outages to test resilience.',
            answers: [
                { content: 'Azure Monitor', isCorrect: false },
                { content: 'Azure Chaos Studio', isCorrect: true },
                { content: 'Azure Advisor', isCorrect: false },
                { content: 'Azure Backup', isCorrect: false },
            ],
        },
        {
            content: 'To provide high-speed, low-latency connectivity between two VNets in the same region without using a Gateway, what do you use?',
            explanation: 'VNet Peering is the lowest latency way to connect VNets directly.',
            answers: [
                { content: 'VPN Gateway', isCorrect: false },
                { content: 'VNet Peering', isCorrect: true },
                { content: 'ExpressRoute', isCorrect: false },
                { content: 'Global VNet Peering', isCorrect: false },
            ],
        },
        {
            content: 'In storage design, the "Premium" tier for Azure Files uses which type of drive?',
            explanation: 'Premium Azure Files uses SSD (Solid State Drives) for high performance and low latency.',
            answers: [
                { content: 'HDD', isCorrect: false },
                { content: 'SSD', isCorrect: true },
                { content: 'Tape', isCorrect: false },
                { content: 'CD-ROM', isCorrect: false },
            ],
        },
        {
            content: 'Why should you avoid using Basic Load Balancer in modern Azure designs?',
            explanation: 'Basic Load Balancer lacks support for Availability Zones and has very limited monitoring/diagnostic capabilities compared to Standard.',
            answers: [
                { content: 'It is too expensive', isCorrect: false },
                { content: 'It does not support Availability Zones and has fewer security features', isCorrect: true },
                { content: 'It is only for Linux', isCorrect: false },
                { content: 'It is being retired this month', isCorrect: false },
            ],
        },
    ],
};
