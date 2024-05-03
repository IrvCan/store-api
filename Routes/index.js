const productsRouter = require('./products.router');
const usersRouter = require('./users.router');
const categoriesRouter = require('./categories.router');

function routerApi(app){
  app.use('/users', usersRouter);
  app.use('/products', productsRouter);
  app.use('/category', categoriesRouter);
}

module.exports = routerApi;
