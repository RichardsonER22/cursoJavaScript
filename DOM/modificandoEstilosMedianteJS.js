//Modificar estilos css mediante "inline styles"

const ultimaCaja=document.querySelector('#contenedor2 .caja:last-child');
ultimaCaja.style.background='#000';
ultimaCaja.style.color='#fff';

const cajas=document.querySelectorAll('.caja');

let tamano=24;

const incrementarFuente=()=>{
    cajas.forEach((cajas)=>{
        tamano++;
        cajas.style.fontSize= `${tamano +1 }px `
    })
}

const disminuirFuente=()=>{
    cajas.forEach((cajas)=>{
        tamano--;
        cajas.style.fontSize= `${tamano +1 }px `
    })
}