echo "Commit Type (local, remote, publish): "
read commitType
if [ $commitType = "local" ]
then
    echo "Enter commit message: "
    read commitMessage
    git stage *
    git commit -m "$commitMessage"
    echo "Committed locally"
    exit
fi
if [ $commitType = "remote" ]
then
    echo "Enter commit message: "
    read commitMessage
    git stage *
    git commit -m "$commitMessage"
    git push origin master
    echo "Committed remotely"
    exit
fi
if [ $commitType = "publish" ]
then
    
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
fi