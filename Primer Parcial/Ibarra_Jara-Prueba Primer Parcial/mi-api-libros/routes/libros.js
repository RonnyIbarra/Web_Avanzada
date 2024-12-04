const express = require('express');
const router = express.Router();

// Simulación de libros
let libros = [
    { "id": 1, "titulo": "El Quijote", "autor": "Miguel de Cervantes", "año": 1605 },
    { "id": 2, "titulo": "Cien años de soledad", "autor": "Gabriel García Márquez", "año": 1967 }
];

// Ruta para listar todos los libros
router.get('/', (req, res) => {
    res.json(libros); 
});

module.exports = router;
