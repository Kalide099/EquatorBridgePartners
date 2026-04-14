# Hostinger Deployment Guide for Equator Bridges

This project is built with **Next.js** and **Prisma**. To deploy it successfully on Hostinger, follow these steps.

## Prerequisites
1. **Hostinger VPS** (Recommended) or **Hostinger Node.js Hosting**.
2. A **MySQL Database** created in your Hostinger hPanel.
3. Node.js (v18+) installed on your server.

---

## Step 1: Prepare Environment Variables
Configure your environment variables in Hostinger (hPanel Node.js settings or `.env` file on VPS).

```env
DATABASE_URL="mysql://USER:PASSWORD@HOSTNAME:3306/DATABASE_NAME"
JWT_SECRET="generate_a_random_long_string_here"
NEXT_PUBLIC_APP_URL="https://yourdomain.com"
```

## Step 2: Database Initialization
Before starting the app, you must push the schema to your Hostinger database:
```bash
npx prisma db push
```
Then, seed the initial data:
```bash
node prisma/seed.js
```

## Step 3: Build the Application
On your server (or via CI/CD), run:
```bash
npm install
npm run build
```

## Step 4: Starting the App

### Option A: Hostinger Node.js Hosting (Shared/Cloud)
1. In hPanel, go to **Node.js**.
2. Set the **Application Start File** to `node_modules/next/dist/bin/next`.
3. Set the **Command** to `start`.
4. Ensure your **Environment Variables** are added in the hPanel.

### Option B: VPS (Using PM2 - Recommended)
Install PM2 globally:
```bash
npm install -g pm2
```
Start the application:
```bash
pm2 start npm --name "equator-bridges" -- start
pm2 save
pm2 startup
```

## Troubleshooting
- **Database Connection Error**: Ensure **Remote MySQL** is enabled in Hostinger and that your IP (or `%`) is whitelisted.
- **Port Conflict**: Next.js defaults to port `3000`. If Hostinger provides a specific port via `process.env.PORT`, Next.js will typically honor it.
- **Prisma Client**: If you see "PrismaClient did not initialize", run `npx prisma generate` on the server.
