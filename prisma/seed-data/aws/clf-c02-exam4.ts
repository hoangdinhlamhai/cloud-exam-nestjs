export const clfC02Exam4 = {
    title: 'AWS Cloud Practitioner CLF-C02 - Đề thi thử 4',
    description:
        'Đề thi thử AWS Cloud Practitioner CLF-C02 số 4. 65 câu hỏi tổng hợp kiến thức Cloud Concepts, Security, Technology, Billing & Pricing.',
    durationMinutes: 90,
    courseId: 1,
    questions: [
        {
            content: 'Elasticity trong cloud computing có nghĩa là gì?',
            explanation: 'Elasticity là khả năng tự động tăng giảm resources theo nhu cầu thực tế.',
            answers: [
                { content: 'Luôn chạy ở capacity tối đa', isCorrect: false },
                { content: 'Tự động tăng giảm resources theo nhu cầu', isCorrect: true },
                { content: 'Chạy trên nhiều Regions', isCorrect: false },
                { content: 'Sử dụng dedicated hardware', isCorrect: false },
            ],
        },
        {
            content: 'AWS Artifact khác AWS Config như thế nào?',
            explanation: 'Artifact cung cấp compliance reports/agreements, Config theo dõi resource configuration changes.',
            answers: [
                { content: 'Giống nhau, đều monitor resources', isCorrect: false },
                { content: 'Artifact cung cấp compliance docs, Config theo dõi resource configs', isCorrect: true },
                { content: 'Config cung cấp compliance docs', isCorrect: false },
                { content: 'Artifact theo dõi resource changes', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào cung cấp managed relational database với auto-scaling storage?',
            explanation: 'Amazon Aurora Serverless v2 auto-scales cả compute và storage, Aurora standard auto-scales storage.',
            answers: [
                { content: 'Amazon DynamoDB', isCorrect: false },
                { content: 'Amazon Aurora', isCorrect: true },
                { content: 'Amazon ElastiCache', isCorrect: false },
                { content: 'Amazon Keyspaces', isCorrect: false },
            ],
        },
        {
            content: 'AWS CloudHSM khác AWS KMS ở điểm nào?',
            explanation: 'CloudHSM cung cấp dedicated hardware security modules, KMS là shared managed service.',
            answers: [
                { content: 'Không có sự khác biệt', isCorrect: false },
                { content: 'CloudHSM là dedicated HSM hardware, KMS là shared managed service', isCorrect: true },
                { content: 'KMS đắt hơn CloudHSM', isCorrect: false },
                { content: 'CloudHSM chỉ cho S3', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào giúp detect và response security incidents?',
            explanation: 'Amazon Detective giúp phân tích và investigate security findings, xác định root causes.',
            answers: [
                { content: 'Amazon Inspector', isCorrect: false },
                { content: 'Amazon Detective', isCorrect: true },
                { content: 'Amazon Macie', isCorrect: false },
                { content: 'AWS Audit Manager', isCorrect: false },
            ],
        },
        {
            content: 'S3 Object Lock cung cấp gì?',
            explanation: 'S3 Object Lock ngăn objects bị xóa hoặc overwrite trong khoảng thời gian cố định (WORM model).',
            answers: [
                { content: 'Mã hóa objects', isCorrect: false },
                { content: 'Write-Once-Read-Many (WORM) protection', isCorrect: true },
                { content: 'Cross-region replication', isCorrect: false },
                { content: 'Lifecycle management', isCorrect: false },
            ],
        },
        {
            content: 'AWS Local Zones dùng cho mục đích gì?',
            explanation: 'Local Zones đưa AWS compute, storage gần end-users hơn cho latency-sensitive applications.',
            answers: [
                { content: 'Backup data centers', isCorrect: false },
                { content: 'Đưa AWS services gần end-users cho low latency', isCorrect: true },
                { content: 'Quản lý DNS', isCorrect: false },
                { content: 'Content delivery', isCorrect: false },
            ],
        },
        {
            content: 'AWS Audit Manager dùng để làm gì?',
            explanation: 'Audit Manager tự động thu thập evidence để audit, hỗ trợ compliance.',
            answers: [
                { content: 'Financial auditing', isCorrect: false },
                { content: 'Tự động thu thập evidence cho compliance audits', isCorrect: true },
                { content: 'Security scanning', isCorrect: false },
                { content: 'Cost management', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào giúp tạo GraphQL APIs?',
            explanation: 'AWS AppSync là managed GraphQL service kết nối apps với data sources.',
            answers: [
                { content: 'Amazon API Gateway', isCorrect: false },
                { content: 'AWS AppSync', isCorrect: true },
                { content: 'AWS Lambda', isCorrect: false },
                { content: 'Amazon CloudFront', isCorrect: false },
            ],
        },
        {
            content: 'Amazon MemoryDB for Redis dùng để làm gì?',
            explanation: 'MemoryDB là Redis-compatible, durable, in-memory database cho ultra-fast performance.',
            answers: [
                { content: 'Relational database', isCorrect: false },
                { content: 'Durable in-memory database tương thích Redis', isCorrect: true },
                { content: 'Data warehouse', isCorrect: false },
                { content: 'Document database', isCorrect: false },
            ],
        },
        {
            content: 'AWS PrivateLink cung cấp gì?',
            explanation: 'PrivateLink cho phép truy cập AWS services qua VPC endpoint, traffic không qua internet.',
            answers: [
                { content: 'VPN connection', isCorrect: false },
                { content: 'Private connectivity đến AWS services qua VPC', isCorrect: true },
                { content: 'Public IP management', isCorrect: false },
                { content: 'DNS management', isCorrect: false },
            ],
        },
        {
            content: 'Lợi ích chính của cloud computing về mặt kinh tế là gì?',
            explanation: 'Cloud chuyển CapEx (chi phí vốn) thành OpEx (chi phí vận hành), giảm đầu tư ban đầu.',
            answers: [
                { content: 'Tăng CapEx', isCorrect: false },
                { content: 'Chuyển CapEx thành OpEx (variable expense)', isCorrect: true },
                { content: 'Loại bỏ hoàn toàn chi phí IT', isCorrect: false },
                { content: 'Fixed monthly pricing cho tất cả services', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào cung cấp hardware-based root of trust cho EC2 instances?',
            explanation: 'AWS Nitro System cung cấp hardware-based security with dedicated hardware for security functions.',
            answers: [
                { content: 'AWS CloudHSM', isCorrect: false },
                { content: 'AWS Nitro System', isCorrect: true },
                { content: 'AWS KMS', isCorrect: false },
                { content: 'Amazon Inspector', isCorrect: false },
            ],
        },
        {
            content: 'AWS Data Exchange dùng để làm gì?',
            explanation: 'Data Exchange cho phép tìm, subscribe và sử dụng third-party data trong AWS cloud.',
            answers: [
                { content: 'Transfer files giữa accounts', isCorrect: false },
                { content: 'Tìm và subscribe third-party data products', isCorrect: true },
                { content: 'Replicate databases', isCorrect: false },
                { content: 'Sync on-premises data', isCorrect: false },
            ],
        },
        {
            content: 'Amazon EKS Anywhere dùng để làm gì?',
            explanation: 'EKS Anywhere cho phép chạy Kubernetes clusters on-premises với EKS tooling.',
            answers: [
                { content: 'Chạy EKS trên AWS cloud', isCorrect: false },
                { content: 'Chạy Kubernetes on-premises với EKS tooling', isCorrect: true },
                { content: 'Deploy serverless containers', isCorrect: false },
                { content: 'Manage Docker images', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào giúp quản lý IoT devices?',
            explanation: 'AWS IoT Core cho phép kết nối và quản lý IoT devices, xử lý messages, trigger actions.',
            answers: [
                { content: 'Amazon Connect', isCorrect: false },
                { content: 'AWS IoT Core', isCorrect: true },
                { content: 'Amazon Kinesis', isCorrect: false },
                { content: 'Amazon SQS', isCorrect: false },
            ],
        },
        {
            content: 'AWS License Manager dùng để làm gì?',
            explanation: 'License Manager giúp quản lý software licenses từ vendors như Microsoft, SAP, Oracle trên AWS.',
            answers: [
                { content: 'Quản lý SSL certificates', isCorrect: false },
                { content: 'Quản lý software licenses', isCorrect: true },
                { content: 'Quản lý IAM policies', isCorrect: false },
                { content: 'Quản lý encryption keys', isCorrect: false },
            ],
        },
        {
            content: 'Amazon FSx cung cấp gì?',
            explanation: 'Amazon FSx cung cấp fully managed file systems — FSx for Windows, Lustre, NetApp ONTAP, OpenZFS.',
            answers: [
                { content: 'Object storage', isCorrect: false },
                { content: 'Fully managed third-party file systems', isCorrect: true },
                { content: 'Block storage', isCorrect: false },
                { content: 'Tape storage', isCorrect: false },
            ],
        },
        {
            content: 'AWS Support Plan nào có response time 15 phút cho business-critical system down?',
            explanation: 'Enterprise Support Plan cung cấp response time 15 phút cho business-critical system down.',
            answers: [
                { content: 'Developer', isCorrect: false },
                { content: 'Business', isCorrect: false },
                { content: 'Enterprise', isCorrect: true },
                { content: 'Basic', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào cho phép tạo virtual private cloud có subnets?',
            explanation: 'Amazon VPC cho phép tạo VPC với public và private subnets, route tables, gateways.',
            answers: [
                { content: 'AWS Direct Connect', isCorrect: false },
                { content: 'Amazon VPC', isCorrect: true },
                { content: 'Amazon CloudFront', isCorrect: false },
                { content: 'AWS Transit Gateway', isCorrect: false },
            ],
        },
        {
            content: 'Khi nào nên sử dụng S3 Intelligent-Tiering?',
            explanation: 'S3 Intelligent-Tiering tự động di chuyển objects giữa tiers dựa trên access patterns, lý tưởng khi không biết trước patterns.',
            answers: [
                { content: 'Khi data luôn được truy cập thường xuyên', isCorrect: false },
                { content: 'Khi không biết trước access patterns', isCorrect: true },
                { content: 'Khi cần archive dữ liệu vĩnh viễn', isCorrect: false },
                { content: 'Khi cần low latency nhất', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào cung cấp managed blockchain?',
            explanation: 'Amazon Managed Blockchain cho phép tạo và quản lý blockchain networks với Hyperledger Fabric hoặc Ethereum.',
            answers: [
                { content: 'Amazon QLDB', isCorrect: false },
                { content: 'Amazon Managed Blockchain', isCorrect: true },
                { content: 'Amazon DynamoDB', isCorrect: false },
                { content: 'Amazon Keyspaces', isCorrect: false },
            ],
        },
        {
            content: 'AWS re:Post là gì?',
            explanation: 'AWS re:Post là community-driven Q&A service (thay thế AWS Forums).',
            answers: [
                { content: 'CI/CD tool', isCorrect: false },
                { content: 'Community Q&A service', isCorrect: true },
                { content: 'Training platform', isCorrect: false },
                { content: 'Billing dashboard', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào cung cấp immutable ledger database?',
            explanation: 'Amazon QLDB (Quantum Ledger Database) cung cấp immutable, verifiable transaction log.',
            answers: [
                { content: 'Amazon DynamoDB', isCorrect: false },
                { content: 'Amazon QLDB', isCorrect: true },
                { content: 'Amazon Aurora', isCorrect: false },
                { content: 'Amazon DocumentDB', isCorrect: false },
            ],
        },
        {
            content: 'AWS Network Firewall dùng để làm gì?',
            explanation: 'AWS Network Firewall cung cấp managed network firewall cho VPC.',
            answers: [
                { content: 'Thay thế Security Groups', isCorrect: false },
                { content: 'Managed network firewall cho VPC', isCorrect: true },
                { content: 'Web application firewall', isCorrect: false },
                { content: 'DDoS protection', isCorrect: false },
            ],
        },
        {
            content: 'AWS ParallelCluster dùng để làm gì?',
            explanation: 'ParallelCluster giúp deploy và manage HPC (High Performance Computing) clusters.',
            answers: [
                { content: 'Quản lý containers', isCorrect: false },
                { content: 'Deploy và manage HPC clusters', isCorrect: true },
                { content: 'Data analytics', isCorrect: false },
                { content: 'Machine learning', isCorrect: false },
            ],
        },
        {
            content: 'Amazon Keyspaces tương thích với database nào?',
            explanation: 'Amazon Keyspaces là managed database service tương thích Apache Cassandra.',
            answers: [
                { content: 'MongoDB', isCorrect: false },
                { content: 'Apache Cassandra', isCorrect: true },
                { content: 'Redis', isCorrect: false },
                { content: 'PostgreSQL', isCorrect: false },
            ],
        },
        {
            content: 'AWS Proton dùng để làm gì?',
            explanation: 'AWS Proton là fully managed delivery service cho container và serverless applications.',
            answers: [
                { content: 'Quản lý databases', isCorrect: false },
                { content: 'Automated infrastructure provisioning cho containers/serverless', isCorrect: true },
                { content: 'Security scanning', isCorrect: false },
                { content: 'Cost optimization', isCorrect: false },
            ],
        },
        {
            content: 'AWS Ground Station dùng để làm gì?',
            explanation: 'Ground Station cho phép điều khiển satellite communications và xử lý satellite data.',
            answers: [
                { content: 'Quản lý data centers', isCorrect: false },
                { content: 'Satellite communications và data processing', isCorrect: true },
                { content: 'Edge computing', isCorrect: false },
                { content: 'IoT management', isCorrect: false },
            ],
        },
        {
            content: 'AWS DataSync dùng để làm gì?',
            explanation: 'DataSync tự động transfer data giữa on-premises storage và AWS, hoặc giữa các AWS services.',
            answers: [
                { content: 'Real-time data streaming', isCorrect: false },
                { content: 'Tự động transfer data giữa on-premises và AWS', isCorrect: true },
                { content: 'Database replication', isCorrect: false },
                { content: 'Application deployment', isCorrect: false },
            ],
        },
        {
            content: 'AWS Snow Family bao gồm những dịch vụ nào?',
            explanation: 'Snow Family gồm Snowcone, Snowball, Snowmobile — physical devices cho large-scale data transfer.',
            answers: [
                { content: 'Chỉ Snowball', isCorrect: false },
                { content: 'Snowcone, Snowball, Snowmobile', isCorrect: true },
                { content: 'Chỉ Snowball và Snowmobile', isCorrect: false },
                { content: 'Chỉ Snowcone', isCorrect: false },
            ],
        },
        {
            content: 'AWS Pricing Calculator khác Cost Explorer ở điểm nào?',
            explanation: 'Pricing Calculator ước tính chi phí TRƯỚC khi sử dụng, Cost Explorer phân tích chi phí ĐÃ sử dụng.',
            answers: [
                { content: 'Giống nhau', isCorrect: false },
                { content: 'Pricing Calculator ước tính trước, Cost Explorer phân tích sau', isCorrect: true },
                { content: 'Cost Explorer ước tính trước', isCorrect: false },
                { content: 'Pricing Calculator chỉ cho EC2', isCorrect: false },
            ],
        },
        {
            content: 'Dịch vụ nào cung cấp developer tools cho mobile apps?',
            explanation: 'AWS Amplify cung cấp frontend libraries, CI/CD, hosting cho web và mobile apps.',
            answers: [
                { content: 'AWS AppSync', isCorrect: false },
                { content: 'AWS Amplify', isCorrect: true },
                { content: 'Amazon Pinpoint', isCorrect: false },
                { content: 'AWS Device Farm', isCorrect: false },
            ],
        },
        {
            content: 'AWS Device Farm dùng để làm gì?',
            explanation: 'Device Farm cho phép test mobile apps trên real devices trong AWS cloud.',
            answers: [
                { content: 'Build mobile apps', isCorrect: false },
                { content: 'Test mobile apps trên real devices', isCorrect: true },
                { content: 'Deploy mobile apps', isCorrect: false },
                { content: 'Monitor mobile apps', isCorrect: false },
            ],
        },
        {
            content: 'AWS Migration Evaluator giúp gì?',
            explanation: 'Migration Evaluator phân tích on-premises environment và tạo business case cho migration sang AWS.',
            answers: [
                { content: 'Tự động migrate workloads', isCorrect: false },
                { content: 'Tạo business case cho cloud migration', isCorrect: true },
                { content: 'Monitor migration progress', isCorrect: false },
                { content: 'Deploy CloudFormation', isCorrect: false },
            ],
        },
    ],
};
