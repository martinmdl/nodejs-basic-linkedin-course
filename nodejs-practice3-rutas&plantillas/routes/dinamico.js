// RUTA DINAMICA
var express = require('express'); // importo libreria
var router = express.Router(); // importo modulo de express especifico que administra las rutas

/* GET users listing. */
// metodo ".render" -> desplegar plantilla html
router.get('/', function(req, res) {
  res.render( 'dinamico' );
});

// esta funcion hace que la ruta sea dinamica
// puedo tomar los datos en "/datoURL" para adaptar el contenido
// router.get('/:datoURL', function(req, res) {
//   res.send( 'DINAMICO: ' + req.params.datoURL );
// });

router.get('/:datoURL/:id', function(req, res) {
  res.render( 'dinamico', {
    datos: {
      title: req.params.datoURL,
      id: req.params.id
    }
  });
});


module.exports = router;