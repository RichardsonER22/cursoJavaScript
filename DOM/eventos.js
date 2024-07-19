const boton1=document.getElementById('boton1');
const primeraCaja=document.querySelector('.caja')
boton1.addEventListener('click' ,(e)=>{
       primeraCaja.classList.toggle('activa');
});

/* agregando evento a multiples elementos

podemos agregar el evento a multiples elementos recorroiendolos mediante un ciclo
Nota: Esta no es la forma mas optima.
*/

const cajas=document.querySelectorAll('.caja');
cajas.forEach((caja)=>{
    caja.addEventListener('click',(e)=>{

        console.log(`haz hecho click en la caja ${e.target.innerHTML}`);
    })
})