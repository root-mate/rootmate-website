import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string

if (!supabaseUrl || !supabaseAnonKey) {
  // eslint-disable-next-line no-console
  console.error(
    'Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY env vars. Copy .env.example to .env.local and fill in values.',
  )
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

/** Postgres unique_violation error code. */
export const UNIQUE_VIOLATION = '23505'

export async function joinWaitlist(email: string) {
  const { error } = await supabase.from('waitlist_signups').insert({ email })
  return { error }
}

export async function getWaitlistCount(): Promise<number | null> {
  const { data, error } = await supabase.rpc('get_waitlist_count')
  if (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to load waitlist count', error)
    return null
  }
  return typeof data === 'number' ? data : null
}
