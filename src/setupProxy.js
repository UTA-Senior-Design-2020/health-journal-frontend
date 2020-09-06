const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target:
        "http://ec2co-ecsel-w7q6c99ot638-2098345273.us-east-1.elb.amazonaws.com:5000/",
      changeOrigin: true,
    })
  );
};
