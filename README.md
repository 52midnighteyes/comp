# Project Build Status

## Current Issues

- Local build works, but deployment on Vercel still fails
  - After removing the slug component, `npm run build` now works without errors locally
  - However, deployment still fails on Vercel even without the slug implementation

- Unimplemented Features
  - Blog and post creation already hits the API successfully
  - Role-based access control not yet implemented, so created posts are not visible on the homepage
  - Protected routes have not been implemented
  - Login and Register functionality are still missing

- API Status
  - API is still connected to a local environment
  - Backend uses Supabase
  - The API is not yet deployed to a production environment

## Temporary Workarounds

- Blog post viewing uses a dialog component instead of dynamic slug routing
- Blog creation works with the local API

## To-Do (Short Term)

- [ ] Investigate and fix Vercel deployment failure (possible config/env mismatch)
- [ ] Implement login and register functionality
- [ ] Set up protected routes for dashboard and blog creation
- [ ] Reimplement slug-based routing for blog detail pages
- [ ] Deploy API to a production service (e.g., Supabase Edge Functions, Railway, Render)
- [ ] Connect frontend to deployed API
- [ ] Implement role-based blog visibility on homepage

## Stack

- Frontend: Next.js (TypeScript)
- Backend: Supabase (local, pending deployment)
- State Management: Zustand
- Auth: (planned) JWT or Supabase Auth

## Build Notes

- `npm run build` passes locally after removing slug
- Vercel deployment fails even after slug removal — check build logs and environment config
- Run `npm run lint` before pushing to catch type or syntax issues
- Test components in development mode before pushing to remote
- Avoid relying on unstable or incomplete features in server-side rendered pages
