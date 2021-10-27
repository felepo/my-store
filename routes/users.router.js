const express = require('express');
const router = express.Router();

const UsersService = require('./../services/users.service');
const service = new UsersService();

// Enpoint usando Query Params
router.get('/', (req, res) => {
  // Object.entries(req.query).length !== 0 ? res.send(req.query) : res.send('No hay nada');
  const { limit, offset } = req.query;

  if( limit && offset ) {
    const user = service.find({limit, offset});

    res.json(user);
  } else {
    res.send('No existen query strings params correctos');
  }
});

module.exports = router;
