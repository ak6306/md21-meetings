const proxy = require("http-proxy-middleware");

module.exports = app => {
  app.use(proxy("/meets/*", { target: "http://localhost:5000/" }));
};