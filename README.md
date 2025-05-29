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

1. Create a new repository on GitHub
2. Push this code to the repository
3. Go to your repository Settings > Pages
4. Set Source to "GitHub Actions"
5. The website will automatically build and deploy

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

## Customization

- Update names, dates, and content in `app/page.tsx`
- Modify colors in `tailwind.config.ts`
- Add your own images by replacing the placeholder images
