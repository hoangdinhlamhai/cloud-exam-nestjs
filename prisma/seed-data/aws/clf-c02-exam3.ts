export const clfC02Exam3 = {
    title: 'AWS Cloud Practitioner CLF-C02 - Đề thi thử 3',
    description:
        'Đề thi thử AWS Cloud Practitioner CLF-C02 số 3. 65 câu hỏi bao quát tất cả domains của kỳ thi CLF-C02.',
    durationMinutes: 90,
    courseId: 1,
    questions: [
        {
            content: 'Dịch vụ nào cho phép quản lý nhiều AWS accounts từ một nơi duy nhất?',
            explanation: 'AWS Organizations cho phép quản lý tập trung nhiều accounts, áp SCPs, consolidated billing.',
            answers: [
                { content: 'AWS IAM', isCorrect: false },
                { content: 'AWS Organizations', isCorrect: true },
                { content: 'AWS Control Tower', isCorrect: false },
                { content: 'AWS Directory Service', isCorrect: false },
            ],
        },
        {
            content: 'Amazon EC2 instance store khác EBS volume ở điểm nào?',
            explanation: 'Instance store là ephemeral storage — dữ liệu bị mất khi instance stop/terminate, EBS thì persistent.',
            answers: [
                { content: 'Instance store persistent, EBS ephemeral', isCorrect: false },
                { content: 'Instance store ephemeral (mất khi stop), EBS persistent', isCorrect: true },
                { content: 'Cả hai đều persistent', isCorrect: false },
                { content: 'Cả hai đều ephemeral', isCorrect: false },
            ],
        },
        {
            content: 'AWS Migration Hub giúp gì?',
            explanation: 'AWS Migration Hub cung cấp nơi duy nhất để theo dõi tiến trình migrate từ on-premises sang AWS.',
            answers: [
                { content: 'Tự động migrate databases', isCorrect: false },
                { content: 'Theo dõi tiến trình migration tập trung', isCorrect: true },
                { content: 'Chạy parallel workloads', isCorrect: false },
                { content: 'Deploy CloudFormation stacks', isCorrect: false },
            ],
        },
        {
            content: 'Khi cần low-latency access cho frequently accessed data trên S3, nên dùng storage class nào?',
            explanation: 'S3 Standard phù hợp cho dữ liệu truy cập thường xuyên, low latency, high throughput.',
            answers: [
                { content: 'S3 Glacier', isCorrect: false },
                { content: 'S3 Standard', isCorrect: true },
                { content: 'S3 One Zone-IA', isCorrect: false },
                { content: 'S3 Glacier Deep Archive', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào giúp transfer large files đến AWS qua internet nhanh hơn?',
            explanation: 'Amazon S3 Transfer Acceleration sử dụng CloudFront edge locations để tăng tốc upload lên S3.',
            answers: [
                { content: 'AWS Direct Connect', isCorrect: false },
                { content: 'Amazon S3 Transfer Acceleration', isCorrect: true },
                { content: 'AWS Snowball', isCorrect: false },
                { content: 'AWS DataSync', isCorrect: false },
            ],
        },
        {
            content: 'AWS Elastic Beanstalk hỗ trợ ngôn ngữ lập trình nào?',
            explanation: 'Elastic Beanstalk hỗ trợ Java, .NET, PHP, Node.js, Python, Ruby, Go, Docker.',
            answers: [
                { content: 'Chỉ Java và .NET', isCorrect: false },
                { content: 'Java, .NET, PHP, Node.js, Python, Ruby, Go, Docker', isCorrect: true },
                { content: 'Chỉ Python', isCorrect: false },
                { content: 'Chỉ Node.js', isCorrect: false },
            ],
        },
        {
            content: 'Amazon ECR (Elastic Container Registry) dùng để làm gì?',
            explanation: 'ECR là fully managed container registry để store, manage và deploy Docker container images.',
            answers: [
                { content: 'Chạy containers', isCorrect: false },
                { content: 'Lưu trữ Docker container images', isCorrect: true },
                { content: 'Orchestrate containers', isCorrect: false },
                { content: 'Build containers', isCorrect: false },
            ],
        },
        {
            content: 'Shared Responsibility Model — ai chịu trách nhiệm patching guest OS trên EC2?',
            explanation: 'Khách hàng chịu trách nhiệm patching và bảo trì guest OS trên EC2 instances.',
            answers: [
                { content: 'AWS', isCorrect: false },
                { content: 'Khách hàng', isCorrect: true },
                { content: 'Cả AWS và khách hàng', isCorrect: false },
                { content: 'ISV (Independent Software Vendor)', isCorrect: false },
            ],
        },
        {
            content: 'AWS phân chia trách nhiệm bảo mật cho managed services (như RDS) như thế nào?',
            explanation: 'Với managed services, AWS quản lý OS patching và infrastructure, khách hàng quản lý data, access control.',
            answers: [
                { content: 'AWS quản lý mọi thứ', isCorrect: false },
                { content: 'AWS quản lý OS và infrastructure, khách hàng quản lý data và access', isCorrect: true },
                { content: 'Khách hàng quản lý mọi thứ', isCorrect: false },
                { content: 'Không có shared responsibility cho managed services', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào giúp tạo serverless REST APIs kết hợp với Lambda?',
            explanation: 'Amazon API Gateway tích hợp tự nhiên với Lambda để tạo serverless REST APIs.',
            answers: [
                { content: 'Elastic Load Balancer', isCorrect: false },
                { content: 'Amazon API Gateway', isCorrect: true },
                { content: 'Amazon CloudFront', isCorrect: false },
                { content: 'AWS AppSync', isCorrect: false },
            ],
        },
        {
            content: 'AWS Trusted Advisor Free Tier checks bao gồm những gì?',
            explanation: 'Free Tier Trusted Advisor cung cấp 7 core checks về security và service limits.',
            answers: [
                { content: 'Tất cả các checks', isCorrect: false },
                { content: 'Core security checks và service limits', isCorrect: true },
                { content: 'Chỉ cost optimization', isCorrect: false },
                { content: 'Không có free checks', isCorrect: false },
            ],
        },
        {
            content: 'Amazon CloudWatch Alarms có thể trigger action nào?',
            explanation: 'CloudWatch Alarms có thể trigger SNS notifications, Auto Scaling actions, EC2 actions.',
            answers: [
                { content: 'Chỉ gửi email', isCorrect: false },
                { content: 'SNS notifications, Auto Scaling, EC2 actions', isCorrect: true },
                { content: 'Chỉ restart instances', isCorrect: false },
                { content: 'Chỉ log events', isCorrect: false },
            ],
        },
        {
            content: 'AWS Service Catalog dùng để làm gì?',
            explanation: 'Service Catalog cho phép organizations tạo và quản lý catalog các approved IT services.',
            answers: [
                { content: 'Marketplace cho phần mềm', isCorrect: false },
                { content: 'Quản lý catalog các approved IT services', isCorrect: true },
                { content: 'Container registry', isCorrect: false },
                { content: 'Quản lý certificates', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào cho phép chạy serverless containers?',
            explanation: 'AWS Fargate cho phép chạy containers mà không cần quản lý EC2 instances — serverless containers.',
            answers: [
                { content: 'Amazon EC2', isCorrect: false },
                { content: 'AWS Fargate', isCorrect: true },
                { content: 'Amazon EKS (chỉ managed nodes)', isCorrect: false },
                { content: 'AWS Batch', isCorrect: false },
            ],
        },
        {
            content: 'Amazon S3 đảm bảo durability ở mức nào?',
            explanation: 'Amazon S3 cung cấp 99.999999999% (11 nines) durability cho objects.',
            answers: [
                { content: '99.9%', isCorrect: false },
                { content: '99.99%', isCorrect: false },
                { content: '99.999999999% (11 nines)', isCorrect: true },
                { content: '100%', isCorrect: false },
            ],
        },
        {
            content: 'AWS Well-Architected Tool giúp gì?',
            explanation: 'Well-Architected Tool giúp review architecture theo 6 pillars và đưa ra improvement plan.',
            answers: [
                { content: 'Deploy infrastructure tự động', isCorrect: false },
                { content: 'Review architecture và đưa ra improvement plan', isCorrect: true },
                { content: 'Monitor resources', isCorrect: false },
                { content: 'Manage billing', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào giúp thiết lập kết nối VPN từ on-premises đến AWS?',
            explanation: 'AWS Site-to-Site VPN tạo kết nối VPN encrypted giữa on-premises network và VPC.',
            answers: [
                { content: 'AWS Direct Connect', isCorrect: false },
                { content: 'AWS Site-to-Site VPN', isCorrect: true },
                { content: 'AWS Transit Gateway', isCorrect: false },
                { content: 'VPC Peering', isCorrect: false },
            ],
        },
        {
            content: 'Amazon SageMaker Canvas dùng để làm gì?',
            explanation: 'SageMaker Canvas cho phép business analysts build ML models bằng visual interface, no-code.',
            answers: [
                { content: 'Train deep learning models', isCorrect: false },
                { content: 'Build ML models no-code với visual interface', isCorrect: true },
                { content: 'Deploy containers', isCorrect: false },
                { content: 'Query databases', isCorrect: false },
            ],
        },
        {
            content: 'AWS CodePipeline dùng để làm gì?',
            explanation: 'CodePipeline là CI/CD service giúp automate release pipelines cho code changes.',
            answers: [
                { content: 'Lưu trữ source code', isCorrect: false },
                { content: 'Automate CI/CD release pipelines', isCorrect: true },
                { content: 'Build code', isCorrect: false },
                { content: 'Deploy to servers', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào cung cấp source control?',
            explanation: 'AWS CodeCommit là fully managed source control service tương tự Git.',
            answers: [
                { content: 'AWS CodeBuild', isCorrect: false },
                { content: 'AWS CodeCommit', isCorrect: true },
                { content: 'AWS CodeDeploy', isCorrect: false },
                { content: 'AWS CodePipeline', isCorrect: false },
            ],
        },
        {
            content: 'AWS CodeBuild dùng để làm gì?',
            explanation: 'CodeBuild là fully managed build service — compile source code, run tests, produce deployable artifacts.',
            answers: [
                { content: 'Lưu trữ code', isCorrect: false },
                { content: 'Compile code và run tests', isCorrect: true },
                { content: 'Deploy code', isCorrect: false },
                { content: 'Manage releases', isCorrect: false },
            ],
        },
        {
            content: 'Khi thiết kế for failure trên AWS, best practice nào nên áp dụng?',
            explanation: 'Triển khai resources trên multiple AZs đảm bảo high availability khi một AZ gặp sự cố.',
            answers: [
                { content: 'Chạy trên một AZ duy nhất', isCorrect: false },
                { content: 'Triển khai trên multiple Availability Zones', isCorrect: true },
                { content: 'Chỉ dùng largest instance type', isCorrect: false },
                { content: 'Không cần backup', isCorrect: false },
            ],
        },
        {
            content: 'AWS Application Migration Service (MGN) dùng để làm gì?',
            explanation: 'MGN tự động convert physical, virtual, cloud servers để chạy trên AWS (lift-and-shift migration).',
            answers: [
                { content: 'Migrate databases', isCorrect: false },
                { content: 'Lift-and-shift server migration sang AWS', isCorrect: true },
                { content: 'Transfer files', isCorrect: false },
                { content: 'Deploy applications', isCorrect: false },
            ],
        },
        {
            content: 'Với service nào AWS chịu trách nhiệm patching OS?',
            explanation: 'AWS Lambda là serverless — AWS quản lý hoàn toàn infrastructure và OS patching.',
            answers: [
                { content: 'Amazon EC2', isCorrect: false },
                { content: 'AWS Lambda', isCorrect: true },
                { content: 'Amazon EC2 với custom AMI', isCorrect: false },
                { content: 'Amazon ECS on EC2', isCorrect: false },
            ],
        },
        {
            content: 'AWS Cost and Usage Report cung cấp gì?',
            explanation: 'Cost and Usage Report là báo cáo chi tiết nhất về chi phí và usage cho AWS services.',
            answers: [
                { content: 'Tóm tắt billing hàng tháng', isCorrect: false },
                { content: 'Báo cáo chi tiết nhất về chi phí và usage', isCorrect: true },
                { content: 'Khuyến nghị tiết kiệm chi phí', isCorrect: false },
                { content: 'Predictions về chi phí tương lai', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào cung cấp managed NoSQL key-value database?',
            explanation: 'DynamoDB là serverless NoSQL key-value và document database với single-digit millisecond latency.',
            answers: [
                { content: 'Amazon Neptune', isCorrect: false },
                { content: 'Amazon DynamoDB', isCorrect: true },
                { content: 'Amazon Timestream', isCorrect: false },
                { content: 'Amazon QLDB', isCorrect: false },
            ],
        },
        {
            content: 'AWS Resource Access Manager (RAM) dùng để làm gì?',
            explanation: 'RAM cho phép share AWS resources với các accounts khác trong organization.',
            answers: [
                { content: 'Quản lý IAM roles', isCorrect: false },
                { content: 'Share resources giữa các AWS accounts', isCorrect: true },
                { content: 'Monitor resource usage', isCorrect: false },
                { content: 'Tag resources', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào cho phép tìm kiếm và phân tích log data?',
            explanation: 'Amazon CloudWatch Logs Insights cho phép query và phân tích log data interactively.',
            answers: [
                { content: 'AWS CloudTrail', isCorrect: false },
                { content: 'Amazon CloudWatch Logs Insights', isCorrect: true },
                { content: 'Amazon Athena', isCorrect: false },
                { content: 'Amazon OpenSearch Service', isCorrect: false },
            ],
        },
        {
            content: 'AWS Wavelength dùng cho mục đích gì?',
            explanation: 'AWS Wavelength đưa AWS compute/storage vào 5G network edge, giảm ultra-low latency cho mobile apps.',
            answers: [
                { content: 'Deploy on-premises servers', isCorrect: false },
                { content: 'Ultra-low latency cho mobile/5G applications', isCorrect: true },
                { content: 'Content delivery', isCorrect: false },
                { content: 'Database management', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào cung cấp time-series database?',
            explanation: 'Amazon Timestream là serverless time-series database cho IoT và operational applications.',
            answers: [
                { content: 'Amazon DynamoDB', isCorrect: false },
                { content: 'Amazon Timestream', isCorrect: true },
                { content: 'Amazon RDS', isCorrect: false },
                { content: 'Amazon Aurora', isCorrect: false },
            ],
        },
        {
            content: 'AWS Amplify dùng để làm gì?',
            explanation: 'AWS Amplify cung cấp tools để build full-stack web và mobile apps nhanh chóng.',
            answers: [
                { content: 'Quản lý infrastructure', isCorrect: false },
                { content: 'Build full-stack web và mobile apps', isCorrect: true },
                { content: 'Data warehousing', isCorrect: false },
                { content: 'Container management', isCorrect: false },
            ],
        },
        {
            content: 'Loại Elastic Load Balancer nào hoạt động ở layer 7 (application layer)?',
            explanation: 'Application Load Balancer (ALB) hoạt động ở layer 7, hỗ trợ HTTP/HTTPS routing.',
            answers: [
                { content: 'Network Load Balancer', isCorrect: false },
                { content: 'Application Load Balancer', isCorrect: true },
                { content: 'Gateway Load Balancer', isCorrect: false },
                { content: 'Classic Load Balancer', isCorrect: false },
            ],
        },
        {
            content: 'Network Load Balancer hoạt động ở layer nào?',
            explanation: 'NLB hoạt động ở layer 4, xử lý TCP/UDP/TLS traffic với ultra-low latency.',
            answers: [
                { content: 'Layer 7', isCorrect: false },
                { content: 'Layer 4', isCorrect: true },
                { content: 'Layer 3', isCorrect: false },
                { content: 'Layer 2', isCorrect: false },
            ],
        },
        {
            content: 'Amazon Rekognition cung cấp khả năng gì?',
            explanation: 'Rekognition cung cấp image và video analysis — phát hiện objects, faces, text, activities.',
            answers: [
                { content: 'Text-to-speech', isCorrect: false },
                { content: 'Image và video analysis (face detection, object recognition)', isCorrect: true },
                { content: 'Language translation', isCorrect: false },
                { content: 'Sentiment analysis', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào cung cấp managed search engine?',
            explanation: 'Amazon OpenSearch Service (trước là Elasticsearch Service) cung cấp managed search và analytics.',
            answers: [
                { content: 'Amazon CloudSearch', isCorrect: false },
                { content: 'Amazon OpenSearch Service', isCorrect: true },
                { content: 'Amazon Athena', isCorrect: false },
                { content: 'Amazon Kendra', isCorrect: false },
            ],
        },
        {
            content: 'AWS Backup dùng để làm gì?',
            explanation: 'AWS Backup cung cấp centralized backup service cho nhiều AWS services.',
            answers: [
                { content: 'Chỉ backup EBS volumes', isCorrect: false },
                { content: 'Centralized backup cho nhiều AWS services', isCorrect: true },
                { content: 'Backup on-premises servers', isCorrect: false },
                { content: 'Archive emails', isCorrect: false },
            ],
        },
        {
            content: 'Khi nào nên chọn multi-AZ deployment cho RDS?',
            explanation: 'Multi-AZ tạo standby replica ở AZ khác, tự động failover — phù hợp cho production databases cần HA.',
            answers: [
                { content: 'Khi muốn tiết kiệm chi phí tối đa', isCorrect: false },
                { content: 'Khi cần high availability cho production databases', isCorrect: true },
                { content: 'Khi cần read performance', isCorrect: false },
                { content: 'Khi chỉ dùng cho development', isCorrect: false },
            ],
        },
        {
            content: 'Amazon Kendra dùng để làm gì?',
            explanation: 'Amazon Kendra là intelligent search service dùng ML để cung cấp natural language search.',
            answers: [
                { content: 'Quản lý documents', isCorrect: false },
                { content: 'Intelligent enterprise search với natural language', isCorrect: true },
                { content: 'Translate documents', isCorrect: false },
                { content: 'Summarize text', isCorrect: false },
            ],
        },
        {
            content: 'AWS Transit Gateway giải quyết vấn đề gì?',
            explanation: 'Transit Gateway kết nối nhiều VPCs và on-premises networks qua một hub duy nhất.',
            answers: [
                { content: 'Kết nối VPC ra internet', isCorrect: false },
                { content: 'Hub kết nối nhiều VPCs và on-premises networks', isCorrect: true },
                { content: 'Cache content', isCorrect: false },
                { content: 'Quản lý DNS', isCorrect: false },
            ],
        },
        {
            content: 'AWS Firewall Manager dùng để làm gì?',
            explanation: 'Firewall Manager quản lý tập trung WAF rules, Shield Advanced, Security Groups, Network Firewalls.',
            answers: [
                { content: 'Chỉ quản lý WAF', isCorrect: false },
                { content: 'Quản lý tập trung firewall rules cho nhiều accounts', isCorrect: true },
                { content: 'Thay thế Security Groups', isCorrect: false },
                { content: 'Quản lý VPN', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào giúp tự động hóa việc patching EC2 instances?',
            explanation: 'AWS Systems Manager Patch Manager tự động hóa patching OS và software cho EC2 instances.',
            answers: [
                { content: 'AWS Config', isCorrect: false },
                { content: 'AWS Systems Manager Patch Manager', isCorrect: true },
                { content: 'AWS Lambda', isCorrect: false },
                { content: 'AWS CloudFormation', isCorrect: false },
            ],
        },
        {
            content: 'Amazon Connect dùng để làm gì?',
            explanation: 'Amazon Connect là cloud-based contact center service cho customer support.',
            answers: [
                { content: 'Kết nối VPCs', isCorrect: false },
                { content: 'Cloud contact center cho customer support', isCorrect: true },
                { content: 'Message queue', isCorrect: false },
                { content: 'Video conferencing', isCorrect: false },
            ],
        },
        {
            content: 'AWS App Runner dùng để làm gì?',
            explanation: 'App Runner cho phép deploy containerized web apps và APIs mà không cần quản lý infrastructure.',
            answers: [
                { content: 'Build container images', isCorrect: false },
                { content: 'Deploy web apps đơn giản không cần quản lý infrastructure', isCorrect: true },
                { content: 'Quản lý Kubernetes clusters', isCorrect: false },
                { content: 'Orchestrate microservices', isCorrect: false },
            ],
        },
    ],
};
