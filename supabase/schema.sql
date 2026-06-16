create table if not exists public.quote_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  phone text not null,
  email text,
  city text not null,
  project_type text not null default 'Not sure yet',
  timeline text not null default 'Flexible',
  message text,
  source text not null default 'website',
  status text not null default 'new',
  user_agent text,
  page_path text
);

alter table public.quote_requests enable row level security;

drop policy if exists "Public can create quote requests" on public.quote_requests;
create policy "Public can create quote requests"
  on public.quote_requests
  for insert
  to anon
  with check (true);

drop policy if exists "Authenticated users can read quote requests" on public.quote_requests;
create policy "Authenticated users can read quote requests"
  on public.quote_requests
  for select
  to authenticated
  using (true);

create index if not exists quote_requests_created_at_idx
  on public.quote_requests (created_at desc);

create index if not exists quote_requests_status_idx
  on public.quote_requests (status);

