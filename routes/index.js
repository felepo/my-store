const express = require('express');

const productsRouter = require('./products.router');
const usersRouter = require('./users.router');
const categoriesRouter = require('./categories.router');
const othersRouter = require('./others.router');

function routerApi(app) {
  const router =  express.Router();

  // agregando el prefijo /api/v1
  app.use('/api/v1', router);

  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);
  router.use('/', othersRouter);
}

module.exports = routerApi;
