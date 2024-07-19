const fetchPost=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const posts=['post1','post2','post3'];
            const error=true;

            if(error){
                reject('Error al intentar obtener los post');
            } else{
                resolve(posts);
            }

        },2000)
    });
};

const mostrarPost= async()=>{
    try {
        const posts=await fetchPost();
        console.log(posts);

    } catch(error){
        console.log(error)
    }
};
mostrarPost();