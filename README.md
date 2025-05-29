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

1. **Push this code to your GitHub repository**

2. **Enable GitHub Pages:**
   - Go to your repository Settings > Pages
   - Set Source to "Deploy from a branch"
   - Select branch: `gh-pages`
   - Select folder: `/ (root)`
   - Click Save

3. **The deployment process:**
   - When you push to `main`, GitHub Actions will automatically:
     - Build the Next.js app
     - Generate static files in the `out` folder
     - Deploy those files to the `gh-pages` branch
     - GitHub Pages will serve the site from the `gh-pages` branch

4. **Your website will be available at:**
   `https://[your-username].github.io/[repository-name]/`

### Important Notes:

- The first deployment may take a few minutes
- Check the Actions tab to see the deployment progress
- Make sure GitHub Pages is enabled in your repository settings
- The site will update automatically when you push changes to main

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

This will create an `out` folder with static files.

## Project Structure

- `app/page.tsx` - Main wedding website component
- `app/layout.tsx` - Root layout with metadata and font loading
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
- ✅ Automatic deployment to GitHub Pages

## Troubleshooting

If the website doesn't load:

1. Check that GitHub Pages is enabled in Settings > Pages
2. Make sure the source is set to "Deploy from a branch" and branch is "gh-pages"
3. Check the Actions tab for any deployment errors
4. Wait a few minutes for the first deployment to complete
