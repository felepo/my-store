const express = require('express');
const router = express.Router();

const ProductsService = require('../services/products.service');
const service = new ProductsService();

router.get('/', async (req, res) => {
  const products = await service.find();

  res.json(products);
});

router.get('/filter', async (req, res) => {
  const product = await service.findWithFilter();

  res.send(product);
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);

  res.status(201).json({
    message: 'created',
    data: newProduct
  });
});

// segun la convencion, con patch se envia data de forma parcial para actualizar un producto
router.patch('/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const body = req.body;

    const product = await service.update(id, body);

    res.json({
      message: 'updated',
      data: product
    });
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
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

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  const productId = await service.delete(id);

  res.json({
    message: 'deleted',
    productId
  });
});

module.exports = router;
