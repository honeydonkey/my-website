# Deployment Guide for Cybersecurity Portfolio

This guide provides detailed instructions for deploying your cybersecurity portfolio to Vercel. Follow these steps to ensure a successful deployment.

## Prerequisites

- A [Vercel](https://vercel.com) account
- Git installed on your computer (optional, for Method 1)
- Node.js and npm installed on your computer (for Methods 2 and 3)

## Deployment Methods

### Method 1: Using the Vercel Dashboard (Recommended for Beginners)

This method is the easiest and requires minimal technical knowledge.

1. **Create a Vercel Account**
   - Go to [vercel.com](https://vercel.com) and sign up for an account if you don't have one
   - You can sign up using GitHub, GitLab, or Bitbucket for easier integration

2. **Push Your Code to a Git Repository**
   - Create a repository on GitHub, GitLab, or Bitbucket
   - Push your portfolio code to the repository
   - Make sure your repository includes all the files in this project

3. **Import Your Repository to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Select your Git provider (GitHub, GitLab, or Bitbucket)
   - Select your repository from the list
   - Vercel will automatically detect that it's a static site

4. **Configure Deployment Settings**
   - In the "Build and Output Settings" section:
     - Leave the build command empty or set it to `npm run build`
     - Set the output directory to `public`
   - Click "Deploy"

5. **Verify Your Deployment**
   - Once the deployment is complete, Vercel will provide you with a URL
   - Visit the URL to ensure your portfolio is working correctly
   - Check that all pages, links, and resources are loading properly

### Method 2: Using the Deployment Script (Easiest for Local Deployment)

This repository includes a deployment script that automates the process.

1. **Make the Script Executable**
   ```bash
   chmod +x deploy.sh
   ```

2. **Run the Script**
   ```bash
   ./deploy.sh
   ```

3. **Follow the Script Prompts**
   - The script will check if Vercel CLI is installed and install it if needed
   - It will create the public directory and copy all necessary files
   - It will ask if you want to deploy to Vercel immediately
   - If you choose to deploy, it will guide you through the process

4. **Verify Your Deployment**
   - Once the deployment is complete, Vercel will provide you with a URL
   - Visit the URL to ensure your portfolio is working correctly

### Method 3: Using the Vercel CLI Manually

This method gives you more control over the deployment process.

1. **Install the Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel from the Command Line**
   ```bash
   vercel login
   ```
   - Follow the prompts to log in to your Vercel account

3. **Prepare Your Project**
   - Make sure your project has a `public` directory containing all the files to be deployed
   - If the `public` directory doesn't exist or is empty, create it and copy the necessary files:
     ```bash
     mkdir -p public
     cp -r index.html 404.html projects resume public/
     ```

4. **Deploy Your Project**
   ```bash
   vercel --prod
   ```
   - When prompted, select the following options:
     - Set the output directory to `public`
     - Confirm the deployment

5. **Verify Your Deployment**
   - Once the deployment is complete, Vercel will provide you with a URL
   - Visit the URL to ensure your portfolio is working correctly

## Troubleshooting Common Deployment Issues

### Missing Public Directory Error

If you encounter a "Missing public directory" error:

1. Make sure the `public` directory exists in your project
2. Make sure the `public` directory contains all the necessary files
3. Make sure you've specified `public` as the output directory in your Vercel deployment settings

### 404 Errors for Pages

If some pages return 404 errors:

1. Make sure all HTML files are in the correct location in the `public` directory
2. Check that the `vercel.json` file in the `public` directory is correctly configured
3. Verify that all links in your HTML files use the correct paths

### CSS or JavaScript Not Loading

If CSS or JavaScript files are not loading:

1. Check that all file paths in your HTML files are correct
2. Make sure all CSS and JavaScript files are included in the `public` directory
3. Verify that the file paths use the correct case (e.g., `style.css` vs `Style.css`)

### Custom Domain Issues

If you're using a custom domain and encountering issues:

1. Make sure your domain's DNS settings are correctly configured
2. Verify that you've added the domain to your Vercel project
3. Check that the SSL certificate has been issued correctly

## After Deployment

After successfully deploying your portfolio, you may want to:

1. **Add a Custom Domain**
   - Go to your project settings in the Vercel dashboard
   - Click on "Domains"
   - Add your custom domain and follow the instructions

2. **Set Up Continuous Deployment**
   - If you deployed using a Git repository, Vercel will automatically redeploy your site when you push changes
   - Make sure your repository is connected to Vercel

3. **Monitor Your Site**
   - Vercel provides analytics and monitoring tools
   - Check your project dashboard for insights on traffic and performance

## Need Help?

If you encounter any issues during deployment, you can:

- Check the [Vercel documentation](https://vercel.com/docs)
- Visit the [Vercel community](https://github.com/vercel/vercel/discussions)
- Contact Vercel support through your dashboard
