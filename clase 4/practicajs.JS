//variables
//Espacio de memoria donde se guarda un dato

//declaracion
let nombre = "valor";

const nombreConst = "valor";

const pi = 3.14;

//tipos de datos

//String

let string = "este es un string";

//number
let numero = 25;

//boolean --> true o false
let hoyLlueve = true;

//null
let valorNulo= null;
 
//Arreglo - array

let arreglo = ["valor", 2, true, null, {} ];

//objetos
let persona= {

    edad: 15,
    nombre: "FRANCO", //esto es un string, una cadena de texto (franco)
    Arreglo: [], 
};

//operadores
let suma = 15 + 15 ; 
let resta = 15 - 15;
let multiplic = 15 * 2;
let division = 9 / 3;
let resto = 9 % 3;

let hola = 'holaa'

alert(resta);

console.log(suma);
console.log("resultado de la suma: " + suma);

//operadores unitarios
//++
//--
let num1 = 1;
num1++;
console.log("resultado de la suma ++ : " + num1);

let num2 = 2;
num2 --;
console.log("resultado de la resta -- : " + num2);

//Operadores relacionales:
let primerNumero = 10;
let SegundoNumero = 15;
let TercerNumero = 20;
let CuartoNumero = 25;

// console.log(
//     "primerNumero:10 segundoNumero 15 -->" + (primerNumero == SegundoNumero) 
// );

console.log("?Los valores son iguales?");
console.log(primerNumero == SegundoNumero);
console.log("?los valores son estrictamente iguales?");
console.log(primerNumero === SegundoNumero); //estrictamente igual (se fija el tipo de dato)
console.log("?los valores son distintos?");
console.log(primerNumero != SegundoNumero); // ese signo es distinto
console.log("los valores son estrictamente distintos?");
console.log(primerNumero !== SegundoNumero); // ese signo es estrictamente distinto (Se fija el tipo de dato)

//cuando tiene doble igual (==) siginifica "estrictamente"

//             10        >       15
console.log(primerNumero > SegundoNumero);
console.log(primerNumero < SegundoNumero);
console.log(primerNumero <= SegundoNumero);

let verdadero = true;
console.log("negacion de verdadero:");
console.log(!verdadero);

let falso = false;
console.log("negacion de falso:");
console.log(!falso);


//tarea
// creamos tres variables: numero1, numero2 , resultado
// mostramos por consola (Console.log(); ) los resultados de la operaciones
// sumamos dos numeros
// restamos dos numerosmultriplicamos dos numeros
// dividimos dos numeros
// comparamos si el numero 1 es mayor o igual que numero 2
// comparamos si el numero 1 es distinto de numero 2


