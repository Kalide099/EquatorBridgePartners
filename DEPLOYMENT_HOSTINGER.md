# Hostinger Deployment Guide for Equator Bridges

This project is built with **Next.js** and **Prisma**. To deploy it successfully on Hostinger, follow these steps.

## Prerequisites
1. **Hostinger Node.js Hosting** (Business or standard Node.js plan).
2. A **MySQL Database** created in your Hostinger hPanel.
3. Node.js (v18 or v20) selected in Hostinger.

---

## Step 1: Environment Variables
Add these in the **Node.js** section of your Hostinger hPanel:

```env
DATABASE_URL="mysql://USER:PASSWORD@127.0.0.1:3306/DATABASE_NAME"
JWT_SECRET="equator_bridges_premium_secret_2025"
NEXT_PUBLIC_APP_URL="https://yourdomain.com"
NODE_ENV="production"
PORT=3000

# Email (Nodemailer)
EMAIL_SERVER_HOST="smtp.gmail.com"
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER="your-email@gmail.com"
EMAIL_SERVER_PASSWORD="your-app-password"
EMAIL_FROM="Equator Bridges <noreply@yourdomain.com>"
```

---

## Step 2: Server Configuration
In the Hostinger Node.js Dashboard:
1. **Application Start File**: `.next/standalone/server.js`
2. **Command**: (Leave empty or set to `start`)

---

## Step 3: Deployment via Terminal (SSH)
Connect to your server via SSH and run:

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Database Push**:
   ```bash
   npx prisma db push
   ```

3. **Build the Application**:
   ```bash
   npm run build
   ```

4. **Copy Public Files** (Next.js standalone requirement):
   ```bash
   cp -r public .next/standalone/
   cp -r .next/static .next/standalone/.next/
   ```

---

## Troubleshooting
- **Database Connection Error**: Use `127.0.0.1` instead of `localhost` in the connection string.
- **Port Conflict**: Hostinger usually assigns a port; the app will automatically use it via `process.env.PORT`.
- **Images not showing**: Ensure `unoptimized: true` is in `next.config.mjs` (it is already configured).
