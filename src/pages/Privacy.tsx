import type { Language } from '../lib/i18n'
import { legalUpdated, operator } from '../lib/site'
import { LegalPage, OperatorAddress, Section } from './LegalPage'

const mail = <a href={`mailto:${operator.email}`}>{operator.email}</a>

export default function Privacy({ lang, note }: { lang: Language; note: string }) {
  return lang === 'de' ? <PrivacyDe /> : <PrivacyEn note={note} />
}

function PrivacyDe() {
  return (
    <LegalPage title="Datenschutzerklärung">
      <p className="text-xs">Stand: {legalUpdated}</p>

      <Section title="Das Wichtigste in Kürze">
        <ul>
          <li>Deine Briefe, Dokumente und Fotos bleiben auf deinem Gerät. Wir haben keinen Zugriff darauf.</li>
          <li>Für die App brauchst du kein Konto.</li>
          <li>Kein Tracking, keine Werbung, keine Analyse-Tools, keine Cookies.</li>
          <li>Daten verlassen dein Gerät nur in den unten genannten Fällen, etwa bei der optionalen Cloud-KI im Pilot und nur nach deiner ausdrücklichen Einwilligung.</li>
        </ul>
      </Section>

      <Section title="1. Verantwortlicher">
        <OperatorAddress />
        <p>Rootmate befindet sich in der Pilotphase. Bis zur Gründung einer Gesellschaft ist die oben genannte Person verantwortlich.</p>
      </Section>

      <Section title="2. Website rootmate.de">
        <p><strong>Hosting.</strong> Die Website und die Web-App werden bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA, gehostet. Beim Aufruf verarbeitet Vercel technisch notwendige Daten in Server-Logs: IP-Adresse, Datum und Uhrzeit, aufgerufene Adresse, Referrer sowie Browser und Betriebssystem. Zweck ist die sichere und stabile Auslieferung der Seiten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Vercel ist unter dem EU-US Data Privacy Framework zertifiziert. Zusätzlich gelten EU-Standardvertragsklauseln.</p>
        <p><strong>Warteliste.</strong> Wenn du dich in die Warteliste einträgst, speichern wir deine E-Mail-Adresse und den Zeitpunkt der Eintragung. Wir nutzen sie nur, um dich über den Pilot und den Start von Rootmate zu informieren. Rechtsgrundlage ist deine Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Gespeichert wird bei Supabase Inc. auf Servern in der EU (Irland). Du kannst die Einwilligung jederzeit per E-Mail an {mail} widerrufen. Dann löschen wir deine Adresse. Spätestens löschen wir sie, wenn wir die Warteliste nicht mehr brauchen.</p>
        <p><strong>Speicher im Browser.</strong> Die Website merkt sich deine Sprachauswahl im lokalen Speicher deines Browsers. Das dient nur dieser Funktion (§ 25 Abs. 2 TDDDG). Es werden keine Cookies gesetzt.</p>
      </Section>

      <Section title="3. Die App Rootmate (iOS, Android, Web)">
        <p><strong>Lokal gespeicherte Daten.</strong> Was du in der App eingibst oder ablegst, wird auf deinem Gerät gespeichert, nicht bei uns. Dazu gehören Profilangaben wie Stadt, Hochschule, Staatsangehörigkeit oder Ankunftsdatum, dein Fortschritt in den Anleitungen, Erinnerungen sowie Briefe, Dokumente und Fotos. Auf iOS und Android sind Dokumente verschlüsselt und von Cloud-Backups ausgeschlossen. In der Web-App liegen die Daten im Speicher deines Browsers. Wenn du die App löschst oder die Browserdaten entfernst, sind die Daten weg.</p>
        <p><strong>Texterkennung und Analyse auf dem Gerät.</strong> Auf iOS erkennt die App Text in Fotos und PDFs mit Apples Frameworks (Vision, PDFKit) und analysiert Briefe mit Apples Foundation-Modell direkt auf dem Gerät. Dabei wird nichts an uns übertragen.</p>
        <p><strong>Berechtigungen.</strong> Die App fragt nur, wenn du die jeweilige Funktion nutzt: Kamera und Fotos (Dokumente ablegen), Mitteilungen (lokale Erinnerungen an Fristen) sowie Face ID bzw. Gerätecode (Schutz des Schlüssels für deine Dokumente). Du kannst Berechtigungen jederzeit in den Einstellungen deines Geräts entziehen.</p>
        <p><strong>Postleitzahl-Suche.</strong> Wenn du eine Postleitzahl eingibst, fragt die App den passenden Ort bei der OpenPLZ API (openplzapi.org) ab. Übertragen werden die Postleitzahl und technisch bedingt deine IP-Adresse. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.</p>
        <p><strong>App-Updates.</strong> Die App prüft beim Start, ob es ein Update gibt. Dafür nutzen wir den Dienst Expo (650 Industries, Inc., USA). Übertragen werden technisch notwendige Daten wie IP-Adresse, Gerätetyp, Betriebssystem und App-Version. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Die Übermittlung in die USA erfolgt auf Grundlage von EU-Standardvertragsklauseln.</p>
        <p><strong>Optionale Cloud-KI (nur im Pilot).</strong> Einzelne Pilot-Teilnehmende können mit einem Zugangscode eine Cloud-KI für Chat und Briefanalyse freischalten. Das passiert nur nach deiner ausdrücklichen Einwilligung in der App. Dann wird der Inhalt deiner Anfrage (z. B. deine Frage oder der Text bzw. das Bild eines Briefs) über unseren Server bei Supabase (EU, Irland) an einen KI-Anbieter geschickt, derzeit Google (Gemini API), und die Antwort zurückgegeben. Wir speichern dabei keine Inhalte, sondern nur eine zufällige Nutzerkennung, den Zeitpunkt und den Verbrauch, um die Kosten zu begrenzen. Rechtsgrundlage ist deine Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, bei besonders sensiblen Daten zusätzlich Art. 9 Abs. 2 lit. a DSGVO). Die Übermittlung in die USA erfolgt auf Grundlage des EU-US Data Privacy Framework bzw. von EU-Standardvertragsklauseln. Du kannst die Einwilligung jederzeit in der App widerrufen.</p>
        <p><strong>App Stores und Testversionen.</strong> Die App wird über den App Store bzw. TestFlight (Apple) und Google Play verteilt. Diese Anbieter verarbeiten dabei Daten in eigener Verantwortung. Nimmst du an einem Test teil, sehen wir die Angaben, die du dafür freigibst (z. B. Name und E-Mail-Adresse bei einer Einladung), sowie Absturzberichte und Feedback, wenn du sie sendest.</p>
      </Section>

      <Section title="4. Kontakt per E-Mail">
        <p>Wenn du uns schreibst, verarbeiten wir deine Nachricht und deine Kontaktdaten, um deine Anfrage zu beantworten (Art. 6 Abs. 1 lit. b bzw. f DSGVO). Wir löschen sie, wenn sie nicht mehr gebraucht werden.</p>
      </Section>

      <Section title="5. Weitergabe">
        <p>Wir verkaufen keine Daten und geben sie nur an die oben genannten Dienstleister weiter, soweit das für die jeweilige Funktion nötig ist.</p>
      </Section>

      <Section title="6. Deine Rechte">
        <p>Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch (Art. 15–21 DSGVO). Eine Einwilligung kannst du jederzeit mit Wirkung für die Zukunft widerrufen. Schreib uns dafür an {mail}.</p>
        <p>Außerdem kannst du dich bei einer Datenschutz-Aufsichtsbehörde beschweren, zum Beispiel bei der Landesbeauftragten für den Datenschutz Niedersachsen.</p>
      </Section>

      <Section title="7. Änderungen">
        <p>Wenn sich die App oder unsere Dienstleister ändern, passen wir diese Erklärung an. Es gilt die jeweils hier veröffentlichte Fassung.</p>
      </Section>
    </LegalPage>
  )
}

function PrivacyEn({ note }: { note: string }) {
  return (
    <LegalPage title="Privacy Policy" note={note}>
      <p className="text-xs">Last updated: {legalUpdated}</p>

      <Section title="The short version">
        <ul>
          <li>Your letters, documents and photos stay on your device. We have no access to them.</li>
          <li>You don't need an account to use the app.</li>
          <li>No tracking, no ads, no analytics tools, no cookies.</li>
          <li>Data only leaves your device in the cases listed below, for example the optional cloud AI in the pilot, and only with your explicit consent.</li>
        </ul>
      </Section>

      <Section title="1. Controller">
        <OperatorAddress />
        <p>Rootmate is in a pilot phase. Until a company is founded, the person named above is responsible.</p>
      </Section>

      <Section title="2. Website rootmate.de">
        <p><strong>Hosting.</strong> The website and the web app are hosted by Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA. When you visit, Vercel processes technically necessary data in server logs: IP address, date and time, requested URL, referrer, browser and operating system. This keeps the site secure and available. Legal basis: Art. 6(1)(f) GDPR. Vercel is certified under the EU-US Data Privacy Framework; EU Standard Contractual Clauses also apply.</p>
        <p><strong>Waitlist.</strong> If you join the waitlist, we store your email address and the time you signed up. We only use it to tell you about the pilot and the launch of Rootmate. Legal basis: your consent (Art. 6(1)(a) GDPR). Data is stored with Supabase Inc. on servers in the EU (Ireland). You can withdraw your consent anytime by emailing {mail}, and we will delete your address. At the latest, we delete it once we no longer need the waitlist.</p>
        <p><strong>Browser storage.</strong> The website remembers your language choice in your browser's local storage. This is only used for that feature. No cookies are set.</p>
      </Section>

      <Section title="3. The Rootmate app (iOS, Android, web)">
        <p><strong>Data stored on your device.</strong> Whatever you enter or save in the app is stored on your device, not with us. This includes profile details such as city, university, nationality or arrival date, your progress in the guides, reminders, and letters, documents and photos. On iOS and Android, documents are encrypted and excluded from cloud backups. In the web app, data is kept in your browser's storage. Deleting the app or clearing your browser data removes it.</p>
        <p><strong>On-device text recognition and analysis.</strong> On iOS, the app reads text from photos and PDFs with Apple's frameworks (Vision, PDFKit) and analyses letters with Apple's Foundation Model directly on your device. Nothing is sent to us.</p>
        <p><strong>Permissions.</strong> The app only asks when you use a feature: camera and photos (to save documents), notifications (local deadline reminders), and Face ID or device passcode (to protect the key for your documents). You can revoke permissions anytime in your device settings.</p>
        <p><strong>Postal code lookup.</strong> When you enter a German postal code, the app looks up the town via the OpenPLZ API (openplzapi.org). The postal code and, for technical reasons, your IP address are transmitted. Legal basis: Art. 6(1)(f) GDPR.</p>
        <p><strong>App updates.</strong> On start, the app checks for updates using Expo (650 Industries, Inc., USA). Technically necessary data such as IP address, device type, operating system and app version are transmitted. Legal basis: Art. 6(1)(f) GDPR. Transfers to the US are based on EU Standard Contractual Clauses.</p>
        <p><strong>Optional cloud AI (pilot only).</strong> Selected pilot participants can unlock a cloud AI for chat and letter analysis with an access code. This only happens after your explicit consent in the app. Your request (e.g. your question, or the text or image of a letter) is then sent through our server at Supabase (EU, Ireland) to an AI provider, currently Google (Gemini API), and the answer is returned. We don't store any content, only a random user ID, the time and the usage, to cap costs. Legal basis: your consent (Art. 6(1)(a) GDPR, and Art. 9(2)(a) GDPR for particularly sensitive data). Transfers to the US are based on the EU-US Data Privacy Framework or EU Standard Contractual Clauses. You can withdraw your consent anytime in the app.</p>
        <p><strong>App stores and test versions.</strong> The app is distributed through the App Store or TestFlight (Apple) and Google Play. These providers process data under their own responsibility. If you join a test, we see the details you share for it (e.g. name and email address if you were invited), plus crash reports and feedback if you send them.</p>
      </Section>

      <Section title="4. Contacting us by email">
        <p>If you email us, we process your message and contact details to answer your request (Art. 6(1)(b) or (f) GDPR) and delete them once they are no longer needed.</p>
      </Section>

      <Section title="5. Sharing">
        <p>We never sell data. We only share it with the service providers listed above, as far as a feature requires it.</p>
      </Section>

      <Section title="6. Your rights">
        <p>You have the right to access, rectification, erasure, restriction of processing, data portability and to object (Art. 15–21 GDPR). You can withdraw consent at any time with effect for the future. Just email {mail}.</p>
        <p>You can also lodge a complaint with a data protection authority, for example the State Commissioner for Data Protection of Lower Saxony (Landesbeauftragte für den Datenschutz Niedersachsen).</p>
      </Section>

      <Section title="7. Changes">
        <p>If the app or our service providers change, we update this policy. The version published here applies.</p>
      </Section>
    </LegalPage>
  )
}
