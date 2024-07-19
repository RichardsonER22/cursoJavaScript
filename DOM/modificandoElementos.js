/*
elemento.innerHTML
Nos permite cambiar el contenido html de un elemento
*/

const primeraCaja=document.querySelector('.caja');
primeraCaja.innerHTML='Hola papulince'

/*
elemento.attribute
Nos permite acceder y cambiar atributos de un elemento 
*/
primeraCaja.id='nuevo-id';

/*
elemento.setAttribute
Nos permite agregar o establecer el valor de un atributo del elemento
*/

primeraCaja.setAttribute('class','caja activa');
primeraCaja.setAttribute('data-id','456-987-123');


/*
elemento.style.property
Nos permite cambiar los estilos de un elemento
*/


const contenedor2Caja1=document.querySelector('#contenedor2 .caja');
contenedor2Caja1.style.background='#000';
contenedor2Caja1.style.color='#fff';
contenedor2Caja1.style.textTransform='uppercase';