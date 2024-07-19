class Usuario{
    constructor(nombre,correo){
        this.nombre=nombre;
        this.correo=correo;

    }
    static borrarUsuario(id_usuario){
        console.log(`el usuario con ${id_usuario} ha sido eliminado de la base de datos`);
    }
    static registrados=1000;
}

//const usuario=new Usuario('Caperry','caperrygelatinoso@gmail.com');
//(usuario.borrarUsuario(1));
Usuario.borrarUsuario(1);
console.log(Usuario.registrados);