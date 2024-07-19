/*.indexOF()
obtienes el primer index de un elemento
si no hay elementos nos retorna -1*/

const nombres=['Fabian','Maria','Nely','Odalys'];
//console.log(nombres.indexOf('Nely'));

/*.lastIndexof()
obtenemos el ultimo index de un elemento*/

//console.log(nombres.lastIndexOf('Odalys'))

//.forEach() nos permite ejecutar una funcion por cada elemento

//nombres.forEach((nombres, index)=>{
//    console.log(`Hola ${nombres}, ${(index)}`);
//})

//.find() nos permite recorrer un arreglo y devuelve el primer elemento que retornemos
/*
const resultado=nombres.find((nombres)=>{
    if(nombres[0]==='c'){
        return nombres;
    }
  
})
console.log(resultado);
*/

//.map() permite ejecutar una funcion por cada elemento 
//y crear un nuevo arreglo en base a los resultados de la funcion

/*const nombresMayus=nombres.map((nombres)=>{
return nombres.toUpperCase();
});
console.log(nombresMayus);
*/
/*.filter()
nos permite ejecutar una funcion por cada elemento
y luego crear un arreglo en base a los resultados de la funcion*/

/*const nombre4letras= nombres.filter((nombres)=>{
    if(nombres.length===8){
        return nombres;
    }

});
console.log(nombre4letras);
*/

/* .includes()
nos permite saber si el arreglo tiene un elemento especifico
*/

//console.log(nombres.includes('Juan'))

/*.every()
nos permite ejecutar un condicional sobre cada elemento
y nos devuelve true si todos los elementos cumplieron la condicion*/

/*const nombresValidos=nombres.every((nombres)=>{
    if(typeof nombres==='string'){
        return true;
    } else{
        return false;
    }

})
console.log('Todos los elementos son validos papulince? '+nombresValidos);
*/
/*.some()
nos permite ejecutar un condicional sobre cada elemento y 
nos devuelve true si algun elemento cumplio con la condicion*/


const nombresValidos=nombres.some((nombres)=>{
    if(typeof nombres!=='string'){
        return true;
    } else{
        return false;
    }

})
console.log('El arreglo es invalido ? '+nombresValidos);
