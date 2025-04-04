# Cybersecurity Portfolio - Marianne Wong

A professional portfolio website for a cybersecurity analyst with a black and purple aesthetic theme.

## Features

- Responsive design that works on all device sizes
- Dark theme with purple and pink gradient accents
- Interactive navigation with hover effects
- Skills section highlighting security operations, tools, and certifications
- Project showcase featuring security-focused applications
- Contact section with styled information
- Downloadable resume functionality

## Technologies Used

- HTML5
- CSS3
- Google Fonts (Poppins)
- Responsive design techniques

## File Structure

```
CyberSecPortfolio-Final/
├── index.html          # Main HTML file
├── 404.html            # Custom 404 error page
├── projects/           # Project detail pages
│   ├── ai-security-faq-bot.html       # AI Security FAQ Bot detail page
│   ├── grc-compliance-framework.html  # GRC Compliance Framework detail page
│   ├── network-traffic-analysis.html  # Network Traffic Analysis Tool detail page
│   ├── security-awareness.html        # Security Awareness Training Program detail page
│   └── vulnerability-management.html  # Vulnerability Management System detail page
├── resume/             # Resume directory
│   └── marianne-wong-resume.pdf       # Downloadable resume
├── .gitignore          # Git ignore configuration
├── package.json        # Project metadata and dependencies
├── vercel.json         # Vercel deployment configuration
└── README.md           # Project documentation
```

## How to Use

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Navigate through the portfolio using the menu links

## Deployment on Vercel

This portfolio is configured for easy deployment on Vercel using a simplified approach. Follow these steps to deploy:

### Method 1: Using the Vercel Dashboard (Recommended)

1. Create a Vercel account at [vercel.com](https://vercel.com) if you don't have one
2. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
3. Go to [vercel.com/new](https://vercel.com/new)
4. Import your repository
5. In the "Build and Output Settings" section:
   - Leave the build command empty or set it to `npm run build`
   - Set the output directory to `public`
6. Click "Deploy"

### Method 2: Using the Deployment Script (Easiest)

This repository includes a deployment script that automates the process:

1. Make the script executable:
   ```
   chmod +x deploy.sh
   ```
2. Run the script:
   ```
   ./deploy.sh
   ```
3. The script will:
   - Check if Vercel CLI is installed and install it if needed
   - Create the public directory and copy all necessary files
   - Ask if you want to deploy to Vercel immediately
   - Guide you through the deployment process

### Method 3: Using the Vercel CLI Manually

1. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
2. Login to Vercel from the command line:
   ```
   vercel login
   ```
3. Navigate to the project directory and run:
   ```
   vercel --prod
   ```
4. When prompted, select the following options:
   - Set the output directory to `public`
   - Confirm the deployment

### Important Notes for Deployment

This portfolio uses a simplified deployment approach to avoid common Vercel deployment issues:

1. **Public Directory Structure**: All deployable files are in the `public` directory. This is where Vercel will look for files to serve.

2. **Minimal Configuration**: The `vercel.json` file has been simplified to include only the essential configuration:
   ```json
   {
     "version": 2,
     "public": true
   }
   ```

3. **No Complex Build Process**: The package.json file has a minimal build script that doesn't require any build tools.

If you encounter any deployment issues, make sure:
- The `public` directory exists and contains all necessary files (HTML, CSS, images, etc.)
- You've specified `public` as the output directory in your Vercel deployment settings
- Your vercel.json file is correctly formatted

## Customization

To customize this portfolio for your own use:

1. Update the personal information in the HTML file
2. Replace the profile image URL with your own image
3. Update the resume PDF with your own resume
4. Modify the projects section to showcase your own work
5. Update the contact information with your own details

## License

This project is available for personal and commercial use.
