// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/umbraco',
    createProxyMiddleware({
      target: 'http://statistics-staging.viribuzmedia.com',
      changeOrigin: true,
    })
  );
};