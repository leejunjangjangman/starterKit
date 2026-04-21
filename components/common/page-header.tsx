import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import type { PageHeaderProps } from '@/types'

export function PageHeader({
  title,
  description,
  action,
  breadcrumb,
}: PageHeaderProps) {
  return (
    <div className="space-y-4">
      {breadcrumb && (
        <nav className="flex items-center gap-2 text-sm" aria-label="경로">
          {breadcrumb.map((item, idx) => (
            <div key={item.href} className="flex items-center gap-2">
              {idx > 0 && <ChevronRight className="size-4 text-muted-foreground" />}
              <a
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            </div>
          ))}
        </nav>
      )}

      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            {title}
          </h1>
          {description && (
            <p className="text-muted-foreground">{description}</p>
          )}
        </div>
        {action && (
          <Button onClick={action.onClick} variant={action.variant || 'default'}>
            {action.label}
          </Button>
        )}
      </div>
    </div>
  )
}
