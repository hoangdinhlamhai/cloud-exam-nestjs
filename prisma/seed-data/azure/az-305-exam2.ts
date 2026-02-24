export const az305Exam2 = {
    title: 'Azure Solutions Architect Expert AZ-305 - Practice Test 2',
    description: 'Azure Solutions Architect Expert AZ-305 Practice Test focusing on High Availability, Governance, and Big Data.',
    durationMinutes: 120,
    courseId: 10,
    questions: [
        {
            content: 'You are designing a disaster recovery (DR) solution for a mission-critical Web application. You need a recovery time objective (RTO) of less than 15 minutes. Which scenario should you recommend?',
            explanation: 'A "Hot Standby" (Active-Active) scenario ensures the fastest recovery time as resources are already running in the secondary region.',
            answers: [
                { content: 'Backup and Restore (Cold)', isCorrect: false },
                { content: 'Pilot Light', isCorrect: false },
                { content: 'Warm Standby', isCorrect: false },
                { content: 'Hot Standby (Active-Active)', isCorrect: true },
            ],
        },
        {
            content: 'Which tool in Azure helps you visualize your entire virtual network infrastructure and verify packet paths between virtual machines?',
            explanation: 'Network Watcher Topology and Connection Monitor provide capabilities for visualization and monitoring of network paths.',
            answers: [
                { content: 'Azure Monitor', isCorrect: false },
                { content: 'Network Watcher', isCorrect: true },
                { content: 'Azure Firewall', isCorrect: false },
                { content: 'Route Table', isCorrect: false },
            ],
        },
        {
            content: 'You need to design a storage repository for billions of IoT sensor log records and want the ability to query them extremely fast using SQL. Which service is the primary choice?',
            explanation: 'Azure Data Explorer (ADX) is a fast and highly scalable data exploration service for log and telemetry data.',
            answers: [
                { content: 'Azure SQL Database', isCorrect: false },
                { content: 'Azure Data Explorer (Kusto)', isCorrect: true },
                { content: 'Azure Blob Storage', isCorrect: false },
                { content: 'Azure Cosmos DB', isCorrect: false },
            ],
        },
        {
            content: 'Your security design requires all incoming requests to the infrastructure to be inspected by a custom third-party IPS/IDS system (NVA). How should you configure the routing?',
            explanation: 'Use User-Defined Routes (UDR) in a Route Table with the Next Hop Type set to Virtual Appliance.',
            answers: [
                { content: 'Azure Defaults', isCorrect: false },
                { content: 'Using User-Defined Routes (UDR) in a Route Table', isCorrect: true },
                { content: 'Using VNet Peering', isCorrect: false },
                { content: 'NSG Rule', isCorrect: false },
            ],
        },
        {
            content: 'What is the benefit of using "Azure Compute Gallery" (formerly Shared Image Gallery) in your infrastructure design?',
            explanation: 'It helps manage, version, and share custom virtual machine images across multiple Regions and Subscriptions easily.',
            answers: [
                { content: 'To store personal photos', isCorrect: false },
                { content: 'Centralized management and sharing of VM images at scale', isCorrect: true },
                { content: 'To increase internet speed', isCorrect: false },
                { content: 'To reduce RAM price', isCorrect: false },
            ],
        },
        {
            content: 'You need to migrate an on-premises Oracle database to Azure. Which option is most suitable if the customer wants to retain maximum control over the operating system?',
            explanation: 'Running Oracle on Azure Virtual Machines (IaaS) is the choice that allows full control over the OS.',
            answers: [
                { content: 'Azure SQL Database', isCorrect: false },
                { content: 'Oracle on Azure Virtual Machines', isCorrect: true },
                { content: 'Azure Cosmos DB', isCorrect: false },
                { content: 'Azure Database for MySQL', isCorrect: false },
            ],
        },
        {
            content: 'In a microservices architecture design on Azure, which service provides industry-standard container orchestration?',
            explanation: 'Azure Kubernetes Service (AKS) is Microsoft\'s leading managed Kubernetes service.',
            answers: [
                { content: 'Azure Container Instances', isCorrect: false },
                { content: 'Azure Kubernetes Service (AKS)', isCorrect: true },
                { content: 'Azure App Service', isCorrect: false },
                { content: 'Azure Batch', isCorrect: false },
            ],
        },
        {
            content: 'To protect Web applications from high-level DDoS attacks (Standard tier), what additional benefit does Azure DDoS Protection provide over the Basic tier?',
            explanation: 'It provides intelligent traffic monitoring for individual applications, detailed alerts, and cost insurance for resources scaled due to an attack.',
            answers: [
                { content: 'It is just a different name', isCorrect: false },
                { content: 'Adaptive monitoring and cost protection for attacked resources', isCorrect: true },
                { content: 'Stronger passwords', isCorrect: false },
                { content: 'Makes code faster', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service allows you to create automated workflows to move and transform data between different sources (ETL)?',
            explanation: 'Azure Data Factory (ADF) is the premier data integration service for ETL/ELT processes.',
            answers: [
                { content: 'Azure Synapse', isCorrect: false },
                { content: 'Azure Data Factory', isCorrect: true },
                { content: 'Azure Logic Apps', isCorrect: false },
                { content: 'Azure Functions', isCorrect: false },
            ],
        },
        {
            content: 'When designing a storage solution for large files accessed infrequently but requiring immediate access when needed, which Tier do you choose?',
            explanation: 'The Cool Tier is the best balance for infrequently used data that still requires immediate access.',
            answers: [
                { content: 'Hot', isCorrect: false },
                { content: 'Cool', isCorrect: true },
                { content: 'Archive', isCorrect: false },
                { content: 'Premium', isCorrect: false },
            ],
        },
        {
            content: 'How do Azure Reservations help in cost-optimizing your infrastructure design?',
            explanation: 'Committing to resource usage for 1 or 3 years allows for discounts up to 72% compared to Pay-As-You-Go pricing.',
            answers: [
                { content: 'Adds free RAM', isCorrect: false },
                { content: 'Significant cost reduction through long-term usage commitment', isCorrect: true },
                { content: 'Reserves VMs so no one else can use them', isCorrect: false },
                { content: 'Buy 1 Get 1 free', isCorrect: false },
            ],
        },
        {
            content: 'In identity security design, what value does "Azure AD Self-Service Password Reset" (SSPR) bring to an organization?',
            explanation: 'It reduces IT support overhead by allowing users to reset their own passwords securely.',
            answers: [
                { content: 'Makes passwords more complex', isCorrect: false },
                { content: 'Reduces operational costs and increases user satisfaction', isCorrect: true },
                { content: 'Blocks hackers from logging in', isCorrect: false },
                { content: 'Automatically assigns roles', isCorrect: false },
            ],
        },
        {
            content: 'You need to design a storage solution with a requirement for "Read-only access" from a second geographic region in case of primary region failure. Which replication type do you choose?',
            explanation: 'Read-access geo-redundant storage (RA-GRS) provides a read endpoint in the secondary Region.',
            answers: [
                { content: 'GRS', isCorrect: false },
                { content: 'RA-GRS', isCorrect: true },
                { content: 'LRS', isCorrect: false },
                { content: 'ZRS', isCorrect: false },
            ],
        },
        {
            content: 'What is the main difference between Azure Front Door and Azure Application Gateway?',
            explanation: 'Front Door is a Global load balancing service at the Edge, while Application Gateway is a Regional load balancing service that operates within a VNet.',
            answers: [
                { content: 'App Gateway is faster', isCorrect: false },
                { content: 'Front Door is Global, App Gateway is Regional', isCorrect: true },
                { content: 'Front Door does not have a WAF', isCorrect: false },
                { content: 'They are the same', isCorrect: false },
            ],
        },
        {
            content: 'You are designing a solution that requires executing Python code to process queue data. You want the lowest cost and do not mind cold start delays. Which plan do you choose for Azure Functions?',
            explanation: 'The Consumption Plan is the most cost-effective solution for infrequent tasks.',
            answers: [
                { content: 'Premium Plan', isCorrect: false },
                { content: 'Consumption Plan', isCorrect: true },
                { content: 'Dedicated Plan', isCorrect: false },
                { content: 'Free Plan', isCorrect: false },
            ],
        },
        {
            content: 'Why is assigning "Tags" to resources a critical part of governance design?',
            explanation: 'Tags allow organizing resources by cost center, department, environment, and facilitate detailed billing reports.',
            answers: [
                { content: 'Tags make resources run faster', isCorrect: false },
                { content: 'Supports billing management, grouping, and effective resource searching', isCorrect: true },
                { content: 'Tags are required for SSH', isCorrect: false },
                { content: 'Tags replace SSL certificates', isCorrect: false },
            ],
        },
        {
            content: 'In a Hub-and-Spoke architecture, what resources does the "Hub" VNet typically contain?',
            explanation: 'The Hub usually contains shared resources like Azure Firewall, VPN Gateway, or centralized management services.',
            answers: [
                { content: 'Customer databases', isCorrect: false },
                { content: 'Shared infrastructure services', isCorrect: true },
                { content: 'Frontend application code', isCorrect: false },
                { content: 'Employee virtual machines', isCorrect: false },
            ],
        },
        {
            content: 'To allow employees to access internal applications from home without using a VPN, which service do you recommend?',
            explanation: 'Azure AD Application Proxy allows secure access to internal web applications via the cloud.',
            answers: [
                { content: 'ExpressRoute', isCorrect: false },
                { content: 'Azure AD Application Proxy', isCorrect: true },
                { content: 'Bastion', isCorrect: false },
                { content: 'VNet Peering', isCorrect: false },
            ],
        },
        {
            content: 'Your design requires an AI system to automatically translate text from Vietnamese to English. Which service is appropriate?',
            explanation: 'Azure AI Translator provides language translation capabilities via API.',
            answers: [
                { content: 'Azure AI Speech', isCorrect: false },
                { content: 'Azure AI Translator', isCorrect: true },
                { content: 'Azure AI Vision', isCorrect: false },
                { content: 'Azure Search', isCorrect: false },
            ],
        },
        {
            content: 'In storage tier design, which factor determines the move from Azure SQL to Azure SQL Managed Instance?',
            explanation: 'Dependency on server-level features like SQL Agent, Database Mail, or Linked Servers.',
            answers: [
                { content: 'Number of data rows', isCorrect: false },
                { content: 'Requirements for OS/server-level features (SQL Agent, Linked Servers)', isCorrect: true },
                { content: 'Log file size', isCorrect: false },
                { content: 'Number of user connections', isCorrect: false },
            ],
        },
        {
            content: 'What is the biggest drawback of "Vertical Scaling" compared to "Horizontal Scaling"?',
            explanation: 'Vertical Scaling often requires downtime to upgrade and has a physical hardware limit on a single server.',
            answers: [
                { content: 'It is easier to do', isCorrect: false },
                { content: 'Requires downtime to upgrade and has physical limits', isCorrect: true },
                { content: 'Does not cost extra money', isCorrect: false },
                { content: 'Slower network', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service provides real-time stream analytics from millions of IoT devices?',
            explanation: 'Azure Stream Analytics is a complex event processing service for analyzing real-time data streams.',
            answers: [
                { content: 'Azure Data Factory', isCorrect: false },
                { content: 'Azure Stream Analytics', isCorrect: true },
                { content: 'Azure SQL', isCorrect: false },
                { content: 'Azure Batch', isCorrect: false },
            ],
        },
        {
            content: 'You are designing a website and want to reduce latency for users in Vietnam when the website is hosted in the US. What should you use?',
            explanation: 'Azure CDN (Content Delivery Network) has points of presence (POP) in Vietnam to speed up page loading.',
            answers: [
                { content: 'Use a stronger server', isCorrect: false },
                { content: 'Use Azure CDN', isCorrect: true },
                { content: 'Install more RAM', isCorrect: false },
                { content: 'Email code to users', isCorrect: false },
            ],
        },
        {
            content: 'When designing a solution for a multinational corporation, how do you ensure French user data never leaves French territory due to law (Data Sovereignty)?',
            explanation: 'Use Regions located within France (e.g., France Central) and apply Azure Policy to prevent resource creation in other regions.',
            answers: [
                { content: 'Turn off the internet', isCorrect: false },
                { content: 'Use local Regions and enforce via Azure Policy', isCorrect: true },
                { content: 'Encrypt hard drive', isCorrect: false },
                { content: 'There is no way', isCorrect: false },
            ],
        },
        {
            content: 'To automatically track Azure costs and receive notifications when spending reaches 80% of the monthly budget, which feature do you use?',
            explanation: 'Azure Cost Management Budgets allow setting thresholds and sending automated notifications.',
            answers: [
                { content: 'Azure Monitor', isCorrect: false },
                { content: 'Azure Cost Management Budgets', isCorrect: true },
                { content: 'Excel', isCorrect: false },
                { content: 'Activity Log', isCorrect: false },
            ],
        },
        {
            content: 'In MFA authentication design, which method is currently recommended by Microsoft as the most secure?',
            explanation: 'The Microsoft Authenticator app or FIDO2 physical keys (Passwordless) are more secure than SMS/Email.',
            answers: [
                { content: 'SMS via phone number', isCorrect: false },
                { content: 'Microsoft Authenticator app (Push notification)', isCorrect: true },
                { content: 'Email confirmation', isCorrect: false },
                { content: 'Phone call', isCorrect: false },
            ],
        },
        {
            content: 'You need a storage solution for 1 million small files, random access, and requiring extremely low latency. Which disk type do you recommend for the Data Disk?',
            explanation: 'Premium SSD or Ultra Disk are choices for tasks requiring low latency and high IOPS.',
            answers: [
                { content: 'Standard HDD', isCorrect: false },
                { content: 'Premium SSD', isCorrect: true },
                { content: 'Standard SSD', isCorrect: false },
                { content: 'Tape drive', isCorrect: false },
            ],
        },
        {
            content: 'In a Hub-and-Spoke architecture, how do you allow Spoke VNets to communicate with each other through the Hub?',
            explanation: 'Use VNet Peering to connect Spokes to the Hub and configure routing (UDR) or use a Network Appliance (like Azure Firewall) at the Hub as an intermediary.',
            answers: [
                { content: 'Connect cables', isCorrect: false },
                { content: 'Configure VNet Peering with Gateway Transit and VPN/Firewall at the Hub', isCorrect: true },
                { content: 'Use public internet', isCorrect: false },
                { content: 'Send via email', isCorrect: false },
            ],
        },
        {
            content: 'How does an Azure Storage Account "Standard General Purpose v2" differ from v1 in terms of cost?',
            explanation: 'v2 supports new features like Tiering (Hot/Cool/Archive) and generally has lower storage costs, though access fees may differ.',
            answers: [
                { content: 'V2 has no cost', isCorrect: false },
                { content: 'V2 supports flexible access tiers to optimize costs (Tiering)', isCorrect: true },
                { content: 'V1 is faster', isCorrect: false },
                { content: 'They are identical', isCorrect: false },
            ],
        },
        {
            content: 'When designing a solution for an application with short-term CPU spikes (e.g., running a 1-hour report daily), which type of virtual machine saves the most cost?',
            explanation: 'Spot Virtual Machines allow using Azure\'s spare capacity at a deep discount.',
            answers: [
                { content: 'Standard D-Series', isCorrect: false },
                { content: 'Spot Virtual Machines (if the task can be interrupted)', isCorrect: true },
                { content: 'Powerful H-Series', isCorrect: false },
                { content: 'Reserved Virtual Machines', isCorrect: false },
            ],
        },
        {
            content: 'You need to design a security solution to manage "Secrets" (like passwords, api keys). Why should you not store them in Azure App Service Settings?',
            explanation: 'Azure Key Vault provides centralized management, version history, support for rotation, and better security than App settings.',
            answers: [
                { content: 'App settings are too slow', isCorrect: false },
                { content: 'Azure Key Vault provides better management, rotation, and access control', isCorrect: true },
                { content: 'App settings are deleted after 1 day', isCorrect: false },
                { content: 'Microsoft does not allow it', isCorrect: false },
            ],
        },
        {
            content: 'Your design requires a database that can automatically autoscale CPU/RAM resources in real-time without disrupting the application. Which version of Azure SQL do you choose?',
            explanation: 'Azure SQL Database Serverless automatically scales compute resources based on workload demand.',
            answers: [
                { content: 'Provisioned Gen5', isCorrect: false },
                { content: 'Azure SQL Database Serverless', isCorrect: true },
                { content: 'Active Geo-Replication', isCorrect: false },
                { content: 'Hyperscale', isCorrect: false },
            ],
        },
        {
            content: 'In BCDR design, RPO is 24 hours and RTO is 4 hours. What does this mean when a system failure occurs?',
            explanation: 'The organization accepts a maximum loss of 24 hours of data and commits to having the system operational again within 4 hours of the failure.',
            answers: [
                { content: 'RPO is money, RTO is time', isCorrect: false },
                { content: 'Max 24 hours of data loss and 4 hours to recover operations', isCorrect: true },
                { content: 'Data is stored for 24 years and recovered in 4 days', isCorrect: false },
                { content: 'It has no meaning', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service helps protect your system against Brute Force attacks on VM RDP/SSH ports?',
            explanation: 'Azure Bastion eliminates the need to expose RDP/SSH ports to the internet, and Microsoft Defender has Just-In-Time (JIT) VM Access.',
            answers: [
                { content: 'Azure Storage', isCorrect: false },
                { content: 'Azure Bastion or Just-In-Time VM Access', isCorrect: true },
                { content: 'Azure Monitor', isCorrect: false },
                { content: 'Resource Locks', isCorrect: false },
            ],
        },
        {
            content: 'What is the benefit of using "Private Endpoints" for Azure PaaS services?',
            explanation: 'It removes the need to open the service firewall to "All Networks" or "Azure Services", only allowing traffic from your internal IP.',
            answers: [
                { content: 'Makes service run faster', isCorrect: false },
                { content: 'Maximum security by completely blocking access from the public internet', isCorrect: true },
                { content: 'Reduces billing costs', isCorrect: false },
                { content: 'Automatically creates backups', isCorrect: false },
            ],
        },
        {
            content: 'To provide administrative rights to one department in the company without affecting other departments, how should you design the Azure structure?',
            explanation: 'Separate each department using its own "Subscription" within the same Tenant.',
            answers: [
                { content: 'Use the same account password', isCorrect: false },
                { content: 'Use separate Subscriptions for each unit/department', isCorrect: true },
                { content: 'Create multiple Azure AD Tenants', isCorrect: false },
                { content: 'Install more RAM for the server', isCorrect: false },
            ],
        },
        {
            content: 'When designing for Sustainability, how does choosing "Serverless" instead of "Always-on" help?',
            explanation: 'Reduces energy waste by only consuming compute resources when there is actual work to process.',
            answers: [
                { content: 'Makes code run slower', isCorrect: false },
                { content: 'Optimizes energy usage and reduces carbon footprint', isCorrect: true },
                { content: 'Only to save money', isCorrect: false },
                { content: 'It has no effect', isCorrect: false },
            ],
        },
        {
            content: 'How is the "Defense in Depth" philosophy implemented in Azure architecture?',
            explanation: 'By applying multiple layers of security: From physical, identity, network, server, to the application and data layers.',
            answers: [
                { content: 'Use only one extremely long password', isCorrect: false },
                { content: 'Applying security at every layer of the IT infrastructure', isCorrect: true },
                { content: 'Building a wall around the data center', isCorrect: false },
                { content: 'Blocking all users', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service is suitable for building business management Dashboards from data stored in Azure SQL?',
            explanation: 'Power BI (within the Microsoft Cloud ecosystem) integrates deeply with Azure for data visualization.',
            answers: [
                { content: 'Azure Monitor', isCorrect: false },
                { content: 'Power BI', isCorrect: true },
                { content: 'Azure Functions', isCorrect: false },
                { content: 'Excel Online', isCorrect: false },
            ],
        },
        {
            content: 'You assign the "Contributor" role at the Management Group level. How will this permission propagate?',
            explanation: 'According to the principle of inheritance, the permission will apply to all Subscriptions and Resource Groups within that Management Group.',
            answers: [
                { content: 'Only effective at the Management Group', isCorrect: false },
                { content: 'Inherits down to all resources below in the hierarchy', isCorrect: true },
                { content: 'Requires manual re-assignment', isCorrect: false },
                { content: 'Will be blocked by Policy', isCorrect: false },
            ],
        },
        {
            content: 'In a VNet design, how many simultaneous Gateways can the "GatewaySubnet" support?',
            explanation: 'At any point in time, a VNet can have a maximum of one VPN Gateway and one ExpressRoute Gateway coexisting in the GatewaySubnet.',
            answers: [
                { content: '1', isCorrect: false },
                { content: '2 (One VPN and one ExpressRoute)', isCorrect: true },
                { content: '10', isCorrect: false },
                { content: 'Unlimited', isCorrect: false },
            ],
        },
        {
            content: 'What is the most important factor when choosing between Azure Files (SMB) and Azure Blob (REST)?',
            explanation: 'Based on how the application accesses data: Network share (Files) or programmed via API (Blob).',
            answers: [
                { content: 'Internet speed', isCorrect: false },
                { content: 'Application data access method (Legacy vs Modern/Cloud-native)', isCorrect: true },
                { content: 'File size', isCorrect: false },
                { content: 'Price', isCorrect: false },
            ],
        },
        {
            content: 'Why does using "Managed Identities" reduce the risk of insider attacks?',
            explanation: 'Because employees (developer/admin) do not know and never hold the service\'s credentials (password).',
            answers: [
                { content: 'It encrypts data', isCorrect: false },
                { content: 'It completely eliminates secrets that humans can see or leak', isCorrect: true },
                { content: 'Only for Microsoft', isCorrect: false },
                { content: 'It costs more money', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service is an event-driven platform that allows connecting thousands of different event sources easily?',
            explanation: 'Azure Event Grid is a high-scale event routing service.',
            answers: [
                { content: 'Azure Service Bus', isCorrect: false },
                { content: 'Azure Event Grid', isCorrect: true },
                { content: 'Azure Logic Apps', isCorrect: false },
                { content: 'Azure Storage', isCorrect: false },
            ],
        },
        {
            content: 'When designing a multi-tenant solution using Azure SQL, which solution provides the best resource isolation for each customer?',
            explanation: 'Using the "Database-per-tenant" model (each customer has their own database).',
            answers: [
                { content: 'Shared table', isCorrect: false },
                { content: 'Each customer has their own separate database', isCorrect: true },
                { content: 'Create multiple VMs', isCorrect: false },
                { content: 'Shared password', isCorrect: false },
            ],
        },
        {
            content: 'Your solution needs an AI system to detect fraud in real-time financial transactions. What should you use?',
            explanation: 'Azure AI Anomaly Detector helps identify abnormal points in time-series data.',
            answers: [
                { content: 'Azure Search', isCorrect: false },
                { content: 'Azure AI Anomaly Detector', isCorrect: true },
                { content: 'Azure SQL', isCorrect: false },
                { content: 'Azure Batch', isCorrect: false },
            ],
        },
        {
            content: 'What is the main goal of "Azure Resource Manager (ARM)"?',
            explanation: 'To provide a consistent management layer that allows you to create, update, and delete resources in your Azure account in an orderly fashion.',
            answers: [
                { content: 'To install Windows', isCorrect: false },
                { content: 'Centralized management and deployment layer for all Azure resources', isCorrect: true },
                { content: 'To play games', isCorrect: false },
                { content: 'To scan for viruses', isCorrect: false },
            ],
        },
        {
            content: 'In High Availability design, what does a Service Level Agreement (SLA) of 99.95% mean for maximum monthly downtime?',
            explanation: 'A 99.95% SLA allows for approximately 21-22 minutes of downtime per month.',
            answers: [
                { content: '1 minute', isCorrect: false },
                { content: 'Approximately 22 minutes', isCorrect: true },
                { content: '4 hours', isCorrect: false },
                { content: '1 day', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service provides key and configuration storage without requiring Azure AD?',
            explanation: 'Note: Most modern Azure services recommend using AD, but Key Vault supports traditional Access Policies if needed (though discouraged).',
            answers: [
                { content: 'Azure AD', isCorrect: false },
                { content: 'Azure Key Vault (with Access Policies)', isCorrect: true },
                { content: 'Excel', isCorrect: false },
                { content: 'In an .ini file', isCorrect: false },
            ],
        },
        {
            content: 'When designing for a developer (Dev) environment, how do you maximize cost savings on weekends?',
            explanation: 'Use Azure DevTest Labs to automate shutting down machines on Friday evening and turning them back on Monday morning.',
            answers: [
                { content: 'Leave machine running 24/7', isCorrect: false },
                { content: 'Configure auto-shutdown for VMs or Labs', isCorrect: true },
                { content: 'Delete VMs every evening', isCorrect: false },
                { content: 'Do not grant rights to dev', isCorrect: false },
            ],
        },
    ],
};
