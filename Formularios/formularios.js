/*
Formularios

tenemos dos formas de acceder a los formularios.
-Mediante el objeto forms
-Mediante metodos del DOM
*/

//console.log(document.forms["formulario-donacion"]['correo'].value);

//const correo=document.querySelector('#formulario-donacion #correo');
//console.log(correo);

document.getElementById('btnEnviar').addEventListener('click',(e)=>{
    e.preventDefault();
    const correo=document.querySelector('#formulario-donacion #correo');
console.log(correo.value);
    
console.log(document.forms["formulario-donacion"]["pais"].value);
const formulario=document.forms['formulario-donacion'];
console.log(formulario['donacion'].value);
console.log (formulario.fecha.value);
console.log(formulario['terminos-y-condiciones'].checked);

})

