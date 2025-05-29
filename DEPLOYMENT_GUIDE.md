# GitHub Pages Deployment Guide

## Current Issue
Your site is showing "Hello" instead of the wedding website because the simple `index.html` file is being served instead of the built Next.js application.

## Steps to Fix:

### 1. Delete the simple index.html file
The simple `index.html` file in your root directory is interfering with the deployment. It should be deleted.

### 2. Check GitHub Actions
1. Go to your repository on GitHub
2. Click the "Actions" tab
3. Look for the "Deploy to GitHub Pages" workflow
4. Check if it has run successfully (green checkmark) or failed (red X)

### 3. If the workflow hasn't run:
- Make sure you push the updated code to trigger it
- The workflow should run automatically when you push to the main branch

### 4. If the workflow failed:
- Click on the failed workflow to see the error details
- Common issues:
  - Missing dependencies
  - Build errors
  - Permission issues

### 5. Check GitHub Pages Settings
1. Go to your repository Settings > Pages
2. Make sure:
   - Source is set to "Deploy from a branch"
   - Branch is set to "gh-pages"
   - Folder is set to "/ (root)"

### 6. Manual trigger (if needed):
1. Go to Actions tab
2. Click "Deploy to GitHub Pages" workflow
3. Click "Run workflow" button
4. Select "main" branch and click "Run workflow"

## Expected Result
After successful deployment, your site should show the beautiful wedding website with:
- David & Zori title
- Countdown timer
- Navigation menu
- Olive green theme

## Troubleshooting Commands

If you want to test locally first:
\`\`\`bash
npm install
npm run build
\`\`\`

This should create an `out` folder with your built website files including `index.html`.
