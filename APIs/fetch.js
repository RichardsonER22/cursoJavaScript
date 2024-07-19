const endpoint='https://api.npoint.io/add5ce52e9ab6685df52';
/*
fetch(endpoint).then((respuesta)=>{
console.log('el servidor funciono')
const promesa= respuesta.json();

promesa.then((datos)=>{
console.log(datos.nombre);
})
.catch((error)=>{
console.log(error);
})
})


.catch((error)=>{
console.log(error);
})
*/




//async/await

const obtenerDatos=async()=>{
    const respuesta=await fetch(endpoint);
    const datos=await respuesta.json();

    console.log(datos);
}

obtenerDatos();