const express = require('express');
const router = express.Router();

const OthersService = require('./../services/others.service');
const service = new OthersService();


router.get('/', (req, res) => {
  const mainContent = service.mainContent();

  res.send(mainContent);
});

router.get('/nueva-ruta', (req, res) => {
  const nuevaRuta = service.newRoute();

  res.send(nuevaRuta);
});

module.exports = router;
