# Deployment Guide for Your Portfolio Project

This guide will help you deploy your Next.js portfolio project to the web. There are several options for deploying Next.js applications, but Vercel (created by the same team behind Next.js) offers the most seamless experience.

## Option 1: Deploy to Vercel (Recommended)

### Prerequisites
- A GitHub, GitLab, or Bitbucket account
- Your project pushed to a repository

### Steps

1. **Prepare your project**
   - Make sure your project is working correctly locally
   - Ensure you've set up any required environment variables in a `.env.local` file
   - Commit all your changes to your repository

2. **Sign up for Vercel**
   - Go to [vercel.com](https://vercel.com) and sign up for an account
   - Connect your GitHub, GitLab, or Bitbucket account

3. **Import your repository**
   - Click "Add New..." → "Project"
   - Select your portfolio repository from the list
   - Vercel will automatically detect that it's a Next.js project

4. **Configure your project**
   - Add any environment variables from your `.env.local` file
     - For your portfolio, add `RESEND_API_KEY` and `FROM_EMAIL` variables
   - Keep the default build settings (Vercel automatically detects Next.js settings)

5. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your project
   - Once complete, you'll get a URL where your site is live (e.g., `your-portfolio.vercel.app`)

6. **Set up a custom domain (optional)**
   - In your project dashboard, go to "Settings" → "Domains"
   - Add your custom domain and follow the instructions to configure DNS

### Continuous Deployment

With Vercel, any time you push changes to your repository, your site will automatically redeploy with the updates.

## Option 2: Deploy to Netlify

### Steps

1. **Sign up for Netlify**
   - Go to [netlify.com](https://netlify.com) and create an account
   - Connect your GitHub, GitLab, or Bitbucket account

2. **Import your repository**
   - Click "New site from Git"
   - Select your repository

3. **Configure build settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Add environment variables from your `.env.local` file

4. **Deploy**
   - Click "Deploy site"

## Option 3: Self-hosting

If you prefer to self-host your portfolio:

1. **Build your project**
   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm run start
   ```

3. **Use a process manager like PM2**
   ```bash
   npm install -g pm2
   pm2 start npm --name "portfolio" -- start
   ```

4. **Set up a reverse proxy with Nginx or Apache**
   - Configure the server to proxy requests to your Next.js application
   - Set up SSL with Let's Encrypt

## Important Notes for Deployment

1. **Environment Variables**
   - Make sure to set up the required environment variables on your hosting platform:
     - `RESEND_API_KEY`: Your API key for the email service
     - `FROM_EMAIL`: The email address to send from

2. **Email Functionality**
   - The contact form uses Resend for sending emails
   - You'll need a valid Resend API key for the contact form to work in production

3. **Static Assets**
   - All images and static files in the `public` directory will be available at the root URL path

4. **Performance Optimization**
   - Consider optimizing images further for production
   - Enable caching headers for static assets

## After Deployment

1. **Test your live site**
   - Navigate through all pages
   - Test the contact form
   - Verify that all images and assets load correctly

2. **Set up analytics (optional)**
   - Consider adding Google Analytics or another analytics service

3. **Submit your site to search engines (optional)**
   - Submit your site to Google Search Console
   - Create a sitemap.xml file

If you encounter any issues during deployment, refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more detailed information.