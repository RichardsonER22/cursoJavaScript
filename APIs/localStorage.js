document.getElementById('boton1').addEventListener('click',()=>{
    const nombre=prompt('escribe tu nombre papulince');
    window.localStorage.setItem('usuario',nombre);
})


document.getElementById('boton2').addEventListener('click',()=>{
    window.localStorage.removeItem('usuario');
})


if(window.localStorage.usuario){
    console.log('hola '+ window.localStorage.usuario)
} else{
    console.log('hola desconocido');
}