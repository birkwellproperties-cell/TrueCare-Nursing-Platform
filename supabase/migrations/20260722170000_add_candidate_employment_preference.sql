alter table public.candidate_applications
add column if not exists employment_preference text;

update public.candidate_applications
set employment_preference = 'Not specified'
where employment_preference is null;

alter table public.candidate_applications
alter column employment_preference set not null;

alter table public.candidate_applications
drop constraint if exists candidate_applications_employment_preference_check;

alter table public.candidate_applications
add constraint candidate_applications_employment_preference_check
check (
  employment_preference in (
    'Per Diem',
    'Contract',
    'Per Diem + Contract',
    'Full-Time',
    'Part-Time',
    'PRN',
    'Weekend Only',
    'Any Available',
    'Not specified'
  )
);

comment on column public.candidate_applications.employment_preference
is 'Applicant preferred employment arrangement.';
