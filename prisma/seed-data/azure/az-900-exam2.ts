export const az900Exam2 = {
    title: 'Azure Fundamentals AZ-900 - Practice Test 2',
    description: 'Azure Fundamentals AZ-900 practice test with 50 questions focusing on Network, Security, Identity, and Governance.',
    durationMinutes: 65,
    courseId: 7,
    questions: [
        {
            content: 'Which Azure service provides the ability to filter network traffic to and from a subnet or network interface based on IP address, port, and protocol?',
            explanation: 'Network Security Group (NSG) is a basic network security tool in Azure used to allow or deny network traffic at the subnet or network interface level.',
            answers: [
                { content: 'Azure Firewall', isCorrect: false },
                { content: 'Network Security Group (NSG)', isCorrect: true },
                { content: 'Azure Load Balancer', isCorrect: false },
                { content: 'Azure Application Gateway', isCorrect: false },
            ],
        },
        {
            content: 'What is the main difference between Network Security Group (NSG) and Azure Firewall?',
            explanation: 'Azure Firewall is a fully managed stateful network security service with FQDN filtering capabilities and high availability, while NSG provides basic filtering rules.',
            answers: [
                { content: 'NSG is more expensive', isCorrect: false },
                { content: 'Azure Firewall is a fully managed service with FQDN filtering capabilities', isCorrect: true },
                { content: 'NSG only supports HTTP protocol', isCorrect: false },
                { content: 'Azure Firewall does not support IP address filtering', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service protects web applications from common attacks such as SQL injection and Cross-site scripting (XSS)?',
            explanation: 'Web Application Firewall (WAF) is a feature of Application Gateway or Azure Front Door that helps protect against common web vulnerabilities.',
            answers: [
                { content: 'Azure Bastion', isCorrect: false },
                { content: 'Web Application Firewall (WAF)', isCorrect: true },
                { content: 'Azure DDoS Protection', isCorrect: false },
                { content: 'Azure Sentinel', isCorrect: false },
            ],
        },
        {
            content: 'What additional features does Azure DDoS Protection Standard provide compared to the Basic tier?',
            explanation: 'The Standard tier provides intelligent DDoS mitigation, detailed attack reports, and support from the Microsoft incident response team.',
            answers: [
                { content: 'Only provides basic network security', isCorrect: false },
                { content: 'Intelligent mitigation and detailed attack reports', isCorrect: true },
                { content: 'No cost', isCorrect: false },
                { content: 'Only supports physical servers', isCorrect: false },
            ],
        },
        {
            content: 'What is Azure Bastion used for?',
            explanation: 'Azure Bastion provides secure and seamless RDP/SSH connectivity to virtual machines directly through the browser, without exposing the VM\'s public IP.',
            answers: [
                { content: 'Storing configuration files', isCorrect: false },
                { content: 'Secure RDP/SSH access without needing a public IP', isCorrect: true },
                { content: 'Managing certificates', isCorrect: false },
                { content: 'Load balancing traffic', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service is a cloud-based SIEM (Security Information and Event Management) and SOAR solution?',
            explanation: 'Microsoft Sentinel provides intelligent security analytics and threat intelligence across the entire organization.',
            answers: [
                { content: 'Azure Key Vault', isCorrect: false },
                { content: 'Microsoft Sentinel', isCorrect: true },
                { content: 'Microsoft Defender for Cloud', isCorrect: false },
                { content: 'Azure Policy', isCorrect: false },
            ],
        },
        {
            content: 'What types of data is Azure Key Vault used to store?',
            explanation: 'Azure Key Vault is used to securely store secrets, encryption keys, and certificates.',
            answers: [
                { content: 'Database backups', isCorrect: false },
                { content: 'Secrets, Keys, and Certificates', isCorrect: true },
                { content: 'Application source code', isCorrect: false },
                { content: 'User personal data', isCorrect: false },
            ],
        },
        {
            content: 'What does the concept "Defense in Depth" in Cloud security mean?',
            explanation: 'This is a multi-layered security strategy to protect information; if one layer is breached, other layers continue to block the attacker.',
            answers: [
                { content: 'Using only the strongest firewall', isCorrect: false },
                { content: 'Using multiple layers of security to protect data assets', isCorrect: true },
                { content: 'Encrypting data at a single point', isCorrect: false },
                { content: 'Granting maximum access to all users', isCorrect: false },
            ],
        },
        {
            content: 'What is the authentication method that requires two or more factors to verify a user\'s identity called?',
            explanation: 'Multi-Factor Authentication (MFA) enhances security by requiring additional information beyond a password (such as OTP, biometrics).',
            answers: [
                { content: 'Single Sign-On (SSO)', isCorrect: false },
                { content: 'Multi-Factor Authentication (MFA)', isCorrect: true },
                { content: 'Passwordless Sign-in', isCorrect: false },
                { content: 'Biometric Access', isCorrect: false },
            ],
        },
        {
            content: 'What benefit does Single Sign-On (SSO) provide to users?',
            explanation: 'SSO allows users to log in only once with a single set of credentials to access multiple different applications.',
            answers: [
                { content: 'Increases the number of passwords to remember', isCorrect: false },
                { content: 'Access multiple applications with just a single login', isCorrect: true },
                { content: 'Makes logging in slower', isCorrect: false },
                { content: 'Only works for Azure services', isCorrect: false },
            ],
        },
        {
            content: 'An administrator wants to restrict employees to only deploy resources in the "Southeast Asia" Region. Which Azure tool is most appropriate?',
            explanation: 'Azure Policy can enforce rules such as "Allowed Locations" to ensure resources are only created in permitted regions.',
            answers: [
                { content: 'Resource Groups', isCorrect: false },
                { content: 'Azure Policy', isCorrect: true },
                { content: 'Azure Lock', isCorrect: false },
                { content: 'Azure AD', isCorrect: false },
            ],
        },
        {
            content: 'In the RBAC model, what does "Scope" determine?',
            explanation: 'Scope determines the boundary where access permissions are applied (e.g., Management Group, Subscription, Resource Group, or Resource).',
            answers: [
                { content: 'The type of permission a user has', isCorrect: false },
                { content: 'The level at which access permissions are applied', isCorrect: true },
                { content: 'How long a user has permissions', isCorrect: false },
                { content: 'The geographic location of the user', isCorrect: false },
            ],
        },
        {
            content: 'When applying a "ReadOnly" lock to a Resource Group, which actions will be blocked for all resources inside?',
            explanation: 'A ReadOnly lock prevents modifying configuration or deleting resources, only allowing reading of information.',
            answers: [
                { content: 'Reading data', isCorrect: false },
                { content: 'Modifying or deleting resources', isCorrect: true },
                { content: 'Accessing the website on the VM', isCorrect: false },
                { content: 'Viewing metrics on Azure Monitor', isCorrect: false },
            ],
        },
        {
            content: 'What can you set up in Azure Service Health to receive notifications when incidents occur?',
            explanation: 'You can set up Service Health Alerts to receive notifications via Email, SMS, or Webhook when a service encounters issues.',
            answers: [
                { content: 'Automatically restart VMs', isCorrect: false },
                { content: 'Service Health Alerts', isCorrect: true },
                { content: 'Increase network bandwidth', isCorrect: false },
                { content: 'Delete unused resources', isCorrect: false },
            ],
        },
        {
            content: 'Which feature helps tag Azure resources for categorization and cost management?',
            explanation: 'Azure Tags are name-value pairs that help you organize resources and allocate costs effectively.',
            answers: [
                { content: 'Azure Monitor', isCorrect: false },
                { content: 'Azure Tags', isCorrect: true },
                { content: 'Azure AD', isCorrect: false },
                { content: 'Azure Logic Apps', isCorrect: false },
            ],
        },
        {
            content: 'What type of data does Azure Information Protection (AIP) help protect?',
            explanation: 'AIP helps classify and protect documents and emails by applying labels.',
            answers: [
                { content: 'SQL databases', isCorrect: false },
                { content: 'Documents and emails', isCorrect: true },
                { content: 'VM virtual disks', isCorrect: false },
                { content: 'Azure portal accounts', isCorrect: false },
            ],
        },
        {
            content: 'What information does the Microsoft Trust Center website provide?',
            explanation: 'Trust Center provides detailed information about security, privacy, and legal compliance of Microsoft cloud services.',
            answers: [
                { content: 'Service pricing', isCorrect: false },
                { content: 'Security, Privacy, and Compliance', isCorrect: true },
                { content: 'Windows source code', isCorrect: false },
                { content: 'List of Microsoft partners', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure Subscription type is most suitable for individuals who want to try the service for the first time?',
            explanation: 'Azure Free Account provides a free credit for 30 days and some free services for 12 months.',
            answers: [
                { content: 'Enterprise Agreement', isCorrect: false },
                { content: 'Pay-As-You-Go', isCorrect: false },
                { content: 'Azure Free Account', isCorrect: true },
                { content: 'Partner Subscription', isCorrect: false },
            ],
        },
        {
            content: 'Does network traffic moving from one Region to another in Azure incur costs?',
            explanation: 'Typically, data egress (outbound) from an Azure region incurs charges, while data ingress (inbound) is free.',
            answers: [
                { content: 'Always free', isCorrect: false },
                { content: 'Usually incurs egress data transfer costs', isCorrect: true },
                { content: 'Only charged when using ExpressRoute', isCorrect: false },
                { content: 'Only charged when over 100GB', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure tool helps you automate the deployment of repeated sets of resources and security configurations?',
            explanation: 'Azure Blueprints allows cloud architects to define a repeatable set of Azure resources to implement organizational standards.',
            answers: [
                { content: 'Azure Policy', isCorrect: false },
                { content: 'Azure Blueprints', isCorrect: true },
                { content: 'Azure Advisor', isCorrect: false },
                { content: 'Resource Groups', isCorrect: false },
            ],
        },
        {
            content: 'Which service provides the simplest and fastest NoSQL (key-value) file storage capability in Azure?',
            explanation: 'Azure Table Storage is a lightweight NoSQL key-value storage service, suitable for structured but non-relational data storage.',
            answers: [
                { content: 'Azure SQL Database', isCorrect: false },
                { content: 'Azure Table Storage', isCorrect: true },
                { content: 'Azure Cosmos DB', isCorrect: false },
                { content: 'Azure Blob Storage', isCorrect: false },
            ],
        },
        {
            content: 'What is the cost advantage of the "Serverless" computing model?',
            explanation: 'Serverless allows you to only pay for the time your code actually executes, with no cost when the system is idle.',
            answers: [
                { content: 'You must pay a fixed monthly fee', isCorrect: false },
                { content: 'You only pay for the time the code executes', isCorrect: true },
                { content: 'It is always more expensive than Virtual Machines', isCorrect: false },
                { content: 'It limits the number of users who can access', isCorrect: false },
            ],
        },
        {
            content: 'At which levels can Resource Locks be applied?',
            explanation: 'Resource Locks can be applied at the Subscription, Resource Group, or individual Resource level.',
            answers: [
                { content: 'Resource level only', isCorrect: false },
                { content: 'Subscription level only', isCorrect: false },
                { content: 'Subscription, Resource Group, and Resource', isCorrect: true },
                { content: 'Management Group level only', isCorrect: false },
            ],
        },
        {
            content: 'Can Azure Policy automatically remediate non-compliant resources?',
            explanation: 'Azure Policy has a Remediation feature that automatically fixes configuration errors or deploys missing resources to ensure compliance.',
            answers: [
                { content: 'No, it is only used for alerting', isCorrect: false },
                { content: 'Yes, through Remediation tasks', isCorrect: true },
                { content: 'Only when used with Azure AD', isCorrect: false },
                { content: 'Only for Virtual Machines', isCorrect: false },
            ],
        },
        {
            content: 'What benefit does the Azure Hybrid Benefit model provide to organizations?',
            explanation: 'It helps save up to 40% on virtual machine costs by using existing Windows Server/SQL Server licenses on the cloud.',
            answers: [
                { content: 'Increases network speed', isCorrect: false },
                { content: 'Saves software costs by leveraging existing licenses', isCorrect: true },
                { content: 'Easily switch to AWS', isCorrect: false },
                { content: 'Enhances MFA security', isCorrect: false },
            ],
        },
        {
            content: 'What does the concept "Geo-redundancy" in Azure Storage mean?',
            explanation: 'Your data is replicated to another Region far from the primary Region to ensure safety if the primary Region experiences a disaster.',
            answers: [
                { content: 'Data is stored in 3 zones within the same Region', isCorrect: false },
                { content: 'Data is replicated to another geographic region', isCorrect: true },
                { content: 'Data can only be accessed from one country', isCorrect: false },
                { content: 'Data is stored on SSD drives', isCorrect: false },
            ],
        },
        {
            content: 'Which service simplifies the management and deployment of Kubernetes clusters on Azure?',
            explanation: 'Azure Kubernetes Service (AKS) is a fully managed Kubernetes service that reduces the operational burden of orchestration.',
            answers: [
                { content: 'Azure Container Instances (ACI)', isCorrect: false },
                { content: 'Azure Kubernetes Service (AKS)', isCorrect: true },
                { content: 'Azure Functions', isCorrect: false },
                { content: 'Azure App Service', isCorrect: false },
            ],
        },
        {
            content: 'In Microsoft Entra ID, which factor is NOT considered a typical authentication method?',
            explanation: 'Geographic location is a signal for access control but is not a direct authentication method like a password or token.',
            answers: [
                { content: 'Password', isCorrect: false },
                { content: 'User\'s home address', isCorrect: true },
                { content: 'Biometrics (fingerprint/face)', isCorrect: false },
                { content: 'Security Token', isCorrect: false },
            ],
        },
        {
            content: 'When a Subscription expires, what happens to the resources inside?',
            explanation: 'Services will be disabled; you cannot access resources until you renew or convert the subscription.',
            answers: [
                { content: 'Resources are deleted immediately', isCorrect: false },
                { content: 'Resources are disabled and access is cut off', isCorrect: true },
                { content: 'Resources continue to run normally but cost double', isCorrect: false },
                { content: 'Microsoft will back up your resources for free forever', isCorrect: false },
            ],
        },
        {
            content: 'What is the benefit of grouping subscriptions into Management Groups?',
            explanation: 'It allows applying consistent governance policies to all sub-level subscriptions quickly.',
            answers: [
                { content: 'Reduces VM startup time', isCorrect: false },
                { content: 'Applies policies and governance at scale', isCorrect: true },
                { content: 'Speeds up data backup', isCorrect: false },
                { content: 'Reduces network costs', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure tool helps monitor the health status of the specific Azure data center where your resources are running?',
            explanation: 'Azure Resource Health helps you diagnose and get support when a service issue directly affects your specific resources.',
            answers: [
                { content: 'Azure Monitor', isCorrect: false },
                { content: 'Azure Resource Health', isCorrect: true },
                { content: 'Azure Service Health', isCorrect: false },
                { content: 'Azure Advisor', isCorrect: false },
            ],
        },
        {
            content: 'Can you change the Subscription for a resource after it has been created?',
            explanation: 'Yes, most Azure resources can be moved from one Subscription to another within the same Tenant.',
            answers: [
                { content: 'Never', isCorrect: false },
                { content: 'Yes, for most resource types', isCorrect: true },
                { content: 'Only when using Azure CLI', isCorrect: false },
                { content: 'Only when both Subscriptions are free', isCorrect: false },
            ],
        },
        {
            content: 'Why does assigning "Contributor" permission at the Resource Group level allow the user to manage all virtual machines inside that Resource Group?',
            explanation: 'In Azure RBAC, permissions are inherited from higher levels to lower levels (Hierarchy inheritance).',
            answers: [
                { content: 'Because virtual machines always have higher permissions', isCorrect: false },
                { content: 'Because permission settings are inherited from the parent level', isCorrect: true },
                { content: 'Because Resource Group is not important', isCorrect: false },
                { content: 'Because Contributor is the root permission', isCorrect: false },
            ],
        },
        {
            content: 'If you have a global website and want to route users to the nearest server based on network latency, which service should you use?',
            explanation: 'Azure Traffic Manager is a DNS-based traffic dispatcher that supports performance routing.',
            answers: [
                { content: 'Azure Load Balancer', isCorrect: false },
                { content: 'Azure DNS', isCorrect: false },
                { content: 'Azure Traffic Manager', isCorrect: true },
                { content: 'Azure VPN Gateway', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure Blob Storage class has the highest data access latency?',
            explanation: 'The Archive tier is designed to store rarely used data; retrieval can take several hours.',
            answers: [
                { content: 'Hot tier', isCorrect: false },
                { content: 'Cool tier', isCorrect: false },
                { content: 'Archive tier', isCorrect: true },
                { content: 'Premium tier', isCorrect: false },
            ],
        },
        {
            content: 'What does Azure AD Connect do?',
            explanation: 'It synchronizes identities (users/groups) from your on-premises Active Directory to Azure AD in the cloud.',
            answers: [
                { content: 'Connect two VNets together', isCorrect: false },
                { content: 'Synchronize identities between on-premises and cloud', isCorrect: true },
                { content: 'Back up VM data', isCorrect: false },
                { content: 'Encrypt Internet connections', isCorrect: false },
            ],
        },
        {
            content: 'What does the "SLA summary for Azure services" document provide?',
            explanation: 'It summarizes the commitments regarding uptime and connectivity for each specific Azure service.',
            answers: [
                { content: 'Windows installation guide', isCorrect: false },
                { content: 'Official service level commitments from Microsoft', isCorrect: true },
                { content: 'Service pricing', isCorrect: false },
                { content: 'Information about hard drives in data centers', isCorrect: false },
            ],
        },
        {
            content: 'A customer received an alert that they have spent 80% of their Azure budget. Which tool sent this alert?',
            explanation: 'Azure Budgets (part of Azure Cost Management) allows you to set thresholds and receive alerts.',
            answers: [
                { content: 'Azure Monitor', isCorrect: false },
                { content: 'Azure Budgets', isCorrect: true },
                { content: 'Azure Advisor', isCorrect: false },
                { content: 'Azure SQL Insights', isCorrect: false },
            ],
        },
        {
            content: 'Which cloud service type does Azure SQL Database belong to?',
            explanation: 'Azure SQL Database is a fully managed relational database; customers do not need to manage the operating system or server (PaaS).',
            answers: [
                { content: 'IaaS', isCorrect: false },
                { content: 'PaaS', isCorrect: true },
                { content: 'SaaS', isCorrect: false },
                { content: 'FaaS', isCorrect: false },
            ],
        },
        {
            content: 'What does the term "High Availability" guarantee for a system?',
            explanation: 'It ensures the system has the ability to operate continuously for a long time with minimal downtime.',
            answers: [
                { content: 'Ensures the system is the cheapest', isCorrect: false },
                { content: 'Ensures maximum continuous uptime', isCorrect: true },
                { content: 'Ensures data is encrypted with the strongest encryption', isCorrect: false },
                { content: 'Ensures the application has the most features', isCorrect: false },
            ],
        },
        {
            content: 'When using Public Cloud, who owns the physical hardware infrastructure?',
            explanation: 'In Public Cloud, the cloud provider (such as Microsoft) owns and manages the entire hardware infrastructure.',
            answers: [
                { content: 'The customer', isCorrect: false },
                { content: 'Both the customer and Microsoft', isCorrect: false },
                { content: 'The Cloud provider (Microsoft)', isCorrect: true },
                { content: 'Government organizations', isCorrect: false },
            ],
        },
        {
            content: 'What does Azure Virtual Network (VNet) allow?',
            explanation: 'VNet allows Azure resources (such as VMs) to securely communicate with each other, with the Internet, and with on-premises networks.',
            answers: [
                { content: 'Communication with the Internet only', isCorrect: false },
                { content: 'Communication between Azure resources, Internet, and on-premises', isCorrect: true },
                { content: 'File storage only', isCorrect: false },
                { content: 'Operating system for computers', isCorrect: false },
            ],
        },
        {
            content: 'Which service helps automate the assignment of policies, RBAC roles, and ARM templates for new subscriptions?',
            explanation: 'Azure Blueprints combines these components into a package for deploying standards to new environments.',
            answers: [
                { content: 'Azure Resource Manager', isCorrect: false },
                { content: 'Azure Blueprints', isCorrect: true },
                { content: 'Azure Advisor', isCorrect: false },
                { content: 'Azure Security Center', isCorrect: false },
            ],
        },
        {
            content: 'What is the characteristic of CapEx (Capital Expenditure)?',
            explanation: 'CapEx is a large upfront investment in physical infrastructure, which is then depreciated over time.',
            answers: [
                { content: 'Pay per monthly usage', isCorrect: false },
                { content: 'One-time investment in physical assets', isCorrect: true },
                { content: 'Flexible variable costs', isCorrect: false },
                { content: 'Cannot be predicted', isCorrect: false },
            ],
        },
        {
            content: 'What is the biggest benefit of switching from CapEx to OpEx (Operational Expenditure)?',
            explanation: 'Rationalize costs, only pay for what you actually use, giving businesses financial flexibility.',
            answers: [
                { content: 'Own more equipment', isCorrect: false },
                { content: 'Pay for resources on demand and have budget flexibility', isCorrect: true },
                { content: 'Reduce technical staff', isCorrect: false },
                { content: 'Make the system more secure', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Resource Manager, what does "Idempotency" mean?',
            explanation: 'It means you can deploy the same template multiple times and always achieve the same resource state without breaking the system.',
            answers: [
                { content: 'Encrypting data twice', isCorrect: false },
                { content: 'Repeated deployment produces the same state result', isCorrect: true },
                { content: 'Automatically deleting old resources', isCorrect: false },
                { content: 'Periodically changing passwords', isCorrect: false },
            ],
        },
        {
            content: 'Can Azure Advisor provide recommendations about "Sustainability"?',
            explanation: 'Yes, Microsoft has integrated sustainability recommendations to help reduce the carbon footprint of cloud infrastructure.',
            answers: [
                { content: 'Never', isCorrect: false },
                { content: 'Yes, including guidance on reducing environmental impact', isCorrect: true },
                { content: 'Only for non-governmental organizations', isCorrect: false },
                { content: 'Still in development and not yet available', isCorrect: false },
            ],
        },
        {
            content: 'What types of failures does an "Availability Set" in Azure protect your virtual machines from?',
            explanation: 'Availability Set protects against local hardware failures within the same data center through Fault Domain and Update Domain.',
            answers: [
                { content: 'Region-wide power outage', isCorrect: false },
                { content: 'Disk failure or network switch failure within the data center', isCorrect: true },
                { content: 'Attacker accessing Azure portal', isCorrect: false },
                { content: 'Client operating system update', isCorrect: false },
            ],
        },
        {
            content: 'If an Azure virtual machine is deleted, is the data on its OS Disk deleted by default as well?',
            explanation: 'In Azure, disks are separate resources. By default, you can choose to keep the disk even when deleting the VM to attach it to another VM later.',
            answers: [
                { content: 'Always deleted', isCorrect: false },
                { content: 'Can be retained depending on configuration settings', isCorrect: true },
                { content: 'Always stored permanently', isCorrect: false },
                { content: 'Only deleted if using an SSD disk', isCorrect: false },
            ],
        },
        {
            content: 'Why is assigning "Tags" to resources important for enterprise accounting?',
            explanation: 'Tags allow the accounting department to accurately allocate cloud costs to specific departments or projects.',
            answers: [
                { content: 'Makes resources run faster', isCorrect: false },
                { content: 'Helps categorize and report costs (Cost Allocation)', isCorrect: true },
                { content: 'Enhances login security', isCorrect: false },
                { content: 'Replaces resource naming', isCorrect: false },
            ],
        },
    ],
};
