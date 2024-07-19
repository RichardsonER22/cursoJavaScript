//.length devuelve el numero de caracteres de una cadena de texto

//const texto='Hola caperry el gelatinoso'
//console.log(texto.length)

/*indexOf() .lastIndex()- devuelve el index del primer/ultimo caracter especificado*/
/*const texto='Hola caperry el gelatinoso'
console.log (texto.indexOf('o'));
console.log (texto.lastIndexOf('o'));
*/

/*.slice() devuelve un fragmento de una cadena de texto
1er parametro- index desde donde queremos cortar
2do parametro (opcional)- index hasta donde queremos cortar*/

//const texto='Hola caperry el gelatinoso';
/*const index=texto.indexOf('H');
const lastIndex=texto.lastIndexOf('a')
console.log(texto.slice(index,lastIndex));
*/

/* .replace()- devuelve una cadena de texto en donde reemplaza un valor por otro
1er parametro- el texto que queremos reemplazar
2do parametro-el texto que queremos poner
*/
//const texto='Hola caperry el gelatinoso';
//console.log(texto.replace('caperry', 'capu'));

/* .split()- convierte una cadena de texto en un arreglo
tenemos que especificar donde cortar cada elemento

1er parametro- el caracter que funcionara como separador*/

const texto='Hola caperry el gelatinoso';
console.log (texto.split(' '));

/*.toUppercase(). tolowercase()
devuelve una cadena de texto de puras minusculas/mayusculas*/
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());