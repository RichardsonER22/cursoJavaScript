const agregarCaja=()=>{
    /*
    1.- creamos el elemento
    createElement- recibe como parametro una cadena de texto con la etiqueta que queremos crear
    */

    const nuevaCaja=document.createElement('div');

    // 2.- Agregamos texto y atributos

    nuevaCaja.innerText='Nueva caja';
    nuevaCaja.setAttribute('id','Nuevo-id');
    nuevaCaja.setAttribute('class', 'caja activa');

    // 3.- agregamos el elemento al dom

    const contenedor=document.getElementById('contenedor1');

    //append.child permite agregar un elemento al final

    //contenedor.appendChild(nuevaCaja);

    /*
    insertAdjacentElement()- Nos permite agregar un elemento
    Valores:
    afterbegin- como primer elemento
    beforebegin- antes del elemento padre
    beforeend- como ultimo elemento
    afterend- despues del elemento padre
    */

    //contenedor.insertAdjacentElement('afterend',nuevaCaja);

    //.replaceWith()- Nos permite reemplazar el elemento por otro
    document.querySelector('#contenedor1 .caja').replaceWith(nuevaCaja);
}