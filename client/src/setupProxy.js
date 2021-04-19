const proxy = require("http-proxy-middleware");

module.exports = app => {
  app.use(proxy("/meets/*", { target: "http://0.0.0.0:5000/" }));
};