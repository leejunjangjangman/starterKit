import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { EmptyState } from './empty-state'
import type { TableRow as ITableRow, TableColumn } from '@/types'

interface DataTableProps<T extends ITableRow> {
  columns: TableColumn<T>[]
  data: T[]
  emptyStateTitle?: string
  emptyStateDescription?: string
}

export function DataTable<T extends ITableRow>({
  columns,
  data,
  emptyStateTitle = '데이터 없음',
  emptyStateDescription = '표시할 데이터가 없습니다.',
}: DataTableProps<T>) {
  if (data.length === 0) {
    return (
      <EmptyState
        title={emptyStateTitle}
        description={emptyStateDescription}
        className="m-6 border-0"
      />
    )
  }

  return (
    <div className="overflow-x-auto rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((col) => (
              <TableHead key={String(col.key)} className="text-xs uppercase">
                {col.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, rowIdx) => (
            <TableRow key={row.id} className={rowIdx % 2 === 0 ? '' : 'bg-muted/40'}>
              {columns.map((col) => (
                <TableCell key={String(col.key)}>
                  {col.render
                    ? col.render(row[col.key], row)
                    : String(row[col.key])}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
