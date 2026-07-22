# TrueCare Nursing Services Website — Phase 3

React/Vite public website with an optional Supabase production data layer.

## Run locally

```powershell
npm install
npm run dev
```

## Production build

```powershell
npm run build
```

## Supabase setup

1. Create a Supabase project.
2. Open the Supabase SQL Editor.
3. Run:
   `supabase/migrations/20260722130000_create_public_website_workflows.sql`
4. Copy `.env.example` to `.env.local`.
5. Add the project URL and anon key:

```env
VITE_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

6. Restart `npm run dev` after saving `.env.local`.

Without environment variables, the site stays in safe preview mode and uses the built-in sample jobs.

## Phase 3 workflows

- Published jobs loaded from Supabase
- Candidate applications saved to Postgres
- Private résumé uploads to Supabase Storage
- Facility staffing requests saved to Postgres
- Contact inquiries saved to Postgres
- Row Level Security enabled on all public workflow tables
- Public users can insert submissions but cannot read them
- Résumé file validation: PDF, DOC, DOCX; maximum 10 MB

## Confirmed office address

924 N Main St  
Hutchinson, KS 67501
