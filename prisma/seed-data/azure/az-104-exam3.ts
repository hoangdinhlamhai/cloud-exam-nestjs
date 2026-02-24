export const az104Exam3 = {
    title: 'Azure Administrator AZ-104 - Practice Test 3',
    description: 'Azure Administrator AZ-104 Practice Test focusing on Network Security, Identity Governance, and Resources.',
    durationMinutes: 120,
    courseId: 8,
    questions: [
        {
            content: 'You need to assign an RBAC role to a user so they can manage Policies at the Management Group level without allowing them to change anyone else\'s access rights. Which role is appropriate?',
            explanation: 'The "Resource Policy Contributor" role allows users to manage policies but does not have permission to assign roles (RBAC).',
            answers: [
                { content: 'Owner', isCorrect: false },
                { content: 'Resource Policy Contributor', isCorrect: true },
                { content: 'User Access Administrator', isCorrect: false },
                { content: 'Contributor', isCorrect: false },
            ],
        },
        {
            content: 'In Azure AD, what is the difference between a "Security Group" and a "Microsoft 365 Group"?',
            explanation: 'Security Groups are used to manage access to resources, while Microsoft 365 Groups provide collaboration features (email, Teams, SharePoint).',
            answers: [
                { content: 'Security Group is more expensive', isCorrect: false },
                { content: 'Security Group is for permissions, Microsoft 365 Group is for collaboration', isCorrect: true },
                { content: 'They are the same', isCorrect: false },
                { content: 'Only Microsoft 365 Groups can use RBAC', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of the "Access Reviews" feature in Azure AD?',
            explanation: 'It allows organizations to periodically review user access to ensure only those who need it have access.',
            answers: [
                { content: 'Assign new passwords', isCorrect: false },
                { content: 'Periodically review and confirm user access rights', isCorrect: true },
                { content: 'Scan for viruses in files', isCorrect: false },
                { content: 'Speed up login', isCorrect: false },
            ],
        },
        {
            content: 'You need to deploy an Azure Storage Account using an ARM Template. What is the purpose of the "outputs" section in the template?',
            explanation: 'The "outputs" section returns values after deployment is complete (e.g., connection strings or endpoints).',
            answers: [
                { content: 'Define input parameters', isCorrect: false },
                { content: 'Return result information after successful resource deployment', isCorrect: true },
                { content: 'Define resource types', isCorrect: false },
                { content: 'Store internal variables', isCorrect: false },
            ],
        },
        {
            content: 'What is Azure Bicep compared to ARM Templates?',
            explanation: 'Bicep is a Domain-specific language (DSL) that uses a cleaner syntax to replace the JSON of ARM Templates.',
            answers: [
                { content: 'A new operating system', isCorrect: false },
                { content: 'A simpler declarative language that replaces ARM JSON', isCorrect: true },
                { content: 'A data storage service', isCorrect: false },
                { content: 'A network diagnostic tool', isCorrect: false },
            ],
        },
        {
            content: 'To allow network traffic from SubnetA to access SubnetB in the same VNet, but block all traffic from SubnetC, what should you use?',
            explanation: 'Use a Network Security Group (NSG) attached to SubnetB with Allow rules from SubnetA and a Deny rule from SubnetC.',
            answers: [
                { content: 'Azure Firewall', isCorrect: false },
                { content: 'Network Security Group (NSG)', isCorrect: true },
                { content: 'Azure Policy', isCorrect: false },
                { content: 'VNet Peering', isCorrect: false },
            ],
        },
        {
            content: 'Where does the "NSG Flow Logs" feature of Network Watcher store data?',
            explanation: 'NSG Flow Logs record information about IP traffic and store them in a Storage Account.',
            answers: [
                { content: 'Log Analytics Workspace', isCorrect: false },
                { content: 'Storage Account', isCorrect: true },
                { content: 'Azure Monitor Metrics', isCorrect: false },
                { content: 'Admin\'s email', isCorrect: false },
            ],
        },
        {
            content: 'You want to check if a specific NSG rule is blocking traffic from a source to a destination. Which Network Watcher tool supports this most quickly?',
            explanation: 'IP Flow Verify helps check if a packet is allowed based on current security rules.',
            answers: [
                { content: 'Packet Capture', isCorrect: false },
                { content: 'IP Flow Verify', isCorrect: true },
                { content: 'Connection Troubleshoot', isCorrect: false },
                { content: 'VPN Troubleshoot', isCorrect: false },
            ],
        },
        {
            content: 'How does Azure Private Link differ from Service Endpoints?',
            explanation: 'Private Link brings the service into the VNet via a Private IP, while Service Endpoints use the service\'s public IP but restrict access from the VNet.',
            answers: [
                { content: 'Private Link is only for SQL', isCorrect: false },
                { content: 'Private Link uses a private IP address inside the VNet', isCorrect: true },
                { content: 'Service Endpoints are more secure', isCorrect: false },
                { content: 'They are the same', isCorrect: false },
            ],
        },
        {
            content: 'When using Azure Load Balancer, on which type of Load Balancer is the "HA Ports" feature available?',
            explanation: 'HA Ports (High Availability Ports) is only available on a Standard Internal Load Balancer, allowing it to load balance all TCP/UDP ports simultaneously.',
            answers: [
                { content: 'Basic Public', isCorrect: false },
                { content: 'Standard Internal', isCorrect: true },
                { content: 'Basic Internal', isCorrect: false },
                { content: 'Standard Public', isCorrect: false },
            ],
        },
        {
            content: 'You are configuring a Site-to-Site VPN. Which IPsec protocol is used to establish the encrypted tunnel?',
            explanation: 'Azure VPN Gateway uses the IKEv2 (Internet Key Exchange) protocol suite to establish IPsec tunnels.',
            answers: [
                { content: 'SSL/TLS', isCorrect: false },
                { content: 'IKEv2', isCorrect: true },
                { content: 'HTTP/2', isCorrect: false },
                { content: 'FTP', isCorrect: false },
            ],
        },
        {
            content: 'How many simultaneous Site-to-Site connections can an Azure VPN Gateway of type "VpnGw1" support at maximum?',
            explanation: 'Each VPN Gateway SKU (Tier) has different limits; VpnGw1 supports up to 30 S2S tunnels.',
            answers: [
                { content: '10', isCorrect: false },
                { content: '30', isCorrect: true },
                { content: '100', isCorrect: false },
                { content: '500', isCorrect: false },
            ],
        },
        {
            content: 'On which protocol does Azure Bastion operate to allow you to access a VM via a web browser?',
            explanation: 'Azure Bastion provides RDP/SSH connectivity over HTTPS (port 443).',
            answers: [
                { content: 'RDP only (3389)', isCorrect: false },
                { content: 'HTTPS (443)', isCorrect: true },
                { content: 'SSH (22)', isCorrect: false },
                { content: 'HTTP (80)', isCorrect: false },
            ],
        },
        {
            content: 'When using Azure Files, of which solution is the "Storage Sync Service" a key component?',
            explanation: 'Storage Sync Service is the top-level resource for deploying Azure File Sync.',
            answers: [
                { content: 'Azure Backup', isCorrect: false },
                { content: 'Azure File Sync', isCorrect: true },
                { content: 'Azure Site Recovery', isCorrect: false },
                { content: 'ExpressRoute', isCorrect: false },
            ],
        },
        {
            content: 'To protect data in Blob Storage from being deleted or overwritten for 7 years due to legal requirements, what should you configure?',
            explanation: 'Immutable storage with a "time-based retention policy" prevents any deletion or modification of data.',
            answers: [
                { content: 'Soft Delete', isCorrect: false },
                { content: 'Immutable storage', isCorrect: true },
                { content: 'LRS replication', isCorrect: false },
                { content: 'Lifecycle management', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Storage Explorer, which of the following actions can you perform?',
            explanation: 'It allows managing Azure Storage Blobs, Queues, Tables, and Files as well as Managed Disks.',
            answers: [
                { content: 'Install Windows 10', isCorrect: false },
                { content: 'Manage storage resources and Disks via a GUI', isCorrect: true },
                { content: 'Create Azure AD users', isCorrect: false },
                { content: 'Debug Python code', isCorrect: false },
            ],
        },
        {
            content: 'When configuring Azure Backup for a virtual machine, what component must be installed inside the VM to support application-consistent backups?',
            explanation: 'The Azure VM Agent (for Windows/Linux) is required so Microsoft can run extensions for backup.',
            answers: [
                { content: 'SQL Server', isCorrect: false },
                { content: 'Azure VM Agent', isCorrect: true },
                { content: 'Antivirus', isCorrect: false },
                { content: 'Web server', isCorrect: false },
            ],
        },
        {
            content: 'To restore only a single file from an Azure VM backup instead of restoring the entire VM, which feature do you use?',
            explanation: 'Item-level recovery or File Recovery allows mounting a backup disk as a temporary local drive to copy files.',
            answers: [
                { content: 'Swap OS Disk', isCorrect: false },
                { content: 'File Recovery', isCorrect: true },
                { content: 'Create new VM', isCorrect: false },
                { content: 'AzCopy', isCorrect: false },
            ],
        },
        {
            content: 'What does the "Snapshot" action on a Managed Disk create?',
            explanation: 'It creates a full, read-only copy of the disk at a specific point in time.',
            answers: [
                { content: 'A .zip file', isCorrect: false },
                { content: 'A full read-only copy of the disk', isCorrect: true },
                { content: 'A new virtual machine', isCorrect: false },
                { content: 'A log entry', isCorrect: false },
            ],
        },
        {
            content: 'What is the best scenario for using Azure VM "Spot Instances"?',
            explanation: 'Spot Instances are cheap but can be evicted at any time, making them suitable only for interruptible workloads (like batch processing).',
            answers: [
                { content: 'Critical e-commerce website', isCorrect: false },
                { content: 'Batch processing that can be paused', isCorrect: true },
                { content: 'Production database', isCorrect: false },
                { content: 'Emergency medical services', isCorrect: false },
            ],
        },
        {
            content: 'In Azure App Service configuration, what does "Always On" do?',
            explanation: 'It keeps the application loaded in memory, avoiding "cold start" delays for the first request after an idle period.',
            answers: [
                { content: 'Block hackers 24/7', isCorrect: false },
                { content: 'Prevent the app from idling out when there is no traffic', isCorrect: true },
                { content: 'Auto-backup every minute', isCorrect: false },
                { content: 'Increase network bandwidth', isCorrect: false },
            ],
        },
        {
            content: 'By default, what type of disk do Azure Kubernetes Service (AKS) Nodes use for the operating system?',
            explanation: 'AKS Nodes typically use Azure Managed Disks (Premium SSD) to ensure optimal performance.',
            answers: [
                { content: 'Standard HDD', isCorrect: false },
                { content: 'Premium SSD Managed Disks', isCorrect: true },
                { content: 'USB Drive', isCorrect: false },
                { content: 'Floppy Disk', isCorrect: false },
            ],
        },
        {
            content: 'You need to assign a Public IP address to a virtual machine. What is a key security difference between "Basic" and "Standard" Public IP SKUs?',
            explanation: 'Standard Public IP is "Closed to inbound" by default (requires an NSG), while Basic is "Open to inbound" by default (not recommended).',
            answers: [
                { content: 'Basic is more secure', isCorrect: false },
                { content: 'Standard blocks all inbound traffic by default unless an NSG allows it', isCorrect: true },
                { content: 'Standard is only for Linux', isCorrect: false },
                { content: 'They are identical in terms of security', isCorrect: false },
            ],
        },
        {
            content: 'To reduce costs when Azure virtual machines are not used at night, what should you do?',
            explanation: 'Use Azure Automation or scripts to automatically Stop (Deallocate)這些 VMs.',
            answers: [
                { content: 'Shut down inside the OS only', isCorrect: false },
                { content: 'Stop (Deallocate) the VM from the Azure Portal/CLI', isCorrect: true },
                { content: 'Delete the VM and recreate it the next morning', isCorrect: false },
                { content: 'Reduce RAM to minimum', isCorrect: false },
            ],
        },
        {
            content: 'Why is using "Managed Identities" more secure than using Connection Strings that contain passwords?',
            explanation: 'It completely eliminates the need to store and manage credentials inside source code or configuration files.',
            answers: [
                { content: 'Makes code run faster', isCorrect: false },
                { content: 'Eliminates the need to manage credentials for Azure services', isCorrect: true },
                { content: 'It is cheaper', isCorrect: false },
                { content: 'It only supports Microsoft SQL', isCorrect: false },
            ],
        },
        {
            content: 'How many Azure Subscriptions can a single Azure AD Tenant be associated with?',
            explanation: 'A single Tenant can manage many (thousands) of different Subscriptions.',
            answers: [
                { content: 'Only 1', isCorrect: false },
                { content: 'Maximum of 10', isCorrect: false },
                { content: 'Many (no practical limit for enterprise needs)', isCorrect: true },
                { content: 'Only pay-as-you-go Subscriptions', isCorrect: false },
            ],
        },
        {
            content: 'In the Azure RBAC model, what does "NotActions" in a Role definition mean?',
            explanation: 'It defines specific actions that are excluded from the set of allowed permissions (Actions).',
            answers: [
                { content: 'Absolutely forbidden actions', isCorrect: false },
                { content: 'Actions excluded from the allowed permissions set', isCorrect: true },
                { content: 'Actions reserved for admins only', isCorrect: false },
                { content: 'Free actions', isCorrect: false },
            ],
        },
        {
            content: 'What is the maximum number of Tags an Azure Storage Account can support?',
            explanation: 'Every Azure resource (including Storage Accounts) supports up to 50 Tags.',
            answers: [
                { content: '10', isCorrect: false },
                { content: '50', isCorrect: true },
                { content: '100', isCorrect: false },
                { content: 'Unlimited', isCorrect: false },
            ],
        },
        {
            content: 'What does the "Usage and estimated costs" tool in Azure Monitor help you do?',
            explanation: 'It provides insights into the volume of collected data and the projected cost for monitoring.',
            answers: [
                { content: 'Pay electricity bills', isCorrect: false },
                { content: 'View log data volume and estimated monitoring costs', isCorrect: true },
                { content: 'Forecast sales revenue', isCorrect: false },
                { content: 'Track employee salaries', isCorrect: false },
            ],
        },
        {
            content: 'To receive an alert if a virtual machine has a hardware disk failure, what should you base the alert on?',
            explanation: 'Use Azure Resource Health Alerts to receive notifications about resource hardware health.',
            answers: [
                { content: 'Activity Log', isCorrect: false },
                { content: 'Resource Health Alert', isCorrect: true },
                { content: 'CPU Metric', isCorrect: false },
                { content: 'Network In/Out Metric', isCorrect: false },
            ],
        },
        {
            content: 'Which of the following signals does Azure AD "Conditional Access" require as a condition?',
            explanation: 'Common signals include Location (IP), Device (Compliance), Application, and Sign-in risk.',
            answers: [
                { content: 'Weather', isCorrect: false },
                { content: 'Network location and device state', isCorrect: true },
                { content: 'Typing speed', isCorrect: false },
                { content: 'Free RAM capacity', isCorrect: false },
            ],
        },
        {
            content: 'When moving (Move) a virtual machine to a new Subscription, does its Public IP address change?',
            explanation: 'Generally, when moving resources between Subscriptions, basic properties like the IP address are kept if the resource type supports Move.',
            answers: [
                { content: 'Always changes', isCorrect: false },
                { content: 'Stays the same (if the resource is moved along with it)', isCorrect: true },
                { content: 'The IP will be deleted', isCorrect: false },
                { content: 'Only changes if using a static IP', isCorrect: false },
            ],
        },
        {
            content: 'What do you need to do to configure the "Soft Delete" feature for an Azure virtual machine?',
            explanation: 'Note: Soft Delete currently applies to backups in a Recovery Services Vault, not directly to the running VM entity.',
            answers: [
                { content: 'Enable in VM settings', isCorrect: false },
                { content: 'Enable in Recovery Services Vault settings', isCorrect: true },
                { content: 'Enable in Azure AD', isCorrect: false },
                { content: 'This feature does not exist', isCorrect: false },
            ],
        },
        {
            content: 'In which scenario does Azure App Service support "Traffic Routing"?',
            explanation: 'It supports routing traffic between Deployment Slots (e.g., routing 20% of traffic to a staging slot).',
            answers: [
                { content: 'Between different VNets', isCorrect: false },
                { content: 'Between Deployment Slots in the same App Service', isCorrect: true },
                { content: 'Between Azure and AWS', isCorrect: false },
                { content: 'Only between VMs', isCorrect: false },
            ],
        },
        {
            content: 'When using Azure File Sync, what happens if a file is modified directly on the Azure File Share (not via the on-premises server)?',
            explanation: 'Azure File Sync has a change detection job that runs periodically (default every 24h) to sync changes back to the servers.',
            answers: [
                { content: 'Change is synced immediately', isCorrect: false },
                { content: 'Change will be detected by a periodic scan job and synced back', isCorrect: true },
                { content: 'Change will be overwritten by the on-premises version', isCorrect: false },
                { content: 'The file will be corrupted', isCorrect: false },
            ],
        },
        {
            content: 'In Azure DNS, what does "TTL" (Time To Live) define?',
            explanation: 'It defines how long DNS records are cached by DNS clients and other servers.',
            answers: [
                { content: 'Server lifespan', isCorrect: false },
                { content: 'Caching time for DNS records', isCorrect: true },
                { content: 'Time to create a new record', isCorrect: false },
                { content: 'Laptop battery life', isCorrect: false },
            ],
        },
        {
            content: 'To which of the following objects can an Azure Route Table be assigned?',
            explanation: 'A Route Table is assigned to a Subnet to control routing for all resources in that subnet.',
            answers: [
                { content: 'Network Interface (NIC)', isCorrect: false },
                { content: 'Subnet', isCorrect: true },
                { content: 'Virtual Network (VNet)', isCorrect: false },
                { content: 'Management Group', isCorrect: false },
            ],
        },
        {
            content: 'What happens when peering two VNets that have overlapping IP address spaces?',
            explanation: 'Azure will not allow establishing the peering if there is any overlap in the IP address spaces.',
            answers: [
                { content: 'Network will slow down', isCorrect: false },
                { content: 'Establishing the peering will fail', isCorrect: true },
                { content: 'Azure will automatically change your IP', isCorrect: false },
                { content: 'Only one IP range will work', isCorrect: false },
            ],
        },
        {
            content: 'What is the required name for the dedicated subnet used by the Azure Bastion service?',
            explanation: 'The dedicated subnet for Bastion must be named exactly "AzureBastionSubnet".',
            answers: [
                { content: 'BastionSubnet', isCorrect: false },
                { content: 'AzureBastionSubnet', isCorrect: true },
                { content: 'GatewaySubnet', isCorrect: false },
                { content: 'ManagementSubnet', isCorrect: false },
            ],
        },
        {
            content: 'A virtual machine has two NICs. Can you assign these two NICs to two different VNets?',
            explanation: 'No, all NICs of a virtual machine must be within the same VNet (though they can be in different subnets).',
            answers: [
                { content: 'Yes, absolutely', isCorrect: false },
                { content: 'No, they must be in the same VNet', isCorrect: true },
                { content: 'Only when using PowerShell', isCorrect: false },
                { content: 'Only for giant VMs', isCorrect: false },
            ],
        },
        {
            content: 'What is the benefit of using "Service Tags" in an NSG?',
            explanation: 'It simplifies rule management by representing a group of IP address ranges for Azure services (e.g., Storage, SQL).',
            answers: [
                { content: 'Increase CPU speed', isCorrect: false },
                { content: 'Manage rules based on service groups instead of manual IP ranges', isCorrect: true },
                { content: 'Make the NSG cheaper', isCorrect: false },
                { content: 'Replace the use of passwords', isCorrect: false },
            ],
        },
        {
            content: 'You need to create a copy of an existing virtual machine to another Region. What is the fastest way?',
            explanation: 'Use Azure Site Recovery (ASR) to replicate the virtual machine to the target Region.',
            answers: [
                { content: 'Copy the disk over the internet', isCorrect: false },
                { content: 'Use Azure Site Recovery (Replication)', isCorrect: true },
                { content: 'Rebuild from scratch', isCorrect: false },
                { content: 'Take a screenshot and reinstall', isCorrect: false },
            ],
        },
        {
            content: 'When an Azure Policy is violated by a new resource being created, what will the "Deny" effect do?',
            explanation: 'It will completely block the creation of that resource and report an error to the user.',
            answers: [
                { content: 'Alert the Admin', isCorrect: false },
                { content: 'Prevent resource creation', isCorrect: true },
                { content: 'Automatically fix the error', isCorrect: false },
                { content: 'Delete the Subscription', isCorrect: false },
            ],
        },
        {
            content: 'You want to export an ARM Template from an existing Resource Group for reuse. Where in the Portal do you do this?',
            explanation: 'In the Resource Group menu, select the "Export template" feature.',
            answers: [
                { content: 'In Billing section', isCorrect: false },
                { content: 'In "Export template" section of the Resource Group', isCorrect: true },
                { content: 'In Azure AD', isCorrect: false },
                { content: 'In Help + Support section', isCorrect: false },
            ],
        },
        {
            content: 'To which service can an "Account SAS" type of "Shared Access Signature" (SAS) grant access?',
            explanation: 'An Account SAS can grant permissions for Blobs, Files, Queues, and Tables simultaneously.',
            answers: [
                { content: 'Blobs only', isCorrect: false },
                { content: 'All of Blobs, Files, Queues, and Tables', isCorrect: true },
                { content: 'Virtual machines only', isCorrect: false },
                { content: 'SQL only', isCorrect: false },
            ],
        },
        {
            content: 'To prevent changes to a virtual machine\'s firewall configuration while still allowing start/stop actions, which Role should you assign?',
            explanation: 'The "Virtual Machine Contributor" role allows managing the VM but does not allow changing the network (VNet/NSG) attached to it.',
            answers: [
                { content: 'Owner', isCorrect: false },
                { content: 'Virtual Machine Contributor', isCorrect: true },
                { content: 'Network Contributor', isCorrect: false },
                { content: 'Reader', isCorrect: false },
            ],
        },
        {
            content: 'What is Azure AD Connect "Password Writeback" used for?',
            explanation: 'It allows password changes made in the cloud (SSPR) to be synced back to on-premises Active Directory.',
            answers: [
                { content: 'Save passwords to a text file', isCorrect: false },
                { content: 'Sync passwords from Cloud to On-premises', isCorrect: true },
                { content: 'Delete old passwords', isCorrect: false },
                { content: 'Send passwords via email', isCorrect: false },
            ],
        },
        {
            content: 'When is the "Log Analytics Gateway" used in Azure Monitor?',
            explanation: 'It is used when your servers do not have a direct internet connection to send logs to Azure.',
            answers: [
                { content: 'When the internet is too fast', isCorrect: false },
                { content: 'When servers do not have direct internet access', isCorrect: true },
                { content: 'To reduce electricity costs', isCorrect: false },
                { content: 'To replace VPN', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Load Balancer configuration, a "Health Probe" receives no response from a backend server. What happens?',
            explanation: 'The Load Balancer will stop sending new connections to that server until it becomes healthy again.',
            answers: [
                { content: 'Delete that server from the system', isCorrect: false },
                { content: 'Stop sending traffic to the unhealthy server', isCorrect: true },
                { content: 'Automatically restart the server', isCorrect: false },
                { content: 'Report an error to all users', isCorrect: false },
            ],
        },
        {
            content: 'Does a "ReadOnly" level "Management Lock" prevent starting (Start) a virtual machine?',
            explanation: 'Yes, because the Start action changes the state of the resource, a ReadOnly lock will block this action.',
            answers: [
                { content: 'No, Start is a read action', isCorrect: false },
                { content: 'Yes, it will prevent Starting/Stopping the VM', isCorrect: true },
                { content: 'Only prevents deletion', isCorrect: false },
                { content: 'Only prevents renaming', isCorrect: false },
            ],
        },
    ],
};
