#!/bin/bash
set -e

REMOTE_USER="root"
REMOTE_HOST="nginx"
REMOTE_DIR="/var/www/suburban-construction-next"
PM2_APP="suburban-construction"
COMMIT_MSG="${1:-site updates}"

echo "==> Committing and pushing..."
git add .
git commit -m "$COMMIT_MSG" || echo "Nothing to commit, continuing..."
git push

echo "==> Deploying to $REMOTE_HOST..."
ssh "$REMOTE_USER@$REMOTE_HOST" "
  set -e
  cd $REMOTE_DIR
  git pull
  npm run build
  pm2 reload $PM2_APP
  echo 'Deploy complete.'
"
