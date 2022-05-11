// En este caso vamos a demostrar como utilizamos "let" para completar añadiendo mas informacion:

// hola mi nombre es franco, un gusto.
// let saludo = "hola";       
// let presentacion = saludo + "mi nombre es franco"
// presentacion = presentacion + ", un gusto";

let presentacion = "hoLa mi nombre es franco, uN gusto";
console.log(presentacion.length);

// -----------------------------------

// CONVERTI EN MAYUSCULAS
console.log(presentacion.toUpperCase());
//CONVERTIR EN minisculas
console.log(presentacion.toLowerCase());
// -------------------------------------

let apellido = "casas";
let nombre = "Franco";
console.log("apellido.length: " + apellido.length);


// franco casas
// Template string
//          franco   casas
console.log(nombre + " " + apellido);
console.log(`${nombre} ${apellido}`);


let nombreProd = "coca cola";
let precioProd = "15"

console.log(nombreProd + " $" + precioProd);

// Template es la mejor forma de indicar muchas cosas 👇
console.log(`${nombreProd} $${precioProd}`);


console.log(`${nombre} ${apellido}`);

// -----------------------------------

// OBTENER ULTIMO CARACTER DE UN STRING (CADENA DE TEXTO)
console.log(apellido);

let ultimaPosicionApellido = apellido.length - 1; // 16
let ultimoCaracterApellido = apellido.charAt(ultimaPosicionApellido);
console.log(`ultimo caracter: ${ultimoCaracterApellido}`)
// console.log(`ultimo caracter: ${apellido.charAt(apellido.length - 1)}`);


//------------------------------------------------


//Ejemplo
//el usuario ingresa por la pantalla su apellido
//siempre la primera letra de su apellido debera ser mayuscual
//motrar una alerta con el apellido

let apellidoIngresado = prompt ("ingrese su apellido");
let primeraLetra = apellidoIngresado.charAt(0);
let letraMayuscula = primeraLetra.toUpperCase();

//casas
//C

//Casas
// let aux = apellidoIngresado.substring(1,17);
// let aux = apellidoIngresado.substring(1, apellidoIngresado.length);
let restoDeApellido = apellidoIngresado.substring(1);
const apellidoConPrimeraLetraMayuscula = 
console.log(restoDeApellido);
console.log(apellidoIngresado);
console.log(primeraLetra);

// console.log(primeraLetra);
console.log(`Apellido ingresado: ${apellidoIngresado} --> apellido transformado: ${letraMayuscula} ${restoDeApellido}`)




