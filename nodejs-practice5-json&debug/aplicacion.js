// ++IMPORTAR .JSON ESTATICO
var libro = require('./archivos/libros.json');
console.log(libro.autor);

// ++LEER .JSON ESTATICO
var fs = require('fs'); // acceso a los archivos del servidor
fs.readFile('./archivos/libros.json', (err, data) => {
    if(err) {
        console.log('ERROR');
    } else {
        console.log(data); // Buffer -> archivo binario sin formato
        console.log(JSON.parse(data).titulo); // archivo formateado/parseado
    }
});































