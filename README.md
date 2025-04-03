# Cybersecurity Analyst Portfolio

A modern, interactive portfolio website for a cybersecurity analyst featuring a black and purple aesthetic theme with cybersecurity elements.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Interactive Elements**: Custom cursor, animations, and interactive components
- **Cybersecurity Theme**: Incorporates visual elements related to cybersecurity
- **Dark Mode**: Black and purple color scheme with aesthetic design
- **Portfolio Showcase**: Filterable portfolio items to showcase projects
- **Skills Visualization**: Visual representation of technical skills
- **Contact Form**: Functional contact form with validation
- **Custom Animations**: Smooth animations and transitions throughout the site

## Technologies Used

- HTML5
- CSS3 (with custom properties for theming)
- JavaScript (vanilla, no frameworks)
- Font Awesome for icons
- Google Fonts (Roboto and Roboto Mono)

## Project Structure

```
CyberSecPortfolio/
├── css/
│   ├── base.css        # Base styles, variables, and reset
│   ├── layout.css      # Layout and structure styles
│   ├── components.css  # Individual component styles
│   └── styles.css      # Main stylesheet that imports others
├── js/
│   └── script.js       # Main JavaScript file
├── img/                # Images and graphics
├── resume/             # Resume files
├── index.html          # Main HTML file
├── contact-footer.html # Contact section and footer (loaded dynamically)
└── README.md           # Project documentation
```

## Cybersecurity Elements

The portfolio incorporates several cybersecurity-themed elements:

1. **CSS-Based Patterns**: Custom CSS patterns that simulate binary code, circuit boards, and grid layouts
2. **Terminal Interface**: Command-line terminal with security commands
3. **Threat Map**: CSS-generated map showing attack vectors and security incidents
4. **Code Snippets**: Examples of secure coding practices
5. **Security Badges**: Visual indicators of security specialties
6. **Glitch Effects**: Text glitch animations for a cyberpunk aesthetic
7. **Neon Glow Effects**: Subtle glowing elements reminiscent of cybersecurity themes

## Setup and Usage

1. All files are contained within the CyberSecPortfolio directory
2. Open `index.html` in your web browser to view the site
3. No external dependencies or build steps required - it's pure HTML, CSS, and JavaScript

## Customization

### Changing the Color Scheme

The color scheme is defined using CSS variables in `css/base.css`. You can modify these variables to change the entire color scheme of the website:

```css
:root {
  --color-primary: #8A2BE2; /* Purple */
  --color-primary-light: #9D4EDD;
  --color-primary-dark: #6A0DAD;
  --color-secondary: #00FFFF; /* Cyan for accents */
  /* ... other color variables ... */
}
```

### Adding Portfolio Items

To add new portfolio items, edit the `index.html` file and add new portfolio items following the existing structure:

```html
<div class="portfolio-item category-name animate-on-scroll" data-animation="fade-up">
  <div class="portfolio-item-image portfolio-bg-1">
    <div class="portfolio-item-overlay">
      <div class="portfolio-item-info">
        <h3>Project Title</h3>
        <p>Project description goes here.</p>
        <a href="#" class="portfolio-item-view">View Case Study</a>
      </div>
    </div>
  </div>
</div>
```

You can create new CSS classes for different background patterns in the components.css file.

### Updating Personal Information

To update personal information, search for the placeholder text in `index.html` and `contact-footer.html` and replace it with your own information.

## Browser Compatibility

The website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Special Features

- **No Image Dependencies**: All visual elements are created using pure CSS, eliminating the need for image files
- **Interactive Terminal**: Simulated terminal with typing effect and command execution
- **Animated Skill Bars**: Visual representation of skills with animated progress bars
- **Responsive Design**: Fully responsive layout that adapts to all screen sizes
- **Filterable Portfolio**: Interactive filtering of portfolio items by category
- **Animated Sections**: Elements animate into view as you scroll down the page

## Credits

- Fonts: Google Fonts (Roboto, Source Code Pro)
- Icons: Font Awesome
- All visual elements: Created with CSS

## Contact

For any questions or feedback, please contact:
- Email: alex@cybersecurityanalyst.com
- Website: [www.cybersecurityanalyst.com](https://www.cybersecurityanalyst.com)
