const express = require('express');
const router = express.Router();

// === importar conexión ===
const bd = require('../conexion/conexion');


// ==============================================================
// === url productos | página productos | views/productos.ejs ===
// ==============================================================
router.get('/', function(req, res, next) {

    bd.query("SELECT * FROM productos", function(err, resultados) {
        console.log(resultados);
        // muestra la vista "prodcutos" | y se le pasa el parámetro "title"
        res.render('productos', { title: 'Nuestros productos', Libros: resultados});
    });
    
});

module.exports = router;
