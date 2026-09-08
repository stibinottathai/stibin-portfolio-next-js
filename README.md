# Stibin Augustine — Portfolio

A personal portfolio built with **Next.js 16**, **Tailwind CSS 4**, and **Firebase**. All content (hero, about, skills, experience, projects, education, social links) is editable from a built-in admin panel at `/admin`, protected by Google Sign-In.

## How it works

- The public site (`/`) live-subscribes to a single Firestore document: `portfolio/content`. Until that document exists, the site renders built-in defaults seeded from the CV ([lib/content.ts](lib/content.ts)).
- The admin panel (`/admin`) requires Google Sign-In. Only allowlisted emails (see `ADMIN_EMAILS` in [lib/firebase.ts](lib/firebase.ts)) can open the editor, and Firestore security rules ([firestore.rules](firestore.rules)) enforce the same allowlist server-side.
- Saving in the admin panel writes the whole content document; the public site updates instantly via the live subscription.
- The contact form writes to a `messages` collection (create-only for visitors). Enquiries appear in the admin panel's **Messages** tab, where you can reply by email, mark read, or delete.
- The profile photo is editable from the admin Hero tab — paste an image URL or upload a file (it's resized in the browser and stored inline with the content, no Firebase Storage needed).

## One-time Firebase setup (required before editing works)

Do these in the [Firebase console](https://console.firebase.google.com/project/stibin-nextjs-portfolio):

1. **Enable Google Sign-In**: Build → Authentication → Get started → Sign-in method → add **Google** → Enable → Save.
2. **Create Firestore**: Build → Firestore Database → Create database → Production mode → pick a region (e.g. `me-central1` or `europe-west1`).
3. **Deploy the security rules**: Firestore Database → Rules → paste the contents of [firestore.rules](firestore.rules) → Publish.
4. **Authorized domains** (for production): Authentication → Settings → Authorized domains → add your deployed domain (e.g. `stibin.online`). `localhost` is already allowed.

> If you sign in with a different Google account later, add its email to both `ADMIN_EMAILS` in [lib/firebase.ts](lib/firebase.ts) **and** the allowlist in [firestore.rules](firestore.rules) (rules compare the exact email string, so include the dotted form your account reports).

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the site and [http://localhost:3000/admin](http://localhost:3000/admin) for the editor.

## Deploy

Deploy to [Vercel](https://vercel.com/new) — no environment variables needed (the Firebase web config in `lib/firebase.ts` is public by design; security comes from the Firestore rules). After deploying, add the domain under Firebase Authentication → Authorized domains.
