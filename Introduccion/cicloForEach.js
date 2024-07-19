/* ciclo forEach
es un metodo de los arreglos que podemos usar para recorrer los elementos
*/
/*
const compas=['Astrid','Alondra','Flor'];
compas.forEach((amigo,index)=>{
console.log(`el amigo#${index} es ${amigo}`)});
*/
/*
ciclo forIn
nos permite recorrer las propiedades de un objeto.
*/
/*
const persona={
    nombre: 'Carlos',
    edad: 25,
    correo: 'carlos@gmail.com',
};
for  (propiedad in persona){
    persona[propiedad]= '';
}
console.log(persona);
*/

/*
ciclo for of
nos permite recorrer los valores de un objeto iterable
podemos recorrer: arreglos, cadenas de texto, mapas y listas de nodos 
*/

const etiquetas=document.head.children;
//console.log(etiquetas)

//for(elemento of etiquetas){
//    console.log(elemento)
//};
[...etiquetas].forEach((elemento)=> console.log(elemento));