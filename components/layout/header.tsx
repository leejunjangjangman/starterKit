import Link from 'next/link'
import { HamburgerButton } from '@/components/layout/hamburger-button'
import { MobileMenu } from '@/components/layout/mobile-menu'
import type { NavItem } from '@/types'

const NAV_ITEMS: NavItem[] = [
  { label: '홈', href: '/' },
  { label: '대시보드', href: '/dashboard' },
  { label: '문서', href: '/docs' },
]

export function Header() {
  return (
    <>
      <header className="sticky top-0 z-30 h-14 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6">
          {/* 왼쪽: 로고 + 햄버거 */}
          <div className="flex items-center gap-3">
            <HamburgerButton />
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-bold text-foreground"
              aria-label="홈으로 이동"
            >
              <span className="inline-flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground text-xs font-black">
                N
              </span>
              <span className="hidden sm:inline">NextStarter</span>
            </Link>
          </div>

          {/* 가운데: 데스크탑 네비게이션 */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="주요 네비게이션"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                prefetch={item.href !== '/docs'}
                className="rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* 오른쪽: 액션 */}
          <div className="flex items-center gap-2">
            <Link
              href="/dashboard"
              className="hidden sm:inline-flex h-8 items-center rounded-lg bg-primary px-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              시작하기
            </Link>
          </div>
        </div>
      </header>
      {/* 모바일 메뉴는 헤더 밖에 렌더링 */}
      <MobileMenu navItems={NAV_ITEMS} />
    </>
  )
}
