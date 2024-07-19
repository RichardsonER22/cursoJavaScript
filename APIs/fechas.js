/*
crear un objeto de fecha
para poder trabajar con fechas primero tenemos que crear un objeto de fecha
*/

//fecha actual
const fechaActual=new Date();
//console.log(fechaActual);

const cumple=new Date('1999-03-22T04:33:12');
//console.log(cumple);




//Metodos para trabajar con fechas

console.log(fechaActual.toString());
console.log(fechaActual.toDateString());
console.log(fechaActual.toTimeString());

//Obtener mes

console.log(fechaActual.getMonth());

//obtener dia
console.log(fechaActual.getDate());

//obtener ano

console.log(fechaActual.getFullYear());