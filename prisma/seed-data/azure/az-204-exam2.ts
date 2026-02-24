export const az204Exam2 = {
    title: 'Azure Developer Associate AZ-204 - Practice Test 2',
    description: 'Azure Developer Associate AZ-204 Practice Test focusing on Service Integration, Monitoring, and Optimization.',
    durationMinutes: 120,
    courseId: 9,
    questions: [
        {
            content: 'You assign an RBAC role to a Managed Identity to allow it to read secrets from Azure Key Vault. However, your application still reports a "Forbidden" error when trying to retrieve a secret. What other factor should you check besides RBAC?',
            explanation: 'Besides RBAC, Azure Key Vault also uses "Access Policies" (if Azure RBAC control is not enabled) to assign specific permissions to entities.',
            answers: [
                { content: 'VM password', isCorrect: false },
                { content: 'Key Vault Access Policies', isCorrect: true },
                { content: 'Internet speed', isCorrect: false },
                { content: 'Subscription ID', isCorrect: false },
            ],
        },
        {
            content: 'In Azure App Service, which of the following scenarios requires the use of a "Custom Domain" and a custom SSL certificate?',
            explanation: 'When you want to assign your brand\'s domain name (e.g., www.contoso.com) instead of using the default domain (.azurewebsites.net).',
            answers: [
                { content: 'To back up the application', isCorrect: false },
                { content: 'To use the organization\'s custom domain for the web application', isCorrect: true },
                { content: 'To increase CPU speed', isCorrect: false },
                { content: 'To use a SQL database', isCorrect: false },
            ],
        },
        {
            content: 'You are using Azure Cosmos DB with the SQL API. You need to perform a query to filter data by an attribute that is not the Partition Key. What will happen?',
            explanation: 'Cosmos DB will have to perform a "Cross-partition query", which consumes more RU (Request Units) and is slower.',
            answers: [
                { content: 'The query will fail immediately', isCorrect: false },
                { content: 'The query will be performed across all partitions (Cross-partition query)', isCorrect: true },
                { content: 'The query will automatically switch to the Partition Key', isCorrect: false },
                { content: 'Data will be deleted', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of using "Change Feed" in Azure Cosmos DB?',
            explanation: 'It listens for changes (create/update) in a container and allows you to trigger actions such as running an Azure Function or sending notifications.',
            answers: [
                { content: 'To compress the database', isCorrect: false },
                { content: 'To trigger actions based on real-time data changes', isCorrect: true },
                { content: 'To delete old data', isCorrect: false },
                { content: 'To copy data to Google Drive', isCorrect: false },
            ],
        },
        {
            content: 'You are developing an Azure Function. You want this function to be triggered whenever a new image file is uploaded to a specific Blob container. Which Trigger type should you use?',
            explanation: 'Blob storage trigger is designed to trigger the function when new or updated blobs are detected.',
            answers: [
                { content: 'HTTP trigger', isCorrect: false },
                { content: 'Blob storage trigger', isCorrect: true },
                { content: 'Queue storage trigger', isCorrect: false },
                { content: 'Timer trigger', isCorrect: false },
            ],
        },
        {
            content: 'In Azure API Management, how do you group multiple APIs together to grant access to a specific group of developers?',
            explanation: 'Use "Products" to group APIs and define usage conditions (e.g., requiring a subscription key).',
            answers: [
                { content: 'Use Resource Groups', isCorrect: false },
                { content: 'Use Products', isCorrect: true },
                { content: 'Use VNets', isCorrect: false },
                { content: 'Use Azure AD Groups', isCorrect: false },
            ],
        },
        {
            content: 'When using Azure Service Bus, you want to ensure that messages related to the same "Session ID" are processed in the correct order (FIFO) by the same receiver. Which feature should you enable?',
            explanation: 'Message Sessions allow for the processing of ordered message groups in Service Bus.',
            answers: [
                { content: 'Dead-lettering', isCorrect: false },
                { content: 'Message Sessions', isCorrect: true },
                { content: 'Auto-forwarding', isCorrect: false },
                { content: 'Duplicate detection', isCorrect: false },
            ],
        },
        {
            content: 'What is the concept of "Partitions" used for in Azure Event Hubs?',
            explanation: 'To enable large-scale parallel data processing by dividing the data stream into multiple independent threads.',
            answers: [
                { content: 'To encrypt data', isCorrect: false },
                { content: 'To increase parallel processing capability and throughput', isCorrect: true },
                { content: 'To store data permanently', isCorrect: false },
                { content: 'To block hackers', isCorrect: false },
            ],
        },
        {
            content: 'In Application Insights, what information does the "Application Map" tool display?',
            explanation: 'It displays a visual diagram of application components and third-party services (dependencies) along with performance/error metrics between them.',
            answers: [
                { content: 'Geographic location of the server', isCorrect: false },
                { content: 'Diagram of architectural components and their interactions', isCorrect: true },
                { content: 'List of project employees', isCorrect: false },
                { content: 'History of code commits on GitHub', isCorrect: false },
            ],
        },
        {
            content: 'To enable Application Insights for a client-side JavaScript website running on a browser, what do you need to do?',
            explanation: 'You need to insert a JavaScript code snippet (SDK Snippet) containing the "Instrumentation Key" or "Connection String" into the HTML page.',
            answers: [
                { content: 'Configuring in the Azure Portal is enough', isCorrect: false },
                { content: 'Insert the Application Insights JavaScript SDK snippet into the website', isCorrect: true },
                { content: 'Install an extension on the user\'s browser', isCorrect: false },
                { content: 'The application enables automatically without intervention', isCorrect: false },
            ],
        },
        {
            content: 'In which tiers does Azure Redis Cache support "Persistence" (durable storage) mode?',
            explanation: 'The Data Persistence (RDB/AOF) feature is only available in the Premium tier.',
            answers: [
                { content: 'Basic', isCorrect: false },
                { content: 'Standard', isCorrect: false },
                { content: 'Premium', isCorrect: true },
                { content: 'All tiers', isCorrect: false },
            ],
        },
        {
            content: 'Which CLI command is used to list all App Service Plans in a Subscription?',
            explanation: 'Use the command `az appservice plan list`.',
            answers: [
                { content: 'az webapp list', isCorrect: false },
                { content: 'az appservice plan list', isCorrect: true },
                { content: 'az plan show', isCorrect: false },
                { content: 'az resource list', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Container Registry (ACR), what are "Tasks" used for?',
            explanation: 'ACR Tasks allow for automating the build, test, and patching process for container images (e.g., automatically building when GitHub code changes).',
            answers: [
                { content: 'To delete old files', isCorrect: false },
                { content: 'To automate the building and management of container images', isCorrect: true },
                { content: 'For manual virus scanning', isCorrect: false },
                { content: 'To send report emails', isCorrect: false },
            ],
        },
        {
            content: 'Your application needs to access Azure Storage securely. Why is "Managed Identity" recommended over a "Connection String"?',
            explanation: 'Because it does not require developers to manage or see passwords/access keys, minimizing the risk of secret leaks.',
            answers: [
                { content: 'Because it runs faster', isCorrect: false },
                { content: 'Because it eliminates manual secret handling in the application', isCorrect: true },
                { content: 'Because it is free', isCorrect: false },
                { content: 'Because it is only for Windows', isCorrect: false },
            ],
        },
        {
            content: 'Azure Key Vault supports "Soft Delete" for secrets. By default, after how many days will accidentally deleted secrets be permanently deleted if not recovered?',
            explanation: 'The default retention period for soft delete is 90 days.',
            answers: [
                { content: '7 days', isCorrect: false },
                { content: '30 days', isCorrect: false },
                { content: '90 days', isCorrect: true },
                { content: '365 days', isCorrect: false },
            ],
        },
        {
            content: 'When deploying code to Azure Functions using a ZIP file, what benefit does "Run-From-Package" provide?',
            explanation: 'It helps the function start faster, allows the file system to be read-only, and ensures deployment consistency.',
            answers: [
                { content: 'Makes the ZIP file smaller', isCorrect: false },
                { content: 'Increases function startup speed and ensures package integrity', isCorrect: true },
                { content: 'Allows editing code directly on the portal', isCorrect: false },
                { content: 'Automatically translates code', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Service Bus, you want a message to disappear from the queue if it is not processed after 1 hour. Which parameter do you configure?',
            explanation: 'The TTL (Time To Live) parameter determines the maximum age of a message.',
            answers: [
                { content: 'Lock Duration', isCorrect: false },
                { content: 'Time to Live (TTL)', isCorrect: true },
                { content: 'Max Delivery Count', isCorrect: false },
                { content: 'Priority', isCorrect: false },
            ],
        },
        {
            content: 'Where does Azure Event Hubs "Capture" allow for the automatic sending of streaming data for long-term storage?',
            explanation: 'It supports automatically sending data to Azure Blob Storage or Azure Data Lake Storage.',
            answers: [
                { content: 'Azure SQL Database', isCorrect: false },
                { content: 'Azure Blob Storage or Data Lake', isCorrect: true },
                { content: 'Email', isCorrect: false },
                { content: 'GitHub', isCorrect: false },
            ],
        },
        {
            content: 'To analyze logs from multiple sources using the Kusto (KQL) language, where do you need to push these logs?',
            explanation: 'Log data needs to be pushed to the Log Analytics Workspace of Azure Monitor.',
            answers: [
                { content: 'Application Insights', isCorrect: false },
                { content: 'Log Analytics Workspace', isCorrect: true },
                { content: 'Storage Account', isCorrect: false },
                { content: 'Event Hub', isCorrect: false },
            ],
        },
        {
            content: 'You are developing a microservices solution. To coordinate calling different APIs securely and with control, which service should you use as a gateway?',
            explanation: 'Azure API Management acts as an intermediary gateway to manage, secure, and provide APIs.',
            answers: [
                { content: 'Azure Front Door', isCorrect: false },
                { content: 'Azure API Management', isCorrect: true },
                { content: 'Azure Load Balancer', isCorrect: false },
                { content: 'Azure DNS', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Redis Cache, what does the "Eviction Policy" parameter determine?',
            explanation: 'Determines how Redis handles when memory is full (e.g., deleting the least recently used keys - LRU).',
            answers: [
                { content: 'How data is encrypted', isCorrect: false },
                { content: 'The strategy for deleting data when the cache memory is full', isCorrect: true },
                { content: 'Data backup time', isCorrect: false },
                { content: 'Redis CPU speed', isCorrect: false },
            ],
        },
        {
            content: 'When using Azure App Configuration with .NET Core, which method do you use to automatically update configurations without restarting the application?',
            explanation: 'Use the `ConfigureRefresh` method in the SDK configuration.',
            answers: [
                { content: 'Reload()', isCorrect: false },
                { content: 'ConfigureRefresh', isCorrect: true },
                { content: 'AddAzureAppConfiguration', isCorrect: false },
                { content: 'UpdateSettings', isCorrect: false },
            ],
        },
        {
            content: 'Azure Search supports "Skillsets" in the AI Enrichment process. What are they used for?',
            explanation: 'To apply AI algorithms (such as language detection, OCR, entity extraction) to raw data during indexing.',
            answers: [
                { content: 'To increase search speed', isCorrect: false },
                { content: 'To extract intelligent information from unstructured data', isCorrect: true },
                { content: 'To block sensitive keywords', isCorrect: false },
                { content: 'To translate text', isCorrect: false },
            ],
        },
        {
            content: 'In the Microsoft identity platform, how does an "ID Token" differ from an "Access Token"?',
            explanation: 'The ID Token contains information about the user (authentication), while the Access Token is used to grant access to resources (authorization).',
            answers: [
                { content: 'ID Token contains the password', isCorrect: false },
                { content: 'ID Token is for identity verification, Access Token is for API access', isCorrect: true },
                { content: 'Access Token is more secure', isCorrect: false },
                { content: 'They are the same', isCorrect: false },
            ],
        },
        {
            content: 'You need to grant an application permission to read files from its own Blob Storage. Which type of Managed Identity can you use?',
            explanation: 'Both System-assigned and User-assigned Managed Identities can be used for this purpose.',
            answers: [
                { content: 'System-assigned only', isCorrect: false },
                { content: 'User-assigned only', isCorrect: false },
                { content: 'Both System-assigned and User-assigned', isCorrect: true },
                { content: 'Neither can be used', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Functions, which underlying storage service does the "Durable Functions" package use to manage state?',
            explanation: 'It uses Azure Storage (Queues, Tables, and Blobs) to maintain execution history and function state.',
            answers: [
                { content: 'Azure SQL', isCorrect: false },
                { content: 'Azure Storage', isCorrect: true },
                { content: 'Cosmos DB', isCorrect: false },
                { content: 'Redis', isCorrect: false },
            ],
        },
        {
            content: 'Which script is used for automated configuration of an Azure App Service immediately after deployment via Kudu?',
            explanation: 'The `.deployment` file or custom deployment scripts can be used.',
            answers: [
                { content: 'deploy.sh', isCorrect: false },
                { content: '.deployment file', isCorrect: true },
                { content: 'appsettings.json', isCorrect: false },
                { content: 'web.config', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Container Registry (ACR), how does the "Webhook" scenario help the dev workflow?',
            explanation: 'It can send notifications to other services (such as Jenkins, Azure DevOps, Slack) whenever a new image is pushed.',
            answers: [
                { content: 'Automatically delete old images', isCorrect: false },
                { content: 'Trigger external actions for every event in the registry', isCorrect: true },
                { content: 'Increase image download speed', isCorrect: false },
                { content: 'Encrypt connections', isCorrect: false },
            ],
        },
        {
            content: 'When using the Azure Cosmos DB .NET SDK, how do you reduce the RU cost for read queries?',
            explanation: 'By specifying the Partition Key in the read request so that Cosmos DB finds the exact partition containing the data.',
            answers: [
                { content: 'Use a more powerful computer', isCorrect: false },
                { content: 'Provide the Partition Key in the RequestOptions property', isCorrect: true },
                { content: 'Use HTTP instead of TCP', isCorrect: false },
                { content: 'Turn off indexing', isCorrect: false },
            ],
        },
        {
            content: 'How does the "Binding" model in Azure Functions help developers?',
            explanation: 'It simplifies code by automatically connecting function inputs/outputs to other services without needing complex connection initialization code.',
            answers: [
                { content: 'Makes code run faster', isCorrect: false },
                { content: 'Simplifies interaction with other data services through configuration', isCorrect: true },
                { content: 'Used for code translation', isCorrect: false },
                { content: 'Password management', isCorrect: false },
            ],
        },
        {
            content: 'What is the maximum message size supported by Azure Service Bus "Sessions" (in the Standard tier)?',
            explanation: 'The Standard tier of Service Bus supports messages up to 256 KB.',
            answers: [
                { content: '64 KB', isCorrect: false },
                { content: '256 KB', isCorrect: true },
                { content: '1 MB', isCorrect: false },
                { content: '100 MB', isCorrect: false },
            ],
        },
        {
            content: 'What is the "Auto-delete on idle" feature in Service Bus Queue used for?',
            explanation: 'To automatically delete the queue if there are no messages or operations for a certain period.',
            answers: [
                { content: 'Data backup', isCorrect: false },
                { content: 'To automatically clean up unused queues', isCorrect: true },
                { content: 'Delete spam messages', isCorrect: false },
                { content: 'Shut down the server', isCorrect: false },
            ],
        },
        {
            content: 'In Azure API Management, how do you limit each user to only 100 API calls per hour?',
            explanation: 'Use the "rate-limit" or "quota" policy.',
            answers: [
                { content: 'Write code in the backend', isCorrect: false },
                { content: 'Use Rate limiting or Quota policies', isCorrect: true },
                { content: 'Use an external firewall', isCorrect: false },
                { content: 'Block the user\'s IP', isCorrect: false },
            ],
        },
        {
            content: 'Which technology does Azure Front Door use to deliver content to users fastest from Edge locations?',
            explanation: 'Uses Anycast network combined with Split TCP architecture.',
            answers: [
                { content: 'Direct submarine fiber optic cable', isCorrect: false },
                { content: 'Anycast network and Split TCP', isCorrect: true },
                { content: 'Satellite link', isCorrect: false },
                { content: 'Bluetooth Mesh', isCorrect: false },
            ],
        },
        {
            content: 'In Application Insights, what is the "Profiler" tool used for?',
            explanation: 'To analyze code method execution performance in detail for a live application.',
            answers: [
                { content: 'See who logged in', isCorrect: false },
                { content: 'Identify code performance bottlenecks', isCorrect: true },
                { content: 'Virus scanning', isCorrect: false },
                { content: 'Sending spam messages', isCorrect: false },
            ],
        },
        {
            content: 'What is the benefit of "Warming-up" an App Service Instance before a Slot Swap?',
            explanation: 'Ensures the application is ready to handle traffic (cache loaded, DB connected) to avoid errors or high latency immediately after the swap.',
            answers: [
                { content: 'Warm up the server to run fast', isCorrect: false },
                { content: 'Ensures the application is ready to handle requests immediately after Swap', isCorrect: true },
                { content: 'Delete old logs', isCorrect: false },
                { content: 'Increase network bandwidth', isCorrect: false },
            ],
        },
        {
            content: 'In Azure AD, what does it mean to "Grant admin consent" for an application?',
            explanation: 'The admin approves the application to access resources on behalf of all users in the organization (e.g., reading everyone\'s calendars).',
            answers: [
                { content: 'Allow the application to run', isCorrect: false },
                { content: 'Approve access permissions at the tenant-wide level', isCorrect: true },
                { content: 'Donate money to the application author', isCorrect: false },
                { content: 'Make the application look better', isCorrect: false },
            ],
        },
        {
            content: 'An Azure Resource Manager (ARM) template is written in which format?',
            explanation: 'ARM Template uses the JSON (JavaScript Object Notation) format.',
            answers: [
                { content: 'XML', isCorrect: false },
                { content: 'JSON', isCorrect: true },
                { content: 'YAML', isCorrect: false },
                { content: 'Markdown', isCorrect: false },
            ],
        },
        {
            content: 'What is the difference between "Stateful" and "Stateless" in compute services?',
            explanation: 'Stateful maintains state data between calls, while Stateless does not (each call is independent).',
            answers: [
                { content: 'Stateless is more expensive', isCorrect: false },
                { content: 'Stateful saves state data, Stateless does not save anything between sessions', isCorrect: true },
                { content: 'Stateless is only for SQL', isCorrect: false },
                { content: 'They are the same', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Redis Cache, what is the "Sharding" scenario used for?',
            explanation: 'To distribute data across multiple Redis nodes to scale memory capacity and throughput beyond the limits of a single node.',
            answers: [
                { content: 'Encrypt data', isCorrect: false },
                { content: 'Scale storage and performance by partitioning data', isCorrect: true },
                { content: 'To reduce electricity costs', isCorrect: false },
                { content: 'To back up files', isCorrect: false },
            ],
        },
        {
            content: 'What role do Azure Search "Indexers" play?',
            explanation: 'They are crawlers that automate pulling data from sources (such as SQL, Cosmos DB, Blob) into a search index.',
            answers: [
                { content: 'Searching for data', isCorrect: false },
                { content: 'Automating the loading of data from sources into the Index', isCorrect: true },
                { content: 'Web display format', isCorrect: false },
                { content: 'Encrypting connections', isCorrect: false },
            ],
        },
        {
            content: 'Your Azure Function has "Timed out". What is the default execution time in minutes for the Consumption plan?',
            explanation: 'The default is 5 minutes, and it can be configured up to a maximum of 10 minutes.',
            answers: [
                { content: '1 minute', isCorrect: false },
                { content: '5 minutes', isCorrect: true },
                { content: '30 minutes', isCorrect: false },
                { content: 'Never timeout', isCorrect: false },
            ],
        },
        {
            content: 'To protect an API from application-layer DDoS attacks, which service should you combine with API Management?',
            explanation: 'Combine with Azure Application Gateway (WAF) or Azure Front Door (WAF) for Layer 7 security capabilities.',
            answers: [
                { content: 'Azure Storage', isCorrect: false },
                { content: 'Application Gateway with WAF', isCorrect: true },
                { content: 'Azure Search', isCorrect: false },
                { content: 'Azure DNS', isCorrect: false },
            ],
        },
        {
            content: 'In Azure App Service, how does "Scale-Up" differ from "Scale-Out"?',
            explanation: 'Scale-up is increasing the configuration (CPU/RAM/Tier) of the current App Service Plan, while Scale-out is adding more instances to run the application.',
            answers: [
                { content: 'Exactly the same', isCorrect: false },
                { content: 'Scale-up increases hardware configuration, Scale-out increases the number of servers', isCorrect: true },
                { content: 'Scale-up is cheaper', isCorrect: false },
                { content: 'Scale-out is only for SQL', isCorrect: false },
            ],
        },
        {
            content: 'Azure Key Vault supports automatic "Key rotation" for which type of object?',
            explanation: 'Supports automatic rotation for encryption Keys and some integrated secret types.',
            answers: [
                { content: 'Manual passwords', isCorrect: false },
                { content: 'Encryption keys', isCorrect: true },
                { content: 'User email', isCorrect: false },
                { content: 'Server name', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Storage, what information does "Shared Key authentication" use to authenticate?',
            explanation: 'Uses the Storage Account Name and one of two Access Keys.',
            answers: [
                { content: 'Windows Username/Password', isCorrect: false },
                { content: 'Storage Account Name and Access Key', isCorrect: true },
                { content: 'Server IP address', isCorrect: false },
                { content: 'SSL Certificate', isCorrect: false },
            ],
        },
        {
            content: 'What does Durable Functions use an "Orchestrator function" for?',
            explanation: 'To define the workflow and coordinate other "Activity functions".',
            answers: [
                { content: 'Heavy data calculation', isCorrect: false },
                { content: 'Coordinating and managing the execution flow between functions', isCorrect: true },
                { content: 'Building UI interfaces', isCorrect: false },
                { content: 'Sending email', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of using a "Correlation ID" in distributed application monitoring?',
            explanation: 'To link logs and traces from multiple different services belonging to the same user request.',
            answers: [
                { content: 'To encrypt data', isCorrect: false },
                { content: 'To track a request across microservices', isCorrect: true },
                { content: 'To increase network speed', isCorrect: false },
                { content: 'To reduce storage cost', isCorrect: false },
            ],
        },
        {
            content: 'In Azure App Configuration, what are "Labels" used for?',
            explanation: 'Used to create different configuration versions for the same Key (e.g., "Dev", "Production", or "v1" labels).',
            answers: [
                { content: 'Only for decoration', isCorrect: false },
                { content: 'To distinguish between different versions/environments for a configuration', isCorrect: true },
                { content: 'Encrypting the Key', isCorrect: false },
                { content: 'Automatically deleting the Key', isCorrect: false },
            ],
        },
        {
            content: 'What is the consequence of choosing a Partition Key with an excessively high access frequency (Hot Partition) in Azure Cosmos DB?',
            explanation: 'Leads to "Request rate is large" (429) errors and wasted resources of other partitions.',
            answers: [
                { content: 'Data is completely deleted', isCorrect: false },
                { content: 'Limits performance and causes 429 errors due to local overload', isCorrect: true },
                { content: 'Reduces monthly costs', isCorrect: false },
                { content: 'Accelerates global search', isCorrect: false },
            ],
        },
    ],
};
