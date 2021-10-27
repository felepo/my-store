const express = require('express');
const router = express.Router();

const ProductsService = require('../services/products.service');
const service = new ProductsService();

router.get('/', (req, res) => {
  const products = service.find();

  res.json(products);
});

router.get('/filter', (req, res) => {
  const product = service.findWithFilter();

  res.send(product);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  const product = service.findOne(id);
  res.json(product);
});

router.post('/', (req, res) => {
  const body = req.body;
  const newProduct = service.create(body);

  res.status(201).json({
    message: 'created',
    data: newProduct
  });
});

// segun la convencion, con patch se envia data de forma parcial para actualizar un producto
router.patch('/:id', (req, res) => {
  const {id} = req.params;
  const body = req.body;

  const product = service.update(id, body);

  res.json({
    message: 'updated',
    data: product
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
  const { id } = req.params;

  const productId = service.delete(id);

  res.json({
    message: 'deleted',
    productId
  });
});

module.exports = router;
