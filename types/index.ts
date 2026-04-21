import type React from 'react'

// 네비게이션 아이템
export interface NavItem {
  label: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
  external?: boolean
}

// 통계 카드 (대시보드)
export interface StatCard {
  title: string
  value: string | number
  description?: string
  trend?: {
    value: number // 양수 = 상승, 음수 = 하락
    label: string
  }
  icon?: React.ComponentType<{ className?: string }>
}

// 테이블 데이터 (제네릭 기반)
export interface TableRow {
  id: string
  [key: string]: string | number | boolean | undefined
}

// 테이블 컬럼 정의 (제네릭으로 any 제거)
export interface TableColumn<T extends TableRow> {
  key: keyof T
  label: string
  sortable?: boolean
  render?: (value: T[keyof T], row: T) => React.ReactNode
}

// 사이드바 메뉴 아이템 (중첩 허용)
export interface SidebarItem extends NavItem {
  children?: SidebarItem[]
  badge?: string | number
}

// EmptyState props
export interface EmptyStateProps {
  icon?: React.ComponentType<{ className?: string }>
  title: string
  description?: string
  action?: {
    label: string
    onClick: () => void
  }
  className?: string
}

// 반응형 브레이크포인트
export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

// 폼 필드 에러 타입
export interface FormFieldError {
  field: string
  message: string
}

// 페이지 헤더 props
export interface PageHeaderProps {
  title: string
  description?: string
  action?: {
    label: string
    onClick: () => void
    variant?: 'default' | 'outline' | 'secondary'
  }
  breadcrumb?: NavItem[]
}

// 데이터 테이블 상태
export interface DataTableState {
  sorting?: {
    column: string
    direction: 'asc' | 'desc'
  }
  pagination?: {
    page: number
    pageSize: number
  }
  filtering?: {
    [key: string]: string | number
  }
}
