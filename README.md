# Cybersecurity Portfolio

A personal portfolio website for a cybersecurity analyst with a black and purple aesthetic theme. The website is interactive, visually appealing, and incorporates various cybersecurity elements.

## Features

- Black and purple color scheme with neon accents
- Interactive terminal with typing effect
- Matrix rain animation
- Threat map visualization
- Portfolio filtering system
- Responsive design for all device sizes
- Custom 404 error page
- Smooth animations and transitions

## Technologies Used

- HTML5
- CSS3 (with custom properties and animations)
- JavaScript (vanilla)
- Font Awesome icons
- Google Fonts

## Deployment to Vercel

This portfolio is configured for deployment on Vercel. Follow these steps to deploy:

1. Create a Vercel account at [vercel.com](https://vercel.com) if you don't have one already.
2. Install the Vercel CLI: `npm install -g vercel`
3. Navigate to the project directory in your terminal.
4. Run `vercel login` and follow the prompts to log in.
5. Run `vercel` to deploy the project.
6. Follow the prompts to configure your deployment.
7. Once deployed, Vercel will provide you with a URL to access your portfolio.

### Troubleshooting 404 Errors

If you encounter 404 errors after deployment, check the following:

1. Make sure all file paths in HTML, CSS, and JavaScript files are correct.
2. Ensure that all referenced files exist in the project.
3. Check that the `vercel.json` file is properly configured.
4. Verify that the `404.html` file exists in the root directory.
5. Try running `vercel --prod` to deploy directly to production.

### Important Vercel Deployment Notes

1. **Node.js Project Configuration**: We've configured the project as a Node.js static site:
   - Added `package.json` with build and start scripts
   - Configured `vercel.json` to use the static build setup
   - This helps Vercel properly recognize and deploy the project

2. **Direct Deployment Method**: For the most reliable deployment, use the Vercel web interface:
   - Go to [vercel.com](https://vercel.com) and log in
   - Click "Add New..." → "Project"
   - Import your GitHub repository or upload the entire folder directly
   - Make sure to select "Other" as the framework preset if prompted
   - Click "Deploy"

3. **Folder Structure**: The project uses a standard web structure:
   - `index.html` in the root directory
   - CSS files in the `css/` directory
   - JavaScript files in the `js/` directory
   - Images in the `img/` directory
   - All paths are relative and should work correctly on Vercel

4. **Troubleshooting Steps**:
   - If you encounter issues, try deploying directly from the Vercel web interface
   - Make sure all files are included in your upload
   - Check that no files are being ignored by `.vercelignore` or `.gitignore`
   - Verify that the deployment logs don't show any build errors

## Local Development

To run the portfolio locally:

1. Clone the repository.
2. Open the project folder in your code editor.
3. Open `index.html` in your browser.

## Customization

To customize the portfolio:

1. Update the personal information in `index.html`.
2. Modify the color scheme in `css/base.css`.
3. Add your own projects to the portfolio section.
4. Update the skills and certifications to match your expertise.
5. Replace placeholder images with your own images.

## License

This project is available for personal and commercial use.
