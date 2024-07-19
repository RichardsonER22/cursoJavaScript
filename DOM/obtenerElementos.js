/*
getElementById
Nos permite obtener un elemento en base a su atributo id
*/

//const conetnedor1=document.getElementById('contenedor1');
//console.log(conetnedor1);

/*
children
nos permite obtener los elementos hijo
*/
//console.log(conetnedor1.children);

/*
parentElement
nos permite obtener el elemento padre de un elemento
*/

//console.log(conetnedor1.parentElement);

/*
getElementByTagName
Nos permite obtener una coleccion de elementos en base a ka etiqueta.
Nota: devuelve una coleccion html. una coleccion no es un arreglo
*/

/*
const divs=document.getElementsByTagName('div');
console.log(divs);
console.log(`Tenemos ${divs.length} divs en la pagina`);
*/

/*
getElementByClassName
Nos permite obtener una coleccion de elementos en base a su clase CSS.
Nota: devuelve una coleccion html
*/
/*
const contenedores=document.getElementsByClassName ('contenedor');
console.log(contenedores);
*/

/*
querySelector
Nos devuelve el primer elemento que coincida con un selector estilo css.
Nota devuelve un nodelist
*/

//const caja=document.querySelector('#contenedor1 .caja');
//console.log(caja);

/*
querySelector
Nos permite obtener una coleccion de elementos en base a un selector estilo css.
Nota devuelve un nodelist
*/
/*
const cajas=document.querySelectorAll('#contenedor1 .caja');
console.log(cajas);

cajas.forEach((caja)=>{
    console.log(caja)
})
*/


/*
closest
Nos permite buscar de adentro hacia afuera en busca de un elemento
*/

const ultimaCaja= document.querySelector('#contenedor2 .caja:last-child');
console.log(ultimaCaja);
console.log(ultimaCaja.closest('.contenedor-principal'));

const contenedor2=document.getElementById('contenedor2');
console.log(contenedor2.querySelectorAll('.caja'));