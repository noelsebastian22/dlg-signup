const target = '45dd6be5-26d7-4a9d-bf3f-67eff8b39cd4.mock.pstmn.io';

const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: `https://${target}`,
    secure: false,
    changeOrigin: true,
  },
];
module.exports = PROXY_CONFIG;
