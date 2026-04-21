import { cn } from '@/lib/utils'

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
  label?: string
}

const sizeMap = {
  sm: 'size-4 border-2',
  md: 'size-8 border-2',
  lg: 'size-12 border-[3px]',
} as const

export function Loading({
  size = 'md',
  className,
  label = '로딩 중...',
}: LoadingProps) {
  return (
    <div
      role="status"
      aria-label={label}
      className={cn('flex items-center justify-center', className)}
    >
      <span
        className={cn(
          'inline-block animate-spin rounded-full border-current border-r-transparent',
          sizeMap[size]
        )}
      />
      <span className="sr-only">{label}</span>
    </div>
  )
}

export function LoadingOverlay({ label }: { label?: string }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <Loading size="lg" label={label} />
    </div>
  )
}

export function LoadingPage({ label }: { label?: string }) {
  return (
    <div className="flex min-h-[400px] items-center justify-center">
      <Loading size="lg" label={label} />
    </div>
  )
}
