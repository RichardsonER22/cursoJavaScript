class Usuario{
    constructor(usuario,password){
        this.usuario=usuario;
        this.password=password;

    }
    obtenerPosts(){
        const posts=['posts1','posts2'];
        return posts;
    }
}

class Moderador extends Usuario{
    constructor(usuario,password,permiso){
    super(usuario,password);
    this.permiso=permiso;
    }

    borrarPost(id){
        if(this.permiso.includes('borrar')){
            console.log(`el post con el ${id} ha sido eliminado`);
        }else{
            console.log('no tienes los permisos papulince')
        }
    }
}
const usuario=new Usuario('carlos','123');
//console.log(usuario.obtenerPosts());
//console.log(usuario.permiso)


const moderador= new Moderador('caperry', 'gelatinoso',['borrar','editar'])
console.log(moderador.obtenerPosts());
console.log(moderador,);
moderador.borrarPost(3);