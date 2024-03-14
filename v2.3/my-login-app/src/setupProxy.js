const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/umbraco/Api',
    createProxyMiddleware({
      target: 'http://statistics-staging.viribuzmedia.com',
      changeOrigin: true,
    })
  );
};
