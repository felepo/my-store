const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
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

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    id,
    name: 'Product 2',
    price: 2000
  });
});

router.post('/', (req, res) => {
  const body = req.body;

  res.json({
    message: 'created',
    data: body
  });
});

// segun la convencion, con patch se envia data de forma parcial para actualizar un producto
router.patch('/:id', (req, res) => {
  const {id} = req.params;
  const body = req.body;

  res.json({
    message: 'update',
    data: body,
    id
  });
});

// segun la convencion, con put se envia todo los campos del objeto que se quiere actualizar
router.put('/:id', (req, res) => {
  const {id} = req.params;
  const body = req.body;

  res.json({
    message: 'update',
    data: body,
    id
  });
});

router.delete('/:id', (req, res) => {
  const {id} = req.params;

  res.json({
    message: 'deleted',
    id
  });
});

module.exports = router;
