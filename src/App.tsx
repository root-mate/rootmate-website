import { useEffect, useState } from 'react'
import { copy, initialLanguage, rememberLanguage, type Language } from './lib/i18n'
import { pageForPath, routes } from './lib/site'
import QrModal from './QrModal'
import Home from './pages/Home'
import Imprint from './pages/Imprint'
import NotFound from './pages/NotFound'
import Privacy from './pages/Privacy'
import Support from './pages/Support'

const pageTitles = {
  home: 'Rootmate — German bureaucracy, simplified',
  privacy: 'Datenschutz · Rootmate',
  imprint: 'Impressum · Rootmate',
  support: 'Support · Rootmate',
  notFound: 'Rootmate',
}

export default function App() {
  const [lang, setLang] = useState<Language>(initialLanguage)
  const [showQr, setShowQr] = useState(false)

  const t = copy[lang]
  const page = pageForPath(window.location.pathname)

  useEffect(() => {
    document.title = pageTitles[page]
    document.documentElement.lang = lang
  }, [page, lang])

  function toggleLanguage() {
    const next = lang === 'en' ? 'de' : 'en'
    setLang(next)
    rememberLanguage(next)
  }

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text)]">
      <header className="flex items-center justify-between px-6 py-5 max-w-3xl w-full mx-auto">
        <a href={routes.home} className="flex items-center gap-2 font-semibold tracking-tight text-lg">
          <img src="/logo.png" alt="" width={32} height={32} />
          Rootmate
        </a>
        <div className="flex items-center gap-2">
          {page === 'home' && (
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
          )}
          <button
            type="button"
            onClick={toggleLanguage}
            className="text-sm px-3 py-1.5 rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:border-primary-500 transition-colors"
          >
            {lang === 'en' ? 'Deutsch' : 'English'}
          </button>
        </div>
      </header>

      {page === 'home' && <Home t={t} />}
      {page === 'privacy' && <Privacy lang={lang} note={t.legalNote} />}
      {page === 'imprint' && <Imprint lang={lang} note={t.legalNote} />}
      {page === 'support' && <Support lang={lang} />}
      {page === 'notFound' && <NotFound t={t} />}

      <footer className="text-center text-xs text-[var(--color-text-muted)] py-6 px-6 space-y-2">
        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-1">
          <a href={routes.support} className="hover:text-[var(--color-text)]">{t.nav.support}</a>
          <a href={routes.privacy} className="hover:text-[var(--color-text)]">{t.nav.privacy}</a>
          <a href={routes.imprint} className="hover:text-[var(--color-text)]">{t.nav.imprint}</a>
        </nav>
        <p>{t.footer}</p>
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
