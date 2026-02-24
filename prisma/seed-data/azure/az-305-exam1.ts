export const az305Exam1 = {
    title: 'Azure Solutions Architect Expert AZ-305 - Practice Test 1',
    description: 'Azure Solutions Architect Expert AZ-305 Practice Test focused on Infrastructure and Storage Solution design.',
    durationMinutes: 120,
    courseId: 10,
    questions: [
        {
            content: 'You are designing a storage solution for sensitive medical data. Data must be stored for 7 years and must not be allowed to be deleted or modified by anyone, including Admins. Which solution should you recommend?',
            explanation: 'Azure Blob Storage with "Immutable Storage" and "Policy Lock" is the only solution that ensures data integrity at this level (WORM - Write Once, Read Many).',
            answers: [
                { content: 'Daily backups', isCorrect: false },
                { content: 'Immutable Storage with a locked Retention Policy', isCorrect: true },
                { content: 'Stored on a VM\'s hard disk', isCorrect: false },
                { content: 'Azure SQL with a Read-only table', isCorrect: false },
            ],
        },
        {
            content: 'Your company has multiple Subscriptions and wants to apply uniform security standards (such as mandating HTTPS for all Storage Accounts) across the entire organization. Which tool should you use?',
            explanation: 'Azure Policy is used to enforce governance and compliance rules at scale (Subscriptions/Resource Groups).',
            answers: [
                { content: 'Azure RBAC', isCorrect: false },
                { content: 'Azure Policy', isCorrect: true },
                { content: 'Azure Monitor', isCorrect: false },
                { content: 'Management Groups', isCorrect: false },
            ],
        },
        {
            content: 'You need to design a network architecture for a web application that requires minimum latency for global users and protection against common web vulnerabilities. Which service should you choose as the entry point?',
            explanation: 'Azure Front Door combines global load balancing (L7) with a Web Application Firewall (WAF) for security and performance optimization.',
            answers: [
                { content: 'Azure Load Balancer', isCorrect: false },
                { content: 'Azure Front Door with WAF', isCorrect: true },
                { content: 'Azure Traffic Manager', isCorrect: false },
                { content: 'Azure VPN Gateway', isCorrect: false },
            ],
        },
        {
            content: 'In database design, when should you prioritize choosing Azure Cosmos DB over Azure SQL Database?',
            explanation: 'When the application requires global distribution capabilities, flexible schema (NoSQL), and extremely low latency (millisecond scale).',
            answers: [
                { content: 'When complex SQL queries and tight relationships are needed', isCorrect: false },
                { content: 'When global distribution and a flexible data model (JSON) are needed', isCorrect: true },
                { content: 'When wanting to maximize cost savings for a small app', isCorrect: false },
                { content: 'When only needing to store text files', isCorrect: false },
            ],
        },
        {
            content: 'To ensure the highest availability for data in a Storage Account against a full Region failure (geographical area), which replication type should you choose?',
            explanation: 'Geo-redundant storage (GRS) replicates data to a second Region far from the primary Region.',
            answers: [
                { content: 'LRS (Locally-redundant)', isCorrect: false },
                { content: 'ZRS (Zone-redundant)', isCorrect: false },
                { content: 'GRS (Geo-redundant)', isCorrect: true },
                { content: 'RA-LRS', isCorrect: false },
            ],
        },
        {
            content: 'You are designing an application that requires extremely low data write latency and high consistency. However, users in different continents also need fast data access. Which Cosmos DB consistency level is the best balance for the "Read-your-writes" scenario?',
            explanation: 'Session Consistency is the most popular level, ensuring consistency for the current user\'s session.',
            answers: [
                { content: 'Strong', isCorrect: false },
                { content: 'Session', isCorrect: true },
                { content: 'Eventual', isCorrect: false },
                { content: 'Bounded Staleness', isCorrect: false },
            ],
        },
        {
            content: 'Your system has an on-premises SQL server. You want to move it to Azure without wanting to change application code and wanting Microsoft to manage OS patching. Which service should you propose?',
            explanation: 'Azure SQL Managed Instance provides almost 100% compatibility with on-premises SQL Server while still being a fully managed PaaS service.',
            answers: [
                { content: 'Azure SQL Database (Single Database)', isCorrect: false },
                { content: 'Azure SQL Managed Instance', isCorrect: true },
                { content: 'SQL Server on Azure VM (IaaS)', isCorrect: false },
                { content: 'Azure Cosmos DB', isCorrect: false },
            ],
        },
        {
            content: 'In Business Continuity (BCDR) design, how does "Azure Site Recovery" differ from "Azure Backup"?',
            explanation: 'Site Recovery is used for disaster recovery (Disaster Recovery - running the system in a different area), while Backup is used for restoring lost or corrupted data.',
            answers: [
                { content: 'Identical', isCorrect: false },
                { content: 'Site Recovery focuses on failover capability, while Backup focuses on historical data recovery', isCorrect: true },
                { content: 'Backup is faster', isCorrect: false },
                { content: 'Site Recovery is cheaper', isCorrect: false },
            ],
        },
        {
            content: 'You need to design an identity solution for external partners so they can log in to the company\'s application using their own company account (Office 365). Which feature do you use?',
            explanation: 'Azure AD B2B (Business-to-Business) allows inviting external users to use their original identity to access resources.',
            answers: [
                { content: 'Azure AD B2C', isCorrect: false },
                { content: 'Azure AD B2B (External Identities)', isCorrect: true },
                { content: 'Managed Identities', isCorrect: false },
                { content: 'Active Directory Domain Services', isCorrect: false },
            ],
        },
        {
            content: 'Which of the following scenarios is ideal for using a Serverless architecture (Azure Functions)?',
            explanation: 'Event-driven tasks that run infrequently and have highly variable workloads.',
            answers: [
                { content: 'Running a large SQL database', isCorrect: false },
                { content: 'Image processing after a user upload (Event-driven)', isCorrect: true },
                { content: 'Building a 24/7 retail website with stable load', isCorrect: false },
                { content: 'Running legacy accounting software', isCorrect: false },
            ],
        },
        {
            content: 'You want to grant Admin permissions to an engineer but only for 4 hours to handle an incident, after which the permissions must be automatically revoked. Which feature should you use?',
            explanation: 'Privileged Identity Management (PIM) allows for "Just-in-time" and "Time-bound" permission assignment.',
            answers: [
                { content: 'Standard Azure RBAC', isCorrect: false },
                { content: 'Azure AD Privileged Identity Management (PIM)', isCorrect: true },
                { content: 'Conditional Access', isCorrect: false },
                { content: 'Managed Identity', isCorrect: false },
            ],
        },
        {
            content: 'To protect Azure virtual machines from the failure of a single data center within a Region, where should you deploy the virtual machines?',
            explanation: 'Availability Zones ensure resources are placed in different Data Centers with separate power and network systems.',
            answers: [
                { content: 'Availability Sets', isCorrect: false },
                { content: 'Availability Zones', isCorrect: true },
                { content: 'Resource Group', isCorrect: false },
                { content: 'Management Group', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service acts as a "Message broker" supporting complex features such as transactions and ensuring message order?',
            explanation: 'Azure Service Bus is an enterprise messaging service for complex workflows.',
            answers: [
                { content: 'Azure Queue Storage', isCorrect: false },
                { content: 'Azure Service Bus', isCorrect: true },
                { content: 'Azure Event Grid', isCorrect: false },
                { content: 'Azure Event Hubs', isCorrect: false },
            ],
        },
        {
            content: 'When designing a hybrid network that requires the lowest latency and security that doesn\'t go over the public internet, which solution do you propose?',
            explanation: 'ExpressRoute provides a private and dedicated connection from on-premises to Azure.',
            answers: [
                { content: 'Site-to-Site VPN', isCorrect: false },
                { content: 'ExpressRoute', isCorrect: true },
                { content: 'Point-to-Site VPN', isCorrect: false },
                { content: 'VNet Peering', isCorrect: false },
            ],
        },
        {
            content: 'You need to store 100 TB of raw data (Big Data) for future Machine Learning analysis. Which storage solution is most economical and efficient?',
            explanation: 'Azure Data Lake Storage Gen2 combines Blob Storage features with a hierarchical file system for Big Data.',
            answers: [
                { content: 'Azure SQL Database', isCorrect: false },
                { content: 'Azure Data Lake Storage Gen2', isCorrect: true },
                { content: 'Azure Managed Disks', isCorrect: false },
                { content: 'Azure Files', isCorrect: false },
            ],
        },
        {
            content: 'On which security philosophy does Azure AD "Conditional Access" operate?',
            explanation: 'It is a core component of the "Zero Trust" (trust no one, always verify) strategy.',
            answers: [
                { content: 'Perimeter security', isCorrect: false },
                { content: 'Zero Trust', isCorrect: true },
                { content: 'As many passwords as possible', isCorrect: false },
                { content: 'Block all remote users', isCorrect: false },
            ],
        },
        {
            content: 'You are designing an application using multiple microservices. To reduce tight coupling between services, which architecture should you use?',
            explanation: 'An Event-driven architecture uses queues or an event bus to help services operate independently.',
            answers: [
                { content: 'Traditional Client-Server architecture', isCorrect: false },
                { content: 'Event-driven architecture', isCorrect: true },
                { content: 'Monolithic architecture', isCorrect: false },
                { content: 'Inseparable', isCorrect: false },
            ],
        },
        {
            content: 'In Azure, which tool provides automated recommendations on security, performance, and cost based on your actual infrastructure?',
            explanation: 'Azure Advisor analyzes resource configurations and provides practical advice for optimization.',
            answers: [
                { content: 'Azure Monitor', isCorrect: false },
                { content: 'Azure Advisor', isCorrect: true },
                { content: 'Azure Sentinel', isCorrect: false },
                { content: 'Azure Security Center', isCorrect: false },
            ],
        },
        {
            content: 'A solution needs to move 50 virtual machines from on-premises VMware to Azure in the shortest time and with the lowest risk. Which tool should you use?',
            explanation: 'Azure Migrate is a central service providing tools for assessing and migrating infrastructure to the cloud.',
            answers: [
                { content: 'Azure Backup', isCorrect: false },
                { content: 'Azure Migrate', isCorrect: true },
                { content: 'Azure Site Recovery', isCorrect: false },
                { content: 'Manual VHD file copy', isCorrect: false },
            ],
        },
        {
            content: 'What problem does the "Private Link" feature solve in security design?',
            explanation: 'It allows PaaS services (like SQL, Storage) to be accessed via an internal IP inside a VNet, instead of via a public endpoint.',
            answers: [
                { content: 'Speed up the CPU', isCorrect: false },
                { content: 'Access Azure services privately from an internal network', isCorrect: true },
                { content: 'Make the website look better', isCorrect: false },
                { content: 'Automatically assign roles', isCorrect: false },
            ],
        },
        {
            content: 'To manage thousands of virtual machines centrally and allow them to automatically scale in number based on demand, what should you propose?',
            explanation: 'Virtual Machine Scale Sets (VMSS) are designed for managing and horizontally auto-scaling virtual machines.',
            answers: [
                { content: 'Availability Sets', isCorrect: false },
                { content: 'Virtual Machine Scale Sets (VMSS)', isCorrect: true },
                { content: 'Azure Kubernetes Service', isCorrect: false },
                { content: 'Manual scaling', isCorrect: false },
            ],
        },
        {
            content: 'In Data Warehouse design, which Azure service provides data integration, Big Data analysis, and data warehousing in a single platform?',
            explanation: 'Azure Synapse Analytics is a limitless analysis service combining enterprise data warehousing and Big Data analysis.',
            answers: [
                { content: 'Azure SQL Database', isCorrect: false },
                { content: 'Azure Synapse Analytics', isCorrect: true },
                { content: 'Azure Cosmos DB', isCorrect: false },
                { content: 'Azure Analysis Services', isCorrect: false },
            ],
        },
        {
            content: 'What is the most important factor to choose between a "Standard" and "Premium" Storage Account for virtual machine disks?',
            explanation: 'Based on IOPS and latency requirements. Premium (SSD) provides much better performance for heavy applications.',
            answers: [
                { content: 'Storage capacity', isCorrect: false },
                { content: 'IOPS performance requirements and low latency', isCorrect: true },
                { content: 'The color of the drive', isCorrect: false },
                { content: 'Number of files', isCorrect: false },
            ],
        },
        {
            content: 'You need to design a web application with fault tolerance at the Region level. If a Region crashes, the application still must operate. Which solution is best?',
            explanation: 'Multi-region deployment using Traffic Manager or Front Door to direct users.',
            answers: [
                { content: 'Use Availability Zones', isCorrect: false },
                { content: 'Configure Multi-region with a Global Load Balancer', isCorrect: true },
                { content: 'Upgrade to a more powerful server', isCorrect: false },
                { content: 'Hourly data backups', isCorrect: false },
            ],
        },
        {
            content: 'In Azure SQL Database, what does the "Active Geo-Replication" feature allow you to do?',
            explanation: 'It allows you to create up to 4 read-only replicas in different Regions.',
            answers: [
                { content: 'Automatically patch SQL', isCorrect: false },
                { content: 'Create read-only replicas in different geographical regions', isCorrect: true },
                { content: 'Encrypt database', isCorrect: false },
                { content: 'Backup to AWS', isCorrect: false },
            ],
        },
        {
            content: 'Why is using "Service Tags" important in designing Network Security Groups (NSGs)?',
            explanation: 'It helps manage security rules more simply by representing IP ranges of Microsoft services, saving you from manual IP updates.',
            answers: [
                { content: 'Make the network faster', isCorrect: false },
                { content: 'Simplify administration by using service identifiers instead of dynamic IP ranges', isCorrect: true },
                { content: 'Encrypt connections', isCorrect: false },
                { content: 'Incognito mode for admin', isCorrect: false },
            ],
        },
        {
            content: 'You are designing an IAM solution. How does the "Global Administrator" role in Azure AD differ from the "Owner" role in an Azure Subscription?',
            explanation: 'Global Admin manages the entire identity (Users, Groups) in the Tenant, while Owner manages resources (VM, SQL) within a specific Subscription.',
            answers: [
                { content: 'They are the same', isCorrect: false },
                { content: 'Global Admin manages the Tenant, Owner manages the resource Subscription', isCorrect: true },
                { content: 'Owner has higher authority', isCorrect: false },
                { content: 'Global Admin is for Microsoft 365 only', isCorrect: false },
            ],
        },
        {
            content: 'What scenarios is an Azure Dedicated Host for?',
            explanation: 'For organizations with strict security requirements (need a private physical server) or specific software licensing requirements (compliance).',
            answers: [
                { content: 'When wanting to save money', isCorrect: false },
                { content: 'When requiring physical isolation and meeting compliance standards', isCorrect: true },
                { content: 'For individual users', isCorrect: false },
                { content: 'To play 3D games', isCorrect: false },
            ],
        },
        {
            content: 'You need to store application configuration files shared between multiple environments and want "versioning" features for the configurations. Which service do you choose?',
            explanation: 'Azure App Configuration is designed for centralized configuration and feature flags management.',
            answers: [
                { content: 'Azure Key Vault', isCorrect: false },
                { content: 'Azure App Configuration', isCorrect: true },
                { content: 'Storage Account', isCorrect: false },
                { content: 'GitHub Repos', isCorrect: false },
            ],
        },
        {
            content: 'What is the cost difference between "Static" and "Dynamic" Public IPs in Azure?',
            explanation: 'A Static IP is charged even when the machine is turned off, whereas a Dynamic IP is only charged (if applicable) when that IP is assigned to a running resource.',
            answers: [
                { content: 'Static is always free', isCorrect: false },
                { content: 'Static IPs are charged even when not in use (unassigned/stopped)', isCorrect: true },
                { content: 'Dynamic is more expensive', isCorrect: false },
                { content: 'Public IPs are not charged', isCorrect: false },
            ],
        },
        {
            content: 'When designing a container solution, what is the biggest difference between Azure Container Instances (ACI) and Azure Kubernetes Service (AKS)?',
            explanation: 'ACI is a simple serverless solution for single containers, while AKS is a complex orchestration platform for large microservices systems.',
            answers: [
                { content: 'ACI is more expensive', isCorrect: false },
                { content: 'AKS provides orchestration capabilities and complex cluster management', isCorrect: true },
                { content: 'ACI does not support Docker', isCorrect: false },
                { content: 'Identical', isCorrect: false },
            ],
        },
        {
            content: 'Your solution needs a persistent operating system file system for the virtual machine. Which disk type is recommended for Production environments?',
            explanation: 'Azure Managed Disks (Premium SSD or higher) are the standard choice for Production to ensure SLA and performance.',
            answers: [
                { content: 'Unmanaged Disks', isCorrect: false },
                { content: 'Managed Disks', isCorrect: true },
                { content: 'USB Drive', isCorrect: false },
                { content: 'Temporary Disk', isCorrect: false },
            ],
        },
        {
            content: 'In Monitoring design, which group of services in Azure Monitor does "Application Insights" belong to?',
            explanation: 'It belongs to the Application Performance Management (APM) monitoring group.',
            answers: [
                { content: 'Infrastructure Monitoring', isCorrect: false },
                { content: 'Application Performance Management (APM)', isCorrect: true },
                { content: 'Network Monitoring', isCorrect: false },
                { content: 'Security Monitoring', isCorrect: false },
            ],
        },
        {
            content: 'You need a NoSQL database that can scale globally with latency under 10ms. What do you choose?',
            explanation: 'Azure Cosmos DB is specifically designed for this goal with an SLA for extremely low latency.',
            answers: [
                { content: 'Azure Table Storage', isCorrect: false },
                { content: 'Azure Cosmos DB', isCorrect: true },
                { content: 'Azure SQL Database', isCorrect: false },
                { content: 'Azure Redis Cache', isCorrect: false },
            ],
        },
        {
            content: 'What is "Cloud Bursting" in infrastructure design?',
            explanation: 'It is when an on-premises system uses Cloud resources to handle sudden usage spikes exceeding local capacity.',
            answers: [
                { content: 'Burning the cloud server', isCorrect: false },
                { content: 'Expanding resources from on-premises to the cloud during high load', isCorrect: true },
                { content: 'Deleting cloud resources', isCorrect: false },
                { content: 'Moving completely to the cloud', isCorrect: false },
            ],
        },
        {
            content: 'How do Azure Blueprints help solution architects?',
            explanation: 'They allow packaging a standard set (Roles, Policies, Templates) to repeat compliant Subscriptions deployments quickly.',
            answers: [
                { content: 'To draw infrastructure diagrams', isCorrect: false },
                { content: 'Define and deploy repeatable and compliant Azure environments', isCorrect: true },
                { content: 'To calculate costs', isCorrect: false },
                { content: 'To check internet speed', isCorrect: false },
            ],
        },
        {
            content: 'To protect Azure resources from accidental deletion by another admin, which feature should you use?',
            explanation: 'Resource Locks (such as CanNotDelete) prevent resource destruction actions.',
            answers: [
                { content: 'Azure Policy', isCorrect: false },
                { content: 'Resource Locks', isCorrect: true },
                { content: 'Role-Based Access Control', isCorrect: false },
                { content: 'Backup', isCorrect: false },
            ],
        },
        {
            content: 'You need to design a message processing system that can handle millions of events per second from IoT devices. Which service is most suitable?',
            explanation: 'Azure Event Hubs (or IoT Hub) are designed for streaming massive data volumes.',
            answers: [
                { content: 'Azure Service Bus', isCorrect: false },
                { content: 'Azure Event Hubs', isCorrect: true },
                { content: 'Azure Queue Storage', isCorrect: false },
                { content: 'Azure Logic Apps', isCorrect: false },
            ],
        },
        {
            content: 'When should you propose an "Azure App Service Environment" (ASE) over a multi-tenant version of App Service?',
            explanation: 'When a customer requires complete network and resource isolation, or needs to run extremely large scale applications.',
            answers: [
                { content: 'When wanting a free trial', isCorrect: false },
                { content: 'When requiring maximum network isolation and highest performance', isCorrect: true },
                { content: 'When only needing to run 1 small website', isCorrect: false },
                { content: 'When you don\'t have a credit card', isCorrect: false },
            ],
        },
        {
            content: 'In a Shared Responsibility relationship, who is responsible for customer data in a SaaS model?',
            explanation: 'In all service models (IaaS, PaaS, SaaS), the customer is always ultimately responsible for their data.',
            answers: [
                { content: 'Microsoft', isCorrect: false },
                { content: 'The customer', isCorrect: true },
                { content: 'A third party', isCorrect: false },
                { content: 'No one', isCorrect: false },
            ],
        },
        {
            content: 'You need to grant permissions to an application so it can automatically turn virtual machines on/off. Which authentication method is the most secure?',
            explanation: 'Managed Identity is the best choice because it eliminates manual credential management.',
            answers: [
                { content: 'Admin Username/Password', isCorrect: false },
                { content: 'Managed Identity', isCorrect: true },
                { content: 'Access Key sent via email', isCorrect: false },
                { content: 'SSH Key', isCorrect: false },
            ],
        },
        {
            content: 'How does Azure Storage "Lifecycle Management" help with cost management?',
            explanation: 'It automatically moves data to cheaper storage tiers (like Hot -> Cool -> Archive) based on data age.',
            answers: [
                { content: 'Automatically deletes viruses', isCorrect: false },
                { content: 'Automates storage cost optimization based on access frequency', isCorrect: true },
                { content: 'Compresses all files', isCorrect: false },
                { content: 'Speeds up downloads', isCorrect: false },
            ],
        },
        {
            content: 'To connect multiple VNets in different Regions together, which feature do you use?',
            explanation: 'Global VNet Peering allows connecting virtual networks across Azure geographical boundaries.',
            answers: [
                { content: 'Regular VNet Peering', isCorrect: false },
                { content: 'Global VNet Peering', isCorrect: true },
                { content: 'Site-to-Site VPN', isCorrect: false },
                { content: 'ExpressRoute', isCorrect: false },
            ],
        },
        {
            content: 'In database design, which scenario is suitable for using "Azure Table Storage"?',
            explanation: 'When needing massive, simple, and extremely cheap Key-Value storage that doesn\'t require complex queries or relationships.',
            answers: [
                { content: 'Storing complex financial records', isCorrect: false },
                { content: 'Storing massive Key-Value datasets at lowest cost', isCorrect: true },
                { content: 'Building a social networking website', isCorrect: false },
                { content: 'Storing video files', isCorrect: false },
            ],
        },
        {
            content: 'Microsoft Defender for Cloud (formerly Azure Security Center) provides a "Secure Score". What is it used for?',
            explanation: 'It provides a quantitative view of your infrastructure\'s security posture and guidance to improve that score.',
            answers: [
                { content: 'To play games', isCorrect: false },
                { content: 'Measure and improve the security posture of Azure resources', isCorrect: true },
                { content: 'To calculate taxes', isCorrect: false },
                { content: 'To compare with competitors', isCorrect: false },
            ],
        },
        {
            content: 'You need to assign an RBAC role to a user so they can view the virtual machine list but are not allowed to start or stop them. Which role is most appropriate?',
            explanation: 'The Reader role allows viewing resources but does not have the authority to perform any actions.',
            answers: [
                { content: 'Contributor', isCorrect: false },
                { content: 'Reader', isCorrect: true },
                { content: 'Owner', isCorrect: false },
                { content: 'Virtual Machine User', isCorrect: false },
            ],
        },
        {
            content: 'What is "Over-provisioning" in design?',
            explanation: 'It is the provision of more resources than are actually necessary, usually leading to wasted costs.',
            answers: [
                { content: 'Installing too much software', isCorrect: false },
                { content: 'Redundant resource allocation compared to actual demand', isCorrect: true },
                { content: 'Strengthen security', isCorrect: false },
                { content: 'No charge', isCorrect: false },
            ],
        },
        {
            content: 'Your solution needs an AI system to automatically categorize images uploaded by users. Which service should you integrate?',
            explanation: 'Azure AI Vision (formerly Computer Vision) provides APIs for analyzing image content.',
            answers: [
                { content: 'Azure Machine Learning', isCorrect: false },
                { content: 'Azure AI Vision', isCorrect: true },
                { content: 'Azure Functions', isCorrect: false },
                { content: 'Azure Storage', isCorrect: false },
            ],
        },
        {
            content: 'In App Service design, do "Deployment Slots" support the "Testing in production" feature?',
            explanation: 'Yes, you can configure to direct a small portion of traffic (e.g., 10%) to the new slot for testing before fully switching.',
            answers: [
                { content: 'No, slots are only for copying code', isCorrect: false },
                { content: 'Yes, allows directing a percentage of traffic to a specific slot', isCorrect: true },
                { content: 'Extremely expensive', isCorrect: false },
                { content: 'Only for Linux', isCorrect: false },
            ],
        },
        {
            content: 'What is the biggest benefit of using "Management Groups"?',
            explanation: 'Allows organizing Subscriptions into hierarchies to apply policies and permissions (RBAC) centrally.',
            answers: [
                { content: 'Makes code run faster', isCorrect: false },
                { content: 'Centralized management of policies and permissions for multiple Subscriptions', isCorrect: true },
                { content: 'Changing the Portal interface', isCorrect: false },
                { content: 'Save 50% cost', isCorrect: false },
            ],
        },
    ],
};
