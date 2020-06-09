const { argv } = require("./config/yargs");
const colors = require("colors");
const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");

let comando = argv._[0];

switch (comando) {
  case "listar":
    listarTabla(argv.base, argv.limite);
    break;

  case "crear":
    crearArchivo(argv.base, argv.limite)
      .then((archivo) =>
        console.log("Archivo creado: " + colors.green(archivo))
      )
      .catch((error) => console.log(error));
    break;

  default:
    console.log("Comando no reconocido");
    break;
}

//let argv2 = process.argv;

// console.log(argv.base);
//console.log(argv.limite);
/* let parametro = argv[2];
let base = parametro.split("=")[1];*/
