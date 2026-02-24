export const az400Exam2 = {
    title: 'Azure DevOps Engineer Expert AZ-400 - Practice Test 2',
    description: 'Azure DevOps Engineer Expert AZ-400 Practice Test focusing on Artifacts, Security, and Container pipelines.',
    durationMinutes: 120,
    courseId: 11,
    questions: [
        {
            content: 'You are managing a large codebase in GitHub and want to integrate it with Azure Pipelines. Which authentication method is best for security and ease of management?',
            explanation: 'GitHub App is the Microsoft-recommended method as it provides least-privilege access and is more secure than OAuth or Personal Access Tokens.',
            answers: [
                { content: 'OAuth', isCorrect: false },
                { content: 'GitHub App', isCorrect: true },
                { content: 'Personal Access Token (PAT)', isCorrect: false },
                { content: 'SSH Keys', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Pipelines, you want to run a set of tasks only if a previous stage has failed. Which Condition should you use?',
            explanation: 'Use the `failed()` condition in the `condition` property of the job or task.',
            answers: [
                { content: 'succeeded()', isCorrect: false },
                { content: 'failed()', isCorrect: true },
                { content: 'always()', isCorrect: false },
                { content: 'skipped()', isCorrect: false },
            ],
        },
        {
            content: 'To protect sensitive secrets in a pipeline (such as database passwords), you should combine Azure Pipelines with which security service?',
            explanation: 'Azure Key Vault is the most secure place to store secrets and can be integrated directly into Variable Groups in the pipeline.',
            answers: [
                { content: 'Azure Storage', isCorrect: false },
                { content: 'Azure Key Vault', isCorrect: true },
                { content: 'Azure Active Directory', isCorrect: false },
                { content: 'Azure Firewall', isCorrect: false },
            ],
        },
        {
            content: 'In a CI/CD process for containers, what is the purpose of "Image Scanning"?',
            explanation: 'To detect security vulnerabilities in container image layers and software packages installed within the container.',
            answers: [
                { content: 'To make the container image smaller', isCorrect: false },
                { content: 'To find and report security vulnerabilities in the container infrastructure', isCorrect: true },
                { content: 'To speed up image push', isCorrect: false },
                { content: 'To encrypt the container image', isCorrect: false },
            ],
        },
        {
            content: 'You design a pipeline to deploy infrastructure using Terraform. To allow multiple people to work on the same IaC codebase without state conflicts, where do you store the "terraform.tfstate" file?',
            explanation: 'Store the state file in a "Remote Backend" such as Azure Blob Storage with State Locking enabled.',
            answers: [
                { content: 'In the Git repository', isCorrect: false },
                { content: 'Azure Blob Storage (with locking feature)', isCorrect: true },
                { content: 'On the team lead\'s computer', isCorrect: false },
                { content: 'In Azure Key Vault', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Artifacts, what is the difference between a "Feed" and a "View"?',
            explanation: 'A Feed contains all versions of a package, while a View (e.g., Release view) helps filter for validated versions to provide to end users.',
            answers: [
                { content: 'They are the same', isCorrect: false },
                { content: 'A View provides a filtered set of package versions from a Feed for release management purposes', isCorrect: true },
                { content: 'Feeds are more expensive than Views', isCorrect: false },
                { content: 'Views are only for viewing images', isCorrect: false },
            ],
        },
        {
            content: 'When using Azure Pipelines with Microsoft-hosted agents, what is the maximum time for each build job for private projects?',
            explanation: 'The default limit is 60 minutes per job on Microsoft-hosted agents for both free and paid accounts (can be increased by purchasing additional parallelism).',
            answers: [
                { content: '30 minutes', isCorrect: false },
                { content: '60 minutes', isCorrect: true },
                { content: '4 hours', isCorrect: false },
                { content: 'No limit', isCorrect: false },
            ],
        },
        {
            content: 'Why is performing "Static Code Analysis" (such as SonarQube) important in the Build (CI) phase?',
            explanation: 'To ensure code complies with organizational standards, minimize latent bugs, and control "cyclomatic complexity".',
            answers: [
                { content: 'To make code run faster', isCorrect: false },
                { content: 'To early detect logic, security, and code quality issues before deployment', isCorrect: true },
                { content: 'To automatically delete redundant code', isCorrect: false },
                { content: 'To show off to the boss', isCorrect: false },
            ],
        },
        {
            content: 'Which infrastructure requirement does a "Blue-Green" deployment strategy have?',
            explanation: 'It requires 2 identical (Production) environments for traffic switching.',
            answers: [
                { content: 'A single server', isCorrect: false },
                { content: 'Two parallel and independent production environments', isCorrect: true },
                { content: 'An online backup system', isCorrect: false },
                { content: 'High-speed internet', isCorrect: false },
            ],
        },
        {
            content: 'In Azure DevOps, which tool provides a visual interface to manage manual and automated Test Cases?',
            explanation: 'Azure Test Plans is specifically designed for managing the testing process.',
            answers: [
                { content: 'Azure Boards', isCorrect: false },
                { content: 'Azure Test Plans', isCorrect: true },
                { content: 'Azure Pipelines', isCorrect: false },
                { content: 'Visual Studio Enterprise', isCorrect: false },
            ],
        },
        {
            content: 'You want to ensure that your container images are never overwritten in Azure Container Registry. Which feature should you enable?',
            explanation: 'The "Immutability" feature prevents pushing a new image to an existing tag.',
            answers: [
                { content: 'Safe push', isCorrect: false },
                { content: 'Image immutability', isCorrect: true },
                { content: 'Read-only access', isCorrect: false },
                { content: 'Double authentication', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service provides the ability to store large files (binaries) after a build that can be retrieved by many different pipelines most quickly?',
            explanation: 'Azure Pipelines Artifacts is deeply integrated and optimized for this purpose.',
            answers: [
                { content: 'Azure SQL', isCorrect: false },
                { content: 'Azure Pipelines Artifacts', isCorrect: true },
                { content: 'OneDrive', isCorrect: false },
                { content: 'Azure Backup Center', isCorrect: false },
            ],
        },
        {
            content: 'How does a "Rolling" deployment model differ from "Blue-Green"?',
            explanation: 'Rolling updates parts of the system (e.g., batches of servers) until complete, while Blue-Green switches all traffic at once.',
            answers: [
                { content: 'Rolling is more expensive', isCorrect: false },
                { content: 'Rolling updates system resources incrementally in batches', isCorrect: true },
                { content: 'Blue-Green is only for Docker', isCorrect: false },
                { content: 'They are identical', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Pipelines, what is the purpose of "Demands"?',
            explanation: 'To ensure a job only runs on Agents that have specific tools installed (e.g., Java, .NET Core).',
            answers: [
                { content: 'To demand a raise from the boss', isCorrect: false },
                { content: 'To check Agent capabilities before assigning a Job', isCorrect: true },
                { content: 'To request more powerful servers', isCorrect: false },
                { content: 'To block other users', isCorrect: false },
            ],
        },
        {
            content: 'To automatically check the quality of a Pull Request, what should you set up in Branch Policies?',
            explanation: 'Set up "Build Validation" to require the pipeline to run successfully before allowing a code merge.',
            answers: [
                { content: 'Manual code review', isCorrect: false },
                { content: 'Build Validation (triggering a pipeline automatically)', isCorrect: true },
                { content: 'Delete old branches', isCorrect: false },
                { content: 'Rename the branch', isCorrect: false },
            ],
        },
        {
            content: 'Why is using "Service Connections" more secure than storing Passwords directly in a pipeline?',
            explanation: 'Service Connections manage authentication using app identities or tokens; developers do not see and do not need to directly hold sensitive information.',
            answers: [
                { content: 'To make builds faster', isCorrect: false },
                { content: 'To separate responsibilities and protect credentials through centralized management', isCorrect: true },
                { content: 'To save 50% in costs', isCorrect: false },
                { content: 'Microsoft gives extra servers', isCorrect: false },
            ],
        },
        {
            content: 'Which service helps you track error rates and application response times after deployment to production?',
            explanation: 'Application Insights provides full application performance monitoring (APM) tools.',
            answers: [
                { content: 'Azure DevOps Boards', isCorrect: false },
                { content: 'Application Insights', isCorrect: true },
                { content: 'Azure Security Center', isCorrect: false },
                { content: 'Azure Bastion', isCorrect: false },
            ],
        },
        {
            content: 'In CI/CD design for microservices, why should each service have its own pipeline instead of using one large shared pipeline?',
            explanation: 'To ensure independence, allowing each service to be deployed individually without affecting or waiting for other services.',
            answers: [
                { content: 'To increase costs', isCorrect: false },
                { content: 'To ensure independent deployment capability and minimize the risk of error propagation', isCorrect: true },
                { content: 'To make coding easier', isCorrect: false },
                { content: 'Only because Microsoft recommends it', isCorrect: false },
            ],
        },
        {
            content: 'To automatically assign Tags to container images based on the build number, what do you use in Azure Pipelines?',
            explanation: 'Use system predefined variables like `$(Build.BuildId)` or `$(Build.BuildNumber)`.',
            answers: [
                { content: 'Type it manually', isCorrect: false },
                { content: 'Use Predefined Variables in the YAML file', isCorrect: true },
                { content: 'Use Excel', isCorrect: false },
                { content: 'Git branch name', isCorrect: false },
            ],
        },
        {
            content: 'In Azure DevOps, which of the following scenarios is ideal for using "Scale set agents"?',
            explanation: 'When build volume is inconsistent, you want Azure to automatically scale up Agents when there is a queue and scale down when idle to save costs.',
            answers: [
                { content: 'A project with only 2 people', isCorrect: false },
                { content: 'A project with fluctuating build demands and a need for infrastructure cost optimization', isCorrect: true },
                { content: 'When there is no internet', isCorrect: false },
                { content: 'When using a Mac', isCorrect: false },
            ],
        },
        {
            content: 'How does the "Infrastructure-as-Code" (IaC) model solve the "Configuration Drift" problem?',
            explanation: 'By defining the desired state in code, IaC allows you to re-apply the configuration to bring the infrastructure back to a standard state if manually modified.',
            answers: [
                { content: 'It locks the server', isCorrect: false },
                { content: 'Ensures infrastructure always matches the source code definition through automated deployment', isCorrect: true },
                { content: 'To make the network faster', isCorrect: false },
                { content: 'Deletes old servers', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Pipelines, what scenario is "Deployment Group" intended for?',
            explanation: 'For deploying to physical or virtual servers where you can install an agent to receive commands from DevOps.',
            answers: [
                { content: 'Only for Kubernetes', isCorrect: false },
                { content: 'For target servers in a traditional environment', isCorrect: true },
                { content: 'Only for Azure Functions', isCorrect: false },
                { content: 'For individual users', isCorrect: false },
            ],
        },
        {
            content: 'Why is separating "Build artifacts" from "Environment config" a core principle of DevOps?',
            explanation: 'So you can use a single build (binaries) and push it through all environments (Dev, Test, Prod) just by changing configuration variables, ensuring code consistency.',
            answers: [
                { content: 'To make the ZIP file smaller', isCorrect: false },
                { content: 'To ensure artifact immutability when moving across different environments', isCorrect: true },
                { content: 'Because the boss requires it', isCorrect: false },
                { content: 'To increase network speed', isCorrect: false },
            ],
        },
        {
            content: 'Git: Which command helps you integrate the latest source from the `main` branch into your `feature` branch smoothly while maintaining linear history?',
            explanation: '`git rebase main` moves the feature branch commits on top of the latest main commits, creating a straight-line history.',
            answers: [
                { content: 'git merge main', isCorrect: false },
                { content: 'git rebase main', isCorrect: true },
                { content: 'git pull original', isCorrect: false },
                { content: 'git checkout main', isCorrect: false },
            ],
        },
        {
            content: 'You notice many engineers in the team frequently re-writing infrastructure logic. What should you recommend to solve this in Azure Bicep?',
            explanation: 'Use "Bicep Modules" to package common resources into reusable libraries.',
            answers: [
                { content: 'Copy/Paste', isCorrect: false },
                { content: 'Use Bicep Modules to create shared infrastructure libraries', isCorrect: true },
                { content: 'Save to a Word file', isCorrect: false },
                { content: 'Resign', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Pipelines, you want a stage to run only at 10 PM daily. What part do you configure?',
            explanation: 'Use a `schedules` trigger with a CRON expression.',
            answers: [
                { content: 'push trigger', isCorrect: false },
                { content: 'schedules (Scheduled triggers)', isCorrect: true },
                { content: 'manual trigger', isCorrect: false },
                { content: 'PR trigger', isCorrect: false },
            ],
        },
        {
            content: 'What benefit does the "OIDC" (OpenID Connect) authentication model between GitHub Actions and Azure provide?',
            explanation: 'Eliminates the need to store long-lived Secrets (Client Secret/Password) in GitHub by using temporary tokens (trust relationship).',
            answers: [
                { content: 'Makes builds faster', isCorrect: false },
                { content: 'Eliminates static secret (password) management between platforms', isCorrect: true },
                { content: 'Encrypts source code', isCorrect: false },
                { content: 'Free builds', isCorrect: false },
            ],
        },
        {
            content: 'To ensure all application configuration files (.json, .xml) are correctly replaced with environment-specific values, which task do you use in the pipeline?',
            explanation: 'Use a "File Transform" or "Replace Tokens" task.',
            answers: [
                { content: 'Copy Files tasks', isCorrect: false },
                { content: 'File Transform or Token Replacement tasks', isCorrect: true },
                { content: 'Delete files task', isCorrect: false },
                { content: 'Archive files task', isCorrect: false },
            ],
        },
        {
            content: 'Why is assigning "Retention Policy" to builds and releases an important DevOps Engineer task?',
            explanation: 'To clean up old, non-valuable files to avoid filling up storage and wasting costs.',
            answers: [
                { content: 'For a pretty list', isCorrect: false },
                { content: 'To optimize storage volume and control operational costs', isCorrect: true },
                { content: 'To delete bad code', isCorrect: false },
                { content: 'By law', isCorrect: false },
            ],
        },
        {
            content: 'Your CI/CD solution requires every Production deployment to be approved by someone in the Legal department. Which feature do you configure in Azure Release Pipelines?',
            explanation: 'Use "Pre-deployment approvals" and specify a user or group.',
            answers: [
                { content: 'Manual Intervention task', isCorrect: false },
                { content: 'Pre-deployment approvals', isCorrect: true },
                { content: 'Gate', isCorrect: false },
                { content: 'Variable Group Check', isCorrect: false },
            ],
        },
        {
            content: 'In Azure DevOps, which tool helps visually display work "Bottlenecks" by tracking the number of items in each state?',
            explanation: 'The Cumulative Flow Diagram (CFD) is a specialized tool for detecting workflow bottlenecks.',
            answers: [
                { content: 'Burndown Chart', isCorrect: false },
                { content: 'Cumulative Flow Diagram (CFD)', isCorrect: true },
                { content: 'Velocity Chart', isCorrect: false },
                { content: 'Cycle Time chart', isCorrect: false },
            ],
        },
        {
            content: 'What is a "Dark Launching" release strategy?',
            explanation: 'Deploying new features to Production but hiding the interface from users (to test backend performance under real load).',
            answers: [
                { content: 'Running apps at night', isCorrect: false },
                { content: 'Deploying new features but hiding them from end users', isCorrect: true },
                { content: 'Encrypting a website', isCorrect: false },
                { content: 'Blocking morning hackers', isCorrect: false },
            ],
        },
        {
            content: 'In Git, when does a "Fast-forward merge" occur?',
            explanation: 'When the target branch has no new commits since the feature branch was created, Git just moves the target branch pointer to the end of the feature branch.',
            answers: [
                { content: 'When using fast internet', isCorrect: false },
                { content: 'When the history of the target branch has not diverged from the source branch tip', isCorrect: true },
                { content: 'When you type the command fast', isCorrect: false },
                { content: 'When merging via UI', isCorrect: false },
            ],
        },
        {
            content: 'You assign the "Release Administrator" role to a member. What can they do?',
            explanation: 'They can manage the entire release process, including creating, editing, and deleting release pipelines.',
            answers: [
                { content: 'Delete code in Git', isCorrect: false },
                { content: 'Manage all configurations and execution of release processes', isCorrect: true },
                { content: 'Change the boss\'s password', isCorrect: false },
                { content: 'Create new Azure users', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Container Registry, how does "Token-based access" help CI/CD security?',
            explanation: 'Allows assigning very specific permissions (e.g., only pulling images from one repository) instead of using a global Admin account.',
            answers: [
                { content: 'Makes pushing images faster', isCorrect: false },
                { content: 'Applies the Principle of Least Privilege for registry access', isCorrect: true },
                { content: 'Encrypts container images', isCorrect: false },
                { content: 'Free storage', isCorrect: false },
            ],
        },
        {
            content: 'What is a "Service Principal" authentication model in Azure DevOps used for?',
            explanation: 'Provides a non-human machine identity so Azure Pipelines can interact with Azure resources automatically.',
            answers: [
                { content: 'For devs to log in', isCorrect: false },
                { content: 'To authenticate automated processes with the Azure platform', isCorrect: true },
                { content: 'For the boss to see reports', isCorrect: false },
                { content: 'To block hackers', isCorrect: false },
            ],
        },
        {
            content: 'To ensure every virtual machine must have an "Environment" tag when created via a pipeline, what tool do you use at the Azure level?',
            explanation: 'Azure Policy can enforce rules about Tags at the time of deployment.',
            answers: [
                { content: 'Email alert', isCorrect: false },
                { content: 'Azure Policy', isCorrect: true },
                { content: 'Azure Monitor', isCorrect: false },
                { content: 'Activity Log', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Pipelines, what is the difference between "Manual Intervention" and "Manual Approval"?',
            explanation: 'Manual Intervention is a task in the pipeline that pauses processing on the agent; Manual Approval is a "check" outside the stage that typically doesn\'t consume agent resources while waiting.',
            answers: [
                { content: 'They are identical', isCorrect: false },
                { content: 'Manual Intervention pauses execution on the agent; Manual Approval is a high-level approval process', isCorrect: true },
                { content: 'Approval is more expensive', isCorrect: false },
                { content: 'Intervention is only for Windows', isCorrect: false },
            ],
        },
        {
            content: 'In CI design, how does an "Incremental Build" help a large project?',
            explanation: 'Only recompiles changed code instead of the entire project, significantly reducing build time.',
            answers: [
                { content: 'Makes code prettier', isCorrect: false },
                { content: 'Saves time by only processing changed resource parts', isCorrect: true },
                { content: 'Enhances security', isCorrect: false },
                { content: 'Reduces the number of bugs', isCorrect: false },
            ],
        },
        {
            content: 'When using Docker in a pipeline, why is "Multi-stage builds" recommended?',
            explanation: 'To create very small final images by removing unnecessary build tools (like SDKs) used during compilation.',
            answers: [
                { content: 'Makes builds twice as fast', isCorrect: false },
                { content: 'Optimizes image size and enhances release security', isCorrect: true },
                { content: 'To install more software', isCorrect: false },
                { content: 'Microsoft requires it', isCorrect: false },
            ],
        },
        {
            content: 'What is the benefit of a "Shadow Deployment"?',
            explanation: 'Sends real traffic to the new release but doesn\'t return results to users, just to measure performance and correctness under real load.',
            answers: [
                { content: 'Night-time deployment', isCorrect: false },
                { content: 'Testing performance and accuracy with real data without affecting users', isCorrect: true },
                { content: 'Encrypting connections', isCorrect: false },
                { content: 'Hiding code from hackers', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Boards, what does the "Cycle Time" metric measure?',
            explanation: 'Measures the time from when work actually starts to when it is finished (usually from "In Progress" to "Done").',
            answers: [
                { content: 'The boss\'s waiting time', isCorrect: false },
                { content: 'The actual timeframe to complete a work item from its start', isCorrect: true },
                { content: 'Total time for 1 year', isCorrect: false },
                { content: 'Number of commits', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service helps you detect open-source libraries with inappropriate licenses (e.g., GPL in a commercial project) in a pipeline?',
            explanation: 'WhiteSource (Mend) or Black Duck tasks integrated into the pipeline perform this check.',
            answers: [
                { content: 'Azure Firewall', isCorrect: false },
                { content: 'Mend (formerly WhiteSource) or similar Compliance tools', isCorrect: true },
                { content: 'Azure Monitor', isCorrect: false },
                { content: 'Windows Defender', isCorrect: false },
            ],
        },
        {
            content: 'Why is designing "Idempotent IaC scripts" mandatory in DevOps?',
            explanation: 'To ensure that no matter how many times a script is run, the final infrastructure configuration result is always the same (without causing repeat errors).',
            answers: [
                { content: 'To save code', isCorrect: false },
                { content: 'Ensures consistency and capability to re-run infrastructure scripts without causing errors', isCorrect: true },
                { content: 'To increase network speed', isCorrect: false },
                { content: 'To make it easy for the boss to read', isCorrect: false },
            ],
        },
        {
            content: 'In Azure Pipelines, what is the "Publish Build Artifacts" task used for?',
            explanation: 'Storing build result files to the Azure DevOps cloud so release pipelines can use them.',
            answers: [
                { content: 'Sending emails to customers', isCorrect: false },
                { content: 'Storing and sharing build results for subsequent processes', isCorrect: true },
                { content: 'Mã hóa ổ đĩa', isCorrect: false },
                { content: 'Deleting old files', isCorrect: false },
            ],
        },
    ],
};
