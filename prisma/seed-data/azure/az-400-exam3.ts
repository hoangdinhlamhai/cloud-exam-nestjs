export const az400Exam3 = {
    title: 'Azure DevOps Engineer Expert AZ-400 - Practice Test 3',
    description: 'Azure DevOps Engineer Expert AZ-400 Practice Test focusing on Monitoring, SRE, and Feedback loops.',
    durationMinutes: 120,
    courseId: 11,
    questions: [
        {
            content: 'You are implementing Site Reliability Engineering (SRE) principles. You want to define a goal for the reliability of your application. Which term should you use?',
            explanation: 'Service Level Objectives (SLOs) are target goals for service reliability.',
            answers: [
                { content: 'SLI', isCorrect: false },
                { content: 'SLO', isCorrect: true },
                { content: 'SLA', isCorrect: false },
                { content: 'Error Budget', isCorrect: false },
            ],
        },
        {
            content: 'Your company needs to monitor the user experience and identify bottlenecks in the application\'s frontend. Which Azure service should you use?',
            explanation: 'Application Insights and its frontend monitoring capabilities allow teams to track user interactions and performance.',
            answers: [
                { content: 'Azure Monitor', isCorrect: false },
                { content: 'Application Insights', isCorrect: true },
                { content: 'Azure Log Analytics', isCorrect: false },
                { content: 'Azure Advisor', isCorrect: false },
            ],
        },
        {
            content: 'You are designing a feedback loop for your development team. You want to ensure that they are notified of production errors as soon as they occur. Which service should you use?',
            explanation: 'Azure Monitor and Application Insights can be configured to send alerts to external notification systems.',
            answers: [
                { content: 'Azure Boards', isCorrect: false },
                { content: 'Azure Monitor Alerts', isCorrect: true },
                { content: 'Azure Service Health', isCorrect: false },
                { content: 'Azure Advisor', isCorrect: false },
            ],
        },
        {
            content: 'Your organization needs to implement a solution for analyzing and visualizing logs from multiple sources. Which Azure service should you recommend?',
            explanation: 'Azure Log Analytics and Azure Monitor provide a platform for log analysis and visualization.',
            answers: [
                { content: 'Azure Storage', isCorrect: false },
                { content: 'Azure Log Analytics', isCorrect: true },
                { content: 'Azure Event Hubs', isCorrect: false },
                { content: 'Azure SQL Database', isCorrect: false },
            ],
        },
        {
            content: 'You are using Azure Boards to track your user feedback. You want to ensure that the feedback is prioritized and addressed in the development process. Which component should you use?',
            explanation: 'Backlogs and prioritization tools in Azure Boards allow teams to manage and address feedback.',
            answers: [
                { content: 'Boards', isCorrect: false },
                { content: 'Backlogs', isCorrect: true },
                { content: 'Sprints', isCorrect: false },
                { content: 'Queries', isCorrect: false },
            ],
        },
        {
            content: 'Your company wants to implement a solution for automating the response to production incidents. Which Azure DevOps feature should you recommend?',
            explanation: 'Integration with incident management tools and automated triggers in Azure Pipelines can be used to respond to incidents.',
            answers: [
                { content: 'Azure Boards', isCorrect: false },
                { content: 'Automated remediation', isCorrect: true },
                { content: 'Azure Repos', isCorrect: false },
                { content: 'Azure Test Plans', isCorrect: false },
            ],
        },
        {
            content: 'You are implementing a strategy for managing technical debt. Which metric should you use to track the quality of your code?',
            explanation: 'Code coverage and static analysis metrics help track code quality and technical debt.',
            answers: [
                { content: 'Deployment frequency', isCorrect: false },
                { content: 'Code coverage', isCorrect: true },
                { content: 'Change fail rate', isCorrect: false },
                { content: 'Mean time to recovery (MTTR)', isCorrect: false },
            ],
        },
        {
            content: 'Your organization needs to implement a solution for managing and tracking its service health across multiple regions. Which Azure service should you recommend?',
            explanation: 'Azure Service Health provides personalised information about the health of Azure services.',
            answers: [
                { content: 'Azure monitor', isCorrect: false },
                { content: 'Azure Service Health', isCorrect: true },
                { content: 'Azure Advisor', isCorrect: false },
                { content: 'Azure Security Center', isCorrect: false },
            ],
        },
        {
            content: 'You are using Azure Monitor to track the performance of your infrastructure. You want to identify used resources that can be scaled down to save costs. Which component should you use?',
            explanation: 'Azure Advisor and Azure Monitor insights provide recommendations for optimizing resource usage.',
            answers: [
                { content: 'Log Analytics', isCorrect: false },
                { content: 'Azure Advisor', isCorrect: true },
                { content: 'Activity Log', isCorrect: false },
                { content: 'Metrics Explorer', isCorrect: false },
            ],
        },
        {
            content: 'Which SRE principle focuses on the relationship between reliability and innovation?',
            explanation: 'Error budgets provide a framework for balancing reliability and innovation.',
            answers: [
                { content: 'Monitoring', isCorrect: false },
                { content: 'Error budgets', isCorrect: true },
                { content: 'Automation', isCorrect: false },
                { content: 'Capacity planning', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service would you use to store and analyze large volumes of metrics data from your applications?',
            explanation: 'Azure Monitor Metrics and Azure Log Analytics provide platforms for storing and analyzing metrics.',
            answers: [
                { content: 'Azure Storage', isCorrect: false },
                { content: 'Azure Monitor Metrics', isCorrect: true },
                { content: 'Azure SQL Database', isCorrect: false },
                { content: 'Azure Cosmos DB', isCorrect: false },
            ],
        },
        {
            content: 'Your company is implementing a culture of continuous improvement. Which practice should you follow after a major production incident?',
            explanation: 'Post-mortem analyses (Post-incident reviews) are a key practice for learning from incidents and driving improvement.',
            answers: [
                { content: 'Blaming individuals', isCorrect: false },
                { content: 'Post-mortem analysis', isCorrect: true },
                { content: 'Ignoring the incident', isCorrect: false },
                { content: 'Cancelling deployments', isCorrect: false },
            ],
        },
        {
            content: 'Which metric measures the average time it takes to restore service after an incident?',
            explanation: 'Mean Time to Recovery (MTTR) is a key metric for measuring incident response effectiveness.',
            answers: [
                { content: 'Mean time to failure (MTTF)', isCorrect: false },
                { content: 'Mean time to recovery (MTTR)', isCorrect: true },
                { content: 'Mean time between failures (MTBF)', isCorrect: false },
                { content: 'Lead time', isCorrect: false },
            ],
        },
        {
            content: 'Your organisation needs to implement a solution for tracking user behavior and identifying areas for improvement in the application interface. Which tool of Application Insights should you use?',
            explanation: 'User Flows and Funnels allow teams to track and analyze user behavior in an application.',
            answers: [
                { content: 'Live Metrics', isCorrect: false },
                { content: 'User Flows', isCorrect: true },
                { content: 'Transaction Search', isCorrect: false },
                { content: 'Smart Detection', isCorrect: false },
            ],
        },
        {
            content: 'Which SRE practice involves automating repetitive and manual tasks to reduce operational burden?',
            explanation: 'Toil reduction through automation is a core tenet of SRE.',
            answers: [
                { content: 'Incident management', isCorrect: false },
                { content: 'Toil reduction', isCorrect: true },
                { content: 'Capacity planning', isCorrect: false },
                { content: 'Observability', isCorrect: false },
            ],
        },
        {
            content: 'You are designing a monitoring solution for a distributed application. You want to track a request as it flows through multiple services. Which technique should you use?',
            explanation: 'Distributed tracing allows for tracking and visualizing requests in a microservices architecture.',
            answers: [
                { content: 'Log aggregation', isCorrect: false },
                { content: 'Distributed tracing', isCorrect: true },
                { content: 'Metric monitoring', isCorrect: false },
                { content: 'Health checks', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service provides a set of tools for creating and managing dashboards to visualize your application and infrastructure data?',
            explanation: 'Azure Dashboards provide a platform for creating custom visualizations.',
            answers: [
                { content: 'Azure Monitor', isCorrect: false },
                { content: 'Azure Dashboards', isCorrect: true },
                { content: 'Azure Security Center', isCorrect: false },
                { content: 'Azure Policy', isCorrect: false },
            ],
        },
        {
            content: 'Your company wants to implement a solution for proactively identifying potential issues in its Azure environment before they impact users. Which service should you recommend?',
            explanation: 'Azure Advisor and Application Insights Smart Detection can proactively identify potential issues.',
            answers: [
                { content: 'Azure Service Health', isCorrect: false },
                { content: 'Smart Detection', isCorrect: true },
                { content: 'Activity Log', isCorrect: false },
                { content: 'Resource health', isCorrect: false },
            ],
        },
        {
            content: 'Which metric measures the percentage of deployments that result in a failure in production?',
            explanation: 'Change fail rate is a key metric for measuring the quality of the release process.',
            answers: [
                { content: 'Deployment frequency', isCorrect: false },
                { content: 'Change fail rate', isCorrect: true },
                { content: 'Lead time for changes', isCorrect: false },
                { content: 'MTTR', isCorrect: false },
            ],
        },
        {
            content: 'Your organization needs to implement a solution for managing and tracking its compliance with security standards across multiple Azure subscriptions. Which service should you recommend?',
            explanation: 'Microsoft Defender for Cloud (formerly Azure Security Center) provides a compliance dashboard.',
            answers: [
                { content: 'Azure Policy', isCorrect: false },
                { content: 'Microsoft Defender for Cloud', isCorrect: true },
                { content: 'Azure Monitor', isCorrect: false },
                { content: 'Azure Advisor', isCorrect: false },
            ],
        },
        {
            content: 'Which SRE principle focuses on having a deep understanding of the system\'s internal state and behavior?',
            explanation: 'Observability is the ability to understand a system\'s internal state based on its external outputs (logs, metrics, traces).',
            answers: [
                { content: 'Availability', isCorrect: false },
                { content: 'Observability', isCorrect: true },
                { content: 'Scalability', isCorrect: false },
                { content: 'Resilience', isCorrect: false },
            ],
        },
        {
            content: 'You are using Application Insights to monitor your application. You want to identify the most common causes of failures in your application. Which feature should you use?',
            explanation: 'Failures blade in Application Insights provides insights into the most common exceptions and failures.',
            answers: [
                { content: 'Performance', isCorrect: false },
                { content: 'Failures', isCorrect: true },
                { content: 'Availability', isCorrect: false },
                { content: 'Usage', isCorrect: false },
            ],
        },
        {
            content: 'Which metric measures the time it takes from a code change being committed to it being deployed to production?',
            explanation: 'Lead time for changes is a key metric for measuring the efficiency of the CI/CD pipeline.',
            answers: [
                { content: 'Deployment frequency', isCorrect: false },
                { content: 'Lead time for changes', isCorrect: true },
                { content: 'Change fail rate', isCorrect: false },
                { content: 'MTTR', isCorrect: false },
            ],
        },
        {
            content: 'Your organisation needs to implement a solution for capturing and analyzing user sentiment from social media and integration it into the development process. Which service should you recommend?',
            explanation: 'Azure Cognitive Services (Language) and integration with external tools can be used for sentiment analysis.',
            answers: [
                { content: 'Azure Machine Learning', isCorrect: false },
                { content: 'Azure AI Language', isCorrect: true },
                { content: 'Azure Data Factory', isCorrect: false },
                { content: 'Azure Stream Analytics', isCorrect: false },
            ],
        },
        {
            content: 'Which SRE practice involves defining a set of tasks to be performed when a service reaches its capacity limits?',
            explanation: 'Capacity planning and load testing are key practices for managing system capacity.',
            answers: [
                { content: 'Incident management', isCorrect: false },
                { content: 'Capacity planning', isCorrect: true },
                { content: 'Toil reduction', isCorrect: false },
                { content: 'Observability', isCorrect: false },
            ],
        },
        {
            content: 'You are using Log Analytics to analyze your application logs. Which language should you use to write queries for analyzing the logs?',
            explanation: 'Kusto Query Language (KQL) is used for querying logs in Azure Log Analytics.',
            answers: [
                { content: 'SQL', isCorrect: false },
                { content: 'Kusto Query Language (KQL)', isCorrect: true },
                { content: 'Python', isCorrect: false },
                { content: 'PowerShell', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service provides a set of tools for managing your cloud infrastructure as code and ensuring consistent configuration?',
            explanation: 'Azure Bicep and Azure Resource Manager (ARM) templates provide IaC capabilities.',
            answers: [
                { content: 'Azure Automation', isCorrect: false },
                { content: 'Azure Bicep / ARM Templates', isCorrect: true },
                { content: 'Azure Advisor', isCorrect: false },
                { content: 'Azure Policy', isCorrect: false },
            ],
        },
        {
            content: 'Your company wants to implement a culture of shared responsibility for service reliability. Which practice should you follow?',
            explanation: 'Involving both development and operations teams in the incident response and post-mortem process promotes shared responsibility.',
            answers: [
                { content: 'Developing in silos', isCorrect: false },
                { content: 'Shared ownership of SLO lines', isCorrect: true },
                { content: 'Manual scaling', isCorrect: false },
                { content: 'Ignoring metrics', isCorrect: false },
            ],
        },
        {
            content: 'Which metric measures how often a team successfully deploys changes to production?',
            explanation: 'Deployment frequency is a key metric for measuring the speed of the release process.',
            answers: [
                { content: 'Deployment frequency', isCorrect: true },
                { content: 'Lead time', isCorrect: false },
                { content: 'Change fail rate', isCorrect: false },
                { content: 'MTTR', isCorrect: false },
            ],
        },
        {
            content: 'Your organization needs to implement a solution for tracking its progress towards its business goals and visualizing data in real-time. Which tool should you use?',
            explanation: 'Azure Dashboards and integration with Power BI provide real-time data visualization.',
            answers: [
                { content: 'Azure Monitor', isCorrect: false },
                { content: 'Power BI', isCorrect: true },
                { content: 'Log Analytics', isCorrect: false },
                { content: 'App Insights', isCorrect: false },
            ],
        },
        {
            content: 'In SRE, what is an "Error Budget"?',
            explanation: 'The maximum amount of time a technical service can fail or be unreliable within a given period before user satisfaction is impacted.',
            answers: [
                { content: 'Money for buying hard drives', isCorrect: false },
                { content: 'Allowable threshold for system unreliability to balance innovation and stability', isCorrect: true },
                { content: 'Project plan for the next year', isCorrect: false },
                { content: 'A list of bugs', isCorrect: false },
            ],
        },
        {
            content: 'To automatically collect Log data from a Linux Virtual Machine and send it to Azure Monitor, which tool must you install?',
            explanation: 'The Azure Monitor Agent (AMA) is the modern tool for collecting logs from both Windows and Linux VMs.',
            answers: [
                { content: 'Docker', isCorrect: false },
                { content: 'Azure Monitor Agent (AMA)', isCorrect: true },
                { content: 'Nginx', isCorrect: false },
                { content: 'SSH', isCorrect: false },
            ],
        },
        {
            content: 'How does "Chaos Engineering" help improve system reliability?',
            explanation: 'By proactively injecting faults into the system to discover and fix weaknesses before real outages occur.',
            answers: [
                { content: 'To delete old code', isCorrect: false },
                { content: 'Injecting controlled faults to identify and improve system resilience', isCorrect: true },
                { content: 'To test developer passwords', isCorrect: false },
                { content: 'To make the network faster', isCorrect: false },
            ],
        },
        {
            content: 'Which Application Insights feature allows you to see the correlation between Page Load Time and User Retention?',
            explanation: 'The "Retention" and "Cohorts" features help analyze user engagement over time relative to their experience.',
            answers: [
                { content: 'Smart Detection', isCorrect: false },
                { content: 'Retention analysis', isCorrect: true },
                { content: 'Live Metrics', isCorrect: false },
                { content: 'Logs Query', isCorrect: false },
            ],
        },
        {
            content: 'In a "Blameless Post-mortem", what is the most important thing to analyze?',
            explanation: 'Systematic/process failures that allowed the error to happen, rather than focusing on the person who made the mistake.',
            answers: [
                { content: 'Who made the mistake', isCorrect: false },
                { content: 'The system and process causes that led to the incident', isCorrect: true },
                { content: 'The time of day', isCorrect: false },
                { content: 'Cost of the failure', isCorrect: false },
            ],
        },
        {
            content: 'To receive a Microsoft Teams notification whenever the application\'s CPU exceeds 90%, what do you use in Azure Monitor?',
            explanation: 'An Alert Rule combined with an "Action Group" that has a Webhook or Teams integration.',
            answers: [
                { content: 'Resource Lock', isCorrect: false },
                { content: 'Alert Rule with Action Group', isCorrect: true },
                { content: 'Activity Log', isCorrect: false },
                { content: 'Azure Policy', isCorrect: false },
            ],
        },
        {
            content: 'What is "Toil" in the SRE model?',
            explanation: 'Manual, repetitive, automatable work that has no long-term value and increases as the service grows.',
            answers: [
                { content: 'Creative work', isCorrect: false },
                { content: 'Manual, repetitive, and low-value operational work', isCorrect: true },
                { content: 'Writing code for new features', isCorrect: false },
                { content: 'Drinking coffee', isCorrect: false },
            ],
        },
        {
            content: 'Which service helps you check if your Azure resources comply with the ISO 27001 standard?',
            explanation: 'Microsoft Defender for Cloud (Regulatory Compliance) tracks resources against various security standards.',
            answers: [
                { content: 'Azure Boards', isCorrect: false },
                { content: 'Microsoft Defender for Cloud (Compliance Dashboard)', isCorrect: true },
                { content: 'Azure Monitor', isCorrect: false },
                { content: 'Activity Log', isCorrect: false },
            ],
        },
        {
            content: 'What is the "Golden Signals" of monitoring in SRE?',
            explanation: 'Latency, Traffic, Errors, and Saturation.',
            answers: [
                { content: 'CPU, RAM, Disk, Network', isCorrect: false },
                { content: 'Latency, Traffic, Errors, and Saturation', isCorrect: true },
                { content: 'Cost, Time, Quality, Scope', isCorrect: false },
                { content: 'Username, Password, IP, Port', isCorrect: false },
            ],
        },
        {
            content: 'To analyze why the login process is slow specifically for users in Singapore, which Application Insights filter do you use?',
            explanation: 'Filter/Group by "Location" (City/Country) in the Performance or Users menu.',
            answers: [
                { content: 'Filter by OS', isCorrect: false },
                { content: 'Filter/Breakdown by Geographic Location', isCorrect: true },
                { content: 'Filter by Browser', isCorrect: false },
                { content: 'Filter by CPU usage', isCorrect: false },
            ],
        },
        {
            content: 'Why is "Synthetic Monitoring" important?',
            explanation: 'Allows testing critical user paths (like login/checkout) periodically even when there is no real user traffic.',
            answers: [
                { content: 'To make logs prettier', isCorrect: false },
                { content: 'Simulating user behavior to proactively monitor availability and performance', isCorrect: true },
                { content: 'To scan for viruses', isCorrect: false },
                { content: 'To reduce costs', isCorrect: false },
            ],
        },
        {
            content: 'In SRE, when has a service reached its "Saturation"?',
            explanation: 'When a critical resource (CPU, Memory, IO) is nearly 100% utilized, preventing the system from handling more work.',
            answers: [
                { content: 'When there are too many users', isCorrect: false },
                { content: 'When system resources reach their maximum performance limit', isCorrect: true },
                { content: 'When the weekend begins', isCorrect: false },
                { content: 'When the database is empty', isCorrect: false },
            ],
        },
        {
            content: 'What is the main goal of "Full-stack Observability"?',
            explanation: 'Unified monitoring across all layers: from infrastructure, database, down to application code and user interface.',
            answers: [
                { content: 'To increase costs', isCorrect: false },
                { content: 'Connecting and visualizing the health of all layers in the application ecosystem', isCorrect: true },
                { content: 'To hide errors', isCorrect: false },
                { content: 'To replace developers', isCorrect: false },
            ],
        },
        {
            content: 'How does Log Analytics "Log Level" (Information, Warning, Error) help in troubleshooting?',
            explanation: 'Helps filter for critical events rapidly without getting lost in thousands of normal system messages.',
            answers: [
                { content: 'Enhances security', isCorrect: false },
                { content: 'Ability to prioritize and filter events based on their severity', isCorrect: true },
                { content: 'Makes logs smaller', isCorrect: false },
                { content: 'Reduces RAM usage', isCorrect: false },
            ],
        },
        {
            content: 'In DevOps, what is the value of an "Action Group"?',
            explanation: 'Defines a set of actions (email, SMS, runbook, logic app) that will be executed once an Alert is triggered.',
            answers: [
                { content: 'For people to chat', isCorrect: false },
                { content: 'Defining response actions when an alert event occurs', isCorrect: true },
                { content: 'For creating code documents', isCorrect: false },
                { content: 'For billing', isCorrect: false },
            ],
        },
    ],
};
