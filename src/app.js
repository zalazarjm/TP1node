const express = require('express');
const app = express();
const starsRoutes = require('./routes/starsRoutes');

app.use(express.json());

// Rutas para las estrellas
app.use('/stars', starsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
