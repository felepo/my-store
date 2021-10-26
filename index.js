const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

// aplicando middleware json() de express para leer correctamente el body del request
app.use(express.json());

routerApi(app);

app.listen(port, () => {
  console.log('Mi port: ' + port);
});
