/*
Bubbling (false,por defecto)
En bubbling el evento del elemento hijo reacciona primero y despues el evento del elemeto padre

capturing(true)
En capturing el elemento padre reacciona primero y despues el elemento hijo
*/

const conetenedor=document.getElementById('contenedor1');
conetenedor.addEventListener('click', (e)=>{
console.log('hicisite click en el contenedor ');
});

const primeraCaja=document.querySelector('.caja');
primeraCaja.addEventListener('click',(e)=>{
console.log('hiciste click en la primera caja ');
});