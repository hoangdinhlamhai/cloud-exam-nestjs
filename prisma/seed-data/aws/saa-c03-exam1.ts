export const saaC03Exam1 = {
    title: 'AWS Solutions Architect Associate SAA-C03 - Đề thi thử 1',
    description:
        'Đề thi thử AWS Solutions Architect Associate SAA-C03. 65 câu hỏi về thiết kế kiến trúc bảo mật, đàn hồi, hiệu năng cao và tối ưu chi phí trên AWS.',
    durationMinutes: 130,
    courseId: 2,
    questions: [
        {
            content: 'Một ứng dụng web cần xử lý traffic tăng đột biến vào cuối tuần. Giải pháp nào đảm bảo high availability và cost-effective nhất?',
            explanation: 'ALB + Auto Scaling Group trên multiple AZs đảm bảo HA và tự động scale theo demand.',
            answers: [
                { content: 'Dùng một EC2 instance lớn nhất', isCorrect: false },
                { content: 'ALB + Auto Scaling Group trên multiple AZs', isCorrect: true },
                { content: 'Chạy nhiều instances cố định', isCorrect: false },
                { content: 'Dùng CloudFront distribution', isCorrect: false },
            ],
        },
        {
            content: 'Company cần lưu trữ files chia sẻ giữa nhiều EC2 instances trên Linux. Giải pháp nào phù hợp nhất?',
            explanation: 'Amazon EFS cung cấp NFS file system có thể mount từ nhiều EC2 instances đồng thời.',
            answers: [
                { content: 'Amazon S3', isCorrect: false },
                { content: 'Amazon EBS Multi-Attach', isCorrect: false },
                { content: 'Amazon EFS', isCorrect: true },
                { content: 'Amazon FSx for Windows', isCorrect: false },
            ],
        },
        {
            content: 'Ứng dụng cần database có khả năng auto-scale read replicas và failover tự động. Giải pháp nào tốt nhất?',
            explanation: 'Amazon Aurora cung cấp auto-scaling read replicas (lên đến 15) và failover tự động trong vài giây.',
            answers: [
                { content: 'Amazon RDS MySQL Multi-AZ', isCorrect: false },
                { content: 'Amazon Aurora', isCorrect: true },
                { content: 'Amazon DynamoDB', isCorrect: false },
                { content: 'Amazon ElastiCache', isCorrect: false },
            ],
        },
        {
            content: 'Giải pháp nào tốt nhất để host static website với low latency toàn cầu?',
            explanation: 'S3 static hosting + CloudFront CDN cho phép truyền tải nội dung tĩnh với latency thấp nhất.',
            answers: [
                { content: 'EC2 instances ở mỗi region', isCorrect: false },
                { content: 'S3 static website hosting + CloudFront', isCorrect: true },
                { content: 'ELB + Auto Scaling', isCorrect: false },
                { content: 'AWS Lightsail', isCorrect: false },
            ],
        },
        {
            content: 'Ứng dụng cần lưu trữ session data với latency dưới 1ms. Giải pháp nào phù hợp?',
            explanation: 'ElastiCache (Redis/Memcached) cung cấp in-memory storage với sub-millisecond latency cho session data.',
            answers: [
                { content: 'Amazon RDS', isCorrect: false },
                { content: 'Amazon DynamoDB', isCorrect: false },
                { content: 'Amazon ElastiCache', isCorrect: true },
                { content: 'Amazon S3', isCorrect: false },
            ],
        },
        {
            content: 'Công ty cần đảm bảo dữ liệu trên S3 được mã hóa at rest. Giải pháp đơn giản nhất?',
            explanation: 'SSE-S3 (Server-Side Encryption with S3 managed keys) là đơn giản nhất, AWS quản lý keys.',
            answers: [
                { content: 'Client-side encryption', isCorrect: false },
                { content: 'SSE-S3 (S3 managed keys)', isCorrect: true },
                { content: 'SSE-KMS', isCorrect: false },
                { content: 'SSE-C', isCorrect: false },
            ],
        },
        {
            content: 'Một microservices application cần loose coupling giữa các components. Dịch vụ nào giúp decouple?',
            explanation: 'Amazon SQS cung cấp message queue giúp decouple microservices, đảm bảo loose coupling.',
            answers: [
                { content: 'Elastic Load Balancing', isCorrect: false },
                { content: 'Amazon SQS', isCorrect: true },
                { content: 'Amazon EC2', isCorrect: false },
                { content: 'Amazon RDS', isCorrect: false },
            ],
        },
        {
            content: 'Ứng dụng cần xử lý orders tuần tự, đảm bảo exactly-once processing. Nên dùng gì?',
            explanation: 'SQS FIFO queue đảm bảo thứ tự tin nhắn (FIFO) và exactly-once processing.',
            answers: [
                { content: 'SQS Standard Queue', isCorrect: false },
                { content: 'SQS FIFO Queue', isCorrect: true },
                { content: 'Amazon SNS', isCorrect: false },
                { content: 'Amazon Kinesis', isCorrect: false },
            ],
        },
        {
            content: 'Giải pháp DR (Disaster Recovery) nào có RTO thấp nhất?',
            explanation: 'Multi-site active/active có RTO gần bằng 0 vì cả hai sites đều active.',
            answers: [
                { content: 'Backup and Restore', isCorrect: false },
                { content: 'Pilot Light', isCorrect: false },
                { content: 'Warm Standby', isCorrect: false },
                { content: 'Multi-site active/active', isCorrect: true },
            ],
        },
        {
            content: 'Company muốn restrict access đến S3 bucket chỉ cho CloudFront. Cách nào đúng?',
            explanation: 'Origin Access Control (OAC) hoặc Origin Access Identity (OAI) restrict S3 access chỉ qua CloudFront.',
            answers: [
                { content: 'Dùng public bucket policy', isCorrect: false },
                { content: 'Origin Access Control (OAC) cho CloudFront', isCorrect: true },
                { content: 'Dùng CORS configuration', isCorrect: false },
                { content: 'Dùng presigned URLs', isCorrect: false },
            ],
        },
        {
            content: 'Ứng dụng cần xử lý real-time streaming data từ IoT sensors. Giải pháp nào phù hợp?',
            explanation: 'Amazon Kinesis Data Streams thu thập và xử lý real-time streaming data từ nhiều producers.',
            answers: [
                { content: 'Amazon SQS', isCorrect: false },
                { content: 'Amazon Kinesis Data Streams', isCorrect: true },
                { content: 'Amazon S3', isCorrect: false },
                { content: 'AWS Batch', isCorrect: false },
            ],
        },
        {
            content: 'Cần setup cross-account access cho S3 bucket. Phương pháp nào best practice?',
            explanation: 'IAM Role với trust policy cho phép cross-account access an toàn hơn sharing credentials.',
            answers: [
                { content: 'Chia sẻ IAM user credentials', isCorrect: false },
                { content: 'IAM Role cross-account access', isCorrect: true },
                { content: 'Bucket policy với public access', isCorrect: false },
                { content: 'VPC Peering', isCorrect: false },
            ],
        },
        {
            content: 'Database cần read performance cao cho frequently accessed data. Giải pháp nào cost-effective?',
            explanation: 'DynamoDB DAX (DynamoDB Accelerator) cung cấp in-memory cache cho DynamoDB queries.',
            answers: [
                { content: 'Tăng DynamoDB RCU', isCorrect: false },
                { content: 'DynamoDB Accelerator (DAX)', isCorrect: true },
                { content: 'Thêm Global Secondary Index', isCorrect: false },
                { content: 'Dùng provisioned throughput', isCorrect: false },
            ],
        },
        {
            content: 'Ứng dụng cần gửi notifications đến nhiều subscribers cùng lúc. Dịch vụ nào phù hợp?',
            explanation: 'Amazon SNS (Simple Notification Service) hỗ trợ pub/sub pattern, gửi đến nhiều subscribers.',
            answers: [
                { content: 'Amazon SQS', isCorrect: false },
                { content: 'Amazon SNS', isCorrect: true },
                { content: 'Amazon EventBridge', isCorrect: false },
                { content: 'AWS Step Functions', isCorrect: false },
            ],
        },
        {
            content: 'Fan-out pattern — gửi message đến nhiều SQS queues cùng lúc. Kiến trúc nào đúng?',
            explanation: 'SNS + SQS fan-out: SNS topic push message đến nhiều SQS queues subscribers.',
            answers: [
                { content: 'Lambda trigger nhiều SQS', isCorrect: false },
                { content: 'SNS topic → nhiều SQS queues', isCorrect: true },
                { content: 'EventBridge → nhiều SQS', isCorrect: false },
                { content: 'SQS → SNS', isCorrect: false },
            ],
        },
        {
            content: 'Web app cần chống SQL Injection và XSS. Layer nào bảo vệ tốt nhất?',
            explanation: 'AWS WAF có thể tạo rules chống SQL injection, XSS, deploy trên ALB/CloudFront.',
            answers: [
                { content: 'Security Groups', isCorrect: false },
                { content: 'AWS WAF trên ALB hoặc CloudFront', isCorrect: true },
                { content: 'Network ACL', isCorrect: false },
                { content: 'AWS Shield Standard', isCorrect: false },
            ],
        },
        {
            content: 'Company muốn migrate on-premises VMware workloads sang AWS. Dịch vụ nào giúp?',
            explanation: 'AWS Application Migration Service (MGN) hỗ trợ lift-and-shift migration bao gồm VMware VMs.',
            answers: [
                { content: 'AWS Snowball', isCorrect: false },
                { content: 'AWS Application Migration Service (MGN)', isCorrect: true },
                { content: 'AWS DataSync', isCorrect: false },
                { content: 'AWS Transfer Family', isCorrect: false },
            ],
        },
        {
            content: 'Ứng dụng cần encrypt data in transit giữa client và ALB. Cách nào đúng?',
            explanation: 'Cấu hình HTTPS listener trên ALB với SSL/TLS certificate từ ACM.',
            answers: [
                { content: 'Dùng Security Groups', isCorrect: false },
                { content: 'HTTPS listener trên ALB với ACM certificate', isCorrect: true },
                { content: 'Dùng VPN connection', isCorrect: false },
                { content: 'Dùng AWS Shield', isCorrect: false },
            ],
        },
        {
            content: 'Application cần store 100TB data, truy cập hiếm (1-2 lần/năm). Storage class nào rẻ nhất?',
            explanation: 'S3 Glacier Deep Archive có chi phí thấp nhất, phù hợp data truy cập 1-2 lần/năm.',
            answers: [
                { content: 'S3 Standard', isCorrect: false },
                { content: 'S3 Standard-IA', isCorrect: false },
                { content: 'S3 Glacier', isCorrect: false },
                { content: 'S3 Glacier Deep Archive', isCorrect: true },
            ],
        },
        {
            content: 'Cần thiết kế VPC với public và private subnets. Web servers ở đâu?',
            explanation: 'Web servers cần internet access nên đặt ở public subnet, databases ở private subnet.',
            answers: [
                { content: 'Private subnet', isCorrect: false },
                { content: 'Public subnet', isCorrect: true },
                { content: 'Không cần subnet', isCorrect: false },
                { content: 'Default VPC', isCorrect: false },
            ],
        },
        {
            content: 'Private subnet instances cần download packages từ internet. Cần component nào?',
            explanation: 'NAT Gateway cho phép private instances truy cập internet (outbound) mà không cho inbound.',
            answers: [
                { content: 'Internet Gateway', isCorrect: false },
                { content: 'NAT Gateway', isCorrect: true },
                { content: 'VPC Endpoint', isCorrect: false },
                { content: 'Transit Gateway', isCorrect: false },
            ],
        },
        {
            content: 'EC2 instances trong private subnet cần truy cập S3 mà không ra internet. Giải pháp?',
            explanation: 'VPC Gateway Endpoint cho S3 cho phép truy cập S3 qua AWS private network, không qua internet.',
            answers: [
                { content: 'NAT Gateway', isCorrect: false },
                { content: 'VPC Gateway Endpoint cho S3', isCorrect: true },
                { content: 'VPN Connection', isCorrect: false },
                { content: 'Internet Gateway', isCorrect: false },
            ],
        },
        {
            content: 'Application cần global database với single-digit millisecond reads ở mọi region. Giải pháp?',
            explanation: 'DynamoDB Global Tables replicate data across regions với single-digit millisecond latency.',
            answers: [
                { content: 'RDS Multi-AZ', isCorrect: false },
                { content: 'DynamoDB Global Tables', isCorrect: true },
                { content: 'Aurora Read Replicas', isCorrect: false },
                { content: 'ElastiCache Global Datastore', isCorrect: false },
            ],
        },
        {
            content: 'Lambda function cần truy cập RDS trong private subnet. Cần setup gì?',
            explanation: 'Lambda cần được configure trong VPC với private subnet và security group phù hợp.',
            answers: [
                { content: 'Đặt RDS trong public subnet', isCorrect: false },
                { content: 'Configure Lambda trong VPC với private subnet', isCorrect: true },
                { content: 'Dùng RDS Proxy ở public', isCorrect: false },
                { content: 'Không cần cấu hình gì', isCorrect: false },
            ],
        },
        {
            content: 'Ứng dụng serverless cần handle 100,000 requests/second. Architecture nào phù hợp?',
            explanation: 'API Gateway + Lambda + DynamoDB là serverless stack có khả năng scale tự động.',
            answers: [
                { content: 'EC2 + RDS', isCorrect: false },
                { content: 'API Gateway + Lambda + DynamoDB', isCorrect: true },
                { content: 'ECS + Aurora', isCorrect: false },
                { content: 'Elastic Beanstalk + RDS', isCorrect: false },
            ],
        },
        {
            content: 'Cần encrypt EBS volumes cho existing EC2 instances. Cách nào đúng?',
            explanation: 'Tạo snapshot → copy snapshot với encryption → tạo encrypted volume từ snapshot.',
            answers: [
                { content: 'Enable encryption trực tiếp trên volume', isCorrect: false },
                { content: 'Snapshot → Copy encrypted → Create volume', isCorrect: true },
                { content: 'Dùng AWS Config', isCorrect: false },
                { content: 'Reinstall OS', isCorrect: false },
            ],
        },
        {
            content: 'Ứng dụng cần process large CSV files upload lên S3. Kiến trúc event-driven nào tốt?',
            explanation: 'S3 Event Notification trigger Lambda function khi có file upload mới.',
            answers: [
                { content: 'EC2 polling S3 liên tục', isCorrect: false },
                { content: 'S3 Event Notification → Lambda', isCorrect: true },
                { content: 'CloudWatch → EC2', isCorrect: false },
                { content: 'SNS → EC2', isCorrect: false },
            ],
        },
        {
            content: 'Company cần centralized logging từ nhiều accounts. Giải pháp nào best practice?',
            explanation: 'CloudTrail Organization trail + centralized S3 bucket trong logging account.',
            answers: [
                { content: 'Mỗi account tự quản lý logs', isCorrect: false },
                { content: 'CloudTrail Organization trail → centralized S3 bucket', isCorrect: true },
                { content: 'Dùng CloudWatch cho mỗi account', isCorrect: false },
                { content: 'Dùng AWS Config', isCorrect: false },
            ],
        },
        {
            content: 'Ứng dụng containerized cần auto-scaling và managed infrastructure. Giải pháp?',
            explanation: 'ECS on Fargate cung cấp serverless container execution với auto-scaling, không cần quản lý EC2.',
            answers: [
                { content: 'ECS on EC2', isCorrect: false },
                { content: 'ECS on Fargate', isCorrect: true },
                { content: 'EC2 với Docker', isCorrect: false },
                { content: 'Elastic Beanstalk', isCorrect: false },
            ],
        },
        {
            content: 'Cần caching layer cho frequently accessed database queries. On-demand scaling. Giải pháp?',
            explanation: 'ElastiCache Redis Serverless cung cấp caching với auto-scaling capacity.',
            answers: [
                { content: 'DynamoDB DAX', isCorrect: false },
                { content: 'ElastiCache for Redis', isCorrect: true },
                { content: 'CloudFront', isCorrect: false },
                { content: 'S3 caching', isCorrect: false },
            ],
        },
        {
            content: 'Multi-region active-active architecture cần global routing. Dịch vụ nào?',
            explanation: 'Route 53 với latency-based routing hoặc geolocation routing cho multi-region setup.',
            answers: [
                { content: 'CloudFront', isCorrect: false },
                { content: 'Route 53 latency-based routing', isCorrect: true },
                { content: 'Global Accelerator', isCorrect: false },
                { content: 'ELB', isCorrect: false },
            ],
        },
        {
            content: 'Cần migrate 50TB data từ on-premises sang S3 trong 1 tuần. Internet 100Mbps. Giải pháp?',
            explanation: 'AWS Snowball Edge phù hợp cho petabyte-scale migration, nhanh hơn transfer qua internet.',
            answers: [
                { content: 'S3 Transfer Acceleration', isCorrect: false },
                { content: 'AWS Snowball Edge', isCorrect: true },
                { content: 'AWS DataSync', isCorrect: false },
                { content: 'Direct Connect', isCorrect: false },
            ],
        },
        {
            content: 'Application Load Balancer có thể route traffic dựa trên điều kiện nào?',
            explanation: 'ALB hỗ trợ path-based, host-based, HTTP header, query string, source IP routing.',
            answers: [
                { content: 'Chỉ round-robin', isCorrect: false },
                { content: 'Path, host, header, query string, source IP', isCorrect: true },
                { content: 'Chỉ IP address', isCorrect: false },
                { content: 'Chỉ port number', isCorrect: false },
            ],
        },
        {
            content: 'RDS database cần read performance tốt hơn. Giải pháp nào không cần thay đổi application code?',
            explanation: 'RDS Read Replicas offload read traffic, application chỉ cần point đến read endpoint.',
            answers: [
                { content: 'Vertical scaling (tăng instance size)', isCorrect: false },
                { content: 'RDS Read Replicas', isCorrect: true },
                { content: 'DynamoDB', isCorrect: false },
                { content: 'ElastiCache', isCorrect: false },
            ],
        },
        {
            content: 'Ứng dụng cần xử lý video transcoding. Workload có thể bị gián đoạn. Instance type nào rẻ nhất?',
            explanation: 'Spot Instances rẻ nhất (đến 90% off), phù hợp cho fault-tolerant workloads như transcoding.',
            answers: [
                { content: 'On-Demand Instances', isCorrect: false },
                { content: 'Spot Instances', isCorrect: true },
                { content: 'Reserved Instances', isCorrect: false },
                { content: 'Dedicated Instances', isCorrect: false },
            ],
        },
        {
            content: 'Launch Template trong EC2 cung cấp gì so với Launch Configuration?',
            explanation: 'Launch Template hỗ trợ versioning, multiple instance types, Spot/On-Demand mix.',
            answers: [
                { content: 'Giống nhau hoàn toàn', isCorrect: false },
                { content: 'Versioning, mixed instances, thêm nhiều features', isCorrect: true },
                { content: 'Launch Config tốt hơn', isCorrect: false },
                { content: 'Launch Template chỉ cho Spot', isCorrect: false },
            ],
        },
        {
            content: 'Cần store Terraform state file với locking. AWS service nào dùng?',
            explanation: 'S3 cho state file storage + DynamoDB table cho state locking.',
            answers: [
                { content: 'EFS + RDS', isCorrect: false },
                { content: 'S3 + DynamoDB (cho locking)', isCorrect: true },
                { content: 'EBS + ElastiCache', isCorrect: false },
                { content: 'S3 only', isCorrect: false },
            ],
        },
        {
            content: 'Ứng dụng cần database với microsecond latency cho gaming leaderboard. Giải pháp?',
            explanation: 'ElastiCache Redis với Sorted Sets cung cấp microsecond latency cho leaderboard operations.',
            answers: [
                { content: 'Amazon RDS', isCorrect: false },
                { content: 'Amazon ElastiCache for Redis', isCorrect: true },
                { content: 'Amazon DynamoDB', isCorrect: false },
                { content: 'Amazon Aurora', isCorrect: false },
            ],
        },
        {
            content: 'Cần auto-scale EC2 instances dựa trên custom metric (queue depth). Cách nào đúng?',
            explanation: 'Tạo CloudWatch custom metric cho queue depth → Target Tracking Scaling Policy.',
            answers: [
                { content: 'Simple Scaling với CPU utilization', isCorrect: false },
                { content: 'Target Tracking với CloudWatch custom metric', isCorrect: true },
                { content: 'Scheduled Scaling', isCorrect: false },
                { content: 'Manual scaling', isCorrect: false },
            ],
        },
        {
            content: 'Company cần compliance requirement: dữ liệu không được rời khỏi EU. Cách đảm bảo?',
            explanation: 'Chọn EU Regions (Frankfurt, Ireland, etc.) và dùng S3 bucket policies restrict region.',
            answers: [
                { content: 'Dùng CloudFront với EU edge locations', isCorrect: false },
                { content: 'Chọn EU Regions và dùng SCPs restrict khác regions', isCorrect: true },
                { content: 'Dùng AWS Outposts tại EU', isCorrect: false },
                { content: 'Dùng VPN từ EU', isCorrect: false },
            ],
        },
        {
            content: 'Cần blue/green deployment cho ECS services. Dịch vụ nào quản lý traffic shifting?',
            explanation: 'AWS CodeDeploy hỗ trợ blue/green deployment cho ECS, shifting traffic dần từ blue sang green.',
            answers: [
                { content: 'AWS CodePipeline', isCorrect: false },
                { content: 'AWS CodeDeploy', isCorrect: true },
                { content: 'AWS CodeBuild', isCorrect: false },
                { content: 'AWS CloudFormation', isCorrect: false },
            ],
        },
        {
            content: 'Aurora Serverless v2 phù hợp cho workload nào?',
            explanation: 'Aurora Serverless v2 phù hợp cho workloads với unpredictable, intermittent, hoặc variable traffic.',
            answers: [
                { content: 'Steady-state workloads 24/7', isCorrect: false },
                { content: 'Variable và unpredictable workloads', isCorrect: true },
                { content: 'Chỉ read-heavy workloads', isCorrect: false },
                { content: 'Chỉ write-heavy workloads', isCorrect: false },
            ],
        },
        {
            content: 'Ứng dụng cần scheduled tasks chạy mỗi 5 phút. Giải pháp serverless?',
            explanation: 'EventBridge scheduled rule trigger Lambda function theo cron expression.',
            answers: [
                { content: 'EC2 với cron job', isCorrect: false },
                { content: 'EventBridge Scheduled Rule → Lambda', isCorrect: true },
                { content: 'SQS Delay Queue', isCorrect: false },
                { content: 'CloudWatch Dashboard', isCorrect: false },
            ],
        },
        {
            content: 'Cần giám sát application-level metrics custom. Dùng gì?',
            explanation: 'CloudWatch Custom Metrics cho phép publish application-specific metrics.',
            answers: [
                { content: 'CloudTrail', isCorrect: false },
                { content: 'CloudWatch Custom Metrics', isCorrect: true },
                { content: 'AWS Config', isCorrect: false },
                { content: 'AWS X-Ray', isCorrect: false },
            ],
        },
        {
            content: 'Cần thiết kế 3-tier architecture. Layers nào?',
            explanation: '3-tier gồm: Presentation (web), Application (logic), Data (database).',
            answers: [
                { content: 'Web, Cache, Queue', isCorrect: false },
                { content: 'Presentation, Application, Data', isCorrect: true },
                { content: 'Frontend, API, Storage', isCorrect: false },
                { content: 'CDN, Compute, Archive', isCorrect: false },
            ],
        },
        {
            content: 'Ứng dụng cần IP-based routing qua TCP/UDP. Load Balancer nào phù hợp?',
            explanation: 'Network Load Balancer hoạt động ở layer 4, hỗ trợ TCP/UDP với static IPs.',
            answers: [
                { content: 'Application Load Balancer', isCorrect: false },
                { content: 'Network Load Balancer', isCorrect: true },
                { content: 'Gateway Load Balancer', isCorrect: false },
                { content: 'Classic Load Balancer', isCorrect: false },
            ],
        },
        {
            content: 'Cần inspect incoming và outgoing traffic cho security. Dùng gì?',
            explanation: 'Gateway Load Balancer cho phép deploy virtual network appliances (firewalls, IDS/IPS).',
            answers: [
                { content: 'Security Groups', isCorrect: false },
                { content: 'Gateway Load Balancer với network appliances', isCorrect: true },
                { content: 'Network ACL', isCorrect: false },
                { content: 'AWS WAF', isCorrect: false },
            ],
        },
        {
            content: 'Cần database cho time-series data (IoT metrics). Giải pháp tốt nhất?',
            explanation: 'Amazon Timestream được thiết kế đặc biệt cho time-series data với auto-scaling.',
            answers: [
                { content: 'Amazon RDS', isCorrect: false },
                { content: 'Amazon Timestream', isCorrect: true },
                { content: 'Amazon DynamoDB', isCorrect: false },
                { content: 'Amazon Redshift', isCorrect: false },
            ],
        },
        {
            content: 'Lambda cold start gây latency cao. Cách giảm?',
            explanation: 'Provisioned Concurrency giữ Lambda instances warm, loại bỏ cold start.',
            answers: [
                { content: 'Tăng memory', isCorrect: false },
                { content: 'Provisioned Concurrency', isCorrect: true },
                { content: 'Tăng timeout', isCorrect: false },
                { content: 'Dùng VPC', isCorrect: false },
            ],
        },
        {
            content: 'Ứng dụng cần strongly consistent reads cho DynamoDB. Cần setting gì?',
            explanation: 'DynamoDB ConsistentRead=true đảm bảo đọc dữ liệu mới nhất (strongly consistent).',
            answers: [
                { content: 'Eventually consistent read (default)', isCorrect: false },
                { content: 'ConsistentRead = true', isCorrect: true },
                { content: 'DynamoDB Streams', isCorrect: false },
                { content: 'Global Secondary Index', isCorrect: false },
            ],
        },
        {
            content: 'Cần backup DynamoDB table với point-in-time recovery. Cách nào?',
            explanation: 'DynamoDB PITR cho phép restore table đến bất kỳ thời điểm nào trong 35 ngày.',
            answers: [
                { content: 'Manual snapshots', isCorrect: false },
                { content: 'DynamoDB Point-in-Time Recovery (PITR)', isCorrect: true },
                { content: 'AWS Backup', isCorrect: false },
                { content: 'DynamoDB Streams', isCorrect: false },
            ],
        },
        {
            content: 'Company muốn enforce tagging standards. Dịch vụ nào giúp?',
            explanation: 'AWS Config rules có thể check tag compliance, kết hợp SCP để enforce.',
            answers: [
                { content: 'AWS CloudFormation', isCorrect: false },
                { content: 'AWS Config rules + Tag Policies', isCorrect: true },
                { content: 'AWS Trusted Advisor', isCorrect: false },
                { content: 'AWS CloudTrail', isCorrect: false },
            ],
        },
        {
            content: 'Cần secure parameter storage cho database connection strings. Dùng gì?',
            explanation: 'AWS Secrets Manager lưu trữ sensitive data, hỗ trợ automatic rotation cho DB credentials.',
            answers: [
                { content: 'Environment variables', isCorrect: false },
                { content: 'AWS Secrets Manager', isCorrect: true },
                { content: 'S3 encrypted bucket', isCorrect: false },
                { content: 'EC2 user data', isCorrect: false },
            ],
        },
        {
            content: 'Ứng dụng cần cross-region disaster recovery cho Aurora. Giải pháp?',
            explanation: 'Aurora Global Database replicate data đến secondary regions với latency dưới 1 giây.',
            answers: [
                { content: 'Aurora Multi-AZ', isCorrect: false },
                { content: 'Aurora Global Database', isCorrect: true },
                { content: 'Aurora Read Replicas trong cùng region', isCorrect: false },
                { content: 'RDS Cross-Region Read Replica', isCorrect: false },
            ],
        },
        {
            content: 'Ứng dụng cần process images sau khi upload lên S3. Architecture event-driven?',
            explanation: 'S3 event notification → SQS queue → Lambda consumer — đảm bảo reliable processing.',
            answers: [
                { content: 'EC2 polling S3', isCorrect: false },
                { content: 'S3 Event → SQS → Lambda', isCorrect: true },
                { content: 'CloudWatch → EC2', isCorrect: false },
                { content: 'S3 → SNS → Email', isCorrect: false },
            ],
        },
        {
            content: 'Cần host WordPress website với high availability. Giải pháp chi phí thấp nhất?',
            explanation: 'Amazon Lightsail cung cấp WordPress blueprint đơn giản, giá cố định, HA với load balancer.',
            answers: [
                { content: 'EC2 + RDS Multi-AZ + ELB', isCorrect: false },
                { content: 'Amazon Lightsail', isCorrect: true },
                { content: 'ECS Fargate + Aurora', isCorrect: false },
                { content: 'Lambda + DynamoDB', isCorrect: false },
            ],
        },
        {
            content: 'CloudFormation stack bị lỗi khi rollback. Error: "Cannot delete, resource in use". Cách xử lý?',
            explanation: 'Dùng retain deletion policy hoặc manually resolve dependencies trước khi retry.',
            answers: [
                { content: 'Xóa stack bằng force', isCorrect: false },
                { content: 'Skip resources hoặc resolve dependencies trước', isCorrect: true },
                { content: 'Tạo stack mới', isCorrect: false },
                { content: 'Contact AWS Support', isCorrect: false },
            ],
        },
        {
            content: 'Cần restrict S3 bucket access dựa trên source IP. Cách nào?',
            explanation: 'S3 Bucket Policy với Condition aws:SourceIp cho phép restrict theo IP ranges.',
            answers: [
                { content: 'Security Groups', isCorrect: false },
                { content: 'S3 Bucket Policy với aws:SourceIp condition', isCorrect: true },
                { content: 'CORS configuration', isCorrect: false },
                { content: 'S3 ACL', isCorrect: false },
            ],
        },
    ],
};
