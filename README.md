This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Ubuntu + Nginx + PM2 Deployment
1. Server prep (one-time)

# Node via nvm (recommended)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install 20
nvm use 20

# PM2 globally
npm install -g pm2

# Nginx + Certbot
sudo apt install -y nginx certbot python3-certbot-nginx
2. Deploy the app

# Clone / rsync your code to the server
sudo mkdir -p /var/www/suburban-construction-next
# rsync or git clone into that directory, then:

cd /var/www/suburban-construction-next
npm install
cp .env.production.example .env.production
nano .env.production          # fill in SMTP credentials

npm run build
3. Start with PM2

pm2 start ecosystem.config.js
pm2 save                      # persist across reboots
pm2 startup                   # follow the printed command to register systemd service
4. Nginx + SSL

# Copy the config
sudo cp nginx.conf /etc/nginx/sites-available/suburbanconstruction.com
sudo ln -s /etc/nginx/sites-available/suburbanconstruction.com /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

# Get SSL cert (fills in the ssl_certificate lines automatically)
sudo certbot --nginx -d suburbanconstruction.com -d www.suburbanconstruction.com
sudo systemctl reload nginx
5. Future deploys

cd /var/www/suburban-construction-next
git pull
npm install
npm run build
pm2 reload suburban-construction   # zero-downtime reload
The ecosystem.config.js uses cluster mode (instances: 'max') so PM2 forks one process per CPU core. The nginx config serves /_next/static/ directly from disk (bypassing Node entirely) with a 1-year immutable cache header — this is the main Lighthouse performance win.
