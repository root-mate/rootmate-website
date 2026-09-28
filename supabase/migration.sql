-- RootMate waitlist signups
-- Run once against the shared büro-buddy Supabase project (wcxvfhrhmtgvnvsxwigk).

create table if not exists public.waitlist_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  created_at timestamptz not null default now()
);

alter table public.waitlist_signups enable row level security;

-- Anonymous visitors may insert their own signup, but can never read the table
-- (no SELECT policy exists for anon/authenticated -> emails stay private).
drop policy if exists "anon can insert waitlist signups" on public.waitlist_signups;
create policy "anon can insert waitlist signups"
  on public.waitlist_signups
  for insert
  to anon
  with check (true);

-- Public, safe way to expose only the aggregate count (never individual rows).
create or replace function public.get_waitlist_count()
returns integer
language sql
security definer
set search_path = public
stable
as $$
  select count(*)::integer from public.waitlist_signups;
$$;

grant execute on function public.get_waitlist_count() to anon, authenticated;
