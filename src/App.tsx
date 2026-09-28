import { useEffect, useState, type FormEvent } from 'react'
import { copy, type Language } from './lib/i18n'
import QrModal from './QrModal'
import { getWaitlistCount, joinWaitlist, UNIQUE_VIOLATION } from './lib/supabase'

type Status = 'idle' | 'submitting' | 'success' | 'already' | 'error'

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export default function App() {
  const [lang, setLang] = useState<Language>('en')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [count, setCount] = useState<number | null>(null)
  const [showQr, setShowQr] = useState(false)

  const t = copy[lang]

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
    <div className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text)]">
      <header className="flex items-center justify-between px-6 py-5 max-w-3xl w-full mx-auto">
        <span className="font-semibold tracking-tight text-lg">RootMate</span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowQr(true)}
            className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:border-primary-500 transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <path d="M14 14h3v3h-3zM19 14h2v2h-2zM14 19h2v2h-2zM19 19h2v2h-2z" />
            </svg>
            {t.qrButton}
          </button>
          <button
            type="button"
            onClick={() => setLang((l) => (l === 'en' ? 'de' : 'en'))}
            className="text-sm px-3 py-1.5 rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:border-primary-500 transition-colors"
          >
            {lang === 'en' ? 'Deutsch' : 'English'}
          </button>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="max-w-xl w-full text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-4">
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
              className="flex-1 sm:flex-initial sm:w-80 rounded-lg bg-[var(--color-bg-elevated)] border border-[var(--color-border)] px-4 py-3 text-sm placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="rounded-lg bg-primary-600 hover:bg-primary-700 disabled:opacity-60 text-white font-medium px-6 py-3 text-sm transition-colors"
            >
              {status === 'submitting' ? t.submitting : t.submit}
            </button>
          </form>

          <div className="h-6 text-sm mb-6">
            {status === 'success' && (
              <p className="text-primary-400">{t.success}</p>
            )}
            {status === 'already' && (
              <p className="text-secondary-400">{t.alreadyIn}</p>
            )}
            {status === 'error' && email && !isValidEmail(email) && (
              <p className="text-red-400">{t.invalidEmail}</p>
            )}
            {status === 'error' && (!email || isValidEmail(email)) && (
              <p className="text-red-400">{t.genericError}</p>
            )}
          </div>

          {count !== null && (
            <p className="text-sm text-[var(--color-text-muted)]">
              {t.counterText(count)}
            </p>
          )}
        </div>
      </main>

      <footer className="text-center text-xs text-[var(--color-text-muted)] py-6">
        {t.footer}
      </footer>

      {showQr && (
        <QrModal
          url={window.location.origin}
          hint={t.qrModalHint}
          closeLabel={t.close}
          onClose={() => setShowQr(false)}
        />
      )}
    </div>
  )
}
