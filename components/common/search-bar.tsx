import { Search, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface SearchBarProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onClear?: () => void
  showClearButton?: boolean
}

export function SearchBar({
  value,
  onClear,
  showClearButton = true,
  className,
  ...props
}: SearchBarProps) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
      <Input
        placeholder="검색..."
        value={value}
        className={cn('pl-9', className)}
        {...props}
      />
      {showClearButton && value && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-1 top-1/2 -translate-y-1/2 size-8"
          onClick={onClear}
          aria-label="검색 초기화"
        >
          <X className="size-4" />
        </Button>
      )}
    </div>
  )
}
