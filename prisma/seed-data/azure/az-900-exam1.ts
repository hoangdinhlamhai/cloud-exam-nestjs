export const az900Exam1 = {
    title: 'Azure Fundamentals AZ-900 - Practice Test 1',
    description: 'Azure Fundamentals AZ-900 practice test with 50 questions covering cloud concepts, Azure services, management & governance.',
    durationMinutes: 65,
    courseId: 7,
    questions: [
        {
            content: 'Which type of Cloud service allows customers to have the highest level of control over hardware infrastructure and operating systems?',
            explanation: 'IaaS (Infrastructure as a Service) provides virtual server resources, storage, and networking, allowing users to install and manage operating systems and application software themselves.',
            answers: [
                { content: 'Software as a Service (SaaS)', isCorrect: false },
                { content: 'Platform as a Service (PaaS)', isCorrect: false },
                { content: 'Infrastructure as a Service (IaaS)', isCorrect: true },
                { content: 'Function as a Service (FaaS)', isCorrect: false },
            ],
        },
        {
            content: 'Microsoft being responsible for managing physical infrastructure and customers being responsible for configuring applications is an example of which concept?',
            explanation: 'The Shared Responsibility Model clearly defines the responsibilities of the cloud service provider and the customer depending on the type of service being used.',
            answers: [
                { content: 'High Availability', isCorrect: false },
                { content: 'Scalability', isCorrect: false },
                { content: 'Shared Responsibility Model', isCorrect: true },
                { content: 'Disaster Recovery', isCorrect: false },
            ],
        },
        {
            content: 'Which characteristic of Cloud Computing enables a system to automatically increase or decrease resources based on actual usage demand?',
            explanation: 'Elasticity allows the system to automatically adjust resources (scale out/in) to meet changes in traffic load.',
            answers: [
                { content: 'Durability', isCorrect: false },
                { content: 'Elasticity', isCorrect: true },
                { content: 'Latency', isCorrect: false },
                { content: 'Governance', isCorrect: false },
            ],
        },
        {
            content: 'Which service belongs to the Software as a Service (SaaS) category?',
            explanation: 'Microsoft 365 is a typical example of SaaS, where Microsoft provides the entire application and users simply use it through a browser or installed application.',
            answers: [
                { content: 'Azure Virtual Machines', isCorrect: false },
                { content: 'Azure SQL Database', isCorrect: false },
                { content: 'Microsoft 365', isCorrect: true },
                { content: 'Azure Storage Accounts', isCorrect: false },
            ],
        },
        {
            content: 'Which type of Cloud combines Public Cloud and Private Cloud, allowing data and applications to be shared between them?',
            explanation: 'Hybrid Cloud is a combined model that allows enterprises to leverage the advantages of both private infrastructure and public infrastructure.',
            answers: [
                { content: 'Community Cloud', isCorrect: false },
                { content: 'Public Cloud', isCorrect: false },
                { content: 'Private Cloud', isCorrect: false },
                { content: 'Hybrid Cloud', isCorrect: true },
            ],
        },
        {
            content: 'What is an Azure Region?',
            explanation: 'An Azure Region is a specific geographic area containing at least one or usually multiple data centers connected to each other by a low-latency network.',
            answers: [
                { content: 'A single data center', isCorrect: false },
                { content: 'A global network of servers', isCorrect: false },
                { content: 'A geographic area containing interconnected data centers', isCorrect: true },
                { content: 'A part of a subscription', isCorrect: false },
            ],
        },
        {
            content: 'What risk do Availability Zones in Azure protect applications from?',
            explanation: 'Availability Zones protect against failures at the data center level (data center failure) within the same Region.',
            answers: [
                { content: 'Failure of the entire Region', isCorrect: false },
                { content: 'Failure at a specific data center', isCorrect: true },
                { content: 'Application software errors', isCorrect: false },
                { content: 'Data loss due to user mistakes', isCorrect: false },
            ],
        },
        {
            content: 'What is a group of Azure resources that share the same management lifecycle called?',
            explanation: 'A Resource Group is a container that holds related resources for an Azure solution, helping manage them as a single unit.',
            answers: [
                { content: 'Management Group', isCorrect: false },
                { content: 'Subscription', isCorrect: false },
                { content: 'Resource Group', isCorrect: true },
                { content: 'Availability Set', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service provides virtual server solutions?',
            explanation: 'Azure Virtual Machines allows you to create and manage virtual server infrastructure as IaaS.',
            answers: [
                { content: 'Azure Functions', isCorrect: false },
                { content: 'Azure App Service', isCorrect: false },
                { content: 'Azure Virtual Machines', isCorrect: true },
                { content: 'Azure SQL Database', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service is a Serverless platform that allows running code without managing servers?',
            explanation: 'Azure Functions is a Serverless compute service that allows running code triggered by events without worrying about the underlying infrastructure.',
            answers: [
                { content: 'Azure Virtual Machines', isCorrect: false },
                { content: 'Azure Functions', isCorrect: true },
                { content: 'Azure Container Instances', isCorrect: false },
                { content: 'Azure Kubernetes Service', isCorrect: false },
            ],
        },
        {
            content: 'What is Azure Virtual Desktop (AVD) used for?',
            explanation: 'AVD is a desktop and app virtualization service running on the cloud, allowing users to access their work computer from anywhere.',
            answers: [
                { content: 'Managing cloud databases', isCorrect: false },
                { content: 'Providing a virtual Windows desktop experience on the cloud', isCorrect: true },
                { content: 'Developing web applications', isCorrect: false },
                { content: 'Encrypting network traffic', isCorrect: false },
            ],
        },
        {
            content: 'What is the main benefit of using Azure Container Instances (ACI) instead of Virtual Machines?',
            explanation: 'ACI allows launching containers extremely fast without managing the underlying VMs, providing flexibility and resource optimization.',
            answers: [
                { content: 'Long-term data storage capability', isCorrect: false },
                { content: 'Rapid deployment without needing to manage VMs', isCorrect: true },
                { content: 'Fixed monthly cost', isCorrect: false },
                { content: 'Support for older operating systems', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure networking service provides secure connectivity between branch offices and Azure VNet over the Internet?',
            explanation: 'Azure VPN Gateway enables creating secure connections (IPsec) between on-premises networks and Azure Virtual Network over the public Internet.',
            answers: [
                { content: 'Azure ExpressRoute', isCorrect: false },
                { content: 'Azure VPN Gateway', isCorrect: true },
                { content: 'Azure DNS', isCorrect: false },
                { content: 'Azure Virtual WAN', isCorrect: false },
            ],
        },
        {
            content: 'What is the main difference between ExpressRoute and VPN Gateway?',
            explanation: 'ExpressRoute provides a private connection with low latency and high bandwidth that does not traverse the public Internet like VPN Gateway.',
            answers: [
                { content: 'ExpressRoute is cheaper', isCorrect: false },
                { content: 'VPN Gateway is faster', isCorrect: false },
                { content: 'ExpressRoute does not use the public Internet', isCorrect: true },
                { content: 'VPN Gateway supports more Regions', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service helps balance HTTP/HTTPS traffic loads and has Web Application Firewall (WAF) capabilities?',
            explanation: 'Azure Application Gateway is an application load balancer (Layer 7) that provides traffic management and WAF security capabilities.',
            answers: [
                { content: 'Azure Load Balancer', isCorrect: false },
                { content: 'Azure Traffic Manager', isCorrect: false },
                { content: 'Azure Application Gateway', isCorrect: true },
                { content: 'Azure Front Door', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Storage, which service is specifically designed to store large amounts of unstructured data such as videos and images?',
            explanation: 'Azure Blob Storage is optimized for storing large unstructured files (binary large objects).',
            answers: [
                { content: 'Azure Disk Storage', isCorrect: false },
                { content: 'Azure Files', isCorrect: false },
                { content: 'Azure Blob Storage', isCorrect: true },
                { content: 'Azure Queues', isCorrect: false },
            ],
        },
        {
            content: 'The Hot, Cool, and Archive tiers in Blob Storage relate to which factor?',
            explanation: 'These are Access Tiers that help optimize costs based on data access frequency.',
            answers: [
                { content: 'CPU speed', isCorrect: false },
                { content: 'Network bandwidth', isCorrect: false },
                { content: 'Access frequency and storage cost', isCorrect: true },
                { content: 'Hardware reliability', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure database service is a globally distributed, multi-model NoSQL database?',
            explanation: 'Azure Cosmos DB is a globally distributed NoSQL database that supports multiple data models (document, key-value, graph, etc.).',
            answers: [
                { content: 'Azure SQL Database', isCorrect: false },
                { content: 'Azure Database for PostgreSQL', isCorrect: false },
                { content: 'Azure Cosmos DB', isCorrect: true },
                { content: 'Azure Cache for Redis', isCorrect: false },
            ],
        },
        {
            content: 'What is Microsoft Azure Active Directory (Azure AD) - now Microsoft Entra ID?',
            explanation: 'This is a cloud-based identity and access management (IAM) service from Microsoft.',
            answers: [
                { content: 'An operating system for servers', isCorrect: false },
                { content: 'An identity and access management service', isCorrect: true },
                { content: 'An on-premises user database', isCorrect: false },
                { content: 'A network firewall system', isCorrect: false },
            ],
        },
        {
            content: 'What does Conditional Access in Microsoft Entra ID allow you to do?',
            explanation: 'Conditional Access allows applying access control policies based on conditions such as location, device, and risk behavior.',
            answers: [
                { content: 'Create additional new users', isCorrect: false },
                { content: 'Set security policies based on signals', isCorrect: true },
                { content: 'Change user passwords', isCorrect: false },
                { content: 'Encrypt VM hard drives', isCorrect: false },
            ],
        },
        {
            content: 'What does Role-Based Access Control (RBAC) help you do?',
            explanation: 'RBAC allows you to manage in detail who has the right to do what on Azure resources by assigning roles.',
            answers: [
                { content: 'Control traffic into VNet', isCorrect: false },
                { content: 'Manage resource access based on roles', isCorrect: true },
                { content: 'Enable multi-factor authentication', isCorrect: false },
                { content: 'Limit monthly costs', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service provides recommendations to help you optimize costs, security, and performance?',
            explanation: 'Azure Advisor analyzes your configuration and usage telemetry to provide practical recommendations according to Microsoft standards.',
            answers: [
                { content: 'Azure Monitor', isCorrect: false },
                { content: 'Azure Advisor', isCorrect: true },
                { content: 'Microsoft Defender for Cloud', isCorrect: false },
                { content: 'Azure Service Health', isCorrect: false },
            ],
        },
        {
            content: 'What are Azure Resource Manager (ARM) Templates used for?',
            explanation: 'ARM Templates use JSON files to declare infrastructure (Infrastructure as Code), enabling repeatable and consistent deployments.',
            answers: [
                { content: 'Sending notification emails', isCorrect: false },
                { content: 'Deploying resources through declarative JSON files', isCorrect: true },
                { content: 'Encrypting SQL data', isCorrect: false },
                { content: 'Managing application logs', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service provides observability for both infrastructure and applications through Metrics and Logs?',
            explanation: 'Azure Monitor is a comprehensive solution for collecting, analyzing, and responding to monitoring data from cloud and on-premises environments.',
            answers: [
                { content: 'Azure Advisor', isCorrect: false },
                { content: 'Azure Monitor', isCorrect: true },
                { content: 'Microsoft Sentinel', isCorrect: false },
                { content: 'Azure Blueprints', isCorrect: false },
            ],
        },
        {
            content: 'What does Microsoft Defender for Cloud (formerly Azure Security Center) help with?',
            explanation: 'Defender for Cloud provides security posture management and threat protection for cloud workloads.',
            answers: [
                { content: 'Data backup', isCorrect: false },
                { content: 'Security management and threat protection', isCorrect: true },
                { content: 'Building chatbots', isCorrect: false },
                { content: 'Language translation', isCorrect: false },
            ],
        },
        {
            content: 'What is the Cloud Adoption Framework (CAF)?',
            explanation: 'CAF is a collection of guidance, best practices, and documentation to help enterprises successfully adopt cloud.',
            answers: [
                { content: 'A tool for migrating VMs', isCorrect: false },
                { content: 'Strategic guidance for enterprise cloud transformation', isCorrect: true },
                { content: 'An API for managing Azure', isCorrect: false },
                { content: 'An automated billing system', isCorrect: false },
            ],
        },
        {
            content: 'What is it called when you commit to using a resource for 1-3 years to receive a discounted price in Azure?',
            explanation: 'Azure Reservations allow you to prepay or commit to monthly payments for resources (such as VMs, SQL) to save up to 72% compared to pay-as-you-go pricing.',
            answers: [
                { content: 'Pay-as-you-go', isCorrect: false },
                { content: 'Fixed Price', isCorrect: false },
                { content: 'Azure Reservations', isCorrect: true },
                { content: 'Hybrid Benefit', isCorrect: false },
            ],
        },
        {
            content: 'What does the concept "TCO" in Cloud Computing mean?',
            explanation: 'TCO (Total Cost of Ownership) is the total cost of ownership, including all direct and indirect costs of operating a system.',
            answers: [
                { content: 'Time to Close Operations', isCorrect: false },
                { content: 'Total Cloud Optimization', isCorrect: false },
                { content: 'Total Cost of Ownership', isCorrect: true },
                { content: 'Technical Cloud Organization', isCorrect: false },
            ],
        },
        {
            content: 'What does the Azure Arc service allow you to do?',
            explanation: 'Azure Arc allows extending Azure services and management to any infrastructure (on-premises, multi-cloud, edge).',
            answers: [
                { content: 'Only manage Azure VMs', isCorrect: false },
                { content: 'Manage multi-cloud and on-premises infrastructure through Azure', isCorrect: true },
                { content: 'Create virtual private networks', isCorrect: false },
                { content: 'Store large files', isCorrect: false },
            ],
        },
        {
            content: 'What is the business model called where customers only pay for what they use?',
            explanation: 'The consumption-based model is a hallmark of cloud computing, helping eliminate large upfront capital expenditure (CapEx).',
            answers: [
                { content: 'Subscription-based model', isCorrect: false },
                { content: 'Consumption-based model', isCorrect: true },
                { content: 'Leasing model', isCorrect: false },
                { content: 'Fixed-cost model', isCorrect: false },
            ],
        },
        {
            content: 'When using IaaS, what is the customer responsible for managing?',
            explanation: 'In the IaaS model, customers are responsible for the operating system, runtime, middleware, and application data.',
            answers: [
                { content: 'Physical infrastructure', isCorrect: false },
                { content: 'Virtualization', isCorrect: false },
                { content: 'Operating system and applications', isCorrect: true },
                { content: 'Data center power supply', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service helps enforce governance standards by preventing the deployment of non-compliant resources?',
            explanation: 'Azure Policy allows you to create, assign, and manage policies to ensure resources comply with desired configurations.',
            answers: [
                { content: 'Azure Locks', isCorrect: false },
                { content: 'Azure Policy', isCorrect: true },
                { content: 'Azure Monitor', isCorrect: false },
                { content: 'Azure Blueprints', isCorrect: false },
            ],
        },
        {
            content: 'What is Azure Sovereign Cloud (e.g., Azure Government)?',
            explanation: 'These are separate Azure instances designed to meet extremely strict security and compliance requirements of specific governments or regions.',
            answers: [
                { content: 'A free version of Azure', isCorrect: false },
                { content: 'An Azure Region for individual customers', isCorrect: false },
                { content: 'Separate Azure instances for specific compliance purposes', isCorrect: true },
                { content: 'An enterprise private network', isCorrect: false },
            ],
        },
        {
            content: 'What is the benefit of "Economy of Scale" in cloud computing?',
            explanation: 'Economy of Scale allows large cloud providers like Microsoft to reduce marginal costs and pass that benefit to customers through lower prices.',
            answers: [
                { content: 'Makes applications run faster', isCorrect: false },
                { content: 'Reduces costs for customers through the large scale of the provider', isCorrect: true },
                { content: 'Enhances data security', isCorrect: false },
                { content: 'Makes resource management easier', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure tool helps you manage multiple Subscriptions into a hierarchical system to apply policies and governance?',
            explanation: 'Management Groups provide a level of management above Subscriptions, helping organize and govern effectively for large enterprises.',
            answers: [
                { content: 'Resource Groups', isCorrect: false },
                { content: 'Management Groups', isCorrect: true },
                { content: 'Tenant Groups', isCorrect: false },
                { content: 'Region Groups', isCorrect: false },
            ],
        },
        {
            content: 'In the PaaS model, what is Microsoft primarily responsible for managing?',
            explanation: 'In PaaS, Microsoft manages the operating system, runtime, and middleware, while customers focus only on applications and data.',
            answers: [
                { content: 'Application source code', isCorrect: false },
                { content: 'Operating system and runtime environment', isCorrect: true },
                { content: 'Customer database schema', isCorrect: false },
                { content: 'VPN network configuration', isCorrect: false },
            ],
        },
        {
            content: 'What does Azure Service Health provide information about?',
            explanation: 'Azure Service Health notifies you about maintenance plans, service incidents, and technical advisories related to the Azure services you are using.',
            answers: [
                { content: 'CPU performance of your VMs', isCorrect: false },
                { content: 'Overall status of Azure services and incidents affecting you', isCorrect: true },
                { content: 'List of resources you have deleted', isCorrect: false },
                { content: 'Estimated cost for next month', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service provides a source code repository (Git) and CI/CD pipelines for development teams?',
            explanation: 'Azure DevOps is a set of tools providing development services from planning to deployment (Repos, Pipelines, Boards, etc.).',
            answers: [
                { content: 'Azure GitHub Connect', isCorrect: false },
                { content: 'Azure Cloud Shell', isCorrect: false },
                { content: 'Azure DevOps', isCorrect: true },
                { content: 'Azure App Service', isCorrect: false },
            ],
        },
        {
            content: 'Which type of storage in Azure Storage provides file shares that can be mounted using the SMB protocol?',
            explanation: 'Azure Files allows creating cloud file shares that can be accessed like network drives through the SMB or NFS protocol.',
            answers: [
                { content: 'Azure Table Storage', isCorrect: false },
                { content: 'Azure Queue Storage', isCorrect: false },
                { content: 'Azure Files', isCorrect: true },
                { content: 'Azure Page Blobs', isCorrect: false },
            ],
        },
        {
            content: 'Which tool should you use to estimate your total monthly costs before deploying resources on Azure?',
            explanation: 'Azure Pricing Calculator helps you plan and estimate costs based on specific resource usage scenarios.',
            answers: [
                { content: 'Azure Advisor', isCorrect: false },
                { content: 'Azure Cost Management', isCorrect: false },
                { content: 'Azure Pricing Calculator', isCorrect: true },
                { content: 'TCO Calculator', isCorrect: false },
            ],
        },
        {
            content: 'Which Cloud model helps enterprises comply with data sovereignty regulations by keeping sensitive data on their own servers while running other applications on the Cloud?',
            explanation: 'Hybrid Cloud is the top choice for enterprises that need the flexibility of cloud but still must comply with local data storage regulations.',
            answers: [
                { content: 'Public Cloud', isCorrect: false },
                { content: 'Private Cloud', isCorrect: false },
                { content: 'Hybrid Cloud', isCorrect: true },
                { content: 'Global Cloud', isCorrect: false },
            ],
        },
        {
            content: 'What is a set of governance rules, processes, and standards to help deploy consistent new environments in Azure called?',
            explanation: 'Azure Blueprints helps engineering teams quickly build and provision new environments that comply with organizational standards.',
            answers: [
                { content: 'Azure Resource Groups', isCorrect: false },
                { content: 'Azure Policy Set', isCorrect: false },
                { content: 'Azure Blueprints', isCorrect: true },
                { content: 'ARM Templates', isCorrect: false },
            ],
        },
        {
            content: 'What is the best way to prevent a critical Azure resource from being accidentally deleted by any user?',
            explanation: 'Azure Resource Locks (Delete lock) help prevent accidental deletion of resources even when the user has Owner permissions.',
            answers: [
                { content: 'Use strict RBAC', isCorrect: false },
                { content: 'Apply Azure Policy', isCorrect: false },
                { content: 'Use Resource Locks', isCorrect: true },
                { content: 'Remove the user\'s Subscription', isCorrect: false },
            ],
        },
        {
            content: 'Which tool provides a browser-based command-line interface for managing Azure resources?',
            explanation: 'Azure Cloud Shell provides a shell experience (Bash or PowerShell) directly in the browser without needing to install anything additional.',
            answers: [
                { content: 'Azure Portal', isCorrect: false },
                { content: 'Azure CLI', isCorrect: false },
                { content: 'Azure Cloud Shell', isCorrect: true },
                { content: 'Azure PowerShell', isCorrect: false },
            ],
        },
        {
            content: 'In the concept of High Availability, what does "SLA" stand for?',
            explanation: 'SLA (Service Level Agreement) is the agreement on the level of service commitment (typically uptime) between Microsoft and the customer.',
            answers: [
                { content: 'Software Licensing Agreement', isCorrect: false },
                { content: 'Secure Logic Authorization', isCorrect: false },
                { content: 'Service Level Agreement', isCorrect: true },
                { content: 'System Level Accuracy', isCorrect: false },
            ],
        },
        {
            content: 'If an application requires a 99.99% SLA, what does that mean?',
            explanation: 'Extremely high availability, the application is allowed a maximum downtime of approximately 52.5 minutes per year.',
            answers: [
                { content: 'The application runs very fast', isCorrect: false },
                { content: 'The application has very high availability with minimal downtime', isCorrect: true },
                { content: 'The application is 99.99% free', isCorrect: false },
                { content: 'All data is 99.99% encrypted', isCorrect: false },
            ],
        },
        {
            content: 'What does Azure Marketplace provide?',
            explanation: 'Azure Marketplace is a catalog of applications and services from Microsoft and third-party partners (ISVs) certified to run on Azure.',
            answers: [
                { content: 'Only Microsoft services', isCorrect: false },
                { content: 'A platform to purchase software solutions from Microsoft and partners', isCorrect: true },
                { content: 'A cloud resource auction site', isCorrect: false },
                { content: 'An Azure learning tutorial website', isCorrect: false },
            ],
        },
        {
            content: 'Microsoft ensuring that their services comply with standards such as ISO 27001 is part of what?',
            explanation: 'Compliance is a critical aspect of the Azure Trust Center, ensuring the platform meets international and regional standards.',
            answers: [
                { content: 'Performance', isCorrect: false },
                { content: 'Scalability', isCorrect: false },
                { content: 'Compliance', isCorrect: true },
                { content: 'High Availability', isCorrect: false },
            ],
        },
        {
            content: 'Which factor affects the cost of an Azure Virtual Machine?',
            explanation: 'VM costs are affected by size (CPU/RAM), Region, operating system type, and storage disk type.',
            answers: [
                { content: 'The length of the VM name', isCorrect: false },
                { content: 'The number of Resource Groups in the Region', isCorrect: false },
                { content: 'VM size, Region, and usage duration', isCorrect: true },
                { content: 'The color of the Portal interface', isCorrect: false },
            ],
        },
        {
            content: 'What should you use to convert on-premises software licenses to cloud to save costs?',
            explanation: 'Azure Hybrid Benefit allows you to leverage existing Windows Server and SQL Server licenses to significantly save costs on Azure.',
            answers: [
                { content: 'Azure Free Account', isCorrect: false },
                { content: 'Azure Hybrid Benefit', isCorrect: true },
                { content: 'Azure Reservations', isCorrect: false },
                { content: 'Azure Spot Instances', isCorrect: false },
            ],
        },
    ],
};
