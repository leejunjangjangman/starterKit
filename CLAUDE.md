# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## 명령어

```bash
npm run dev      # 개발 서버 실행
npm run build    # 프로덕션 빌드
npm run lint     # ESLint 실행 (v9 flat config: eslint.config.mjs)
```

테스트 러너 미구성 — Jest/Vitest/Playwright 없음.

## 아키텍처

**Next.js 15 App Router** 기반 대시보드 스타터킷. `src/` 없이 프로젝트 루트에서 `@/*` path alias 사용.

```
app/           # 페이지 (기본 Server Component)
components/
  layout/      # 구조적 셸 (Header, Sidebar, Footer, MainLayout)
  common/      # 재사용 페이지 단위 블록 (DataTable, StatCard, FormField 등)
  ui/          # shadcn/ui 프리미티브
hooks/         # usehooks-ts 래퍼 (useIsMobile, useIsTablet 등)
store/         # Zustand 전역 상태
lib/           # cn() 유틸리티
types/         # 공유 TypeScript 인터페이스
```

**주의:** `components/layout/main-layout.tsx`는 존재하지만 사용되지 않음. 루트 `app/layout.tsx`에서 Header + Sidebar + Footer를 직접 조합.

## 핵심 패턴

**Server / Client 경계:** 레이아웃 셸(`Header`, `Footer`)은 Server Component. Zustand 스토어나 브라우저 API를 사용하는 컴포넌트(`Sidebar`, `HamburgerButton`, `MobileMenu`)는 반드시 `'use client'` 선언.

**하이드레이션 안전 패턴:** Zustand 상태를 읽는 컴포넌트는 마운트 가드 패턴 사용:
```tsx
const [mounted, setMounted] = useState(false)
useEffect(() => setMounted(true), [])
if (!mounted) return null
```

**스타일링:** 모든 조건부·조합 클래스는 `cn()` (`@/lib/utils`) 사용. 인라인 style 객체나 CSS 모듈 사용 금지.

**다형 엘리먼트:** `Button` 컴포넌트는 Radix `asChild` 패턴 지원. `<Button asChild><Link href="...">` 형태로 사용.

**타입:** 공유 prop 타입은 인라인 정의 대신 `/types/index.ts`에 정의. `TableColumn<T>` 제네릭의 `render` 프로프으로 컬럼 레벨 커스텀 렌더링 가능.

**정적 데이터:** 네비게이션 아이템, 통계 카드, 테이블 데이터 등은 JSX 밖 모듈 최상단에 타입이 지정된 `const` 배열로 정의.

## 기술 스택 세부 사항

- **Tailwind CSS v4**: `tailwind.config.js` 없음 — CSS-first 설정 방식. `oklch()` 색공간으로 라이트/다크 테마 (`globals.css`). 다크모드는 미디어 쿼리가 아닌 `.dark` 클래스 기반.
- **shadcn/ui**: style `radix-nova`, base color `neutral` (`components.json` 참조). CVA 기반 Button에 `data-slot`, `group/button` 셀렉터 사용.
- **Zustand v5**: `/store/ui-store.ts` — 사이드바 열림/접힘 상태 관리. `isSidebarCollapsed`만 `localStorage`에 영속 저장 (키: `'ui-store'`).
- **Sonner 토스트**: `components/ui/sonner.tsx` 존재하지만 루트 레이아웃에 `<Toaster>` 미마운트 — 사용 전 연결 필요.
- **폼**: React Hook Form v7 + Zod v4. `components/common/form-field.tsx`에 `Controller` 기반 래퍼 구현.
