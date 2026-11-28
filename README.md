# VIBORA

VIBORA is an all-in-one AI creative and entertainment platform starter, built with Next.js, TypeScript and Supabase.

## Included in this starter
- Premium responsive landing page
- Login and signup UI wired to Supabase Auth
- Workspace dashboard and studio navigation
- Image, video, movie, design and audio studio brief pages
- Project saving API route
- Profile and settings pages
- Community foundation
- Initial database schema with row-level security
- Server-side API placeholder for future AI provider integration

## 1. Install
```bash
npm install
```

## 2. Configure Supabase
1. Create a Supabase project.
2. In Supabase SQL Editor, run `supabase/schema.sql`.
3. In Project Settings > API, copy the Project URL and anon/public key.
4. Copy `.env.example` to `.env.local` and fill:
```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```
5. In Supabase Auth > URL Configuration, set your Site URL to your deployed Vercel URL and add the local/deployed callback URLs as needed.

## 3. Run locally
```bash
npm run dev
```

## 4. Deploy to Vercel
Import this GitHub repository. Framework: Next.js. Root directory: `./`. Build command: `npm run build`. Leave output directory at its default. Add the two Supabase environment variables in Vercel before deployment.

## Important integration status
The interface and foundational backend routes are included, but AI image/video generation, AI chat, file uploads, community feeds, payment processing, email delivery, and admin moderation require provider credentials and additional provider-specific implementation/testing. The `/api/generate` route deliberately returns a clear not-configured response rather than pretending generation works.

Never put secret provider keys in `NEXT_PUBLIC_` variables or commit `.env.local` to GitHub. Use server-side environment variables for all secret keys. Do not grant admin roles from client-side code.

## Suggested next integrations
- Supabase Storage bucket and secure upload policies
- Image/video provider adapters and asynchronous job tracking
- AI assistant model provider
- Payment provider and verified webhook handlers
- Email provider for transactional messages
- Admin role, moderation and audit log
