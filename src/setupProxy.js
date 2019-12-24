const proxy = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/graphql',
    proxy({
      target: process.env.REACT_APP_BACKEND_HOST,
    }),
  );
  app.use(
    '/signin',
    proxy({
      target: process.env.REACT_APP_BACKEND_HOST,
    }),
  );
};
