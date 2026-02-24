export const clfC02Exam2 = {
    title: 'AWS Cloud Practitioner CLF-C02 - Đề thi thử 2',
    description:
        'Đề thi thử AWS Cloud Practitioner CLF-C02 số 2. 65 câu hỏi bao quát Cloud Concepts, Security & Compliance, Technology & Services, Billing & Pricing.',
    durationMinutes: 90,
    courseId: 1,
    questions: [
        {
            content: 'Đâu là định nghĩa đúng nhất về Cloud Computing?',
            explanation: 'Cloud computing là việc cung cấp tài nguyên IT theo yêu cầu qua internet với mô hình trả tiền theo sử dụng.',
            answers: [
                { content: 'Lưu trữ dữ liệu trên ổ cứng cục bộ', isCorrect: false },
                { content: 'Cung cấp tài nguyên IT theo yêu cầu qua internet với pay-as-you-go', isCorrect: true },
                { content: 'Thuê máy chủ vật lý đặt tại văn phòng', isCorrect: false },
                { content: 'Sử dụng phần mềm miễn phí trên internet', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào giúp tạo và quản lý SSL/TLS certificates miễn phí?',
            explanation: 'AWS Certificate Manager (ACM) cung cấp SSL/TLS certificates miễn phí cho các dịch vụ AWS.',
            answers: [
                { content: 'AWS KMS', isCorrect: false },
                { content: 'AWS Certificate Manager', isCorrect: true },
                { content: 'AWS Secrets Manager', isCorrect: false },
                { content: 'AWS IAM', isCorrect: false },
            ],
        },
        {
            content: 'Trụ cột nào của Well-Architected Framework tập trung vào khả năng phục hồi sau lỗi?',
            explanation: 'Reliability pillar đảm bảo workload thực hiện đúng chức năng và phục hồi nhanh khi xảy ra lỗi.',
            answers: [
                { content: 'Security', isCorrect: false },
                { content: 'Reliability', isCorrect: true },
                { content: 'Performance Efficiency', isCorrect: false },
                { content: 'Cost Optimization', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào cho phép stream video và audio trực tiếp?',
            explanation: 'Amazon Kinesis Video Streams cho phép stream video từ thiết bị, còn Amazon IVS cho livestreaming.',
            answers: [
                { content: 'Amazon CloudFront', isCorrect: false },
                { content: 'Amazon Kinesis Video Streams', isCorrect: true },
                { content: 'Amazon S3', isCorrect: false },
                { content: 'AWS Elemental MediaLive', isCorrect: false },
            ],
        },
        {
            content: 'Deployment model nào kết hợp cloud và on-premises?',
            explanation: 'Hybrid cloud kết hợp on-premises infrastructure với cloud resources.',
            answers: [
                { content: 'Public Cloud', isCorrect: false },
                { content: 'Private Cloud', isCorrect: false },
                { content: 'Hybrid Cloud', isCorrect: true },
                { content: 'Community Cloud', isCorrect: false },
            ],
        },
        {
            content: 'AWS IAM Identity Center (SSO) cung cấp tính năng gì?',
            explanation: 'IAM Identity Center cho phép single sign-on access đến nhiều AWS accounts và business applications.',
            answers: [
                { content: 'Quản lý EC2 instances', isCorrect: false },
                { content: 'Single sign-on access đến nhiều AWS accounts', isCorrect: true },
                { content: 'Tạo VPC', isCorrect: false },
                { content: 'Deploy Lambda functions', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào phân tích chi phí AWS theo thời gian?',
            explanation: 'AWS Cost Explorer cung cấp giao diện trực quan để phân tích chi phí và usage theo thời gian.',
            answers: [
                { content: 'AWS Budgets', isCorrect: false },
                { content: 'AWS Cost Explorer', isCorrect: true },
                { content: 'AWS Pricing Calculator', isCorrect: false },
                { content: 'AWS Billing Dashboard', isCorrect: false },
            ],
        },
        {
            content: 'Amazon S3 Lifecycle Policies dùng để làm gì?',
            explanation: 'S3 Lifecycle Policies tự động chuyển objects giữa storage classes hoặc xóa theo thời gian.',
            answers: [
                { content: 'Mã hóa objects', isCorrect: false },
                { content: 'Tự động chuyển objects giữa storage classes', isCorrect: true },
                { content: 'Sao chép objects giữa regions', isCorrect: false },
                { content: 'Quản lý access permissions', isCorrect: false },
            ],
        },
        {
            content: 'AWS Compute Optimizer cung cấp gì?',
            explanation: 'Compute Optimizer phân tích và đưa ra khuyến nghị về right-sizing EC2, Lambda và EBS volumes.',
            answers: [
                { content: 'Tự động triển khai infrastructure', isCorrect: false },
                { content: 'Khuyến nghị right-sizing resources', isCorrect: true },
                { content: 'Giám sát security threats', isCorrect: false },
                { content: 'Quản lý DNS', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào cung cấp managed Kubernetes trên AWS?',
            explanation: 'Amazon EKS (Elastic Kubernetes Service) là dịch vụ Kubernetes fully managed trên AWS.',
            answers: [
                { content: 'Amazon ECS', isCorrect: false },
                { content: 'Amazon EKS', isCorrect: true },
                { content: 'AWS Fargate', isCorrect: false },
                { content: 'AWS App Runner', isCorrect: false },
            ],
        },
        {
            content: 'Savings Plans khác Reserved Instances ở điểm nào?',
            explanation: 'Savings Plans linh hoạt hơn — cam kết chi tiêu theo giờ chứ không lock vào instance type cụ thể.',
            answers: [
                { content: 'Savings Plans chỉ áp dụng cho S3', isCorrect: false },
                { content: 'Savings Plans cam kết chi tiêu, linh hoạt instance type', isCorrect: true },
                { content: 'Reserved Instances rẻ hơn Savings Plans', isCorrect: false },
                { content: 'Không có sự khác biệt', isCorrect: false },
            ],
        },
        {
            content: 'Amazon Cognito dùng để làm gì?',
            explanation: 'Amazon Cognito cung cấp authentication, authorization và user management cho web và mobile apps.',
            answers: [
                { content: 'Quản lý IAM policies', isCorrect: false },
                { content: 'Authentication và user management cho apps', isCorrect: true },
                { content: 'Quản lý encryption keys', isCorrect: false },
                { content: 'DNS management', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào cung cấp data warehouse?',
            explanation: 'Amazon Redshift là dịch vụ data warehouse petabyte-scale cho phân tích dữ liệu lớn.',
            answers: [
                { content: 'Amazon RDS', isCorrect: false },
                { content: 'Amazon DynamoDB', isCorrect: false },
                { content: 'Amazon Redshift', isCorrect: true },
                { content: 'Amazon Aurora', isCorrect: false },
            ],
        },
        {
            content: 'High Availability có nghĩa là gì trong context AWS?',
            explanation: 'High Availability đảm bảo hệ thống hoạt động liên tục bằng cách triển khai trên multiple AZs.',
            answers: [
                { content: 'Chạy trên một server duy nhất', isCorrect: false },
                { content: 'Hệ thống hoạt động liên tục, giảm thiểu downtime', isCorrect: true },
                { content: 'Sử dụng nhiều AWS accounts', isCorrect: false },
                { content: 'Tối ưu chi phí tối đa', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào cho phép tạo REST APIs?',
            explanation: 'Amazon API Gateway cho phép tạo, publish, quản lý và bảo mật REST, HTTP và WebSocket APIs.',
            answers: [
                { content: 'AWS AppSync', isCorrect: false },
                { content: 'Amazon API Gateway', isCorrect: true },
                { content: 'AWS Lambda', isCorrect: false },
                { content: 'Amazon SNS', isCorrect: false },
            ],
        },
        {
            content: 'EBS Volume Types nào có hiệu suất IOPS cao nhất?',
            explanation: 'io2 Block Express cung cấp IOPS cao nhất, lên đến 256,000 IOPS, cho workloads yêu cầu cao.',
            answers: [
                { content: 'gp3 (General Purpose SSD)', isCorrect: false },
                { content: 'io2 Block Express (Provisioned IOPS SSD)', isCorrect: true },
                { content: 'st1 (Throughput Optimized HDD)', isCorrect: false },
                { content: 'sc1 (Cold HDD)', isCorrect: false },
            ],
        },
        {
            content: 'AWS Marketplace là gì?',
            explanation: 'AWS Marketplace là catalog cho phép tìm, mua và deploy phần mềm từ third-party trên AWS.',
            answers: [
                { content: 'Nơi mua hardware AWS', isCorrect: false },
                { content: 'Catalog phần mềm third-party cho AWS', isCorrect: true },
                { content: 'Dịch vụ email marketing', isCorrect: false },
                { content: 'Nơi bán dữ liệu', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào giúp build và deploy machine learning models nhanh chóng?',
            explanation: 'Amazon SageMaker cung cấp tools để build, train và deploy ML models ở bất kỳ quy mô nào.',
            answers: [
                { content: 'Amazon Rekognition', isCorrect: false },
                { content: 'Amazon SageMaker', isCorrect: true },
                { content: 'Amazon Comprehend', isCorrect: false },
                { content: 'Amazon Lex', isCorrect: false },
            ],
        },
        {
            content: 'Amazon VPC Peering cho phép làm gì?',
            explanation: 'VPC Peering tạo kết nối mạng riêng giữa hai VPCs, traffic đi qua AWS backbone network.',
            answers: [
                { content: 'Kết nối VPC với internet', isCorrect: false },
                { content: 'Kết nối mạng riêng giữa hai VPCs', isCorrect: true },
                { content: 'Tạo VPN tunnel', isCorrect: false },
                { content: 'Quản lý DNS records', isCorrect: false },
            ],
        },
        {
            content: 'AWS Systems Manager dùng để làm gì?',
            explanation: 'AWS Systems Manager cung cấp unified interface để quản lý tài nguyên AWS và on-premises.',
            answers: [
                { content: 'Chỉ quản lý EC2 instances', isCorrect: false },
                { content: 'Quản lý tập trung tài nguyên AWS và on-premises', isCorrect: true },
                { content: 'Deploy Lambda functions', isCorrect: false },
                { content: 'Tạo VPCs', isCorrect: false },
            ],
        },
        {
            content: 'Khi nào nên dùng Amazon S3 thay vì Amazon EBS?',
            explanation: 'S3 phù hợp cho object storage (files, images, backups), trong khi EBS dành cho block storage gắn với EC2.',
            answers: [
                { content: 'Khi cần boot volume cho EC2', isCorrect: false },
                { content: 'Khi cần lưu trữ files, images, backups truy cập qua internet', isCorrect: true },
                { content: 'Khi cần database storage', isCorrect: false },
                { content: 'Khi cần temporary storage', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào cho phép gửi email hàng loạt?',
            explanation: 'Amazon SES (Simple Email Service) là dịch vụ gửi email quy mô lớn, cost-effective.',
            answers: [
                { content: 'Amazon SNS', isCorrect: false },
                { content: 'Amazon SES', isCorrect: true },
                { content: 'Amazon SQS', isCorrect: false },
                { content: 'Amazon Pinpoint', isCorrect: false },
            ],
        },
        {
            content: 'Vertical Scaling (Scale Up) khác Horizontal Scaling (Scale Out) như thế nào?',
            explanation: 'Vertical Scaling tăng size instance (CPU/RAM), Horizontal Scaling tăng số lượng instances.',
            answers: [
                { content: 'Vertical thêm instances, Horizontal tăng size', isCorrect: false },
                { content: 'Vertical tăng size instance, Horizontal thêm instances', isCorrect: true },
                { content: 'Không có sự khác biệt', isCorrect: false },
                { content: 'Cả hai đều thêm instances mới', isCorrect: false },
            ],
        },
        {
            content: 'AWS CloudFormation template sử dụng format nào?',
            explanation: 'CloudFormation templates có thể viết bằng JSON hoặc YAML.',
            answers: [
                { content: 'Chỉ JSON', isCorrect: false },
                { content: 'Chỉ YAML', isCorrect: false },
                { content: 'JSON hoặc YAML', isCorrect: true },
                { content: 'XML', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào cung cấp desktop ảo trên cloud?',
            explanation: 'Amazon WorkSpaces cung cấp managed Desktop-as-a-Service (DaaS) cho remote workers.',
            answers: [
                { content: 'Amazon EC2', isCorrect: false },
                { content: 'Amazon WorkSpaces', isCorrect: true },
                { content: 'AWS AppStream 2.0', isCorrect: false },
                { content: 'Amazon Lightsail', isCorrect: false },
            ],
        },
        {
            content: 'Amazon Lightsail phù hợp cho loại workload nào?',
            explanation: 'Lightsail cung cấp VPS đơn giản, giá cố định, phù hợp cho small-scale projects, websites đơn giản.',
            answers: [
                { content: 'Enterprise-scale applications', isCorrect: false },
                { content: 'Small-scale projects và websites đơn giản', isCorrect: true },
                { content: 'Big data analytics', isCorrect: false },
                { content: 'Machine learning training', isCorrect: false },
            ],
        },
        {
            content: 'Cross-Region Replication (CRR) trong S3 giúp gì?',
            explanation: 'CRR tự động replicate objects sang bucket ở region khác, tăng availability và disaster recovery.',
            answers: [
                { content: 'Giảm chi phí lưu trữ', isCorrect: false },
                { content: 'Replicate objects sang region khác cho DR', isCorrect: true },
                { content: 'Mã hóa objects', isCorrect: false },
                { content: 'Versioning objects', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào cung cấp managed Apache Kafka?',
            explanation: 'Amazon MSK (Managed Streaming for Apache Kafka) là dịch vụ fully managed Apache Kafka.',
            answers: [
                { content: 'Amazon Kinesis', isCorrect: false },
                { content: 'Amazon MSK', isCorrect: true },
                { content: 'Amazon SQS', isCorrect: false },
                { content: 'Amazon EventBridge', isCorrect: false },
            ],
        },
        {
            content: 'AWS Security Hub cung cấp gì?',
            explanation: 'Security Hub tổng hợp findings từ nhiều security services, cung cấp cái nhìn tổng quan về security posture.',
            answers: [
                { content: 'Firewall management', isCorrect: false },
                { content: 'Tổng hợp security findings và compliance checks', isCorrect: true },
                { content: 'DDoS protection', isCorrect: false },
                { content: 'Identity management', isCorrect: false },
            ],
        },
        {
            content: 'Amazon EventBridge dùng để làm gì?',
            explanation: 'EventBridge là serverless event bus giúp kết nối applications với events từ AWS, SaaS và custom sources.',
            answers: [
                { content: 'Message queue', isCorrect: false },
                { content: 'Serverless event bus cho event-driven architectures', isCorrect: true },
                { content: 'Data warehousing', isCorrect: false },
                { content: 'Container orchestration', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào cung cấp graph database?',
            explanation: 'Amazon Neptune là managed graph database hỗ trợ cả property graph và RDF models.',
            answers: [
                { content: 'Amazon DynamoDB', isCorrect: false },
                { content: 'Amazon Neptune', isCorrect: true },
                { content: 'Amazon DocumentDB', isCorrect: false },
                { content: 'Amazon Timestream', isCorrect: false },
            ],
        },
        {
            content: 'Khi nào nên dùng Infrastructure as a Service (IaaS)?',
            explanation: 'IaaS (như EC2) phù hợp khi cần kiểm soát tối đa infrastructure bao gồm OS, storage, networking.',
            answers: [
                { content: 'Khi không muốn quản lý bất cứ thứ gì', isCorrect: false },
                { content: 'Khi cần kiểm soát tối đa infrastructure', isCorrect: true },
                { content: 'Khi chỉ cần chạy code', isCorrect: false },
                { content: 'Khi cần managed database', isCorrect: false },
            ],
        },
        {
            content: 'AWS Step Functions dùng để làm gì?',
            explanation: 'AWS Step Functions giúp orchestrate microservices thành visual workflows với state machines.',
            answers: [
                { content: 'Chạy serverless functions', isCorrect: false },
                { content: 'Orchestrate microservices thành visual workflows', isCorrect: true },
                { content: 'Quản lý container clusters', isCorrect: false },
                { content: 'Deploy infrastructure', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào cung cấp managed ETL (Extract, Transform, Load)?',
            explanation: 'AWS Glue là serverless ETL service giúp chuẩn bị và transform dữ liệu cho analytics.',
            answers: [
                { content: 'Amazon EMR', isCorrect: false },
                { content: 'AWS Glue', isCorrect: true },
                { content: 'Amazon Athena', isCorrect: false },
                { content: 'Amazon Redshift', isCorrect: false },
            ],
        },
        {
            content: 'AWS Storage Gateway dùng cho mục đích gì?',
            explanation: 'Storage Gateway kết nối on-premises storage với AWS cloud storage, hỗ trợ hybrid architectures.',
            answers: [
                { content: 'Thay thế hoàn toàn on-premises storage', isCorrect: false },
                { content: 'Kết nối on-premises storage với AWS cloud', isCorrect: true },
                { content: 'Quản lý EBS volumes', isCorrect: false },
                { content: 'Tạo S3 buckets', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào giúp convert text thành speech?',
            explanation: 'Amazon Polly convert text thành lifelike speech, hỗ trợ nhiều ngôn ngữ và giọng nói.',
            answers: [
                { content: 'Amazon Transcribe', isCorrect: false },
                { content: 'Amazon Polly', isCorrect: true },
                { content: 'Amazon Translate', isCorrect: false },
                { content: 'Amazon Lex', isCorrect: false },
            ],
        },
        {
            content: 'Amazon Transcribe dùng để làm gì?',
            explanation: 'Amazon Transcribe tự động chuyển speech thành text bằng automatic speech recognition (ASR).',
            answers: [
                { content: 'Chuyển text thành speech', isCorrect: false },
                { content: 'Chuyển speech thành text', isCorrect: true },
                { content: 'Dịch ngôn ngữ', isCorrect: false },
                { content: 'Nhận diện hình ảnh', isCorrect: false },
            ],
        },
        {
            content: 'Theo Shared Responsibility Model, khách hàng chịu trách nhiệm gì?',
            explanation: 'Khách hàng chịu trách nhiệm "Security IN the Cloud" — data, IAM, OS patching, firewall, encryption.',
            answers: [
                { content: 'Bảo mật data centers vật lý', isCorrect: false },
                { content: 'Cấu hình security groups và quản lý dữ liệu', isCorrect: true },
                { content: 'Bảo trì hypervisor', isCorrect: false },
                { content: 'Quản lý global infrastructure', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào cho phép chạy SQL queries trên S3 data mà không cần load vào database?',
            explanation: 'Amazon Athena cho phép query dữ liệu trực tiếp trên S3 bằng standard SQL, serverless.',
            answers: [
                { content: 'Amazon RDS', isCorrect: false },
                { content: 'Amazon Athena', isCorrect: true },
                { content: 'Amazon DynamoDB', isCorrect: false },
                { content: 'Amazon Redshift', isCorrect: false },
            ],
        },
        {
            content: 'AWS Outposts là gì?',
            explanation: 'AWS Outposts đưa AWS infrastructure và services đến on-premises locations.',
            answers: [
                { content: 'Một AWS Region mới', isCorrect: false },
                { content: 'AWS infrastructure tại on-premises location', isCorrect: true },
                { content: 'Một loại EC2 instance', isCorrect: false },
                { content: 'Dịch vụ migration', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào giúp tạo chatbot?',
            explanation: 'Amazon Lex cung cấp AI để build conversational interfaces (chatbots) với voice và text.',
            answers: [
                { content: 'Amazon Polly', isCorrect: false },
                { content: 'Amazon Lex', isCorrect: true },
                { content: 'Amazon Comprehend', isCorrect: false },
                { content: 'Amazon Transcribe', isCorrect: false },
            ],
        },
        {
            content: 'AWS Control Tower cung cấp gì?',
            explanation: 'AWS Control Tower tự động setup và govern multi-account AWS environments theo best practices.',
            answers: [
                { content: 'Quản lý billing', isCorrect: false },
                { content: 'Setup và govern multi-account environments', isCorrect: true },
                { content: 'Deploy containers', isCorrect: false },
                { content: 'Quản lý databases', isCorrect: false },
            ],
        },
        {
            content: 'S3 Versioning giúp gì?',
            explanation: 'S3 Versioning giữ nhiều versions của object, giúp bảo vệ khỏi overwrites và deletes không mong muốn.',
            answers: [
                { content: 'Tăng tốc độ truy cập', isCorrect: false },
                { content: 'Giữ nhiều versions cho protection khỏi deletes', isCorrect: true },
                { content: 'Giảm chi phí lưu trữ', isCorrect: false },
                { content: 'Mã hóa tự động', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào cho phép quản lý tài nguyên qua graphical interface?',
            explanation: 'AWS Management Console là web-based GUI để quản lý và giám sát tất cả AWS services.',
            answers: [
                { content: 'AWS CLI', isCorrect: false },
                { content: 'AWS Management Console', isCorrect: true },
                { content: 'AWS SDK', isCorrect: false },
                { content: 'AWS CloudShell', isCorrect: false },
            ],
        },
        {
            content: 'AWS CloudShell cung cấp gì?',
            explanation: 'AWS CloudShell là browser-based shell với AWS CLI pre-installed, cho phép quản lý resources nhanh.',
            answers: [
                { content: 'Virtual desktop', isCorrect: false },
                { content: 'Browser-based shell với AWS CLI pre-installed', isCorrect: true },
                { content: 'Code editor', isCorrect: false },
                { content: 'Container runtime', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào giúp track application performance?',
            explanation: 'AWS X-Ray giúp phân tích và debug distributed applications, trace requests.',
            answers: [
                { content: 'Amazon CloudWatch', isCorrect: false },
                { content: 'AWS X-Ray', isCorrect: true },
                { content: 'AWS CloudTrail', isCorrect: false },
                { content: 'Amazon Inspector', isCorrect: false },
            ],
        },
        {
            content: 'Amazon DocumentDB tương thích với database nào?',
            explanation: 'Amazon DocumentDB là managed document database tương thích với MongoDB workloads.',
            answers: [
                { content: 'PostgreSQL', isCorrect: false },
                { content: 'MongoDB', isCorrect: true },
                { content: 'MySQL', isCorrect: false },
                { content: 'Oracle', isCorrect: false },
            ],
        },
        {
            content: 'AWS Batch dùng để làm gì?',
            explanation: 'AWS Batch cho phép chạy batch computing workloads trên AWS, tự động provision compute resources.',
            answers: [
                { content: 'Real-time processing', isCorrect: false },
                { content: 'Chạy batch computing workloads', isCorrect: true },
                { content: 'Stream processing', isCorrect: false },
                { content: 'Interactive queries', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào tự động phát hiện configuration drift?',
            explanation: 'AWS Config ghi lại và đánh giá cấu hình tài nguyên, phát hiện khi drift so với desired state.',
            answers: [
                { content: 'AWS CloudFormation', isCorrect: false },
                { content: 'AWS Config', isCorrect: true },
                { content: 'AWS CloudTrail', isCorrect: false },
                { content: 'Amazon CloudWatch', isCorrect: false },
            ],
        },
        {
            content: 'Amazon Translate dùng để làm gì?',
            explanation: 'Amazon Translate cung cấp neural machine translation cho multiple languages.',
            answers: [
                { content: 'Chuyển speech thành text', isCorrect: false },
                { content: 'Dịch văn bản giữa các ngôn ngữ', isCorrect: true },
                { content: 'Chuyển text thành speech', isCorrect: false },
                { content: 'Phân tích sentiment', isCorrect: false },
            ],
        },
        {
            content: 'Internet Gateway trong VPC dùng để làm gì?',
            explanation: 'Internet Gateway cho phép resources trong VPC kết nối ra internet và ngược lại.',
            answers: [
                { content: 'Kết nối giữa hai VPCs', isCorrect: false },
                { content: 'Cho phép VPC kết nối internet', isCorrect: true },
                { content: 'Cân bằng tải', isCorrect: false },
                { content: 'Quản lý DNS', isCorrect: false },
            ],
        },
        {
            content: 'NAT Gateway dùng để làm gì?',
            explanation: 'NAT Gateway cho phép instances ở private subnet kết nối ra internet nhưng không cho phép kết nối vào.',
            answers: [
                { content: 'Cho phép public access vào private instances', isCorrect: false },
                { content: 'Cho phép private instances truy cập internet (outbound only)', isCorrect: true },
                { content: 'Kết nối VPCs', isCorrect: false },
                { content: 'Cache DNS responses', isCorrect: false },
            ],
        },
        {
            content: 'AWS Cost Anomaly Detection giúp gì?',
            explanation: 'Cost Anomaly Detection sử dụng ML để phát hiện chi phí bất thường trong AWS accounts.',
            answers: [
                { content: 'Dự đoán chi phí tương lai', isCorrect: false },
                { content: 'Phát hiện chi phí bất thường bằng ML', isCorrect: true },
                { content: 'Tối ưu reserved instances', isCorrect: false },
                { content: 'Quản lý budgets', isCorrect: false },
            ],
        },
        {
            content: 'Amazon QuickSight dùng để làm gì?',
            explanation: 'Amazon QuickSight là serverless BI service cho phép tạo interactive dashboards và visualizations.',
            answers: [
                { content: 'Data warehouse', isCorrect: false },
                { content: 'Business intelligence và visualizations', isCorrect: true },
                { content: 'ETL processing', isCorrect: false },
                { content: 'Real-time streaming', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào cung cấp managed message broker?',
            explanation: 'Amazon MQ là managed message broker service hỗ trợ ActiveMQ và RabbitMQ.',
            answers: [
                { content: 'Amazon SQS', isCorrect: false },
                { content: 'Amazon MQ', isCorrect: true },
                { content: 'Amazon SNS', isCorrect: false },
                { content: 'Amazon EventBridge', isCorrect: false },
            ],
        },
        {
            content: 'AWS WAF có thể được deploy với dịch vụ nào?',
            explanation: 'AWS WAF có thể deploy với CloudFront, ALB, API Gateway, và AWS AppSync.',
            answers: [
                { content: 'Chỉ CloudFront', isCorrect: false },
                { content: 'CloudFront, ALB, API Gateway, AppSync', isCorrect: true },
                { content: 'Chỉ EC2 instances', isCorrect: false },
                { content: 'Chỉ Route 53', isCorrect: false },
            ],
        },
        {
            content: 'Amazon Comprehend dùng để làm gì?',
            explanation: 'Amazon Comprehend dùng NLP để trích xuất insights từ text — sentiment, entities, key phrases.',
            answers: [
                { content: 'Image recognition', isCorrect: false },
                { content: 'Natural language processing và text analysis', isCorrect: true },
                { content: 'Speech synthesis', isCorrect: false },
                { content: 'Video analysis', isCorrect: false },
            ],
        },
        {
            content: 'AWS Global Accelerator khác CloudFront ở điểm nào?',
            explanation: 'Global Accelerator tối ưu routing qua AWS backbone cho non-HTTP/S traffic, CloudFront cache HTTP content.',
            answers: [
                { content: 'Không có sự khác biệt', isCorrect: false },
                { content: 'Global Accelerator tối ưu routing, CloudFront cache content', isCorrect: true },
                { content: 'CloudFront nhanh hơn trong mọi trường hợp', isCorrect: false },
                { content: 'Global Accelerator chỉ cho S3', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào giúp quản lý cost allocation tags?',
            explanation: 'AWS Cost Explorer và Billing Console cho phép sử dụng cost allocation tags để phân tích chi phí theo project/team.',
            answers: [
                { content: 'AWS Resource Groups', isCorrect: false },
                { content: 'AWS Billing Console với Cost Allocation Tags', isCorrect: true },
                { content: 'AWS CloudFormation', isCorrect: false },
                { content: 'AWS Organizations', isCorrect: false },
            ],
        },
    ],
};
