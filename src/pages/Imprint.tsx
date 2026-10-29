import type { Language } from '../lib/i18n'
import { operator } from '../lib/site'
import { LegalPage, OperatorAddress, Section } from './LegalPage'

export default function Imprint({ lang, note }: { lang: Language; note: string }) {
  if (lang === 'de') {
    return (
      <LegalPage title="Impressum">
        <Section title="Angaben gemäß § 5 DDG">
          <OperatorAddress />
        </Section>
        <Section title="Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV">
          <p>{operator.name}, Anschrift wie oben</p>
        </Section>
        <Section title="Hinweis zu den Inhalten">
          <p>Rootmate erklärt Behördenwege allgemein und verweist auf offizielle Quellen. Das ist keine Rechtsberatung. Trotz sorgfältiger Prüfung können sich Regeln ändern. Maßgeblich sind immer die Angaben der zuständigen Behörde.</p>
        </Section>
        <Section title="Verbraucherstreitbeilegung">
          <p>Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
        </Section>
      </LegalPage>
    )
  }
  return (
    <LegalPage title="Legal notice" note={note}>
      <Section title="Information according to § 5 DDG">
        <OperatorAddress />
      </Section>
      <Section title="Responsible for content (§ 18(2) MStV)">
        <p>{operator.name}, address as above</p>
      </Section>
      <Section title="About our content">
        <p>Rootmate explains German bureaucracy in general terms and links to official sources. This is not legal advice. Rules can change despite careful checks. The information from the responsible authority always takes precedence.</p>
      </Section>
      <Section title="Consumer dispute resolution">
        <p>We are neither willing nor obliged to take part in dispute resolution proceedings before a consumer arbitration board.</p>
      </Section>
    </LegalPage>
  )
}
