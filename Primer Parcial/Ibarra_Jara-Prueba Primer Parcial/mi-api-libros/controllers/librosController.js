const libros = require('../data/libros.json'); // Base de datos simulada
let idActual = libros.length;

// Controladores
exports.listarLibros = (req, res) => {
    res.json(libros);
};

exports.agregarLibro = (req, res) => {
    const nuevoLibro = { id: ++idActual, ...req.body };
    libros.push(nuevoLibro);
    res.status(201).json(nuevoLibro);
};

exports.obtenerLibro = (req, res) => {
    const libro = libros.find(l => l.id === parseInt(req.params.id));
    if (!libro) return res.status(404).json({ mensaje: 'Libro no encontrado' });
    res.json(libro);
};

exports.actualizarLibro = (req, res) => {
    const libro = libros.find(l => l.id === parseInt(req.params.id));
    if (!libro) return res.status(404).json({ mensaje: 'Libro no encontrado' });

    Object.assign(libro, req.body);
    res.json(libro);
};

exports.eliminarLibro = (req, res) => {
    const index = libros.findIndex(l => l.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ mensaje: 'Libro no encontrado' });

    const libroEliminado = libros.splice(index, 1);
    res.json(libroEliminado);
};
