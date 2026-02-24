export const azureFundamentalsExam1 = {
    title: 'Azure Fundamentals AZ-900 - Practice Exam 1',
    description:
        'Đề thi thử Azure Fundamentals AZ-900. 35 câu hỏi về cloud concepts, Azure services, security, privacy, compliance và Azure pricing.',
    durationMinutes: 60,
    courseId: 7,
    questions: [
        {
            content:
                'Which cloud computing model provides the MOST control over hardware and operating systems?',
            explanation:
                'Infrastructure as a Service (IaaS) provides the most control over the underlying infrastructure, including hardware, operating systems, and networking components. Examples include Azure Virtual Machines.',
            answers: [
                { content: 'Software as a Service (SaaS)', isCorrect: false },
                { content: 'Platform as a Service (PaaS)', isCorrect: false },
                { content: 'Infrastructure as a Service (IaaS)', isCorrect: true },
                { content: 'Function as a Service (FaaS)', isCorrect: false },
            ],
        },
        {
            content:
                'What is Azure Active Directory (Azure AD) used for?',
            explanation:
                'Azure Active Directory (Azure AD) is a cloud-based identity and access management service. It helps employees sign in and access resources in external resources such as Microsoft 365, the Azure portal, and SaaS applications.',
            answers: [
                { content: 'Virtual machine management', isCorrect: false },
                { content: 'Cloud-based identity and access management', isCorrect: true },
                { content: 'Network traffic management', isCorrect: false },
                { content: 'Data storage', isCorrect: false },
            ],
        },
        {
            content:
                'Which Azure service provides serverless compute?',
            explanation:
                'Azure Functions is a serverless compute service that lets you run event-triggered code without having to explicitly provision or manage infrastructure. You only pay for the compute time you consume.',
            answers: [
                { content: 'Azure Virtual Machines', isCorrect: false },
                { content: 'Azure Functions', isCorrect: true },
                { content: 'Azure Kubernetes Service', isCorrect: false },
                { content: 'Azure App Service', isCorrect: false },
            ],
        },
        {
            content:
                'What is an Azure Region?',
            explanation:
                'An Azure Region is a set of data centers deployed within a latency-defined perimeter and connected through a dedicated regional low-latency network. Azure has more global regions than any other cloud provider.',
            answers: [
                { content: 'A single data center', isCorrect: false },
                { content: 'A set of data centers in a defined geographic area', isCorrect: true },
                { content: 'A virtual network', isCorrect: false },
                { content: 'A subscription boundary', isCorrect: false },
            ],
        },
        {
            content:
                'Which Azure service provides a managed relational database?',
            explanation:
                'Azure SQL Database is a fully managed platform as a service (PaaS) database engine that handles most of the database management functions such as upgrading, patching, backups, and monitoring without user involvement.',
            answers: [
                { content: 'Azure Cosmos DB', isCorrect: false },
                { content: 'Azure SQL Database', isCorrect: true },
                { content: 'Azure Blob Storage', isCorrect: false },
                { content: 'Azure Table Storage', isCorrect: false },
            ],
        },
        {
            content:
                'What is the purpose of Azure Availability Zones?',
            explanation:
                'Azure Availability Zones are physically separate locations within an Azure region. Each zone has one or more data centers equipped with independent power, cooling, and networking to protect applications from data center failures.',
            answers: [
                { content: 'To provide content delivery', isCorrect: false },
                { content: 'To protect against data center failures within a region', isCorrect: true },
                { content: 'To balance network traffic', isCorrect: false },
                { content: 'To manage DNS records', isCorrect: false },
            ],
        },
        {
            content:
                'Which Azure service is used for object storage similar to Amazon S3?',
            explanation:
                'Azure Blob Storage is optimized for storing massive amounts of unstructured data, such as text or binary data. It is the equivalent of Amazon S3 in the Azure ecosystem.',
            answers: [
                { content: 'Azure Files', isCorrect: false },
                { content: 'Azure Blob Storage', isCorrect: true },
                { content: 'Azure Disk Storage', isCorrect: false },
                { content: 'Azure Queue Storage', isCorrect: false },
            ],
        },
        {
            content:
                'What is the Azure Marketplace?',
            explanation:
                'Azure Marketplace is an online store that contains thousands of IT solutions and services from Microsoft and third-party partners, including virtual machine images, databases, developer tools, and more.',
            answers: [
                { content: 'A billing management tool', isCorrect: false },
                { content: 'An online store for IT solutions and services', isCorrect: true },
                { content: 'A resource management service', isCorrect: false },
                { content: 'A monitoring dashboard', isCorrect: false },
            ],
        },
        {
            content:
                'Which Azure service provides DDoS protection?',
            explanation:
                'Azure DDoS Protection provides enhanced DDoS mitigation features to defend against DDoS attacks. It is automatically tuned to protect your specific Azure resources in a virtual network.',
            answers: [
                { content: 'Azure Firewall', isCorrect: false },
                { content: 'Azure DDoS Protection', isCorrect: true },
                { content: 'Azure Security Center', isCorrect: false },
                { content: 'Azure Application Gateway', isCorrect: false },
            ],
        },
        {
            content:
                'What is the Azure Resource Manager (ARM)?',
            explanation:
                'Azure Resource Manager is the deployment and management service for Azure. It provides a management layer that enables you to create, update, and delete resources in your Azure account through templates and APIs.',
            answers: [
                { content: 'A monitoring service', isCorrect: false },
                { content: 'The deployment and management service for Azure', isCorrect: true },
                { content: 'A storage service', isCorrect: false },
                { content: 'A compute service', isCorrect: false },
            ],
        },
        {
            content:
                'Which pricing model in Azure provides the largest discount for a commitment of 1 or 3 years?',
            explanation:
                'Azure Reserved Instances provide up to 72% cost savings compared to pay-as-you-go pricing. You commit to using a specific VM type in a specific region for 1 or 3 years.',
            answers: [
                { content: 'Pay-As-You-Go', isCorrect: false },
                { content: 'Reserved Instances', isCorrect: true },
                { content: 'Spot VMs', isCorrect: false },
                { content: 'Free Tier', isCorrect: false },
            ],
        },
        {
            content:
                'What is Azure DevOps used for?',
            explanation:
                'Azure DevOps provides developer services for support teams to plan work, collaborate on code development, and build and deploy applications. It includes Azure Repos, Azure Pipelines, Azure Boards, Azure Test Plans, and Azure Artifacts.',
            answers: [
                { content: 'Virtual machine management', isCorrect: false },
                { content: 'Planning, developing, delivering, and operating software', isCorrect: true },
                { content: 'Network monitoring', isCorrect: false },
                { content: 'Database administration', isCorrect: false },
            ],
        },
        {
            content:
                'Which Azure service provides a globally distributed, multi-model database?',
            explanation:
                'Azure Cosmos DB is a globally distributed, multi-model database service. It supports document, key-value, graph, and column-family data models with guaranteed single-digit millisecond latency at the 99th percentile.',
            answers: [
                { content: 'Azure SQL Database', isCorrect: false },
                { content: 'Azure Cosmos DB', isCorrect: true },
                { content: 'Azure Database for MySQL', isCorrect: false },
                { content: 'Azure Cache for Redis', isCorrect: false },
            ],
        },
        {
            content:
                'What is the purpose of Azure Policy?',
            explanation:
                'Azure Policy helps to enforce organizational standards and to assess compliance at-scale. It evaluates resources in Azure by comparing the properties of those resources to business rules defined in JSON format.',
            answers: [
                { content: 'Manage user authentication', isCorrect: false },
                { content: 'Enforce organizational standards and assess compliance', isCorrect: true },
                { content: 'Monitor resource performance', isCorrect: false },
                { content: 'Deploy virtual machines', isCorrect: false },
            ],
        },
        {
            content:
                'Which Azure service allows you to create virtual networks?',
            explanation:
                'Azure Virtual Network (VNet) is the fundamental building block for your private network in Azure. VNet enables Azure resources to securely communicate with each other, the internet, and on-premises networks.',
            answers: [
                { content: 'Azure ExpressRoute', isCorrect: false },
                { content: 'Azure Virtual Network (VNet)', isCorrect: true },
                { content: 'Azure CDN', isCorrect: false },
                { content: 'Azure DNS', isCorrect: false },
            ],
        },
        {
            content:
                'What does the Azure Total Cost of Ownership (TCO) Calculator do?',
            explanation:
                'The Azure TCO Calculator helps you estimate the cost savings you can realize by migrating your workloads to Azure. It compares the costs of running workloads on-premises versus in Azure.',
            answers: [
                { content: 'Monitors your current Azure spending', isCorrect: false },
                { content: 'Estimates cost savings from migrating to Azure', isCorrect: true },
                { content: 'Provides real-time billing information', isCorrect: false },
                { content: 'Predicts future usage patterns', isCorrect: false },
            ],
        },
        {
            content:
                'Which Azure service provides a managed Kubernetes container orchestration?',
            explanation:
                'Azure Kubernetes Service (AKS) simplifies deploying a managed Kubernetes cluster in Azure. It reduces the complexity and operational overhead of managing Kubernetes by offloading much of that responsibility to Azure.',
            answers: [
                { content: 'Azure Container Instances', isCorrect: false },
                { content: 'Azure Kubernetes Service (AKS)', isCorrect: true },
                { content: 'Azure App Service', isCorrect: false },
                { content: 'Azure Batch', isCorrect: false },
            ],
        },
        {
            content:
                'What is Azure Monitor used for?',
            explanation:
                'Azure Monitor maximizes the availability and performance of your applications and services. It delivers a comprehensive solution for collecting, analyzing, and acting on telemetry from your cloud and on-premises environments.',
            answers: [
                { content: 'Managing virtual machines', isCorrect: false },
                { content: 'Collecting and analyzing telemetry data', isCorrect: true },
                { content: 'Deploying applications', isCorrect: false },
                { content: 'Managing network traffic', isCorrect: false },
            ],
        },
        {
            content:
                'Which of the following is a characteristic of a public cloud?',
            explanation:
                'In a public cloud, resources are owned and operated by a third-party cloud service provider and delivered over the internet. Multiple organizations (tenants) share the same infrastructure.',
            answers: [
                { content: 'Resources are dedicated to a single organization', isCorrect: false },
                { content: 'Shared resources accessible over the internet', isCorrect: true },
                { content: 'Hardware is owned by the customer', isCorrect: false },
                { content: 'No internet connectivity required', isCorrect: false },
            ],
        },
        {
            content:
                'What is the purpose of Azure Key Vault?',
            explanation:
                'Azure Key Vault helps safeguard cryptographic keys, certificates, and secrets used by cloud applications and services. It provides secure key management with hardware security module (HSM) backed keys.',
            answers: [
                { content: 'Manage virtual machine access', isCorrect: false },
                { content: 'Safeguard cryptographic keys, certificates, and secrets', isCorrect: true },
                { content: 'Store application code', isCorrect: false },
                { content: 'Monitor network traffic', isCorrect: false },
            ],
        },
        {
            content:
                'Which Azure service can be used to build, train, and deploy machine learning models?',
            explanation:
                'Azure Machine Learning is a cloud-based environment you can use to train, deploy, automate, manage, and track machine learning models. It supports a wide variety of ML frameworks and tools.',
            answers: [
                { content: 'Azure Cognitive Services', isCorrect: false },
                { content: 'Azure Machine Learning', isCorrect: true },
                { content: 'Azure Bot Service', isCorrect: false },
                { content: 'Azure Databricks', isCorrect: false },
            ],
        },
        {
            content:
                'What is the purpose of Network Security Groups (NSGs) in Azure?',
            explanation:
                'Network Security Groups contain a list of security rules that allow or deny inbound or outbound network traffic. NSGs can be associated with subnets or individual network interfaces.',
            answers: [
                { content: 'Encrypt data at rest', isCorrect: false },
                { content: 'Filter network traffic to and from Azure resources', isCorrect: true },
                { content: 'Manage DNS records', isCorrect: false },
                { content: 'Load balance traffic', isCorrect: false },
            ],
        },
        {
            content:
                'Which Azure service allows you to manage and govern multiple Azure subscriptions?',
            explanation:
                'Azure Management Groups provide a level of scope above subscriptions. You organize subscriptions into management groups and apply governance conditions. All subscriptions within a management group automatically inherit the conditions.',
            answers: [
                { content: 'Azure Resource Groups', isCorrect: false },
                { content: 'Azure Management Groups', isCorrect: true },
                { content: 'Azure Active Directory', isCorrect: false },
                { content: 'Azure Policy', isCorrect: false },
            ],
        },
        {
            content:
                'What is Azure ExpressRoute?',
            explanation:
                'Azure ExpressRoute lets you extend your on-premises networks into the Microsoft cloud over a private connection facilitated by a connectivity provider. It does not go over the public internet.',
            answers: [
                { content: 'A VPN gateway service', isCorrect: false },
                { content: 'A dedicated private connection to Azure', isCorrect: true },
                { content: 'A content delivery network', isCorrect: false },
                { content: 'A DNS management service', isCorrect: false },
            ],
        },
        {
            content:
                'Which Azure service provides pre-built AI capabilities through APIs without requiring machine learning expertise?',
            explanation:
                'Azure Cognitive Services provide pre-built AI models as APIs for vision, speech, language, and decision-making. Developers can add intelligent features to applications without deep ML expertise.',
            answers: [
                { content: 'Azure Machine Learning', isCorrect: false },
                { content: 'Azure Cognitive Services', isCorrect: true },
                { content: 'Azure Databricks', isCorrect: false },
                { content: 'Azure HDInsight', isCorrect: false },
            ],
        },
        {
            content:
                'What is the purpose of Azure Cost Management + Billing?',
            explanation:
                'Azure Cost Management + Billing helps you understand your Azure bill, manage your account and subscriptions, monitor and control Azure spending, and optimize resource use.',
            answers: [
                { content: 'Deploy resources', isCorrect: false },
                { content: 'Monitor and control Azure spending and optimize costs', isCorrect: true },
                { content: 'Manage user access', isCorrect: false },
                { content: 'Configure networking', isCorrect: false },
            ],
        },
        {
            content:
                'Which type of cloud deployment model combines on-premises infrastructure with cloud resources?',
            explanation:
                'A hybrid cloud is a computing environment that combines a public cloud and a private cloud by allowing data and applications to be shared between them. This gives businesses greater flexibility and more deployment options.',
            answers: [
                { content: 'Public cloud', isCorrect: false },
                { content: 'Private cloud', isCorrect: false },
                { content: 'Hybrid cloud', isCorrect: true },
                { content: 'Community cloud', isCorrect: false },
            ],
        },
        {
            content:
                'What is Azure Advisor?',
            explanation:
                'Azure Advisor is a personalized cloud consultant that helps you follow best practices to optimize your Azure deployments. It analyzes your resource configuration and usage telemetry and then recommends solutions for cost, security, reliability, and performance.',
            answers: [
                { content: 'A billing management tool', isCorrect: false },
                { content: 'A personalized recommendation service for best practices', isCorrect: true },
                { content: 'A deployment automation tool', isCorrect: false },
                { content: 'A network monitoring service', isCorrect: false },
            ],
        },
        {
            content:
                'Which Azure service provides a fully managed platform for building web and mobile apps?',
            explanation:
                'Azure App Service is a fully managed platform for building, deploying, and scaling web apps. It supports multiple programming languages and frameworks, including .NET, Java, Node.js, Python, and PHP.',
            answers: [
                { content: 'Azure Virtual Machines', isCorrect: false },
                { content: 'Azure App Service', isCorrect: true },
                { content: 'Azure Container Instances', isCorrect: false },
                { content: 'Azure Functions', isCorrect: false },
            ],
        },
        {
            content:
                'What is the purpose of Azure Service Health?',
            explanation:
                'Azure Service Health provides personalized alerts and guidance when Azure service issues affect you. It can notify you about planned maintenance, help you prepare for changes, and assist with troubleshooting.',
            answers: [
                { content: 'Monitor application performance', isCorrect: false },
                { content: 'Provide alerts about Azure service issues and planned maintenance', isCorrect: true },
                { content: 'Manage resource scaling', isCorrect: false },
                { content: 'Deploy applications', isCorrect: false },
            ],
        },
        {
            content:
                'Which of the following describes the concept of "Capital Expenditure" (CapEx) in cloud computing?',
            explanation:
                'Capital Expenditure (CapEx) is the upfront spending on physical infrastructure. In traditional IT, companies must make large upfront investments in hardware. Cloud computing shifts this to Operational Expenditure (OpEx).',
            answers: [
                { content: 'Pay-as-you-go spending on cloud services', isCorrect: false },
                { content: 'Upfront spending on physical infrastructure', isCorrect: true },
                { content: 'Monthly subscription fees', isCorrect: false },
                { content: 'Variable costs based on usage', isCorrect: false },
            ],
        },
        {
            content:
                'Which Azure service provides a way to automate the creation of resources using templates?',
            explanation:
                'Azure Resource Manager (ARM) Templates allow you to define the infrastructure and configuration for your project in a JSON file. You can use the template to repeatedly deploy your solution throughout the development lifecycle.',
            answers: [
                { content: 'Azure CLI', isCorrect: false },
                { content: 'ARM Templates', isCorrect: true },
                { content: 'Azure Portal', isCorrect: false },
                { content: 'Azure PowerShell', isCorrect: false },
            ],
        },
        {
            content:
                'What does SLA stand for in the context of Azure services?',
            explanation:
                'A Service Level Agreement (SLA) is a formal document that defines the performance standards that Microsoft commits to for Azure customers. It typically specifies uptime guarantees, such as 99.9% or 99.99%.',
            answers: [
                { content: 'Secure Login Authentication', isCorrect: false },
                { content: 'Service Level Agreement', isCorrect: true },
                { content: 'System Load Allocation', isCorrect: false },
                { content: 'Standard Licensing Arrangement', isCorrect: false },
            ],
        },
        {
            content:
                'Which Azure service helps you centrally manage security across your Azure resources?',
            explanation:
                'Microsoft Defender for Cloud (formerly Azure Security Center) provides unified security management and advanced threat protection across your hybrid cloud workloads. It strengthens the security posture of your data centers.',
            answers: [
                { content: 'Azure Sentinel', isCorrect: false },
                { content: 'Microsoft Defender for Cloud', isCorrect: true },
                { content: 'Azure Firewall', isCorrect: false },
                { content: 'Azure Key Vault', isCorrect: false },
            ],
        },
        {
            content:
                'What is the benefit of using Azure Load Balancer?',
            explanation:
                'Azure Load Balancer distributes incoming network traffic across multiple virtual machines. It ensures high availability by distributing traffic only to VMs that are responding to health probes.',
            answers: [
                { content: 'Store data in the cloud', isCorrect: false },
                { content: 'Distribute network traffic across multiple VMs for high availability', isCorrect: true },
                { content: 'Monitor application logs', isCorrect: false },
                { content: 'Manage DNS records', isCorrect: false },
            ],
        },
    ],
};
