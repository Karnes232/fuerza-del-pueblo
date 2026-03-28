create table member_applications (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  email text not null unique,
  phone text not null,
  date_of_birth date not null,
  address text not null,
  city text not null,
  membership_type text not null,
  interests text[] default '{}',
  availability text[] default '{}',
  motivation text,
  receive_updates boolean default true,
  status text default 'new',
  created_at timestamp with time zone default now()
);

create index member_applications_status_idx on member_applications (status);
