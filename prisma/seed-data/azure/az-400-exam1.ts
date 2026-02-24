export const az400Exam1 = {
    title: 'Azure DevOps Engineer Expert AZ-400 - Practice Test 1',
    description: 'Azure DevOps Engineer Expert AZ-400 Practice Test focusing on Process, Source Control, and CI/CD.',
    durationMinutes: 120,
    courseId: 11,
    questions: [
        {
            content: 'Your company uses the Agile process in Azure Boards. You need to ensure that the development team can track their work and prioritize it. Which component of Azure Boards should you use?',
            explanation: 'Backlogs allow teams to track and prioritize their work items in an Agile process.',
            answers: [
                { content: 'Boards', isCorrect: false },
                { content: 'Backlogs', isCorrect: true },
                { content: 'Sprints', isCorrect: false },
                { content: 'Queries', isCorrect: false },
            ],
        },
        {
            content: 'You are using Git for source control in Azure Repos. You want to ensure that all changes to the main branch are reviewed before being merged. Which feature should you implement?',
            explanation: 'Branch policies can be used to require pull request reviews before merging changes.',
            answers: [
                { content: 'Branch locking', isCorrect: false },
                { content: 'Branch policies', isCorrect: true },
                { content: 'Branch tagging', isCorrect: false },
                { content: 'Branch security', isCorrect: false },
            ],
        },
        {
            content: 'You are designing a CI/CD pipeline using Azure Pipelines. You want to ensure that the build process is triggered every time a change is pushed to the repository. Which trigger should you use?',
            explanation: 'A continuous integration (CI) trigger automatically starts a build when a change is pushed to the repository.',
            answers: [
                { content: 'Scheduled trigger', isCorrect: false },
                { content: 'CI trigger', isCorrect: true },
                { content: 'Pull request trigger', isCorrect: false },
                { content: 'Manual trigger', isCorrect: false },
            ],
        },
        {
            content: 'Your organization needs to securely store and share binary artifacts, such as NuGet packages. Which Azure DevOps service should you use?',
            explanation: 'Azure Artifacts allows teams to store, manage, and share binary artifacts and packages.',
            answers: [
                { content: 'Azure Repos', isCorrect: false },
                { content: 'Azure Pipelines', isCorrect: false },
                { content: 'Azure Artifacts', isCorrect: true },
                { content: 'Azure Test Plans', isCorrect: false },
            ],
        },
        {
            content: 'You are using Azure Test Plans to manage your testing process. You want to ensure that all manual tests are tracked and reported. Which component of Azure Test Plans should you use?',
            explanation: 'Test plans and test suites allow teams to manage and track manual testing efforts.',
            answers: [
                { content: 'Test plans', isCorrect: true },
                { content: 'Test cases', isCorrect: false },
                { content: 'Test results', isCorrect: false },
                { content: 'Test runs', isCorrect: false },
            ],
        },
        {
            content: 'Your company wants to implement a solution for monitoring the health and performance of its CI/CD pipelines. Which service should you recommend?',
            explanation: 'Azure Monitor can be integrated with Azure Pipelines to monitor pipeline health and performance.',
            answers: [
                { content: 'Azure Security Center', isCorrect: false },
                { content: 'Azure Monitor', isCorrect: true },
                { content: 'Azure Advisor', isCorrect: false },
                { content: 'Azure Policy', isCorrect: false },
            ],
        },
        {
            content: 'You are designing a CI/CD pipeline for a containerized application. Which Azure service should you use to store and manage your container images?',
            explanation: 'Azure Container Registry (ACR) allows teams to store and manage container images.',
            answers: [
                { content: 'Azure Container Instances', isCorrect: false },
                { content: 'Azure Container Registry', isCorrect: true },
                { content: 'Azure Kubernetes Service', isCorrect: false },
                { content: 'Azure App Service', isCorrect: false },
            ],
        },
        {
            content: 'Your team is using the Scrum process in Azure Boards. Which tool should you use to manage your daily work during a sprint?',
            explanation: 'Sprint boards (Taskboards) are used to manage and track work items during a sprint.',
            answers: [
                { content: 'Backlogs', isCorrect: false },
                { content: 'Sprint boards', isCorrect: true },
                { content: 'Queries', isCorrect: false },
                { content: 'Plans', isCorrect: false },
            ],
        },
        {
            content: 'You want to automate the deployment of your infrastructure using code. Which Azure service allows you to define and manage your infrastructure as code?',
            explanation: 'Azure Resource Manager (ARM) templates and Azure Bicep allow teams to define and manage infrastructure as code.',
            answers: [
                { content: 'Azure Resource Manager', isCorrect: true },
                { content: 'Azure Policy', isCorrect: false },
                { content: 'Azure Monitor', isCorrect: false },
                { content: 'Azure Security Center', isCorrect: false },
            ],
        },
        {
            content: 'Your company needs to integrate its CI/CD pipeline with external security tools for scanning vulnerabilities in its code and artifacts. Which feature of Azure Pipelines should you use?',
            explanation: 'Azure Pipelines allows for the integration of various marketplace tasks and extensions for security scanning.',
            answers: [
                { content: 'Pipeline gates', isCorrect: false },
                { content: 'Marketplace extensions', isCorrect: true },
                { content: 'Variable groups', isCorrect: false },
                { content: 'Deployment groups', isCorrect: false },
            ],
        },
        {
            content: 'You are using Azure Repos to manage your source code. You want to implement a strategy for managing multiple versions of your code and facilitating collaboration. Which concept should you use?',
            explanation: 'Branching allows teams to manage multiple versions of code and collaborate on features.',
            answers: [
                { content: 'Commits', isCorrect: false },
                { content: 'Branching', isCorrect: true },
                { content: 'Tagging', isCorrect: false },
                { content: 'Merging', isCorrect: false },
            ],
        },
        {
            content: 'Your organization needs to implement a solution for managing and tracking bugs found during testing. Which component of Azure Boards should you use?',
            explanation: 'Work items, specifically of the Bug type, are used to track and manage bugs in Azure Boards.',
            answers: [
                { content: 'Backlogs', isCorrect: false },
                { content: 'Work items', isCorrect: true },
                { content: 'Boards', isCorrect: false },
                { content: 'Sprints', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure DevOps service provides a set of tools for manual and automated testing?',
            explanation: 'Azure Test Plans provides a comprehensive set of testing tools for manual and automated testing.',
            answers: [
                { content: 'Azure Repos', isCorrect: false },
                { content: 'Azure Pipelines', isCorrect: false },
                { content: 'Azure Test Plans', isCorrect: true },
                { content: 'Azure Boards', isCorrect: false },
            ],
        },
        {
            content: 'You are designing a CI/CD pipeline using Azure Pipelines. You want to ensure that the deployment process only proceeds if certain conditions are met, such as successful tests and approvals. Which feature should you use?',
            explanation: 'Deployment gates and approvals allow for controlling the flow of a release pipeline.',
            answers: [
                { content: 'Release triggers', isCorrect: false },
                { content: 'Deployment gates', isCorrect: true },
                { content: 'Variable groups', isCorrect: false },
                { content: 'Task groups', isCorrect: false },
            ],
        },
        {
            content: 'Your organization wants to implement a solution for managing its internal documentation and sharing and collaborating on it. Which Azure DevOps feature should you recommend?',
            explanation: 'Wiki in Azure DevOps allows teams to create and share internal documentation.',
            answers: [
                { content: 'Azure Repos', isCorrect: false },
                { content: 'Azure Boards', isCorrect: false },
                { content: 'Wiki', isCorrect: true },
                { content: 'Azure Dashboards', isCorrect: false },
            ],
        },
        {
            content: 'You are using Git for source control in Azure Repos. You want to undo the changes made in the last commit without losing your work in the local directory. Which Git command should you use?',
            explanation: '`git reset --soft HEAD~1` undoes the last commit but keeps the changes in the staging area.',
            answers: [
                { content: 'git reset --hard', isCorrect: false },
                { content: 'git reset --soft HEAD~1', isCorrect: true },
                { content: 'git revert', isCorrect: false },
                { content: 'git checkout', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service would you use to store and manage secrets, such as API keys and passwords, and integrate them with your CI/CD pipelines?',
            explanation: 'Azure Key Vault is a secure service for storing and managing sensitive information.',
            answers: [
                { content: 'Azure Storage', isCorrect: false },
                { content: 'Azure Key Vault', isCorrect: true },
                { content: 'Azure Active Directory', isCorrect: false },
                { content: 'Azure Security Center', isCorrect: false },
            ],
        },
        {
            content: 'Your company is using the CMMI process in Azure Boards. Which component should you use to track the progress of a requirement through its development stages?',
            explanation: 'Boards and kanban boards are used to visualize and track the progress of work items.',
            answers: [
                { content: 'Backlogs', isCorrect: false },
                { content: 'Boards', isCorrect: true },
                { content: 'Queries', isCorrect: false },
                { content: 'Sprints', isCorrect: false },
            ],
        },
        {
            content: 'You are designing a CI/CD pipeline using Azure Pipelines. You want to ensure that the code is automatically compiled and tested every time a pull request is created. Which trigger should you use?',
            explanation: 'A pull request (PR) trigger automatically starts a build when a PR is created or updated.',
            answers: [
                { content: 'CI trigger', isCorrect: false },
                { content: 'PR trigger', isCorrect: true },
                { content: 'Scheduled trigger', isCorrect: false },
                { content: 'Manual trigger', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure DevOps service allows for the management and execution of automated builds and releases?',
            explanation: 'Azure Pipelines is the service used for automating the build, test, and release processes.',
            answers: [
                { content: 'Azure Repos', isCorrect: false },
                { content: 'Azure Pipelines', isCorrect: true },
                { content: 'Azure Artifacts', isCorrect: false },
                { content: 'Azure Boards', isCorrect: false },
            ],
        },
        {
            content: 'Your organisation needs to implement a solution for managing its open-source dependencies and scanning them for vulnerabilities. Which Azure DevOps feature should you recommend?',
            explanation: 'Azure Artifacts and integration with security tools can be used to manage and scan dependencies.',
            answers: [
                { content: 'Azure Repos', isCorrect: false },
                { content: 'Azure Artifacts', isCorrect: true },
                { content: 'Azure Pipelines', isCorrect: false },
                { content: 'Azure Test Plans', isCorrect: false },
            ],
        },
        {
            content: 'You are using Azure Repos to manage your source code. You want to identify the changes made to a specific file between two commits. Which feature should you use?',
            explanation: 'Diff (Difference) view allows you to see the changes between different versions of a file.',
            answers: [
                { content: 'History', isCorrect: false },
                { content: 'Diff', isCorrect: true },
                { content: 'Blame', isCorrect: false },
                { content: 'Branches', isCorrect: false },
            ],
        },
        {
            content: 'Which component of Azure Boards would you use to create a custom report and visualize data about your work items?',
            explanation: 'Queries and Dashboards allow for creating custom reports and visualizations.',
            answers: [
                { content: 'Backlogs', isCorrect: false },
                { content: 'Dashboards', isCorrect: true },
                { content: 'Sprints', isCorrect: false },
                { content: 'Boards', isCorrect: false },
            ],
        },
        {
            content: 'You are designing a CI/CD pipeline for a legacy application. You need to deploy the application to multiple on-premises servers. Which feature of Azure Pipelines should you use?',
            explanation: 'Deployment groups allow for deploying applications to on-premises servers and virtual machines.',
            answers: [
                { content: 'Agent pools', isCorrect: false },
                { content: 'Deployment groups', isCorrect: true },
                { content: 'Variable groups', isCorrect: false },
                { content: 'Task groups', isCorrect: false },
            ],
        },
        {
            content: 'Your company wants to implement a solution for tracking and managing technical debt in its code. Which Azure DevOps feature should you recommend?',
            explanation: 'Azure Boards can be used to track technical debt through work items and custom tags.',
            answers: [
                { content: 'Azure Repos', isCorrect: false },
                { content: 'Azure Boards', isCorrect: true },
                { content: 'Azure Pipelines', isCorrect: false },
                { content: 'Azure Test Plans', isCorrect: false },
            ],
        },
        {
            content: 'You are using Git for source control in Azure Repos. You want to combine the changes from a feature branch into the main branch. Which command should you use?',
            explanation: '`git merge` is used to combine changes from one branch into another.',
            answers: [
                { content: 'git commit', isCorrect: false },
                { content: 'git merge', isCorrect: true },
                { content: 'git push', isCorrect: false },
                { content: 'git pull', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure DevOps service provides a set of tools for managing your source code using Git or Team Foundation Version Control (TFVC)?',
            explanation: 'Azure Repos provides source control management for teams.',
            answers: [
                { content: 'Azure Repos', isCorrect: true },
                { content: 'Azure Pipelines', isCorrect: false },
                { content: 'Azure Artifacts', isCorrect: false },
                { content: 'Azure Boards', isCorrect: false },
            ],
        },
        {
            content: 'You are designing a CI/CD pipeline using Azure Pipelines. You want to ensure that the build process is executed on a specific server with specialized hardware. Which component should you use?',
            explanation: 'Self-hosted agents allow for running builds on specialized hardware and servers.',
            answers: [
                { content: 'Microsoft-hosted agents', isCorrect: false },
                { content: 'Self-hosted agents', isCorrect: true },
                { content: 'Agent pools', isCorrect: false },
                { content: 'Deployment groups', isCorrect: false },
            ],
        },
        {
            content: 'Your organisation needs to implement a solution for managing and tracking its testing efforts across multiple platforms and devices. Which Azure DevOps service should you recommend?',
            explanation: 'Azure Test Plans provides a comprehensive testing management solution.',
            answers: [
                { content: 'Azure Repos', isCorrect: false },
                { content: 'Azure Pipelines', isCorrect: false },
                { content: 'Azure Test Plans', isCorrect: true },
                { content: 'Azure Boards', isCorrect: false },
            ],
        },
        {
            content: 'Which feature of Azure Repos would you use to see who made a specific change to a line of code and when?',
            explanation: 'Blame view shows the author and commit for each line of a file.',
            answers: [
                { content: 'History', isCorrect: false },
                { content: 'Blame', isCorrect: true },
                { content: 'Diff', isCorrect: false },
                { content: 'Branches', isCorrect: false },
            ],
        },
        {
            content: 'You are using Azure Boards to manage your work items. You want to identify work items that have been in a specific state for an extended period. Which feature should you use?',
            explanation: 'Queries allow for identifying work items based on their state and history.',
            answers: [
                { content: 'Backlogs', isCorrect: false },
                { content: 'Queries', isCorrect: true },
                { content: 'Boards', isCorrect: false },
                { content: 'Sprints', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service would you use to monitor the real-time availability and performance of your applications?',
            explanation: 'Azure Application Insights is an application performance management (APM) service.',
            answers: [
                { content: 'Azure Monitor', isCorrect: false },
                { content: 'Application Insights', isCorrect: true },
                { content: 'Azure Security Center', isCorrect: false },
                { content: 'Azure Advisor', isCorrect: false },
            ],
        },
        {
            content: 'Your company wants to implement a solution for managing its release process and facilitating collaboration between development and operations teams. Which Azure DevOps feature should you recommend?',
            explanation: 'Release pipelines in Azure Pipelines provide a solution for managing the release process.',
            answers: [
                { content: 'Azure Boards', isCorrect: false },
                { content: 'Release pipelines', isCorrect: true },
                { content: 'Azure Repos', isCorrect: false },
                { content: 'Azure Test Plans', isCorrect: false },
            ],
        },
        {
            content: 'You are using Git for source control in Azure Repos. You want to create a new branch from the current branch. Which command should you use?',
            explanation: '`git branch [branch-name]` or `git checkout -b [branch-name]` creates a new branch.',
            answers: [
                { content: 'git commit', isCorrect: false },
                { content: 'git checkout -b', isCorrect: true },
                { content: 'git push', isCorrect: false },
                { content: 'git pull', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure DevOps service provides a set of tools for managing work items and visualizing work using Kanban or Scrum?',
            explanation: 'Azure Boards provides a comprehensive work management solution.',
            answers: [
                { content: 'Azure Repos', isCorrect: false },
                { content: 'Azure Pipelines', isCorrect: false },
                { content: 'Azure Artifacts', isCorrect: false },
                { content: 'Azure Boards', isCorrect: true },
            ],
        },
        {
            content: 'You are designing a CI/CD pipeline using Azure Pipelines. You want to ensure that the release process only proceeds if a person reviews and approves it. Which feature should you use?',
            explanation: 'Pre-deployment and post-deployment approvals allow for manual intervention in the release process.',
            answers: [
                { content: 'Release triggers', isCorrect: false },
                { content: 'Approvals', isCorrect: true },
                { content: 'Variable groups', isCorrect: false },
                { content: 'Task groups', isCorrect: false },
            ],
        },
        {
            content: 'Your organisation needs to implement a solution for managing its open-source licenses and identifying potential risks. Which Azure DevOps feature should you recommend?',
            explanation: 'Integration with licensing and security tools can be used to manage open-source risks.',
            answers: [
                { content: 'Azure Repos', isCorrect: false },
                { content: 'Open-source extensions', isCorrect: true },
                { content: 'Azure Pipelines', isCorrect: false },
                { content: 'Azure Test Plans', isCorrect: false },
            ],
        },
        {
            content: 'Which component of Azure DevOps allows for the creation and management of shared variables and secrets across multiple pipelines?',
            explanation: 'Variable groups allow for managing shared variables and can be linked to Azure Key Vault.',
            answers: [
                { content: 'Task groups', isCorrect: false },
                { content: 'Variable groups', isCorrect: true },
                { content: 'Library', isCorrect: false },
                { content: 'Service connections', isCorrect: false },
            ],
        },
        {
            content: 'You are using Azure Repos to manage your source code. You want to see the history of changes made to a specific directory. Which feature should you use?',
            explanation: 'History view shows the commits and changes for a specific file or directory.',
            answers: [
                { content: 'Branches', isCorrect: false },
                { content: 'History', isCorrect: true },
                { content: 'Tags', isCorrect: false },
                { content: 'Pull requests', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service provides a platform for analyzing and visualizing large volumes of data using various charts and graphs?',
            explanation: 'Azure Dashboards and integration with Power BI allow for analyzing and visualizing data.',
            answers: [
                { content: 'Azure Monitor', isCorrect: false },
                { content: 'Azure Dashboards', isCorrect: true },
                { content: 'Azure Security Center', isCorrect: false },
                { content: 'Azure Advisor', isCorrect: false },
            ],
        },
        {
            content: 'Your company wants to implement a solution for managing its internal APIs and sharing and collaborating on them. Which Azure DevOps feature should you recommend?',
            explanation: 'Api management and documentation tools can be integrated with Azure DevOps.',
            answers: [
                { content: 'Azure Repos', isCorrect: false },
                { content: 'Azure Artifacts', isCorrect: true },
                { content: 'Azure Pipelines', isCorrect: false },
                { content: 'Azure Test Plans', isCorrect: false },
            ],
        },
        {
            content: 'You are using Git for source control in Azure Repos. You want to see the list of branches in your repository. Which command should you use?',
            explanation: '`git branch` shows the list of local branches.',
            answers: [
                { content: 'git commit', isCorrect: false },
                { content: 'git branch', isCorrect: true },
                { content: 'git push', isCorrect: false },
                { content: 'git pull', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure DevOps service provides a platform for managing and executing automated tests as part of your CI/CD pipelines?',
            explanation: 'Azure Pipelines can be integrated with various testing frameworks for automated testing.',
            answers: [
                { content: 'Azure Repos', isCorrect: false },
                { content: 'Azure Pipelines', isCorrect: true },
                { content: 'Azure Test Plans', isCorrect: false },
                { content: 'Azure Boards', isCorrect: false },
            ],
        },
        {
            content: 'You are designing a CI/CD pipeline using Azure Pipelines. You want to ensure that the release process follows a specific order of stages, such as dev, test, and prod. Which component should you use?',
            explanation: 'Stages in a release pipeline allow for defining the sequence of deployment environments.',
            answers: [
                { content: 'Jobs', isCorrect: false },
                { content: 'Stages', isCorrect: true },
                { content: 'Tasks', isCorrect: false },
                { content: 'Pipelines', isCorrect: false },
            ],
        },
        {
            content: 'Your organization needs to implement a solution for managing its technical support tickets and tracking their progress. Which Azure DevOps feature should you recommend?',
            explanation: 'Azure Boards can be used to track support tickets through custom work item types.',
            answers: [
                { content: 'Azure Repos', isCorrect: false },
                { content: 'Azure Boards', isCorrect: true },
                { content: 'Azure Pipelines', isCorrect: false },
                { content: 'Azure Test Plans', isCorrect: false },
            ],
        },
        {
            content: 'Which feature of Azure Repos allows for collaborating on code changes through a formal review process?',
            explanation: 'Pull requests (PRs) facilitate collaboration and code reviews.',
            answers: [
                { content: 'Branches', isCorrect: false },
                { content: 'Pull requests', isCorrect: true },
                { content: 'Commits', isCorrect: false },
                { content: 'Tags', isCorrect: false },
            ],
        },
        {
            content: 'You are using Azure Repos to manage your source code. You want to identify the changes made to a specific line of code in the history. Which feature should you use?',
            explanation: 'Blame view and history help identify specific line changes.',
            answers: [
                { content: 'History', isCorrect: false },
                { content: 'Blame', isCorrect: true },
                { content: 'Diff', isCorrect: false },
                { content: 'Branches', isCorrect: false },
            ],
        },
        {
            content: 'Which Azure service would you use to store and manage the results of your automated tests and visualize them?',
            explanation: 'Azure Pipelines and Azure Test Plans provide platforms for storing and visualizing test results.',
            answers: [
                { content: 'Azure Monitor', isCorrect: false },
                { content: 'Azure Test Plans', isCorrect: true },
                { content: 'Azure Security Center', isCorrect: false },
                { content: 'Azure Advisor', isCorrect: false },
            ],
        },
        {
            content: 'Your company wants to implement a solution for managing its cloud costs and identifying potential savings. Which Azure service should you recommend?',
            explanation: 'Azure Cost Management + Billing provides insights into cloud spending.',
            answers: [
                { content: 'Azure Monitor', isCorrect: false },
                { content: 'Azure Cost Management', isCorrect: true },
                { content: 'Azure Security Center', isCorrect: false },
                { content: 'Azure Advisor', isCorrect: false },
            ],
        },
        {
            content: 'You are using Git for source control in Azure Repos. You want to see the status of your local changes. Which command should you use?',
            explanation: '`git status` shows the current state of the working directory and staging area.',
            answers: [
                { content: 'git commit', isCorrect: false },
                { content: 'git status', isCorrect: true },
                { content: 'git push', isCorrect: false },
                { content: 'git pull', isCorrect: false },
            ],
        },
    ],
};
