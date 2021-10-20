const express = require('express');

const router = express.Router();

// Enpoint usando Query Params
router.get('/', (req, res) => {
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

module.exports = router;
