//toString()

/*
const numero=10;
console.log(numero,typeof numero);

const texto=numero.toString();
console.log(texto,typeof texto);
*/

//toFixed permite obtener un numero con la cantidad de decimales espacificadas

/*const numero=3.1216
console.log(numero.toFixed(20));
*/

//.parseInt() intenta transfromar un valor a un entero

//const numero1= parseInt(prompt('Escribe un numero '));
//const numero2= parseInt(prompt('Escribe un numero '));
//console.log(numero1+numero2);

//parseFloat() intenta transformar un numero con decimales

/*const numero1= parseFloat(prompt('Escribe un numero'));
const numero2= parseFloat(prompt('Escribe un numero'));
console.log(numero1+numero2);
*/

//Math.random() genera un numero al azar entre 0 y 1

//const numero=Math.random();
//console.log(numero);

//Math.floor() redondea hacia abajo un numero

//console.log(Math.floor('19.99'));

//Math.ceil() redondea hacia arriba un numero

//console.log(Math.ceil('19.99'));

//Math.round() redondea hacia el entro mas cercano

//console.log(Math.round('19.18'));
//console.log(Math.round('19.99'));

//Ejemplo de numero al azar de 0 a 100

const numero=Math.random();
console.log(Math.floor(numero*101));