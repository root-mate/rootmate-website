import type { Language } from '../lib/i18n'
import { operator, routes } from '../lib/site'
import { LegalPage, Section } from './LegalPage'

const mail = <a href={`mailto:${operator.email}`}>{operator.email}</a>

export default function Support({ lang }: { lang: Language }) {
  if (lang === 'de') {
    return (
      <LegalPage title="Support">
        <p className="mt-4">Fragen, Feedback oder ein Fehler in der App? Schreib uns an {mail}. Wir antworten meist innerhalb von zwei Werktagen.</p>
        <Section title="Wie werde ich Pilot-Tester?">
          <p>Trag dich auf der <a href={routes.home}>Startseite</a> in die Warteliste ein. Wir schicken dir dann den Link für iPhone (TestFlight) oder Android.</p>
        </Section>
        <Section title="Wo sind meine Dokumente gespeichert?">
          <p>Nur auf deinem Gerät, verschlüsselt. Wir haben keinen Zugriff darauf. Mehr dazu in der <a href={routes.privacy}>Datenschutzerklärung</a>.</p>
        </Section>
        <Section title="Wie lösche ich meine Daten?">
          <p>Lösch die App, dann sind alle Daten auf dem Gerät weg. Für die Warteliste reicht eine kurze Mail an {mail}.</p>
        </Section>
        <Section title="Ist das Rechtsberatung?">
          <p>Nein. Rootmate erklärt die Schritte und verlinkt die offiziellen Quellen. Im Zweifel gilt, was die zuständige Behörde sagt.</p>
        </Section>
      </LegalPage>
    )
  }
  return (
    <LegalPage title="Support">
      <p className="mt-4">Questions, feedback or found a bug? Email us at {mail}. We usually reply within two working days.</p>
      <Section title="How do I join the pilot?">
        <p>Join the waitlist on the <a href={routes.home}>homepage</a>. We'll send you the link for iPhone (TestFlight) or Android.</p>
      </Section>
      <Section title="Where are my documents stored?">
        <p>Only on your device, encrypted. We have no access to them. See the <a href={routes.privacy}>privacy policy</a> for details.</p>
      </Section>
      <Section title="How do I delete my data?">
        <p>Delete the app and all data on your device is gone. For the waitlist, just send a short email to {mail}.</p>
      </Section>
      <Section title="Is this legal advice?">
        <p>No. Rootmate explains the steps and links to official sources. If in doubt, what the responsible authority says applies.</p>
      </Section>
    </LegalPage>
  )
}
