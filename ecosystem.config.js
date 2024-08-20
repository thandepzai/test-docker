module.exports = {
    apps: [
        {
            name: "test docker",
            script: "npx",
            args: "next start",
            watch: false,
            // ignore_watch: ["node_modules"],
            // watch_delay: 1000,
            // watch_options: {
            //     followSymlinks: false
            // },
            wait_ready: true,
            autorestart: true,
            max_memory_restart: "1G",
            env: {
                APP_ENV: "development",
                PORT: 3021
            },
            env_production: {
                APP_ENV: "production",
                PORT: 3040
            },
            env_docker_2: {
                APP_ENV: "docker-2",
                PORT: 3042
            },
            env_docker_3: {
                APP_ENV: "docker-3",
                PORT: 3043
            }
        }
    ]

    // deploy: {
    //     production: {
    //         user: "root",
    //         host: "103.179.190.24",
    //         ref: "origin/master",
    //         repo: "git@github.com:Mapstudy/backend.git",
    //         path: "/home/mapstudy/backend",
    //         "post-deploy": "npm install && pm2 reload ecosystem.config.js --env production"
    //     }
    // }
};
