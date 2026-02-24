export interface CourseData {
    id: number;
    providerId: number;
    title: string;
    description: string;
    level: 'Practitioner' | 'Associate' | 'Professional' | 'Expert';
    thumbnailUrl: string;
}

export const coursesData: CourseData[] = [
    // ═══════════════════════════════════════════════════
    // AWS Courses (providerId: 1) — 6 khoá
    // ═══════════════════════════════════════════════════
    {
        id: 1,
        providerId: 1,
        title: 'AWS Cloud Practitioner (CLF-C02)',
        description:
            'Chứng chỉ nền tảng dành cho người mới bắt đầu. Tìm hiểu về các khái niệm cloud cơ bản, dịch vụ AWS cốt lõi, bảo mật, kiến trúc, giá cả và hỗ trợ. Phù hợp cho tất cả các vai trò, kể cả non-technical.',
        level: 'Practitioner',
        thumbnailUrl:
            'https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png',
    },
    {
        id: 2,
        providerId: 1,
        title: 'AWS Solutions Architect Associate (SAA-C03)',
        description:
            'Thiết kế hệ thống phân tán trên AWS. Bao gồm compute, storage, database, networking, high availability, fault tolerance và cost optimization. Yêu cầu ít nhất 1 năm kinh nghiệm thực hành với AWS.',
        level: 'Associate',
        thumbnailUrl:
            'https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Associate_badge.3419559c682629072f1eb968d59dea0741772c0f.png',
    },
    {
        id: 3,
        providerId: 1,
        title: 'AWS Developer Associate (DVA-C02)',
        description:
            'Phát triển và bảo trì ứng dụng trên AWS. Nắm vững Lambda, API Gateway, DynamoDB, S3, SQS/SNS, CI/CD với CodePipeline, debugging với X-Ray và CloudWatch. Yêu cầu kinh nghiệm lập trình và 1 năm với AWS.',
        level: 'Associate',
        thumbnailUrl:
            'https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Developer-Associate_badge.5c083fa855fe82c1cf2d0c8b883c265ec72a17c0.png',
    },
    {
        id: 4,
        providerId: 1,
        title: 'AWS SysOps Administrator Associate (SOA-C02)',
        description:
            'Quản trị và vận hành hệ thống trên AWS. Triển khai, quản lý và vận hành workloads, bảo mật, monitoring với CloudWatch, automation với CloudFormation và Systems Manager. Yêu cầu 1 năm kinh nghiệm sysops.',
        level: 'Associate',
        thumbnailUrl:
            'https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-SysOps-Administrator-Associate_badge.c3586b02748654fb588633571f5571e0e2b43f17.png',
    },
    {
        id: 5,
        providerId: 1,
        title: 'AWS Solutions Architect Professional (SAP-C02)',
        description:
            'Chứng chỉ kiến trúc sư cấp cao nhất. Thiết kế kiến trúc phức tạp, multi-account, hybrid, migration strategies, disaster recovery, cost control nâng cao. Yêu cầu ít nhất 2 năm kinh nghiệm thiết kế hệ thống trên AWS.',
        level: 'Professional',
        thumbnailUrl:
            'https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Professional_badge.69d82ff1b2861e1089539ebba906c70b011b928a.png',
    },
    {
        id: 6,
        providerId: 1,
        title: 'AWS DevOps Engineer Professional (DOP-C02)',
        description:
            'Chứng chỉ DevOps cấp cao. Triển khai CI/CD pipelines, infrastructure as code, monitoring & logging, incident response, automation trên AWS. Yêu cầu 2 năm kinh nghiệm provisioning, operating và managing AWS environments.',
        level: 'Professional',
        thumbnailUrl:
            'https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-DevOps-Engineer-Professional_badge.7b84b7e25e5eab3e41acb30dbd49ad89a4410c42.png',
    },

    // ═══════════════════════════════════════════════════
    // Azure Courses (providerId: 2) — 5 khoá
    // ═══════════════════════════════════════════════════
    {
        id: 7,
        providerId: 2,
        title: 'Azure Fundamentals (AZ-900)',
        description:
            'Chứng chỉ nền tảng Azure cho người mới bắt đầu. Tìm hiểu về cloud concepts, Azure services cốt lõi, security, privacy, compliance, pricing và support. Không yêu cầu kinh nghiệm kỹ thuật.',
        level: 'Practitioner',
        thumbnailUrl:
            'https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg',
    },
    {
        id: 8,
        providerId: 2,
        title: 'Azure Administrator (AZ-104)',
        description:
            'Quản trị Azure subscriptions, identity management, storage, virtual networks, compute resources và monitoring. Yêu cầu ít nhất 6 tháng kinh nghiệm quản trị Azure và hiểu biết về networking, storage, compute.',
        level: 'Associate',
        thumbnailUrl:
            'https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg',
    },
    {
        id: 9,
        providerId: 2,
        title: 'Azure Developer Associate (AZ-204)',
        description:
            'Phát triển cloud solutions trên Azure. Bao gồm Azure App Service, Azure Functions, Cosmos DB, Blob Storage, authentication với Azure AD, caching, CDN và message-based solutions. Yêu cầu 1-2 năm kinh nghiệm phát triển.',
        level: 'Associate',
        thumbnailUrl:
            'https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg',
    },
    {
        id: 10,
        providerId: 2,
        title: 'Azure Solutions Architect Expert (AZ-305)',
        description:
            'Thiết kế giải pháp hạ tầng, dữ liệu, bảo mật và business continuity trên Azure. Chứng chỉ cấp Expert yêu cầu kinh nghiệm nâng cao về IT operations bao gồm networking, virtualization, identity, security, và data platforms.',
        level: 'Expert',
        thumbnailUrl:
            'https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-expert-badge.svg',
    },
    {
        id: 11,
        providerId: 2,
        title: 'Azure DevOps Engineer Expert (AZ-400)',
        description:
            'Kết hợp people, process và technologies để liên tục deliver các sản phẩm có giá trị. Thiết kế và triển khai DevOps practices cho version control, compliance, CI/CD, configuration management, monitoring trên Azure.',
        level: 'Expert',
        thumbnailUrl:
            'https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-expert-badge.svg',
    },

    // ═══════════════════════════════════════════════════
    // GCP Courses (providerId: 3) — 4 khoá
    // ═══════════════════════════════════════════════════
    {
        id: 12,
        providerId: 3,
        title: 'Google Cloud Digital Leader',
        description:
            'Chứng chỉ nền tảng của Google Cloud. Hiểu về các sản phẩm và dịch vụ Google Cloud, digital transformation, data & AI/ML, infrastructure, security. Phù hợp cho tất cả các vai trò, không yêu cầu kiến thức kỹ thuật sâu.',
        level: 'Practitioner',
        thumbnailUrl:
            'https://cloud.google.com/static/images/certification/badges/cloud-digital-leader.svg',
    },
    {
        id: 13,
        providerId: 3,
        title: 'Google Cloud Associate Cloud Engineer',
        description:
            'Deploy applications, monitor operations, và manage enterprise solutions trên GCP. Bao gồm Compute Engine, GKE, Cloud Storage, BigQuery, IAM, networking. Yêu cầu 6+ tháng kinh nghiệm với Google Cloud.',
        level: 'Associate',
        thumbnailUrl:
            'https://cloud.google.com/static/images/certification/badges/associate-cloud-engineer.svg',
    },
    {
        id: 14,
        providerId: 3,
        title: 'Google Cloud Professional Cloud Architect',
        description:
            'Thiết kế, phát triển và quản lý giải pháp cloud an toàn, có khả năng mở rộng và đáng tin cậy. Bao gồm thiết kế kiến trúc, migration planning, security & compliance, chi phí tối ưu. Yêu cầu 3+ năm kinh nghiệm trong ngành, 1+ năm với GCP.',
        level: 'Professional',
        thumbnailUrl:
            'https://cloud.google.com/static/images/certification/badges/professional-cloud-architect.svg',
    },
    {
        id: 15,
        providerId: 3,
        title: 'Google Cloud Professional Data Engineer',
        description:
            'Thu thập, biến đổi và publish dữ liệu. Thiết kế data processing systems, ML models, data pipeline trên GCP với BigQuery, Dataflow, Dataproc, Pub/Sub, Cloud Storage. Yêu cầu 3+ năm kinh nghiệm và 1+ năm với GCP.',
        level: 'Professional',
        thumbnailUrl:
            'https://cloud.google.com/static/images/certification/badges/professional-data-engineer.svg',
    },
];
