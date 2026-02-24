export const pdeExam2 = {
    title: 'Google Cloud Professional Data Engineer - Practice Test 2',
    description: 'Professional Data Engineer practice test with 50 questions on ML pipelines, data governance, data lakes, and advanced analytics.',
    durationMinutes: 120,
    courseId: 15,
    questions: [
        {
            content: 'Which Google Cloud service provides automated data quality monitoring and profiling?',
            explanation: 'Dataplex Data Quality provides automated data profiling, quality checks, and monitoring for data lakes and warehouses.',
            answers: [
                { content: 'Cloud Monitoring', isCorrect: false },
                { content: 'Dataplex Data Quality', isCorrect: true },
                { content: 'Cloud Logging', isCorrect: false },
                { content: 'Cloud Trace', isCorrect: false },
            ],
        },
        {
            content: 'You need to build an ML pipeline that trains models on BigQuery data. Which approach is most integrated?',
            explanation: 'BigQuery ML allows model training directly in BigQuery using SQL, with Vertex AI for more complex ML workflows.',
            answers: [
                { content: 'Export data to CSV and train locally', isCorrect: false },
                { content: 'BigQuery ML for SQL-based training or Vertex AI for custom models', isCorrect: true },
                { content: 'Cloud Functions', isCorrect: false },
                { content: 'Compute Engine with manual setup', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of BigQuery slots?',
            explanation: 'Slots are BigQuery\'s unit of computational capacity. They represent virtual CPUs used to execute SQL queries.',
            answers: [
                { content: 'Storage allocation', isCorrect: false },
                { content: 'Virtual CPUs for query execution', isCorrect: true },
                { content: 'Network bandwidth', isCorrect: false },
                { content: 'User connection limits', isCorrect: false },
            ],
        },
        {
            content: 'Which service should you use to prepare and clean data visually without writing code?',
            explanation: 'Cloud Dataprep (by Trifacta) provides a visual interface for exploring, cleaning, and preparing data for analysis.',
            answers: [
                { content: 'BigQuery', isCorrect: false },
                { content: 'Cloud Dataprep', isCorrect: true },
                { content: 'Dataflow', isCorrect: false },
                { content: 'Cloud Shell', isCorrect: false },
            ],
        },
        {
            content: 'What is the best approach for handling schema conflicts when merging data from multiple sources?',
            explanation: 'Implement schema reconciliation in the pipeline, use a common data model, and handle schema drift with flexible types.',
            answers: [
                { content: 'Ignore conflicting fields', isCorrect: false },
                { content: 'Define a canonical data model with schema reconciliation in the pipeline', isCorrect: true },
                { content: 'Accept only one source', isCorrect: false },
                { content: 'Store everything as strings', isCorrect: false },
            ],
        },
        {
            content: 'You need to implement data lineage tracking. Which Google Cloud service provides this?',
            explanation: 'Data Catalog and Dataplex provide data lineage features that track where data comes from and how it flows through systems.',
            answers: [
                { content: 'Cloud Monitoring', isCorrect: false },
                { content: 'Data Catalog / Dataplex Lineage', isCorrect: true },
                { content: 'Cloud Logging', isCorrect: false },
                { content: 'Cloud IAM', isCorrect: false },
            ],
        },
        {
            content: 'Which BigQuery feature allows you to run queries across different organizations\' datasets?',
            explanation: 'BigQuery Analytics Hub allows organizations to share and exchange datasets across organizational boundaries securely.',
            answers: [
                { content: 'BigQuery Omni', isCorrect: false },
                { content: 'Analytics Hub', isCorrect: true },
                { content: 'BigQuery BI Engine', isCorrect: false },
                { content: 'Data Transfer Service', isCorrect: false },
            ],
        },
        {
            content: 'What is the recommended approach for implementing a slowly changing dimension (SCD Type 2) in BigQuery?',
            explanation: 'Use MERGE statements with effective date columns to track historical changes in dimension tables.',
            answers: [
                { content: 'Delete and recreate the table', isCorrect: false },
                { content: 'MERGE with effective date columns (valid_from, valid_to) for historical tracking', isCorrect: true },
                { content: 'Only keep the latest version', isCorrect: false },
                { content: 'Store in Cloud Storage as CSV', isCorrect: false },
            ],
        },
        {
            content: 'Which Pub/Sub delivery mode guarantees messages are processed in order?',
            explanation: 'Pub/Sub ordering keys ensure messages with the same ordering key are delivered to subscribers in the order published.',
            answers: [
                { content: 'Default delivery', isCorrect: false },
                { content: 'Message ordering with ordering keys', isCorrect: true },
                { content: 'Dead-letter topics', isCorrect: false },
                { content: 'Push subscriptions only', isCorrect: false },
            ],
        },
        {
            content: 'You want to use machine learning to predict churned customers based on BigQuery data. What is the simplest approach?',
            explanation: 'BigQuery ML allows you to build classification models using SQL without exporting data or learning a new framework.',
            answers: [
                { content: 'Export data to train externally', isCorrect: false },
                { content: 'Use BigQuery ML to create a logistic regression or boosted tree model', isCorrect: true },
                { content: 'Write custom Python code on Compute Engine', isCorrect: false },
                { content: 'Use Cloud Functions', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of Dataflow Flex Templates?',
            explanation: 'Flex Templates package pipeline code in Docker containers, allowing custom dependencies and more flexibility than Classic Templates.',
            answers: [
                { content: 'They are identical to Classic Templates', isCorrect: false },
                { content: 'Docker-containerized templates with custom dependencies and greater flexibility', isCorrect: true },
                { content: 'Templates for data visualization', isCorrect: false },
                { content: 'Network configuration templates', isCorrect: false },
            ],
        },
        {
            content: 'Which tool should you use for data wrangling and transformation using a visual interface?',
            explanation: 'Cloud Dataprep (powered by Trifacta) provides a visual, interactive data preparation tool for cleaning and transforming data.',
            answers: [
                { content: 'BigQuery', isCorrect: false },
                { content: 'Cloud Dataprep', isCorrect: true },
                { content: 'Cloud Shell', isCorrect: false },
                { content: 'gcloud CLI', isCorrect: false },
            ],
        },
        {
            content: 'You need to optimize BigQuery storage costs for historical data that is rarely queried. What should you do?',
            explanation: 'BigQuery automatically reduces the price for long-term storage (data not modified for 90+ days) by approximately 50%.',
            answers: [
                { content: 'Delete old data', isCorrect: false },
                { content: 'Use long-term storage pricing (automatic for 90+ days) or export to Cloud Storage', isCorrect: true },
                { content: 'Compress the data manually', isCorrect: false },
                { content: 'No optimization possible', isCorrect: false },
            ],
        },
        {
            content: 'Which approach should you use to implement a feature store for ML?',
            explanation: 'Vertex AI Feature Store provides a managed feature store for serving ML features consistently in training and serving.',
            answers: [
                { content: 'Cloud SQL tables', isCorrect: false },
                { content: 'Vertex AI Feature Store', isCorrect: true },
                { content: 'Cloud Storage files', isCorrect: false },
                { content: 'BigQuery only', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of Pub/Sub Lite?',
            explanation: 'Pub/Sub Lite offers a lower-cost messaging service for high-volume workloads where zone-level availability is acceptable.',
            answers: [
                { content: 'A free version of Pub/Sub', isCorrect: false },
                { content: 'A lower-cost alternative for high-volume, zonal messaging workloads', isCorrect: true },
                { content: 'A monitoring tool', isCorrect: false },
                { content: 'A data storage service', isCorrect: false },
            ],
        },
        {
            content: 'You need to implement a real-time anomaly detection system for network traffic. Which architecture is best?',
            explanation: 'Pub/Sub ingests network events, Dataflow processes them with ML models in real-time, and triggers alerts on anomalies.',
            answers: [
                { content: 'Daily batch processing', isCorrect: false },
                { content: 'Pub/Sub → Dataflow with ML-based anomaly detection → alerting', isCorrect: true },
                { content: 'Manual log review', isCorrect: false },
                { content: 'Cloud Storage analysis', isCorrect: false },
            ],
        },
        {
            content: 'Which BigQuery feature enables you to search across all columns and tables for specific data?',
            explanation: 'BigQuery Search Indexes enable search across string columns, providing text search capabilities within BigQuery.',
            answers: [
                { content: 'Wildcard tables', isCorrect: false },
                { content: 'Search Indexes', isCorrect: true },
                { content: 'Materialized views', isCorrect: false },
                { content: 'External tables', isCorrect: false },
            ],
        },
        {
            content: 'What is the recommended approach for data versioning in a data lake?',
            explanation: 'Use Cloud Storage versioning for raw data, BigQuery table snapshots for processed data, and metadata tracking in Data Catalog.',
            answers: [
                { content: 'No versioning needed', isCorrect: false },
                { content: 'Cloud Storage versioning + BigQuery snapshots + Data Catalog metadata', isCorrect: true },
                { content: 'Manual file naming conventions only', isCorrect: false },
                { content: 'Delete old versions immediately', isCorrect: false },
            ],
        },
        {
            content: 'Which service enables you to run SQL queries across data in Cloud Storage without loading into BigQuery?',
            explanation: 'BigLake provides a unified storage engine that enables BigQuery to query data in Cloud Storage with fine-grained security.',
            answers: [
                { content: 'Cloud SQL', isCorrect: false },
                { content: 'BigLake', isCorrect: true },
                { content: 'Dataproc', isCorrect: false },
                { content: 'Cloud Functions', isCorrect: false },
            ],
        },
        {
            content: 'You need to implement a medallion architecture (bronze/silver/gold layers). Which storage approach is recommended?',
            explanation: 'Cloud Storage for bronze (raw), BigQuery for silver (cleansed), and BigQuery materialized views for gold (business-ready).',
            answers: [
                { content: 'Single table for all layers', isCorrect: false },
                { content: 'Cloud Storage (bronze) → BigQuery datasets (silver) → BigQuery views/materialized views (gold)', isCorrect: true },
                { content: 'Local file system', isCorrect: false },
                { content: 'Cloud SQL for all layers', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of Dataflow Prime?',
            explanation: 'Dataflow Prime provides enhanced autoscaling with vertical and horizontal scaling, right-fitting, and advanced diagnostics.',
            answers: [
                { content: 'A premium pricing tier', isCorrect: false },
                { content: 'Enhanced autoscaling with vertical scaling and advanced diagnostics', isCorrect: true },
                { content: 'A data storage service', isCorrect: false },
                { content: 'A monitoring tool', isCorrect: false },
            ],
        },
        {
            content: 'Which approach should you use to handle backpressure in a streaming pipeline?',
            explanation: 'Dataflow automatically handles backpressure through autoscaling. Pub/Sub flow control settings can also manage subscriber throughput.',
            answers: [
                { content: 'Drop messages', isCorrect: false },
                { content: 'Dataflow autoscaling and Pub/Sub flow control settings', isCorrect: true },
                { content: 'Increase message size', isCorrect: false },
                { content: 'Ignore the issue', isCorrect: false },
            ],
        },
        {
            content: 'You need to implement a real-time recommendation system. Which architecture is best?',
            explanation: 'Vertex AI for model training, Bigtable/Memorystore for feature serving, and a low-latency serving endpoint.',
            answers: [
                { content: 'Batch SQL queries', isCorrect: false },
                { content: 'Vertex AI model + Bigtable/Memorystore for features + low-latency serving endpoint', isCorrect: true },
                { content: 'Cloud Functions with manual logic', isCorrect: false },
                { content: 'BigQuery only', isCorrect: false },
            ],
        },
        {
            content: 'What is the best practice for Bigtable schema design for a chat application?',
            explanation: 'Use a composite row key like "user#channel#reverse_timestamp" to support efficient range scans for recent messages.',
            answers: [
                { content: 'Use auto-incrementing IDs', isCorrect: false },
                { content: 'Composite row key (e.g., user#channel#reverse_timestamp) for efficient range scans', isCorrect: true },
                { content: 'Store all messages in a single row', isCorrect: false },
                { content: 'Use random row keys', isCorrect: false },
            ],
        },
        {
            content: 'Which Google Cloud service helps you create and manage data access policies across your data lake?',
            explanation: 'Dataplex provides centralized data governance including access policies, data quality, and security across distributed data.',
            answers: [
                { content: 'Cloud IAM only', isCorrect: false },
                { content: 'Dataplex', isCorrect: true },
                { content: 'Cloud Monitoring', isCorrect: false },
                { content: 'Cloud Logging', isCorrect: false },
            ],
        },
        {
            content: 'You need to implement a data pipeline that handles both real-time and historical data. Which approach is best?',
            explanation: 'Kappa architecture using Dataflow to process both real-time and historical data through a single streaming pipeline.',
            answers: [
                { content: 'Two completely separate pipelines', isCorrect: false },
                { content: 'Kappa architecture with Dataflow processing both streams using the same logic', isCorrect: true },
                { content: 'Only batch processing', isCorrect: false },
                { content: 'Only real-time processing', isCorrect: false },
            ],
        },
        {
            content: 'What is the recommended approach for testing data pipelines?',
            explanation: 'Unit tests for transforms, integration tests with sample data, and end-to-end tests in staging environments.',
            answers: [
                { content: 'No testing needed', isCorrect: false },
                { content: 'Unit tests for transforms + integration tests + end-to-end tests in staging', isCorrect: true },
                { content: 'Only test in production', isCorrect: false },
                { content: 'Manual inspection of output', isCorrect: false },
            ],
        },
        {
            content: 'Which feature allows BigQuery to access Cloud Spanner data without copying it?',
            explanation: 'BigQuery federated queries for Cloud Spanner allow querying Spanner data directly from BigQuery.',
            answers: [
                { content: 'Data Transfer Service', isCorrect: false },
                { content: 'Federated queries for Cloud Spanner', isCorrect: true },
                { content: 'BigQuery ML', isCorrect: false },
                { content: 'BigQuery BI Engine', isCorrect: false },
            ],
        },
        {
            content: 'You are designing a data pipeline for GDPR compliance. What must you implement?',
            explanation: 'GDPR requires data minimization, right to erasure, consent management, and data subject access requests in data pipelines.',
            answers: [
                { content: 'No special requirements', isCorrect: false },
                { content: 'Data minimization, right to erasure (deletion capabilities), and consent tracking', isCorrect: true },
                { content: 'Only encryption', isCorrect: false },
                { content: 'Keep all data indefinitely', isCorrect: false },
            ],
        },
        {
            content: 'Which tool provides serverless interactive SQL analysis on data in Cloud Storage?',
            explanation: 'BigLake enables serverless interactive SQL queries directly on data stored in Cloud Storage.',
            answers: [
                { content: 'Dataproc', isCorrect: false },
                { content: 'BigLake with BigQuery', isCorrect: true },
                { content: 'Cloud Functions', isCorrect: false },
                { content: 'Cloud Shell', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of Dataflow GPU support?',
            explanation: 'GPU support in Dataflow enables running ML inference and other GPU-accelerated workloads within data pipelines.',
            answers: [
                { content: 'Faster data storage', isCorrect: false },
                { content: 'Running ML inference and GPU-accelerated transforms within pipelines', isCorrect: true },
                { content: 'Better networking', isCorrect: false },
                { content: 'Visualizing data', isCorrect: false },
            ],
        },
        {
            content: 'Which approach should you use to implement data democratization in your organization?',
            explanation: 'Data Catalog for discovery, column-level security for access control, and self-service analytics tools democratize data access.',
            answers: [
                { content: 'Restrict all data access', isCorrect: false },
                { content: 'Data Catalog + column/row-level security + self-service tools (Looker/BigQuery)', isCorrect: true },
                { content: 'Send data via email', isCorrect: false },
                { content: 'No governance needed', isCorrect: false },
            ],
        },
        {
            content: 'What is the difference between Pub/Sub push and pull subscriptions?',
            explanation: 'Pull: subscribers poll for messages. Push: Pub/Sub delivers messages to a subscriber endpoint (HTTP/HTTPS).',
            answers: [
                { content: 'They are identical', isCorrect: false },
                { content: 'Pull: subscriber polls for messages; Push: Pub/Sub delivers to an HTTP endpoint', isCorrect: true },
                { content: 'Push is always faster', isCorrect: false },
                { content: 'Pull is deprecated', isCorrect: false },
            ],
        },
        {
            content: 'You need to audit all access to sensitive BigQuery datasets. Which logging should you enable?',
            explanation: 'Data Access audit logs must be explicitly enabled for BigQuery to track who accessed or modified data.',
            answers: [
                { content: 'Admin Activity logs only', isCorrect: false },
                { content: 'Data Access audit logs for BigQuery', isCorrect: true },
                { content: 'VPC Flow Logs', isCorrect: false },
                { content: 'Cloud Monitoring', isCorrect: false },
            ],
        },
        {
            content: 'Which technique reduces BigQuery query costs when you only need a subset of columns?',
            explanation: 'BigQuery\'s columnar storage charges based on columns scanned. Selecting only needed columns (SELECT specific_columns) reduces cost.',
            answers: [
                { content: 'SELECT * is most efficient', isCorrect: false },
                { content: 'Select only needed columns to reduce bytes scanned', isCorrect: true },
                { content: 'Use more tables', isCorrect: false },
                { content: 'Costs are the same regardless', isCorrect: false },
            ],
        },
        {
            content: 'What is the recommended approach for implementing a lakehouse architecture on Google Cloud?',
            explanation: 'BigLake combines the flexibility of data lakes (Cloud Storage) with the performance and governance of data warehouses (BigQuery).',
            answers: [
                { content: 'Use only Cloud Storage', isCorrect: false },
                { content: 'BigLake for unified lakehouse with Cloud Storage + BigQuery', isCorrect: true },
                { content: 'Use only BigQuery', isCorrect: false },
                { content: 'Separate lake and warehouse with no integration', isCorrect: false },
            ],
        },
        {
            content: 'Which service provides managed notebook environments for data exploration and ML development?',
            explanation: 'Vertex AI Workbench (formerly AI Platform Notebooks) provides managed JupyterLab environments for data scientists.',
            answers: [
                { content: 'Cloud Shell', isCorrect: false },
                { content: 'Vertex AI Workbench', isCorrect: true },
                { content: 'Cloud Build', isCorrect: false },
                { content: 'App Engine', isCorrect: false },
            ],
        },
        {
            content: 'You need to implement a data pipeline that handles exactly-once semantics across multiple output sinks. Which pattern should you use?',
            explanation: 'Dataflow with idempotent writes and BigQuery\'s WRITE_DISPOSITION ensures exactly-once output across multiple sinks.',
            answers: [
                { content: 'Write to all sinks simultaneously without consistency', isCorrect: false },
                { content: 'Dataflow with idempotent writes and transactional output patterns', isCorrect: true },
                { content: 'Manual deduplication', isCorrect: false },
                { content: 'Accept duplicate data', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of BigQuery remote functions?',
            explanation: 'Remote functions allow you to call Cloud Functions or Cloud Run from within BigQuery SQL queries for custom processing.',
            answers: [
                { content: 'Accessing remote databases', isCorrect: false },
                { content: 'Invoking Cloud Functions/Cloud Run from BigQuery SQL for custom logic', isCorrect: true },
                { content: 'Remote desktop access', isCorrect: false },
                { content: 'Monitoring remote servers', isCorrect: false },
            ],
        },
        {
            content: 'Which approach should you use to optimize Dataproc costs for intermittent batch workloads?',
            explanation: 'Ephemeral clusters (spin up for each job, tear down after) with data on Cloud Storage and preemptible workers minimize costs.',
            answers: [
                { content: 'Keep clusters running 24/7', isCorrect: false },
                { content: 'Ephemeral clusters with Cloud Storage for data and preemptible workers', isCorrect: true },
                { content: 'Use the largest machine types', isCorrect: false },
                { content: 'Store data on HDFS', isCorrect: false },
            ],
        },
        {
            content: 'What is the best way to share BigQuery datasets securely with external partners?',
            explanation: 'Analytics Hub provides a data exchange marketplace for securely sharing BigQuery datasets with external organizations.',
            answers: [
                { content: 'Make datasets public', isCorrect: false },
                { content: 'Use Analytics Hub for secure, governed data sharing', isCorrect: true },
                { content: 'Export to CSV and email', isCorrect: false },
                { content: 'Share service account keys', isCorrect: false },
            ],
        },
    ],
};
