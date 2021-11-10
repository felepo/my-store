const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

// aplicando middleware json() de express para leer correctamente el body del request
app.use(express.json());

routerApi(app);

// uso de middlewares
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Mi port: ' + port);
});
