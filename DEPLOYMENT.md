# Deployment Guide for Render

This project is configured to be deployed on [Render](https://render.com) using a Blueprint (`render.yaml`).

## Prerequisites

1.  **GitHub Repository**: Ensure this project is pushed to a GitHub repository.
2.  **Render Account**: Create an account on Render.

## Steps to Deploy

1.  **Push Changes**:
    Commit and push the latest changes (including `render.yaml`, `server/package.json`, and `client/src/components/Contact.jsx`) to your GitHub repository.

2.  **Create Blueprint on Render**:
    *   Go to your [Render Dashboard](https://dashboard.render.com/).
    *   Click **New +** and select **Blueprint**.
    *   Connect your GitHub repository.
    *   Render will automatically detect the `render.yaml` file.

3.  **Configure Environment Variables**:
    *   You will be prompted to enter values for `EMAIL_USER` and `EMAIL_PASS` (for the contact form functionality).
    *   Enter your email credentials (use an App Password if using Gmail).
    *   Click **Apply**.

4.  **Wait for Build**:
    *   Render will deploy two services:
        *   `portfolio-backend`: The Node.js API.
        *   `portfolio-frontend`: The React static site.
    *   The frontend will automatically be configured to talk to the backend.

## Custom Domain Configuration

Once the deployment is successful:

1.  Go to the **Dashboard** and click on the **portfolio-frontend** service.
2.  Click on **Settings** -> **Custom Domains**.
3.  Click **Add Custom Domain**.
4.  Enter your domain name (e.g., `www.yourdomain.com`).
5.  **Update DNS**:
    *   Render will show you a **CNAME** record (e.g., `portfolio-frontend.onrender.com`) or an **A** record.
    *   Log in to your domain registrar (GoDaddy, Namecheap, etc.).
    *   Add the CNAME record for `www` pointing to the Render URL.
    *   If using a root domain (e.g., `yourdomain.com`), add the A record provided by Render.
6.  Click **Verify** in Render. It may take a few minutes to propagate.

## Troubleshooting

*   **CORS Issues**: If the frontend cannot talk to the backend, check the browser console. The backend is currently configured to allow all origins (`cors()`), so this should work.
*   **Email Failures**: Check the backend logs in Render to see if `nodemailer` is failing (often due to incorrect credentials).
