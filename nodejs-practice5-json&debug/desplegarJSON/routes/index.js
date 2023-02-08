var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {

  // "./" -> apunta a la raiz del proyecto
  fs.readFile('./public/json/libros.json', (err, data) => {
    if(err) {
      res.write("ERROR DE LECTURA");
    } else {
      res.render('index', { data: JSON.parse(data) });
    }
  });
});

module.exports = router;
