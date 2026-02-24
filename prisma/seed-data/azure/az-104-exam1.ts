export const az104Exam1 = {
    title: 'Azure Administrator AZ-104 - Practice Test 1',
    description: 'Azure Administrator AZ-104 Practice Test with 55 questions on Identity, Governance, Storage, and Networking.',
    durationMinutes: 120,
    courseId: 8,
    questions: [
        {
            content: 'Your organization has an Azure AD tenant. You need to grant permissions to an external partner so they can manage virtual machines in a specific Resource Group. Which feature should you use?',
            explanation: 'Azure AD B2B collaboration allows you to invite guest users from other organizations and grant them permissions via RBAC.',
            answers: [
                { content: 'Azure AD B2C', isCorrect: false },
                { content: 'Azure AD B2B guest user access', isCorrect: true },
                { content: 'Managed Identities', isCorrect: false },
                { content: 'Conditional Access', isCorrect: false },
            ],
        },
        {
            content: 'You have a virtual machine running Windows Server. You want to assign an identity to this virtual machine so it can access Azure Key Vault without storing credentials in the source code. What should you use?',
            explanation: 'System-assigned Managed Identity allows an Azure resource to authenticate itself with other services that support Azure AD authentication without managing credentials.',
            answers: [
                { content: 'Service Principal', isCorrect: false },
                { content: 'System-assigned Managed Identity', isCorrect: true },
                { content: 'Shared Access Signature (SAS)', isCorrect: false },
                { content: 'User-assigned Managed Identity', isCorrect: false },
            ],
        },
        {
            content: 'You need to enforce a security configuration so that all disks of newly created virtual machines must be encrypted. Which tool helps you perform this automated check and enforcement?',
            explanation: 'Azure Policy can be configured with a "Deny" or "DeployIfNotExists" effect to ensure compliance with disk encryption standards.',
            answers: [
                { content: 'Azure RBAC', isCorrect: false },
                { content: 'Azure Policy', isCorrect: true },
                { content: 'Azure Blueprints', isCorrect: false },
                { content: 'Azure Advisor', isCorrect: false },
            ],
        },
        {
            content: 'You want to prevent the accidental deletion of a critical Storage Account, even by an administrator with Owner permissions. What should you configure?',
            explanation: 'A Resource Lock with the "CanNotDelete" type prevents the deletion of the resource until the lock is removed.',
            answers: [
                { content: 'Azure Policy', isCorrect: false },
                { content: 'Resource Lock (Delete)', isCorrect: true },
                { content: 'RBAC Reader role', isCorrect: false },
                { content: 'Conditional Access', isCorrect: false },
            ],
        },
        {
            content: 'You have 10 different Subscriptions and want to apply the same set of security policies to all of them. What is the most efficient way to organize this?',
            explanation: 'Using Management Groups helps you group Subscriptions and apply Policies or RBAC at a higher level in the hierarchy.',
            answers: [
                { content: 'Manually assign to each Subscription', isCorrect: false },
                { content: 'Use Management Groups', isCorrect: true },
                { content: 'Combine 10 Subscriptions into 1', isCorrect: false },
                { content: 'Use Azure Tags', isCorrect: false },
            ],
        },
        {
            content: 'What does Azure AD Self-Service Password Reset (SSPR) require for users to be able to reset their own passwords?',
            explanation: 'Users must register authentication methods (such as email, phone) before they can use SSPR.',
            answers: [
                { content: 'Users must call the Admin', isCorrect: false },
                { content: 'Users must register authentication methods beforehand', isCorrect: true },
                { content: 'Users must use a company computer', isCorrect: false },
                { content: 'Admin must grant permission for each reset', isCorrect: false },
            ],
        },
        {
            content: 'You need to copy a large amount of data (20 TB) from an on-premises server to Azure Blob Storage over the Internet. Which command-line tool is most optimal for this?',
            explanation: 'AzCopy is a command-line tool optimized for uploading/downloading large data in Azure Storage with high performance.',
            answers: [
                { content: 'Azure Portal', isCorrect: false },
                { content: 'AzCopy', isCorrect: true },
                { content: 'Storage Explorer', isCorrect: false },
                { content: 'PowerShell Copy-Item', isCorrect: false },
            ],
        },
        {
            content: 'A Storage Account has a replication configuration of GRS (Geo-redundant storage). How many copies of data are maintained in total?',
            explanation: 'GRS maintains 3 copies in the primary region (LRS) and 3 copies in the linked secondary region (paired region), for a total of 6 copies.',
            answers: [
                { content: '3', isCorrect: false },
                { content: '4', isCorrect: false },
                { content: '6', isCorrect: true },
                { content: '9', isCorrect: false },
            ],
        },
        {
            content: 'You want to grant temporary access (e.g., for 2 hours) to an external application to upload a file to a blob container without providing the Storage Account Access Key. What should you use?',
            explanation: 'Shared Access Signature (SAS) allows granting time-limited and scope-limited access to storage resources.',
            answers: [
                { content: 'Storage Account Key', isCorrect: false },
                { content: 'Shared Access Signature (SAS)', isCorrect: true },
                { content: 'Azure AD login', isCorrect: false },
                { content: 'VPN Gateway', isCorrect: false },
            ],
        },
        {
            content: 'Which type of Storage Account supports premium features like the Premium Blob storage tier and has extremely low latency?',
            explanation: 'BlockBlobStorage accounts (Premium) are designed for scenarios requiring high performance and low latency.',
            answers: [
                { content: 'General-purpose v2', isCorrect: false },
                { content: 'Premium BlockBlobs', isCorrect: true },
                { content: 'General-purpose v1', isCorrect: false },
                { content: 'BlobStorage (Legacy)', isCorrect: false },
            ],
        },
        {
            content: 'What is Azure File Sync used for?',
            explanation: 'It synchronizes (caches) files from Azure Files down to on-premises Windows Servers to speed up local access.',
            answers: [
                { content: 'Back up SQL to the cloud', isCorrect: false },
                { content: 'Synchronize file shares between on-premises and Azure Files', isCorrect: true },
                { content: 'Encrypt VM disks', isCorrect: false },
                { content: 'Replace VPN', isCorrect: false },
            ],
        },
        {
            content: 'You need to deploy a cluster of virtual machines (VMs) to ensure that if a hardware rack in the data center fails, your application remains active. What should you use?',
            explanation: 'Availability Sets with multiple Fault Domains help spread VMs across different hardware racks.',
            answers: [
                { content: 'Availability Zones', isCorrect: false },
                { content: 'Availability Sets', isCorrect: true },
                { content: 'Scale Sets', isCorrect: false },
                { content: 'Classic Deployment', isCorrect: false },
            ],
        },
        {
            content: 'What is the main difference between Availability Sets and Availability Zones?',
            explanation: 'Availability Sets protect against failures within a single data center (rack/power), while Availability Zones protect against failures of an entire data center.',
            answers: [
                { content: 'Sets are more expensive than Zones', isCorrect: false },
                { content: 'Zones protect against data center level disasters (Data Center failure)', isCorrect: true },
                { content: 'Sets support more VMs', isCorrect: false },
                { content: 'There is no difference', isCorrect: false },
            ],
        },
        {
            content: 'You need to configure an automated solution to increase the number of virtual machines when the average CPU load exceeds 70%. Which Azure feature is most suitable?',
            explanation: 'Virtual Machine Scale Sets (VMSS) allow for automatically adjusting the number of VMs (Autoscale) based on performance metrics.',
            answers: [
                { content: 'Availability Set', isCorrect: false },
                { content: 'Virtual Machine Scale Sets (VMSS)', isCorrect: true },
                { content: 'Load Balancer', isCorrect: false },
                { content: 'Azure Functions', isCorrect: false },
            ],
        },
        {
            content: 'When creating a Windows VM, which tool is used to run post-deployment tasks such as automatic software installation?',
            explanation: 'Custom Script Extension allows you to run scripts (PowerShell, Python, etc.) inside the VM after it is created.',
            answers: [
                { content: 'ARM Template', isCorrect: false },
                { content: 'Custom Script Extension', isCorrect: true },
                { content: 'Initialization Script', isCorrect: false },
                { content: 'Azure Policy', isCorrect: false },
            ],
        },
        {
            content: 'What does an Azure App Service Plan determine for your web application?',
            explanation: 'An App Service Plan determines the set of compute resources (CPU, RAM, Storage) and features (SLA, scaling, etc.) for the application.',
            answers: [
                { content: 'The application\'s source code', isCorrect: false },
                { content: 'Compute resources and available features', isCorrect: true },
                { content: 'The website\'s domain name', isCorrect: false },
                { content: 'Database configuration', isCorrect: false },
            ],
        },
        {
            content: 'You have a virtual network (VNet1) with the address range 10.1.0.0/16. You need to create a new subnet. Which of the following address ranges is valid?',
            explanation: 'A subnet must be within the VNet\'s address range. 10.1.1.0/24 is completely within 10.1.0.0/16.',
            answers: [
                { content: '10.2.1.0/24', isCorrect: false },
                { content: '10.1.1.0/24', isCorrect: true },
                { content: '192.168.1.0/24', isCorrect: false },
                { content: '10.1.0.0/15', isCorrect: false },
            ],
        },
        {
            content: 'In an Azure Virtual Network, how many IP addresses are reserved by Microsoft in each subnet?',
            explanation: 'Microsoft reserves 5 IP addresses in each subnet: .0 (Network address), .1 (Default gateway), .2 and .3 (DNS), and the last address (Broadcast).',
            answers: [
                { content: '1', isCorrect: false },
                { content: '3', isCorrect: false },
                { content: '5', isCorrect: true },
                { content: '7', isCorrect: false },
            ],
        },
        {
            content: 'Which service allows connecting two VNets in the same or different Regions using Microsoft\'s backbone network?',
            explanation: 'Virtual Network Peering connects two VNets together with low latency and high bandwidth.',
            answers: [
                { content: 'VNet-to-VNet VPN', isCorrect: false },
                { content: 'Virtual Network Peering', isCorrect: true },
                { content: 'ExpressRoute', isCorrect: false },
                { content: 'Azure Bastion', isCorrect: false },
            ],
        },
        {
            content: 'To which objects can a Network Security Group (NSG) be assigned?',
            explanation: 'An NSG can be assigned to a VM\'s Network Interface (NIC) or directly to a Subnet.',
            answers: [
                { content: 'Subscription and Resource Group', isCorrect: false },
                { content: 'Network Interface (NIC) and Subnet', isCorrect: true },
                { content: 'VPC and Region', isCorrect: false },
                { content: 'Virtual Machines only', isCorrect: false },
            ],
        },
        {
            content: 'How does the Priority in NSG rules work?',
            explanation: 'Rules with lower Priority are processed first. Once a rule matches, subsequent rules are ignored.',
            answers: [
                { content: 'Higher number means higher priority', isCorrect: false },
                { content: 'Lower number means higher priority', isCorrect: true },
                { content: 'Random processing', isCorrect: false },
                { content: 'All rules are processed simultaneously', isCorrect: false },
            ],
        },
        {
            content: 'At which layer of the OSI model does the Azure Load Balancer operate?',
            explanation: 'Azure Load Balancer is a Layer 4 (Transport layer - TCP/UDP) load balancer.',
            answers: [
                { content: 'Layer 3 (Network)', isCorrect: false },
                { content: 'Layer 4 (Transport)', isCorrect: true },
                { content: 'Layer 7 (Application)', isCorrect: false },
                { content: 'Layer 2 (Data Link)', isCorrect: false },
            ],
        },
        {
            content: 'What is the main difference between a Public Load Balancer and an Internal Load Balancer?',
            explanation: 'A Public Load Balancer has a public IP and receives traffic from the Internet, while an Internal one receives traffic from within the VNet.',
            answers: [
                { content: 'Public is faster', isCorrect: false },
                { content: 'Public receives traffic from the Internet, Internal only receives internal traffic', isCorrect: true },
                { content: 'Internal is more secure than Public', isCorrect: false },
                { content: 'Public only supports HTTP', isCorrect: false },
            ],
        },
        {
            content: 'Which of the following features does the Azure Application Gateway support that the Azure Load Balancer does not?',
            explanation: 'Application Gateway operates at Layer 7, supporting features like URL-based routing and SSL termination.',
            answers: [
                { content: 'TCP load balancing', isCorrect: false },
                { content: 'URL-based routing and SSL certificate assignment', isCorrect: true },
                { content: 'Static IP address', isCorrect: false },
                { content: 'Health probes', isCorrect: false },
            ],
        },
        {
            content: 'What does the Azure DNS Private Zones service allow you to do?',
            explanation: 'It allows you to use custom domain names within an internal Azure network (VNet) without needing a separate DNS server.',
            answers: [
                { content: 'Register .com domains', isCorrect: false },
                { content: 'Manage internal domain name resolution within a VNet', isCorrect: true },
                { content: 'Publish a website to the Internet', isCorrect: false },
                { content: 'Encrypt HTTPS connections', isCorrect: false },
            ],
        },
        {
            content: 'You need to monitor the health of an Azure VNet and diagnose connection issues between VMs. Which tool is best?',
            explanation: 'Azure Network Watcher provides tools like IP flow verify, Packet capture, and Connection troubleshoot.',
            answers: [
                { content: 'Azure Advisor', isCorrect: false },
                { content: 'Azure Network Watcher', isCorrect: true },
                { content: 'Azure Monitor', isCorrect: false },
                { content: 'Azure Traffic Manager', isCorrect: false },
            ],
        },
        {
            content: 'From which sources does Azure Monitor collect Log data?',
            explanation: 'It collects from Azure resources (diagnostic logs), Azure platform (activity logs), and from within operating systems (via agents).',
            answers: [
                { content: 'Virtual machines only', isCorrect: false },
                { content: 'Activity logs, Diagnostic logs, and Application logs', isCorrect: true },
                { content: 'Resource Groups only', isCorrect: false },
                { content: 'Social media', isCorrect: false },
            ],
        },
        {
            content: 'To send email or SMS notifications when an Alert is triggered in Azure Monitor, what do you need to create?',
            explanation: 'Action Groups define the list of recipients or automated actions when an Alert is triggered.',
            answers: [
                { content: 'Resource Group', isCorrect: false },
                { content: 'Action Group', isCorrect: true },
                { content: 'Management Group', isCorrect: false },
                { content: 'Alert Group', isCorrect: false },
            ],
        },
        {
            content: 'You want to regularly back up an Azure virtual machine (VM) daily. Which service is most suitable?',
            explanation: 'Azure Backup provides a secure and managed backup solution for Azure virtual machines.',
            answers: [
                { content: 'Azure Site Recovery', isCorrect: false },
                { content: 'Azure Backup (Recovery Services Vault)', isCorrect: true },
                { content: 'AzCopy', isCorrect: false },
                { content: 'Azure Storage Replication', isCorrect: false },
            ],
        },
        {
            content: 'When using Azure Backup, where is the backup data stored?',
            explanation: 'Backup data is securely stored in a Recovery Services Vault.',
            answers: [
                { content: 'The VM\'s local disk', isCorrect: false },
                { content: 'Recovery Services Vault', isCorrect: true },
                { content: 'Admin\'s email', isCorrect: false },
                { content: 'GitHub repository', isCorrect: false },
            ],
        },
        {
            content: 'What goal does Azure Site Recovery (ASR) help achieve?',
            explanation: 'ASR helps ensure Business Continuity and Disaster Recovery (BCDR) by keeping applications running during outages.',
            answers: [
                { content: 'Back up configuration files', isCorrect: false },
                { content: 'Disaster recovery and business continuity (Disaster Recovery)', isCorrect: true },
                { content: 'Speed up web access', isCorrect: false },
                { content: 'Manage user passwords', isCorrect: false },
            ],
        },
        {
            content: 'You need to see who changed the firewall configuration in a Resource Group last week. Where should you check?',
            explanation: 'The Azure Activity Log records all management activities (create, update, delete) within a Subscription.',
            answers: [
                { content: 'Azure Monitor Logs', isCorrect: false },
                { content: 'Azure Activity Log', isCorrect: true },
                { content: 'Diagnostic Logs', isCorrect: false },
                { content: 'Network Watcher', isCorrect: false },
            ],
        },
        {
            content: 'Which license level is required for Azure AD Identity Protection to have advanced features like login risk assessment?',
            explanation: 'Advanced security features of Identity Protection require an Azure AD Premium P2 license.',
            answers: [
                { content: 'Azure AD Free', isCorrect: false },
                { content: 'Azure AD Premium P1', isCorrect: false },
                { content: 'Azure AD Premium P2', isCorrect: true },
                { content: 'Office 365 E3', isCorrect: false },
            ],
        },
        {
            content: 'On which factors does Conditional Access in Azure AD allow access control?',
            explanation: 'It is based on User/Group, Geo-location, Device (Device state), and specific Applications.',
            answers: [
                { content: 'User password only', isCorrect: false },
                { content: 'User, device, location, and application risk', isCorrect: true },
                { content: 'Server operating system', isCorrect: false },
                { content: 'Bank account balance', isCorrect: false },
            ],
        },
        {
            content: 'To assign administrative permissions to a group of users only on a specific Resource Group, what should you do?',
            explanation: 'Use Azure RBAC to assign a specific Role (like Contributor) with the Resource Group as the Scope.',
            answers: [
                { content: 'Create an Azure AD Policy', isCorrect: false },
                { content: 'Use Azure RBAC with the Resource Group as the Scope', isCorrect: true },
                { content: 'Use Azure Locks', isCorrect: false },
                { content: 'Assign users to the Global Admins group', isCorrect: false },
            ],
        },
        {
            content: 'You want to mount a drive from Azure Files onto both Linux and Windows virtual machines simultaneously. Which protocol is most suitable?',
            explanation: 'Both modern Windows and Linux support the SMB 3.0 protocol for file sharing from Azure Files.',
            answers: [
                { content: 'HTTP', isCorrect: false },
                { content: 'SMB (Server Message Block)', isCorrect: true },
                { content: 'NFS (Network File System)', isCorrect: false },
                { content: 'FTP', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Storage, what is the effect of the "Soft Delete" feature for blobs?',
            explanation: 'It allows for the recovery of blobs that have been deleted or overwritten within a certain period (Retention period).',
            answers: [
                { content: 'Permanently deletes data immediately', isCorrect: false },
                { content: 'Allows for the recovery of accidentally deleted data', isCorrect: true },
                { content: 'Encrypts data before deletion', isCorrect: false },
                { content: 'Reduces storage costs', isCorrect: false },
            ],
        },
        {
            content: 'Which technology does Azure Disk Encryption (ADE) use to protect Windows virtual machine drives?',
            explanation: 'ADE uses Windows\' BitLocker feature to provide volume encryption for disks.',
            answers: [
                { content: 'DM-Crypt', isCorrect: false },
                { content: 'BitLocker', isCorrect: true },
                { content: 'SSL/TLS', isCorrect: false },
                { content: 'IPsec', isCorrect: false },
            ],
        },
        {
            content: 'You need to quickly deploy 100 virtual machines with the same configuration. Which method is most efficient?',
            explanation: 'Using Azure Resource Manager (ARM) templates along with parameters to automate bulk deployments.',
            answers: [
                { content: 'Manually create in the Azure Portal', isCorrect: false },
                { content: 'Use ARM Templates or Bicep', isCorrect: true },
                { content: 'Send a support request to Microsoft', isCorrect: false },
                { content: 'Use Remote Desktop', isCorrect: false },
            ],
        },
        {
            content: 'Which resources does the Virtual Machine Size (VM Size) directly affect?',
            explanation: 'The Size determines the number of vCPUs, RAM, and the maximum number of disks/NICs that can be attached.',
            answers: [
                { content: 'Hard drive capacity only', isCorrect: false },
                { content: 'Number of vCPUs, RAM, and maximum network bandwidth', isCorrect: true },
                { content: 'Backup time', isCorrect: false },
                { content: 'Data center location', isCorrect: false },
            ],
        },
        {
            content: 'How does Azure Container Instances (ACI) differ from Azure Kubernetes Service (AKS)?',
            explanation: 'ACI is a fast, serverless container solution, while AKS is a powerful orchestrator for complex container clusters.',
            answers: [
                { content: 'AKS is cheaper than ACI', isCorrect: false },
                { content: 'ACI is ideal for simple containers, while AKS is for large-scale microservices applications', isCorrect: true },
                { content: 'ACI only runs on Linux', isCorrect: false },
                { content: 'There is no difference', isCorrect: false },
            ],
        },
        {
            content: 'You have a web application running on Azure App Service. You want to redirect 10% of traffic to a new version for testing. Which feature should you use?',
            explanation: 'Deployment Slots allow you to create parallel environments (staging) and perform traffic swapping or splitting.',
            answers: [
                { content: 'Azure Load Balancer', isCorrect: false },
                { content: 'Deployment Slots', isCorrect: true },
                { content: 'Traffic Manager', isCorrect: false },
                { content: 'WebJob', isCorrect: false },
            ],
        },
        {
            content: 'When does the Public IP address of an Azure virtual machine change if it is set to Dynamic mode?',
            explanation: 'A Dynamic IP will change when the virtual machine is stop-deallocated (or deleted) and restarted.',
            answers: [
                { content: 'When restarting the operating system', isCorrect: false },
                { content: 'When the virtual machine is deallocated and turned back on', isCorrect: true },
                { content: 'Once every 24 hours', isCorrect: false },
                { content: 'When the Admin changes the VM password', isCorrect: false },
            ],
        },
        {
            content: 'When configuring VNet Peering, why would you configure "Allow gateway transit"?',
            explanation: 'This setting allows one VNet to share its VPN Gateway or ExpressRoute Gateway with the peered VNet.',
            answers: [
                { content: 'To speed up the network between 2 VNets', isCorrect: false },
                { content: 'So this VNet can access the Internet through the other VNet', isCorrect: false },
                { content: 'So this VNet can use the other VNet\'s VPN Gateway to connect on-premises', isCorrect: true },
                { content: 'To block all traffic from the other VNet', isCorrect: false },
            ],
        },
        {
            content: 'To allow network traffic from the Internet into a web server virtual machine via port 80, what rule do you need to configure in the NSG?',
            explanation: 'Configure an Inbound Security Rule with Service: HTTP (Port 80) and Action: Allow.',
            answers: [
                { content: 'Outbound Rule with Port 80', isCorrect: false },
                { content: 'Inbound Rule with Port 80 and Action: Allow', isCorrect: true },
                { content: 'Inbound Rule with Port 443', isCorrect: false },
                { content: 'Assign a Public IP to the VNet', isCorrect: false },
            ],
        },
        {
            content: 'How does Azure Front Door differ from Traffic Manager?',
            explanation: 'Front Door is a Layer 7 application load balancer with network acceleration (Anycast), while Traffic Manager is a DNS-based load balancer.',
            answers: [
                { content: 'Traffic Manager is faster', isCorrect: false },
                { content: 'Front Door operates at Layer 7 and provides application acceleration, while Traffic Manager is DNS-based', isCorrect: true },
                { content: 'Front Door only supports 1 Region', isCorrect: false },
                { content: 'There is no difference in routing logic', isCorrect: false },
            ],
        },
        {
            content: 'How do Service Endpoints in an Azure VNet help?',
            explanation: 'They allow VNet resources to securely connect to Azure services (like SQL, Storage) over Azure\'s backbone network instead of the Internet.',
            answers: [
                { content: 'Create a private VPN network', isCorrect: false },
                { content: 'Securely extend a VNet to Azure services', isCorrect: true },
                { content: 'Replace Public IP', isCorrect: false },
                { content: 'Increase bandwidth for the VM', isCorrect: false },
            ],
        },
        {
            content: 'What can "Moving a resource" to a new Resource Group do?',
            explanation: 'It may change the RBAC access permissions inherited from the old Resource Group.',
            answers: [
                { content: 'Always disrupts service', isCorrect: false },
                { content: 'Changes inherited RBAC permissions', isCorrect: true },
                { content: 'Clears all resource data', isCorrect: false },
                { content: 'Changes the resource\'s Region', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Monitor, which Query Language is used to analyze logs?',
            explanation: 'Kusto Query Language (KQL) is the powerful language used in Log Analytics.',
            answers: [
                { content: 'SQL', isCorrect: false },
                { content: 'Kusto Query Language (KQL)', isCorrect: true },
                { content: 'PowerShell', isCorrect: false },
                { content: 'JavaScript', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of setting up "Diagnostic Settings" on an Azure resource?',
            explanation: 'It allows you to configure pushing that resource\'s Logs and Metrics to Log Analytics, a Storage Account, or an Event Hub.',
            answers: [
                { content: 'To fix hardware errors', isCorrect: false },
                { content: 'To export monitoring data to external storage locations', isCorrect: true },
                { content: 'To reset the Admin password', isCorrect: false },
                { content: 'To change the VM size', isCorrect: false },
            ],
        },
        {
            content: 'You need to consolidate Logs from multiple Azure resources into a single place to run aggregate reports. What should you create?',
            explanation: 'A Log Analytics Workspace is a central place for analyzing Log data from many sources.',
            answers: [
                { content: 'Storage Account', isCorrect: false },
                { content: 'Log Analytics Workspace', isCorrect: true },
                { content: 'Application Insights', isCorrect: false },
                { content: 'Azure Data Lake', isCorrect: false },
            ],
        },
        {
            content: 'Which recovery tool types does Azure Backup support for virtual machines?',
            explanation: 'It supports restoring the entire VM, specific disks, or individual files/folders (File-level recovery).',
            answers: [
                { content: 'Entire VM restore only', isCorrect: false },
                { content: 'Restore a VM, disk, or individual files', isCorrect: true },
                { content: 'Password recovery only', isCorrect: false },
                { content: 'Individual files cannot be recovered', isCorrect: false },
            ],
        },
        {
            content: 'What is the cost difference between LRS (Locally redundant) and GRS (Geo-redundant) backups in Azure Backup?',
            explanation: 'GRS is more expensive than LRS because it stores more copies and in two different geographical areas.',
            answers: [
                { content: 'LRS is more expensive', isCorrect: false },
                { content: 'GRS is more expensive due to higher data security', isCorrect: true },
                { content: 'They cost the same', isCorrect: false },
                { content: 'Depends on network speed', isCorrect: false },
            ],
        },
        {
            content: 'What is the benefit of Azure AD Privileged Identity Management (PIM)?',
            explanation: 'It provides "just enough" and "just-in-time" (Just-In-Time) administrative access to mitigate security risks.',
            answers: [
                { content: 'Faster password login', isCorrect: false },
                { content: 'Grant temporary administrative permissions upon request', isCorrect: true },
                { content: 'Automatically create new users', isCorrect: false },
                { content: 'Replace MFA', isCorrect: false },
            ],
        },
        {
            content: 'What is an organizational unit in Azure AD that allows you to assign administrative permissions to a small set of users/groups called?',
            explanation: 'Administrative Units (AU) allow for narrower administrative delegation instead of the entire Tenant.',
            answers: [
                { content: 'Resource Group', isCorrect: false },
                { content: 'Administrative Units', isCorrect: true },
                { content: 'Management Group', isCorrect: false },
                { content: 'Subscription', isCorrect: false },
            ],
        },
    ],
};
