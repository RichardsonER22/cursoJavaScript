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

registrarUsuario('caperry', 'caperrygelatinoso@gmail.com',28, 'Loreto');
*/

/*
destructuracion de objetos 
nos permite obtener elementos o propiedades de un arreglo u objeto y guardarlos en una variable
*/

const amigos=['Caperry','maistro','benimaru'];

const[PrimerAmigo,segundoAmigo,TercerAmigo]=amigos
console.log(TercerAmigo);

const persona={
    nombre: 'Caperry',
    edad: 24,
    pais: 'Mongolia'
}
const {nombre, pais}=persona;

console.log(nombre, pais);

const mostrarEdad=(nombre,edad)=>{
console.log(`${nombre} tiene ${edad} anos` )
}
mostrarEdad(persona.nombre, persona.edad);