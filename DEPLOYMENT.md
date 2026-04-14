# Vercel Deployment Guide

Your Equator Bridges platform is now ready for Vercel! 🚀

## Changes Made for Vercel Compatibility
1. **CMS Migration (JSON → Prisma)**: Local JSON files (`lib/*.json`) are read-only on Vercel. I have migrated the data layer to use Prisma. 
   - New `Inquiry`, `Service`, `Testimonial`, and `GalleryItem` models added to the database.
   - Server Actions now save data to the database, ensuring persistence.
   - **Initial Fallback**: The app will automatically fall back to your existing JSON data if the database is empty, making the initial transition seamless.

2. **Persistence**: 
   - Testimonials, Services, and Contact Leads are now stored in the database.
   - **Note on Images**: Standard file uploads to `public/gallery/` will not persist on Vercel. I recommend using **Cloudinary** or **Vercel Blob** for a production gallery.

## Required Environment Variables on Vercel
Add the following variables in your Vercel Project Settings:

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | Your production MySQL/PostgreSQL URL (e.g. from TiDB, PlanetScale, or Aiven) |
| `JWT_SECRET` | A secure random string for authentication |
| `NEXT_PUBLIC_APP_URL` | Your production domain (e.g. `https://equatorbridges.com`) |
| `EMAIL_SERVER_HOST` | SMTP host (e.g. `smtp.gmail.com`) |
| `EMAIL_SERVER_PORT` | SMTP port (e.g. `587`) |
| `EMAIL_SERVER_USER` | Your email |
| `EMAIL_SERVER_PASSWORD` | Your email app password |

## Post-Deployment Steps
1. Push your code to GitHub.
2. Connect the repository to Vercel.
3. Run migrations on your production database:
   ```bash
   npx prisma db push
   ```
   (Or use Vercel's integrated database tools).
