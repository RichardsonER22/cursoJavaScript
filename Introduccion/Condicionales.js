//estructura de una condicional

//ejemplo 1

//const usuario={
 //   edad: 20,
 //   pais: 'Mexico',
  //  ticket: true,
//};

//if(usuario.edad>=18){
//    console.log('Puedes entrar');
//}
//else{
//    console.log( 'no puedes entrar eres menor de edad');
//}

//ejemplo 2 combinando operadores


//if(usuario.ticket && usuario.edad>=18){
 //   console.log('eres mayor y tienes ticket');
//}

//else{
//    console.log('eres menor o no tienes ticket');
//}

//Ejemplo 3 anidando condicionales


//if (usuario.edad>=18){
    //if(usuario.ticket){
    //    console.log('El usuario es mayor de edad y tiene ticket');
    //}
   // else
  //  {
  //      console.log('el usuario es mayor de edad pero no tiene ticket');
 //   } 
    
//}
//else{
//    console.log('el usuario es menor de edad');
//}

//Ejemplo 4 elseif


const usuario={
    edad: 20,
    pais: 'chile',
    ticket: false,
};


if(usuario.pais==='Mexico'){
    console.log('El usuario es mexicano');
}
else if(usuario.pais==='peru'){
    console.log('El usuario es peruano');
}
else if(usuario.pais==='colombia'){
    console.log('el usuario es de colombiano');
}
else{
    console.log('el usuario es de otro pais');
}
  
