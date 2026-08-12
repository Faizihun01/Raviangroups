# Ravian Construction Co Website

A clean, professional static website for Ravian Construction Co. Built with HTML5, CSS3, and vanilla JavaScript.

## Project Overview

This is a responsive, modern website designed to introduce a construction company, showcase its services, and make it easy for potential customers to get in touch.

**Website includes:**
- Home page with hero section, services overview, and call-to-action
- About page with company information and values
- Contact page with contact form and location information
- Fully responsive design (desktop, tablet, mobile)
- Accessible HTML5 structure
- Clean, maintainable code

## Project Structure

```
construction-company/
│
├── index.html                 # Home page
│
├── pages/
│   ├── about.html            # About Us page
│   └── contact.html          # Contact & Contact Form page
│
├── css/
│   ├── variables.css         # Design system (colors, typography, spacing, etc.)
│   ├── style.css             # Main styles and reusable components
│   └── responsive.css        # Mobile and tablet responsive design
│
├── js/
│   └── main.js              # Navigation, forms, and interactions
│
├── assets/
│   ├── images/              # Image folders (hero, services, about)
│   │   ├── hero/
│   │   ├── services/
│   │   └── about/
│   │
│   ├── icons/               # Icon files
│   └── fonts/               # Custom fonts (if used)
│
└── README.md                # This file
```

## CSS Architecture

### `variables.css`
Stores all design system variables:
- **Colors** - Primary, secondary, accent, and neutral colors
- **Typography** - Font families, sizes, weights, line heights
- **Spacing** - Consistent spacing scale (margins, padding)
- **Shadows** - Shadow effects for depth
- **Transitions** - Animation timings
- **Border Radius** - Rounded corner sizes
- **Breakpoints** - Responsive design breakpoints
- **Container Widths** - Max-width constraints

### `style.css`
Contains:
- Base HTML reset and typography styles
- Layout patterns (container, grid, flexbox utilities)
- Reusable components (buttons, cards, forms)
- Navigation and header styles
- Footer styles
- Utility classes for spacing and visibility

### `responsive.css`
Responsive breakpoints:
- **Desktop** (992px and up)
- **Tablet** (768px and down)
- **Mobile** (576px and down)
- **Small Mobile** (360px and down)

## How to Run

### Option 1: Local File (Simplest)
1. Extract/download the project folder
2. Open `index.html` in a web browser
3. Navigation between pages will work immediately

### Option 2: Local Web Server (Recommended for Development)
If you want to test with a local server:

**Using Python 3:**
```bash
python -m http.server 8000
```

**Using Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Using Node.js (if installed):**
```bash
npx http-server
```

Then open `http://localhost:8000` in your browser.

### Option 3: VS Code Live Server Extension
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## Features

### Responsive Design
- Adapts to all screen sizes (desktop, laptop, tablet, mobile)
- Mobile navigation menu with toggle button
- Properly scaled images and text
- Touch-friendly interaction areas

### Accessibility
- Semantic HTML5
- Proper heading hierarchy (h1, h2, h3, etc.)
- Form labels and ARIA attributes
- Keyboard-friendly navigation
- Color contrast compliance
- Alt text ready for images

### SEO Foundation
- Semantic HTML structure
- Meta tags on all pages (title, description)
- Proper heading hierarchy
- Mobile-friendly viewport settings
- Language declaration

### Components Included
- **Navigation bar** - Sticky header with mobile menu
- **Buttons** - Primary, secondary, sizes variations
- **Cards** - Reusable card component for content
- **Forms** - Accessible form fields with validation
- **Footer** - Multi-column footer with links
- **Sections** - Consistent section spacing

### JavaScript Features
- Mobile navigation toggle
- Smooth scrolling (anchor links)
- Form validation
- Active navigation link highlighting
- Scroll animations (fade-in on intersection)
- Responsive utilities

## Content Placeholders

The website uses clear placeholders for company-specific content:

- `[Company Name]` - Replace with actual company name
- `[Company Address]` - Replace with actual address
- `(123) 456-7890` - Replace with actual phone number
- `info@company.com` - Replace with actual email
- `Service One`, `Service Two`, `Service Three` - Replace with actual services
- Statistics and metrics - To be filled with actual company data

**Do not invent company information.** All placeholders should be replaced with actual, factual company details when provided.

## Customization

### Changing Colors
Edit `css/variables.css` and update the color variables:
```css
--primary-color: #2c3e50;
--secondary-color: #e74c3c;
--accent-color: #3498db;
```

### Changing Fonts
Edit `css/variables.css` and update:
```css
--font-primary: /* your font here */;
--font-secondary: /* your font here */;
```

### Adjusting Spacing
All spacing uses the `--space-*` variables. Change them in `variables.css` for consistent spacing updates throughout the site.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Dependencies

**None.** This is a pure static website with no external dependencies, frameworks, or build tools required.

## What's NOT Included

- Backend/Server
- Database
- Authentication/Login
- CMS
- Blog
- Admin panel
- E-commerce functionality
- Build tools or transpilers
- Package manager dependencies

These can be added later if needed.

## Performance Notes

- No external scripts or third-party libraries
- Fast load times due to minimal dependencies
- Optimized for mobile performance
- Smooth scrolling and transitions

## Future Enhancements

Possible additions for future versions:

1. **Content**
   - Add real company information and branding
   - Add company images and project portfolio
   - Fill in actual statistics and testimonials
   - Add team member profiles

2. **Functionality**
   - Form backend (email sending)
   - Project portfolio/gallery
   - Testimonials section
   - Blog section
   - Search functionality

3. **Design**
   - Dark mode support
   - Animation library
   - Additional page templates
   - Design refinements

4. **Technical**
   - CMS integration
   - Analytics
   - CDN for images
   - SEO tools integration

## Code Quality

The codebase follows these principles:
- Semantic HTML5
- Clean, readable CSS with clear organization
- Minimal, efficient JavaScript
- Meaningful class names and IDs
- No unnecessary dependencies
- Accessible structure from the ground up
- Responsive by default

## License

[To be determined]

## Contact

[Company contact information to be added]

---

**Created:** 2026  
**Last Updated:** August 2026
