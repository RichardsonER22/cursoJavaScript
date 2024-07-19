const conetenedor=document.getElementById('contenedor1');
conetenedor.addEventListener('click', (e)=>{
console.log('hicisite click en el contenedor');
})

const primeraCaja=document.querySelector('.caja');
primeraCaja.addEventListener('click',(e)=>{
e.stopPropagation();
console.log('hiciste click en la primera caja');
})