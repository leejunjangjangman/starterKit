'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useUIStore } from '@/store/ui-store'
import type { NavItem } from '@/types'

interface MobileMenuProps {
  navItems: NavItem[]
}

export function MobileMenu({ navItems }: MobileMenuProps) {
  const { isMobileMenuOpen, setMobileMenuOpen } = useUIStore()

  // 메뉴 열릴 때 body 스크롤 막기
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  if (!isMobileMenuOpen) return null

  return (
    <>
      {/* 배경 오버레이 */}
      <div
        className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />
      {/* 슬라이드 패널 */}
      <nav
        className={cn(
          'fixed inset-y-0 left-0 z-50 flex w-72 flex-col bg-background shadow-xl md:hidden',
          'border-r border-border'
        )}
        aria-label="모바일 네비게이션"
      >
        <div className="flex h-14 items-center justify-between px-4 border-b border-border">
          <span className="font-semibold text-foreground">메뉴</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="메뉴 닫기"
          >
            <X className="size-4" />
          </Button>
        </div>
        <ul className="flex flex-col gap-1 p-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex h-10 items-center rounded-md px-3 text-sm font-medium text-foreground hover:bg-muted transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                {...(item.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                {item.icon && <item.icon className="mr-2 size-4" />}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
