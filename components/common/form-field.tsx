'use client'

// react-hook-form Controller 기반 폼 필드
// 사용 예시: <FormField control={form.control} name="email" label="이메일" />
import {
  type Control,
  type FieldValues,
  type Path,
  Controller,
} from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>
  name: Path<T>
  label: string
  placeholder?: string
  helperText?: string
  type?: React.InputHTMLAttributes<HTMLInputElement>['type']
  disabled?: boolean
  className?: string
}

export function FormField<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  helperText,
  type = 'text',
  disabled,
  className,
}: FormFieldProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <div className="space-y-2">
          <label
            htmlFor={name}
            className="block text-sm font-medium text-foreground"
          >
            {label}
          </label>
          <Input
            id={name}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            className={cn(
              error && 'border-destructive focus-visible:ring-destructive',
              className
            )}
            {...field}
          />
          {error?.message && (
            <p className="text-xs text-destructive">{error.message}</p>
          )}
          {helperText && !error && (
            <p className="text-xs text-muted-foreground">{helperText}</p>
          )}
        </div>
      )}
    />
  )
}
