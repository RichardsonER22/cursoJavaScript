//estructura de una condicional

//ejemplo 1

//const usuario={
 //   edad: 20,
 //   pais: 'Mexico',
  //  ticket: true,
//};

//if(usuario.edad>=18){
//    console.log('Animo papulince puedes entrar sin pedos xd');
//}
//else{
//    console.log( 'no puedes entrar papulince eres menor de edad');
//}

//ejemplo 2 combinando operadores


//if(usuario.ticket && usuario.edad>=18){
 //   console.log('animo papu eres mayor y tienes ticket');
//}

//else{
//    console.log('nel papu eres menor o no tienes ticket');
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
    console.log('El usuario es paruano xd');
}
else if(usuario.pais==='loreto'){
    console.log('el usuario es de loretillo');
}
else{
    console.log('el usuario es de otro planeta xd');
}
  
