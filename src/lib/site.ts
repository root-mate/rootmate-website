// Angaben für Impressum und Datenschutz. Bis zur UG-Gründung ist Adrian Anbieter.
// TODO vor dem Livegang: Anschrift eintragen.
export const operator = {
  name: 'Adrian Groh',
  street: '[Straße Hausnummer]',
  city: '[PLZ Ort]',
  country: 'Deutschland',
  email: 'support@rootmate.de',
}

export const legalUpdated = '29.10.2026'

export const routes = {
  home: '/',
  privacy: '/datenschutz',
  imprint: '/impressum',
  support: '/support',
  app: '/app',
} as const

export type Page = 'home' | 'privacy' | 'imprint' | 'support' | 'notFound'

export function pageForPath(pathname: string): Page {
  const path = pathname.replace(/\/+$/, '') || '/'
  switch (path) {
    case '/':
      return 'home'
    case '/datenschutz':
    case '/privacy':
      return 'privacy'
    case '/impressum':
    case '/imprint':
      return 'imprint'
    case '/support':
      return 'support'
    default:
      return 'notFound'
  }
}
