/*
-son las variables declaradas fuera de una funcion
- podemos acceder a ellas desde cualquier parte del codigo
- podemos usar const, let y var
*/

var nombre='carlos';
console.log(nombre);

const saludo =()=>{
    console.log('hola '+nombre);
}
nombre='Caperry';
console.log('El nuevo nombres es: '+nombre);

saludo();
