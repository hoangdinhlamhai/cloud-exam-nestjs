export const az204Exam4 = {
    title: 'Azure Developer Associate AZ-204 - Practice Test 4',
    description: 'Azure Developer Associate AZ-204 Practice Test synthesizing all programming skills on Azure.',
    durationMinutes: 120,
    courseId: 9,
    questions: [
        {
            content: 'You are developing an Azure Function. You want to store a small value quickly and without high storage costs. However, this value needs to be retained between runs of the same Instance. What should you use?',
            explanation: 'Using static variables in code (In-memory) is the fastest and free way to retain state between calls if that Instance hasn\'t been restarted.',
            answers: [
                { content: 'Azure SQL', isCorrect: false },
                { content: 'Static variables in memory', isCorrect: true },
                { content: 'A .txt file on C: drive', isCorrect: false },
                { content: 'Send to a Queue', isCorrect: false },
            ],
        },
        {
            content: 'In Azure App Service, how does "Local Cache" help web application performance?',
            explanation: 'It stores application files directly on the SSD of the running virtual machine instead of accessing them over the network to designated Storage, speeding up file reads.',
            answers: [
                { content: 'To backup code', isCorrect: false },
                { content: 'Reduce file access latency by storing files locally on the server running the app', isCorrect: true },
                { content: 'Encrypt website', isCorrect: false },
                { content: 'Block hacker', isCorrect: false },
            ],
        },
        {
            content: 'You use Azure Cosmos DB with multiple Regions. You want your application to automatically connect to the Region with the lowest latency. What do you configure in the SDK?',
            explanation: 'Use the `ApplicationRegion` or `ApplicationPreferredRegions` property in CosmosClientOptions.',
            answers: [
                { content: 'Use a proxy', isCorrect: false },
                { content: 'Set Preferred Regions in the SDK configuration', isCorrect: true },
                { content: 'Always use US East IP', isCorrect: false },
                { content: 'Cannot be automatic', isCorrect: false },
            ],
        },
        {
            content: 'When encountering a "412 Precondition Failed" error when updating a file in Azure Blob Storage, what is the usual cause?',
            explanation: 'This is an error related to concurrency management (Optimistic Concurrency) - the ETag of the file on the server has changed from the version you are holding.',
            answers: [
                { content: 'Wrong password', isCorrect: false },
                { content: 'Data version conflict (ETag mismatch)', isCorrect: true },
                { content: 'Disk full', isCorrect: false },
                { content: 'Operating system error', isCorrect: false },
            ],
        },
        {
            content: 'In Azure API Management, what is the "rewrite-uri" policy used for?',
            explanation: 'To change the URL path received from a client before sending it to the backend service.',
            answers: [
                { content: 'Change website name', isCorrect: false },
                { content: 'Map client URL to a different backend URL structure', isCorrect: true },
                { content: 'Encrypt database', isCorrect: false },
                { content: 'Block IP', isCorrect: false },
            ],
        },
        {
            content: 'Azure Key Vault: What is the difference between a "Secret" and a "Key"?',
            explanation: 'A Secret is any text string (passwords, connection strings), whereas a Key is an encryption key (RSA, EC) used for cryptographic operations.',
            answers: [
                { content: 'No difference', isCorrect: false },
                { content: 'Secret is for passwords, Key is for data encryption operations', isCorrect: true },
                { content: 'Key is cheaper than Secret', isCorrect: false },
                { content: 'Secret is for SQL only', isCorrect: false },
            ],
        },
        {
            content: 'When using Azure Service Bus, how do you implement a "Dead-lettering on filter evaluation exceptions" model?',
            explanation: 'By enabling the corresponding property on the Topic Subscription, so messages causing filter errors are pushed to the dead-letter queue.',
            answers: [
                { content: 'Write try-catch code', isCorrect: false },
                { content: 'Set the EnableDeadLetteringOnFilterEvaluationExceptions property to true', isCorrect: true },
                { content: 'Buy more service plans', isCorrect: false },
                { content: 'Delete error messages', isCorrect: false },
            ],
        },
        {
            content: 'Azure Event Grid: What is the default "Event Schema" used by Microsoft?',
            explanation: 'CloudEvents v1.0 is the schema standard widely supported by Microsoft alongside their own Event Grid schema.',
            answers: [
                { content: 'XML Schema', isCorrect: false },
                { content: 'CloudEvents v1.0 schema', isCorrect: true },
                { content: 'SQL Schema', isCorrect: false },
                { content: 'HTML', isCorrect: false },
            ],
        },
        {
            content: 'In Application Insights, how does "Smart Detection" help the developer?',
            explanation: 'It uses Machine Learning to automatically detect unusual behavior patterns (e.g., spike in error rate, memory leak).',
            answers: [
                { content: 'Write code for you automatically', isCorrect: false },
                { content: 'Automatically send alerts when performance anomalies or errors are detected', isCorrect: true },
                { content: 'Delete logs for you', isCorrect: false },
                { content: 'Search on Google', isCorrect: false },
            ],
        },
        {
            content: 'To protect secrets in a local configuration file (appsettings.json) when publishing code to GitHub, which .NET tool should you use?',
            explanation: 'Use Secret Manager (dotnet user-secrets) to store secrets outside the project directory on the development machine.',
            answers: [
                { content: 'Encrypt file using WinRAR', isCorrect: false },
                { content: 'Secret Manager tool (user-secrets)', isCorrect: true },
                { content: 'Save to notepad', isCorrect: false },
                { content: 'Do nothing', isCorrect: false },
            ],
        },
        {
            content: 'Which CLI command is used to upload a file to an Azure Storage Blob?',
            explanation: 'Use the `az storage blob upload` command.',
            answers: [
                { content: 'az storage copy', isCorrect: false },
                { content: 'az storage blob upload', isCorrect: true },
                { content: 'az blob send', isCorrect: false },
                { content: 'az upload-file', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Container Registry (ACR), how does "Geo-replication" help?',
            explanation: 'Automatically replicates container images to different Regions to reduce pulling latency and increase availability.',
            answers: [
                { content: 'Make container image smaller', isCorrect: false },
                { content: 'Maintain registry replicas across geographical regions to optimize access', isCorrect: true },
                { content: 'Encrypt files', isCorrect: false },
                { content: 'Translate image names to local languages', isCorrect: false },
            ],
        },
        {
            content: 'Why is using "Asynchronous programming" (async/await) important when calling Azure services?',
            explanation: 'To avoid clogging the thread pool in wait of network responses, allowing the app to handle more concurrent requests.',
            answers: [
                { content: 'Make code look better', isCorrect: false },
                { content: 'Improve application scalability and performance', isCorrect: true },
                { content: 'It is mandatory; won\'t run without it', isCorrect: false },
                { content: 'Save money', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Cosmos DB, what are the pros and cons of the default "Index All" feature?',
            explanation: 'The pro is that you can query any property; the con is it costs additional RU on writes and storage space for the index.',
            answers: [
                { content: 'Always good, no cons', isCorrect: false },
                { content: 'Allows flexible querying but consumes additional storage and write resources', isCorrect: true },
                { content: 'Make database run 100x faster', isCorrect: false },
                { content: 'Easier for hackers to attack', isCorrect: false },
            ],
        },
        {
            content: 'What is the default "Data Retention" in Azure Event Hubs for the Standard plan?',
            explanation: 'The default is 1 day, and it can be configured up to 7 days.',
            answers: [
                { content: '1 day', isCorrect: true },
                { content: '7 days', isCorrect: false },
                { content: '30 days', isCorrect: false },
                { content: 'Forever', isCorrect: false },
            ],
        },
        {
            content: 'When configuring Azure CDN, what does "Query string caching" -> "Ignore query strings" do?',
            explanation: 'Every request with different query strings (e.g., file.js?v=1 and file.js?v=2) is treated as the same file and shares a cache version.',
            answers: [
                { content: 'Remove query string from URL', isCorrect: false },
                { content: 'Treat all requests with different parameters as the same resource for caching', isCorrect: true },
                { content: 'Block every request with a query string', isCorrect: false },
                { content: 'Automatically change parameters', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Redis Cache, for which type of application is the "Vector Search" scenario intended?',
            explanation: 'For AI/Generative AI applications to search for similar data based on embeddings.',
            answers: [
                { content: 'Payroll calculation app', isCorrect: false },
                { content: 'AI-based smart search application', isCorrect: true },
                { content: 'Messaging app', isCorrect: false },
                { content: 'Video storage app', isCorrect: false },
            ],
        },
        {
            content: 'How do Azure API Management "Versions" and "Revisions" differ?',
            explanation: 'Revisions are for minor/non-breaking changes; Versions are for major changes that could break existing clients.',
            answers: [
                { content: 'Identical', isCorrect: false },
                { content: 'Revisions for minor changes, Versions for major changes requiring user confirmation', isCorrect: true },
                { content: 'Versions are cheaper', isCorrect: false },
                { content: 'Revisions for admin only', isCorrect: false },
            ],
        },
        {
            content: 'What security purpose does periodically "Regenerating" Storage Account Access Keys serve?',
            explanation: 'To mitigate risk if one of the keys is compromised or in unauthorized hands (Key rotation).',
            answers: [
                { content: 'Make storage faster', isCorrect: false },
                { content: 'Minimize damage if a key is leaked (Security rotations)', isCorrect: true },
                { content: 'Save costs', isCorrect: false },
                { content: 'Delete old data', isCorrect: false },
            ],
        },
        {
            content: 'In the Microsoft identity platform, what is a "Scope" used for?',
            explanation: 'Used to specify the exact permission levels an application requests from the user.',
            answers: [
                { content: 'Microscope', isCorrect: false },
                { content: 'Specify the scope of access permissions the application requests', isCorrect: true },
                { content: 'Define IP range', isCorrect: false },
                { content: 'Encrypt code', isCorrect: false },
            ],
        },
        {
            content: 'Which of the following trigger types does Azure App Service "WebJobs" support for "Scheduled" jobs?',
            explanation: 'Use CRON expressions to set the schedule.',
            answers: [
                { content: 'Manual only', isCorrect: false },
                { content: 'CRON expression', isCorrect: true },
                { content: 'By calling a phone number', isCorrect: false },
                { content: 'Temperature sensor', isCorrect: false },
            ],
        },
        {
            content: 'Which resource in Azure Cosmos DB is used to implement complex server-side data processing logic?',
            explanation: 'Stored Procedures, Triggers, and User Defined Functions (UDFs) written in JavaScript.',
            answers: [
                { content: 'Python scripts', isCorrect: false },
                { content: 'Stored Procedures and Triggers written in JavaScript', isCorrect: true },
                { content: 'C# code', isCorrect: false },
                { content: 'Shell script', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Service Bus, when is the "Message Deferral" scenario used?',
            explanation: 'When a receiver gets a message but cannot process it immediately (e.g., waiting for other data) and wants to retrieve it later using a specific sequence number.',
            answers: [
                { content: 'Delete message', isCorrect: false },
                { content: 'Tear treatment of message for later retrieval by sequence number', isCorrect: true },
                { content: 'Send message to email', isCorrect: false },
                { content: 'Encrypt message', isCorrect: false },
            ],
        },
        {
            content: 'What are Azure Search "Synonym maps" used for?',
            explanation: 'To ensure that when a user searches for a term, results appear for other synonyms as well (e.g., "phone" and "mobile").',
            answers: [
                { content: 'For translation', isCorrect: false },
                { content: 'Expand search results to include synonyms', isCorrect: true },
                { content: 'Block profanity keywords', isCorrect: false },
                { content: 'Rename files', isCorrect: false },
            ],
        },
        {
            content: 'When using Azure App Configuration with "Managed Identity", which role do you need to assign to the app so it can read configurations?',
            explanation: 'The "App Configuration Data Reader" role is sufficient for reading purposes.',
            answers: [
                { content: 'Owner', isCorrect: false },
                { content: 'App Configuration Data Reader', isCorrect: true },
                { content: 'Contributor', isCorrect: false },
                { content: 'Reader', isCorrect: false },
            ],
        },
        {
            content: 'On what level can an Azure Front Door "WAF Policy" be assigned?',
            explanation: 'It can be assigned at the Endpoint level or specific Domain/Route level.',
            answers: [
                { content: 'Entire Subscription only', isCorrect: false },
                { content: 'At Endpoint level or per specific Route', isCorrect: true },
                { content: 'For SQL server only', isCorrect: false },
                { content: 'Cannot be assigned', isCorrect: false },
            ],
        },
        {
            content: 'What is the effect of enabling "Continuous Export" in Application Insights?',
            explanation: 'Automatically sends raw telemetry log files to a Storage Account for long-term analysis or use with other tools (like PowerBI).',
            answers: [
                { content: 'Auto-update app version', isCorrect: false },
                { content: 'Export raw monitoring data to a Storage Account continuously', isCorrect: true },
                { content: 'Print report to paper', isCorrect: false },
                { content: 'Delete old data', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Container Registry, can a "Tag" assigned to an image be changed to point to a different image?',
            explanation: 'Yes, Tags are flexible (though they can be locked using the immutability feature if desired).',
            answers: [
                { content: 'Always fixed', isCorrect: false },
                { content: 'Yes, tag can be redefined to point to different image digests', isCorrect: true },
                { content: 'For admin only', isCorrect: false },
                { content: 'Tag cannot be deleted', isCorrect: false },
            ],
        },
        {
            content: 'Why should you avoid using an "Azure Function" for very long-running tasks (e.g., 1 hour) in a Consumption plan?',
            explanation: 'The Consumption plan has a maximum execution time (timeout) of 10 minutes; beyond this, the function will be disconnected.',
            answers: [
                { content: 'Costs a lot of money', isCorrect: false },
                { content: 'Due to system execution time limits (timeout)', isCorrect: true },
                { content: 'Function will be hacked', isCorrect: false },
                { content: 'Due to weak internet', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Cosmos DB, in what unit is the "ttl" (Time to Live) property at the Document level measured?',
            explanation: 'Measured in seconds. After this period, the file will be automatically deleted.',
            answers: [
                { content: 'Minutes', isCorrect: false },
                { content: 'Seconds', isCorrect: true },
                { content: 'Hours', isCorrect: false },
                { content: 'Days', isCorrect: false },
            ],
        },
        {
            content: 'What is Azure Service Bus "Auto-forwarding" used for?',
            explanation: 'To automatically forward messages from one queue/subscription to another queue/topic within the same namespace.',
            answers: [
                { content: 'Send email to boss', isCorrect: false },
                { content: 'Automatically forward messages between Service Bus entities', isCorrect: true },
                { content: 'Block spam messages', isCorrect: false },
                { content: 'Send message to AWS', isCorrect: false },
            ],
        },
        {
            content: 'Microsoft Graph API: How do you filter results to only include certain properties (e.g., only email and name)?',
            explanation: 'Use the `$select` query parameter.',
            answers: [
                { content: '$filter', isCorrect: false },
                { content: '$select', isCorrect: true },
                { content: '$top', isCorrect: false },
                { content: '$orderby', isCorrect: false },
            ],
        },
        {
            content: 'To how many Azure resources can a "User-assigned Managed Identity" be assigned maximum?',
            explanation: 'It can be assigned to many different resources (multiple VMs, multiple App Services) sharing a single identity.',
            answers: [
                { content: 'Only 1', isCorrect: false },
                { content: 'Maximum 10', isCorrect: false },
                { content: 'Multiple different resources', isCorrect: true },
                { content: 'Only resources in the same region', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Redis Cache, which plan supports the "Virtual Network (VNET) isolation" feature?',
            explanation: 'Only the Premium plan supports deploying Redis directly inside a VNET.',
            answers: [
                { content: 'Basic', isCorrect: false },
                { content: 'Standard', isCorrect: false },
                { content: 'Premium', isCorrect: true },
                { content: 'No plan', isCorrect: false },
            ],
        },
        {
            content: 'When do Azure Search "CORS" settings need to be configured?',
            explanation: 'When you want to call the search API directly from a user\'s browser JavaScript running on a different domain.',
            answers: [
                { content: 'When loading data', isCorrect: false },
                { content: 'When querying from the browser (Client-side search calls)', isCorrect: true },
                { content: 'When encrypting data', isCorrect: false },
                { content: 'When backing up data', isCorrect: false },
            ],
        },
        {
            content: 'To check if an App Service has a memory leak, which tool in the Portal should you use?',
            explanation: 'Use "Diagnose and solve problems" -> "Memory Usage" to see detailed analysis.',
            answers: [
                { content: 'Azure Firewall', isCorrect: false },
                { content: 'Diagnose and solve problems', isCorrect: true },
                { content: 'Billing', isCorrect: false },
                { content: 'Activity Log', isCorrect: false },
            ],
        },
        {
            content: 'Which CLI command is used to list images in an Azure Container Registry?',
            explanation: 'Use the `az acr repository list` command.',
            answers: [
                { content: 'az acr image list', isCorrect: false },
                { content: 'az acr repository list', isCorrect: true },
                { content: 'az docker list', isCorrect: false },
                { content: 'az image list', isCorrect: false },
            ],
        },
        {
            content: 'When using Azure Functions with a Storage Queue trigger, what is the purpose of the "visibilityTimeout" parameter in host.json?',
            explanation: 'Specifies the time a message will be hidden after a function instance picks it up to process, before reappearing if processing fails.',
            answers: [
                { content: 'Message deletion time', isCorrect: false },
                { content: 'Time interval a message is hidden while awaiting processing', isCorrect: true },
                { content: 'Queue password', isCorrect: false },
                { content: 'Maximum number of messages', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Cosmos DB, what factors combine into "Request Units" (RU)?',
            explanation: 'RU is a measure of CPU, RAM, and IOPS resources required to perform a data operation.',
            answers: [
                { content: 'Cash only', isCorrect: false },
                { content: 'CPU, memory, and data read/write speed (IOPS)', isCorrect: true },
                { content: 'Internet speed', isCorrect: false },
                { content: 'Number of users', isCorrect: false },
            ],
        },
        {
            content: 'Which types of rules do Azure Service Bus "Topic Filters" support?',
            explanation: 'Supports Boolean filters, Correlation filters, and SQL-like filters.',
            answers: [
                { content: 'Boolean only', isCorrect: false },
                { content: 'Boolean, Correlation, and SQL-like filters', isCorrect: true },
                { content: 'Regex only', isCorrect: false },
                { content: 'HTML tags', isCorrect: false },
            ],
        },
        {
            content: 'In the Microsoft identity platform, what is "Silent authentication" for?',
            explanation: 'Used to retrieve new tokens using a refresh token without interrupting user experience with login popups.',
            answers: [
                { content: 'When the user is sleeping', isCorrect: false },
                { content: 'Retrieve token without user UI interaction', isCorrect: true },
                { content: 'Voice login', isCorrect: false },
                { content: 'Hacker logging in stealthily', isCorrect: false },
            ],
        },
        {
            content: 'How does Azure Key Vault "Purge protection" help?',
            explanation: 'It prevents keys/secrets from being permanently deleted immediately after soft-delete, ensuring they exist until the retention period ends.',
            answers: [
                { content: 'Make Key Vault faster', isCorrect: false },
                { content: 'Protect against malicious or accidental permanent resource deletion', isCorrect: true },
                { content: 'Auto-assign permissions', isCorrect: false },
                { content: 'Encrypt database', isCorrect: false },
            ],
        },
        {
            content: 'In Azure App Service, which source code sources does the "Deployment Center" support?',
            explanation: 'Supports GitHub, Bitbucket, Local Git, and Azure Repos.',
            answers: [
                { content: 'GitHub only', isCorrect: false },
                { content: 'GitHub, Bitbucket, Local Git, and Azure Repos', isCorrect: true },
                { content: 'USB Drive', isCorrect: false },
                { content: 'Google Drive', isCorrect: false },
            ],
        },
        {
            content: 'Why is designing "Idempotent functions" important when working with event-driven architectures?',
            explanation: 'Because an event can be delivered multiple times (at-least-once delivery), the function needs to ensures the final result doesn\'t change regardless of how many times it runs.',
            answers: [
                { content: 'Save code', isCorrect: false },
                { content: 'Ensure data consistency even if a function is run repeatedly', isCorrect: true },
                { content: 'Make function run faster', isCorrect: false },
                { content: 'Microsoft recommendation to reduce costs', isCorrect: false },
            ],
        },
        {
            content: 'In Azure API Management, where must the "Subscription Key" exist in a user\'s request by default?',
            explanation: 'Defaults to the "Ocp-Apim-Subscription-Key" header or a query string parameter with the same name.',
            answers: [
                { content: 'In JSON Body', isCorrect: false },
                { content: 'In HTTP Header or Query String', isCorrect: true },
                { content: 'In main URL path', isCorrect: false },
                { content: 'In SSL certificate', isCorrect: false },
            ],
        },
    ],
};
