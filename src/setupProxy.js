const proxy = require('http-proxy-middleware');// node 中间件
module.exports = function(app) {
  app.use(
    '/mobile',
    proxy({
      target: 'https://shopapi.smartisan.com',
      changeOrigin: true,
    })
  );

  app.use(
    '/mobile',
    proxy({
      target: 'https://shopapi.smartisan.com',
      changeOrigin: true,
    })
  );

  // app.use(
  //   '/ajax3',
  //   proxy({
  //     target: 'http://m3.maoyan.com',
  //     changeOrigin: true,
  //   })
  // );
};
