export type Language = 'en' | 'de'

export const copy = {
  en: {
    headline: 'Your companion for starting life in Germany.',
    subheadline:
      'RootMate helps international students navigate German bureaucracy — registration, bank account, health insurance, visa and more. Join the waitlist to get early access and help shape the app.',
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
    footer: 'RootMate — built for international students in Germany.',
    qrButton: 'QR Code',
    qrModalHint: 'Scan to join the waitlist',
    close: 'Close',
  },
  de: {
    headline: 'Dein Begleiter für den Start in Deutschland.',
    subheadline:
      'RootMate hilft internationalen Studierenden bei der deutschen Bürokratie — Anmeldung, Bankkonto, Krankenversicherung, Visum und mehr. Trag dich in die Warteliste ein für frühen Zugang und um die App mitzugestalten.',
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
    footer: 'RootMate — gebaut für internationale Studierende in Deutschland.',
    qrButton: 'QR-Code',
    qrModalHint: 'Scannen, um der Warteliste beizutreten',
    close: 'Schließen',
  },
} as const

export type Copy = (typeof copy)['en']
