/*
-local scope a variables locales
- Son la variables declaradas dentro de una funcion
- solo podemos acceder a ellas desde dentro de la funcion
*/



var obtenerNumeroLetras=(nombre)=>{
var numero= nombre.length;

console.log(`${nombre} tiene ${numero} letras` );
var funcionAnidada=()=>{
console.log(numero);
}
funcionAnidada();
}
obtenerNumeroLetras('richardson');