const usuario={
    nombre:'Pablo',
    edad: 24,
    amigos: ['Omar','Fernanda','Jorge'],
    saludo:()=>{
        console.log('hola ');
    }
};
//metodos propios 
//los objetos pueden tener metodos propios
usuario.saludo();

/*object.keys()
nos devuelve un arreglo con las llaves del objeto
*/
//const resultado=Object.keys(usuario);


/*object.values
nos devuelve un arreglo con los valores de un objeto*/

//const resultados=Object.values(usuario)
//console.log(resultados);

/*object.entries()
nos devuelve un arreglo de las pareja de valores dentro del objeto*/

const resultado=Object.entries(usuario)
console.log(resultado);
console.log(`el objeto tiene ${resultado.length} propiedades`)