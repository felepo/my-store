// Middleware que imprime logs en consola
function logErrors(err, req, res, next) {
  console.log('logsErrors');
  console.error(err);
  next(err);
}

// Middleware que retorna errores de forma personalizada
function errorHandler(err, req, res, next) {
  console.log('errorHandler');
  res.status(500).json({
    message: err.message,
    stack: err.stack
  });
}

// Middleware que maneja los errores disparados por Boom
function boomErrorHandler(err, req, res, next) {
  if(err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }

  next(err);
}

module.exports = { logErrors, errorHandler, boomErrorHandler }
