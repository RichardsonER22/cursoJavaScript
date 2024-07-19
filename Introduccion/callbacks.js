const obtenerPostsDeUsuario=(usuario,callback)=>{
    console.log(`obteniendo datos de ${usuario}`);

    setTimeout(()=>{
        let posts=['post1','post2','post3'];
        callback(posts);
    },2000);
}

obtenerPostsDeUsuario('Jose',(posts)=>{
console.log(posts);
});