cp index.html dist
cd dist/assets
find -type f -name main* -exec mv {} ../main.js \;
find -type f -name content* -exec mv {} ../content.js \;
cd ../..
rm -rf dist/assets
