# David & Zori Wedding Website

A beautiful wedding website built with Next.js, featuring:

- Bilingual support (English/Bulgarian)
- Real-time countdown timer
- Responsive design
- Olive green theme
- Wedding agenda and guest guide

## Deployment to GitHub Pages

This website is configured to automatically deploy to GitHub Pages when you push to the main branch.

### Setup Instructions:

1. **Enable GitHub Pages in your repository:**
   - Go to your repository Settings > Pages
   - Set Source to "GitHub Actions"
   - The website will automatically build and deploy when you push to main

2. **The deployment process:**
   - GitHub Actions will run the build process
   - Next.js will generate static files in the `out` folder
   - These files will be deployed to GitHub Pages

### Local Development:

\`\`\`bash
npm install
npm run dev
\`\`\`

Visit `http://localhost:3000` to see the website locally.

### Manual Build:

\`\`\`bash
npm run build
\`\`\`

This will create an `out` folder with static files ready for deployment.

## Project Structure

- `app/page.tsx` - Main wedding website component
- `app/layout.tsx` - Root layout with metadata
- `app/globals.css` - Global styles and Tailwind CSS
- `tailwind.config.ts` - Tailwind configuration with olive theme
- `next.config.mjs` - Next.js configuration for static export
- `.github/workflows/deploy.yml` - GitHub Actions deployment workflow

## Customization

- Update names, dates, and content in `app/page.tsx`
- Modify colors in `tailwind.config.ts`
- Add your own images by replacing the placeholder images
- Update metadata in `app/layout.tsx`

## Features

- ✅ Responsive design for all devices
- ✅ Bilingual support (English/Bulgarian)
- ✅ Real-time countdown timer
- ✅ Smooth scrolling navigation
- ✅ Confetti animation on page load
- ✅ Elegant olive green color scheme
- ✅ Mobile-friendly navigation
- ✅ Static site generation for fast loading
