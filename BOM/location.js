//href- Retorna la URL de la pagina actual
console.log(window.location.href);

//hostname- retorna el host de la pagina actual
console.log(location.hostname);

//pathname- Retorna la ruta y archivo de la pagina actual

console.log(location.pathname);

//protocol- retorna ell protocolo utilizado

console.log(location.protocol);

const cargarDocumento=()=>{
    location.assign('https://google.com');
}

const irAdelante=()=>{
    history.forward();
}