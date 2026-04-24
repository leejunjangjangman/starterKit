import type { Metadata } from 'next'
import { Users, TrendingUp, ShoppingCart, DollarSign } from 'lucide-react'
import { StatCard } from '@/components/common/stat-card'
import { DataTable } from '@/components/common/data-table'
import { PageHeader } from '@/components/common/page-header'
import type { StatCard as StatCardType, TableRow, TableColumn } from '@/types'

export const metadata: Metadata = {
  title: '대시보드',
}

const STAT_CARDS: StatCardType[] = [
  {
    title: '총 사용자',
    value: '12,430',
    description: '이번 달 등록',
    trend: { value: 12, label: '전월 대비' },
    icon: Users,
  },
  {
    title: '매출',
    value: '₩4,230,000',
    description: '이번 달 총액',
    trend: { value: 8.1, label: '전월 대비' },
    icon: DollarSign,
  },
  {
    title: '주문 수',
    value: '1,893',
    description: '처리 완료',
    trend: { value: -3.2, label: '전월 대비' },
    icon: ShoppingCart,
  },
  {
    title: '성장률',
    value: '23.6%',
    description: '연간 성장',
    trend: { value: 4.5, label: '전년 대비' },
    icon: TrendingUp,
  },
]

interface UserRow extends TableRow {
  name: string
  email: string
  role: string
  status: string
  joinDate: string
}

const TABLE_DATA: UserRow[] = [
  {
    id: '1',
    name: '김민준',
    email: 'kim@example.com',
    role: '관리자',
    status: '활성',
    joinDate: '2024-01-15',
  },
  {
    id: '2',
    name: '이서연',
    email: 'lee@example.com',
    role: '편집자',
    status: '활성',
    joinDate: '2024-02-20',
  },
  {
    id: '3',
    name: '박지호',
    email: 'park@example.com',
    role: '뷰어',
    status: '비활성',
    joinDate: '2024-03-10',
  },
  {
    id: '4',
    name: '최유나',
    email: 'choi@example.com',
    role: '편집자',
    status: '활성',
    joinDate: '2024-04-05',
  },
  {
    id: '5',
    name: '정도현',
    email: 'jung@example.com',
    role: '뷰어',
    status: '활성',
    joinDate: '2024-05-18',
  },
]

const TABLE_COLUMNS: TableColumn<UserRow>[] = [
  { key: 'name', label: '이름' },
  { key: 'email', label: '이메일' },
  { key: 'role', label: '역할' },
  {
    key: 'status',
    label: '상태',
    render: (value) => (
      <span
        className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
          value === '활성'
            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
            : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
        }`}
      >
        {value as string}
      </span>
    ),
  },
  { key: 'joinDate', label: '가입일' },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6 p-6">
      <PageHeader
        title="대시보드"
        description="서비스 현황을 한눈에 확인하세요"
      />

      {/* 통계 카드 그리드 */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STAT_CARDS.map((card) => (
          <StatCard key={card.title} {...card} />
        ))}
      </div>

      {/* 사용자 테이블 */}
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-4 text-lg font-semibold text-card-foreground">
          사용자 목록
        </h2>
        <DataTable
          columns={TABLE_COLUMNS}
          data={TABLE_DATA}
          emptyStateTitle="사용자 없음"
          emptyStateDescription="등록된 사용자가 없습니다."
        />
      </div>
    </div>
  )
}
