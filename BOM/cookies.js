const crearCookie=()=>{
    //document.cookie='nombre=rodriguez';
    document.cookie='nombre=rodriguez; expires=1 jan 2023 01:00:00 UTC';
}

const iniciarSesion=()=>{
    const usuario=prompt('Usuario');
    document.cookie=`nombre=${usuario}; expires=1 jan 2023 01:00:00 UTC`;
    alert('Sesion iniciada');
};

console.log(document.cookie);

let usuario;

const cookies=document.cookie.split(';');

cookies.forEach((cookies)=>{
    const propiedad=cookies.split('=')[0];

    if(propiedad==='nombre'){
usuario=cookies.split('=')[1];
    }
});

if(usuario){
    console.log('hola'+ usuario);
} else{
    console.log('Porfavor inicia sesion');
}


const cerrarSesion=()=>{
    document.cookie='nombre=; expires=1 Jan 2022 01:00:00 UTC'
    console.log('Hasta luego');
}