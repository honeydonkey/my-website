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

This portfolio is configured for easy deployment on Vercel. Follow these steps to deploy:

1. Create a Vercel account at [vercel.com](https://vercel.com) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel from the command line:
   ```
   vercel login
   ```
4. Navigate to the project directory and run:
   ```
   vercel
   ```
5. Follow the prompts to complete the deployment

Alternatively, you can deploy directly from the Vercel dashboard:

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your project from GitHub, GitLab, or Bitbucket
3. Vercel will automatically detect the project type and configure the build settings
4. Click "Deploy" to publish your portfolio

The deployment configuration is handled by the `vercel.json` file, which includes:
- Static site configuration
- Custom routing rules
- 404 page handling
- Security headers

## Customization

To customize this portfolio for your own use:

1. Update the personal information in the HTML file
2. Replace the profile image URL with your own image
3. Update the resume PDF with your own resume
4. Modify the projects section to showcase your own work
5. Update the contact information with your own details

## License

This project is available for personal and commercial use.
