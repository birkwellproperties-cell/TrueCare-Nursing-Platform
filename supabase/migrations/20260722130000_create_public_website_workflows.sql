create extension if not exists pgcrypto;

create table if not exists public.jobs (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  location text not null,
  region text,
  employment_type text not null,
  shift text,
  featured boolean not null default false,
  summary text not null,
  description text not null,
  responsibilities text[] not null default '{}',
  requirements text[] not null default '{}',
  status text not null default 'draft' check (status in ('draft','published','closed','archived')),
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.candidate_applications (
  id uuid primary key default gen_random_uuid(),
  public_token uuid not null unique,
  job_id uuid references public.jobs(id) on delete set null,
  job_slug text not null,
  job_title text not null,
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text not null,
  city text not null,
  state text not null,
  professional_role text not null,
  license_number text not null,
  experience_range text not null,
  preferred_shift text not null,
  availability_notes text not null,
  resume_path text,
  consent_given boolean not null default false,
  source text not null default 'website',
  status text not null default 'new' check (status in ('new','reviewing','qualified','interview','offered','hired','declined','withdrawn','archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.facility_staffing_requests (
  id uuid primary key default gen_random_uuid(),
  contact_name text not null,
  phone text not null,
  email text not null,
  facility_name text not null,
  position_needed text not null,
  start_date date,
  message text not null,
  source text not null default 'website',
  status text not null default 'new' check (status in ('new','contacted','qualified','fulfilled','closed','archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.contact_inquiries (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  phone text not null,
  email text not null,
  subject text not null,
  message text not null,
  source text not null default 'website',
  status text not null default 'new' check (status in ('new','read','responded','closed','archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.jobs enable row level security;
alter table public.candidate_applications enable row level security;
alter table public.facility_staffing_requests enable row level security;
alter table public.contact_inquiries enable row level security;

create policy "Public can read published jobs"
on public.jobs for select
to anon, authenticated
using (status = 'published');

create policy "Public can submit candidate applications"
on public.candidate_applications for insert
to anon, authenticated
with check (consent_given = true and source = 'website');

create policy "Public can submit staffing requests"
on public.facility_staffing_requests for insert
to anon, authenticated
with check (source = 'website');

create policy "Public can submit contact inquiries"
on public.contact_inquiries for insert
to anon, authenticated
with check (source = 'website');

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'candidate-resumes',
  'candidate-resumes',
  false,
  10485760,
  array[
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ]
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

create policy "Public can upload candidate resumes"
on storage.objects for insert
to anon, authenticated
with check (bucket_id = 'candidate-resumes');

create policy "Public can receive uploaded resume metadata"
on storage.objects for select
to anon, authenticated
using (bucket_id = 'candidate-resumes');

insert into public.jobs (slug,title,location,region,employment_type,shift,featured,summary,description,responsibilities,requirements,status,published_at)
values
('registered-nurse-rn','Registered Nurse (RN)','Hutchinson, KS','Central Kansas','Per Diem','Flexible shifts',true,'Provide skilled nursing support across long-term care, rehabilitation, assisted-living, and other healthcare settings.','TrueCare Nursing Services is building its network of dependable Registered Nurses for flexible assignments across Central Kansas. Assignments vary by facility, shift, and patient-care need.',array['Deliver safe, compassionate nursing care within the assigned scope of practice.','Complete timely documentation and communicate changes in patient or resident condition.','Administer medications and treatments according to facility policy and provider orders.','Collaborate with facility leadership and interdisciplinary care teams.'],array['Active Kansas RN license in good standing.','Current CPR or BLS certification where required.','Ability to satisfy facility credentialing and background requirements.','Reliable transportation and dependable attendance.'],'published',now()),
('licensed-practical-nurse-lpn','Licensed Practical Nurse (LPN/LVN)','Hutchinson, KS','Central Kansas','Contract / Per Diem','Day, evening, and night',true,'Support medication administration, treatments, documentation, and coordinated resident care.','TrueCare is seeking Licensed Practical Nurses for contract and per-diem opportunities with healthcare facilities across Central Kansas.',array['Provide nursing care consistent with the assigned plan of care.','Administer medications and treatments within scope and facility policy.','Observe, document, and report changes in condition.','Support CNAs and collaborate with RNs and facility supervisors.'],array['Active Kansas LPN or multistate license in good standing.','Current CPR or BLS certification where required.','Successful completion of credentialing and screening requirements.','Strong communication and documentation skills.'],'published',now()),
('certified-nurse-aide-cna','Certified Nurse Aide (CNA)','Hutchinson, KS','Central Kansas','Flexible / Per Diem','All shifts',true,'Provide essential direct care and daily-living support under licensed nursing supervision.','TrueCare Nursing Services is accepting applications from Certified Nurse Aides interested in flexible assignments and dependable staffing support.',array['Assist residents or patients with activities of daily living.','Measure and record vital signs and report concerns promptly.','Support mobility, comfort, hygiene, nutrition, and safety needs.','Maintain respectful communication with residents, families, and care teams.'],array['Active Kansas CNA certification in good standing.','Ability to complete facility screening and onboarding requirements.','Reliable attendance and professional communication.','Ability to perform the physical duties of the assigned role.'],'published',now()),
('certified-medication-aide-cma','Certified Medication Aide (CMA)','Hutchinson, KS','Central Kansas','Per Diem','Flexible shifts',false,'Support safe medication assistance and direct care in qualified healthcare settings.','TrueCare is expanding its network of Certified Medication Aides for flexible assignments in Central Kansas.',array['Assist with medication administration within certification and facility policy.','Document medication services accurately and promptly.','Observe and report changes or medication-related concerns.','Provide direct-care support as assigned.'],array['Active Kansas CMA certification in good standing.','Active CNA certification when required by the assignment.','Completion of background and credential verification.','Strong attention to detail and dependable attendance.'],'published',now())
on conflict (slug) do nothing;
