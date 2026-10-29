import { useEffect, useState, type FormEvent } from 'react'
import type { Copy } from '../lib/i18n'
import { getWaitlistCount, joinWaitlist, UNIQUE_VIOLATION } from '../lib/supabase'
import { routes } from '../lib/site'

type Status = 'idle' | 'submitting' | 'success' | 'already' | 'error'

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export default function Home({ t }: { t: Copy }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    getWaitlistCount().then(setCount)
  }, [])

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!isValidEmail(email)) {
      setStatus('error')
      return
    }
    setStatus('submitting')
    const { error } = await joinWaitlist(email.trim().toLowerCase())
    if (!error) {
      setStatus('success')
      setCount((c) => (c === null ? c : c + 1))
      return
    }
    if (error.code === UNIQUE_VIOLATION) {
      setStatus('already')
      return
    }
    setStatus('error')
  }

  return (
    <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-xl w-full text-center">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[var(--color-text)] mb-4">
          {t.headline}
        </h1>

        <p className="text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed mb-10">
          {t.subheadline}
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 justify-center mb-4"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              if (status !== 'idle') setStatus('idle')
            }}
            placeholder={t.emailPlaceholder}
            className="flex-1 sm:flex-initial sm:w-80 rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-border)] px-4 py-3 text-sm placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
          />
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="rounded-full bg-primary-600 hover:bg-primary-700 disabled:opacity-60 text-white font-medium px-6 py-3 text-sm transition-colors"
          >
            {status === 'submitting' ? t.submitting : t.submit}
          </button>
        </form>

        <div className="h-6 text-sm mb-6">
          {status === 'success' && (
            <p className="text-primary-400">{t.success}</p>
          )}
          {status === 'already' && (
            <p className="text-primary-400">{t.alreadyIn}</p>
          )}
          {status === 'error' && email && !isValidEmail(email) && (
            <p className="text-danger">{t.invalidEmail}</p>
          )}
          {status === 'error' && (!email || isValidEmail(email)) && (
            <p className="text-danger">{t.genericError}</p>
          )}
        </div>

        <p className="text-xs text-[var(--color-text-muted)] mb-6">
          {t.privacyHint}{' '}
          <a href={routes.privacy} className="underline hover:text-[var(--color-text)]">
            {t.nav.privacy}
          </a>
        </p>

        {count !== null && (
          <p className="text-sm text-[var(--color-text-muted)]">
            {t.counterText(count)}
          </p>
        )}
      </div>
    </main>
  )
}
