'use client'

import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useUIStore } from '@/store/ui-store'

export function HamburgerButton() {
  const toggleMobileMenu = useUIStore((s) => s.toggleMobileMenu)

  return (
    <Button
      variant="ghost"
      size="icon"
      className="md:hidden"
      onClick={toggleMobileMenu}
      aria-label="메뉴 열기"
    >
      <Menu className="size-4" />
    </Button>
  )
}
