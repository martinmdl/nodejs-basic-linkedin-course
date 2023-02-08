var fs = require('fs');

// ------------------------------------------------------------------------

// ++LECTURA SINCRONICA
var contenido = fs.readFileSync('./archivos/texto.txt', 'utf8');
console.log(contenido);

// ------------------------------------------------------------------------

// ++LECTURA ASINCRONICA
var contenido = fs.readFile('./archivos/texto.txt', 'utf8', function(error, datos) {
  console.log(datos);
});
console.log(contenido);

// ------------------------------------------------------------------------

// ++INFORMAR ERRORES
fs.readFile('./archivos/texto.txyyy', 'utf8', (err, data) => {
  if(err) {
    console.log("error de lectura");
    throw err;
  } else {
    console.log(data);
  }
});

// ------------------------------------------------------------------------

// ++MOSTRAR CONTENIDO DE UNA CARPETA
fs.readdir('./archivos', { withFileTypes:true }, (err, items) => {
    console.log(items);
}); // withFileTypes:true --> solo enumera archivos, no carpetas

// ------------------------------------------------------------------------

// ++SOBRESCRIBIR O CREAR ARCHIVO
fs.writeFile('./archivos/t1.txt', 'nuevos datos Node', (err) => {
    if(err) {
        console.log('Error al escribir el archivo');
    } else {
        console.log('Escritura exitosa');
    }
});

// ------------------------------------------------------------------------

// ++ESCRIBIR AL FINAL DEL ARCHIVO
fs.appendFile('./archivos/t1.txt', ' - agregado Node', (err) => {
    if(err) {
        console.log('Error al escribir el archivo');
    } else {
        console.log('Escritura exitosa');
    }
});

// ------------------------------------------------------------------------

// ++COPIAR UN ARCHIVO EN UNA CARPETA EXISTENTE
fs.copyFile('./archivos/original.txt', './copia.txt', (err) => {
    if(err) {
        console.log('Copiado fallo');
        throw err;
    } else {
        console.log('Copiado exitosamente');
    }
});

// ------------------------------------------------------------------------

// ++ELIMINAR ARCHIVO
fs.unlink('./archivos/test/eliminar.js', (err) => {
    if(err) {
    console.log('Eliminado fallo');
    throw err;
    } else {
        console.log('Eliminado exitosamente');
    }
});

// ------------------------------------------------------------------------

// ++ENCADENAR PROCESOS ASINCRONICOS
fs.copyFile('archivos/original.txt', 'otrosArchivos/original.txt', (err) => {
    if(err) {
        throw err;
    } else {
        console.log('Copiado exitosamente');
        fs.writeFile('archivos/confirmacion.txt', 'archivo copiado exitosamente', (err) => {
            if(err) {
                throw err;
            } else {
                console.log('Confirmacion creada');
            }
        });
    }
});

// ------------------------------------------------------------------------

// ++ENCADENAR PROCESOS ASINCRONICOS USANDO FUNCIONES
function copiarArchivo(rutaOriginal, nuevaRuta, archivoParaCopiar) {

    fs.copyFile(rutaOriginal + '/' + archivoParaCopiar, nuevaRuta + '/' + archivoParaCopiar, (err) => {
        if(err) {
            console.log("ERROR 1");
        } else {
            eliminarArchivo(rutaOriginal, archivoParaCopiar);
        }
    });
}

function eliminarArchivo(rutaOriginal, archivoParaCopiar) {
    fs.unlink(rutaOriginal + '/' + archivoParaCopiar, (err) => {
        if(err) {
            console.log("ERROR 2");
        } else {
            console.log("PROCESO EXITOSO");            
        }
    });
}

copiarArchivo('archivos', 'otrosArchivos', 'funciones.txt');



































