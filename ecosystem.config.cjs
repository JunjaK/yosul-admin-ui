module.exports = {
  // 배포 대상에 대한 설정
  apps: [
    {
      name: 'yosul-admin',
      port: '4000',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
      env_production: {
        NUXT_PUBLIC_HOST: '0.0.0.0',
        NUXT_PUBLIC_PORT: 4000,
        NODE_ENV: 'production',
      },
    },
  ],
};
