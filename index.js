const express = require('express');
const faker = require('faker');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola, desde mi primer server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy un nuevo endpoint');
});

app.get('/products', (req, res) => {
  const { size } = req.query;
  const limit = parseInt(size) || 10;
  const products = [];

  Array(limit)
    .fill(0)
    .forEach(() => {
      products.push({
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl()
      });
    });

  res.json(products);
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    id,
    name: 'Product 2',
    price: 2000
  });
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;

  res.json({
    categoryId,
    productId
  });
});

// Enpoint usando Query Params
app.get('/users', (req, res) => {
  // Object.entries(req.query).length !== 0 ? res.send(req.query) : res.send('No hay nada');
  const { limit, offset } = req.query;

  if( limit && offset ) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send('No existen query strings params');
  }
});

app.listen(port, () => {
  console.log('Mi port: ' + port);
});
