export const az104Exam2 = {
    title: 'Azure Administrator AZ-104 - Practice Test 2',
    description: 'Azure Administrator AZ-104 Practice Test with 55 in-depth questions on Networking, Storage, and Virtual Machines.',
    durationMinutes: 120,
    courseId: 8,
    questions: [
        {
            content: 'You have a virtual machine VMA located in Subnet1. You assign an NSG to Subnet1 and another NSG to the NIC of VMA. When there is inbound traffic to VMA, what is the processing order of the NSGs?',
            explanation: 'For inbound traffic, the Subnet-level NSG is processed first, followed by the NIC-level NSG.',
            answers: [
                { content: 'NIC-level NSG is processed first', isCorrect: false },
                { content: 'Subnet-level NSG is processed first', isCorrect: true },
                { content: 'Both are processed in parallel', isCorrect: false },
                { content: 'Only the NIC-level NSG is processed', isCorrect: false },
            ],
        },
        {
            content: 'For outbound traffic from the same VMA virtual machine in the previous question, what is the processing order of the NSGs?',
            explanation: 'For outbound traffic, the NIC-level NSG is processed first, followed by the Subnet-level NSG.',
            answers: [
                { content: 'Subnet-level NSG is processed first', isCorrect: false },
                { content: 'NIC-level NSG is processed first', isCorrect: true },
                { content: 'Only the Subnet-level NSG is processed', isCorrect: false },
                { content: 'The order does not matter', isCorrect: false },
            ],
        },
        {
            content: 'You are configuring Application Security Groups (ASGs). What can an ASG be used as in an NSG rule?',
            explanation: 'An ASG can be used as a Source or Destination in an NSG rule to group VMs by application function instead of IP addresses.',
            answers: [
                { content: 'Used only as a Source', isCorrect: false },
                { content: 'Used as either Source or Destination', isCorrect: true },
                { content: 'Used only as a Destination', isCorrect: false },
                { content: 'As a complete replacement for NSGs', isCorrect: false },
            ],
        },
        {
            content: 'You need to connect an on-premises network to an Azure VNet with the requirement for the lowest latency and most stable bandwidth, independent of the public internet. What do you choose?',
            explanation: 'ExpressRoute provides a private connection through a service provider, ensuring low latency and bandwidth up to 100 Gbps.',
            answers: [
                { content: 'Site-to-Site VPN', isCorrect: false },
                { content: 'Point-to-Site VPN', isCorrect: false },
                { content: 'ExpressRoute', isCorrect: true },
                { content: 'VNet Peering', isCorrect: false },
            ],
        },
        {
            content: 'In Azure DNS, what is a "CNAME" record used for?',
            explanation: 'A CNAME (Canonical Name) record is used to map one domain name to another (an alias).',
            answers: [
                { content: 'Map a domain to an IPv4 address', isCorrect: false },
                { content: 'Map a domain to an IPv6 address', isCorrect: false },
                { content: 'Map an alias domain name to a canonical name', isCorrect: true },
                { content: 'Define an email receiving server', isCorrect: false },
            ],
        },
        {
            content: 'You create a virtual machine and want it to have a public IP address that never changes even if the VM is deleted and recreated. What should you configure?',
            explanation: 'A "Static" public IP address will be retained until you actively delete the IP resource.',
            answers: [
                { content: 'Dynamic IP', isCorrect: false },
                { content: 'Static IP', isCorrect: true },
                { content: 'Reserved IP', isCorrect: false },
                { content: 'Private IP', isCorrect: false },
            ],
        },
        {
            content: 'When using Azure Load Balancer, when is "Session Persistence" based on Source IP used?',
            explanation: 'It is used when you want to ensure that requests from the same client IP are always sent to the same backend instance (Server affinity).',
            answers: [
                { content: 'To distribute traffic most evenly', isCorrect: false },
                { content: 'To maintain a client\'s connection to a specific server', isCorrect: true },
                { content: 'To encrypt traffic', isCorrect: false },
                { content: 'To block traffic from hackers', isCorrect: false },
            ],
        },
        {
            content: 'Which protocols does Azure Load Balancer support for checking the health (Health Probe) of backend servers?',
            explanation: 'It supports TCP, HTTP, and HTTPS protocols to detect if a server is operational.',
            answers: [
                { content: 'TCP only', isCorrect: false },
                { content: 'TCP, HTTP, and HTTPS', isCorrect: true },
                { content: 'ICMP (Ping) only', isCorrect: false },
                { content: 'FTP and SMTP', isCorrect: false },
            ],
        },
        {
            content: 'You need to configure routing for traffic leaving a specific subnet so that it passes through a Network Virtual Appliance (NVA). What should you create?',
            explanation: 'User-Defined Routes (UDR) in a Route Table allow you to override Azure\'s default routing.',
            answers: [
                { content: 'ExpressRoute', isCorrect: false },
                { content: 'User-Defined Routes (UDR) in a Route Table', isCorrect: true },
                { content: 'VNet Peering', isCorrect: false },
                { content: 'NSG Rule', isCorrect: false },
            ],
        },
        {
            content: 'In an Azure Virtual Network, what is the default name used for the subnet containing a VPN/ExpressRoute Gateway?',
            explanation: 'GatewaySubnet is the mandatory name for the subnet containing the VPN/ExpressRoute Gateway; its IP range is typically /26 or /27.',
            answers: [
                { content: 'DefaultSubnet', isCorrect: false },
                { content: 'GatewaySubnet', isCorrect: true },
                { content: 'VPN_Subnet', isCorrect: false },
                { content: 'Frontend_Subnet', isCorrect: false },
            ],
        },
        {
            content: 'Your virtual network (VNet) is running out of IP addresses. Can you add a new IP address range (Address Space) to an active VNet?',
            explanation: 'Yes, Azure allows you to add new IP address ranges to an existing VNet without interrupting current resources.',
            answers: [
                { content: 'Never', isCorrect: false },
                { content: 'Yes, you can add a new Address Space', isCorrect: true },
                { content: 'Only after deleting all VMs', isCorrect: false },
                { content: 'Only when using PowerShell', isCorrect: false },
            ],
        },
        {
            content: 'You have a Storage Account. You need to restrict access to this Storage Account to only a specific subnet within your VNet. Which feature do you configure?',
            explanation: 'Use Virtual Network Service Endpoints or Private Endpoints combined with the Storage Firewall to restrict network access.',
            answers: [
                { content: 'RBAC roles', isCorrect: false },
                { content: 'Firewall and Virtual Networks settings of the Storage Account', isCorrect: true },
                { content: 'Shared Access Signature', isCorrect: false },
                { content: 'Access Keys', isCorrect: false },
            ],
        },
        {
            content: 'What are the cost characteristics of the Azure Blob Storage Archive tier?',
            explanation: 'Storage cost is the lowest, but data access cost and latency are the highest.',
            answers: [
                { content: 'Cheapest access cost', isCorrect: false },
                { content: 'Lowest storage cost but highest access cost', isCorrect: true },
                { content: 'Same price as the Hot tier', isCorrect: false },
                { content: 'Only pay when not in use', isCorrect: false },
            ],
        },
        {
            content: 'To allow users to recover old files that were deleted within 30 days from an Azure File Share, which feature should you configure?',
            explanation: 'Soft delete for Azure file shares allows for the recovery of deleted shares within a retention period.',
            answers: [
                { content: 'Azure Backup', isCorrect: false },
                { content: 'Soft delete for file shares', isCorrect: true },
                { content: 'LRS replication', isCorrect: false },
                { content: 'Immutable storage', isCorrect: false },
            ],
        },
        {
            content: 'Which type of Storage Account replication provides the highest availability by allowing read access from a different region even if the primary region fails?',
            explanation: 'RA-GRS (Read-access geo-redundant storage) provides a read-only endpoint in the secondary region.',
            answers: [
                { content: 'LRS', isCorrect: false },
                { content: 'GRS', isCorrect: false },
                { content: 'RA-GRS (or RA-GZRS)', isCorrect: true },
                { content: 'ZRS', isCorrect: false },
            ],
        },
        {
            content: 'When you create a new Storage Account, does it support HTTP access by default?',
            explanation: 'By default, Azure recommends "Secure transfer required" (meaning HTTPS only). However, you can disable it if needed (not recommended).',
            answers: [
                { content: 'Only supports HTTPS', isCorrect: false },
                { content: 'Supports both HTTP and HTTPS by default', isCorrect: false },
                { content: 'By default, requires a secure connection (HTTPS)', isCorrect: true },
                { content: 'Only supports FTP', isCorrect: false },
            ],
        },
        {
            content: 'What does the Lifecycle Management feature of Azure Storage help you automate?',
            explanation: 'It automatically moves blobs to cheaper access tiers (like Hot to Cool) or deletes blobs based on data age.',
            answers: [
                { content: 'Data encryption', isCorrect: false },
                { content: 'Cost optimization by automating data lifecycle', isCorrect: true },
                { content: 'Periodic password changes', isCorrect: false },
                { content: 'Backing up to AWS', isCorrect: false },
            ],
        },
        {
            content: 'You need to create a Linux virtual machine and want to use SSH key-based authentication instead of a password. Which file contains the public key you must provide when creating the VM?',
            explanation: 'You provide the Public Key (usually a .pub file) so Azure can configure it in the authorized_keys file on the VM.',
            answers: [
                { content: 'Private key (.pem)', isCorrect: false },
                { content: 'Public key (.pub)', isCorrect: true },
                { content: 'Root password', isCorrect: false },
                { content: 'Config file', isCorrect: false },
            ],
        },
        {
            content: 'In an Azure Virtual Machine, what type of disk is typically used for temporary storage and will lose data when the VM is deallocated?',
            explanation: 'Each VM usually has a temporary disk (often the D: drive on Windows) used for page files/swap files; data on it is not persistent.',
            answers: [
                { content: 'OS Disk', isCorrect: false },
                { content: 'Data Disk', isCorrect: false },
                { content: 'Temporary Disk (Ephemeral)', isCorrect: true },
                { content: 'Managed Disk', isCorrect: false },
            ],
        },
        {
            content: 'When using Managed Disks for virtual machines in an Availability Set, what does Azure ensure about the storage infrastructure?',
            explanation: 'Azure ensures that the disks for the VMs in the set are placed on different storage units (racks) to avoid a single point of failure.',
            answers: [
                { content: 'All disks are on the same rack', isCorrect: false },
                { content: 'Disks are spread across different storage racks', isCorrect: true },
                { content: 'Disabling backups', isCorrect: false },
                { content: 'Doubling the disk speed', isCorrect: false },
            ],
        },
        {
            content: 'You have a running virtual machine. You resize it to a larger configuration. What happens to the virtual machine?',
            explanation: 'The virtual machine must be restarted to apply the new hardware configuration.',
            answers: [
                { content: 'The VM continues running normally without a restart', isCorrect: false },
                { content: 'The VM will be automatically restarted', isCorrect: true },
                { content: 'All data on Data disks will be deleted', isCorrect: false },
                { content: 'The operating system will be reinstalled', isCorrect: false },
            ],
        },
        {
            content: 'You need to perform OS updates for 10 virtual machines in the same Availability Set. How many groups of virtual machines will Azure ensure are updated at the same time?',
            explanation: 'Based on the number of Update Domains (default is 5), Azure updates only one group (Domain) at a time to ensure other groups remain running.',
            answers: [
                { content: 'All 10 machines at once', isCorrect: false },
                { content: 'Only one Update Domain at a time', isCorrect: true },
                { content: 'Depending on the administrator\'s choice', isCorrect: false },
                { content: 'Updates in alphabetical order', isCorrect: false },
            ],
        },
        {
            content: 'What action does the "Horizontal Scaling" feature of Virtual Machine Scale Sets (VMSS) perform?',
            explanation: 'It adds or removes virtual machine instances to the cluster to meet changes in load.',
            answers: [
                { content: 'Increase RAM for the VM', isCorrect: false },
                { content: 'Add/remove the number of virtual machine instances', isCorrect: true },
                { content: 'Change the operating system', isCorrect: false },
                { content: 'Encrypt the hard drive', isCorrect: false },
            ],
        },
        {
            content: 'From which of the following sources does Azure Container Instances (ACI) support deployment?',
            explanation: 'ACI can pull images from public registries like Docker Hub or private registries like Azure Container Registry (ACR).',
            answers: [
                { content: 'GitHub only', isCorrect: false },
                { content: 'Public and Private container registries', isCorrect: true },
                { content: 'Personal computer only', isCorrect: false },
                { content: 'From a .zip compressed file', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Kubernetes Service (AKS), who manages the "Control Plane"?',
            explanation: 'Microsoft fully manages the Control Plane for you for free; you only manage and pay for the Worker nodes.',
            answers: [
                { content: 'The customer', isCorrect: false },
                { content: 'Microsoft', isCorrect: true },
                { content: 'A third party', isCorrect: false },
                { content: 'There is no Control Plane', isCorrect: false },
            ],
        },
        {
            content: 'Which tool in Azure helps you quickly build and provide development (Dev) and testing (Test) environments for your team?',
            explanation: 'Azure DevTest Labs allows creating labs with cost-limiting policies and automated shutdown.',
            answers: [
                { content: 'Azure Automation', isCorrect: false },
                { content: 'Azure DevTest Labs', isCorrect: true },
                { content: 'Azure Monitor', isCorrect: false },
                { content: 'Azure Logic Apps', isCorrect: false },
            ],
        },
        {
            content: 'To track which user created a new virtual machine yesterday, which tool should you use?',
            explanation: 'The Azure Activity Log stores a history of management events for 90 days.',
            answers: [
                { content: 'Azure Advisor', isCorrect: false },
                { content: 'Azure Activity Log', isCorrect: true },
                { content: 'Diagnostic Logs', isCorrect: false },
                { content: 'Metrics', isCorrect: false },
            ],
        },
        {
            content: 'What is the difference between Metrics and Logs in Azure Monitor?',
            explanation: 'Metrics are real-time numerical data (e.g., % CPU), while Logs are detailed text data recording events.',
            answers: [
                { content: 'There is no difference', isCorrect: false },
                { content: 'Metrics are quantitative data, Logs are detailed event records', isCorrect: true },
                { content: 'Metrics are only for VMs, Logs are for everything', isCorrect: false },
                { content: 'Logs are faster than Metrics', isCorrect: false },
            ],
        },
        {
            content: 'An "Alert Rule" in Azure Monitor triggers based on a "Threshold". What does this mean?',
            explanation: 'A threshold is a value that, if a metric exceeds (or falls below), the alert will be triggered.',
            answers: [
                { content: 'The start time', isCorrect: false },
                { content: 'The value limit to trigger the alert', isCorrect: true },
                { content: 'The number of email recipients', isCorrect: false },
                { content: 'The server name', isCorrect: false },
            ],
        },
        {
            content: 'Azure Network Watcher provides a "Packet Capture" feature. How does it help in network administration?',
            explanation: 'It allows recording network traffic into and out of virtual machines for detailed network troubleshooting.',
            answers: [
                { content: 'Block viruses', isCorrect: false },
                { content: 'Record network traffic for troubleshooting', isCorrect: true },
                { content: 'Speed up the internet', isCorrect: false },
                { content: 'Back up router configuration', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Backup, what does "Recovery Point Objective (RPO)" mean?',
            explanation: 'RPO is the maximum amount of data an organization is willing to lose (backup frequency).',
            answers: [
                { content: 'Time to complete the restoration', isCorrect: false },
                { content: 'Maximum time interval between backups (acceptable data loss level)', isCorrect: true },
                { content: 'The cost of a backup', isCorrect: false },
                { content: 'Number of virtual machines being backed up', isCorrect: false },
            ],
        },
        {
            content: 'What does Recovery Time Objective (RTO) mean in a Disaster Recovery scenario?',
            explanation: 'RTO is the maximum time to restore a service after a failure occurs.',
            answers: [
                { content: 'The volume of data being restored', isCorrect: false },
                { content: 'The maximum time for the system to be operational again', isCorrect: true },
                { content: 'Number of employees required', isCorrect: false },
                { content: ' The operating system version', isCorrect: false },
            ],
        },
        {
            content: 'You need to assign permissions to a user so they can only read logs in a Log Analytics Workspace without changing any settings. Which role is most appropriate?',
            explanation: 'The "Log Analytics Reader" role provides permission to view data without the ability to configure or edit.',
            answers: [
                { content: 'Owner', isCorrect: false },
                { content: 'Contributor', isCorrect: false },
                { content: 'Log Analytics Reader', isCorrect: true },
                { content: 'User Access Administrator', isCorrect: false },
            ],
        },
        {
            content: 'Which languages do Azure Automation Runbooks support?',
            explanation: 'Automation Runbooks primarily support PowerShell and Python.',
            answers: [
                { content: 'C# only', isCorrect: false },
                { content: 'PowerShell and Python', isCorrect: true },
                { content: 'Java and Ruby', isCorrect: false },
                { content: 'HTML and CSS', isCorrect: false },
            ],
        },
        {
            content: 'You want to ensure that your virtual machines always receive exactly the same internal IP address (Private IP) every time they restart. What should you configure?',
            explanation: 'In the VM NIC\'s IP configuration, choose to assign the IP as "Static" instead of "Dynamic".',
            answers: [
                { content: 'Reserved Private IP', isCorrect: false },
                { content: 'Static Private IP allocation', isCorrect: true },
                { content: 'Floating IP', isCorrect: false },
                { content: 'Dynamic IP', isCorrect: false },
            ],
        },
        {
            content: 'What type of firewall is the Azure Firewall service?',
            explanation: 'Azure Firewall is a Stateful Firewall as a Service with high security and auto-scaling capabilities.',
            answers: [
                { content: 'Proxy Firewall', isCorrect: false },
                { content: 'Stateful Firewall as a Service', isCorrect: true },
                { content: 'On-premises hardware firewall', isCorrect: false },
                { content: 'Antivirus', isCorrect: false },
            ],
        },
        {
            content: 'To allow employees to access the Azure Portal only when they are in the corporate office (based on an IP address range), which feature should you use?',
            explanation: 'Conditional Access with the "Named Locations" condition allows restricting access based on trusted IP ranges.',
            answers: [
                { content: 'RBAC', isCorrect: false },
                { content: 'Conditional Access with Named Locations', isCorrect: true },
                { content: 'Managed Identities', isCorrect: false },
                { content: 'Azure Policy', isCorrect: false },
            ],
        },
        {
            content: 'How does Azure AD Connect Cloud Sync differ from regular Azure AD Connect?',
            explanation: 'Cloud Sync uses a lighter agent and most processing is done in the cloud, suitable for complex forest scenarios.',
            answers: [
                { content: 'Cloud Sync is more expensive', isCorrect: false },
                { content: 'Uses a lightweight agent and processes in the cloud instead of on-premises', isCorrect: true },
                { content: 'Cloud Sync does not support group synchronization', isCorrect: false },
                { content: 'Cloud Sync is only for Linux', isCorrect: false },
            ],
        },
        {
            content: 'You assign the "Owner" role to a user at the Subscription level. What can they do with the Resource Groups underneath?',
            explanation: 'According to the principle of inheritance, Owner permissions at the Subscription level grant them full administrative control over everything below it.',
            answers: [
                { content: 'Read only', isCorrect: false },
                { content: 'Full control (Inherited Owner permissions)', isCorrect: true },
                { content: 'Permissions need to be reassigned for each Resource Group', isCorrect: false },
                { content: 'No permissions at all', isCorrect: false },
            ],
        },
        {
            content: 'When using Azure Load Balancer, what is the default "Idle Timeout" in minutes?',
            explanation: 'The default timeout for an idle connection in Azure Load Balancer is 4 minutes.',
            answers: [
                { content: '1 minute', isCorrect: false },
                { content: '4 minutes', isCorrect: true },
                { content: '30 minutes', isCorrect: false },
                { content: 'Never timeouts', isCorrect: false },
            ],
        },
        {
            content: 'How does an Azure Storage Account of type "ZRS (Zone-redundant storage)" replicate data?',
            explanation: 'ZRS replicates data synchronously across three Availability Zones within the same region.',
            answers: [
                { content: 'Replicate within one data center', isCorrect: false },
                { content: 'Replicate across three Availability Zones in one region', isCorrect: true },
                { content: 'Replicate to another region', isCorrect: false },
                { content: 'Replicate to a backup disk', isCorrect: false },
            ],
        },
        {
            content: 'Is moving a Data Disk from one virtual machine to another within the same region directly supported?',
            explanation: 'Yes, you can Detach a Data Disk from one VM and Attach it to another VM.',
            answers: [
                { content: 'No, data must be copied', isCorrect: false },
                { content: 'Yes, via Detach and Attach', isCorrect: true },
                { content: 'Only supported for OS disks', isCorrect: false },
                { content: 'Must turn off internet to do so', isCorrect: false },
            ],
        },
        {
            content: 'Which tool helps you manage Azure VMs via a command-line interface directly in a browser or installed on a client machine?',
            explanation: 'The Azure CLI provides a powerful set of commands for managing Azure on any platform.',
            answers: [
                { content: 'Azure Portal', isCorrect: false },
                { content: 'Azure CLI', isCorrect: true },
                { content: 'Azure Remote Desktop', isCorrect: false },
                { content: 'Azure Notepad', isCorrect: false },
            ],
        },
        {
            content: 'Can a Blob\'s "Access Tier" be changed manually at any time?',
            explanation: 'Yes, you can change the tier from Hot to Cool, Archive, and vice versa (note that costs and rehydration time may apply).',
            answers: [
                { content: 'No, the initial setting is fixed', isCorrect: false },
                { content: 'Yes, you can change it at any time', isCorrect: true },
                { content: 'Can only be changed once', isCorrect: false },
                { content: 'Only when using PowerShell', isCorrect: false },
            ],
        },
        {
            content: 'How does the Azure AD "Password Hash Synchronization" (PHS) service store your password in the cloud?',
            explanation: 'It does not store the actual password but only a hash of the hash of the password, ensuring extremely high security.',
            answers: [
                { content: 'Stored in plain text', isCorrect: false },
                { content: 'Stores the hash of the already hashed password (Hash-of-a-hash)', isCorrect: true },
                { content: 'Stored in an Excel file', isCorrect: false },
                { content: 'Microsoft does not store anything', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Policy, what is an "Exclusion" used for?',
            explanation: 'It is used to exclude specific Resource Groups or resources from the effect of a policy assigned at a higher level.',
            answers: [
                { content: 'Remove rules', isCorrect: false },
                { content: 'Exclude specific objects from the scope of policy application', isCorrect: true },
                { content: 'Add new users', isCorrect: false },
                { content: 'Run a policy test', isCorrect: false },
            ],
        },
        {
            content: 'How can quotas for Azure resources be increased?',
            explanation: 'You need to open a Support Request to ask Microsoft to increase quotas for your subscription.',
            answers: [
                { content: 'Adjust manually in the Portal', isCorrect: false },
                { content: 'Open a support request with Microsoft', isCorrect: true },
                { content: 'Pay more and it\'s done', isCorrect: false },
                { content: 'Launch more virtual machines', isCorrect: false },
            ],
        },
        {
            content: 'Which feature should you use to view a virtual machine\'s CPU history chart for the past 30 days?',
            explanation: 'Azure Monitor Metrics allows you to view and analyze resource indicators over flexible time periods.',
            answers: [
                { content: 'Activity Log', isCorrect: false },
                { content: 'Metrics Explorer in Azure Monitor', isCorrect: true },
                { content: 'Azure Advisor', isCorrect: false },
                { content: 'Log Analytics', isCorrect: false },
            ],
        },
        {
            content: 'When configuring backup for an Azure VM, what does a "Retention Policy" determine?',
            explanation: 'It determines how long backup copies will be kept (days/weeks/months/years).',
            answers: [
                { content: 'Backup speed', isCorrect: false },
                { content: 'Storage duration for backup copies', isCorrect: true },
                { content: 'Password for the backup file', isCorrect: false },
                { content: 'Physical location of the backup disk', isCorrect: false },
            ],
        },
        {
            content: 'Which type of storage does Azure Storage "Lifecycle Management" support?',
            explanation: 'It primarily supports Azure Blob Storage (General-purpose v2 accounts).',
            answers: [
                { content: 'Azure Files', isCorrect: false },
                { content: 'Azure Blob Storage', isCorrect: true },
                { content: 'Azure Table Storage', isCorrect: false },
                { content: 'Managed Disks only', isCorrect: false },
            ],
        },
    ],
};
