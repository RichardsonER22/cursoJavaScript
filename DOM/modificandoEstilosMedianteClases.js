//Modificar css mediante clases

const primeraCaja=document.querySelector('#contenedor1 .caja');
//console.log(primeraCaja);

//classlist.add()- Nos permite agregar clases a un elemento
const agregarClase=()=>{
    primeraCaja.classList.add('activa')
}

//classlist.remove()- Nos permite eliminar clases de un elemento
const eliminarClase=()=>{
    primeraCaja.classList.remove('activa')
}

//classlist.toggle()- Nos permite alternar clases de un elemento
const toggleClase=()=>{
    primeraCaja.classList.toggle('activa')
}


const comprobarClase=()=>{
    if(primeraCaja.classList.contains('activa')){
        console.log('La caja tiene la clase activa');
    }else{
        console.log('La caja no tiene la clase activa');
    }
    console.log('y tiene las siguientes clases');
    primeraCaja.classList.forEach((clase)=>{
        console.log(clase);
    })
}