#!/bin/bash

# Prompt user for version type
echo "Enter the type of version update (patch, minor, major): "
read versionType

# Validate input
if [[ "$versionType" != "patch" && "$versionType" != "minor" && "$versionType" != "major" ]]; then
  echo "Invalid version type! Please enter 'patch', 'minor', or 'major'."
  exit 1
fi

# Increment the version in package.json
npm version $versionType

# Stage all changes
git add .

# Commit changes with a message including the new version
version=$(node -p "require('./package.json').version")
git commit -m "Publish version $version"

# Push changes to the repository
git push origin main

# Publish the package to npm
npm publish

echo "Version $version published and changes pushed to GitHub."
