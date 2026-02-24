export const az204Exam1 = {
    title: 'Azure Developer Associate AZ-204 - Practice Test 1',
    description: 'Azure Developer Associate AZ-204 Practice Test featuring 55 questions on Compute, Storage, and Security for developers.',
    durationMinutes: 120,
    courseId: 9,
    questions: [
        {
            content: 'You are developing a web application running on Azure App Service. You need to implement a continuous background task to process data from a queue. Which feature should you use?',
            explanation: 'WebJobs (Continuous) is the best integrated choice within App Service to run executables or scripts (.exe, .cmd, .bat, .sh, .php, .py, .js) in the background.',
            answers: [
                { content: 'Azure Functions', isCorrect: false },
                { content: 'App Service WebJobs', isCorrect: true },
                { content: 'Azure Logic Apps', isCorrect: false },
                { content: 'Azure Batch', isCorrect: false },
            ],
        },
        {
            content: 'You create an Azure Function with an "HTTP trigger" template. You want this function to only be accessible when the request includes a "Function key" in the header. Which authorization level should you set?',
            explanation: 'Authorization level "Function" requires a specific key for that function to authenticate requests.',
            answers: [
                { content: 'Anonymous', isCorrect: false },
                { content: 'Function', isCorrect: true },
                { content: 'Admin', isCorrect: false },
                { content: 'User', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Functions, what problem do "Durable Functions" solve compared to regular serverless functions?',
            explanation: 'Durable Functions allow writing stateful functions to manage complex workflows, which is difficult for regular stateless serverless functions.',
            answers: [
                { content: 'Make functions run faster', isCorrect: false },
                { content: 'Build stateful workflows', isCorrect: true },
                { content: 'Allow using more RAM', isCorrect: false },
                { content: 'Use for playing games', isCorrect: false },
            ],
        },
        {
            content: 'You need to deploy a Docker container to Azure without wanting to manage virtual machines or use Kubernetes. Which service is the fastest and simplest?',
            explanation: 'Azure Container Instances (ACI) is a serverless solution allowing for quick container execution without worrying about infrastructure.',
            answers: [
                { content: 'Azure Kubernetes Service (AKS)', isCorrect: false },
                { content: 'Azure Container Instances (ACI)', isCorrect: true },
                { content: 'Azure App Service for Containers', isCorrect: false },
                { content: 'Azure virtual Machine', isCorrect: false },
            ],
        },
        {
            content: 'When developing an application using Cosmos DB, you need to choose a good "Partition Key". Which characteristic of a Partition Key is ideal?',
            explanation: 'A good Partition Key should have a wide range of values and distribute traffic evenly (High cardinality) to avoid "hot partitions".',
            answers: [
                { content: 'Only two values (e.g., True/False)', isCorrect: false },
                { content: 'Has many distinct values and similar access frequency (High cardinality)', isCorrect: true },
                { content: 'Always the number 1', isCorrect: false },
                { content: 'The application name', isCorrect: false },
            ],
        },
        {
            content: 'Which of the following APIs does Azure Cosmos DB support for storing graph data?',
            explanation: 'Gremlin API is specifically used for graph data models in Cosmos DB.',
            answers: [
                { content: 'SQL API', isCorrect: false },
                { content: 'Gremlin API', isCorrect: true },
                { content: 'MongoDB API', isCorrect: false },
                { content: 'Cassandra API', isCorrect: false },
            ],
        },
        {
            content: 'You are developing an application using Azure Blob Storage. You want to allow users to download a specific file but only for 10 minutes. Which type of token should you create?',
            explanation: 'A Shared Access Signature (SAS) with a 10-minute expiration is the most secure and common method.',
            answers: [
                { content: 'Storage Account Key', isCorrect: false },
                { content: 'Shared Access Signature (SAS)', isCorrect: true },
                { content: 'Azure AD JWT Token', isCorrect: false },
                { content: 'OAuth2 Token', isCorrect: false },
            ],
        },
        {
            content: 'In the Azure Storage SDK, which class is used to interact with a Blob container?',
            explanation: 'In the new Azure SDK versions (.NET/Java/JS), `BlobContainerClient` is the main class for managing containers.',
            answers: [
                { content: 'CloudBlobClient', isCorrect: false },
                { content: 'BlobContainerClient', isCorrect: true },
                { content: 'StorageManager', isCorrect: false },
                { content: 'FileSystemClient', isCorrect: false },
            ],
        },
        {
            content: 'You need to store sensitive configurations such as connection strings for your web application. Which service is recommended for centralized secret management?',
            explanation: 'Azure Key Vault is a specialized service for securely storing and managing secrets, keys, and certificates.',
            answers: [
                { content: 'Azure App Configuration', isCorrect: false },
                { content: 'Azure Key Vault', isCorrect: true },
                { content: 'Storage Account', isCorrect: false },
                { content: 'Local Web.config', isCorrect: false },
            ],
        },
        {
            content: 'What problem does Azure\'s "Managed Identities" feature solve for developers?',
            explanation: 'It eliminates the need to store secrets (like passwords, client secrets) inside code by providing an automatic identity for resources.',
            answers: [
                { content: 'Make code run faster', isCorrect: false },
                { content: 'Authenticate between Azure services without managing secrets', isCorrect: true },
                { content: 'Automatically write code', isCorrect: false },
                { content: 'Translate code to another language', isCorrect: false },
            ],
        },
        {
            content: 'You want to implement a cache solution for an application to reduce database load. Which service provides Redis as a managed service?',
            explanation: 'Azure Cache for Redis is Microsoft\'s in-memory data store service based on open-source Redis software.',
            answers: [
                { content: 'Azure SQL Database', isCorrect: false },
                { content: 'Azure Cache for Redis', isCorrect: true },
                { content: 'Azure Cosmos DB', isCorrect: false },
                { content: 'Azure Front Door', isCorrect: false },
            ],
        },
        {
            content: 'In Azure App Service, what scenario is a "Deployment Slot" used for?',
            explanation: 'Used to deploy application versions into parallel environments (e.g., Staging) before going live (into the Production Slot).',
            answers: [
                { content: 'Data backup', isCorrect: false },
                { content: 'Zero-downtime deployment (Blue/Green deployment) and testing', isCorrect: true },
                { content: 'Image optimization', isCorrect: false },
                { content: 'Automatic email sending', isCorrect: false },
            ],
        },
        {
            content: 'What model does the Azure Event Grid service follow?',
            explanation: 'Event Grid is a Pub/Sub (Publish/Subscribe) service used for event-driven architectures.',
            answers: [
                { content: 'Request-Response', isCorrect: false },
                { content: 'Publish-Subscribe', isCorrect: true },
                { content: 'Batch Processing', isCorrect: false },
                { content: 'Database Storage', isCorrect: false },
            ],
        },
        {
            content: 'What is the main difference between Azure Event Hubs and Azure Service Bus?',
            explanation: 'Event Hubs are optimized for large-scale data ingestion (big data streaming), whereas Service Bus is optimized for reliable messaging between application components (enterprise messaging).',
            answers: [
                { content: 'Service Bus is faster', isCorrect: false },
                { content: 'Event Hubs are for large-scale data streaming, Service Bus is for complex enterprise messaging', isCorrect: true },
                { content: 'Event Hubs is for SQL only', isCorrect: false },
                { content: 'Service Bus does not support queues', isCorrect: false },
            ],
        },
        {
            content: 'You need to monitor the performance of web application source code and view real-time exceptions. Which service should you use?',
            explanation: 'Application Insights is a powerful Application Performance Management (APM) tool for developers.',
            answers: [
                { content: 'Azure Monitor Logs', isCorrect: false },
                { content: 'Application Insights', isCorrect: true },
                { content: 'Azure Advisor', isCorrect: false },
                { content: 'Activity Log', isCorrect: false },
            ],
        },
        {
            content: 'In Azure API Management, what is the "Policies" component used for?',
            explanation: 'Policies allow changing API behavior through configuration (like rate limiting, XML to JSON conversion).',
            answers: [
                { content: 'Write app logic code', isCorrect: false },
                { content: 'Change API behavior (inbound/outbound) without modifying backend code', isCorrect: true },
                { content: 'Store database', isCorrect: false },
                { content: 'Manage DNS', isCorrect: false },
            ],
        },
        {
            content: 'When using Azure App Configuration, what does the "Feature Flags" feature allow you to do?',
            explanation: 'Allows flexibly enabling or disabling application features without redeploying code.',
            answers: [
                { content: 'Delete old code', isCorrect: false },
                { content: 'Remotely manage application feature toggles', isCorrect: true },
                { content: 'Encrypt connections', isCorrect: false },
                { content: 'Store user photos', isCorrect: false },
            ],
        },
        {
            content: 'You need to build a solution to parallel process thousands of high-performance computing (HPC) tasks. Which service is most suitable?',
            explanation: 'Azure Batch is designed to efficiently run large-scale batch computing tasks across virtual machine sets.',
            answers: [
                { content: 'Azure Functions', isCorrect: false },
                { content: 'Azure Batch', isCorrect: true },
                { content: 'Azure Logic Apps', isCorrect: false },
                { content: 'App Service', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service provides file storage (File share) that applications can mount via SMB or NFS protocols?',
            explanation: 'Azure Files provides fully managed file shares in the cloud.',
            answers: [
                { content: 'Blob Storage', isCorrect: false },
                { content: 'Azure Files', isCorrect: true },
                { content: 'Table Storage', isCorrect: false },
                { content: 'Cosmos DB', isCorrect: false },
            ],
        },
        {
            content: 'In Azure AD, which entity represents an application so it can be granted access to resources?',
            explanation: 'A Service Principal is the application\'s "identity" in Azure AD, allowing it to authenticate and be authorized.',
            answers: [
                { content: 'User Account', isCorrect: false },
                { content: 'Service Principal', isCorrect: true },
                { content: 'Security Group', isCorrect: false },
                { content: 'Resource Group', isCorrect: false },
            ],
        },
        {
            content: 'You label an Azure Function as "Cold Start". When does this occur?',
            explanation: 'A cold start occurs when a function is triggered after a period of inactivity, and Azure must re-initialize the container hosting that function\'s code.',
            answers: [
                { content: 'When code is buggy', isCorrect: false },
                { content: 'When a function starts after an idle period', isCorrect: true },
                { content: 'When using a Premium plan', isCorrect: false },
                { content: 'When internet is slow', isCorrect: false },
            ],
        },
        {
            content: 'To reduce "Cold Start" in Azure Functions, which Plan should you use?',
            explanation: 'A Premium or Dedicated (App Service Plan) keeps instances "warm" (ready).',
            answers: [
                { content: 'Consumption Plan', isCorrect: false },
                { content: 'Premium Plan (or Dedicated)', isCorrect: true },
                { content: 'Basic Plan', isCorrect: false },
                { content: 'Free Plan', isCorrect: false },
            ],
        },
        {
            content: 'Which class in the Azure Storage SDK is used to upload a large file to a Blob using automatic chunking?',
            explanation: 'In SDK v12, `BlobClient` supports the `UploadAsync` method which can automatically handle large file uploads.',
            answers: [
                { content: 'CloudBlob', isCorrect: false },
                { content: 'BlobClient', isCorrect: true },
                { content: 'StorageUploader', isCorrect: false },
                { content: 'ChunkManager', isCorrect: false },
            ],
        },
        {
            content: 'Why do you configure CORS (Cross-Origin Resource Sharing) for a Storage Account?',
            explanation: 'To allow web applications running on another domain to directly call the Storage Account\'s API.',
            answers: [
                { content: 'Data encryption', isCorrect: false },
                { content: 'Allow access from other domains on the browser', isCorrect: true },
                { content: 'Speed up download', isCorrect: false },
                { content: 'Reduce bandwidth cost', isCorrect: false },
            ],
        },
        {
            content: 'When working with Cosmos DB, which consistency level ensures users always see the latest data but at the cost of high latency and low throughput?',
            explanation: 'Strong Consistency ensures absolute consistency between replicas.',
            answers: [
                { content: 'Eventual', isCorrect: false },
                { content: 'Strong', isCorrect: true },
                { content: 'Session', isCorrect: false },
                { content: 'Bounded Staleness', isCorrect: false },
            ],
        },
        {
            content: 'Which type of Access Token is used so your application can call the Microsoft Graph API on behalf of a logged-in user?',
            explanation: 'Azure AD JWT (JSON Web Token) is used to authenticate and authorize applications.',
            answers: [
                { content: 'SAML token', isCorrect: false },
                { content: 'OAuth 2.0 Access Token (JWT)', isCorrect: true },
                { content: 'Shared Access Key', isCorrect: false },
                { content: 'SSH Key', isCorrect: false },
            ],
        },
        {
            content: 'In Application Insights, what value does the "Live Metrics Stream" tool provide?',
            explanation: 'It displays performance metrics (CPU, request rate, exceptions) almost instantaneously (latency < 1 second).',
            answers: [
                { content: 'Monthly cost report', isCorrect: false },
                { content: 'Monitor application activity in real-time', isCorrect: true },
                { content: 'Store old logs', isCorrect: false },
                { content: 'Automatically fix code errors', isCorrect: false },
            ],
        },
        {
            content: 'What is the "Content Trust" feature in Azure Container Registry (ACR) used for?',
            explanation: 'It allows you to use digital signatures to ensure the integrity and origin of container images.',
            answers: [
                { content: 'Compress container image', isCorrect: false },
                { content: 'Verify image signatures and origin', isCorrect: true },
                { content: 'Automatic virus scanning', isCorrect: false },
                { content: 'Convert Docker to Kubernetes', isCorrect: false },
            ],
        },
        {
            content: 'To allow Azure Logic Apps to access on-premises company data, which component do you need to install?',
            explanation: 'An On-premises Data Gateway is a secure bridge allowing cloud services to access internal data.',
            answers: [
                { content: 'VPN Gateway', isCorrect: false },
                { content: 'On-premises Data Gateway', isCorrect: true },
                { content: 'ExpressRoute', isCorrect: false },
                { content: 'Azure Bastion', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Service Bus, what is the difference between a Queue and a Topic?',
            explanation: 'A Queue is for a 1-to-1 model, whereas a Topic is for a 1-to-many model (Publish/Subscribe).',
            answers: [
                { content: 'Queue is faster than Topic', isCorrect: false },
                { content: 'Queue allows 1 receiver, Topic allows multiple subscribers', isCorrect: true },
                { content: 'Topic is for email only', isCorrect: false },
                { content: 'Queue doesn\'t support transactions', isCorrect: false },
            ],
        },
        {
            content: 'You use Docker to package an application. To push this image to Azure Container Registry, what command do you need to run (after logging in)?',
            explanation: 'The command `docker push <registry-name>.azurecr.io/<image-name>:<tag>` is used to upload the image.',
            answers: [
                { content: 'docker pull', isCorrect: false },
                { content: 'docker push', isCorrect: true },
                { content: 'docker save', isCorrect: false },
                { content: 'docker run', isCorrect: false },
            ],
        },
        {
            content: 'What is the Microsoft Graph API?',
            explanation: 'It is a single gateway API to access data and services across Microsoft clouds (Office 365, Windows, Azure AD).',
            answers: [
                { content: 'A graphing tool', isCorrect: false },
                { content: 'A unified API to access data in the Microsoft 365 ecosystem', isCorrect: true },
                { content: 'A graph database', isCorrect: false },
                { content: 'Chat software', isCorrect: false },
            ],
        },
        {
            content: 'When encountering a "429 Too Many Requests" error from an Azure service, what strategy should you implement in your code?',
            explanation: 'An "Exponential Backoff" strategy (retrying after increasing time intervals) is the best way to handle throttling.',
            answers: [
                { content: 'Retry immediately and continuously', isCorrect: false },
                { content: 'Use Exponential Backoff and retry', isCorrect: true },
                { content: 'Delete the app and reinstall', isCorrect: false },
                { content: 'Buy more service plans immediately', isCorrect: false },
            ],
        },
        {
            content: 'What is the Azure Search service used for?',
            explanation: 'Azure AI Search provides full-text search capabilities and AI for extracting information from raw data.',
            answers: [
                { content: 'Search on Google', isCorrect: false },
                { content: 'Provide advanced search features and AI for applications', isCorrect: true },
                { content: 'Search for files on a computer', isCorrect: false },
                { content: 'Password management', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Redis Cache, what does the "TTL" (Time To Live) parameter determine for a Key?',
            explanation: 'It determines how long a key exists in the cache before being automatically deleted.',
            answers: [
                { content: 'Data size', isCorrect: false },
                { content: 'Data expiration time in the cache', isCorrect: true },
                { content: 'Security level', isCorrect: false },
                { content: 'Maximum number of accesses', isCorrect: false },
            ],
        },
        {
            content: 'To deploy an Azure Functions function without paying when the function is not running, which plan should you use?',
            explanation: 'A Consumption Plan charges based on executions and resources used; if it doesn\'t run, there is no cost (except for storage).',
            answers: [
                { content: 'Premium Plan', isCorrect: false },
                { content: 'Consumption Plan', isCorrect: true },
                { content: 'Dedicated Plan', isCorrect: false },
                { content: 'Basic Plan', isCorrect: false },
            ],
        },
        {
            content: 'How does Azure CDN (Content Delivery Network) help frontend developers?',
            explanation: 'It stores static files (JS, CSS, images) at locations near users to reduce latency and speed up page loads.',
            answers: [
                { content: 'Compile JavaScript code', isCorrect: false },
                { content: 'Accelerate global static content distribution', isCorrect: true },
                { content: 'Store database', isCorrect: false },
                { content: 'Check code errors', isCorrect: false },
            ],
        },
        {
            content: 'Which account types does the Microsoft identity platform (v2.0) support?',
            explanation: 'It supports organizational accounts (Azure AD) and personal Microsoft accounts (Outlook.com, Live.com, Xbox).',
            answers: [
                { content: 'Azure AD only', isCorrect: false },
                { content: 'Both work/school and personal Microsoft accounts (MSA)', isCorrect: true },
                { content: 'Google accounts only', isCorrect: false },
                { content: 'Local Windows accounts only', isCorrect: false },
            ],
        },
        {
            content: 'In Azure App Service, how does "Web SSH" help in debugging?',
            explanation: 'It opens a command-line session (SSH) directly in the browser to the container running your application.',
            answers: [
                { content: 'Speed up internet', isCorrect: false },
                { content: 'Command-line access to the application\'s runtime environment', isCorrect: true },
                { content: 'Secure passwords', isCorrect: false },
                { content: 'Change web interface', isCorrect: false },
            ],
        },
        {
            content: 'Which of the following "Secret" types does Azure Key Vault support?',
            explanation: 'It can store any text information under 25KB, commonly passwords and connection strings.',
            answers: [
                { content: '4K video files', isCorrect: false },
                { content: 'Short text strings like passwords or API keys', isCorrect: true },
                { content: 'Entire application source code', isCorrect: false },
                { content: 'Large-scale customer personal data', isCorrect: false },
            ],
        },
        {
            content: 'You are programming a Logic App. What is a "Trigger"?',
            explanation: 'A Trigger is the starting point for a Logic App; it initiates the process based on a specific event (e.g., new email or schedule).',
            answers: [
                { content: 'An action within a processing step', isCorrect: false },
                { content: 'Event starting a workflow', isCorrect: true },
                { content: 'The last run', isCorrect: false },
                { content: 'Error in the app', isCorrect: false },
            ],
        },
        {
            content: 'Which tool allows you to simulate Azure Storage connections locally on your computer for application development without internet?',
            explanation: 'Azurite is Microsoft\'s open-source emulator for Azure Blob, Queue, and Table Storage.',
            answers: [
                { content: 'Azure Portal', isCorrect: false },
                { content: 'Azurite', isCorrect: true },
                { content: 'Storage Explorer', isCorrect: false },
                { content: 'Postman', isCorrect: false },
            ],
        },
        {
            content: 'When using Azure Cosmos DB with .NET, which class is the main starting point for data operations?',
            explanation: '`CosmosClient` is the root class used to communicate with the Cosmos DB service in SDK v3.',
            answers: [
                { content: 'DocumentClient', isCorrect: false },
                { content: 'CosmosClient', isCorrect: true },
                { content: 'DatabaseConnection', isCorrect: false },
                { content: 'RecordSet', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Service Bus, what is the "Dead-letter queue" feature used for?',
            explanation: 'To store messages that cannot be processed successfully or have expired so an Admin can inspect them later.',
            answers: [
                { content: 'Delete old messages', isCorrect: false },
                { content: 'Store failed or undeliverable messages', isCorrect: true },
                { content: 'Speed up sending', isCorrect: false },
                { content: 'Encrypt messages', isCorrect: false },
            ],
        },
        {
            content: 'Azure Front Door supports the "SSL Offloading" (or Termination) feature. How does this help the backend server?',
            explanation: 'Front Door handles HTTPS decryption, relieving the backend server of encryption compute burden and allowing it to run faster with HTTP traffic.',
            answers: [
                { content: 'Automatically create SSL certificates', isCorrect: false },
                { content: 'Decrypt HTTPS traffic at the Edge to reduce backend load', isCorrect: true },
                { content: 'Block internet viruses', isCorrect: false },
                { content: 'Store database', isCorrect: false },
            ],
        },
        {
            content: 'You assign a Managed Identity permission to access a specific resource. Where do you perform this assignment?',
            explanation: 'Use Azure RBAC (Access Control - IAM) at the target resource and select the Managed Identity as the recipient.',
            answers: [
                { content: 'In application code', isCorrect: false },
                { content: 'In the IAM section of the target resource', isCorrect: true },
                { content: 'In Billing', isCorrect: false },
                { content: 'In computer BIOS', isCorrect: false },
            ],
        },
        {
            content: 'For what purpose does Durable Functions use the "Fan-out/fan-in" pattern?',
            explanation: 'To execute multiple functions in parallel (fan-out) and then aggregate the results (fan-in) in an orderly manner.',
            answers: [
                { content: 'To cool down servers', isCorrect: false },
                { content: 'Execute multiple tasks in parallel and aggregate results', isCorrect: true },
                { content: 'Block hackers', isCorrect: false },
                { content: 'Send spam messages', isCorrect: false },
            ],
        },
        {
            content: 'When encountering a "403 Forbidden" error calling the Blob Storage API with a SAS token, what is the most common cause?',
            explanation: 'The SAS token has expired (Expiration time), or your IP is not in the allowed range, or it lacks the necessary permissions.',
            answers: [
                { content: 'Broken server', isCorrect: false },
                { content: 'SAS token expired or misconfigured permissions/IP', isCorrect: true },
                { content: 'Wrong wifi password', isCorrect: false },
                { content: 'Browser too old', isCorrect: false },
            ],
        },
        {
            content: 'Azure App Configuration supports "Point-in-time restore". What does this allow you to do?',
            explanation: 'Allows restoring the entire application configuration set (settings) to a specific point in the past.',
            answers: [
                { content: 'Auto-fix code', isCorrect: false },
                { content: 'Restore configurations to an old state', isCorrect: true },
                { content: 'Speed up web', isCorrect: false },
                { content: 'Backup SQL database', isCorrect: false },
            ],
        },
        {
            content: 'In Application Insights, what does "Telemetry" mean?',
            explanation: 'It is data collected from the application (logs, metrics, exceptions, dependencies) for monitoring.',
            answers: [
                { content: 'Remote control system', isCorrect: false },
                { content: 'Monitoring data collected from the application', isCorrect: true },
                { content: 'A server type name', isCorrect: false },
                { content: 'New programming language', isCorrect: false },
            ],
        },
        {
            content: 'To allow users to log in to your web application using Facebook or Google accounts, which service should you use?',
            explanation: 'Azure AD B2C (Business-to-Consumer) is a customer identity management solution integrating third-party providers.',
            answers: [
                { content: 'Standard Azure AD', isCorrect: false },
                { content: 'Azure AD B2C', isCorrect: true },
                { content: 'Azure AD Domain Services', isCorrect: false },
                { content: 'Managed Identities', isCorrect: false },
            ],
        },
        {
            content: 'What do Azure Monitor "Availability Tests" (URL ping tests) help you do?',
            explanation: 'They periodically send requests to your URL from multiple global locations to check if the website is up and responding.',
            answers: [
                { content: 'Check typing speed', isCorrect: false },
                { content: 'Check if the website is online and responding correctly', isCorrect: true },
                { content: 'Scan website for viruses', isCorrect: false },
                { content: 'Auto SEO', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Kubernetes Service (AKS), what factor does the "Horizontal Pod Autoscaler" use to scale pods?',
            explanation: 'By default, it uses the CPU consumption of the existing pods.',
            answers: [
                { content: 'Time of day', isCorrect: false },
                { content: 'Resource consumption such as CPU or RAM', isCorrect: true },
                { content: 'Number of users chatting', isCorrect: false },
                { content: 'Log file size', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Service Bus, how does the "PeekLock" method differ from "ReceiveAndDelete"?',
            explanation: 'PeekLock reads the message but keeps it (locked) until the application confirms successful processing (Complete), ensuring no message loss if the app crashes.',
            answers: [
                { content: 'ReceiveAndDelete is safer', isCorrect: false },
                { content: 'PeekLock ensures at-least-once processing', isCorrect: true },
                { content: 'PeekLock is for large files only', isCorrect: false },
                { content: 'They are the same', isCorrect: false },
            ],
        },
        {
            content: 'Who is the "Developer Portal" in Azure API Management for?',
            explanation: 'For developers who want to learn about, document, and test the APIs you provide.',
            answers: [
                { content: 'Board of directors', isCorrect: false },
                { content: 'Developers using the API', isCorrect: true },
                { content: 'Hackers', isCorrect: false },
                { content: 'Accountants', isCorrect: false },
            ],
        },
    ],
};
