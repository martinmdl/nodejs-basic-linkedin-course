// EXPLICACION APP.JS
var express = require('express');

var app = express();
// metodo constructor de express

// respuesta para todos los verbos HTTP (raiz del dominio)
// verbos http = links/url
// metodo ".all"
app.all( '/', function(req, res) {
  // req = info del navegador q solicita entrar al puerto 3000
  // res = info que mi servidor puede regresarle al navegador
  res.send("hola");
} );

// respuesta para la ruta (route) "dominioRaiz/about"
// metodo ".get" -> mostrar info
app.get( '/about', function(req, res) {
  res.send("acerca");
});

// metodo ".post" -> recibir info en formularios
app.post( '/about', function(req, res) {
  res.send("user envio form");
});

// metodo ".delete" -> remover info
app.delete( '/about', function(req, res) {
  res.send("user envio form");
});

// metodo ".put" -> actualizar info
app.put( '/about', function(req, res) {
  res.send("user envio form");
});

var server = app.listen(3000, function() {});
// mi pc pasa a ser el servidor de los users desde el puerto local 3000
// por cada vez que escuchemos al puerto, vamos a enrrutar el trafico hacia diferentes secciones





