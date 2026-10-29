import type { Copy } from '../lib/i18n'
import { routes } from '../lib/site'

export default function NotFound({ t }: { t: Copy }) {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-6 py-12 text-center">
      <p className="text-[var(--color-text-muted)] mb-4">{t.notFound}</p>
      <a href={routes.home} className="text-primary-400 underline">
        {t.backHome}
      </a>
    </main>
  )
}
