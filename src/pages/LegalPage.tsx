import type { ReactNode } from 'react'
import { operator } from '../lib/site'

export function LegalPage({ title, note, children }: { title: string; note?: string; children: ReactNode }) {
  return (
    <main className="flex-1 px-6 py-10">
      <article className="max-w-2xl mx-auto text-sm sm:text-base leading-relaxed text-[var(--color-text-muted)] [&_a]:underline [&_a:hover]:text-[var(--color-text)] [&_strong]:text-[var(--color-text)] [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_p]:mb-3">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--color-text)] mb-2">{title}</h1>
        {note && <p className="text-xs italic">{note}</p>}
        {children}
      </article>
    </main>
  )
}

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="text-lg sm:text-xl font-semibold text-[var(--color-text)] mb-3">{title}</h2>
      {children}
    </section>
  )
}

export function OperatorAddress() {
  return (
    <p>
      {operator.name}
      <br />
      {operator.street}
      <br />
      {operator.city}
      <br />
      {operator.country}
      <br />
      E-Mail: <a href={`mailto:${operator.email}`}>{operator.email}</a>
    </p>
  )
}
