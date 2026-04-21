import { Card } from '@/components/ui/card'
import type { StatCard as StatCardType } from '@/types'

export function StatCard({
  title,
  value,
  description,
  trend,
  icon: Icon,
}: StatCardType) {
  return (
    <Card className="flex flex-col gap-3 p-5">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-muted-foreground">
          {title}
        </span>
        {Icon && (
          <div className="flex size-9 items-center justify-center rounded-lg bg-muted">
            <Icon className="size-4 text-muted-foreground" />
          </div>
        )}
      </div>
      <div>
        <p className="text-2xl font-bold text-card-foreground">{value}</p>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
      </div>
      {trend && (
        <p
          className={`text-xs font-medium ${
            trend.value >= 0
              ? 'text-green-600 dark:text-green-400'
              : 'text-red-600 dark:text-red-400'
          }`}
        >
          {trend.value >= 0 ? '+' : ''}
          {trend.value}% {trend.label}
        </p>
      )}
    </Card>
  )
}
