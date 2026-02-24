export const clfC02Exam1 = {
    title: 'AWS Cloud Practitioner CLF-C02 - Đề thi thử 1',
    description:
        'Đề thi thử AWS Cloud Practitioner CLF-C02 gồm 65 câu hỏi. Bao gồm Cloud Concepts, Security & Compliance, Cloud Technology & Services, Billing & Pricing.',
    durationMinutes: 90,
    courseId: 1,
    questions: [
        {
            content: 'Mô hình trách nhiệm chung (Shared Responsibility Model) của AWS quy định rằng AWS chịu trách nhiệm về phần nào?',
            explanation: 'AWS chịu trách nhiệm "Security OF the Cloud" — bao gồm hạ tầng vật lý, mạng, hypervisor và các cơ sở dữ liệu.',
            answers: [
                { content: 'Cấu hình Security Groups', isCorrect: false },
                { content: 'Bảo mật hạ tầng vật lý của data center', isCorrect: true },
                { content: 'Quản lý IAM users và policies', isCorrect: false },
                { content: 'Mã hóa dữ liệu ứng dụng', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào của AWS cho phép chạy code mà không cần quản lý server?',
            explanation: 'AWS Lambda là dịch vụ serverless compute cho phép chạy code mà không cần provision hay quản lý server.',
            answers: [
                { content: 'Amazon EC2', isCorrect: false },
                { content: 'AWS Lambda', isCorrect: true },
                { content: 'Amazon ECS', isCorrect: false },
                { content: 'AWS Elastic Beanstalk', isCorrect: false },
            ],
        },
        {
            content: 'Amazon S3 thuộc loại storage nào?',
            explanation: 'Amazon S3 là Object Storage, lưu trữ dữ liệu dưới dạng objects trong buckets.',
            answers: [
                { content: 'Block Storage', isCorrect: false },
                { content: 'File Storage', isCorrect: false },
                { content: 'Object Storage', isCorrect: true },
                { content: 'Archive Storage', isCorrect: false },
            ],
        },
        {
            content: 'Công cụ nào giúp ước tính chi phí sử dụng AWS trước khi triển khai?',
            explanation: 'AWS Pricing Calculator giúp ước tính chi phí dịch vụ AWS dựa trên cấu hình và usage patterns.',
            answers: [
                { content: 'AWS Cost Explorer', isCorrect: false },
                { content: 'AWS Pricing Calculator', isCorrect: true },
                { content: 'AWS Budgets', isCorrect: false },
                { content: 'AWS Trusted Advisor', isCorrect: false },
            ],
        },
        {
            content: 'Lợi ích nào KHÔNG phải là lợi ích của cloud computing?',
            explanation: 'Cloud computing giúp giảm chi phí vốn ban đầu, tăng tốc độ và tính linh hoạt, nhưng không đảm bảo loại bỏ hoàn toàn downtime.',
            answers: [
                { content: 'Chuyển từ chi phí vốn sang chi phí vận hành', isCorrect: false },
                { content: 'Tăng tốc độ và sự linh hoạt', isCorrect: false },
                { content: 'Loại bỏ hoàn toàn thời gian downtime', isCorrect: true },
                { content: 'Khả năng mở rộng toàn cầu trong vài phút', isCorrect: false },
            ],
        },
        {
            content: 'AWS Region là gì?',
            explanation: 'AWS Region là một khu vực địa lý riêng biệt có nhiều Availability Zones (AZs) hoạt động độc lập.',
            answers: [
                { content: 'Một data center duy nhất', isCorrect: false },
                { content: 'Một khu vực địa lý có nhiều Availability Zones', isCorrect: true },
                { content: 'Một mạng lưới edge locations', isCorrect: false },
                { content: 'Một virtual private cloud', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào của AWS cung cấp mạng riêng ảo (virtual private cloud)?',
            explanation: 'Amazon VPC cho phép tạo mạng ảo riêng biệt trên AWS cloud.',
            answers: [
                { content: 'AWS Direct Connect', isCorrect: false },
                { content: 'Amazon VPC', isCorrect: true },
                { content: 'Amazon Route 53', isCorrect: false },
                { content: 'AWS Transit Gateway', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào quản lý DNS và routing traffic?',
            explanation: 'Amazon Route 53 là dịch vụ DNS và domain name registration.',
            answers: [
                { content: 'Amazon CloudFront', isCorrect: false },
                { content: 'Amazon Route 53', isCorrect: true },
                { content: 'Elastic Load Balancing', isCorrect: false },
                { content: 'AWS Global Accelerator', isCorrect: false },
            ],
        },
        {
            content: 'IAM Policy dạng nào sau đây cho phép truy cập đầy đủ vào Amazon S3?',
            explanation: 'Action "s3:*" với Resource "*" cho phép truy cập đầy đủ tất cả S3 operations trên tất cả resources.',
            answers: [
                { content: 'Effect: Allow, Action: s3:GetObject, Resource: *', isCorrect: false },
                { content: 'Effect: Allow, Action: s3:*, Resource: *', isCorrect: true },
                { content: 'Effect: Deny, Action: s3:*, Resource: *', isCorrect: false },
                { content: 'Effect: Allow, Action: ec2:*, Resource: *', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào cung cấp content delivery network (CDN) toàn cầu?',
            explanation: 'Amazon CloudFront là CDN giúp phân phối content với độ trễ thấp từ các edge locations trên toàn thế giới.',
            answers: [
                { content: 'Amazon CloudFront', isCorrect: true },
                { content: 'AWS Global Accelerator', isCorrect: false },
                { content: 'Amazon Route 53', isCorrect: false },
                { content: 'AWS Direct Connect', isCorrect: false },
            ],
        },
        {
            content: 'Điểm nào sau đây mô tả đúng Availability Zone (AZ)?',
            explanation: 'Một AZ bao gồm một hoặc nhiều data centers riêng biệt với nguồn điện, mạng và kết nối dự phòng.',
            answers: [
                { content: 'Một edge location phục vụ content caching', isCorrect: false },
                { content: 'Một hoặc nhiều data centers với hạ tầng dự phòng', isCorrect: true },
                { content: 'Toàn bộ khu vực địa lý của AWS', isCorrect: false },
                { content: 'Một virtual private cloud', isCorrect: false },
            ],
        },
        {
            content: 'AWS Well-Architected Framework có bao nhiêu trụ cột (pillars)?',
            explanation: 'AWS Well-Architected Framework có 6 trụ cột: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization và Sustainability.',
            answers: [
                { content: '4', isCorrect: false },
                { content: '5', isCorrect: false },
                { content: '6', isCorrect: true },
                { content: '7', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào giúp theo dõi chi phí AWS và đặt cảnh báo ngân sách?',
            explanation: 'AWS Budgets cho phép thiết lập ngân sách tùy chỉnh và nhận cảnh báo khi chi phí vượt ngưỡng.',
            answers: [
                { content: 'AWS Cost Explorer', isCorrect: false },
                { content: 'AWS Budgets', isCorrect: true },
                { content: 'AWS Pricing Calculator', isCorrect: false },
                { content: 'AWS Billing Dashboard', isCorrect: false },
            ],
        },
        {
            content: 'Amazon RDS hỗ trợ database engine nào sau đây?',
            explanation: 'Amazon RDS hỗ trợ MySQL, PostgreSQL, MariaDB, Oracle, SQL Server và Amazon Aurora.',
            answers: [
                { content: 'MongoDB', isCorrect: false },
                { content: 'PostgreSQL', isCorrect: true },
                { content: 'Cassandra', isCorrect: false },
                { content: 'Redis', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào cung cấp cơ sở dữ liệu NoSQL được quản lý hoàn toàn?',
            explanation: 'Amazon DynamoDB là dịch vụ NoSQL key-value và document database, serverless, fully managed.',
            answers: [
                { content: 'Amazon RDS', isCorrect: false },
                { content: 'Amazon DynamoDB', isCorrect: true },
                { content: 'Amazon Redshift', isCorrect: false },
                { content: 'Amazon Aurora', isCorrect: false },
            ],
        },
        {
            content: 'Multi-Factor Authentication (MFA) nên được kích hoạt cho tài khoản nào đầu tiên?',
            explanation: 'Root account có quyền truy cập đầy đủ nên MFA phải được kích hoạt cho root account trước tiên.',
            answers: [
                { content: 'Tất cả IAM users', isCorrect: false },
                { content: 'Root account', isCorrect: true },
                { content: 'IAM roles', isCorrect: false },
                { content: 'Service accounts', isCorrect: false },
            ],
        },
        {
            content: 'Elastic Load Balancing (ELB) giúp gì?',
            explanation: 'ELB tự động phân phối traffic đến nhiều targets như EC2 instances, containers, IP addresses.',
            answers: [
                { content: 'Tự động phân phối traffic đến nhiều targets', isCorrect: true },
                { content: 'Tự động scale instances', isCorrect: false },
                { content: 'Cache nội dung tĩnh', isCorrect: false },
                { content: 'Quản lý DNS records', isCorrect: false },
            ],
        },
        {
            content: 'Auto Scaling giúp đạt được lợi ích nào của cloud?',
            explanation: 'Auto Scaling cho phép tự động tăng/giảm số lượng resources theo nhu cầu — đây là tính đàn hồi (elasticity).',
            answers: [
                { content: 'Bảo mật nâng cao', isCorrect: false },
                { content: 'Tính đàn hồi (Elasticity)', isCorrect: true },
                { content: 'Giảm độ trễ mạng', isCorrect: false },
                { content: 'Quản lý identity', isCorrect: false },
            ],
        },
        {
            content: 'AWS CloudTrail dùng để làm gì?',
            explanation: 'AWS CloudTrail ghi lại tất cả API calls trong tài khoản AWS cho mục đích audit và compliance.',
            answers: [
                { content: 'Giám sát hiệu suất ứng dụng', isCorrect: false },
                { content: 'Ghi lại API calls cho mục đích audit', isCorrect: true },
                { content: 'Phân phối nội dung tĩnh', isCorrect: false },
                { content: 'Quản lý DNS', isCorrect: false },
            ],
        },
        {
            content: 'Amazon CloudWatch cung cấp tính năng gì?',
            explanation: 'Amazon CloudWatch thu thập metrics, logs, và events để giám sát tài nguyên AWS và ứng dụng.',
            answers: [
                { content: 'Triển khai infrastructure as code', isCorrect: false },
                { content: 'Giám sát metrics và logs của tài nguyên AWS', isCorrect: true },
                { content: 'Quản lý certificates SSL/TLS', isCorrect: false },
                { content: 'Tạo snapshots EBS', isCorrect: false },
            ],
        },
        {
            content: 'Loại EC2 instance nào phù hợp nhất cho workloads cần nhiều bộ nhớ RAM?',
            explanation: 'Memory Optimized instances (như dòng R, X) được thiết kế cho workloads cần xử lý large datasets trong bộ nhớ.',
            answers: [
                { content: 'Compute Optimized', isCorrect: false },
                { content: 'Memory Optimized', isCorrect: true },
                { content: 'Storage Optimized', isCorrect: false },
                { content: 'General Purpose', isCorrect: false },
            ],
        },
        {
            content: 'AWS Support Plan nào cung cấp Technical Account Manager (TAM)?',
            explanation: 'Chỉ Enterprise Support Plan mới có Technical Account Manager (TAM) chuyên trách.',
            answers: [
                { content: 'Basic', isCorrect: false },
                { content: 'Developer', isCorrect: false },
                { content: 'Business', isCorrect: false },
                { content: 'Enterprise', isCorrect: true },
            ],
        },
        {
            content: 'Dịch vụ nào dùng để quản lý encryption keys?',
            explanation: 'AWS KMS (Key Management Service) giúp tạo và quản lý các khóa mã hóa cho dữ liệu.',
            answers: [
                { content: 'AWS Shield', isCorrect: false },
                { content: 'AWS WAF', isCorrect: false },
                { content: 'AWS KMS', isCorrect: true },
                { content: 'Amazon Inspector', isCorrect: false },
            ],
        },
        {
            content: 'S3 Storage Class nào có chi phí lưu trữ thấp nhất?',
            explanation: 'S3 Glacier Deep Archive có chi phí lưu trữ thấp nhất, phù hợp cho dữ liệu lưu trữ dài hạn, hiếm khi truy cập.',
            answers: [
                { content: 'S3 Standard', isCorrect: false },
                { content: 'S3 Standard-IA', isCorrect: false },
                { content: 'S3 Glacier', isCorrect: false },
                { content: 'S3 Glacier Deep Archive', isCorrect: true },
            ],
        },
        {
            content: 'Mô hình pricing nào cho EC2 giúp tiết kiệm chi phí nhiều nhất cho workloads ổn định?',
            explanation: 'Reserved Instances cho phép cam kết 1 hoặc 3 năm để được giảm giá đến 72% so với On-Demand.',
            answers: [
                { content: 'On-Demand', isCorrect: false },
                { content: 'Spot Instances', isCorrect: false },
                { content: 'Reserved Instances', isCorrect: true },
                { content: 'Dedicated Hosts', isCorrect: false },
            ],
        },
        {
            content: 'AWS Trusted Advisor cung cấp khuyến nghị về những lĩnh vực nào?',
            explanation: 'Trusted Advisor kiểm tra và đưa ra khuyến nghị về Cost Optimization, Performance, Security, Fault Tolerance và Service Limits.',
            answers: [
                { content: 'Chỉ chi phí và bảo mật', isCorrect: false },
                { content: 'Cost, Performance, Security, Fault Tolerance, Service Limits', isCorrect: true },
                { content: 'Chỉ hiệu suất và bảo mật', isCorrect: false },
                { content: 'Chỉ service limits', isCorrect: false },
            ],
        },
        {
            content: 'AWS Organizations dùng để làm gì?',
            explanation: 'AWS Organizations giúp quản lý tập trung nhiều AWS accounts, áp dụng policies và consolidated billing.',
            answers: [
                { content: 'Quản lý container workloads', isCorrect: false },
                { content: 'Quản lý tập trung nhiều AWS accounts', isCorrect: true },
                { content: 'Deploy serverless applications', isCorrect: false },
                { content: 'Quản lý database migrations', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào bảo vệ ứng dụng web khỏi các cuộc tấn công phổ biến như SQL injection?',
            explanation: 'AWS WAF (Web Application Firewall) bảo vệ ứng dụng web trước các cuộc tấn công như SQL injection và XSS.',
            answers: [
                { content: 'AWS Shield', isCorrect: false },
                { content: 'AWS WAF', isCorrect: true },
                { content: 'Amazon GuardDuty', isCorrect: false },
                { content: 'AWS Firewall Manager', isCorrect: false },
            ],
        },
        {
            content: 'Amazon EBS (Elastic Block Store) thuộc loại storage nào?',
            explanation: 'Amazon EBS cung cấp block-level storage volumes cho EC2 instances.',
            answers: [
                { content: 'Object Storage', isCorrect: false },
                { content: 'Block Storage', isCorrect: true },
                { content: 'File Storage', isCorrect: false },
                { content: 'Tape Storage', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào cung cấp file storage cho EC2 instances?',
            explanation: 'Amazon EFS (Elastic File System) cung cấp fully managed NFS file system cho EC2 instances.',
            answers: [
                { content: 'Amazon EBS', isCorrect: false },
                { content: 'Amazon S3', isCorrect: false },
                { content: 'Amazon EFS', isCorrect: true },
                { content: 'Amazon FSx', isCorrect: false },
            ],
        },
        {
            content: 'Principle of Least Privilege trong IAM có nghĩa là gì?',
            explanation: 'Nguyên tắc đặc quyền tối thiểu: chỉ cấp quyền cần thiết cho user/role để thực hiện công việc, không hơn.',
            answers: [
                { content: 'Cấp quyền admin cho tất cả users', isCorrect: false },
                { content: 'Chỉ cấp quyền tối thiểu cần thiết', isCorrect: true },
                { content: 'Không sử dụng IAM policies', isCorrect: false },
                { content: 'Dùng root account cho mọi tác vụ', isCorrect: false },
            ],
        },
        {
            content: 'Spot Instances phù hợp cho loại workload nào?',
            explanation: 'Spot Instances có giá rẻ hơn đến 90% nhưng có thể bị thu hồi, phù hợp cho workloads có thể bị gián đoạn.',
            answers: [
                { content: 'Critical production databases', isCorrect: false },
                { content: 'Workloads có thể bị gián đoạn (fault-tolerant)', isCorrect: true },
                { content: 'Real-time transaction processing', isCorrect: false },
                { content: 'Domain name registration', isCorrect: false },
            ],
        },
        {
            content: 'AWS CloudFormation dùng để làm gì?',
            explanation: 'AWS CloudFormation cho phép mô tả và provision AWS infrastructure as code bằng templates.',
            answers: [
                { content: 'Giám sát ứng dụng', isCorrect: false },
                { content: 'Provision infrastructure as code', isCorrect: true },
                { content: 'Quản lý DNS records', isCorrect: false },
                { content: 'Cache nội dung web', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào giúp migrate databases sang AWS?',
            explanation: 'AWS DMS (Database Migration Service) hỗ trợ migrate databases đến AWS một cách dễ dàng và an toàn.',
            answers: [
                { content: 'AWS DataSync', isCorrect: false },
                { content: 'AWS Database Migration Service (DMS)', isCorrect: true },
                { content: 'AWS Snowball', isCorrect: false },
                { content: 'AWS Transfer Family', isCorrect: false },
            ],
        },
        {
            content: 'Amazon SNS là gì?',
            explanation: 'Amazon SNS (Simple Notification Service) là dịch vụ pub/sub messaging để gửi thông báo đến subscribers.',
            answers: [
                { content: 'Dịch vụ queue messaging', isCorrect: false },
                { content: 'Dịch vụ pub/sub messaging', isCorrect: true },
                { content: 'Dịch vụ email marketing', isCorrect: false },
                { content: 'Dịch vụ streaming', isCorrect: false },
            ],
        },
        {
            content: 'Amazon SQS là gì?',
            explanation: 'Amazon SQS (Simple Queue Service) là dịch vụ message queue fully managed giúp decouple microservices.',
            answers: [
                { content: 'Dịch vụ message queue', isCorrect: true },
                { content: 'Dịch vụ pub/sub', isCorrect: false },
                { content: 'Dịch vụ event routing', isCorrect: false },
                { content: 'Dịch vụ workflow orchestration', isCorrect: false },
            ],
        },
        {
            content: 'AWS Shield bảo vệ khỏi loại tấn công nào?',
            explanation: 'AWS Shield cung cấp bảo vệ chống DDoS (Distributed Denial of Service) attacks.',
            answers: [
                { content: 'SQL Injection', isCorrect: false },
                { content: 'Cross-Site Scripting (XSS)', isCorrect: false },
                { content: 'DDoS attacks', isCorrect: true },
                { content: 'Man-in-the-middle attacks', isCorrect: false },
            ],
        },
        {
            content: 'Consolidated Billing trong AWS Organizations mang lại lợi ích gì?',
            explanation: 'Consolidated Billing gộp hóa đơn nhiều accounts, giúp dễ quản lý và có thể nhận volume discounts.',
            answers: [
                { content: 'Tăng cường bảo mật', isCorrect: false },
                { content: 'Gộp hóa đơn và tiết kiệm chi phí qua volume discounts', isCorrect: true },
                { content: 'Tự động scale resources', isCorrect: false },
                { content: 'Triển khai multi-region', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào cung cấp in-memory caching?',
            explanation: 'Amazon ElastiCache hỗ trợ Redis và Memcached để caching dữ liệu trong bộ nhớ.',
            answers: [
                { content: 'Amazon DynamoDB', isCorrect: false },
                { content: 'Amazon ElastiCache', isCorrect: true },
                { content: 'Amazon RDS', isCorrect: false },
                { content: 'Amazon Redshift', isCorrect: false },
            ],
        },
        {
            content: 'AWS Free Tier bao gồm loại nào?',
            explanation: 'AWS Free Tier gồm 3 loại: Always Free, 12 Months Free, và Trials.',
            answers: [
                { content: 'Chỉ 12 Months Free', isCorrect: false },
                { content: 'Always Free, 12 Months Free, và Trials', isCorrect: true },
                { content: 'Chỉ Always Free', isCorrect: false },
                { content: 'Chỉ Trials', isCorrect: false },
            ],
        },
        {
            content: 'Amazon Redshift dùng để làm gì?',
            explanation: 'Amazon Redshift là data warehouse service cho phép phân tích dữ liệu lớn bằng SQL.',
            answers: [
                { content: 'Real-time messaging', isCorrect: false },
                { content: 'Data warehousing và analytics', isCorrect: true },
                { content: 'NoSQL database', isCorrect: false },
                { content: 'File storage', isCorrect: false },
            ],
        },
        {
            content: 'Amazon GuardDuty cung cấp tính năng gì?',
            explanation: 'Amazon GuardDuty là dịch vụ threat detection tự động phân tích CloudTrail, VPC Flow Logs và DNS logs.',
            answers: [
                { content: 'Web application firewall', isCorrect: false },
                { content: 'DDoS protection', isCorrect: false },
                { content: 'Intelligent threat detection', isCorrect: true },
                { content: 'Encryption key management', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào giúp chuyển lượng lớn dữ liệu vật lý sang AWS?',
            explanation: 'AWS Snowball là thiết bị vật lý dùng để transfer petabytes dữ liệu sang AWS.',
            answers: [
                { content: 'AWS Direct Connect', isCorrect: false },
                { content: 'AWS DataSync', isCorrect: false },
                { content: 'AWS Snowball', isCorrect: true },
                { content: 'AWS Transfer Family', isCorrect: false },
            ],
        },
        {
            content: 'Amazon Elastic Beanstalk cung cấp tính năng gì?',
            explanation: 'Elastic Beanstalk tự động xử lý deployment, capacity provisioning, load balancing và monitoring cho ứng dụng.',
            answers: [
                { content: 'Serverless function execution', isCorrect: false },
                { content: 'PaaS — tự động deploy và quản lý applications', isCorrect: true },
                { content: 'Container orchestration', isCorrect: false },
                { content: 'Database management', isCorrect: false },
            ],
        },
        {
            content: 'Service Control Policies (SCPs) trong AWS Organizations dùng để làm gì?',
            explanation: 'SCPs dùng để đặt giới hạn quyền tối đa cho các accounts trong organization.',
            answers: [
                { content: 'Cấp quyền cho IAM users', isCorrect: false },
                { content: 'Đặt giới hạn quyền tối đa cho accounts', isCorrect: true },
                { content: 'Tạo EC2 instances tự động', isCorrect: false },
                { content: 'Quản lý DNS records', isCorrect: false },
            ],
        },
        {
            content: 'Amazon Inspector dùng để làm gì?',
            explanation: 'Amazon Inspector tự động đánh giá bảo mật, tìm kiếm vulnerabilities trong EC2 instances và container images.',
            answers: [
                { content: 'Quản lý SSL certificates', isCorrect: false },
                { content: 'Tự động đánh giá vulnerabilities', isCorrect: true },
                { content: 'Bảo vệ DDoS', isCorrect: false },
                { content: 'Quản lý encryption keys', isCorrect: false },
            ],
        },
        {
            content: 'Edge Location trong AWS dùng cho mục đích gì?',
            explanation: 'Edge Locations được CloudFront sử dụng để cache content gần người dùng, giảm latency.',
            answers: [
                { content: 'Chạy EC2 instances', isCorrect: false },
                { content: 'Cache content cho CloudFront', isCorrect: true },
                { content: 'Lưu trữ S3 objects', isCorrect: false },
                { content: 'Host RDS databases', isCorrect: false },
            ],
        },
        {
            content: 'AWS Config dùng để làm gì?',
            explanation: 'AWS Config theo dõi và ghi lại cấu hình tài nguyên AWS, kiểm tra compliance theo rules.',
            answers: [
                { content: 'Deploy applications', isCorrect: false },
                { content: 'Theo dõi cấu hình tài nguyên và compliance', isCorrect: true },
                { content: 'Gửi notifications', isCorrect: false },
                { content: 'Quản lý source code', isCorrect: false },
            ],
        },
        {
            content: 'Amazon Athena dùng để làm gì?',
            explanation: 'Amazon Athena cho phép truy vấn dữ liệu trên S3 bằng SQL mà không cần setup server hay ETL.',
            answers: [
                { content: 'Real-time data streaming', isCorrect: false },
                { content: 'Truy vấn dữ liệu trên S3 bằng SQL', isCorrect: true },
                { content: 'NoSQL database', isCorrect: false },
                { content: 'Machine learning training', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào giúp quản lý secrets như database passwords?',
            explanation: 'AWS Secrets Manager giúp lưu trữ, rotate và quản lý secrets như database credentials.',
            answers: [
                { content: 'AWS KMS', isCorrect: false },
                { content: 'AWS Secrets Manager', isCorrect: true },
                { content: 'AWS Systems Manager Parameter Store', isCorrect: false },
                { content: 'AWS Certificate Manager', isCorrect: false },
            ],
        },
        {
            content: 'AWS Artifact cung cấp gì?',
            explanation: 'AWS Artifact cung cấp quyền truy cập đến các tài liệu compliance và agreements của AWS.',
            answers: [
                { content: 'CI/CD pipelines', isCorrect: false },
                { content: 'Tài liệu compliance và agreements', isCorrect: true },
                { content: 'Container images', isCorrect: false },
                { content: 'Machine learning models', isCorrect: false },
            ],
        },
        {
            content: 'AWS Personal Health Dashboard cung cấp thông tin gì?',
            explanation: 'Personal Health Dashboard thông báo về các sự kiện AWS có thể ảnh hưởng đến tài nguyên của bạn.',
            answers: [
                { content: 'Chi phí hàng tháng', isCorrect: false },
                { content: 'Các sự kiện ảnh hưởng đến tài nguyên của bạn', isCorrect: true },
                { content: 'Security vulnerabilities', isCorrect: false },
                { content: 'Performance metrics', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào hỗ trợ machine learning mà không cần kinh nghiệm ML?',
            explanation: 'Amazon SageMaker giúp build, train và deploy ML models, nhưng Amazon Rekognition, Comprehend, Translate là các AI services pre-built không cần kiến thức ML.',
            answers: [
                { content: 'Amazon SageMaker', isCorrect: false },
                { content: 'Amazon Rekognition', isCorrect: true },
                { content: 'AWS Glue', isCorrect: false },
                { content: 'Amazon EMR', isCorrect: false },
            ],
        },
        {
            content: 'Amazon Aurora có gì đặc biệt so với RDS thông thường?',
            explanation: 'Aurora tương thích MySQL/PostgreSQL nhưng hiệu suất gấp 5x MySQL và 3x PostgreSQL với giá cả hợp lý.',
            answers: [
                { content: 'Chỉ hỗ trợ NoSQL', isCorrect: false },
                { content: 'Hiệu suất gấp nhiều lần MySQL/PostgreSQL thông thường', isCorrect: true },
                { content: 'Miễn phí hoàn toàn', isCorrect: false },
                { content: 'Chỉ chạy on-premises', isCorrect: false },
            ],
        },
        {
            content: 'AWS Direct Connect cung cấp gì?',
            explanation: 'AWS Direct Connect tạo kết nối mạng chuyên dụng từ on-premises đến AWS, ổn định hơn internet.',
            answers: [
                { content: 'VPN qua internet', isCorrect: false },
                { content: 'Kết nối mạng chuyên dụng từ on-premises đến AWS', isCorrect: true },
                { content: 'CDN toàn cầu', isCorrect: false },
                { content: 'DNS management', isCorrect: false },
            ],
        },
        {
            content: 'Security Group trong AWS hoạt động ở mức nào?',
            explanation: 'Security Group hoạt động ở mức instance, kiểm soát inbound và outbound traffic cho EC2 instances.',
            answers: [
                { content: 'Mức subnet', isCorrect: false },
                { content: 'Mức instance', isCorrect: true },
                { content: 'Mức VPC', isCorrect: false },
                { content: 'Mức Region', isCorrect: false },
            ],
        },
        {
            content: 'Network ACL hoạt động ở mức nào?',
            explanation: 'Network ACL (NACL) hoạt động ở mức subnet, kiểm soát traffic vào và ra khỏi subnet.',
            answers: [
                { content: 'Mức instance', isCorrect: false },
                { content: 'Mức subnet', isCorrect: true },
                { content: 'Mức VPC', isCorrect: false },
                { content: 'Mức Region', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào giúp chạy containers trên AWS?',
            explanation: 'Amazon ECS (Elastic Container Service) và EKS (Elastic Kubernetes Service) giúp chạy containers trên AWS.',
            answers: [
                { content: 'AWS Lambda', isCorrect: false },
                { content: 'Amazon ECS', isCorrect: true },
                { content: 'Amazon EC2 Auto Scaling', isCorrect: false },
                { content: 'AWS Elastic Beanstalk', isCorrect: false },
            ],
        },
        {
            content: 'AWS Fargate cung cấp gì?',
            explanation: 'AWS Fargate là serverless compute engine cho containers — không cần quản lý underlying EC2 instances.',
            answers: [
                { content: 'Serverless compute cho containers', isCorrect: true },
                { content: 'Virtual machines', isCorrect: false },
                { content: 'Object storage', isCorrect: false },
                { content: 'Database service', isCorrect: false },
            ],
        },
        {
            content: 'Amazon Kinesis dùng để làm gì?',
            explanation: 'Amazon Kinesis cho phép thu thập, xử lý và phân tích real-time streaming data.',
            answers: [
                { content: 'Batch data processing', isCorrect: false },
                { content: 'Real-time streaming data processing', isCorrect: true },
                { content: 'Static website hosting', isCorrect: false },
                { content: 'Email sending', isCorrect: false },
            ],
        },
        {
            content: 'Pay-as-you-go pricing model của AWS có nghĩa là gì?',
            explanation: 'Pay-as-you-go nghĩa là chỉ trả tiền cho tài nguyên thực sự sử dụng, không cần cam kết trước.',
            answers: [
                { content: 'Trả tiền trước cho 1 năm', isCorrect: false },
                { content: 'Chỉ trả tiền cho tài nguyên thực sự sử dụng', isCorrect: true },
                { content: 'Trả cố định hàng tháng', isCorrect: false },
                { content: 'Miễn phí tất cả dịch vụ', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào giúp phát hiện và phân loại dữ liệu nhạy cảm trong S3?',
            explanation: 'Amazon Macie sử dụng ML để tự động phát hiện và bảo vệ dữ liệu nhạy cảm (PII) trong S3.',
            answers: [
                { content: 'Amazon GuardDuty', isCorrect: false },
                { content: 'Amazon Macie', isCorrect: true },
                { content: 'Amazon Inspector', isCorrect: false },
                { content: 'AWS Config', isCorrect: false },
            ],
        },
        {
            content: 'IAM Role khác IAM User ở điểm nào?',
            explanation: 'IAM Role không có long-term credentials, được assume bởi users, services hoặc accounts cần quyền tạm thời.',
            answers: [
                { content: 'Role có password, User thì không', isCorrect: false },
                { content: 'Role không có long-term credentials, dùng cho quyền tạm thời', isCorrect: true },
                { content: 'Role chỉ dùng cho con người', isCorrect: false },
                { content: 'Không có sự khác biệt', isCorrect: false },
            ],
        },
    ],
};
