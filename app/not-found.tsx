import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-8 px-4 py-24 text-center">
      <div>
        <p className="text-8xl font-black text-muted-foreground/20">404</p>
        <h1 className="mt-4 text-3xl font-bold text-foreground">
          페이지를 찾을 수 없습니다
        </h1>
        <p className="mt-2 text-muted-foreground">
          요청하신 페이지가 존재하지 않거나 이동되었습니다.
        </p>
      </div>
      <Button asChild size="lg">
        <Link href="/">
          <Home className="mr-2 size-4" />
          홈으로 돌아가기
        </Link>
      </Button>
    </div>
  )
}
