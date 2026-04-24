import Link from 'next/link'
import { ArrowRight, Zap, Shield, Layers } from 'lucide-react'
import { Button } from '@/components/ui/button'

const FEATURES: Array<{
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}> = [
  {
    icon: Zap,
    title: '빠른 개발',
    description: '미리 구성된 컴포넌트와 레이아웃으로 즉시 개발을 시작하세요.',
  },
  {
    icon: Shield,
    title: 'TypeScript 완벽 지원',
    description: 'Strict 모드와 완전한 타입 안전성으로 안정적인 코드를 작성하세요.',
  },
  {
    icon: Layers,
    title: '모던 스택',
    description: 'Next.js 15, React 19, Tailwind v4, shadcn/ui의 최신 기능을 활용하세요.',
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 히어로 섹션 */}
      <section className="flex flex-1 flex-col items-center justify-center gap-8 px-4 py-24 text-center sm:py-32">
        <div className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
          Next.js 15 + React 19 + Tailwind v4
        </div>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          모던 웹 개발을{' '}
          <span className="text-primary">빠르게</span> 시작하세요
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
          최신 기술 스택으로 구성된 스타터킷. 설정 없이 바로 개발을 시작할 수 있습니다.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button size="lg" asChild>
            <Link href="/dashboard">
              대시보드 보기 <ArrowRight className="ml-1 size-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </Button>
        </div>
      </section>

      {/* 피처 섹션 */}
      <section className="border-t border-border bg-muted/30 px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-foreground">
            왜 NextStarter인가요?
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6"
              >
                <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="size-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-card-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="px-4 py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-2xl border border-border bg-card p-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-card-foreground">
            지금 바로 시작하세요
          </h2>
          <p className="text-muted-foreground">
            클론하고 개발을 시작하세요. 설정 시간을 절약하세요.
          </p>
          <Button size="lg" asChild>
            <Link href="/dashboard">
              대시보드로 이동 <ArrowRight className="ml-1 size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
