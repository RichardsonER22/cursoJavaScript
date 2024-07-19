const colores=['rojo','verde', 'azul'];

//.length permite conocer la cantidad de elementos de un arreglo
console.log(colores.length);

//.toString() nos permite transformar el arreglo a una cadena de texto

//document.body.innerHTML=colores.toString();

//.join() nos permite transformar un arreglo a una cadena de texto y separar cada elemento

console.log(colores.join('- -'));

//.Sort() nos permite ordenar un arreglo de cadena de texto de forma alfabetica
/*
const letras=['f','d','c','a','b'];
console.log(letras.sort());

const numeros =['5','2','1','9','7'];
console.log(numeros.sort());
*/

//.concat permite juntar dos arreglos en uno solo

const arreglo1=[1,2,3];
const arreglo2=['a','b','c'];
const arreglo3=arreglo1.concat(arreglo2);

console.log(arreglo3);

//.push permite agregar un elemnto al final de un arreglo

colores.push('Amarillo');
console.log(colores);

//.pop permite eliminar el ultimo elemento de un arreglo

colores.pop();
console.log(colores);

//.shift elimina el primer elemnto de un arreglo y recorre los elementos.
const dias=['lunes','martes','miercoles','jueves'];
const diaEliminado=dias.shift();
console.log(diaEliminado);
console.log(dias[0]);

//unshift agrega un nuevo elemento y empuja a los primeros
dias.unshift('Viernes');
console.log(dias);

/*.splice()
nos permite insertar elementos a un arreglo donde le especifiquemos
- 1er parametro- posicion donde queremos comenzar a insertar los elementos.
- 2do parametro- si queremos eliminar elementos del arreglo desde la posicion indicada
- resto de parametros- los elementos a insertar
*/

const amigos=['Blanca', 'Erick', 'Litzy'];
//amigos.splice(1,2,'Rafael', 'Roberto');
console.log(amigos);

const frutas=['sandia','melon','mango','naranja'];
const frutasFav=frutas.slice(1, 3);
console.log(frutasFav);
