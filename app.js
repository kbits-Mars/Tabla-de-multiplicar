const { error } = require("console");
const colors = require("colors");
const {CalcularMultiplicacion} = require("./helpers/Multiplicacion.js");
const argv = require("./config/yargs");


console.clear();

/* const [, , base='numero=5']= process.argv;
const [ ,numero=9]= base.split("=");

console.log(numero); */

/* const numero= 8; */

/* console.log(process.argv); */
/* console.log(argv.listar);
console.log(argv); */


/* console.log("La base es :", argv.base) */



 CalcularMultiplicacion(argv.base,argv.listar,argv.hasta).then((resultado)=>{
    console.log(`${resultado} Guardado Correctamente`.bgBlue);

}).catch((error)=>{
    console.log(error);
})
 



