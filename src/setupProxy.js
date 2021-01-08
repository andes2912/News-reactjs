const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/nasional", {
      target: "https://www.news.developeridn.com",
      changeOrigin: true
    })
  );

  app.use(
    createProxyMiddleware("/teknologi", {
      target: "https://www.news.developeridn.com",
      changeOrigin: true
    })
  );
};