# # Build
rm -rf dist &&
npx tsc &&
vite build --config main.config.js &&
vite build --config content.config.js &&

# Fix /dist
mkdir dist &&
cp public/* dist &&
cp main_dist/assets/*.js dist/main.js &&
cp content_dist/assets/*.js dist/content.js &&
rm -rf main_dist content_dist
# gfind -type f -name main* -exec mv {} ../main.js \; &&
# gfind -type f -name content* -exec mv {} ../content.js \; &&
