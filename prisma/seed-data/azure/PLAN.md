# 📋 Plan: Tạo 20 bài thi Azure trong `prisma/seed-data/azure/`

## 📌 Thông tin chung

- **Thư mục**: `prisma/seed-data/azure/`
- **Ngôn ngữ**: TypeScript
- **Format file**: Giống các file trong `prisma/seed-data/aws/` (export const, object literal)
- **Ngôn ngữ câu hỏi**: Tiếng Việt (có thuật ngữ kỹ thuật tiếng Anh), giống style AWS exams đã có
- **Mỗi câu hỏi gồm**: `content`, `explanation`, `answers` (4 đáp án, 1 isCorrect: true)

---

## 📊 Danh sách 5 Azure Courses (từ `courses.ts`)

| Course ID | Tên Course | Mã thi | Level |
|-----------|-----------|--------|-------|
| 7 | Azure Fundamentals | AZ-900 | Practitioner |
| 8 | Azure Administrator | AZ-104 | Associate |
| 9 | Azure Developer Associate | AZ-204 | Associate |
| 10 | Azure Solutions Architect Expert | AZ-305 | Expert |
| 11 | Azure DevOps Engineer Expert | AZ-400 | Expert |

---

## 📝 Chi tiết 20 bài thi (theo thông số thi thật Microsoft)

### 1️⃣ AZ-900 — Azure Fundamentals (courseId: 7)
- **Số câu**: 40-60 câu → Dùng **50 câu/đề**
- **Thời gian**: 65 phút → Dùng **65 phút**
- **Số đề**: **4 đề**

| # | File | Export Name | Title |
|---|------|-------------|-------|
| 1 | `az-900-exam1.ts` | `az900Exam1` | Azure Fundamentals AZ-900 - Đề thi thử 1 |
| 2 | `az-900-exam2.ts` | `az900Exam2` | Azure Fundamentals AZ-900 - Đề thi thử 2 |
| 3 | `az-900-exam3.ts` | `az900Exam3` | Azure Fundamentals AZ-900 - Đề thi thử 3 |
| 4 | `az-900-exam4.ts` | `az900Exam4` | Azure Fundamentals AZ-900 - Đề thi thử 4 |

**Chủ đề cần cover (theo exam domains):**
- Cloud Concepts (25-30%): cloud models (IaaS, PaaS, SaaS), benefits of cloud, cloud service types
- Azure Architecture & Services (35-40%): regions, availability zones, resource groups, subscriptions, management groups, Azure compute, networking, storage services
- Azure Management & Governance (30-35%): cost management, governance features (Azure Policy, RBAC, resource locks), monitoring tools (Azure Monitor, Service Health, Advisor)

---

### 2️⃣ AZ-104 — Azure Administrator (courseId: 8)
- **Số câu**: 40-60 câu → Dùng **55 câu/đề**
- **Thời gian**: 120 phút → Dùng **120 phút**
- **Số đề**: **4 đề**

| # | File | Export Name | Title |
|---|------|-------------|-------|
| 5 | `az-104-exam1.ts` | `az104Exam1` | Azure Administrator AZ-104 - Đề thi thử 1 |
| 6 | `az-104-exam2.ts` | `az104Exam2` | Azure Administrator AZ-104 - Đề thi thử 2 |
| 7 | `az-104-exam3.ts` | `az104Exam3` | Azure Administrator AZ-104 - Đề thi thử 3 |
| 8 | `az-104-exam4.ts` | `az104Exam4` | Azure Administrator AZ-104 - Đề thi thử 4 |

**Chủ đề cần cover (theo exam domains):**
- Manage Azure identities and governance (20-25%): Azure AD, RBAC, subscriptions, Azure Policy, resource locks
- Implement and manage storage (15-20%): storage accounts, blob storage, Azure Files, storage security, redundancy
- Deploy and manage Azure compute resources (20-25%): VMs, App Service, container solutions (ACI, AKS), Azure Functions
- Implement and manage virtual networking (15-20%): VNet, NSG, Azure DNS, VNet peering, VPN Gateway, ExpressRoute, Azure Firewall, load balancing
- Monitor and maintain Azure resources (10-15%): Azure Monitor, Log Analytics, alerts, Azure Backup, Azure Site Recovery

---

### 3️⃣ AZ-204 — Azure Developer Associate (courseId: 9)
- **Số câu**: 40-60 câu → Dùng **55 câu/đề**
- **Thời gian**: 120 phút → Dùng **120 phút**
- **Số đề**: **4 đề**

| # | File | Export Name | Title |
|---|------|-------------|-------|
| 9 | `az-204-exam1.ts` | `az204Exam1` | Azure Developer Associate AZ-204 - Đề thi thử 1 |
| 10 | `az-204-exam2.ts` | `az204Exam2` | Azure Developer Associate AZ-204 - Đề thi thử 2 |
| 11 | `az-204-exam3.ts` | `az204Exam3` | Azure Developer Associate AZ-204 - Đề thi thử 3 |
| 12 | `az-204-exam4.ts` | `az204Exam4` | Azure Developer Associate AZ-204 - Đề thi thử 4 |

**Chủ đề cần cover (theo exam domains):**
- Develop Azure compute solutions (25-30%): Azure App Service, Azure Functions, containerized solutions (ACR, ACI, AKS)
- Develop for Azure storage (15-20%): Cosmos DB, Blob Storage, Table Storage
- Implement Azure security (20-25%): Microsoft Identity Platform, Microsoft Graph, Azure Key Vault, Managed Identities
- Monitor, troubleshoot, and optimize Azure solutions (15-20%): Azure CDN, Application Insights, Azure Cache for Redis
- Connect to and consume Azure services (15-20%): API Management, Event Grid, Event Hub, Service Bus, Azure Queue Storage

---

### 4️⃣ AZ-305 — Azure Solutions Architect Expert (courseId: 10)
- **Số câu**: 40-60 câu → Dùng **55 câu/đề**
- **Thời gian**: 120 phút → Dùng **120 phút**
- **Số đề**: **4 đề**

| # | File | Export Name | Title |
|---|------|-------------|-------|
| 13 | `az-305-exam1.ts` | `az305Exam1` | Azure Solutions Architect Expert AZ-305 - Đề thi thử 1 |
| 14 | `az-305-exam2.ts` | `az305Exam2` | Azure Solutions Architect Expert AZ-305 - Đề thi thử 2 |
| 15 | `az-305-exam3.ts` | `az305Exam3` | Azure Solutions Architect Expert AZ-305 - Đề thi thử 3 |
| 16 | `az-305-exam4.ts` | `az305Exam4` | Azure Solutions Architect Expert AZ-305 - Đề thi thử 4 |

**Chủ đề cần cover (theo exam domains):**
- Design identity, governance, and monitoring solutions (25-30%): Azure AD, conditional access, multi-factor auth, governance hierarchy, Azure Monitor, Log Analytics
- Design data storage solutions (20-25%): relational databases (Azure SQL, MySQL, PostgreSQL), non-relational (Cosmos DB, Table Storage), storage accounts, data integration
- Design business continuity solutions (10-15%): Azure Backup, Azure Site Recovery, high availability, disaster recovery patterns
- Design infrastructure solutions (25-30%): compute (VMs, App Service, AKS, Functions), networking (VNet, hub-spoke, hybrid, Front Door, Traffic Manager, Application Gateway), migrations

---

### 5️⃣ AZ-400 — Azure DevOps Engineer Expert (courseId: 11)
- **Số câu**: 40-60 câu → Dùng **55 câu/đề**
- **Thời gian**: 120 phút → Dùng **120 phút**
- **Số đề**: **4 đề**

| # | File | Export Name | Title |
|---|------|-------------|-------|
| 17 | `az-400-exam1.ts` | `az400Exam1` | Azure DevOps Engineer Expert AZ-400 - Đề thi thử 1 |
| 18 | `az-400-exam2.ts` | `az400Exam2` | Azure DevOps Engineer Expert AZ-400 - Đề thi thử 2 |
| 19 | `az-400-exam3.ts` | `az400Exam3` | Azure DevOps Engineer Expert AZ-400 - Đề thi thử 3 |
| 20 | `az-400-exam4.ts` | `az400Exam4` | Azure DevOps Engineer Expert AZ-400 - Đề thi thử 4 |

**Chủ đề cần cover (theo exam domains):**
- Configure processes and communications (10-15%): Azure Boards, work item tracking, dashboards, team collaboration
- Design and implement source control (15-20%): Git branching strategies, Azure Repos, GitHub integration, pull request workflows
- Design and implement build and release pipelines (40-45%): Azure Pipelines (YAML/classic), build agents, artifacts, deployment strategies (blue/green, canary, rolling), multi-stage pipelines, release gates, GitHub Actions
- Develop a security and compliance plan (10-15%): Azure Key Vault, secure files, service connections, code scanning (SonarQube, WhiteSource), OWASP
- Implement an instrumentation strategy (10-15%): Azure Monitor, Application Insights, Log Analytics, alerts, dashboards, distributed tracing

---

## 📐 Template Code cho mỗi file

```typescript
export const az900Exam1 = {
    title: 'Azure Fundamentals AZ-900 - Đề thi thử 1',
    description: 'Đề thi thử Azure Fundamentals AZ-900 gồm 50 câu hỏi về cloud concepts, Azure services, management & governance.',
    durationMinutes: 65,
    courseId: 7,
    questions: [
        {
            content: 'Câu hỏi bằng tiếng Việt, có thuật ngữ kỹ thuật English?',
            explanation: 'Giải thích đầy đủ bằng tiếng Việt.',
            answers: [
                { content: 'Đáp án A', isCorrect: false },
                { content: 'Đáp án B (đúng)', isCorrect: true },
                { content: 'Đáp án C', isCorrect: false },
                { content: 'Đáp án D', isCorrect: false },
            ],
        },
        // ... thêm câu hỏi
    ],
};
```

---

## 📊 Tổng kết

| Mã thi | Số đề | Số câu/đề | Thời gian | courseId | Tổng câu hỏi |
|--------|-------|-----------|-----------|---------|---------------|
| AZ-900 | 4 | 50 | 65 phút | 7 | 200 |
| AZ-104 | 4 | 55 | 120 phút | 8 | 220 |
| AZ-204 | 4 | 55 | 120 phút | 9 | 220 |
| AZ-305 | 4 | 55 | 120 phút | 10 | 220 |
| AZ-400 | 4 | 55 | 120 phút | 11 | 220 |
| **Tổng** | **20** | | | | **1,080** |

---

## 🔧 Sau khi tạo xong 20 file, cần update `seed.ts`:

### 1. Thêm imports:
```typescript
// Azure Fundamentals AZ-900 (courseId: 7)
import { az900Exam1 } from './seed-data/azure/az-900-exam1';
import { az900Exam2 } from './seed-data/azure/az-900-exam2';
import { az900Exam3 } from './seed-data/azure/az-900-exam3';
import { az900Exam4 } from './seed-data/azure/az-900-exam4';
// Azure Administrator AZ-104 (courseId: 8)
import { az104Exam1 } from './seed-data/azure/az-104-exam1';
import { az104Exam2 } from './seed-data/azure/az-104-exam2';
import { az104Exam3 } from './seed-data/azure/az-104-exam3';
import { az104Exam4 } from './seed-data/azure/az-104-exam4';
// Azure Developer Associate AZ-204 (courseId: 9)
import { az204Exam1 } from './seed-data/azure/az-204-exam1';
import { az204Exam2 } from './seed-data/azure/az-204-exam2';
import { az204Exam3 } from './seed-data/azure/az-204-exam3';
import { az204Exam4 } from './seed-data/azure/az-204-exam4';
// Azure Solutions Architect Expert AZ-305 (courseId: 10)
import { az305Exam1 } from './seed-data/azure/az-305-exam1';
import { az305Exam2 } from './seed-data/azure/az-305-exam2';
import { az305Exam3 } from './seed-data/azure/az-305-exam3';
import { az305Exam4 } from './seed-data/azure/az-305-exam4';
// Azure DevOps Engineer Expert AZ-400 (courseId: 11)
import { az400Exam1 } from './seed-data/azure/az-400-exam1';
import { az400Exam2 } from './seed-data/azure/az-400-exam2';
import { az400Exam3 } from './seed-data/azure/az-400-exam3';
import { az400Exam4 } from './seed-data/azure/az-400-exam4';
```

### 2. Thêm vào allExams array (sau phần AWS):
```typescript
// Azure Fundamentals AZ-900 (IDs 28-31)
az900Exam1,
az900Exam2,
az900Exam3,
az900Exam4,
// Azure Administrator AZ-104 (IDs 32-35)
az104Exam1,
az104Exam2,
az104Exam3,
az104Exam4,
// Azure Developer Associate AZ-204 (IDs 36-39)
az204Exam1,
az204Exam2,
az204Exam3,
az204Exam4,
// Azure Solutions Architect Expert AZ-305 (IDs 40-43)
az305Exam1,
az305Exam2,
az305Exam3,
az305Exam4,
// Azure DevOps Engineer Expert AZ-400 (IDs 44-47)
az400Exam1,
az400Exam2,
az400Exam3,
az400Exam4,
```

---

## ⚠️ Lưu ý quan trọng

1. **Không trùng câu hỏi** giữa các đề cùng mã thi — mỗi đề phải có câu hỏi riêng
2. **Câu hỏi sát đề thật**: phản ánh đúng exam domains & weightings của Microsoft
3. **Mỗi câu có 4 đáp án**, chỉ 1 đáp án đúng (`isCorrect: true`)
4. **Explanation phải giải thích rõ ràng** tại sao đáp án đúng là đúng
5. **courseId phải khớp** với bảng courses ở trên
6. **Question ID multiplier**: Hiện tại `seed.ts` dùng `examIndex * 1000`, đủ cho tổng 47 exams
7. **Thứ tự** trong `allExams` array: AWS exams ID 1-27, Azure exams ID 28-47
