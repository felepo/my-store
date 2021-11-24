const Joi = require('joi');

// Validando el formato que tienen que tener los campos
const id = Joi.string().uuid();
const name =  Joi.string().min(3).max(100);
const price = Joi.number().integer().min(10);
const image = Joi.string().uri();


// Con los schemas se establece si los campos son requeridos o no
const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required()
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  image: image
});

const getProductSchema = Joi.object({
  id: id.required()
});

module.exports = {
  createProductSchema,
  updateProductSchema,
  getProductSchema
};
