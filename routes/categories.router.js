const express = require('express');
const router = express.Router();

const CategoriesService = require('./../services/categories.service');
const service = new CategoriesService();

router.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;

  const categories = service.find({categoryId, productId});

  res.json({
    categories
  });
});

module.exports = router;
