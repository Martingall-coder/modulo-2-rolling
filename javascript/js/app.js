// console.log("hola mundo en body!");
// console.log(100);

// // es una tecnoligia vieja lo mas probable es que no se utilice, no se usa desde la actulizacion btw 95-2015
// var nombre = "nicolas";

// // aplicamos let cuando el valor de la variable pueda llegar a cambiar en el tiempo, por lo tanto no es constante
// let apellido = "gonzalez";

// // es una constante, sabemos que el valor no va a cambiar, cariable que aplicamos casi siempre.
// const domicilio = "balcarce";

// // ----------------------------------------------------------
// //variable constante:

// const num = 100; // number

// const texte = "texto"; // string
// const texto2 = "texto 2"; // string

// const bool = true; //bolean
// const bool2= false; //boolean

// const nule= null; 

// let indefido = undefined; // undefined

// let valor;


// const objetos = {
//     nombre: "agus"
//     apellido : "valdez"
//     edad: 23;
//  //tanto el nombre, apellido y edad se las identifican como "keys"

// }



// //utilizando esto estariamos pidiendo que identifique en particular el nombre (mejor llamada "key")
// console.log(objetos.nombre);


//    //en el caso que pusieramos:

//    //console.log(objetos.agus)

//    //esto no funcionaria porque no estamos pidiendo que identifique la "key"


// //---------------------------------------------//

// 1- se acalara las constantes y/o variables y sus valores definidos:
const precio = 250;
const iva = precio = 0.21;

//2 - su la logica:
console.log (precio);
console.log(iva);

//3 - el ejercicio en practica:
const precioFinal = precio = iva;

console.log(precioFinal);

const precioSinIva = precioFinal - iva;

console.log(precioSinIva);

const precioConDescuento = precio / 2;

console.log(precioConDescuento);

//--------------------------------------------//

const precio = 300;

//estamos declarando un posibilidad se utliza doble "igual", en caso de utilizar 3 "iguales" al no cumplir con la condicion se va directo al "else"
if(precio == 300){
  console.log('el precio 300');

} else { //es el caso de todo lo que no cumpla con "if"
    console.log('el precio 300 pero en string');
}

//----------------------------------------------//

const precio = 175;

const precioConDescuento = precio / 2;

console.log(precioConDescuento);

const precioSinDecimales = Math.round(precioConDescuento);

console.log(precioSinDecimales)


//---------------------------------------------//

const precio = 300;

//estamos declarando un posibilidad se utliza doble "igual", en caso de utilizar 3 "iguales" al no cumplir con la condicion se va directo al "else"
if(precio == 300){
  console.log('el precio es 300');

//es el caso de todo lo que no cumpla con "if" y tengamos varias condiciones que validar
} else if (precio == 250) { 
    console.log('el precio es 250');
}else if (precio == 200{
    console.log('el precio es 200')
}

//se puuede utilizar esto pero es mala practica

//------------------------------------//

const mes = 2

switch (mes){
    caso 1:
    console.log('enero')
    break;

    case 2:
    console.log('febrero')
    break;

    case 3:
    console.log('marzo')
    break;

    case 4:
    console.log('abril')
    break;

    case 5:
    console.log('mayo')
    break;      
            
    case 6:
    console.log('junio')
    break;
        
    default:
    console.log('no existe tal mes');
    break;

    

}
