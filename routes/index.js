const express = require('express');
const router = express.Router();

// ===============================================================
// === url localhost:3000 | página principal | views/index.ejs ===
// ===============================================================
router.get('/', function(req, res, next) {
  // muestra la vista "index" | y se le pasa el parámetro "title"
  res.render('index', { title: 'Página Web dinámica con NodeJS + Express + Bootstrap + MySQL' });
});

// ===========================================================
// === url nosotros | página nosotros | views/nosotros.ejs ===
// ===========================================================
router.get('/nosotros', function(req, res, next) {
  // muestra la vista "nosotros" | y se le pasa el parámetro "title" 
  res.render('nosotros', { title: 'Nosotros somos...'});
});



module.exports = router;
