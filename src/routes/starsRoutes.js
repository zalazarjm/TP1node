const express = require('express');
const router = express.Router();
const Joi = require('joi');

const validateStar = (star) => {
  const schema = Joi.object({
    id: Joi.number().integer().required(),
    name: Joi.string().required(),
    // Agrega más validaciones para los demás campos según tu necesidad
  });

  return schema.validate(star);
};

// Controlador para GET /stars
router.get('/', (req, res) => {
  // Aquí puedes recuperar todas las estrellas y aplicar cualquier filtro si es necesario
  res.json({ message: 'Recuperar todas las estrellas' });
});

// Controlador para POST /stars
router.post('/', (req, res) => {
  const { error } = validateStar(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  // Aquí puedes crear una nueva estrella
  res.json({ message: 'Crear una nueva estrella' });
});

// Controlador para GET /stars/:id
router.get('/:id', (req, res) => {
  const starId = req.params.id;
  // Aquí puedes recuperar una estrella específica por su ID
  res.json({ message: `Recuperar estrella con ID ${starId}` });
});

module.exports = router;
