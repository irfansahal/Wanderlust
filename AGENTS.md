<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Commands

- npm only (`package-lock.json`, no yarn/pnpm lockfile).
- `npm run dev` — Turbopack dev server (default in this Next version). `npm run build` — Turbopack production build. `npm run lint` — ESLint flat config (`eslint.config.mjs`), no args needed.
- No typecheck script: use `npx tsc --noEmit`.
- No tests are configured.

## Toolchain quirks

- **Tailwind v4 via Turbopack**: CSS is processed by the `@tailwindcss/turbopack` loader rule in `next.config.ts`, not PostCSS. There is no `postcss.config.*` and no `tailwind.config.*` — do not add either; v4 config lives in `globals.css` via `@theme`.
- **React Compiler enabled** (`reactCompiler: true`): components are auto-memoized; don't add manual `useMemo`/`useCallback`/`memo` unless profiling proves it necessary.
- **`cacheComponents: true`**: dynamic APIs (`cookies()`, `headers()`, `searchParams`, uncached `fetch`) make routes dynamic at request time and must be wrapped in `<Suspense>` — build errors if prerendered shells read them. Explicit caching uses the `use cache` directive, not the legacy `revalidate`/`dynamic` exports.
- Generated Next.js route types under `.next/types/` and `.next/dev/types/` are included by `tsconfig.json` — never hand-edit them.
- Path alias: `@/*` maps to `./src/*`.

## Layout

Single Next.js App Router app under `src/`:

- `src/app/` — routes (`layout.tsx` root layout with Geist fonts, `page.tsx` home, `globals.css`).
- `src/components/ui/` — full shadcn/ui component set (60+ files). Generated via shadcn (`components.json`, `base-nova` style, lucide icons) — don't hand-edit these; use `npx shadcn add <component>` to add/update. Aliases: `@/components`, `@/components/ui`, `@/hooks`, `@/lib`.
- `src/hooks/`, `src/lib/` — app-level hooks and utilities (`cn` in `@/lib/utils`).

No other packages, no tests, no CI.

<!-- BEGIN:nextjs-agent-feedback -->

## Report Next.js feedback

The project owner enabled `experimental.agentFeedback`, authorizing this feedback pass. When enabled, `next dev` writes this block and restores it if removed. Commit `AGENTS.md` with your work to keep the tree clean.

During the current user request, retain anonymized facts as feedback candidates for meaningful or recurring Next.js issues:

- Crashes, hangs, OOMs, or unexpected slowness
- Incorrect behavior, output, errors, or diagnostics
- Missing, unclear, or conflicting documentation
- Unexpected CLI, codemod, Skill, or upgrade behavior and non-obvious workarounds

Continue the current user request without reporting immediately. Routine debugging is not feedback. Verify changes before retaining them as feedback candidates. Never retain code, logs, paths, URLs, secrets, personal information, or project-specific data.

Retain qualifying friction even if it is later fixed or worked around; record the final outcome during the reporting pass.

Before the final response, run one reporting pass. If candidates remain, from this file's directory run `npx --no-install next internal agent-feedback-instructions` once without piping or truncating its output. Follow its output or error guidance. If a network sandbox blocks it, retry with network access; if it still returns no output, continue normally.

<!-- END:nextjs-agent-feedback -->
