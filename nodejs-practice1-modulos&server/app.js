// // DATOS COMPLEJOS
// function datosComplejos() {

//     let lista = [ "uno", "dos", "tres" ];

//     let curso = {
//         tema: "NodeJS",
//         leccion: "datos compuestos"
//     };

//     console.log(curso.tema);
// }

// datosComplejos();

// ------------------------------------------------------------------------

// // METODOS DE PSEUDO-CLASES
// let calculo = {
    
//     duplicar: function(valor1) { // funcion anonima
//         return valor1 * 2;
//     },

//     dividir: function(valor1) {
//         return valor1 / 2;
//     }
// }

// console.log( calculo.duplicar(10), calculo.dividir(10) );

// ------------------------------------------------------------------------

// // IMPORTAR MODULO EXTERNO
// // "npm install moment" requerido
// var moment = require('moment'); 
// // importamos la libreria "moment"
// // nos da acceso a todas las funciones y variables de la libreria "moment"
// // require(<nombre de un modulo dentro de "node_modules">)

// console.log( moment('1999-12-31').format('DD/MM/YY').toString() );

// ------------------------------------------------------------------------

// // IMPORTAR MODULO LOCAL/PROPIO
// var miModulo = require('./miModulo');
// // require busca en "node_modules" entonces tengo que especificarle la ruta de mi archivo

// miModulo.dividir(30);

// ------------------------------------------------------------------------

// // MODULOS PRE-INSTALADOS
// // algunos modulos importantes:
// // http, url - archivos externos
// // path, fs - archivos locales

// var util = require('util');
// var http = require('http');
// var prueba = "10";

// console.log( util.isNumber(prueba) ); // false

// ------------------------------------------------------------------------

// CREACION SERVIDOR HTTP (sin express)
var http = require('http'); // importo el modulo "http"

// creo servidor con "http.createServer" 
var server = http.createServer(function(req, res) {
    // req: url ingresada por el usuario, navegador del usuario, hora, ip, etc.
    //      (info de la solicitud que esta haciendo el navegador del user)
    // res: información que desplegaremos dentro del navegador

    res.writeHead( 200, { 'Content-type': 'text/html' } );
    // escribir el encabezado del navegador cuando tengamos la respuesta 200
    // respuesta 200 = documento encontrado exitosamente
    // el encabezado no se va a ver del lado del cliente
    // pero si es importante en el navagador para saber que tipo de documento estamos recibiendo (documento de texto html)
    res.write( "Respuesta: " + req.url );
    // .write = print en el front del navegador
    // req.url = direccion del navegador que esta solicitando acceder en el servidor
    // ejemplo: localhost:3000/PRUEBA (mostrara la info "PRUEBA")

    console.log( "peticion web" ); // se muestra cada vez que un usuario entra al servidor web (puerto 3000)
});

server.listen(3000); // "server" funcionara en el puerto 3000

console.log( "ejecucion servidor NodeJS" ); // se muestra cada vez que se despliega el servidor web (puerto 3000)
































