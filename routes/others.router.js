const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
  res.send('Hola, desde mi primer server en express');
});

router.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy un nuevo endpoint');
});

module.exports = router;
