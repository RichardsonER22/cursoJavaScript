/*
Expresiones regualres dentro de formularios
podemos usar expresiones regualres para validar los campos de una forma mas precisa
*/

const formulario=document.forms['formulario-donacion'];

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();

    const expresionRegular=/[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

    const datos={
        correo:formulario.correo.value,
    }


    //comprobamos correo
    if(!expresionRegular.test(datos.correo)){
        console.log('correo invalido')
        return;

    }
 console.log(datos);
 console.log('enviando datos ')
})