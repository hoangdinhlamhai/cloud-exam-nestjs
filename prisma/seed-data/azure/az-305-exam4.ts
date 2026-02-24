export const az305Exam4 = {
    title: 'Azure Solutions Architect Expert AZ-305 - Practice Test 4',
    description: 'Azure Solutions Architect Expert AZ-305 Final Practice Test. Comprehensive review of all architect domains.',
    durationMinutes: 120,
    courseId: 10,
    questions: [
        {
            content: 'You are designing a high-performance web application. You need to ensure that the application can handle a sudden surge in traffic while maintaining a consistent response time. Which scaling strategy should you recommend?',
            explanation: 'Horizontal scaling (scaling out) by adding more instances of the web application allows it to handle increased traffic and maintain performance.',
            answers: [
                { content: 'Vertical scaling (scaling up)', isCorrect: false },
                { content: 'Horizontal scaling (scaling out)', isCorrect: true },
                { content: 'Redundant scaling', isCorrect: false },
                { content: 'Manual scaling', isCorrect: false },
            ],
        },
        {
            content: 'Your organization needs to store and analyze large amounts of data for business intelligence. You require a solution that provides low-latency querying and high throughput. Which Azure service should you use?',
            explanation: 'Azure Synapse Analytics (formerly SQL Data Warehouse) is a cloud-based data warehouse that provides high-performance querying and analytics.',
            answers: [
                { content: 'Azure SQL Database', isCorrect: false },
                { content: 'Azure Synapse Analytics', isCorrect: true },
                { content: 'Azure Cosmos DB', isCorrect: false },
                { content: 'Azure Data Factory', isCorrect: false },
            ],
        },
        {
            content: 'You are designing a disaster recovery solution for a critical application. You need to ensure that the application can be recovered in another region with minimal data loss. Which tool should you use?',
            explanation: 'Azure Site Recovery provides disaster recovery by replicating virtual machines and applications to another region.',
            answers: [
                { content: 'Azure Backup', isCorrect: false },
                { content: 'Azure Site Recovery', isCorrect: true },
                { content: 'Azure Service Health', isCorrect: false },
                { content: 'Azure Monitor', isCorrect: false },
            ],
        },
        {
            content: 'Your company is moving its on-premises SQL Server databases to Azure. You want to choose a managed service that provides the highest compatibility with SQL Server. Which option should you recommend?',
            explanation: 'Azure SQL Managed Instance provides nearly 100% compatibility with the SQL Server database engine.',
            answers: [
                { content: 'Azure SQL Database', isCorrect: false },
                { content: 'Azure SQL Managed Instance', isCorrect: true },
                { content: 'SQL Server on Azure Virtual Machines', isCorrect: false },
                { content: 'Azure Database for PostgreSQL', isCorrect: false },
            ],
        },
        {
            content: 'You are designing a security solution for an application that handles sensitive data. You need to ensure that all data is encrypted at rest. Which Azure service provides this capability?',
            explanation: 'Azure Storage Service Encryption (SSE) automatically encrypts data at rest in Azure Storage.',
            answers: [
                { content: 'Azure Key Vault', isCorrect: false },
                { content: 'Azure Storage Service Encryption', isCorrect: true },
                { content: 'Azure Security Center', isCorrect: false },
                { content: 'Azure Firewall', isCorrect: false },
            ],
        },
        {
            content: 'Your organisation wants to implement a multi-region deployment for its web application to ensure high availability. Which Azure service should you use to route traffic to the nearest healthy region?',
            explanation: 'Azure Front Door is a global service that routes traffic based on performance and availability.',
            answers: [
                { content: 'Azure Load Balancer', isCorrect: false },
                { content: 'Azure Application Gateway', isCorrect: false },
                { content: 'Azure Front Door', isCorrect: true },
                { content: 'Azure Traffic Manager', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service would you use to create and manage automated workflows that integrate with various applications and services?',
            explanation: 'Azure Logic Apps is a cloud-based service that allows you to create and run automated workflows.',
            answers: [
                { content: 'Azure Functions', isCorrect: false },
                { content: 'Azure Logic Apps', isCorrect: true },
                { content: 'Azure Data Factory', isCorrect: false },
                { content: 'Azure Stream Analytics', isCorrect: false },
            ],
        },
        {
            content: 'Your company needs to establish a dedicated and private connection between its on-premises data center and Azure. Which service should you recommend?',
            explanation: 'Azure ExpressRoute provides a private and dedicated connection that does not go over the public internet.',
            answers: [
                { content: 'Azure VPN Gateway', isCorrect: false },
                { content: 'Azure ExpressRoute', isCorrect: true },
                { content: 'VNet Peering', isCorrect: false },
                { content: 'Azure Application Gateway', isCorrect: false },
            ],
        },
        {
            content: 'You are designing a storage solution for an application that requires low-latency access to frequently accessed data. Which storage tier should you use?',
            explanation: 'The Hot storage tier is optimized for frequently accessed data and provides the lowest latency.',
            answers: [
                { content: 'Hot', isCorrect: true },
                { content: 'Cool', isCorrect: false },
                { content: 'Archive', isCorrect: false },
                { content: 'Premium', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service allows you to centrally manage and enforce policies across multiple Azure subscriptions?',
            explanation: 'Azure Blueprints and Azure Policy can be used to manage and enforce policies across subscriptions, but at the management level, Management Groups are the key structure.',
            answers: [
                { content: 'Azure Security Center', isCorrect: false },
                { content: 'Azure Policy', isCorrect: true },
                { content: 'Azure Monitor', isCorrect: false },
                { content: 'Azure Advisor', isCorrect: false },
            ],
        },
        {
            content: 'Your application needs to store and retrieve large volumes of unstructured data, such as images and videos. Which Azure service is most suitable?',
            explanation: 'Azure Blob Storage is optimized for storing unstructured data at scale.',
            answers: [
                { content: 'Azure SQL Database', isCorrect: false },
                { content: 'Azure Blob Storage', isCorrect: true },
                { content: 'Azure Cosmos DB', isCorrect: false },
                { content: 'Azure Files', isCorrect: false },
            ],
        },
        {
            content: 'You are designing a network for a multi-tier application. You need to ensure that only the web tier can communicate with the business tier. Which component should you use?',
            explanation: 'Network Security Groups (NSGs) can be used to filter network traffic between subnets and virtual machines.',
            answers: [
                { content: 'Azure Load Balancer', isCorrect: false },
                { content: 'Network Security Group (NSG)', isCorrect: true },
                { content: 'Azure Application Gateway', isCorrect: false },
                { content: 'Azure Firewall', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service provides a managed Kubernetes service for orchestrating and managing containerized applications?',
            explanation: 'Azure Kubernetes Service (AKS) is a managed Kubernetes service that simplifies the deployment and management of containerized applications.',
            answers: [
                { content: 'Azure Container Instances', isCorrect: false },
                { content: 'Azure Kubernetes Service', isCorrect: true },
                { content: 'Azure App Service', isCorrect: false },
                { content: 'Azure Functions', isCorrect: false },
            ],
        },
        {
            content: 'Your company needs to monitor the performance and health of its Azure resources. Which service provides centralized monitoring and alerting?',
            explanation: 'Azure Monitor provides centralized monitoring and alerting for Azure resources.',
            answers: [
                { content: 'Azure Security Center', isCorrect: false },
                { content: 'Azure Monitor', isCorrect: true },
                { content: 'Azure Advisor', isCorrect: false },
                { content: 'Azure Resource Manager', isCorrect: false },
            ],
        },
        {
            content: 'You are designing a backup solution for a critical database. You need to ensure that the backup data is stored in multiple regions for high availability. Which storage replication option should you choose?',
            explanation: 'Geo-redundant storage (GRS) replicates data to a secondary region for protection against regional disasters.',
            answers: [
                { content: 'Locally-redundant storage (LRS)', isCorrect: false },
                { content: 'Zone-redundant storage (ZRS)', isCorrect: false },
                { content: 'Geo-redundant storage (GRS)', isCorrect: true },
                { content: 'Read-access geo-redundant storage (RA-GRS)', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service allows you to securely store and manage passwords, encryption keys, and certificates?',
            explanation: 'Azure Key Vault is a cloud service that allows you to securely store and manage sensitive information.',
            answers: [
                { content: 'Azure Storage', isCorrect: false },
                { content: 'Azure Key Vault', isCorrect: true },
                { content: 'Azure Active Directory', isCorrect: false },
                { content: 'Azure Security Center', isCorrect: false },
            ],
        },
        {
            content: 'Your organization needs to implement a solution for analyzing real-time data streams from millions of IoT devices. Which Azure service should you recommend?',
            explanation: 'Azure Stream Analytics is a real-time analytics service for processing data streams.',
            answers: [
                { content: 'Azure Data Factory', isCorrect: false },
                { content: 'Azure Stream Analytics', isCorrect: true },
                { content: 'Azure Machine Learning', isCorrect: false },
                { content: 'Azure Logic Apps', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service provides a serverless compute platform for running small pieces of code (functions) without managing infrastructure?',
            explanation: 'Azure Functions is a serverless compute service that allows you to run code on demand.',
            answers: [
                { content: 'Azure App Service', isCorrect: false },
                { content: 'Azure Kubernetes Service', isCorrect: false },
                { content: 'Azure Functions', isCorrect: true },
                { content: 'Azure Virtual Machines', isCorrect: false },
            ],
        },
        {
            content: 'Your company needs to ensure that its Azure environment complies with industry regulations and best practices. Which service provides recommendations for improving security, performance, and cost?',
            explanation: 'Azure Advisor provides personalized recommendations for optimizing Azure resources.',
            answers: [
                { content: 'Azure Monitor', isCorrect: false },
                { content: 'Azure Advisor', isCorrect: true },
                { content: 'Azure Security Center', isCorrect: false },
                { content: 'Azure Policy', isCorrect: false },
            ],
        },
        {
            content: 'You are designing a storage solution for an application that requires a shared file system accessible via the SMB protocol. Which Azure service should you use?',
            explanation: 'Azure Files provides managed file shares accessible via the SMB protocol.',
            answers: [
                { content: 'Azure Blob Storage', isCorrect: false },
                { content: 'Azure Files', isCorrect: true },
                { content: 'Azure Disk Storage', isCorrect: false },
                { content: 'Azure Table Storage', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service allows you to build, deploy, and scale web applications using various frameworks and languages?',
            explanation: 'Azure App Service is a managed service for hosting web applications.',
            answers: [
                { content: 'Azure Virtual Machines', isCorrect: false },
                { content: 'Azure App Service', isCorrect: true },
                { content: 'Azure Kubernetes Service', isCorrect: false },
                { content: 'Azure Functions', isCorrect: false },
            ],
        },
        {
            content: 'You are designing an identity solution for a multi-tenant application. You need to ensure that each tenant has its own isolated identity directory. Which service should you choose?',
            explanation: 'Azure Active Directory (Azure AD) B2C allows you to create and manage tenant-specific identities.',
            answers: [
                { content: 'Azure Active Directory', isCorrect: false },
                { content: 'Azure AD B2C', isCorrect: true },
                { content: 'Azure Security Center', isCorrect: false },
                { content: 'Azure Key Vault', isCorrect: false },
            ],
        },
        {
            content: 'Your company needs to securely connect multiple VNets within the same region. Which option should you recommend?',
            explanation: 'VNet Peering is a high-speed and private connection between VNets within the same or different regions.',
            answers: [
                { content: 'Azure VPN Gateway', isCorrect: false },
                { content: 'Azure ExpressRoute', isCorrect: false },
                { content: 'VNet Peering', isCorrect: true },
                { content: 'Azure Application Gateway', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service provides a globally distributed, multi-model database service for building high-performance applications?',
            explanation: 'Azure Cosmos DB is a globally distributed database service with multiple database models.',
            answers: [
                { content: 'Azure SQL Database', isCorrect: false },
                { content: 'Azure Cosmos DB', isCorrect: true },
                { content: 'Azure Database for PostgreSQL', isCorrect: false },
                { content: 'Azure Cache for Redis', isCorrect: false },
            ],
        },
        {
            content: 'You are designing a security solution for a network. You need to protect the network from unauthorized access and distributed denial-of-service (DDoS) attacks. Which Azure service should you recommend?',
            explanation: 'Azure DDoS Protection provides protection against DDoS attacks for your Azure resources.',
            answers: [
                { content: 'Azure Firewall', isCorrect: false },
                { content: 'Azure Security Center', isCorrect: false },
                { content: 'Azure DDoS Protection', isCorrect: true },
                { content: 'Azure Application Gateway', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service allows you to create and manage private networks in the cloud?',
            explanation: 'Azure Virtual Network (VNet) allows you to create and manage private networks in Azure.',
            answers: [
                { content: 'Azure Subnet', isCorrect: false },
                { content: 'Azure Virtual Network (VNet)', isCorrect: true },
                { content: 'Azure ExpressRoute', isCorrect: false },
                { content: 'Azure VPN Gateway', isCorrect: false },
            ],
        },
        {
            content: 'You are designing a storage solution for an application that requires highly performant and scalable storage for relational data. Which option should you recommend?',
            explanation: 'Azure SQL Database Hyperscale is a high-performance and scalable storage architecture for relational data.',
            answers: [
                { content: 'Azure SQL Database Standard', isCorrect: false },
                { content: 'Azure SQL Database Hyperscale', isCorrect: true },
                { content: 'Azure Cosmos DB', isCorrect: false },
                { content: 'Azure Managed Instance', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service provides a managed service for analyzing and processing big data using open-source frameworks like Apache Spark and Hadoop?',
            explanation: 'Azure HDInsight and Azure Databricks are both managed services for big data analytics, but HDInsight focuses on open-source frameworks.',
            answers: [
                { content: 'Azure HDInsight', isCorrect: true },
                { content: 'Azure Synapse Analytics', isCorrect: false },
                { content: 'Azure Data Factory', isCorrect: false },
                { content: 'Azure Data Bricks', isCorrect: false },
            ],
        },
        {
            content: 'Your company needs to implement a solution for managing and monitoring IoT devices. Which Azure service should you recommend?',
            explanation: 'Azure IoT Hub is a managed service for connecting, monitoring, and managing IoT devices.',
            answers: [
                { content: 'Azure IoT Central', isCorrect: false },
                { content: 'Azure IoT Hub', isCorrect: true },
                { content: 'Azure Event Hubs', isCorrect: false },
                { content: 'Azure Stream Analytics', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service allows you to build, train, and deploy machine learning models at scale?',
            explanation: 'Azure Machine Learning is a cloud-based service for building and managing machine learning models.',
            answers: [
                { content: 'Azure Cognitive Services', isCorrect: false },
                { content: 'Azure Machine Learning', isCorrect: true },
                { content: 'Azure Databricks', isCorrect: false },
                { content: 'Azure Synapse Analytics', isCorrect: false },
            ],
        },
        {
            content: 'You are designing a security solution for an application. You need to ensure that only authenticated users can access the application. Which Azure service should you use?',
            explanation: 'Azure Active Directory (Azure AD) provides identity and access management for applications.',
            answers: [
                { content: 'Azure Security Center', isCorrect: false },
                { content: 'Azure Active Directory', isCorrect: true },
                { content: 'Azure Key Vault', isCorrect: false },
                { content: 'Azure Firewall', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service allows you to create and manage virtual machine scale sets for automatically scaling your compute resources?',
            explanation: 'Azure Virtual Machine Scale Sets allow you to automatically scale the number of virtual machines based on demand.',
            answers: [
                { content: 'Azure App Service', isCorrect: false },
                { content: 'Azure Virtual Machine Scale Sets', isCorrect: true },
                { content: 'Azure Kubernetes Service', isCorrect: false },
                { content: 'Azure Functions', isCorrect: false },
            ],
        },
        {
            content: 'Your company needs to implement a solution for securely storing and sharing large volumes of data with external partners. Which Azure service should you recommend?',
            explanation: 'Azure Data Share is a service that allows you to securely share data with other organizations.',
            answers: [
                { content: 'Azure Storage', isCorrect: false },
                { content: 'Azure Data Share', isCorrect: true },
                { content: 'Azure Data Factory', isCorrect: false },
                { content: 'Azure SQL Database', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service provides a managed service for searching and indexing large volumes of data?',
            explanation: 'Azure Cognitive Search is a cloud-based search service for building rich search experiences.',
            answers: [
                { content: 'Azure Data Lake Storage', isCorrect: false },
                { content: 'Azure Cognitive Search', isCorrect: true },
                { content: 'Azure Synapse Analytics', isCorrect: false },
                { content: 'Azure Data Factory', isCorrect: false },
            ],
        },
        {
            content: 'You are designing a storage solution for an application that requires highly redundant and durable storage for data. Which option should you choose?',
            explanation: 'Zone-redundant storage (ZRS) replicates data across multiple availability zones in a single region for protection against zone failures.',
            answers: [
                { content: 'Locally-redundant storage (LRS)', isCorrect: false },
                { content: 'Zone-redundant storage (ZRS)', isCorrect: true },
                { content: 'Geo-redundant storage (GRS)', isCorrect: false },
                { content: 'Read-access geo-redundant storage (RA-GRS)', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service allows you to centrally manage and visualize your entire application architecture and its dependencies?',
            explanation: 'Azure Resource Graph and Application Insights Map provide visualization of architecture and performance.',
            answers: [
                { content: 'Azure Monitor', isCorrect: false },
                { content: 'Azure Application Insights', isCorrect: true },
                { content: 'Azure Security Center', isCorrect: false },
                { content: 'Azure Advisor', isCorrect: false },
            ],
        },
        {
            content: 'Your company needs to implement a solution for protecting its web applications from common web-based attacks like SQL injection and cross-site scripting. Which Azure service should you recommend?',
            explanation: 'Azure Web Application Firewall (WAF) provides protection against common web attacks.',
            answers: [
                { content: 'Azure Firewall', isCorrect: false },
                { content: 'Azure WAF', isCorrect: true },
                { content: 'Azure Security Center', isCorrect: false },
                { content: 'Azure DDoS Protection', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service allows you to create and manage hybrid cloud connections between your on-premises data center and Azure?',
            explanation: 'Azure VPN Gateway and ExpressRoute allow for hybrid connections, but the question is about the category. VPN Gateway is the most common answer.',
            answers: [
                { content: 'Azure VPN Gateway', isCorrect: true },
                { content: 'Azure ExpressRoute', isCorrect: false },
                { content: 'VNet Peering', isCorrect: false },
                { content: 'Azure Application Gateway', isCorrect: false },
            ],
        },
        {
            content: 'You are designing an identity solution for a mobile application. You need to ensure that users can log in using their social media accounts. Which Azure service should you use?',
            explanation: 'Azure AD B2C allows you to integrate social media identities into your application.',
            answers: [
                { content: 'Azure Active Directory', isCorrect: false },
                { content: 'Azure AD B2C', isCorrect: true },
                { content: 'Azure Security Center', isCorrect: false },
                { content: 'Azure Active Directory Domain Services', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service provides a managed service for storing and managing container images?',
            explanation: 'Azure Container Registry (ACR) is a managed service for storing and managing container images.',
            answers: [
                { content: 'Azure Container Instances', isCorrect: false },
                { content: 'Azure Container Registry', isCorrect: true },
                { content: 'Azure Kubernetes Service', isCorrect: false },
                { content: 'Azure App Service', isCorrect: false },
            ],
        },
        {
            content: 'Your company needs to implement a solution for analyzing real-time video streams from cameras. Which Azure service should you recommend?',
            explanation: 'Azure AI Video Indexer and Azure Live Video Analytics allow for real-time video analysis.',
            answers: [
                { content: 'Azure AI Vision', isCorrect: false },
                { content: 'Azure AI Video Indexer', isCorrect: true },
                { content: 'Azure AI Search', isCorrect: false },
                { content: 'Azure Machine Learning', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service allows you to create and manage virtual machine scale sets for automatically scaling your compute resources?',
            explanation: 'Azure Virtual Machine Scale Sets allow you to automatically scale the number of virtual machines based on demand.',
            answers: [
                { content: 'Azure App Service', isCorrect: false },
                { content: 'Azure Virtual Machine Scale Sets', isCorrect: true },
                { content: 'Azure Kubernetes Service', isCorrect: false },
                { content: 'Azure Functions', isCorrect: false },
            ],
        },
        {
            content: 'Your organization needs to implement a solution for securely storing and sharing large volumes of data with external partners. Which Azure service should you recommend?',
            explanation: 'Azure Data Share is a service that allows you to securely share data with other organizations.',
            answers: [
                { content: 'Azure Storage', isCorrect: false },
                { content: 'Azure Data Share', isCorrect: true },
                { content: 'Azure Data Factory', isCorrect: false },
                { content: 'Azure SQL Database', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service provides a managed service for searching and indexing large volumes of data?',
            explanation: 'Azure Cognitive Search is a cloud-based search service for building rich search experiences.',
            answers: [
                { content: 'Azure Data Lake Storage', isCorrect: false },
                { content: 'Azure Cognitive Search', isCorrect: true },
                { content: 'Azure Synapse Analytics', isCorrect: false },
                { content: 'Azure Data Factory', isCorrect: false },
            ],
        },
        {
            content: 'You are designing a storage solution for an application that requires highly redundant and durable storage for data. Which option should you choose?',
            explanation: 'Zone-redundant storage (ZRS) replicates data across multiple availability zones in a single region for protection against zone failures.',
            answers: [
                { content: 'Locally-redundant storage (LRS)', isCorrect: false },
                { content: 'Zone-redundant storage (ZRS)', isCorrect: true },
                { content: 'Geo-redundant storage (GRS)', isCorrect: false },
                { content: 'Read-access geo-redundant storage (RA-GRS)', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service allows you to centrally manage and visualize your entire application architecture and its dependencies?',
            explanation: 'Azure Application Insights Map provides visualization of architecture and performance.',
            answers: [
                { content: 'Azure Monitor', isCorrect: false },
                { content: 'Azure Application Insights', isCorrect: true },
                { content: 'Azure Security Center', isCorrect: false },
                { content: 'Azure Advisor', isCorrect: false },
            ],
        },
        {
            content: 'Your company needs to implement a solution for protecting its web applications from common web-based attacks like SQL injection and cross-site scripting. Which Azure service should you recommend?',
            explanation: 'Azure Web Application Firewall (WAF) provides protection against common web attacks.',
            answers: [
                { content: 'Azure Firewall', isCorrect: false },
                { content: 'Azure WAF', isCorrect: true },
                { content: 'Azure Security Center', isCorrect: false },
                { content: 'Azure DDoS Protection', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service allows you to create and manage hybrid cloud connections between your on-premises data center and Azure?',
            explanation: 'Multiple services allow this, but VPN Gateway is the most common answer for hybrid networking.',
            answers: [
                { content: 'Azure VPN Gateway', isCorrect: true },
                { content: 'Azure ExpressRoute', isCorrect: false },
                { content: 'VNet Peering', isCorrect: false },
                { content: 'Azure Application Gateway', isCorrect: false },
            ],
        },
        {
            content: 'You are designing an identity solution for a mobile application. You need to ensure that users can log in using their social media accounts. Which Azure service should you use?',
            explanation: 'Azure AD B2C is specifically designed for customer-facing applications and social identity integration.',
            answers: [
                { content: 'Azure Active Directory', isCorrect: false },
                { content: 'Azure AD B2C', isCorrect: true },
                { content: 'Azure Security Center', isCorrect: false },
                { content: 'Azure Policy', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service provides a managed service for storing and managing container images?',
            explanation: 'Azure Container Registry (ACR) allows you to build, store, and manage container images.',
            answers: [
                { content: 'Azure Container Instances', isCorrect: false },
                { content: 'Azure Container Registry', isCorrect: true },
                { content: 'Azure Kubernetes Service', isCorrect: false },
                { content: 'Azure App Service', isCorrect: false },
            ],
        },
        {
            content: 'Your company needs to implement a solution for analyzing real-time video streams from cameras. Which Azure service should you recommend?',
            explanation: 'Azure AI Video Indexer allows for analyzing video content and extracting metadata.',
            answers: [
                { content: 'Azure AI Vision', isCorrect: false },
                { content: 'Azure AI Video Indexer', isCorrect: true },
                { content: 'Azure AI Search', isCorrect: false },
                { content: 'Azure Machine Learning', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service allows you to create and manage virtual machine scale sets for automatically scaling your compute resources?',
            explanation: 'Azure Virtual Machine Scale Sets automatically create and manage a group of load balanced VMs.',
            answers: [
                { content: 'Azure App Service', isCorrect: false },
                { content: 'Azure Virtual Machine Scale Sets', isCorrect: true },
                { content: 'Azure Kubernetes Service', isCorrect: false },
                { content: 'Azure Functions', isCorrect: false },
            ],
        },
        {
            content: 'Your organization needs to implement a solution for securely storing and sharing large volumes of data with external partners. Which Azure service should you recommend?',
            explanation: 'Azure Data Share simplifies the process of sharing data securely.',
            answers: [
                { content: 'Azure Storage', isCorrect: false },
                { content: 'Azure Data Share', isCorrect: true },
                { content: 'Azure Data Factory', isCorrect: false },
                { content: 'Azure SQL Database', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service provides a managed service for searching and indexing large volumes of data?',
            explanation: 'Azure Cognitive Search provides APIs and tools for adding a rich search experience.',
            answers: [
                { content: 'Azure Data Lake Storage', isCorrect: false },
                { content: 'Azure Cognitive Search', isCorrect: true },
                { content: 'Azure Synapse Analytics', isCorrect: false },
                { content: 'Azure Data Factory', isCorrect: false },
            ],
        },
        {
            content: 'You are designing a storage solution for an application that requires highly redundant and durable storage for data. Which option should you choose?',
            explanation: 'ZRS replicates data to three Azure availability zones in the primary region.',
            answers: [
                { content: 'Locally-redundant storage (LRS)', isCorrect: false },
                { content: 'Zone-redundant storage (ZRS)', isCorrect: true },
                { content: 'Geo-redundant storage (GRS)', isCorrect: false },
                { content: 'Read-access geo-redundant storage (RA-GRS)', isCorrect: false },
            ],
        },
    ],
};
