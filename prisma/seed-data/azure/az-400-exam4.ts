export const az400Exam4 = {
    title: 'Azure DevOps Engineer Expert AZ-400 - Practice Test 4',
    description: 'Azure DevOps Engineer Expert AZ-400 Final Practice Test. Comprehensive review for DevOps Engineers.',
    durationMinutes: 120,
    courseId: 11,
    questions: [
        {
            content: 'You are designing a CI/CD pipeline for a microservices architecture. You need to ensure that each service can be deployed independently without affecting others. Which strategy should you recommend?',
            explanation: 'Each microservice should have its own dedicated CI/CD pipeline to ensure independent deployment and minimize the blast radius of changes.',
            answers: [
                { content: 'Single shared pipeline for all services', isCorrect: false },
                { content: 'Separate pipelines for each microservice', isCorrect: true },
                { content: 'Manual deployment for all services', isCorrect: false },
                { content: 'Monolithic deployment strategy', isCorrect: false },
            ],
        },
        {
            content: 'Your company wants to implement a solution for managing and tracking its technical debt across multiple projects. Which Azure DevOps feature should you recommend?',
            explanation: 'Azure Boards can be used to track technical debt through specialized work items and custom queries/dashboards.',
            answers: [
                { content: 'Azure Repos', isCorrect: false },
                { content: 'Azure Boards', isCorrect: true },
                { content: 'Azure Pipelines', isCorrect: false },
                { content: 'Azure Artifacts', isCorrect: false },
            ],
        },
        {
            content: 'You are using Git for source control in Azure Repos. You want to ensure that all commits to the main branch are signed to verify the author\'s identity. Which feature should you use?',
            explanation: 'GPG signing can be used to sign commits and verify the identity of the author.',
            answers: [
                { content: 'Git hooks', isCorrect: false },
                { content: 'GPG signing', isCorrect: true },
                { content: 'Branch policies', isCorrect: false },
                { content: 'Commit messages', isCorrect: false },
            ],
        },
        {
            content: 'Your organization needs to implement a solution for managing its open-source dependencies and automatically updating them when new versions are available. Which tool should you use?',
            explanation: 'Dependabot (integrated with GitHub/Azure DevOps) can automatically identify and update open-source dependencies.',
            answers: [
                { content: 'Azure Artifacts', isCorrect: false },
                { content: 'Dependabot', isCorrect: true },
                { content: 'Azure Pipelines', isCorrect: false },
                { content: 'Azure Repos', isCorrect: false },
            ],
        },
        {
            content: 'You are designing a security solution for your CI/CD pipelines. You need to ensure that secrets are not accidentally committed to the source code repository. Which tool should you use?',
            explanation: 'Secret scanning tools can identify and prevent secrets from being committed to source control.',
            answers: [
                { content: 'Azure Key Vault', isCorrect: false },
                { content: 'Secret scanning', isCorrect: true },
                { content: 'Azure Policy', isCorrect: false },
                { content: 'Azure Monitor', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service would you use to store and manage your infrastructure configuration as code using Terraform?',
            explanation: 'Terraform state can be stored in Azure Blob Storage using a remote backend.',
            answers: [
                { content: 'Azure Files', isCorrect: false },
                { content: 'Azure Blob Storage', isCorrect: true },
                { content: 'Azure Key Vault', isCorrect: false },
                { content: 'Azure SQL Database', isCorrect: false },
            ],
        },
        {
            content: 'Your company wants to implement a solution for monitoring the health and performance of its containerized applications running on AKS. Which Azure service should you use?',
            explanation: 'Container insights in Azure Monitor provide monitoring capabilities for AKS.',
            answers: [
                { content: 'Azure Security Center', isCorrect: false },
                { content: 'Container insights', isCorrect: true },
                { content: 'Azure Advisor', isCorrect: false },
                { content: 'Azure Policy', isCorrect: false },
            ],
        },
        {
            content: 'You are implementing a strategy for managing release gates in your CD pipelines. You want to ensure that a release only proceeds if it doesn\'t exceed a certain error rate. Which feature should you use?',
            explanation: 'Azure Monitor gates can be used to verify the error rate of an application before proceeding with a release.',
            answers: [
                { content: 'Manual approval', isCorrect: false },
                { content: 'Azure Monitor gate', isCorrect: true },
                { content: 'Variable group check', isCorrect: false },
                { content: 'Task group validation', isCorrect: false },
            ],
        },
        {
            content: 'Which SRE practice involves defining the level of service availability that is acceptable to users?',
            explanation: 'Service Level Objectives (SLOs) define the target availability for a service.',
            answers: [
                { content: 'Monitoring', isCorrect: false },
                { content: 'SLOs', isCorrect: true },
                { content: 'Automation', isCorrect: false },
                { content: 'Incident management', isCorrect: false },
            ],
        },
        {
            content: 'Your company needs to implement a solution for capturing and analyzing logs from its on-premises servers and integrating them with Azure Monitor. Which tool should you use?',
            explanation: 'Azure Monitor Agent (AMA) can be used to collect logs from both on-premises and cloud-based servers.',
            answers: [
                { content: 'Azure Data Factory', isCorrect: false },
                { content: 'Azure Monitor Agent', isCorrect: true },
                { content: 'Azure Event Hubs', isCorrect: false },
                { content: 'Azure Logic Apps', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure DevOps service allows for the management and execution of automated security scans as part of your CI/CD pipelines?',
            explanation: 'Azure Pipelines can be integrated with various security scanning tools, such as SonarQube and Mend.',
            answers: [
                { content: 'Azure Repos', isCorrect: false },
                { content: 'Azure Pipelines', isCorrect: true },
                { content: 'Azure Artifacts', isCorrect: false },
                { content: 'Azure Boards', isCorrect: false },
            ],
        },
        {
            content: 'You are using Azure Boards to manage your development process. You want to visualize the workflow and identify bottlenecks. Which component should you use?',
            explanation: 'Kanban boards allow teams to visualize their workflow and identify bottlenecks.',
            answers: [
                { content: 'Backlogs', isCorrect: false },
                { content: 'Kanban boards', isCorrect: true },
                { content: 'Queries', isCorrect: false },
                { content: 'Sprints', isCorrect: false },
            ],
        },
        {
            content: 'Your organization needs to implement a solution for managing its internal documentation and sharing and collaborating on it. Which tool should you use?',
            explanation: 'Azure DevOps Wiki allows teams to create and share documentation.',
            answers: [
                { content: 'Azure Boards', isCorrect: false },
                { content: 'Wiki', isCorrect: true },
                { content: 'Azure Repos', isCorrect: false },
                { content: 'Azure Pipelines', isCorrect: false },
            ],
        },
        {
            content: 'Which metric measures the percentage of code that is covered by automated tests?',
            explanation: 'Code coverage is a key metric for measuring the effectiveness of testing.',
            answers: [
                { content: 'Deployment frequency', isCorrect: false },
                { content: 'Code coverage', isCorrect: true },
                { content: 'Change fail rate', isCorrect: false },
                { content: 'MTTR', isCorrect: false },
            ],
        },
        {
            content: 'You are designing a CI/CD pipeline for a legacy application. You need to automate the deployment to a Windows Server on-premises. Which component should you use?',
            explanation: 'Deployment groups and self-hosted agents can be used for on-premises deployments.',
            answers: [
                { content: 'Microsoft-hosted agents', isCorrect: false },
                { content: 'Deployment groups', isCorrect: true },
                { content: 'Azure Kubernetes Service', isCorrect: false },
                { content: 'Azure App Service', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service provides a set of tools for managing and monitoring your hybrid cloud environment?',
            explanation: 'Azure Arc and Azure Monitor provide capabilities for managing and monitoring hybrid cloud environments.',
            answers: [
                { content: 'Azure Security Center', isCorrect: false },
                { content: 'Azure Arc', isCorrect: true },
                { content: 'Azure Advisor', isCorrect: false },
                { content: 'Azure Policy', isCorrect: false },
            ],
        },
        {
            content: 'Your company wants to implement a solution for capturing and analyzing user feedback from its production application. Which feature of Application Insights should you use?',
            explanation: 'Usage analysis and user surveys can be used to capture user feedback.',
            answers: [
                { content: 'Failures', isCorrect: false },
                { content: 'Usage', isCorrect: true },
                { content: 'Performance', isCorrect: false },
                { content: 'Availability', isCorrect: false },
            ],
        },
        {
            content: 'Which SRE principle focuses on having a deep understanding of how a system behaves in production?',
            explanation: 'Observability is the ability to understand a system based on its outputs (logs, metrics, traces).',
            answers: [
                { content: 'Availability', isCorrect: false },
                { content: 'Observability', isCorrect: true },
                { content: 'Scalability', isCorrect: false },
                { content: 'Resilience', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service allows you to create and manage automated workflows that integrate with various security tools and platforms?',
            explanation: 'Azure Logic Apps can be used to create automated security response workflows.',
            answers: [
                { content: 'Azure Functions', isCorrect: false },
                { content: 'Azure Logic Apps', isCorrect: true },
                { content: 'Azure Data Factory', isCorrect: false },
                { content: 'Azure Stream Analytics', isCorrect: false },
            ],
        },
        {
            content: 'Your organization needs to implement a solution for managing its software licenses and ensuring compliance. Which Azure DevOps feature should you recommend?',
            explanation: 'Integration with licensing tools can be used to manage license compliance.',
            answers: [
                { content: 'Azure Repos', isCorrect: false },
                { content: 'License management extensions', isCorrect: true },
                { content: 'Azure Pipelines', isCorrect: false },
                { content: 'Azure Test Plans', isCorrect: false },
            ],
        },
        {
            content: 'Which metric measures the average time it takes for a team to respond to a production incident?',
            explanation: 'Mean Time to Acknowledge (MTTA) measures the average time to acknowledge an incident.',
            answers: [
                { content: 'Mean Time to Recovery (MTTR)', isCorrect: false },
                { content: 'Mean Time to Acknowledge (MTTA)', isCorrect: true },
                { content: 'Mean Time Between Failures (MTBF)', isCorrect: false },
                { content: 'Lead time', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service provides a platform for building, training, and deploying machine learning models at scale and integrating them with your DevOps processes?',
            explanation: 'Azure Machine Learning provides machine learning capabilities that can be integrated with CI/CD pipelines.',
            answers: [
                { content: 'Azure Cognitive Services', isCorrect: false },
                { content: 'Azure Machine Learning', isCorrect: true },
                { content: 'Azure Databricks', isCorrect: false },
                { content: 'Azure Synapse Analytics', isCorrect: false },
            ],
        },
        {
            content: 'You are using Azure Monitor to track the health of your application. You want to be notified when the number of failed requests exceeds a certain threshold. Which feature should you use?',
            explanation: 'Alert rules in Azure Monitor can be used to send notifications based on metric thresholds.',
            answers: [
                { content: 'Activity Log', isCorrect: false },
                { content: 'Alert rules', isCorrect: true },
                { content: 'Metrics explorer', isCorrect: false },
                { content: 'Log analytics', isCorrect: false },
            ],
        },
        {
            content: 'Which SRE practice involves running controlled experiments in production to identify system weaknesses?',
            explanation: 'Chaos engineering involves injecting faults into production systems to test and improve resilience.',
            answers: [
                { content: 'Incident management', isCorrect: false },
                { content: 'Chaos engineering', isCorrect: true },
                { content: 'Post-mortem analysis', isCorrect: false },
                { content: 'Capacity planning', isCorrect: false },
            ],
        },
        {
            content: 'Your company wants to implement a solution for managing its cloud infrastructure using Terraform. You need to ensure that the infrastructure is always consistent with the configuration. Which tool should you use?',
            explanation: 'Terraform and its plan/apply process ensure that infrastructure is consistent with the desired state defined in code.',
            answers: [
                { content: 'Azure Bicep', isCorrect: false },
                { content: 'Terraform', isCorrect: true },
                { content: 'Azure Policy', isCorrect: false },
                { content: 'Azure Monitor', isCorrect: false },
            ],
        },
        {
            content: 'Which metric measures the amount of time it takes to fix a defect after it is reported?',
            explanation: 'Defect resolution time measures the speed of fixing bugs.',
            answers: [
                { content: 'Lead time', isCorrect: false },
                { content: 'Defect resolution time', isCorrect: true },
                { content: 'Change fail rate', isCorrect: false },
                { content: 'MTTR', isCorrect: false },
            ],
        },
        {
            content: 'Your organization needs to implement a solution for managing and tracking its testing efforts across multiple platforms and devices. Which Azure DevOps service should you recommend?',
            explanation: 'Azure Test Plans provide a comprehensive testing management solution.',
            answers: [
                { content: 'Azure Repos', isCorrect: false },
                { content: 'Azure Pipelines', isCorrect: false },
                { content: 'Azure Test Plans', isCorrect: true },
                { content: 'Azure Boards', isCorrect: false },
            ],
        },
        {
            content: 'Which component of Azure Pipelines allows for the management and execution of automated builds?',
            explanation: 'Build pipelines in Azure Pipelines automate the build and test process.',
            answers: [
                { content: 'Release pipelines', isCorrect: false },
                { content: 'Build pipelines', isCorrect: true },
                { content: 'Variable groups', isCorrect: false },
                { content: 'Task groups', isCorrect: false },
            ],
        },
        {
            content: 'Your company wants to implement a strategy for managing multiple environments, such as dev, test, and prod, in its CD pipelines. Which feature of Azure Pipelines should you use?',
            explanation: 'Stages and environments in Azure Pipelines allow for managing deployments to multiple environments.',
            answers: [
                { content: 'Jobs', isCorrect: false },
                { content: 'Stages', isCorrect: true },
                { content: 'Variables', isCorrect: false },
                { content: 'Tasks', isCorrect: false },
            ],
        },
        {
            content: 'Which metric measures the percentage of releases that are successful on the first attempt?',
            explanation: 'First-time success rate is a measure of the quality of the CI/CD pipeline.',
            answers: [
                { content: 'Deployment frequency', isCorrect: false },
                { content: 'First-time success rate', isCorrect: true },
                { content: 'Change fail rate', isCorrect: false },
                { content: 'MTTR', isCorrect: false },
            ],
        },
        {
            content: 'You are using Azure Monitor to analyze logs from multiple sources. You want to identify used resources that can be scaled down to save costs. Which tool should you use?',
            explanation: 'Azure Advisor provides recommendations for optimizing resource usage and cost.',
            answers: [
                { content: 'Log analytics', isCorrect: false },
                { content: 'Azure Advisor', isCorrect: true },
                { content: 'Metrics explorer', isCorrect: false },
                { content: 'Activity log', isCorrect: false },
            ],
        },
        {
            content: 'Which SRE principle focuses on the relationship between system performance and user satisfaction?',
            explanation: 'Service Level Indicators (SLIs) and Objectives (SLOs) are metrics that represent user satisfaction with service performance.',
            answers: [
                { content: 'Monitoring', isCorrect: false },
                { content: 'SLIs/SLOs', isCorrect: true },
                { content: 'Automation', isCorrect: false },
                { content: 'Capacity planning', isCorrect: false },
            ],
        },
        {
            content: 'Your company needs to implement a solution for capturing and analyzing user behavior and identifying areas for improvement in the application interface. Which Application Insights tool should you use?',
            explanation: 'User Flows and Funnels allow for tracking and analyzing user behavior.',
            answers: [
                { content: 'Live metrics', isCorrect: false },
                { content: 'User Flows', isCorrect: true },
                { content: 'Smart detection', isCorrect: false },
                { content: 'Failures', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service would you use to store and manage secrets, such as API keys and passwords, and integrate them with your machine learning processes?',
            explanation: 'Azure Key Vault is a secure service for storing and managing sensitive information.',
            answers: [
                { content: 'Azure Storage', isCorrect: false },
                { content: 'Azure Key Vault', isCorrect: true },
                { content: 'Azure Active Directory', isCorrect: false },
                { content: 'Azure Security Center', isCorrect: false },
            ],
        },
        {
            content: 'Your company wants to implement a culture of blamelessness in its incident response process. Which practice should you follow?',
            explanation: 'Blameless post-mortems focus on identifying systematic failures rather than blaming individuals.',
            answers: [
                { content: 'Blaming individuals', isCorrect: false },
                { content: 'Blameless post-mortems', isCorrect: true },
                { content: 'Ignoring the incident', isCorrect: false },
                { content: 'Cancelling deployments', isCorrect: false },
            ],
        },
        {
            content: 'Which metric measures the average time it takes between system failures?',
            explanation: 'Mean Time Between Failures (MTBF) measures the average time between system failures.',
            answers: [
                { content: 'Mean Time to Recovery (MTTR)', isCorrect: false },
                { content: 'Mean Time Between Failures (MTBF)', isCorrect: true },
                { content: 'Mean Time to Acknowledge (MTTA)', isCorrect: false },
                { content: 'Lead time', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service provides a set of tools for managing and monitoring your cloud environment and ensuring compliance with security standards?',
            explanation: 'Microsoft Defender for Cloud and Azure Policy providing capabilities for managing and monitoring security and compliance.',
            answers: [
                { content: 'Azure Monitor', isCorrect: false },
                { content: 'Microsoft Defender for Cloud', isCorrect: true },
                { content: 'Azure Advisor', isCorrect: false },
                { content: 'Azure Arc', isCorrect: false },
            ],
        },
        {
            content: 'Your organization needs to implement a solution for tracking the progress of its software development projects and identifying potential risks. Which tool should you use?',
            explanation: 'Azure Boards provide a platform for tracking and visualizing development progress.',
            answers: [
                { content: 'Azure Repos', isCorrect: false },
                { content: 'Azure Boards', isCorrect: true },
                { content: 'Azure Pipelines', isCorrect: false },
                { content: 'Azure Test Plans', isCorrect: false },
            ],
        },
        {
            content: 'Which metric measures the percentage of code changes that result in a failure in production?',
            explanation: 'Change fail rate measures the quality of the release process.',
            answers: [
                { content: 'Deployment frequency', isCorrect: false },
                { content: 'Change fail rate', isCorrect: true },
                { content: 'Lead time', isCorrect: false },
                { content: 'MTTR', isCorrect: false },
            ],
        },
        {
            content: 'Which SRE practice involves defining the maximum allowable budget for system unreliability?',
            explanation: 'Error budgets provide a framework for balancing reliability and innovation.',
            answers: [
                { content: 'Monitoring', isCorrect: false },
                { content: 'Error budgets', isCorrect: true },
                { content: 'Automation', isCorrect: false },
                { content: 'Incident management', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service would you use to store and analyze large volumes of metrics data from your hybrid cloud environment?',
            explanation: 'Azure Monitor Metrics provide a platform for storing and analyzing metrics data.',
            answers: [
                { content: 'Azure Storage', isCorrect: false },
                { content: 'Azure Monitor Metrics', isCorrect: true },
                { content: 'Azure SQL Database', isCorrect: false },
                { content: 'Azure Cosmos DB', isCorrect: false },
            ],
        },
        {
            content: 'Your company wants to implement a strategy for managing its production incidents and facilitating collaboration between development and operations teams. Which tool of Azure Boards should you recommend?',
            explanation: 'Azure Boards can be used to track and manage incidents through custom work items.',
            answers: [
                { content: 'Backlogs', isCorrect: false },
                { content: 'Work items', isCorrect: true },
                { content: 'Queries', isCorrect: false },
                { content: 'Dashboards', isCorrect: false },
            ],
        },
        {
            content: 'Which metric measures the amount of time it takes from a requirement being identified to it being deployed to production?',
            explanation: 'Lead time measures the time to market.',
            answers: [
                { content: 'Cycle time', isCorrect: false },
                { content: 'Lead time', isCorrect: true },
                { content: 'Deployment frequency', isCorrect: false },
                { content: 'MTTR', isCorrect: false },
            ],
        },
        {
            content: 'What is the "DORA" metrics group used for?',
            explanation: 'A set of 4 key metrics (Deployment Frequency, Lead Time, Change Fail Rate, MTTR) to measure the performance of a software delivery team.',
            answers: [
                { content: 'For billing', isCorrect: false },
                { content: 'Measuring the efficiency and quality of the DevOps process', isCorrect: true },
                { content: 'To scan for security', isCorrect: false },
                { content: 'To manage passwords', isCorrect: false },
            ],
        },
        {
            content: 'To securely manage access to Azure resources for a GitHub Actions pipeline, what is the best credential model?',
            explanation: 'Workload Identity Federation (using OIDC) is the most secure method as it doesn\'t require storing static secrets.',
            answers: [
                { content: 'Username and password', isCorrect: false },
                { content: 'Workload Identity Federation (OIDC)', isCorrect: true },
                { content: 'Personal access token', isCorrect: false },
                { content: 'SSH Key', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Repos, what is a "Signed-off-by" trailer used for in a commit message?',
            explanation: 'Usually used to certify that the developer has the right to submit the code under the project\'s license (Developer Certificate of Origin).',
            answers: [
                { content: 'To say goodbye', isCorrect: false },
                { content: 'Certifying the author has the legal right to submit the code', isCorrect: true },
                { content: 'To encrypt code', isCorrect: false },
                { content: 'To delete the branch', isCorrect: false },
            ],
        },
        {
            content: 'What is "IaC Testing" and why is it important?',
            explanation: 'Running automated tests (like `terraform plan` or linting tools) on infrastructure code to ensure it won\'t break the environment before deployment.',
            answers: [
                { content: 'Testing a computer\'s RAM', isCorrect: false },
                { content: 'Verifying the correctness and security of infrastructure code before actual deployment', isCorrect: true },
                { content: 'Measuring internet speed', isCorrect: false },
                { content: 'Scanning for viruses', isCorrect: false },
            ],
        },
        {
            content: 'Your company uses "Feature Toggles" (Feature Flags). What is the main benefit for the release process?',
            explanation: 'Allows merging code to production but keeping the feature inactive until ready, supporting "Trunk-based development" and reducing merge risks.',
            answers: [
                { content: 'Makes code run faster', isCorrect: false },
                { content: 'Decoupling code deployment from feature release to users', isCorrect: true },
                { content: 'To save electricity', isCorrect: false },
                { content: 'To block hackers', isCorrect: false },
            ],
        },
        {
            content: 'To prevent "Ghost" resources from increasing Azure costs, which DevOps practice should you implement?',
            explanation: 'Automated infrastructure tear-down (using `terraform destroy` or similar) for temporary/testing environments when no longer needed.',
            answers: [
                { content: 'Turn off the server manual', isCorrect: false },
                { content: 'Automating the deletion of temporary environments when not in use', isCorrect: true },
                { content: 'Hiding accounts', isCorrect: false },
                { content: 'Reducing RAM', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Pipelines, what is the purpose of the "checkout: none" step?',
            explanation: 'To skip downloading source code in jobs that don\'t need it (e.g., a job that only runs an API script or manages a release gate) to save time.',
            answers: [
                { content: 'To delete code', isCorrect: false },
                { content: 'Skipping source code download to optimize time for jobs that don\'t need code', isCorrect: true },
                { content: 'To block users', isCorrect: false },
                { content: 'To stop the build', isCorrect: false },
            ],
        },
    ],
};
