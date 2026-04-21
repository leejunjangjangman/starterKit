'use client'

// usehooks-ts의 useMediaQuery 재출력 (Tailwind 브레이크포인트 편의 훅만 추가)
export { useMediaQuery } from 'usehooks-ts'

import { useMediaQuery } from 'usehooks-ts'

export function useIsMobile(): boolean {
  return !useMediaQuery('(min-width: 768px)')
}

export function useIsTablet(): boolean {
  return (
    useMediaQuery('(min-width: 768px)') &&
    !useMediaQuery('(min-width: 1024px)')
  )
}

export function useIsDesktop(): boolean {
  return useMediaQuery('(min-width: 1024px)')
}
