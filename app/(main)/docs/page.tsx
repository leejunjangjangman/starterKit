import type { Metadata } from 'next'
import { PageHeader } from '@/components/common/page-header'

export const metadata: Metadata = {
  title: '문서',
}

export default function DocsPage() {
  return (
    <div className="space-y-6 p-6">
      <PageHeader
        title="문서"
        description="추후 추가될 예정입니다"
      />
      <div className="rounded-lg border border-border bg-card p-6 text-center">
        <p className="text-muted-foreground">문서 페이지는 준비 중입니다.</p>
      </div>
    </div>
  )
}
