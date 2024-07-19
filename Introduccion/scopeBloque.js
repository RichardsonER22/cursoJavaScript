/* block scope/ alcance de tipo bloque
-pertenecen las variables declaradas con const o let dentro de un bloque {}
- solo podemos acceder a ellas dentro del bloque
*/

/*const edad=19;
if(edad>=18){
    const permitirAcceso=true;
 
if(true){
    console.log(permitirAcceso);
}

const funcion=()=>{
    console.log(permitirAcceso);
};
funcion();
}
const permitirAcceso='si';
console.log(permitirAcceso);
*/
if(true){
    var nombre='richard';
}
console.log(nombre);