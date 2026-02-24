export const awsDeveloperExam1 = {
    title: 'AWS Developer Associate - Practice Exam 1',
    description:
        'Đề thi thử AWS Developer Associate DVA-C02. 35 câu hỏi về development, deployment, security, debugging và AWS services cho developers.',
    durationMinutes: 60,
    courseId: 3,
    questions: [
        {
            content:
                'A developer needs to store temporary session information for a web application. The data should automatically expire after 24 hours. Which service and feature combination is the BEST solution?',
            explanation:
                'Amazon ElastiCache for Redis supports TTL (Time to Live) which automatically expires data after a specified time period, making it ideal for temporary session data that needs to be automatically cleaned up.',
            answers: [
                { content: 'Amazon RDS with a scheduled cleanup job', isCorrect: false },
                { content: 'Amazon ElastiCache for Redis with TTL', isCorrect: true },
                { content: 'Amazon S3 with lifecycle policy', isCorrect: false },
                { content: 'Amazon DynamoDB with no expiration', isCorrect: false },
            ],
        },
        {
            content:
                'A developer is writing a Lambda function that needs to access an Amazon RDS database. How should the developer securely manage the database credentials?',
            explanation:
                'AWS Secrets Manager provides secure storage for database credentials and supports automatic rotation. Lambda functions can retrieve credentials at runtime without hardcoding them in the code.',
            answers: [
                { content: 'Hardcode credentials in the Lambda function code', isCorrect: false },
                { content: 'Store credentials in AWS Secrets Manager and retrieve them at runtime', isCorrect: true },
                { content: 'Store credentials in environment variables in plaintext', isCorrect: false },
                { content: 'Store credentials in an S3 bucket', isCorrect: false },
            ],
        },
        {
            content:
                'A developer needs to implement a REST API using Amazon API Gateway and AWS Lambda. The API must handle CORS (Cross-Origin Resource Sharing). What must the developer configure?',
            explanation:
                'For CORS with API Gateway and Lambda, you need to enable CORS on the API Gateway (which adds the OPTIONS preflight response) AND include the appropriate CORS headers in the Lambda function response.',
            answers: [
                { content: 'Enable CORS on the Lambda function only', isCorrect: false },
                { content: 'Enable CORS on API Gateway and include CORS headers in Lambda response', isCorrect: true },
                { content: 'Configure CORS in the IAM policy', isCorrect: false },
                { content: 'Use CloudFront to handle CORS', isCorrect: false },
            ],
        },
        {
            content:
                'A developer is using Amazon DynamoDB and needs to retrieve multiple items in a single API call. Which operation should the developer use?',
            explanation:
                'The BatchGetItem operation returns the attributes of one or more items from one or more tables. You identify requested items by primary key. A single operation can retrieve up to 16 MB of data.',
            answers: [
                { content: 'Scan', isCorrect: false },
                { content: 'BatchGetItem', isCorrect: true },
                { content: 'GetItem with multiple keys', isCorrect: false },
                { content: 'Query with filter', isCorrect: false },
            ],
        },
        {
            content:
                'A developer needs to deploy a new version of a Lambda function without causing downtime. What feature should the developer use to gradually shift traffic to the new version?',
            explanation:
                'Lambda aliases combined with weighted routing allow you to point to two different function versions and control the percentage of traffic routed to each. This enables canary deployments and gradual traffic shifting.',
            answers: [
                { content: 'Lambda layers', isCorrect: false },
                { content: 'Lambda aliases with weighted routing', isCorrect: true },
                { content: 'Lambda environment variables', isCorrect: false },
                { content: 'Lambda concurrency settings', isCorrect: false },
            ],
        },
        {
            content:
                'A developer notices that some messages in an SQS queue are being processed multiple times. How can the developer prevent duplicate processing?',
            explanation:
                'SQS FIFO queues provide exactly-once processing, which eliminates the possibility of duplicate message delivery. Standard queues guarantee at-least-once delivery, which can result in duplicates.',
            answers: [
                { content: 'Increase the visibility timeout', isCorrect: false },
                { content: 'Use an SQS FIFO queue for exactly-once processing', isCorrect: true },
                { content: 'Decrease the message retention period', isCorrect: false },
                { content: 'Enable long polling', isCorrect: false },
            ],
        },
        {
            content:
                'A developer is using AWS X-Ray to debug a distributed application. What is the purpose of X-Ray segments and subsegments?',
            explanation:
                'X-Ray segments represent the work done by a service to handle a request. Subsegments provide more granular timing information about downstream calls (e.g., to databases, HTTP APIs) within a segment.',
            answers: [
                { content: 'To encrypt trace data', isCorrect: false },
                { content: 'To capture timing and metadata about request processing and downstream calls', isCorrect: true },
                { content: 'To manage user authentication', isCorrect: false },
                { content: 'To configure deployment pipelines', isCorrect: false },
            ],
        },
        {
            content:
                'A developer needs to send a message to multiple SQS queues and Lambda functions at the same time. Which service should the developer use?',
            explanation:
                'Amazon SNS enables the fan-out pattern, where a single published message is delivered to multiple subscribers simultaneously. Subscribers can include SQS queues, Lambda functions, HTTP endpoints, and more.',
            answers: [
                { content: 'Amazon EventBridge', isCorrect: false },
                { content: 'Amazon SNS', isCorrect: true },
                { content: 'Amazon Kinesis', isCorrect: false },
                { content: 'AWS Step Functions', isCorrect: false },
            ],
        },
        {
            content:
                'A developer is building a serverless application and needs to orchestrate multiple Lambda functions with error handling and retry logic. Which AWS service should the developer use?',
            explanation:
                'AWS Step Functions lets you coordinate multiple Lambda functions into serverless workflows. It provides built-in error handling, retry logic, and state management through state machines defined in Amazon States Language.',
            answers: [
                { content: 'Amazon SQS', isCorrect: false },
                { content: 'AWS Step Functions', isCorrect: true },
                { content: 'Amazon EventBridge', isCorrect: false },
                { content: 'AWS CodePipeline', isCorrect: false },
            ],
        },
        {
            content:
                'A developer is using Amazon DynamoDB and wants to implement optimistic locking to prevent concurrent updates from overwriting each other. Which feature should the developer use?',
            explanation:
                'Conditional writes in DynamoDB allow you to implement optimistic locking by including a version number attribute. The write only succeeds if the current version matches the expected version.',
            answers: [
                { content: 'DynamoDB Transactions', isCorrect: false },
                { content: 'Conditional writes with a version attribute', isCorrect: true },
                { content: 'DynamoDB Streams', isCorrect: false },
                { content: 'Strongly consistent reads', isCorrect: false },
            ],
        },
        {
            content:
                'A developer wants to test an AWS Lambda function locally before deploying it. Which tool should the developer use?',
            explanation:
                'AWS SAM CLI (Serverless Application Model CLI) allows developers to locally build, test, and debug Lambda functions defined using SAM templates. It provides a Lambda-like execution environment on the developer\'s local machine.',
            answers: [
                { content: 'AWS CloudFormation', isCorrect: false },
                { content: 'AWS SAM CLI', isCorrect: true },
                { content: 'AWS CodeDeploy', isCorrect: false },
                { content: 'AWS Cloud9', isCorrect: false },
            ],
        },
        {
            content:
                'A developer needs to implement caching for an API Gateway REST API to reduce the number of calls to the backend. How should this be configured?',
            explanation:
                'API Gateway provides a built-in caching capability. You can enable caching on a stage and configure cache TTL, capacity, and whether to require authorization for cache invalidation.',
            answers: [
                { content: 'Use Amazon ElastiCache behind API Gateway', isCorrect: false },
                { content: 'Enable API Gateway stage caching', isCorrect: true },
                { content: 'Use CloudFront in front of API Gateway', isCorrect: false },
                { content: 'Cache responses in Lambda function code', isCorrect: false },
            ],
        },
        {
            content:
                'A developer needs to add authentication to a REST API. The API must support multiple identity providers (Google, Facebook, Amazon). Which service should the developer use?',
            explanation:
                'Amazon Cognito User Pools support federation with social identity providers like Google, Facebook, and Amazon. It also provides built-in user management and integrates with API Gateway for authorization.',
            answers: [
                { content: 'AWS IAM', isCorrect: false },
                { content: 'Amazon Cognito User Pools', isCorrect: true },
                { content: 'AWS STS', isCorrect: false },
                { content: 'AWS Directory Service', isCorrect: false },
            ],
        },
        {
            content:
                'A developer is seeing "ProvisionedThroughputExceededException" errors when reading from a DynamoDB table. What should the developer do to resolve this?',
            explanation:
                'DynamoDB Auto Scaling automatically adjusts read and write capacity in response to actual traffic patterns. This eliminates the need to manually manage throughput and reduces throttling errors.',
            answers: [
                { content: 'Increase the table size', isCorrect: false },
                { content: 'Enable DynamoDB Auto Scaling', isCorrect: true },
                { content: 'Change to eventually consistent reads', isCorrect: false },
                { content: 'Add a global secondary index', isCorrect: false },
            ],
        },
        {
            content:
                'A developer is creating a CI/CD pipeline. The pipeline must build source code, run unit tests, and create deployment artifacts. Which AWS service should be used for the build phase?',
            explanation:
                'AWS CodeBuild is a fully managed continuous integration service that compiles source code, runs tests, and produces software packages. It scales continuously and processes multiple builds concurrently.',
            answers: [
                { content: 'AWS CodeDeploy', isCorrect: false },
                { content: 'AWS CodeBuild', isCorrect: true },
                { content: 'AWS CodePipeline', isCorrect: false },
                { content: 'AWS CodeCommit', isCorrect: false },
            ],
        },
        {
            content:
                'A developer needs to define infrastructure and application code together in a single deployable unit. Which AWS framework should the developer use?',
            explanation:
                'AWS SAM (Serverless Application Model) is an open-source framework for building serverless applications. A SAM template defines the infrastructure and application code together and extends CloudFormation.',
            answers: [
                { content: 'AWS CDK', isCorrect: false },
                { content: 'AWS SAM', isCorrect: true },
                { content: 'AWS Elastic Beanstalk', isCorrect: false },
                { content: 'AWS OpsWorks', isCorrect: false },
            ],
        },
        {
            content:
                'A developer is using Amazon S3 and notices that uploads larger than 100 MB frequently fail. What should the developer implement?',
            explanation:
                'Multipart upload is recommended for objects larger than 100 MB. It allows you to upload a single object as a set of parts, improving throughput and allowing quick recovery from network issues.',
            answers: [
                { content: 'S3 Transfer Acceleration', isCorrect: false },
                { content: 'S3 multipart upload', isCorrect: true },
                { content: 'S3 presigned URLs', isCorrect: false },
                { content: 'CloudFront distribution', isCorrect: false },
            ],
        },
        {
            content:
                'A developer needs to encrypt environment variables in a Lambda function. Which service should be used for encryption key management?',
            explanation:
                'AWS KMS (Key Management Service) integrates with Lambda to encrypt environment variables. Lambda encrypts environment variables with a KMS key, and they are decrypted at the time the function is invoked.',
            answers: [
                { content: 'AWS Certificate Manager', isCorrect: false },
                { content: 'AWS KMS', isCorrect: true },
                { content: 'AWS Secrets Manager', isCorrect: false },
                { content: 'AWS IAM', isCorrect: false },
            ],
        },
        {
            content:
                'A developer is building an application that processes items from an SQS queue. The developer wants to process messages in parallel to increase throughput. What is the recommended approach?',
            explanation:
                'Using Lambda with an SQS event source mapping allows multiple Lambda function invocations to process messages in parallel. Lambda automatically scales the number of pollers based on queue depth.',
            answers: [
                { content: 'Use a single EC2 instance to poll the queue', isCorrect: false },
                { content: 'Use Lambda with SQS event source mapping', isCorrect: true },
                { content: 'Use SNS instead of SQS', isCorrect: false },
                { content: 'Increase the SQS message size', isCorrect: false },
            ],
        },
        {
            content:
                'A developer is using Amazon DynamoDB and needs to query data using an attribute that is not part of the primary key. What should the developer create?',
            explanation:
                'A Global Secondary Index (GSI) allows you to query the table using an alternate key. The GSI has its own partition key and optional sort key, which can be different from the table\'s primary key.',
            answers: [
                { content: 'Local Secondary Index', isCorrect: false },
                { content: 'Global Secondary Index', isCorrect: true },
                { content: 'DynamoDB Stream', isCorrect: false },
                { content: 'Partition key', isCorrect: false },
            ],
        },
        {
            content:
                'A developer needs to implement blue/green deployments for an application running on Amazon ECS. Which AWS service should be used?',
            explanation:
                'AWS CodeDeploy supports blue/green deployments for Amazon ECS. It automates the process of switching traffic from the old (blue) task set to the new (green) task set, with the ability to roll back if problems are detected.',
            answers: [
                { content: 'AWS CodeBuild', isCorrect: false },
                { content: 'AWS CodeDeploy', isCorrect: true },
                { content: 'AWS CodePipeline', isCorrect: false },
                { content: 'AWS CloudFormation', isCorrect: false },
            ],
        },
        {
            content:
                'A developer needs to grant a mobile application temporary access to upload files to an Amazon S3 bucket. What is the MOST secure approach?',
            explanation:
                'Amazon Cognito Identity Pools can provide temporary AWS credentials to mobile applications. These credentials are scoped with IAM policies that only allow specific S3 actions, following the principle of least privilege.',
            answers: [
                { content: 'Embed IAM access keys in the mobile app', isCorrect: false },
                { content: 'Use Amazon Cognito Identity Pools for temporary credentials', isCorrect: true },
                { content: 'Make the S3 bucket public', isCorrect: false },
                { content: 'Use a hardcoded API key', isCorrect: false },
            ],
        },
        {
            content:
                'A developer is troubleshooting a Lambda function that is timing out. The function has a timeout of 3 seconds and connects to an RDS database in a VPC. What is the MOST likely cause?',
            explanation:
                'When a Lambda function is configured to run in a VPC, it creates an ENI (Elastic Network Interface) to connect to the VPC resources. Cold starts for VPC-connected Lambda functions can take longer due to ENI creation, but the most common issue is that the function cannot reach the RDS instance due to security group or subnet configuration.',
            answers: [
                { content: 'Lambda memory allocation is too low', isCorrect: false },
                { content: 'The Lambda function security group does not allow outbound traffic to the RDS security group', isCorrect: true },
                { content: 'The Lambda runtime is outdated', isCorrect: false },
                { content: 'The RDS instance is too small', isCorrect: false },
            ],
        },
        {
            content:
                'A developer needs to store the results of expensive database queries to improve application performance. The cached data should be invalidated when the underlying data changes. Which caching strategy should be used?',
            explanation:
                'The write-through caching strategy writes data to the cache and the database at the same time. This ensures the cache always has the most recent data, eliminating stale data issues. Combined with ElastiCache, it provides excellent read performance.',
            answers: [
                { content: 'Lazy loading (cache aside)', isCorrect: false },
                { content: 'Write-through caching', isCorrect: true },
                { content: 'TTL-only caching', isCorrect: false },
                { content: 'No caching strategy needed', isCorrect: false },
            ],
        },
        {
            content:
                'A developer is deploying a serverless application using AWS SAM. The developer wants to test the deployment in a staging environment before production. Which SAM feature should be used?',
            explanation:
                'SAM supports parameter overrides and configuration files that allow the same template to be deployed with different configurations for different environments (e.g., staging vs. production). The samconfig.toml file can define environment-specific settings.',
            answers: [
                { content: 'SAM Accelerate', isCorrect: false },
                { content: 'SAM configuration files (samconfig.toml) with environment parameters', isCorrect: true },
                { content: 'SAM layers', isCorrect: false },
                { content: 'SAM init templates', isCorrect: false },
            ],
        },
        {
            content:
                'A developer needs to implement fine-grained access control for items in a DynamoDB table, allowing users to only access their own data. Which approach is recommended?',
            explanation:
                'IAM policies support DynamoDB condition keys that allow you to restrict access based on the partition key. By using the ${cognito-identity.amazonaws.com:sub} variable as a condition, you can ensure users can only access items where the partition key matches their Cognito identity.',
            answers: [
                { content: 'Create separate tables for each user', isCorrect: false },
                { content: 'Use IAM policy conditions with DynamoDB leading keys', isCorrect: true },
                { content: 'Implement access control in application code only', isCorrect: false },
                { content: 'Use DynamoDB encryption', isCorrect: false },
            ],
        },
        {
            content:
                'A developer is using AWS CloudFormation and needs to reference the output of another stack. What feature should the developer use?',
            explanation:
                'CloudFormation cross-stack references use Export/Import functionality. One stack exports a value using the Outputs section with an Export field, and another stack imports it using the Fn::ImportValue intrinsic function.',
            answers: [
                { content: 'CloudFormation nested stacks', isCorrect: false },
                { content: 'CloudFormation cross-stack references (Export/ImportValue)', isCorrect: true },
                { content: 'CloudFormation macros', isCorrect: false },
                { content: 'CloudFormation custom resources', isCorrect: false },
            ],
        },
        {
            content:
                'A developer needs to implement request validation for an API Gateway REST API before the request reaches the Lambda backend. Which feature should be used?',
            explanation:
                'API Gateway request validators can validate the request body, query string parameters, and headers before invoking the backend Lambda function. This reduces unnecessary Lambda invocations and improves API security.',
            answers: [
                { content: 'Lambda authorizer', isCorrect: false },
                { content: 'API Gateway request validators with models', isCorrect: true },
                { content: 'AWS WAF rules', isCorrect: false },
                { content: 'API Gateway usage plans', isCorrect: false },
            ],
        },
        {
            content:
                'A developer is creating an application that uses Amazon S3. The developer needs to allow users to download private objects using a time-limited URL. Which feature should be used?',
            explanation:
                'S3 presigned URLs allow you to grant temporary access to private S3 objects. The URL includes a signature, and it expires after a specified time period. This is useful for sharing private content without making the bucket public.',
            answers: [
                { content: 'S3 bucket policy', isCorrect: false },
                { content: 'S3 presigned URLs', isCorrect: true },
                { content: 'S3 CORS configuration', isCorrect: false },
                { content: 'CloudFront signed cookies', isCorrect: false },
            ],
        },
        {
            content:
                'A developer needs to implement pagination for a DynamoDB query that may return more items than the specified limit. Which approach should the developer use?',
            explanation:
                'When a DynamoDB Query response has more items than the Limit parameter, the response includes a LastEvaluatedKey. The developer should use this value as the ExclusiveStartKey in the next request to retrieve the next page of results.',
            answers: [
                { content: 'Use Scan instead of Query', isCorrect: false },
                { content: 'Use LastEvaluatedKey as ExclusiveStartKey for pagination', isCorrect: true },
                { content: 'Increase the Limit parameter', isCorrect: false },
                { content: 'Use BatchGetItem', isCorrect: false },
            ],
        },
        {
            content:
                'A developer wants to receive notifications when a Lambda function encounters errors. Which monitoring approach should be used?',
            explanation:
                'CloudWatch Alarms can be configured to monitor Lambda error metrics. When the error count exceeds a threshold, the alarm triggers an SNS notification to alert the developer via email, SMS, or other channels.',
            answers: [
                { content: 'Check CloudWatch Logs manually', isCorrect: false },
                { content: 'Create a CloudWatch Alarm on Lambda Errors metric with SNS notification', isCorrect: true },
                { content: 'Use AWS X-Ray only', isCorrect: false },
                { content: 'Poll the Lambda API for errors', isCorrect: false },
            ],
        },
        {
            content:
                'A developer needs to implement idempotent API operations to handle duplicate requests safely. Which approach is recommended?',
            explanation:
                'Using an idempotency token (unique request ID) with DynamoDB conditional writes ensures that duplicate requests do not create duplicate records. The token can be stored in DynamoDB and checked before processing.',
            answers: [
                { content: 'Use POST for all operations', isCorrect: false },
                { content: 'Use idempotency tokens with conditional writes in DynamoDB', isCorrect: true },
                { content: 'Ignore duplicate requests', isCorrect: false },
                { content: 'Use API Gateway throttling', isCorrect: false },
            ],
        },
        {
            content:
                'A developer needs to share common code across multiple Lambda functions. Which Lambda feature is designed for this purpose?',
            explanation:
                'Lambda Layers allow you to package libraries, custom runtimes, or other function dependencies as a zip archive and share them across multiple Lambda functions. This reduces deployment package size and promotes code reuse.',
            answers: [
                { content: 'Lambda environment variables', isCorrect: false },
                { content: 'Lambda Layers', isCorrect: true },
                { content: 'Lambda aliases', isCorrect: false },
                { content: 'Lambda provisioned concurrency', isCorrect: false },
            ],
        },
        {
            content:
                'A developer needs to ensure a Lambda function can handle a sustained rate of requests without cold starts. Which feature should the developer configure?',
            explanation:
                'Lambda Provisioned Concurrency ensures that a specified number of function instances are initialized and ready to respond immediately. This eliminates cold start latency for predictable, sustained workloads.',
            answers: [
                { content: 'Lambda reserved concurrency', isCorrect: false },
                { content: 'Lambda provisioned concurrency', isCorrect: true },
                { content: 'Lambda layers', isCorrect: false },
                { content: 'Lambda aliases', isCorrect: false },
            ],
        },
    ],
};
