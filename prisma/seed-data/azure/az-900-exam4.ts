export const az900Exam4 = {
    title: 'Azure Fundamentals AZ-900 - Practice Test 4',
    description: 'Azure Fundamentals AZ-900 practice test with 50 comprehensive questions covering all exam content.',
    durationMinutes: 65,
    courseId: 7,
    questions: [
        {
            content: 'Which Azure service provides the ability to automatically respond to security incidents by executing playbooks?',
            explanation: 'Microsoft Sentinel not only detects but also supports automated response (SOAR) through Logic Apps playbooks.',
            answers: [
                { content: 'Azure Advisor', isCorrect: false },
                { content: 'Microsoft Sentinel', isCorrect: true },
                { content: 'Azure Firewall', isCorrect: false },
                { content: 'Azure Blueprints', isCorrect: false },
            ],
        },
        {
            content: 'In Microsoft Entra ID, what does "Privileged Identity Management (PIM)" help manage?',
            explanation: 'PIM helps manage, control, and monitor access to critical resources, providing "just-in-time" and "just-enough-access" privileges.',
            answers: [
                { content: 'Changing passwords for office employees', isCorrect: false },
                { content: 'Managing high-privilege access and temporary access (JIT)', isCorrect: true },
                { content: 'Creating customer email accounts', isCorrect: false },
                { content: 'Encrypting VPN connections', isCorrect: false },
            ],
        },
        {
            content: 'How many days of incident history can Azure Service Health display?',
            explanation: 'The Service Health Dashboard allows you to view service incident history for the past 90 days.',
            answers: [
                { content: '30 days', isCorrect: false },
                { content: '90 days', isCorrect: true },
                { content: '365 days', isCorrect: false },
                { content: 'Cannot view history', isCorrect: false },
            ],
        },
        {
            content: 'What does the Microsoft Online Services Privacy Statement describe?',
            explanation: 'It describes how Microsoft collects, uses, and secures your data when you use their online services.',
            answers: [
                { content: 'Microsoft financial reports', isCorrect: false },
                { content: 'Commitment to customer data privacy', isCorrect: true },
                { content: 'Java programming guide', isCorrect: false },
                { content: 'List of upcoming features', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service allows you to analyze large code blocks to find security vulnerabilities before deployment?',
            explanation: 'GitHub Advanced Security for Azure (or Microsoft Defender for DevOps) provides source code scanning to find exposed secrets and vulnerabilities.',
            answers: [
                { content: 'Azure Monitor', isCorrect: false },
                { content: 'Microsoft Defender for DevOps', isCorrect: true },
                { content: 'Azure Advisor', isCorrect: false },
                { content: 'Azure Policy', isCorrect: false },
            ],
        },
        {
            content: 'What is the benefit of using an Azure Management Group in a large organization?',
            explanation: 'It allows applying compliance policies across multiple subscriptions simultaneously.',
            answers: [
                { content: 'Makes internet faster', isCorrect: false },
                { content: 'Applies uniform governance across multiple subscriptions', isCorrect: true },
                { content: 'Increases CPU clock speed for VMs', isCorrect: false },
                { content: 'Replaces monthly payments', isCorrect: false },
            ],
        },
        {
            content: 'When an organization uses the Shared Responsibility Model in PaaS, who is responsible for Network Security?',
            explanation: 'In PaaS, network security responsibility is typically shared; Microsoft secures the cloud network infrastructure, while the customer secures application network configuration.',
            answers: [
                { content: 'Always the customer', isCorrect: false },
                { content: 'Always Microsoft', isCorrect: false },
                { content: 'Shared between Microsoft and the customer', isCorrect: true },
                { content: 'Third party', isCorrect: false },
            ],
        },
        {
            content: 'What is the Azure Container Registry (ACR) service used for?',
            explanation: 'ACR is a private registry service for Docker images, helping store and manage images for deployment to ACI, AKS.',
            answers: [
                { content: 'Storing video files', isCorrect: false },
                { content: 'Managing and storing container images', isCorrect: true },
                { content: 'Building e-commerce websites', isCorrect: false },
                { content: 'Automatic language translation', isCorrect: false },
            ],
        },
        {
            content: 'Which programming languages does Azure App Service support?',
            explanation: 'It supports many languages including .NET, .NET Core, Java, Ruby, Node.js, PHP, and Python.',
            answers: [
                { content: '.NET only', isCorrect: false },
                { content: 'Many popular languages (Java, Python, Node.js, etc.)', isCorrect: true },
                { content: 'Static HTML only', isCorrect: false },
                { content: 'Only applications written by Microsoft', isCorrect: false },
            ],
        },
        {
            content: 'What happens if you try to delete a Resource Group that has a Delete Lock?',
            explanation: 'The delete request will fail until the Lock is removed by a user with appropriate permissions.',
            answers: [
                { content: 'The Resource Group will be deleted after 1 day', isCorrect: false },
                { content: 'The delete request is rejected and an error is returned', isCorrect: true },
                { content: 'Resources inside are deleted but the Group is not', isCorrect: false },
                { content: 'You are charged a penalty fee', isCorrect: false },
            ],
        },
        {
            content: 'What feature does the Azure DNS service provide?',
            explanation: 'It allows hosting your DNS domains on Azure infrastructure, providing fast response times and high availability.',
            answers: [
                { content: 'Free domain names for everyone', isCorrect: false },
                { content: 'Hosting DNS records using Azure infrastructure', isCorrect: true },
                { content: 'Encrypting data sent via email', isCorrect: false },
                { content: 'Protecting websites from hackers', isCorrect: false },
            ],
        },
        {
            content: 'Which storage type should you use for storing Virtual Machine log files at the lowest cost while still being easily accessible by applications?',
            explanation: 'Azure Blob Storage (Cool tier) is typically the optimal choice for log data due to low cost and unlimited capacity.',
            answers: [
                { content: 'Azure Premium Disk', isCorrect: false },
                { content: 'Azure Blob Storage', isCorrect: true },
                { content: 'Azure Queue', isCorrect: false },
                { content: 'Azure NetApp Files', isCorrect: false },
            ],
        },
        {
            content: 'What is Azure SQL Managed Instance?',
            explanation: 'It is a cloud database service that combines the intelligence of SQL Database with near 100% compatibility with on-premises SQL Server.',
            answers: [
                { content: 'A physical server', isCorrect: false },
                { content: 'A cloud SQL service with high compatibility with on-premises SQL Server', isCorrect: true },
                { content: 'A virus cleaner for SQL', isCorrect: false },
                { content: 'A SQL code compiler', isCorrect: false },
            ],
        },
        {
            content: 'Does the Microsoft Cost Management tool have a Forecasting feature?',
            explanation: 'It uses historical data and Machine Learning to predict your future costs.',
            answers: [
                { content: 'No, it can only view old data', isCorrect: false },
                { content: 'Yes, it helps forecast future spending', isCorrect: true },
                { content: 'Only when using the most expensive service', isCorrect: false },
                { content: 'Can only forecast for 1 day', isCorrect: false },
            ],
        },
        {
            content: 'What is Azure Lighthouse used for?',
            explanation: 'It provides multi-customer and cross-tenant management capabilities, commonly used by Managed Service Providers (MSPs).',
            answers: [
                { content: 'To illuminate data centers', isCorrect: false },
                { content: 'Managing resources across multiple Tenants and customers', isCorrect: true },
                { content: 'Creating cost reports', isCorrect: false },
                { content: 'Encrypting disks', isCorrect: false },
            ],
        },
        {
            content: 'How does cloud computing help reduce latency for global users?',
            explanation: 'By deploying applications at multiple geographically different Azure Regions close to user locations.',
            answers: [
                { content: 'Increasing the speed of light', isCorrect: false },
                { content: 'Deploying applications in geographic regions close to users', isCorrect: true },
                { content: 'Using more RAM', isCorrect: false },
                { content: 'Using Windows 11 operating system', isCorrect: false },
            ],
        },
        {
            content: 'What is the biggest difference between Public Cloud and Hybrid Cloud?',
            explanation: 'Public Cloud is entirely on the public internet, while Hybrid Cloud connects between public cloud and private infrastructure (on-premises).',
            answers: [
                { content: 'Public cloud is more secure', isCorrect: false },
                { content: 'Hybrid cloud connects on-premises infrastructure with public cloud', isCorrect: true },
                { content: 'Public cloud is more expensive', isCorrect: false },
                { content: 'There is no technical difference', isCorrect: false },
            ],
        },
        {
            content: 'What does Azure Virtual Network Peering allow?',
            explanation: 'It allows connecting two virtual networks (VNets) in Azure seamlessly as if they belong to the same network.',
            answers: [
                { content: 'Deleting virtual networks', isCorrect: false },
                { content: 'Connecting two virtual networks via Azure\'s private network', isCorrect: true },
                { content: 'Sharing passwords between 2 users', isCorrect: false },
                { content: 'Reducing internet costs', isCorrect: false },
            ],
        },
        {
            content: 'When two VNets are Peered, where does data travel between them?',
            explanation: 'Data travels entirely through Microsoft\'s private backbone network and never goes through the public Internet.',
            answers: [
                { content: 'Through the public Internet', isCorrect: false },
                { content: 'Through Microsoft\'s private backbone network', isCorrect: true },
                { content: 'Through ISP fiber optic cables', isCorrect: false },
                { content: 'Through Bluetooth connection', isCorrect: false },
            ],
        },
        {
            content: 'What does Azure Storage Service Encryption (SSE) do?',
            explanation: 'It automatically encrypts data when written to Storage and decrypts when read, protecting data at rest.',
            answers: [
                { content: 'Encrypts data on the internet transmission', isCorrect: false },
                { content: 'Encrypts data stored on disk (at rest)', isCorrect: true },
                { content: 'Encrypts user passwords', isCorrect: false },
                { content: 'Corrupts hacker data', isCorrect: false },
            ],
        },
        {
            content: 'A company needs to deploy a simple website consisting only of HTML, CSS, and JavaScript files. Which service is the cheapest and fastest?',
            explanation: 'Azure Static Web Apps is purpose-built for this need, providing high performance and very low cost (with a free tier).',
            answers: [
                { content: 'Deploy on Virtual Machine', isCorrect: false },
                { content: 'Azure Static Web Apps', isCorrect: true },
                { content: 'Azure Kubernetes Service', isCorrect: false },
                { content: 'Azure Dedicated Host', isCorrect: false },
            ],
        },
        {
            content: 'Does Azure ExpressRoute provide default encryption for transmitted data?',
            explanation: 'By default, ExpressRoute does not encrypt data. If security is needed, you must implement application-layer encryption or VPN over ExpressRoute.',
            answers: [
                { content: 'Always encrypts', isCorrect: false },
                { content: 'Does not support encryption', isCorrect: false },
                { content: 'Not encrypted by default, additional configuration needed if desired', isCorrect: true },
                { content: 'Only encrypts when using SSD drives', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service helps you detect abnormal patterns (anomalies) in your time-series data?',
            explanation: 'Azure Anomaly Detector (part of Azure AI Services) provides APIs to monitor and detect anomalies in time-based data.',
            answers: [
                { content: 'Azure Monitor', isCorrect: false },
                { content: 'Azure Anomaly Detector', isCorrect: true },
                { content: 'Azure Advisor', isCorrect: false },
                { content: 'Azure Logic Apps', isCorrect: false },
            ],
        },
        {
            content: 'Using "Availability Zones" for virtual machines raises the uptime SLA to what level?',
            explanation: 'When deploying at least two virtual machines in two different Availability Zones within the same Region, Microsoft commits to a 99.99% SLA.',
            answers: [
                { content: '99.9%', isCorrect: false },
                { content: '99.95%', isCorrect: false },
                { content: '99.99%', isCorrect: true },
                { content: '100%', isCorrect: false },
            ],
        },
        {
            content: 'What is true about the cost of Azure Public IP addresses?',
            explanation: 'Using a public IP address typically incurs a small hourly fee, regardless of whether it is static or dynamic.',
            answers: [
                { content: 'It is completely free forever', isCorrect: false },
                { content: 'It incurs hourly usage charges', isCorrect: true },
                { content: 'Only charged when a hacker attacks', isCorrect: false },
                { content: 'Only charged when using Windows', isCorrect: false },
            ],
        },
        {
            content: 'Can Azure Resource Groups contain resources from different Regions?',
            explanation: 'Yes, a Resource Group is a logical container that can hold resources located in any Region in Azure.',
            answers: [
                { content: 'No, all must be in the same Region', isCorrect: false },
                { content: 'Yes, absolutely', isCorrect: true },
                { content: 'Maximum of 2 Regions only', isCorrect: false },
                { content: 'Only with a premium subscription', isCorrect: false },
            ],
        },
        {
            content: 'What is the advantage of Cloud Computing for Disaster Recovery?',
            explanation: 'The ability to back up and restore systems in a completely different geographic region with lower cost and faster speed than on-premises.',
            answers: [
                { content: 'Data is never lost', isCorrect: false },
                { content: 'Ability to quickly recover systems in a different geographic region', isCorrect: true },
                { content: 'The solution is free', isCorrect: false },
                { content: 'Natural disasters never occur on the cloud', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service sends push notifications to millions of mobile devices (iOS, Android, Windows)?',
            explanation: 'Azure Notification Hubs is a cross-platform push notification tool with massive scalability.',
            answers: [
                { content: 'Azure SNS', isCorrect: false },
                { content: 'Azure Notification Hubs', isCorrect: true },
                { content: 'Azure Logic Apps', isCorrect: false },
                { content: 'Azure Event Hubs', isCorrect: false },
            ],
        },
        {
            content: 'What is Azure Event Grid?',
            explanation: 'It is an event routing service that makes it easy to build event-driven applications.',
            answers: [
                { content: 'A news website', isCorrect: false },
                { content: 'Event distribution service', isCorrect: true },
                { content: 'Schedule management software', isCorrect: false },
                { content: 'File manager', isCorrect: false },
            ],
        },
        {
            content: 'If you have a legacy application and want to move it to Azure without changing the source code, which method is most appropriate?',
            explanation: 'Lift-and-shift (or Rehosting) is the method of moving an application from on-premises servers to Azure Virtual Machines without changing code.',
            answers: [
                { content: 'Refactoring', isCorrect: false },
                { content: 'Lift-and-shift', isCorrect: true },
                { content: 'Serverless migration', isCorrect: false },
                { content: 'SaaS replacement', isCorrect: false },
            ],
        },
        {
            content: 'How many Consistency Levels does Azure Cosmos DB have?',
            explanation: 'Cosmos DB provides 5 consistency levels from Strong to Eventual for you to balance between performance and data accuracy.',
            answers: [
                { content: '1', isCorrect: false },
                { content: '3', isCorrect: false },
                { content: '5', isCorrect: true },
                { content: '10', isCorrect: false },
            ],
        },
        {
            content: 'When using IaaS, whose responsibility is it to apply security patches to the operating system?',
            explanation: 'The customer is fully responsible for managing, updating, and patching the operating system installed on IaaS virtual machines.',
            answers: [
                { content: 'Microsoft', isCorrect: false },
                { content: 'The customer', isCorrect: true },
                { content: 'Both', isCorrect: false },
                { content: 'Hardware manufacturer', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service provides an in-memory cache storage solution to speed up web applications?',
            explanation: 'Azure Cache for Redis is an in-memory data storage service that helps reduce latency and increase throughput for web applications.',
            answers: [
                { content: 'Azure Cosmos DB', isCorrect: false },
                { content: 'Azure Cache for Redis', isCorrect: true },
                { content: 'Azure SQL Database', isCorrect: false },
                { content: 'Azure Table Storage', isCorrect: false },
            ],
        },
        {
            content: 'How is an "Azure Subscription" linked to an Azure AD Tenant?',
            explanation: 'Each Subscription is linked to exactly one Tenant as the root user for managing identity and access.',
            answers: [
                { content: 'A Subscription can use multiple Tenants', isCorrect: false },
                { content: 'A Subscription is linked to exactly one Azure AD Tenant', isCorrect: true },
                { content: 'They are not related to each other', isCorrect: false },
                { content: 'They are the same concept', isCorrect: false },
            ],
        },
        {
            content: 'What does the governance principle "Least Privilege" in Azure AD mean?',
            explanation: 'Only provide users with the minimum level of privilege necessary for them to complete their work.',
            answers: [
                { content: 'Always assign Admin permissions', isCorrect: false },
                { content: 'Provide the minimum permissions necessary for the job', isCorrect: true },
                { content: 'Assign permissions based on seniority', isCorrect: false },
                { content: 'Everyone has the right to view all data', isCorrect: false },
            ],
        },
        {
            content: 'What is the advantage of Azure Cloud Shell over installing CLI directly on your computer?',
            explanation: 'It is always updated to the latest version from Microsoft and comes pre-integrated with all management tools without any configuration needed.',
            answers: [
                { content: 'It has nicer colors', isCorrect: false },
                { content: 'Always ready and automatically updates all management tools', isCorrect: true },
                { content: 'It allows playing games online', isCorrect: false },
                { content: 'It makes laptop battery last longer', isCorrect: false },
            ],
        },
        {
            content: 'What is Azure Private Link used for?',
            explanation: 'It allows you to access Azure services (such as SQL, Storage) through a private IP address in your virtual network, instead of through the internet.',
            answers: [
                { content: 'Network connectivity for smartphones', isCorrect: false },
                { content: 'Accessing Azure services using Private IP addresses', isCorrect: true },
                { content: 'Building e-commerce websites', isCorrect: false },
                { content: 'Managing remote servers', isCorrect: false },
            ],
        },
        {
            content: 'Can Azure Advisor provide recommendations about "Operational Excellence"?',
            explanation: 'Yes, this is one of the main pillars that Azure Advisor uses to provide recommendations for improving operational processes.',
            answers: [
                { content: 'No', isCorrect: false },
                { content: 'Yes, to help you improve process efficiency and management', isCorrect: true },
                { content: 'Only for large companies', isCorrect: false },
                { content: 'Still in testing phase', isCorrect: false },
            ],
        },
        {
            content: 'What is Microsoft Defender for Identity designed to protect?',
            explanation: 'It protects your on-premises Active Directory environment by detecting suspicious behaviors from users and attackers.',
            answers: [
                { content: 'Protection against spam email', isCorrect: false },
                { content: 'Protection of identities in on-premises Active Directory', isCorrect: true },
                { content: 'Protection of websites from hackers', isCorrect: false },
                { content: 'Protection of files on OneDrive', isCorrect: false },
            ],
        },
        {
            content: 'Does using "Tags" in Azure cost anything?',
            explanation: 'Completely free; Tags are a feature of Azure Resource Manager to help manage resources.',
            answers: [
                { content: '1 USD per Tag', isCorrect: false },
                { content: 'Completely free', isCorrect: true },
                { content: 'Only the first 10 Tags are free', isCorrect: false },
                { content: 'Only charged when deleting Tags', isCorrect: false },
            ],
        },
        {
            content: 'What does the Azure Service Level Agreement (SLA) specify?',
            explanation: 'It specifies exact commitments about the uptime percentage and connectivity of cloud services.',
            answers: [
                { content: 'Azure brand colors', isCorrect: false },
                { content: 'Service uptime commitment', isCorrect: true },
                { content: 'Windows licensing', isCorrect: false },
                { content: 'Employee code of conduct', isCorrect: false },
            ],
        },
        {
            content: 'Which tool should you use to view security alerts across multiple subscriptions and centralized security recommendations for the entire company?',
            explanation: 'Microsoft Defender for Cloud (Security Center) provides an overall view of the security posture of all cloud resources.',
            answers: [
                { content: 'Azure Advisor', isCorrect: false },
                { content: 'Microsoft Defender for Cloud', isCorrect: true },
                { content: 'Azure Monitor', isCorrect: false },
                { content: 'Azure Policy', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service provides the ability to securely store keys and secrets in hardware security modules (HSM)?',
            explanation: 'Azure Key Vault (Premium tier) supports storing encryption keys in dedicated FIPS-certified HSM hardware devices.',
            answers: [
                { content: 'Azure Storage', isCorrect: false },
                { content: 'Azure Key Vault (Premium)', isCorrect: true },
                { content: 'Azure AD', isCorrect: false },
                { content: 'Azure Disk Encryption', isCorrect: false },
            ],
        },
        {
            content: 'Does a static IP address in Azure incur charges when not in use (not attached to a virtual machine)?',
            explanation: 'Yes, unused static IP addresses are still charged to prevent wasting IP address resources.',
            answers: [
                { content: 'Free if not in use', isCorrect: false },
                { content: 'Still charged hourly', isCorrect: true },
                { content: 'Deleted after 1 hour', isCorrect: false },
                { content: 'Dynamic IPs cost the same by default', isCorrect: false },
            ],
        },
        {
            content: 'What does Azure Resource Manager (ARM) help you do?',
            explanation: 'It provides a management layer that allows you to create, update, and delete resources in your Azure account.',
            answers: [
                { content: 'Make 3D games', isCorrect: false },
                { content: 'Centrally manage Azure resources', isCorrect: true },
                { content: 'Send SMS messages', isCorrect: false },
                { content: 'Stream music online', isCorrect: false },
            ],
        },
        {
            content: 'If you have a website and want to reduce page load times for distant users by caching static files at a location close to them, which service should you use?',
            explanation: 'Azure Content Delivery Network (CDN) caches static web content at global Points of Presence (PoP) close to users.',
            answers: [
                { content: 'Azure ExpressRoute', isCorrect: false },
                { content: 'Azure Content Delivery Network (CDN)', isCorrect: true },
                { content: 'Azure DNS', isCorrect: false },
                { content: 'Azure Load Balancer', isCorrect: false },
            ],
        },
        {
            content: 'Which protocols does Azure Files support for file sharing?',
            explanation: 'It supports the industry-standard protocols SMB and NFS.',
            answers: [
                { content: 'HTTP/HTTPS', isCorrect: false },
                { content: 'SMB and NFS', isCorrect: true },
                { content: 'FTP/SFTP', isCorrect: false },
                { content: 'Bluetooth', isCorrect: false },
            ],
        },
        {
            content: 'What is the best way to organize Azure resources by engineering department or project?',
            explanation: 'Use Resource Groups to group related resources together.',
            answers: [
                { content: 'Create multiple different Azure accounts', isCorrect: false },
                { content: 'Use Resource Groups', isCorrect: true },
                { content: 'Use different names', isCorrect: false },
                { content: 'No organization needed', isCorrect: false },
            ],
        },
        {
            content: 'What is the main benefit of using Public Cloud compared to On-premises?',
            explanation: 'Flexible scalability, no hardware maintenance costs, and a pay-per-use pricing model.',
            answers: [
                { content: 'Own servers forever', isCorrect: false },
                { content: 'Flexible scalability and converting CapEx to OpEx', isCorrect: true },
                { content: 'Being able to repair hardware when it breaks', isCorrect: false },
                { content: 'No internet connection needed', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service is a fully managed open-source relational database for Linux users?',
            explanation: 'Azure Database for MySQL and Azure Database for PostgreSQL provide managed open-source experiences on Azure.',
            answers: [
                { content: 'Azure SQL Database', isCorrect: false },
                { content: 'Azure Database for MySQL/PostgreSQL', isCorrect: true },
                { content: 'Azure Cosmos DB', isCorrect: false },
                { content: 'Azure Cache for Redis', isCorrect: false },
            ],
        },
    ],
};
