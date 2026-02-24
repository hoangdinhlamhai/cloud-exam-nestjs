export const az204Exam3 = {
    title: 'Azure Developer Associate AZ-204 - Practice Test 3',
    description: 'Azure Developer Associate AZ-204 Practice Test focused on Performance Optimization, Advanced Security, and Service Connectivity.',
    durationMinutes: 120,
    courseId: 9,
    questions: [
        {
            content: 'You need to deploy an e-commerce website on Azure App Service. You want the application source code to be able to access resources within an internal virtual network (VNet) but still want the web application to be able to receive regular internet traffic. Which feature should you use?',
            explanation: 'VNet Integration (Regional) allows outbound traffic from App Service to enter an internal VNet.',
            answers: [
                { content: 'App Service Environment (ASE)', isCorrect: false },
                { content: 'VNet Integration', isCorrect: true },
                { content: 'Private Endpoint', isCorrect: false },
                { content: 'Hybrid Connections', isCorrect: false },
            ],
        },
        {
            content: 'Conversely to the previous question, if you want to only allow traffic from a specific VNet to enter (inbound) your App Service, which feature should you use?',
            explanation: 'A Private Endpoint allows assigning an internal IP to the App Service, limiting access only from within that network.',
            answers: [
                { content: 'VNet Integration', isCorrect: false },
                { content: 'Private Endpoint', isCorrect: true },
                { content: 'Service Endpoint', isCorrect: false },
                { content: 'Azure Firewall', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Cosmos DB, what is the minimum provisioned Request Units (RU) for a container?',
            explanation: 'The minimum provisioned throughput for a container is 400 RU/s.',
            answers: [
                { content: '10 RU/s', isCorrect: false },
                { content: '100 RU/s', isCorrect: false },
                { content: '400 RU/s', isCorrect: true },
                { content: '1000 RU/s', isCorrect: false },
            ],
        },
        {
            content: 'When using Azure Redis Cache, which of the following scenarios commonly uses "Sorted Sets"?',
            explanation: 'Sorted Sets are ideal for building Leaderboards because they automatically sort elements based on a score.',
            answers: [
                { content: 'Storing user sessions', isCorrect: false },
                { content: 'Building game Leaderboards', isCorrect: true },
                { content: 'Storing configuration files', isCorrect: false },
                { content: 'Storing system logs', isCorrect: false },
            ],
        },
        {
            content: 'In Azure API Management policies, which tag do you use to allow other domains (e.g., localhost:3000) to call your API from a browser?',
            explanation: 'The `<cors>` tag in a policy is used to configure Cross-Origin Resource Sharing.',
            answers: [
                { content: '<allow-all>', isCorrect: false },
                { content: '<cors>', isCorrect: true },
                { content: '<security>', isCorrect: false },
                { content: '<network>', isCorrect: false },
            ],
        },
        {
            content: 'Which CLI command is used to create a new Deployment Slot for a Web App?',
            explanation: 'Use the `az webapp deployment slot create` command.',
            answers: [
                { content: 'az slot add', isCorrect: false },
                { content: 'az webapp deployment slot create', isCorrect: true },
                { content: 'az appservice slot create', isCorrect: false },
                { content: 'az webapp new-slot', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Functions, which Trigger is used to execute code according to a fixed schedule (e.g., every 5 minutes)?',
            explanation: 'The Timer trigger uses CRON expressions to define the execution schedule.',
            answers: [
                { content: 'Schedule trigger', isCorrect: false },
                { content: 'Timer trigger', isCorrect: true },
                { content: 'Cron trigger', isCorrect: false },
                { content: 'Clock trigger', isCorrect: false },
            ],
        },
        {
            content: 'You are developing a microservices system. You want services to be able to exchange messages according to a "Competing Consumers Pattern" to scale up. Which service do you choose?',
            explanation: 'Azure Service Bus Queues support this pattern by default, allowing multiple receivers to take messages from the same queue.',
            answers: [
                { content: 'Azure Event Grid', isCorrect: false },
                { content: 'Azure Service Bus Queues', isCorrect: true },
                { content: 'Azure Storage Blobs', isCorrect: false },
                { content: 'Azure Relay', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Event Hubs, what is a "Consumer Group"?',
            explanation: 'It is a separate "view" of the entire Event Hub, allowing different reading applications to process the data stream independently at their own pace.',
            answers: [
                { content: 'Purchase user group', isCorrect: false },
                { content: 'A data storage state', isCorrect: false },
                { content: 'An independent view allowing multiple applications to process data in parallel', isCorrect: true },
                { content: 'A virtual machine group', isCorrect: false },
            ],
        },
        {
            content: 'You use Application Insights to monitor an application. What does "Sampling" do?',
            explanation: 'It helps reduce the amount of telemetry data sent to the cloud by selecting only a representative set, thereby saving cost and bandwidth.',
            answers: [
                { content: 'Delete old data', isCorrect: false },
                { content: 'Reduce monitoring data volume while maintaining statistical accuracy', isCorrect: true },
                { content: 'Scan sample viruses', isCorrect: false },
                { content: 'Speed up web', isCorrect: false },
            ],
        },
        {
            content: 'What does the "Usage Analysis" tool in Application Insights (Users, Sessions, Events) help a developer understand?',
            explanation: 'It helps understand user behavior (where they click, which features they use most, how long they stay).',
            answers: [
                { content: 'Understand CPU performance', isCorrect: false },
                { content: 'Understand user experience and behavior (User Behavior)', isCorrect: true },
                { content: 'Understand code errors', isCorrect: false },
                { content: 'Understand electricity costs', isCorrect: false },
            ],
        },
        {
            content: 'When working with Azure Key Vault using the .NET SDK, which class provides methods for managing Secrets?',
            explanation: '`SecretClient` is the class used in the Azure.Security.KeyVault.Secrets library.',
            answers: [
                { content: 'KeyVaultClient', isCorrect: false },
                { content: 'SecretClient', isCorrect: true },
                { content: 'VaultManager', isCorrect: false },
                { content: 'SecurityClient', isCorrect: false },
            ],
        },
        {
            content: 'Durable Functions: What is the "Monitors" pattern used for?',
            explanation: 'To create a process that repeats checking a condition until it is satisfied (e.g., checking order status).',
            answers: [
                { content: 'Monitor CPU', isCorrect: false },
                { content: 'Perform periodic status checks', isCorrect: true },
                { content: 'Block strange users', isCorrect: false },
                { content: 'Send automatic emails', isCorrect: false },
            ],
        },
        {
            content: 'To provide a Client application (e.g., React/Angular) with a token so it can directly upload files to a Blob without going through the backend server, what should you use?',
            explanation: 'A "Delegated SAS" (User Delegation SAS) created based on an Azure AD identity is the most secure way.',
            answers: [
                { content: 'Storage Account Key', isCorrect: false },
                { content: 'Shared Access Signature (SAS)', isCorrect: true },
                { content: 'Public access', isCorrect: false },
                { content: 'SSH password', isCorrect: false },
            ],
        },
        {
            content: 'When configuring Azure CDN, what does the "Caching behavior" -> "Bypass cache" option mean?',
            explanation: 'The CDN will not store any copy of the file; every request from a client will always be sent directly to the origin server.',
            answers: [
                { content: 'Store cache permanently', isCorrect: false },
                { content: 'Always fetch new data from the origin server', isCorrect: true },
                { content: 'Automatically compress files', isCorrect: false },
                { content: 'Delete old cache', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Search, what are "Scoring Profiles" used for?',
            explanation: 'To adjust the priority of search results (e.g., placing promotional products or new articles at the top of the list).',
            answers: [
                { content: 'Charge users', isCorrect: false },
                { content: 'Customize the priority of search results', isCorrect: true },
                { content: 'Spell check', isCorrect: false },
                { content: 'Encrypt database', isCorrect: false },
            ],
        },
        {
            content: 'How does the Microsoft Graph API "Delta query" support your application?',
            explanation: 'Allows application to only retrieve changes since the last call, saving bandwidth and increasing performance.',
            answers: [
                { content: 'Delete data', isCorrect: false },
                { content: 'Retrieve only incremental data updates', isCorrect: true },
                { content: 'Speed up CPU', isCorrect: false },
                { content: 'Translate data to another language', isCorrect: false },
            ],
        },
        {
            content: 'In Azure App Service, what is the "Hybrid Connections" scenario used for?',
            explanation: 'To allow App Service to securely access a resource (e.g., SQL server) located on-premises without opening complex firewall ports.',
            answers: [
                { content: 'Connect Azure with AWS', isCorrect: false },
                { content: 'Connect App Service with on-premises resources via a specialized relay', isCorrect: true },
                { content: 'Use 2 types of databases simultaneously', isCorrect: false },
                { content: 'Speed up internet', isCorrect: false },
            ],
        },
        {
            content: 'How is an Azure Function "App Setting" stored?',
            explanation: 'It is stored as Environment variables in the function app runtime.',
            answers: [
                { content: 'In a text file on GitHub', isCorrect: false },
                { content: 'As secure environment variables', isCorrect: true },
                { content: 'In C# code', isCorrect: false },
                { content: 'On the admin screen', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Cosmos DB, how does changing the Indexing Policy from "Consistent" to "None" affect queries?',
            explanation: 'Filtering queries (WHERE clause) will not be possible or will be extremely slow because there is no index.',
            answers: [
                { content: 'Make app run faster', isCorrect: false },
                { content: 'Disable the system\'s effective query capability', isCorrect: true },
                { content: 'No effect', isCorrect: false },
                { content: 'Delete all data', isCorrect: false },
            ],
        },
        {
            content: 'Azure Redis Cache: When should you use "Pipelining"?',
            explanation: 'When you need to send a batch of multiple commands to Redis at once to reduce network latency (Round-trip time).',
            answers: [
                { content: 'To backup data', isCorrect: false },
                { content: 'To optimize performance when sending multiple consecutive commands', isCorrect: true },
                { content: 'To encrypt data', isCorrect: false },
                { content: 'To reduce electricity costs', isCorrect: false },
            ],
        },
        {
            content: 'In Azure API Management, what is the "validate-jwt" policy used for?',
            explanation: 'To check the validity of a JWT token (verify signature, expiration, issuer) before allowing the request to proceed to the backend.',
            answers: [
                { content: 'Change JSON format', isCorrect: false },
                { content: 'Validate the JWT token from the request', isCorrect: true },
                { content: 'Store database', isCorrect: false },
                { content: 'Send email', isCorrect: false },
            ],
        },
        {
            content: 'To allow your application to automatically renew SSL certificates in Key Vault, which feature should you use?',
            explanation: 'Key Vault supports Certificate "Auto-renewal" through integration with Certificate Authorities (CAs).',
            answers: [
                { content: 'Azure Policy', isCorrect: false },
                { content: 'Certificate auto-renewal policy', isCorrect: true },
                { content: 'Azure Backup', isCorrect: false },
                { content: 'Manual update', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Storage, in what format is a Blob\'s "Metadata" stored?',
            explanation: 'Metadata is stored as Key-value pairs (Name-value pairs).',
            answers: [
                { content: 'XML', isCorrect: false },
                { content: 'Name-value pairs', isCorrect: true },
                { content: 'Binary', isCorrect: false },
                { content: 'SQL Table', isCorrect: false },
            ],
        },
        {
            content: 'When using Azure Event Grid, which service is typically a "Dead Letter Destination"?',
            explanation: 'Typically an Azure Storage Blob container to store events that could not be delivered.',
            answers: [
                { content: 'Azure SQL', isCorrect: false },
                { content: 'Azure Blob Storage', isCorrect: true },
                { content: 'Email', isCorrect: false },
                { content: 'Trash bin', isCorrect: false },
            ],
        },
        {
            content: 'The Azure AD B2C service supports "User flows". How does this help the developer?',
            explanation: 'It provides pre-built interface pages for Sign Up, Sign In, and Password Reset that the developer doesn\'t need to code themselves.',
            answers: [
                { content: 'Build games', isCorrect: false },
                { content: 'Automate common user authentication processes via configuration', isCorrect: true },
                { content: 'Send marketing emails', isCorrect: false },
                { content: 'Manage servers', isCorrect: false },
            ],
        },
        {
            content: 'In Azure App Service, what is the effect of the "SCM_DO_BUILD_DURING_DEPLOYMENT" parameter being "true"?',
            explanation: 'It instructs Kudu to build the application (e.g., run npm install, dotnet build) directly on the Azure server when code is pushed.',
            answers: [
                { content: 'Delete old application', isCorrect: false },
                { content: 'Trigger the application build process on the Azure server', isCorrect: true },
                { content: 'Encrypt database', isCorrect: false },
                { content: 'Backup data', isCorrect: false },
            ],
        },
        {
            content: 'On what level do Azure Key Vault "Access Policies" support permission assignment?',
            explanation: 'It assigns permissions by resource group (Keys, Secrets, Certificates) but doesn\'t support permission for individual Secrets (unless using RBAC).',
            answers: [
                { content: 'All or nothing', isCorrect: false },
                { content: 'Assign permissions by object type group (e.g., Get permission for all Secrets)', isCorrect: true },
                { content: 'Can only be assigned to 1 person', isCorrect: false },
                { content: 'For admin only', isCorrect: false },
            ],
        },
        {
            content: 'When using the Azure Cosmos DB SDK, how do you handle transient errors automatically?',
            explanation: 'Most official SDKs have built-in "Retry logic" for network errors or throttling.',
            answers: [
                { content: 'Write manual for loop', isCorrect: false },
                { content: 'Use the SDK\'s built-in Retry mechanism', isCorrect: true },
                { content: 'Build the database again', isCorrect: false },
                { content: 'Turn app off and on', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service provides a "Low-code" development model through a drag-and-drop interface for building integrated workflows?',
            explanation: 'Azure Logic Apps is a powerful system integration service without needing to write much code.',
            answers: [
                { content: 'Azure Functions', isCorrect: false },
                { content: 'Azure Logic Apps', isCorrect: true },
                { content: 'Azure App Service', isCorrect: false },
                { content: 'Azure Batch', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Service Bus, in which scenario is the "CorrelationId" property typically used?',
            explanation: 'Typically used in a "Request-Response" model so the sender can match the response with the original request.',
            answers: [
                { content: 'Delete duplicate messages', isCorrect: false },
                { content: 'Match the response message with the request message', isCorrect: true },
                { content: 'Speed up sending', isCorrect: false },
                { content: 'Encrypt message', isCorrect: false },
            ],
        },
        {
            content: 'What do Azure Event Hubs "Throughput Units" (TUs) determine?',
            explanation: 'Determine the ingestion (Ingress) and egress (Egress) data capacity of the Event Hub.',
            answers: [
                { content: 'Number of messages', isCorrect: false },
                { content: 'System data bandwidth (MB/s)', isCorrect: true },
                { content: 'Number of users', isCorrect: false },
                { content: 'RAM capacity', isCorrect: false },
            ],
        },
        {
            content: 'In Application Insights, what does the "Failures" tool show you?',
            explanation: 'It focuses on HTTP errors (e.g., 4xx, 5xx errors) and backend exceptions.',
            answers: [
                { content: 'Internet speed', isCorrect: false },
                { content: 'Details of request failures and exceptions in the application', isCorrect: true },
                { content: 'List of fired employees', isCorrect: false },
                { content: 'Deleted files', isCorrect: false },
            ],
        },
        {
            content: 'Which CLI command is used to enable Application Insights for an existing Web App?',
            explanation: 'Use the `az webapp monitor app-insights enable` command.',
            answers: [
                { content: 'az monitor enable', isCorrect: false },
                { content: 'az webapp monitor app-insights enable', isCorrect: true },
                { content: 'az webapp insights start', isCorrect: false },
                { content: 'az app-insights on', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Container Registry, what does "Anonymous Pull" do?',
            explanation: 'Allows anyone to download a container image without an account, often used for public images.',
            answers: [
                { content: 'Absolute security', isCorrect: false },
                { content: 'Allows downloading images without authentication', isCorrect: true },
                { content: 'Delete old image', isCorrect: false },
                { content: 'Block hacker', isCorrect: false },
            ],
        },
        {
            content: 'When programming for Azure Functions, what is the "host.json" file used for?',
            explanation: 'It contains common configurations for all functions in a Function App (e.g., timeout, logging settings).',
            answers: [
                { content: 'Contains logic code', isCorrect: false },
                { content: 'Contains common configuration for the entire Function App', isCorrect: true },
                { content: 'Contains password', isCorrect: false },
                { content: 'Defines database', isCorrect: false },
            ],
        },
        {
            content: 'What is the "Microsoft Graph Explorer" tool?',
            explanation: 'A Microsoft web tool allowing you to test Graph API commands directly in a browser.',
            answers: [
                { content: 'A new web browser', isCorrect: false },
                { content: 'An online tool for testing Graph API queries', isCorrect: true },
                { content: 'Antivirus software', isCorrect: false },
                { content: 'File manager', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Redis Cache, how does the "Session State Store" scenario help multi-server web applications?',
            explanation: 'It helps store centralized user session information, allowing users to stay logged in even if they are pushed to another server.',
            answers: [
                { content: 'Speed up download', isCorrect: false },
                { content: 'Ensure user session consistency across multiple web servers', isCorrect: true },
                { content: 'Encrypt website', isCorrect: false },
                { content: 'Store video files', isCorrect: false },
            ],
        },
        {
            content: 'In which scenario is the Azure API Management "Self-hosted gateway" used?',
            explanation: 'Used for Hybrid or On-premises environments where you want to manage APIs locally but still use a control gateway from the Cloud.',
            answers: [
                { content: 'When there is no internet', isCorrect: false },
                { content: 'For hybrid infrastructures (Hybrid clouds) or on-premises', isCorrect: true },
                { content: 'For individual free use', isCorrect: false },
                { content: 'Only for Mac computers', isCorrect: false },
            ],
        },
        {
            content: 'You assign the "Key Vault Crypto User" permission to a Managed Identity. What can it do?',
            explanation: 'It can perform data encryption operations (encrypt/decrypt) using keys in the vault.',
            answers: [
                { content: 'Delete Key Vault', isCorrect: false },
                { content: 'Perform data encryption and decryption operations', isCorrect: true },
                { content: 'Change admin password', isCorrect: false },
                { content: 'Create new user', isCorrect: false },
            ],
        },
        {
            content: 'In Azure App Configuration, what is a "Snapshot" used for?',
            explanation: 'To create a fixed (immutable) archive of the entire configuration at a specific time for version release management.',
            answers: [
                { content: 'Take app screenshot', isCorrect: false },
                { content: 'Store a fixed configuration set for version management', isCorrect: true },
                { content: 'Backup database', isCorrect: false },
                { content: 'Speed up web', isCorrect: false },
            ],
        },
        {
            content: 'The first time a container runs on Azure Container Instances, it is slow. What is this phenomenon?',
            explanation: 'This is the image pull time from a registry to an ACI node.',
            answers: [
                { content: 'Computer is old', isCorrect: false },
                { content: 'Container image pull time (Image Pull)', isCorrect: true },
                { content: 'Internet error', isCorrect: false },
                { content: 'Operating system hung', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Cosmos DB, what does the "Session" consistency level ensure for the user who just wrote data?',
            explanation: 'Ensures "Read-your-writes" (the user will always see the data they just sent up).',
            answers: [
                { content: 'Data is always wrong', isCorrect: false },
                { content: 'Ensures users can always read data they wrote themselves', isCorrect: true },
                { content: 'Highest throughput', isCorrect: false },
                { content: 'Ensured immediate global uniformity', isCorrect: false },
            ],
        },
        {
            content: 'When programming with the Azure Service Bus .NET SDK, what is the "CompleteAsync" method used for?',
            explanation: 'To notify Service Bus that a message has finished processing and can be removed from the queue.',
            answers: [
                { content: 'Cancel message', isCorrect: false },
                { content: 'Confirm successful processing and remove message from Queue', isCorrect: true },
                { content: 'Send new message', isCorrect: false },
                { content: 'Lock message', isCorrect: false },
            ],
        },
        {
            content: 'Which scenario are Azure Event Hubs "Scale clusters" for?',
            explanation: 'For massive scale scenarios (exceeding Standard/Premium plan capabilities) with throughput requirements up to gigabytes per second.',
            answers: [
                { content: 'For individuals', isCorrect: false },
                { content: 'For very large-scale enterprises (Dedicated tier)', isCorrect: true },
                { content: 'To play games', isCorrect: false },
                { content: 'To store emails', isCorrect: false },
            ],
        },
        {
            content: 'In Application Insights, what does "Dependency Tracking" record?',
            explanation: 'Records outbound calls from your application (e.g., calling SQL, another API, Redis).',
            answers: [
                { content: 'Records deleted files', isCorrect: false },
                { content: 'Records information about calls to external services', isCorrect: true },
                { content: 'See who is online', isCorrect: false },
                { content: 'Track employee salaries', isCorrect: false },
            ],
        },
        {
            content: 'To allow a web app to refresh an authentication token without making the user log in again, which Scope do you need to request in OAuth2?',
            explanation: 'The `offline_access` scope is used to retrieve a "Refresh Token".',
            answers: [
                { content: 'openid', isCorrect: false },
                { content: 'offline_access', isCorrect: true },
                { content: 'profile', isCorrect: false },
                { content: 'email', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure Function trigger type supports "Batched execution"?',
            explanation: 'Event Hubs triggers and Queue triggers support receiving an array of messages to process simultaneously for performance.',
            answers: [
                { content: 'HTTP trigger', isCorrect: false },
                { content: 'Event Hubs or Queue triggers', isCorrect: true },
                { content: 'Timer trigger', isCorrect: false },
                { content: 'Webhook trigger', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Search, can an "Indexer" run on a schedule?',
            explanation: 'Yes, you can set an Indexer to run periodically (e.g., every hour) to update new data.',
            answers: [
                { content: 'No, must be run manually', isCorrect: false },
                { content: 'Yes, supports periodic scheduled runs', isCorrect: true },
                { content: 'Only supports running once', isCorrect: false },
                { content: 'Can only run at night', isCorrect: false },
            ],
        },
        {
            content: 'When using Azure App Service for Containers, how do you specify the port your application is listening on?',
            explanation: 'Use the `WEBSITES_PORT` environment variable (default is 80).',
            answers: [
                { content: 'Set in code file', isCorrect: false },
                { content: 'Use the WEBSITES_PORT configuration variable', isCorrect: true },
                { content: 'Modify router config file', isCorrect: false },
                { content: 'Cannot be changed', isCorrect: false },
            ],
        },
    ],
};
