module.exports = {
  apps: [
    {
      name: 'suburban-construction',
      script: 'node_modules/.bin/next',
      args: 'start',
      cwd: '/var/www/suburban-construction-next',
      instances: 'max',
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
}
