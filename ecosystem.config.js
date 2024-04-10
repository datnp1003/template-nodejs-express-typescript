module.exports = {
    apps: [
        {
            name: 'Template Project NodeJS Express Swagger',
            script: 'dist/index.js',
            instances: '1',
            autorestart: true,
            watch: false,
            max_memory_restart: '1G',
            env: {
                NODE_ENV: 'production',
                PORT: 2011,
            }
        }
    ],
};
