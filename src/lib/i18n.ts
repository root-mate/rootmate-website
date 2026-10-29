export type Language = 'en' | 'de'

export const copy = {
  en: {
    headline: 'Your companion for starting life in Germany.',
    subheadline:
      'Rootmate helps international students navigate German bureaucracy — registration, bank account, health insurance, visa and more. Join the waitlist to get early access and help shape the app.',
    emailPlaceholder: 'you@university.edu',
    submit: 'Join the waitlist',
    submitting: 'Joining…',
    success: "You're on the list! We'll be in touch soon.",
    alreadyIn: "You're already on the list!",
    genericError: 'Something went wrong. Please try again.',
    invalidEmail: 'Please enter a valid email address.',
    counterText: (count: number) =>
      count === 1
        ? '1 student joined the community'
        : `${count} students joined the community`,
    footer: 'Rootmate — built for international students in Germany.',
    qrButton: 'QR Code',
    qrModalHint: 'Scan to join the waitlist',
    close: 'Close',
    privacyHint: 'We only use your email to invite you to the pilot. You can unsubscribe anytime.',
    nav: { privacy: 'Privacy', imprint: 'Legal notice', support: 'Support', app: 'Open web app' },
    notFound: 'This page does not exist.',
    backHome: 'Back to the homepage',
    legalNote: 'The German version is legally binding.',
  },
  de: {
    headline: 'Dein Begleiter für den Start in Deutschland.',
    subheadline:
      'Rootmate hilft internationalen Studierenden bei der deutschen Bürokratie — Anmeldung, Bankkonto, Krankenversicherung, Visum und mehr. Trag dich in die Warteliste ein für frühen Zugang und um die App mitzugestalten.',
    emailPlaceholder: 'du@uni.de',
    submit: 'Warteliste beitreten',
    submitting: 'Wird eingetragen…',
    success: 'Du bist auf der Liste! Wir melden uns bald.',
    alreadyIn: 'Du bist schon auf der Liste!',
    genericError: 'Etwas ist schiefgelaufen. Bitte versuch es erneut.',
    invalidEmail: 'Bitte gib eine gültige E-Mail-Adresse ein.',
    counterText: (count: number) =>
      count === 1
        ? '1 Studierende:r ist der Community beigetreten'
        : `${count} Studierende sind der Community beigetreten`,
    footer: 'Rootmate — gebaut für internationale Studierende in Deutschland.',
    qrButton: 'QR-Code',
    qrModalHint: 'Scannen, um der Warteliste beizutreten',
    close: 'Schließen',
    privacyHint: 'Wir nutzen deine E-Mail nur, um dich zum Pilot einzuladen. Abmelden geht jederzeit.',
    nav: { privacy: 'Datenschutz', imprint: 'Impressum', support: 'Support', app: 'Web-App öffnen' },
    notFound: 'Diese Seite gibt es nicht.',
    backHome: 'Zur Startseite',
    legalNote: '',
  },
} as const

export type Copy = (typeof copy)[Language]

const STORAGE_KEY = 'rootmate.lang'

export function initialLanguage(): Language {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'de' || stored === 'en') return stored
  } catch {
    // Storage blocked: fall back to the browser language.
  }
  return navigator.language.toLowerCase().startsWith('de') ? 'de' : 'en'
}

export function rememberLanguage(lang: Language) {
  try {
    localStorage.setItem(STORAGE_KEY, lang)
  } catch {
    // Not critical.
  }
}
