const argv = require('./config/yargs').argv;
const {crearArchivo, listar} = require('./multiplicar/multiplicar');
const colors = require('colors');


//Recibe un parametro
let comando = argv._[0];

switch(comando){
    case 'listar':
        listar(argv.base, argv.limite)
        .catch( err=> {console.log(err)})
    break;

    case 'crear':
        crearArchivo(argv.base)
        .then(archivo => console.log(`Archivo creado: tabla${argv.base}.txt`))
        .catch( err =>{console.log(err)})
    break;

    default:
    console.log('Comando no reconocido');
}