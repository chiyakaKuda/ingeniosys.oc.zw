## Ingenio Systems site

Next.js App Router project with TypeScript, Tailwind CSS, and a contact form powered by Nodemailer.

### Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the site.

### Environment variables

Create a `.env.local` file (not committed) with:

```
EMAIL_USER=your_email@example.com
EMAIL_PASSWORD=your_app_password   # Gmail app password recommended
# Optional: where to deliver contact form emails
CEO_EMAIL=ceo@example.com
```

For Gmail, enable 2FA and generate an App Password, then use it as `EMAIL_PASSWORD`.

### Contact form

The frontend posts to `/api/contact`, which uses Nodemailer with the credentials above. Errors are logged server-side and surfaced to the user when the request fails.
