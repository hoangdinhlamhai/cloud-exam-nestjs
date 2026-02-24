export const pdeExam1 = {
    title: 'Google Cloud Professional Data Engineer - Practice Test 1',
    description: 'Professional Data Engineer practice test with 50 questions on BigQuery, Dataflow, Dataproc, Pub/Sub, and data pipeline design.',
    durationMinutes: 120,
    courseId: 15,
    questions: [
        {
            content: 'Which BigQuery feature allows you to query data stored in external sources like Cloud Storage without loading it?',
            explanation: 'External tables (federated queries) allow BigQuery to query data directly in Cloud Storage, Cloud SQL, or Bigtable without importing it.',
            answers: [
                { content: 'Materialized views', isCorrect: false },
                { content: 'External tables (federated queries)', isCorrect: true },
                { content: 'Partitioned tables', isCorrect: false },
                { content: 'Clustered tables', isCorrect: false },
            ],
        },
        {
            content: 'You need to process data as it arrives in real-time with exactly-once semantics. Which service should you use?',
            explanation: 'Dataflow (based on Apache Beam) provides exactly-once processing for both batch and streaming data pipelines.',
            answers: [
                { content: 'Dataproc', isCorrect: false },
                { content: 'Dataflow', isCorrect: true },
                { content: 'Cloud Functions', isCorrect: false },
                { content: 'Compute Engine custom code', isCorrect: false },
            ],
        },
        {
            content: 'What is the best BigQuery storage optimization for a large table frequently queried by date?',
            explanation: 'Partitioning by date allows BigQuery to scan only relevant partitions, significantly reducing costs and improving performance.',
            answers: [
                { content: 'No optimization needed', isCorrect: false },
                { content: 'Time-based partitioning', isCorrect: true },
                { content: 'Store as CSV in Cloud Storage', isCorrect: false },
                { content: 'Use views instead', isCorrect: false },
            ],
        },
        {
            content: 'Which service is best for running existing Apache Spark and Hadoop jobs on Google Cloud?',
            explanation: 'Dataproc provides managed Spark and Hadoop clusters, making it the most compatible option for existing Spark/Hadoop workloads.',
            answers: [
                { content: 'Dataflow', isCorrect: false },
                { content: 'Dataproc', isCorrect: true },
                { content: 'BigQuery', isCorrect: false },
                { content: 'Cloud Functions', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of Pub/Sub in a data pipeline?',
            explanation: 'Pub/Sub provides reliable, scalable, asynchronous messaging that decouples data producers from consumers in a pipeline.',
            answers: [
                { content: 'Data storage', isCorrect: false },
                { content: 'Asynchronous messaging to decouple producers and consumers', isCorrect: true },
                { content: 'Data visualization', isCorrect: false },
                { content: 'User authentication', isCorrect: false },
            ],
        },
        {
            content: 'Which BigQuery feature combines partitioning with sorting data within partitions for optimal query performance?',
            explanation: 'Clustering sorts data within partitions based on specified columns, improving filter and aggregation performance.',
            answers: [
                { content: 'Materialized views', isCorrect: false },
                { content: 'Clustering', isCorrect: true },
                { content: 'Wildcard tables', isCorrect: false },
                { content: 'Table snapshots', isCorrect: false },
            ],
        },
        {
            content: 'You need to build an ETL pipeline that reads from Cloud SQL, transforms data, and loads into BigQuery. Which service is most appropriate?',
            explanation: 'Dataflow provides a unified model for ETL with connectors for Cloud SQL and BigQuery, supporting complex transformations.',
            answers: [
                { content: 'Cloud Functions', isCorrect: false },
                { content: 'Dataflow', isCorrect: true },
                { content: 'gsutil', isCorrect: false },
                { content: 'Cloud Storage Transfer', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of BigQuery BI Engine?',
            explanation: 'BI Engine is an in-memory analysis service that provides sub-second query response time for dashboards and reports.',
            answers: [
                { content: 'Data storage', isCorrect: false },
                { content: 'In-memory acceleration for fast, interactive analysis', isCorrect: true },
                { content: 'Data encryption', isCorrect: false },
                { content: 'User management', isCorrect: false },
            ],
        },
        {
            content: 'Which Cloud Storage class is most appropriate for data accessed less than once a month?',
            explanation: 'Coldline storage offers low-cost storage for infrequently accessed data with a minimum 90-day storage duration.',
            answers: [
                { content: 'Standard', isCorrect: false },
                { content: 'Coldline', isCorrect: true },
                { content: 'Nearline', isCorrect: false },
                { content: 'Multi-Regional', isCorrect: false },
            ],
        },
        {
            content: 'What is the difference between batch and streaming mode in Dataflow?',
            explanation: 'Batch processes bounded datasets as a whole; streaming processes unbounded data continuously as it arrives.',
            answers: [
                { content: 'They are identical', isCorrect: false },
                { content: 'Batch processes bounded data; streaming processes unbounded, continuous data', isCorrect: true },
                { content: 'Batch is always faster', isCorrect: false },
                { content: 'Streaming only works with BigQuery', isCorrect: false },
            ],
        },
        {
            content: 'You need to schedule and orchestrate complex data workflows with dependencies. Which service should you use?',
            explanation: 'Cloud Composer (managed Apache Airflow) orchestrates complex data workflows with dependency management and scheduling.',
            answers: [
                { content: 'Cloud Scheduler', isCorrect: false },
                { content: 'Cloud Composer', isCorrect: true },
                { content: 'Cloud Tasks', isCorrect: false },
                { content: 'Cloud Build', isCorrect: false },
            ],
        },
        {
            content: 'What is BigQuery\'s pricing model for queries?',
            explanation: 'BigQuery offers two pricing models: on-demand (per TB scanned) and flat-rate (reserved slots for predictable pricing).',
            answers: [
                { content: 'Free for all queries', isCorrect: false },
                { content: 'On-demand (per TB scanned) or flat-rate (reserved slots)', isCorrect: true },
                { content: 'Per row returned', isCorrect: false },
                { content: 'Fixed monthly fee only', isCorrect: false },
            ],
        },
        {
            content: 'Which database is best for storing time-series data from millions of IoT sensors with consistent low-latency reads?',
            explanation: 'Bigtable is designed for high-throughput, low-latency time-series workloads with consistent sub-10ms response times.',
            answers: [
                { content: 'Cloud SQL', isCorrect: false },
                { content: 'Bigtable', isCorrect: true },
                { content: 'Firestore', isCorrect: false },
                { content: 'BigQuery', isCorrect: false },
            ],
        },
        {
            content: 'What is a Dataflow window?',
            explanation: 'Windows divide unbounded streaming data into finite chunks based on time (fixed, sliding, or session windows) for aggregation.',
            answers: [
                { content: 'A UI display element', isCorrect: false },
                { content: 'A mechanism to group streaming data into finite time-based chunks', isCorrect: true },
                { content: 'A storage partition', isCorrect: false },
                { content: 'A network segment', isCorrect: false },
            ],
        },
        {
            content: 'You want to apply column-level security in BigQuery. Which feature should you use?',
            explanation: 'BigQuery column-level security uses policy tags to restrict access to specific columns based on user roles.',
            answers: [
                { content: 'Table-level IAM', isCorrect: false },
                { content: 'Column-level security with policy tags', isCorrect: true },
                { content: 'VPC Service Controls', isCorrect: false },
                { content: 'Row-level security', isCorrect: false },
            ],
        },
        {
            content: 'Which service provides serverless change data capture from databases?',
            explanation: 'Datastream provides serverless CDC and replication from MySQL, PostgreSQL, Oracle to BigQuery, Cloud Storage, or GCS.',
            answers: [
                { content: 'Pub/Sub', isCorrect: false },
                { content: 'Datastream', isCorrect: true },
                { content: 'Cloud Functions', isCorrect: false },
                { content: 'Dataproc', isCorrect: false },
            ],
        },
        {
            content: 'What is the benefit of using BigQuery materialized views?',
            explanation: 'Materialized views pre-compute query results, improving performance and reducing costs for repeated partial-query patterns.',
            answers: [
                { content: 'They replace regular tables', isCorrect: false },
                { content: 'Pre-computed results for faster, cheaper repeated queries', isCorrect: true },
                { content: 'They are required for all queries', isCorrect: false },
                { content: 'They store raw data more efficiently', isCorrect: false },
            ],
        },
        {
            content: 'You need to de-identify sensitive patient data before analysis. Which service should you use?',
            explanation: 'Cloud DLP provides de-identification techniques including masking, tokenization, and generalization for sensitive data.',
            answers: [
                { content: 'Cloud IAM', isCorrect: false },
                { content: 'Cloud DLP', isCorrect: true },
                { content: 'Cloud Armor', isCorrect: false },
                { content: 'Cloud KMS', isCorrect: false },
            ],
        },
        {
            content: 'What is the recommended Bigtable row key design for time-series data?',
            explanation: 'Reversing the timestamp or using a hash prefix prevents hotspotting. Monotonically increasing keys cause write hotspots.',
            answers: [
                { content: 'Sequential timestamps as row keys', isCorrect: false },
                { content: 'Salted or reversed timestamp with entity prefix to avoid hotspotting', isCorrect: true },
                { content: 'Random UUIDs', isCorrect: false },
                { content: 'Single row key for all data', isCorrect: false },
            ],
        },
        {
            content: 'Which Dataflow feature allows you to handle late-arriving data in streaming pipelines?',
            explanation: 'Watermarks and allowed lateness define how long to wait for late data. Triggers determine when to emit results.',
            answers: [
                { content: 'Batch processing', isCorrect: false },
                { content: 'Watermarks, triggers, and allowed lateness', isCorrect: true },
                { content: 'Schema migration', isCorrect: false },
                { content: 'Data partitioning', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of BigQuery Data Transfer Service?',
            explanation: 'Data Transfer Service automates data movement from SaaS applications (Google Ads, etc.), Amazon S3, and Cloud Storage to BigQuery.',
            answers: [
                { content: 'Moving data between BigQuery datasets', isCorrect: false },
                { content: 'Automating data ingestion from external sources to BigQuery', isCorrect: true },
                { content: 'Exporting data from BigQuery', isCorrect: false },
                { content: 'Backing up BigQuery tables', isCorrect: false },
            ],
        },
        {
            content: 'You need to perform ad-hoc analysis on semi-structured JSON data. Which approach is most efficient?',
            explanation: 'BigQuery natively supports querying JSON/STRUCT/ARRAY types, allowing direct analysis of semi-structured data.',
            answers: [
                { content: 'Load into Cloud SQL', isCorrect: false },
                { content: 'Query directly in BigQuery using JSON/STRUCT functions', isCorrect: true },
                { content: 'Convert to CSV first', isCorrect: false },
                { content: 'Use Cloud Functions to parse', isCorrect: false },
            ],
        },
        {
            content: 'Which Dataproc feature automatically chooses optimal cluster size and autoscales?',
            explanation: 'Dataproc autoscaling policies automatically add or remove worker nodes based on YARN metrics.',
            answers: [
                { content: 'Manual scaling only', isCorrect: false },
                { content: 'Autoscaling policies based on YARN metrics', isCorrect: true },
                { content: 'Fixed cluster size', isCorrect: false },
                { content: 'Cloud Monitoring alerts', isCorrect: false },
            ],
        },
        {
            content: 'What is the best practice for loading data into BigQuery for best query performance?',
            explanation: 'Using Avro or Parquet columnar formats with partitioning and clustering provides optimal load and query performance.',
            answers: [
                { content: 'CSV without compression', isCorrect: false },
                { content: 'Avro or Parquet with partitioning and clustering', isCorrect: true },
                { content: 'One large JSON file', isCorrect: false },
                { content: 'XML format', isCorrect: false },
            ],
        },
        {
            content: 'Which Google Cloud service is best for building real-time dashboards from streaming data?',
            explanation: 'Looker (or Looker Studio) connected to BigQuery can display real-time streaming data through dashboards.',
            answers: [
                { content: 'Cloud Functions', isCorrect: false },
                { content: 'Looker / Looker Studio connected to BigQuery', isCorrect: true },
                { content: 'Cloud Shell', isCorrect: false },
                { content: 'Compute Engine', isCorrect: false },
            ],
        },
        {
            content: 'What is Apache Beam?',
            explanation: 'Apache Beam is an open-source unified programming model for batch and streaming data processing, used by Dataflow.',
            answers: [
                { content: 'A database engine', isCorrect: false },
                { content: 'A unified programming model for batch and streaming data processing', isCorrect: true },
                { content: 'A machine learning framework', isCorrect: false },
                { content: 'A visualization tool', isCorrect: false },
            ],
        },
        {
            content: 'You need to implement row-level security in BigQuery. Which feature should you use?',
            explanation: 'Row-level security policies filter data based on the querying user, showing different subsets of data to different users.',
            answers: [
                { content: 'Column-level security', isCorrect: false },
                { content: 'Row-level security policies', isCorrect: true },
                { content: 'Table-level IAM only', isCorrect: false },
                { content: 'VPC Service Controls', isCorrect: false },
            ],
        },
        {
            content: 'Which metric is most important for monitoring a Dataflow streaming pipeline?',
            explanation: 'System lag (data freshness) indicates how current the processed data is. High lag means the pipeline is falling behind.',
            answers: [
                { content: 'Network bandwidth', isCorrect: false },
                { content: 'System lag (data freshness)', isCorrect: true },
                { content: 'Disk usage', isCorrect: false },
                { content: 'Number of files in Cloud Storage', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of Dataplex?',
            explanation: 'Dataplex is a data fabric that helps you manage, monitor, and govern distributed data lakes and data warehouses.',
            answers: [
                { content: 'A compute service', isCorrect: false },
                { content: 'A data management and governance service for distributed data', isCorrect: true },
                { content: 'A networking service', isCorrect: false },
                { content: 'An authentication service', isCorrect: false },
            ],
        },
        {
            content: 'Which approach should you use to join streaming data with slowly changing dimension data?',
            explanation: 'Side inputs in Dataflow allow you to join streaming data with slowly changing reference data that is periodically refreshed.',
            answers: [
                { content: 'Full table scan every record', isCorrect: false },
                { content: 'Side inputs with periodic refresh in Dataflow', isCorrect: true },
                { content: 'Manual joins in Cloud Functions', isCorrect: false },
                { content: 'Ignore dimension data', isCorrect: false },
            ],
        },
        {
            content: 'What is BigQuery ML?',
            explanation: 'BigQuery ML enables users to create and execute ML models using SQL queries within BigQuery.',
            answers: [
                { content: 'A separate ML service', isCorrect: false },
                { content: 'ML model creation and training using SQL within BigQuery', isCorrect: true },
                { content: 'A data visualization tool', isCorrect: false },
                { content: 'A data loading tool', isCorrect: false },
            ],
        },
        {
            content: 'You need to migrate a Hadoop on-premises cluster to Google Cloud. What is the recommended approach?',
            explanation: 'Migrate to ephemeral Dataproc clusters with data on Cloud Storage, separating compute from storage.',
            answers: [
                { content: 'Lift-and-shift HDFS to Compute Engine', isCorrect: false },
                { content: 'Move data to Cloud Storage and use ephemeral Dataproc clusters', isCorrect: true },
                { content: 'Keep Hadoop on-premises', isCorrect: false },
                { content: 'Use Cloud SQL', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of Data Catalog in Google Cloud?',
            explanation: 'Data Catalog is a fully managed metadata management service for discovering, managing, and understanding your data assets.',
            answers: [
                { content: 'Data storage', isCorrect: false },
                { content: 'Metadata management and data discovery', isCorrect: true },
                { content: 'Data processing', isCorrect: false },
                { content: 'Network monitoring', isCorrect: false },
            ],
        },
        {
            content: 'Which Pub/Sub feature allows you to replay previously acknowledged messages?',
            explanation: 'Pub/Sub Seek allows you to replay messages from a specific point in time or a snapshot, useful for reprocessing data.',
            answers: [
                { content: 'Message ordering', isCorrect: false },
                { content: 'Seek (to timestamp or snapshot)', isCorrect: true },
                { content: 'Dead-letter topics', isCorrect: false },
                { content: 'Message filtering', isCorrect: false },
            ],
        },
        {
            content: 'What is the difference between Dataflow and Dataproc?',
            explanation: 'Dataflow is serverless and based on Apache Beam; Dataproc provides managed Hadoop/Spark clusters for existing workloads.',
            answers: [
                { content: 'They are identical', isCorrect: false },
                { content: 'Dataflow is serverless (Apache Beam); Dataproc is managed Hadoop/Spark', isCorrect: true },
                { content: 'Dataproc is serverless', isCorrect: false },
                { content: 'Dataflow only supports batch', isCorrect: false },
            ],
        },
        {
            content: 'Which BigQuery feature allows you to control query costs?',
            explanation: 'Custom cost controls include setting maximum bytes billed per query, project-level quotas, and using flat-rate pricing.',
            answers: [
                { content: 'No cost controls available', isCorrect: false },
                { content: 'Maximum bytes billed per query and project-level quotas', isCorrect: true },
                { content: 'Automatic cost optimization', isCorrect: false },
                { content: 'Free tier unlimited queries', isCorrect: false },
            ],
        },
        {
            content: 'You need to implement a Lambda architecture with both batch and real-time layers. Which services should you combine?',
            explanation: 'Dataflow for streaming (speed layer), BigQuery for batch processing (batch layer), and BigQuery for serving merged results.',
            answers: [
                { content: 'Only Cloud SQL', isCorrect: false },
                { content: 'Dataflow (streaming) + BigQuery (batch and serving layer)', isCorrect: true },
                { content: 'Cloud Functions only', isCorrect: false },
                { content: 'Compute Engine only', isCorrect: false },
            ],
        },
        {
            content: 'What is the best practice for BigQuery table partitioning with high-cardinality queries?',
            explanation: 'Combine partitioning (by date/timestamp) with clustering on high-cardinality columns for optimal query performance.',
            answers: [
                { content: 'Only partition, never cluster', isCorrect: false },
                { content: 'Partition by date + cluster by frequently filtered high-cardinality columns', isCorrect: true },
                { content: 'Use separate tables for each value', isCorrect: false },
                { content: 'No optimization needed', isCorrect: false },
            ],
        },
        {
            content: 'Which feature allows Pub/Sub to filter messages so subscribers receive only relevant data?',
            explanation: 'Pub/Sub message filtering allows subscribers to specify filter expressions, receiving only messages matching the criteria.',
            answers: [
                { content: 'Dead-letter topics', isCorrect: false },
                { content: 'Subscription-level message filtering', isCorrect: true },
                { content: 'Topic partitioning', isCorrect: false },
                { content: 'Message ordering', isCorrect: false },
            ],
        },
        {
            content: 'You need to validate data quality in a pipeline. Which approach is recommended?',
            explanation: 'Implement data quality checks using Dataprep, custom Dataflow transforms, or Dataplex data quality tasks.',
            answers: [
                { content: 'Skip validation for performance', isCorrect: false },
                { content: 'Use Dataplex data quality tasks or custom Dataflow validation transforms', isCorrect: true },
                { content: 'Manual visual inspection', isCorrect: false },
                { content: 'Only check at the end', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of BigQuery Omni?',
            explanation: 'BigQuery Omni allows you to run BigQuery analytics on data stored in AWS S3 or Azure Blob Storage without moving the data.',
            answers: [
                { content: 'Multi-region BigQuery storage', isCorrect: false },
                { content: 'Querying data in AWS or Azure storage from BigQuery', isCorrect: true },
                { content: 'BigQuery backup service', isCorrect: false },
                { content: 'BigQuery monitoring tool', isCorrect: false },
            ],
        },
        {
            content: 'Which Dataproc Serverless feature eliminates the need to manage clusters?',
            explanation: 'Dataproc Serverless automatically provisions and manages compute resources, running Spark jobs without cluster management.',
            answers: [
                { content: 'Dataproc on Compute Engine', isCorrect: false },
                { content: 'Dataproc Serverless for Spark', isCorrect: true },
                { content: 'Dataproc on GKE', isCorrect: false },
                { content: 'Standard Dataproc clusters', isCorrect: false },
            ],
        },
        {
            content: 'What is the recommended approach for schema evolution in BigQuery?',
            explanation: 'BigQuery supports adding new columns and relaxing REQUIRED to NULLABLE mode. Use RECORD/STRUCT types for flexible nested schemas.',
            answers: [
                { content: 'Recreate the table for every change', isCorrect: false },
                { content: 'Add new columns and use RECORD types for flexibility', isCorrect: true },
                { content: 'Use only STRING columns', isCorrect: false },
                { content: 'Schema evolution is not supported', isCorrect: false },
            ],
        },
        {
            content: 'You need to implement an ELT pattern instead of ETL. Which approach is best on Google Cloud?',
            explanation: 'Load raw data into BigQuery first (E-L), then transform using BigQuery SQL or dbt (T), leveraging BigQuery\'s processing power.',
            answers: [
                { content: 'Transform everything before loading', isCorrect: false },
                { content: 'Load raw data to BigQuery, then transform using SQL/dbt', isCorrect: true },
                { content: 'Store everything in Cloud Functions', isCorrect: false },
                { content: 'Use Cloud SQL for transformations', isCorrect: false },
            ],
        },
        {
            content: 'Which Bigtable feature improves read performance for frequently accessed data?',
            explanation: 'Bigtable automatically caches frequently accessed data. Additionally, using proper row key design and read-only clusters helps.',
            answers: [
                { content: 'Adding more storage', isCorrect: false },
                { content: 'Proper row key design, read-only replicas, and Bigtable automatic caching', isCorrect: true },
                { content: 'Using larger cells', isCorrect: false },
                { content: 'Storing data as JSON', isCorrect: false },
            ],
        },
        {
            content: 'What is the purpose of a Dataflow template?',
            explanation: 'Dataflow templates allow you to package a pipeline for reuse, enabling non-developers to run parameterized pipelines.',
            answers: [
                { content: 'A UI component', isCorrect: false },
                { content: 'A reusable, parameterized pipeline package for easy execution', isCorrect: true },
                { content: 'A data storage format', isCorrect: false },
                { content: 'A monitoring dashboard', isCorrect: false },
            ],
        },
        {
            content: 'Which BigQuery feature helps you understand query performance and identify bottlenecks?',
            explanation: 'Query Execution Details (INFORMATION_SCHEMA views and stage-level timing) help identify performance bottlenecks.',
            answers: [
                { content: 'Cloud Monitoring only', isCorrect: false },
                { content: 'Query execution plan and INFORMATION_SCHEMA job views', isCorrect: true },
                { content: 'Cloud Logging', isCorrect: false },
                { content: 'BigQuery BI Engine', isCorrect: false },
            ],
        },
    ],
};
