# Pull code
cd ph-api
git checkout main
git pull origin main
bash ~/.bashrc 
# Build and deploy
npm install
npm run build
# pm2 restart api-prod
