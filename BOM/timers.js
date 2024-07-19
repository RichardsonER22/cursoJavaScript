/*
window.setTimeOut()
nos permite ejecutar una funcion despues de cierto tiempo
*/
/*
const saludo=()=>{
 console.log('Hola mundo');
}

setTimeout(saludo,2000);
let id;
const iniciar=()=>{
    console.log('iniciando timer');
    id=setTimeout(saludo,4000);
}

const parar=()=>{
    console.log('parando timer');
    clearTimeout(id);
}
*/

/* setInterval()
permite ejecutar una funcion cada cierto tiempo
*/
let id
const iniciar=()=>{
    let cuenta=0;
   id= setInterval(()=>{
        console.log(cuenta);
        cuenta++
    },3000);
}

const parar=()=>{
    console.log('paramos la cuenta')
    clearInterval(id);
}




