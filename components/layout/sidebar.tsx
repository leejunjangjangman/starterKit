'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import {
  ChevronLeft,
  LayoutDashboard,
  Home,
  Settings,
  BarChart3,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { useUIStore } from '@/store/ui-store'
import { useIsMobile } from '@/hooks/use-media-query'
import type { SidebarItem } from '@/types'

const SIDEBAR_ITEMS: SidebarItem[] = [
  { label: '홈', href: '/', icon: Home },
  { label: '대시보드', href: '/dashboard', icon: LayoutDashboard },
  { label: '분석', href: '/analytics', icon: BarChart3 },
  { label: '설정', href: '/settings', icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()
  const { isSidebarOpen, isSidebarCollapsed, toggleSidebarCollapsed } =
    useUIStore()
  const isMobile = useIsMobile()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  // 마운트 전에는 렌더링 안 함 (hydration mismatch 방지)
  if (!mounted) return null
  if (isMobile) return null
  if (!isSidebarOpen) return null

  return (
    <aside
      className={cn(
        'flex flex-col border-r border-border bg-background transition-all duration-300',
        isSidebarCollapsed ? 'w-14' : 'w-60'
      )}
      aria-label="사이드바 네비게이션"
    >
      {/* 상단 토글 버튼 */}
      <div className="flex h-14 items-center justify-end px-2 border-b border-border">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebarCollapsed}
          aria-label={
            isSidebarCollapsed ? '사이드바 펼치기' : '사이드바 접기'
          }
        >
          <ChevronLeft
            className={cn(
              'size-4 transition-transform duration-300',
              isSidebarCollapsed && 'rotate-180'
            )}
          />
        </Button>
      </div>

      {/* 네비게이션 */}
      <nav className="flex flex-col gap-1 p-2">
        {SIDEBAR_ITEMS.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex h-9 items-center gap-3 rounded-md px-2 text-sm font-medium transition-colors',
                'hover:bg-muted hover:text-foreground',
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'text-foreground'
              )}
              title={isSidebarCollapsed ? item.label : undefined}
            >
              {item.icon && <item.icon className="size-4 shrink-0" />}
              {!isSidebarCollapsed && (
                <span className="truncate">{item.label}</span>
              )}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
