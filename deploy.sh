
#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Navigate to the build output directory
cd dist

# Initialize git and add all files
git init
git add -A
git commit -m 'Deploy to GitHub Pages'

# Push to gh-pages branch
git push -f git@github.com:yourusername/modern-developer-portfolio.git main:gh-pages

cd -

echo "Deployed successfully to GitHub Pages!"
