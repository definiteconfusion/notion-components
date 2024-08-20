#!/bin/bash

# Prompt user for version type
echo "Enter the type of version update (patch, minor, major): "
read versionType

# Validate input
if [[ "$versionType" != "patch" && "$versionType" != "minor" && "$versionType" != "major" ]]; then
  echo "Invalid version type! Please enter 'patch', 'minor', or 'major'."
  exit 1
fi

# Ensure the working directory is clean
if ! git diff-index --quiet HEAD --; then
  echo "Git working directory not clean. Staging and committing all changes..."
  git add .
  git commit -m "Pre-version bump commit"
fi

# Increment the version
npm version $versionType

# Publish the package to npm
npm publish

# Stage all changes
git add .

# Commit changes with a message including the new version
version=$(node -p "require('./package.json').version")
git commit -m "Publish version $version"

# Push changes to the repository
git push origin main

echo "Package published and changes pushed to GitHub."
