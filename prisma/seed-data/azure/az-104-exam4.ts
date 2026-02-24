export const az104Exam4 = {
    title: 'Azure Administrator AZ-104 - Practice Test 4',
    description: 'Azure Administrator AZ-104 Practice Test summarizing all Azure administration skills.',
    durationMinutes: 120,
    courseId: 8,
    questions: [
        {
            content: 'You need to move a set of resources from ResourceGroup1 to ResourceGroup2. Which of the following resources CANNOT be moved?',
            explanation: 'Some resources like Azure AD Domain Services or certain types of Gateways may have restrictions or do not support moving between Resource Groups.',
            answers: [
                { content: 'Virtual Machines', isCorrect: false },
                { content: 'Storage Accounts', isCorrect: false },
                { content: 'Certain types of Virtual Network Gateways (depending on configuration)', isCorrect: true },
                { content: 'Managed Disks', isCorrect: false },
            ],
        },
        {
            content: 'What factor does the "Dynamic Groups" feature in Azure AD allow adding members based on?',
            explanation: 'Dynamic Groups automatically add or remove members based on user attributes (e.g., Job Title, Department) through query rules.',
            answers: [
                { content: 'Manually added by an Admin', isCorrect: false },
                { content: 'Based on user attribute rules (Attribute-based rules)', isCorrect: true },
                { content: 'Based on login time', isCorrect: false },
                { content: 'Based on the number of emails sent', isCorrect: false },
            ],
        },
        {
            content: 'To assign permissions so an application running on a VM can read data from an Azure SQL Database without using a password, what is the best solution?',
            explanation: 'Use a Managed Identity for the VM and grant that identity access to the SQL Database.',
            answers: [
                { content: 'Store the password in environment variables', isCorrect: false },
                { content: 'Use a Managed Identity', isCorrect: true },
                { content: 'Use an App Service Certificate', isCorrect: false },
                { content: 'Assign permissions to all Users', isCorrect: false },
            ],
        },
        {
            content: 'The "Alert Logic" setting in Azure Monitor supports "Dynamic Thresholds". How does it differ from Static Thresholds?',
            explanation: 'Dynamic Thresholds use Machine Learning to automatically determine thresholds based on historical data and change over time.',
            answers: [
                { content: 'It is cheaper', isCorrect: false },
                { content: 'It automatically adjusts thresholds based on historical data patterns', isCorrect: true },
                { content: 'It is only for Windows', isCorrect: false },
                { content: 'There is no difference', isCorrect: false },
            ],
        },
        {
            content: 'You have Azure Blob Storage. You want to set it up so that 30 days after creation, files are automatically moved to the Cool tier, and after 180 days, they are deleted. What do you use?',
            explanation: 'Azure Storage Lifecycle Management allows defining rules to automate the data lifecycle.',
            answers: [
                { content: 'Azure Functions', isCorrect: false },
                { content: 'Lifecycle Management policies', isCorrect: true },
                { content: 'Azure Automation', isCorrect: false },
                { content: 'AzCopy', isCorrect: false },
            ],
        },
        {
            content: 'When using Azure Files, how does the "Cloud Tiering" feature help save disk space on an on-premises server?',
            explanation: 'It only keeps frequently accessed files on the local server; old/rarely used files are only stored in Azure (keeping a local pointer file).',
            answers: [
                { content: 'Compresses all files', isCorrect: false },
                { content: 'Stores infrequently accessed files on the cloud instead of a local disk', isCorrect: true },
                { content: 'Removes duplicate files', isCorrect: false },
                { content: 'Reduces image quality', isCorrect: false },
            ],
        },
        {
            content: 'Which protocol is used by Azure Bastion to transmit data between your browser and the Bastion portal?',
            explanation: 'The entire session is encapsulated over HTTPS (SSL/TLS) on port 443.',
            answers: [
                { content: 'RDP', isCorrect: false },
                { content: 'SSH', isCorrect: false },
                { content: 'HTTPS', isCorrect: true },
                { content: 'FTP', isCorrect: false },
            ],
        },
        {
            content: 'You want to deploy a Web application with extremely high availability (Global HA) and want users always connected to the nearest data center. What should you choose?',
            explanation: 'Azure Front Door provides global Layer 7 load balancing with latency-based routing.',
            answers: [
                { content: 'Azure Load Balancer', isCorrect: false },
                { content: 'Azure Front Door', isCorrect: true },
                { content: 'Azure Application Gateway', isCorrect: false },
                { content: 'VPN Gateway', isCorrect: false },
            ],
        },
        {
            content: 'What is the "VNet Injection" feature of Azure App Service used for?',
            explanation: 'It allows Web applications (SaaS/PaaS) to access resources located inside an internal virtual network (VNet).',
            answers: [
                { content: 'Speed up the internet', isCorrect: false },
                { content: 'Allows App Service to access resources in a VNet', isCorrect: true },
                { content: 'Encrypt websites', isCorrect: false },
                { content: 'Back up applications', isCorrect: false },
            ],
        },
        {
            content: 'In an Azure Virtual Network, what is the IP address range 168.63.129.16 used for?',
            explanation: 'This is a special Microsoft virtual IP address used to communicate with infrastructure services like DNS, DHCP, and Health Probes.',
            answers: [
                { content: 'Google\'s IP address', isCorrect: false },
                { content: 'Microsoft infrastructure IP address for VNet services', isCorrect: true },
                { content: 'A user\'s IP address', isCorrect: false },
                { content: 'A hacker\'s IP address', isCorrect: false },
            ],
        },
        {
            content: 'When peering two VNets, is there a charge for the traffic between them?',
            explanation: 'Yes, both inbound (Ingress) and outbound (Egress) traffic for VNet Peering are charged by volume (GB).',
            answers: [
                { content: 'Completely free', isCorrect: false },
                { content: 'Charges for both Ingress and Egress traffic', isCorrect: true },
                { content: 'Only charged when traffic exceeds 1TB', isCorrect: false },
                { content: 'Only charged for Windows virtual machines', isCorrect: false },
            ],
        },
        {
            content: 'You need to assign an IPv6 address to an Azure virtual machine. How does Azure support this network configuration?',
            explanation: 'Azure supports "Dual Stack" (v4 and v6 simultaneously) on the same Network Interface.',
            answers: [
                { content: 'Only supports pure IPv6', isCorrect: false },
                { content: 'Supports Dual Stack (IPv4 and IPv6)', isCorrect: true },
                { content: 'Does not support IPv6', isCorrect: false },
                { content: 'Only supports IPv6 on Linux', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Application Gateway, "Web Application Firewall (WAF)" provides protection based on which standard?',
            explanation: 'WAF on Azure is based on the core rule sets from the OWASP (Open Web Application Security Project) project.',
            answers: [
                { content: 'ISO 27001', isCorrect: false },
                { content: 'OWASP Core Rule Sets', isCorrect: true },
                { content: 'Microsoft Rules', isCorrect: false },
                { content: 'Cisco Security', isCorrect: false },
            ],
        },
        {
            content: 'When configuring Azure Site Recovery, what does "Failover" mean?',
            explanation: 'It is the action of switching operations from the primary region to the secondary region when the primary region fails.',
            answers: [
                { content: 'Shut down the system completely', isCorrect: false },
                { content: 'Switch operations to the backup environment', isCorrect: true },
                { content: 'Delete all erroneous data', isCorrect: false },
                { content: 'Upgrade hardware', isCorrect: false },
            ],
        },
        {
            content: 'What does the Azure Backup Center help administrators do?',
            explanation: 'It provides a centralized management interface for all backup activities across multiple Subscriptions, Regions, and Tenants.',
            answers: [
                { content: 'Single interface to manage all backup activities', isCorrect: true },
                { content: 'Install Office software', isCorrect: false },
                { content: 'Chat with support staff', isCorrect: false },
                { content: 'View electricity bills', isCorrect: false },
            ],
        },
        {
            content: 'You assign an Azure Policy at the Subscription level. How will new resources created thereafter be affected?',
            explanation: 'All new resources will immediately have to comply with this policy. If violated, depending on the effect (Deny/Audit), the resource will be blocked or logged.',
            answers: [
                { content: 'No effect', isCorrect: false },
                { content: 'Affected immediately (Inheritance)', isCorrect: true },
                { content: 'Only affected after 24 hours', isCorrect: false },
                { content: 'Requires individual admin confirmation', isCorrect: false },
            ],
        },
        {
            content: 'What action does the "User Access Administrator" role allow you to perform?',
            explanation: 'This role allows managing user access to Azure resources (assigning RBAC roles) but does not have the authority to manage the resources themselves.',
            answers: [
                { content: 'Create virtual machines', isCorrect: false },
                { content: 'Manage permission assignments (RBAC assignments)', isCorrect: true },
                { content: 'Delete Storage Accounts', isCorrect: false },
                { content: 'Change admin passwords', isCorrect: false },
            ],
        },
        {
            content: 'What is Azure AD "Entitlement Management" used for?',
            explanation: 'It is used to automate access request, approval, and expiration processes for users inside and outside the organization.',
            answers: [
                { content: 'Manage the access lifecycle and resource packages (Access Packages)', isCorrect: true },
                { content: 'Manage salaries', isCorrect: false },
                { content: 'Manage virtual servers', isCorrect: false },
                { content: 'Encrypt hard drives', isCorrect: false },
            ],
        },
        {
            content: 'To allow users to log in to Azure using their own on-premises Active Directory accounts without password synchronization, which authentication method should you use?',
            explanation: 'Pass-through Authentication (PTA) allows direct authentication with on-premises AD via lightweight agents.',
            answers: [
                { content: 'Password Hash Sync', isCorrect: false },
                { content: 'Pass-through Authentication (PTA)', isCorrect: true },
                { content: 'Single Sign-On', isCorrect: false },
                { content: 'OAuth 2.0', isCorrect: false },
            ],
        },
        {
            content: 'What is the Azure AD Connect Health tool used for?',
            explanation: 'It helps monitor and provide insight into the health of the on-premises identity infrastructure (AD FS, AD Connect sync).',
            answers: [
                { content: 'Install AD servers', isCorrect: false },
                { content: 'Monitor hybrid identity infrastructure', isCorrect: true },
                { content: 'Fix Windows errors', isCorrect: false },
                { content: 'Manage subscriptions', isCorrect: false },
            ],
        },
        {
            content: 'What is the outstanding characteristic of the "B-series" virtual machine size?',
            explanation: 'The B-series (Burstable) allows virtual machines to have a low baseline CPU usage but can burst to higher levels when needed, helping save costs.',
            answers: [
                { content: 'Cheapest and offers burstable performance (Burstable CPU)', isCorrect: true },
                { content: 'Most powerful for 3D games', isCorrect: false },
                { content: 'Always runs at 100% CPU', isCorrect: false },
                { content: 'No hard drives', isCorrect: false },
            ],
        },
        {
            content: 'When a virtual machine "Scale Set" is performing a "Scale-in" (reducing the number of VMs), how can a specific instance be protected from being deleted?',
            explanation: 'Use the "Instance Protection" (Scale-in policy) feature to mark important instances.',
            answers: [
                { content: 'Assign a Tag to it', isCorrect: false },
                { content: 'Use Instance Protection', isCorrect: true },
                { content: 'Set a password for the VM', isCorrect: false },
                { content: 'Turn off that VM\'s internet', isCorrect: false },
            ],
        },
        {
            content: 'You want to create a copy of a running OS disk to create a new virtual machine. What should you do first?',
            explanation: 'Create a Managed Snapshot of that disk to have a static copy at a specific point in time.',
            answers: [
                { content: 'Shut down the VM', isCorrect: false },
                { content: 'Create a Managed Snapshot', isCorrect: true },
                { content: 'Delete the VM', isCorrect: false },
                { content: 'Copy the .vhd file', isCorrect: false },
            ],
        },
        {
            content: 'What type of scaling does Azure Kubernetes Service (AKS) support?',
            explanation: 'AKS supports Horizontal Pod Autoscaler (adding pods) and Cluster Autoscaler (adding nodes).',
            answers: [
                { content: 'Only adding Pods', isCorrect: false },
                { content: 'Both Pod scaling and Node scaling', isCorrect: true },
                { content: 'Only changing RAM', isCorrect: false },
                { content: 'Cannot auto-scale', isCorrect: false },
            ],
        },
        {
            content: 'What happens to data in Azure Blob Storage (LRS) if the data center fails completely?',
            explanation: 'The data is at risk of being permanently lost because LRS only backs up 3 copies within a single data center.',
            answers: [
                { content: 'Data is still safe in another region', isCorrect: false },
                { content: 'Data could be permanently lost', isCorrect: true },
                { content: 'Microsoft will send you hard disks', isCorrect: false },
                { content: 'The system automatically recovers after 1 minute', isCorrect: false },
            ],
        },
        {
            content: 'To connect securely from a developer\'s personal computer (working from home) to an Azure VNet, which type of VPN should you use?',
            explanation: 'Point-to-Site (P2S) VPN is for intermittent connections from individual personal devices to the virtual network.',
            answers: [
                { content: 'Site-to-Site VPN', isCorrect: false },
                { content: 'Point-to-Site VPN', isCorrect: true },
                { content: 'ExpressRoute', isCorrect: false },
                { content: 'VNet Peering', isCorrect: false },
            ],
        },
        {
            content: 'Which feature does the Azure Firewall Standard service support to filter traffic based on domain names?',
            explanation: 'FQDN (Fully Qualified Domain Name) filtering allows you to allow/block access to specific domain names (e.g., microsoft.com).',
            answers: [
                { content: 'Edit the hosts file', isCorrect: false },
                { content: 'FQDN filtering', isCorrect: true },
                { content: 'Block MAC addresses', isCorrect: false },
                { content: 'Block IPs only', isCorrect: false },
            ],
        },
        {
            content: 'Your virtual network has a Default Gateway, but you want traffic going to 8.8.8.8 to pass through a VPN Gateway. What do you configure?',
            explanation: 'Create a Route Table with a rule for 8.8.8.8/32 with a Next Hop of Virtual Network Gateway.',
            answers: [
                { content: 'NSG Rule', isCorrect: false },
                { content: 'User-Defined Route (UDR)', isCorrect: true },
                { content: 'VNet Peering', isCorrect: false },
                { content: 'Azure Policy', isCorrect: false },
            ],
        },
        {
            content: 'In an Azure Public Load Balancer, what is "Front-end IP Configuration"?',
            explanation: 'It is the public IP address that external users use to connect to your service.',
            answers: [
                { content: 'IP of the Backend server', isCorrect: false },
                { content: 'Public IP address receiving inbound traffic', isCorrect: true },
                { content: 'Service provider\'s IP address', isCorrect: false },
                { content: 'System password', isCorrect: false },
            ],
        },
        {
            content: 'When using Azure Application Gateway, can you deploy multiple websites (e.g., a.com and b.com) on the same Gateway?',
            explanation: 'Yes, the "Multi-site hosting" feature allows processing multiple domains based on Host headers.',
            answers: [
                { content: 'No, one domain per Gateway', isCorrect: false },
                { content: 'Yes, via Multi-site Listeners', isCorrect: true },
                { content: 'Only when using a static IP', isCorrect: false },
                { content: 'Only supports up to 2 pages', isCorrect: false },
            ],
        },
        {
            content: 'What does the "Connection Monitor" tool in Network Watcher help you monitor?',
            explanation: 'It monitors continuous connectivity and latency between two endpoints (e.g., from a VM to SQL or from Azure to on-premises).',
            answers: [
                { content: 'Hard disk rotation speed', isCorrect: false },
                { content: 'Connectivity and network latency between endpoints', isCorrect: true },
                { content: 'Free RAM capacity', isCorrect: false },
                { content: 'Number of online users', isCorrect: false },
            ],
        },
        {
            content: 'When configuring Azure Backup for SQL Server running on an Azure VM, where is the backup stored?',
            explanation: 'It is still securely stored and managed in the Recovery Services Vault.',
            answers: [
                { content: 'In a .bak file on the C: drive', isCorrect: false },
                { content: 'In the Recovery Services Vault', isCorrect: true },
                { content: 'Sent via admin email', isCorrect: false },
                { content: 'Stored on GitHub', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Site Recovery, what does the "Churn Rate" period mean?',
            explanation: 'It is the rate of data change on the disk. it affects the network bandwidth needed to sync data to the backup Region.',
            answers: [
                { content: 'Time the VM is down', isCorrect: false },
                { content: 'Rate of data change on disk (Data change rate)', isCorrect: true },
                { content: 'Price of a VM', isCorrect: false },
                { content: 'Maximum number of disks', isCorrect: false },
            ],
        },
        {
            content: 'How does locking a Subscription affect the Resource Groups underneath?',
            explanation: 'The lock is inherited down to all child resources of that Subscription.',
            answers: [
                { content: 'No effect', isCorrect: false },
                { content: 'All Resource Groups are locked accordingly (Inheritance)', isCorrect: true },
                { content: 'Only affects Storage Accounts', isCorrect: false },
                { content: 'The lock must be manually assigned to each one', isCorrect: false },
            ],
        },
        {
            content: 'How does Azure AD Premium P1 differ from the Free version in which of the following key features?',
            explanation: 'P1 supports Conditional Access, MFA (advanced), and Dynamic Groups.',
            answers: [
                { content: 'Only P1 can create Users', isCorrect: false },
                { content: 'P1 supports Conditional Access and Group-based licensing', isCorrect: true },
                { content: 'P1 is completely free', isCorrect: false },
                { content: 'P1 is only for Microsoft 365', isCorrect: false },
            ],
        },
        {
            content: 'To automatically remove access for external partners after a project ends, which feature should you use?',
            explanation: 'Azure AD Access Reviews allow setting access durations and automatically revoking permissions if not re-approved.',
            answers: [
                { content: 'Change password', isCorrect: false },
                { content: 'Access Reviews with duration settings', isCorrect: true },
                { content: 'Azure Policy', isCorrect: false },
                { content: 'Manual daily deletion', isCorrect: false },
            ],
        },
        {
            content: 'How can "Tagging" resources help with Automation?',
            explanation: 'Automation scripts (like Python/PowerShell) can filter resources based on Tags to perform bulk actions (e.g., shut down all machines with the tag "Env:Dev").',
            answers: [
                { content: 'Tags make code run faster', isCorrect: false },
                { content: 'Helps scripts identify and operate on the correct group of resources', isCorrect: true },
                { content: 'Tags increase network bandwidth', isCorrect: false },
                { content: 'Tags replace security certificates', isCorrect: false },
            ],
        },
        {
            content: 'When viewing "Monitor Alerts", what does the "Fired" state mean?',
            explanation: 'It means the alert condition has been met and the system has sent the corresponding notification/action.',
            answers: [
                { content: 'Error has been fixed', isCorrect: false },
                { content: 'Alert is being triggered', isCorrect: true },
                { content: 'Alert has been deleted', isCorrect: false },
                { content: 'System is starting up', isCorrect: false },
            ],
        },
        {
            content: 'Which tool do you use to monitor Azure costs in real-time and get forecasts for the end of the month?',
            explanation: 'Azure Cost Management provides detailed Dashboards and cost forecasting capabilities.',
            answers: [
                { content: 'Azure Monitor', isCorrect: false },
                { content: 'Azure Cost Management', isCorrect: true },
                { content: 'Azure Advisor', isCorrect: false },
                { content: 'Azure Policy', isCorrect: false },
            ],
        },
        {
            content: 'How do Azure Storage "Blob Index Tags" help in data management?',
            explanation: 'They allow you to attach keyword attributes to blobs to easily search for and filter millions of blobs without manually listing them.',
            answers: [
                { content: 'Speed up upload', isCorrect: false },
                { content: 'Provide the ability to search and categorize blobs based on metadata', isCorrect: true },
                { content: 'Compress data', isCorrect: false },
                { content: 'Encrypt data', isCorrect: false },
            ],
        },
        {
            content: 'A "Private Endpoint" connects to a Storage service via Azure\'s backbone network. What happens to that Storage\'s public internet endpoint?',
            explanation: 'You can (and should) configure the Firewall to completely block access from the public internet, only allowing traffic through the Private Endpoint.',
            answers: [
                { content: 'Public endpoint automatically disappears', isCorrect: false },
                { content: 'Public endpoint still exists but you can block it with a Firewall', isCorrect: true },
                { content: 'It makes your home internet faster', isCorrect: false },
                { content: 'It will automatically change to Google\'s IP', isCorrect: false },
            ],
        },
        {
            content: 'In Azure VPN Gateway, which SKU supports the Active-Active configuration to increase reliability?',
            explanation: 'Most modern SKUs (VpnGw1 and above) support the Active-Active mode for higher availability.',
            answers: [
                { content: 'Basic', isCorrect: false },
                { content: 'Most SKUs except the Basic version', isCorrect: true },
                { content: 'Only the most expensive version', isCorrect: false },
                { content: 'Active-Active is not supported', isCorrect: false },
            ],
        },
        {
            content: 'When creating a Subnet, can you change the IP address range of that Subnet after it already contains resources?',
            explanation: 'No, you usually have to delete the resources inside or delete the subnet to recreate it with a new address range.',
            answers: [
                { content: 'Yes, anytime', isCorrect: false },
                { content: 'No, the subnet IP range is fixed once it contains resources', isCorrect: true },
                { content: 'Only when using PowerShell', isCorrect: false },
                { content: 'Only when using Linux', isCorrect: false },
            ],
        },
        {
            content: 'What is the benefit of using "Azure Resource Graph" over browsing and searching in the Portal?',
            explanation: 'It allows you to run complex queries at scale to search for resources across multiple Subscriptions extremely quickly.',
            answers: [
                { content: 'It is cheaper', isCorrect: false },
                { content: 'Query resources at scale with extremely high speed', isCorrect: true },
                { content: 'Autofix VM errors', isCorrect: false },
                { content: 'Replace the use of passwords', isCorrect: false },
            ],
        },
        {
            content: 'What is the "Generalizing" or "Sysprep" action on a Windows virtual machine used for?',
            explanation: 'To remove unique identifying information (SID, Computer name) from that VM, turning it into a template image to create many other VMs.',
            answers: [
                { content: 'To speed up the CPU', isCorrect: false },
                { content: 'To prepare to create a template image from a virtual machine', isCorrect: true },
                { content: 'To install video card drivers', isCorrect: false },
                { content: 'To back up data', isCorrect: false },
            ],
        },
        {
            content: 'In Azure App Service, what are "WebJobs" used for?',
            explanation: 'To run background tasks such as processing files or sending emails simultaneously with your web application.',
            answers: [
                { content: 'Build web interfaces', isCorrect: false },
                { content: 'Run programs or background scripts', isCorrect: true },
                { content: 'Manage databases', isCorrect: false },
                { content: 'Manage DNS', isCorrect: false },
            ],
        },
        {
            content: 'What is the biggest limitation of the "Basic Load Balancer" in Azure?',
            explanation: 'It does not support Availability Zones and is not as secure as the Standard Load Balancer (opens ports by default).',
            answers: [
                { content: 'Consumes a lot of electricity', isCorrect: false },
                { content: 'Does not support Availability Zones and advanced security features', isCorrect: true },
                { content: 'Can only run for 1 hour', isCorrect: false },
                { content: 'Only supports IBM servers', isCorrect: false },
            ],
        },
        {
            content: 'Which methods does the Azure AD "Passwordless authentication" service support?',
            explanation: 'Supports Windows Hello for Business, Microsoft Authenticator app (Phone sign-in), and FIDO2 security keys.',
            answers: [
                { content: 'Windows Hello only', isCorrect: false },
                { content: 'Windows Hello, Authenticator app, and FIDO2 keys', isCorrect: true },
                { content: 'Fingerprint scanning only', isCorrect: false },
                { content: 'Sending a code via SMS', isCorrect: false },
            ],
        },
        {
            content: 'When encountering a problem with an Azure virtual machine that cannot be RDP-ed into, how does the "Serial Console" tool help?',
            explanation: 'It provides direct command-line access to the VM\'s operating system without going through the network (like plugging a monitor directly into the server).',
            answers: [
                { content: 'Makes the machine run faster', isCorrect: false },
                { content: 'Direct command-line access to fix errors when network connection is lost', isCorrect: true },
                { content: 'Watch movies on the VM', isCorrect: false },
                { content: 'Backup data via USB', isCorrect: false },
            ],
        },
        {
            content: 'You assign a "Deny" assignment in Azure Blueprint. What effect does this have compared to regular RBAC?',
            explanation: 'A Blueprint Deny rule has the highest priority; it prevents even a person with Owner permissions from modifying/deleting protected resources.',
            answers: [
                { content: 'No additional effect', isCorrect: false },
                { content: 'Prevents all changes even by those with Owner permissions', isCorrect: true },
                { content: 'Only prevents regular users', isCorrect: false },
                { content: 'Only used for reporting', isCorrect: false },
            ],
        },
    ],
};
