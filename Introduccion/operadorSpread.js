//Operador spread
//permite tomar los elemntos de un arreglo u objeto y expandirlos de un sitio a otro
/*
const frutas=['platano','naranja','manzana'];
const comidaFav=['pizza','hamburguesa',...frutas];
console.log(comidaFav);

const DatosLog={
correo: 'richardsoner@gmail.com',
password: '123'
};

const usuario={
    nombre: 'Richard',
    ...DatosLog,
    edad: 24
};

console.log(usuario);
*/






/*parametro rest
permite que una funcion contenga un numero indefinido de argumentos.
los argumentos extra que encuentre los convertira en un arreglo*/

/*
const registrarUsuario=(nombre, correo,...datosAdicionales)=>{
console.log(nombre, correo,datosAdicionales);
}

registrarUsuario('Ricardo', 'ricardo@gmail.com',28, 'Aguascalientes');
*/

/*
destructuracion de objetos 
nos permite obtener elementos o propiedades de un arreglo u objeto y guardarlos en una variable
*/

const amigos=['Miguel','Jesus','Bruno'];

const[PrimerAmigo,segundoAmigo,TercerAmigo]=amigos
console.log(TercerAmigo);

const persona={
    nombre: 'Miguel',
    edad: 24,
    pais: 'Mexico'
}
const {nombre, pais}=persona;

console.log(nombre, pais);

const mostrarEdad=(nombre,edad)=>{
console.log(`${nombre} tiene ${edad} anos` )
}
mostrarEdad(persona.nombre, persona.edad);