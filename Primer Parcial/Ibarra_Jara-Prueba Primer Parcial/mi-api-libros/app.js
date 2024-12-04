const express = require('express');
const bodyParser = require('body-parser');
const librosRoutes = require('./routes/libros'); // Asegúrate de que la ruta sea correcta

const app = express();
const PORT = 3001;

// Middleware para parsear JSON
app.use(bodyParser.json());

// Usar las rutas para libros
app.use('/libros', librosRoutes); // Ruta correcta para los libros

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
