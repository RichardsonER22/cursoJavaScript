/*estructura de una clase

    -definicion
    -propiedades: la clase puede contener variables. dentro de una clase se llaman propiedades.
    -constructor: es un metodo especial para inicializar un objeto creado a partir de una clase.
    -metodos: la clase puede contener funciones. dentro de una clase llamada metodos.
*/

class Usuario{
    tipo='Usuario';

    constructor(nombre,apellido){
        this.nombre=nombre;
        this.apellido=apellido;
console.log('Nuevo usuario registrado')
    }
    obtenerNombreCompleto(){
        console.log('obteniendo datos...');
        return `${this.nombre} ${this.apellido}`;
    }
}

const usuario=new Usuario ('pepe', 'chuy');
console.log(usuario.obtenerNombreCompleto());