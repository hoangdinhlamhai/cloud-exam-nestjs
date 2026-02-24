export const az900Exam3 = {
    title: 'Azure Fundamentals AZ-900 - Practice Test 3',
    description: 'Azure Fundamentals AZ-900 practice test with 50 questions covering Management Tools, Monitoring, AI, and IoT.',
    durationMinutes: 65,
    courseId: 7,
    questions: [
        {
            content: 'Which Azure service helps you process large volumes of data for analytics (Big Data) and supports SQL as well as Spark?',
            explanation: 'Azure Synapse Analytics is a limitless analytics service that combines enterprise data warehousing and Big Data analytics.',
            answers: [
                { content: 'Azure SQL Database', isCorrect: false },
                { content: 'Azure Synapse Analytics', isCorrect: true },
                { content: 'Azure Cosmos DB', isCorrect: false },
                { content: 'Azure Table Storage', isCorrect: false },
            ],
        },
        {
            content: 'Azure Databricks is an analytics platform based on which service?',
            explanation: 'Azure Databricks is a data analytics platform based on Apache Spark, optimized for Microsoft Azure.',
            answers: [
                { content: 'Apache Spark', isCorrect: true },
                { content: 'Hadoop', isCorrect: false },
                { content: 'Kubernetes', isCorrect: false },
                { content: 'MySQL', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service provides large-scale data storage (Data Lake) capabilities for efficient analytics needs?',
            explanation: 'Azure Data Lake Storage Gen2 provides hierarchical file system features built on Azure Blob Storage.',
            answers: [
                { content: 'Azure Files', isCorrect: false },
                { content: 'Azure Data Lake Storage Gen2', isCorrect: true },
                { content: 'Azure Disk Storage', isCorrect: false },
                { content: 'Azure Backup', isCorrect: false },
            ],
        },
        {
            content: 'If you need a service that can automatically discover, classify, and protect sensitive data across your entire data infrastructure, what should you use?',
            explanation: 'Microsoft Purview provides a unified data governance solution that helps you manage and control on-premises, multi-cloud, and SaaS data.',
            answers: [
                { content: 'Azure Advisor', isCorrect: false },
                { content: 'Microsoft Purview', isCorrect: true },
                { content: 'Azure Monitor', isCorrect: false },
                { content: 'Azure Security Center', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service is designed for building, training, and deploying large-scale Machine Learning models?',
            explanation: 'Azure Machine Learning is a managed cloud service for building, training, and deploying ML models.',
            answers: [
                { content: 'Azure AI Services', isCorrect: false },
                { content: 'Azure Machine Learning', isCorrect: true },
                { content: 'Azure Databricks', isCorrect: false },
                { content: 'Azure Synapse', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure AI service allows you to analyze faces, emotions, and recognize objects in images?',
            explanation: 'Azure Computer Vision (part of Azure AI Services) provides image processing algorithms and returns information.',
            answers: [
                { content: 'Azure Language Service', isCorrect: false },
                { content: 'Azure Computer Vision', isCorrect: true },
                { content: 'Azure Custom Vision', isCorrect: false },
                { content: 'Azure Speech Service', isCorrect: false },
            ],
        },
        {
            content: 'What is Azure AI Language Service (formerly Text Analytics) used for?',
            explanation: 'It is used for Natural Language Processing (NLP) including sentiment analysis, entity extraction, and language recognition.',
            answers: [
                { content: 'Text translation', isCorrect: false },
                { content: 'Text analysis and NLP', isCorrect: true },
                { content: 'Creating chatbots', isCorrect: false },
                { content: 'Data search', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service helps you create intelligent agents that can interact with users through text or voice?',
            explanation: 'Azure Bot Service provides an integrated platform for building and hosting intelligent conversational bots.',
            answers: [
                { content: 'Azure Functions', isCorrect: false },
                { content: 'Azure Bot Service', isCorrect: true },
                { content: 'Azure Logic Apps', isCorrect: false },
                { content: 'Azure Cognitive Search', isCorrect: false },
            ],
        },
        {
            content: 'What role does IoT Hub play in an Internet of Things (IoT) solution?',
            explanation: 'IoT Hub is a cloud-hosted service that acts as a central message hub for bidirectional communication between IoT applications and the devices it manages.',
            answers: [
                { content: 'Storing device files', isCorrect: false },
                { content: 'A hub for connecting and managing millions of IoT devices', isCorrect: true },
                { content: 'Analyzing images from cameras', isCorrect: false },
                { content: 'Building data display websites', isCorrect: false },
            ],
        },
        {
            content: 'How does Azure IoT Central differ from IoT Hub?',
            explanation: 'IoT Central is a fully managed SaaS IoT solution that helps you quickly deploy IoT applications without deep cloud knowledge.',
            answers: [
                { content: 'It is much more expensive', isCorrect: false },
                { content: 'It is a SaaS solution enabling rapid deployment without much coding', isCorrect: true },
                { content: 'It only supports Microsoft devices', isCorrect: false },
                { content: 'It is less secure than IoT Hub', isCorrect: false },
            ],
        },
        {
            content: 'What is Azure Sphere designed to do?',
            explanation: 'Azure Sphere is a secure, high-level application platform with built-in communication and security features for internet-connected devices.',
            answers: [
                { content: 'Storing IoT databases', isCorrect: false },
                { content: 'End-to-end security for IoT hardware devices', isCorrect: true },
                { content: 'Satellite network connectivity', isCorrect: false },
                { content: 'Analyzing network logs', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service allows you to automate workflows by connecting different applications and services without writing code?',
            explanation: 'Azure Logic Apps is a cloud platform used to build automated business process integration solutions.',
            answers: [
                { content: 'Azure Functions', isCorrect: false },
                { content: 'Azure Logic Apps', isCorrect: true },
                { content: 'Azure Event Grid', isCorrect: false },
                { content: 'Azure App Service', isCorrect: false },
            ],
        },
        {
            content: 'What problem does the concept "Infrastructure as Code" (IaC) help solve?',
            explanation: 'IaC helps eliminate errors from manual configuration and ensures environment consistency through version-controllable source code.',
            answers: [
                { content: 'Makes code run faster', isCorrect: false },
                { content: 'Manages and deploys infrastructure automatically and consistently', isCorrect: true },
                { content: 'Replaces programmers', isCorrect: false },
                { content: 'Stores data more cheaply', isCorrect: false },
            ],
        },
        {
            content: 'What is GitHub Actions in Azure primarily used for?',
            explanation: 'GitHub Actions allows you to automate, customize, and execute software development processes (CI/CD) directly in your GitHub repository.',
            answers: [
                { content: 'Storing secrets', isCorrect: false },
                { content: 'Automating CI/CD processes', isCorrect: true },
                { content: 'Creating virtual machines', isCorrect: false },
                { content: 'Managing DNS', isCorrect: false },
            ],
        },
        {
            content: 'How does Azure DevTest Labs help development teams?',
            explanation: 'It allows developers to quickly create self-service test environments while still being under organizational cost and policy controls.',
            answers: [
                { content: 'Internal chat system', isCorrect: false },
                { content: 'Managing lab environments and saving dev/test costs', isCorrect: true },
                { content: 'AI training', isCorrect: false },
                { content: 'Selling software', isCorrect: false },
            ],
        },
        {
            content: 'Which service collects application performance data and helps you find the root cause of delays in your code?',
            explanation: 'Application Insights (a feature of Azure Monitor) provides Application Performance Monitoring (APM) capabilities.',
            answers: [
                { content: 'Azure Advisor', isCorrect: false },
                { content: 'Application Insights', isCorrect: true },
                { content: 'Log Analytics', isCorrect: false },
                { content: 'Activity Log', isCorrect: false },
            ],
        },
        {
            content: 'What is the difference between Azure Activity Log and Resource Logs?',
            explanation: 'Activity Log records changes at the Subscription level (who did what), while Resource Logs record activity within the resource itself.',
            answers: [
                { content: 'There is no difference', isCorrect: false },
                { content: 'Activity Log records Subscription-level events, Resource Logs record activity of individual resources', isCorrect: true },
                { content: 'Activity Log is only for VMs, Resource Logs for everything', isCorrect: false },
                { content: 'Activity Log is free, Resource Logs cost money', isCorrect: false },
            ],
        },
        {
            content: 'What is Azure Log Analytics Workspace?',
            explanation: 'It is a container where log data from various sources is collected and stored, and you can query it using the Kusto Query Language (KQL).',
            answers: [
                { content: 'A hard drive', isCorrect: false },
                { content: 'A centralized log data storage and query location', isCorrect: true },
                { content: 'A text editor', isCorrect: false },
                { content: 'Antivirus software', isCorrect: false },
            ],
        },
        {
            content: 'Which service provides notifications about upcoming Azure scheduled maintenance events that may affect you?',
            explanation: 'Azure Service Health informs you about maintenance plans from Microsoft.',
            answers: [
                { content: 'Azure Monitor', isCorrect: false },
                { content: 'Azure Service Health', isCorrect: true },
                { content: 'Azure Backup', isCorrect: false },
                { content: 'Azure Policy', isCorrect: false },
            ],
        },
        {
            content: 'What data challenge does Microsoft Purview help solve?',
            explanation: 'It addresses the challenge of discovering and understanding data lineage in a complex data ecosystem.',
            answers: [
                { content: 'Speeding up SQL queries', isCorrect: false },
                { content: 'Data governance and organization-wide data mapping', isCorrect: true },
                { content: 'File backup', isCorrect: false },
                { content: 'Data compression', isCorrect: false },
            ],
        },
        {
            content: 'Which operating systems can Azure CLI run on?',
            explanation: 'Azure CLI is a cross-platform tool that can run on Windows, macOS, and Linux.',
            answers: [
                { content: 'Windows only', isCorrect: false },
                { content: 'Windows, macOS, and Linux', isCorrect: true },
                { content: 'Windows and Linux only', isCorrect: false },
                { content: 'Android and iOS only', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure Support plan provides 24/7 access to support engineers via phone and email for technical issues?',
            explanation: 'Starting from the Developer plan you get email technical support, but from Standard and above you get 24/7 phone support.',
            answers: [
                { content: 'Basic', isCorrect: false },
                { content: 'Standard (or higher)', isCorrect: true },
                { content: 'Free', isCorrect: false },
                { content: 'Hobbyist', isCorrect: false },
            ],
        },
        {
            content: 'What is the benefit of using Tagging for Billing purposes?',
            explanation: 'It allows you to group and filter costs in Azure Cost Management based on assigned tags.',
            answers: [
                { content: 'Direct 10% discount', isCorrect: false },
                { content: 'Accurate cost reporting by department/project', isCorrect: true },
                { content: 'Automatic bill payment', isCorrect: false },
                { content: 'Makes invoices shorter', isCorrect: false },
            ],
        },
        {
            content: 'What does a "Tenant" in Azure AD represent?',
            explanation: 'A Tenant represents an organization or a specific entity in Azure AD.',
            answers: [
                { content: 'A single user', isCorrect: false },
                { content: 'An organization or enterprise identity', isCorrect: true },
                { content: 'A server at Microsoft', isCorrect: false },
                { content: 'A software application', isCorrect: false },
            ],
        },
        {
            content: 'Can you have multiple Subscriptions within the same Azure AD Tenant?',
            explanation: 'Yes, a Tenant can manage multiple different Subscriptions to serve separate financial or administrative needs.',
            answers: [
                { content: 'Never', isCorrect: false },
                { content: 'Yes, absolutely', isCorrect: true },
                { content: 'Maximum of 2 only', isCorrect: false },
                { content: 'Only when using Enterprise Agreement', isCorrect: false },
            ],
        },
        {
            content: 'What benefit does Azure Dedicated Host provide to organizations?',
            explanation: 'It provides physical servers dedicated to a single customer, helping meet strict security and compliance requirements.',
            answers: [
                { content: 'Cheapest option', isCorrect: false },
                { content: 'Dedicated physical server for a single customer', isCorrect: true },
                { content: 'Web speed 10 times faster', isCorrect: false },
                { content: 'No VM management needed', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service helps prevent access to resources from IP addresses suspected to be dangerous?',
            explanation: 'Azure Firewall and Microsoft Sentinel have Threat Intelligence features to detect and block malicious IPs.',
            answers: [
                { content: 'Azure Load Balancer', isCorrect: false },
                { content: 'Azure Firewall with Threat Intel', isCorrect: true },
                { content: 'Azure Monitor', isCorrect: false },
                { content: 'Azure DNS', isCorrect: false },
            ],
        },
        {
            content: 'How does the "Owner" role differ from "Contributor" in RBAC?',
            explanation: 'Both have resource management permissions, but only the Owner has the right to change access permissions (assign roles) for others.',
            answers: [
                { content: 'Owner cannot delete resources', isCorrect: false },
                { content: 'Owner has access management permissions', isCorrect: true },
                { content: 'Contributor is more expensive', isCorrect: false },
                { content: 'There is no difference', isCorrect: false },
            ],
        },
        {
            content: 'If a Region is completely down (outage), which service helps you recover virtual machines at another Region?',
            explanation: 'Azure Site Recovery (ASR) provides Disaster Recovery capability by replicating workloads to another Region.',
            answers: [
                { content: 'Azure Backup', isCorrect: false },
                { content: 'Azure Site Recovery', isCorrect: true },
                { content: 'Azure Load Balancer', isCorrect: false },
                { content: 'Azure VPN Gateway', isCorrect: false },
            ],
        },
        {
            content: 'What is the difference between Azure Backup and Azure Site Recovery?',
            explanation: 'Backup is used to restore data from the past (long-term storage), while Site Recovery is used to maintain business continuity during incidents.',
            answers: [
                { content: 'They are the same', isCorrect: false },
                { content: 'Backup is for historical data, Site Recovery is for immediate disaster recovery', isCorrect: true },
                { content: 'Backup is only for SQL, Site Recovery is for VMs', isCorrect: false },
                { content: 'Backup is free, Site Recovery costs money', isCorrect: false },
            ],
        },
        {
            content: 'Which tool uses the Kusto Query Language (KQL)?',
            explanation: 'KQL is the primary language used to query data in Azure Log Analytics and Microsoft Sentinel.',
            answers: [
                { content: 'Azure SQL Database', isCorrect: false },
                { content: 'Azure Log Analytics', isCorrect: true },
                { content: 'Azure Policy', isCorrect: false },
                { content: 'ARM Templates', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service helps you migrate large amounts of data (up to hundreds of Terabytes) using a physical device to Azure?',
            explanation: 'Azure Data Box is a hardware device that Microsoft sends to you to copy data, which you then ship back to them for upload to the cloud.',
            answers: [
                { content: 'Azure ExpressRoute', isCorrect: false },
                { content: 'Azure Data Box', isCorrect: true },
                { content: 'Azure Data Factory', isCorrect: false },
                { content: 'Azure Storage Explorer', isCorrect: false },
            ],
        },
        {
            content: 'What happens to an Azure virtual machine if you leave its status as "Stopped"?',
            explanation: 'If only Stopped (not Deallocated), you will still be charged for the virtual machines because the physical compute resources are still reserved for you.',
            answers: [
                { content: 'All charges will stop immediately', isCorrect: false },
                { content: 'You will still be charged for compute resources', isCorrect: true },
                { content: 'All data will be deleted', isCorrect: false },
                { content: 'The service will automatically delete the VM after 1 hour', isCorrect: false },
            ],
        },
        {
            content: 'When should you choose to "Deallocate" a virtual machine?',
            explanation: 'When you want to completely stop the virtual machine and not be charged for compute resources (only pay for disk storage).',
            answers: [
                { content: 'When installing software', isCorrect: false },
                { content: 'When you want to avoid compute costs while not in use', isCorrect: true },
                { content: 'When you want to speed up the VM', isCorrect: false },
                { content: 'When you want to change the public IP', isCorrect: false },
            ],
        },
        {
            content: 'What characteristic does the Public Cloud model have regarding resource usage?',
            explanation: 'Multiple customers (multi-tenant) share the same physical hardware infrastructure but are securely isolated through virtualization.',
            answers: [
                { content: 'Each customer has their own data center', isCorrect: false },
                { content: 'Multiple organizations share resource infrastructure (Multi-tenancy)', isCorrect: true },
                { content: 'Only for small organizations', isCorrect: false },
                { content: 'No Internet connection', isCorrect: false },
            ],
        },
        {
            content: 'What is an Azure Regional Pair?',
            explanation: 'It is a pair of Regions on the same continent (geography) that Microsoft always pairs together for data replication and disaster recovery.',
            answers: [
                { content: 'Two servers in the same rack', isCorrect: false },
                { content: 'Two Azure Regions linked to protect data', isCorrect: true },
                { content: 'Network connection between two departments', isCorrect: false },
                { content: 'Two Azure accounts of the same person', isCorrect: false },
            ],
        },
        {
            content: 'What is the benefit of Regional Pairs during an Azure upgrade incident?',
            explanation: 'Microsoft ensures that at any given time, only one of the two Regions in the Regional Pair is upgraded to avoid simultaneous failures.',
            answers: [
                { content: 'Saves 50% of costs', isCorrect: false },
                { content: 'Ensures the application always has one active Region during upgrades', isCorrect: true },
                { content: 'Data is processed twice as fast', isCorrect: false },
                { content: 'No need for VPN', isCorrect: false },
            ],
        },
        {
            content: 'In Microsoft Entra ID, what problem does Identity Governance help solve?',
            explanation: 'It helps ensure the right people have the right access to the right resources and can be audited periodically.',
            answers: [
                { content: 'Changing company logo', isCorrect: false },
                { content: 'Managing access lifecycle and periodic compliance', isCorrect: true },
                { content: 'Creating email accounts', isCorrect: false },
                { content: 'Managing hard drives', isCorrect: false },
            ],
        },
        {
            content: 'Can an Azure Service Level Agreement (SLA) ever be 100%?',
            explanation: 'SLAs are never 100% because systems always carry technical risks; typical figures are 99.9%, 99.95%, or 99.99%.',
            answers: [
                { content: 'Yes, for critical services', isCorrect: false },
                { content: 'Never, typically less than 100%', isCorrect: true },
                { content: 'Only when paying extra', isCorrect: false },
                { content: 'Only for government customers', isCorrect: false },
            ],
        },
        {
            content: 'What does Microsoft commit to in the SLA regarding compensation if they fail to achieve uptime?',
            explanation: 'Microsoft typically compensates in the form of Service Credits for customers.',
            answers: [
                { content: 'Immediate cash refund', isCorrect: false },
                { content: 'Providing service credits for the next billing cycle', isCorrect: true },
                { content: 'A written apology', isCorrect: false },
                { content: 'An additional free virtual machine', isCorrect: false },
            ],
        },
        {
            content: 'What does Azure Cost Management and Billing help you do?',
            explanation: 'It helps track, forecast costs, and optimize discounts for your Azure subscriptions.',
            answers: [
                { content: 'Installing Linux operating systems', isCorrect: false },
                { content: 'Tracking, forecasting, and optimizing cloud spending', isCorrect: true },
                { content: 'Communicating with customers', isCorrect: false },
                { content: 'Checking code errors', isCorrect: false },
            ],
        },
        {
            content: 'Setting the rule "All Resource Groups must have an Owner tag" is an example of what?',
            explanation: 'This is a governance policy (Azure Policy) to ensure transparency and better resource management.',
            answers: [
                { content: 'MFA security', isCorrect: false },
                { content: 'Enforcing resource governance policies', isCorrect: true },
                { content: 'Optimizing CPU speed', isCorrect: false },
                { content: 'Creating a Microsoft 365 account', isCorrect: false },
            ],
        },
        {
            content: 'Why should you use Azure Storage Explorer?',
            explanation: 'It is a standalone desktop application that helps you easily manage Azure storage data remotely through a graphical interface.',
            answers: [
                { content: 'To fix Windows errors', isCorrect: false },
                { content: 'Easily manage storage data through a GUI on desktop', isCorrect: true },
                { content: 'To play games', isCorrect: false },
                { content: 'To compress rar files', isCorrect: false },
            ],
        },
        {
            content: 'What does Azure "General Availability" (GA) mean?',
            explanation: 'It means the service has been thoroughly tested, fully supported, and has an official SLA commitment, ready for large-scale use.',
            answers: [
                { content: 'The service is running in trial mode', isCorrect: false },
                { content: 'The service is officially released with full support', isCorrect: true },
                { content: 'The service is about to be removed', isCorrect: false },
                { content: 'The service is free forever', isCorrect: false },
            ],
        },
        {
            content: 'What is the difference between "Public Preview" and "Private Preview"?',
            explanation: 'Public Preview is available for all customers to test, while Private Preview is only for a select group of chosen customers.',
            answers: [
                { content: 'Public Preview costs money, Private is free', isCorrect: false },
                { content: 'Public is for all users, Private is only for invited customers', isCorrect: true },
                { content: 'Public is always more secure', isCorrect: false },
                { content: 'There is no difference', isCorrect: false },
            ],
        },
        {
            content: 'Should you use services in "Preview" status for critical Production environments?',
            explanation: 'Not recommended, as these services have no SLA commitment and may undergo unexpected structural changes.',
            answers: [
                { content: 'Yes, because it is free', isCorrect: false },
                { content: 'No, because there is no SLA commitment and absolute stability', isCorrect: true },
                { content: 'Only when Microsoft requests it', isCorrect: false },
                { content: 'Only when using Linux', isCorrect: false },
            ],
        },
        {
            content: 'What does the concept "Scaling Out" in Azure mean?',
            explanation: 'Scaling out (or horizontal scaling) is the process of adding more instances (servers) to distribute the traffic load.',
            answers: [
                { content: 'Making a virtual machine more powerful by adding RAM', isCorrect: false },
                { content: 'Adding more virtual machines to distribute the load', isCorrect: true },
                { content: 'Increasing internet speed', isCorrect: false },
                { content: 'Encrypting more disks', isCorrect: false },
            ],
        },
        {
            content: 'How does "Scaling Up" differ from "Scaling Out"?',
            explanation: 'Scaling up is increasing the hardware specifications (CPU/RAM) of an existing server, while Scaling out is adding more new servers.',
            answers: [
                { content: 'Scaling up is cheaper than Scaling out', isCorrect: false },
                { content: 'Scaling up is upgrading instance hardware, Scaling out is adding instances', isCorrect: true },
                { content: 'Scaling up is only for SQL', isCorrect: false },
                { content: 'They are synonyms', isCorrect: false },
            ],
        },
        {
            content: 'What is the benefit of "Cloud Agility"?',
            explanation: 'It allows businesses to quickly deploy and customize resources to rapidly respond to market changes.',
            answers: [
                { content: 'Saves 90% on electricity costs', isCorrect: false },
                { content: 'Ability to deploy and test quickly (High readiness)', isCorrect: true },
                { content: 'Makes applications look better', isCorrect: false },
                { content: 'Completely eliminates hackers', isCorrect: false },
            ],
        },
        {
            content: 'Can the Microsoft Cost Management tool manage spending for cloud platforms other than Azure?',
            explanation: 'Yes, Microsoft Cost Management now supports integration with AWS through the AWS Connector.',
            answers: [
                { content: 'Azure only', isCorrect: false },
                { content: 'Can also manage AWS', isCorrect: true },
                { content: 'Can also manage Google Cloud', isCorrect: false },
                { content: 'Only on-premises servers', isCorrect: false },
            ],
        },
    ],
};
