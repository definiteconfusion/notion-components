npx webpack
git stage *
echo "Enter commit message: "
read commitMessage
echo "Version Type (major, minor, patch): "
read versionType
git commit -m "$commitMessage"
git push origin 
echo "Published to GitHub"
npm version $versionType
npm publish