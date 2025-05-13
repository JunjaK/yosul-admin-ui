module.exports = {
  // 배포 대상에 대한 설정
  apps: [
    {
      name: 'yosul-admin',
      port: '4000',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
    },
  ],
};
