const usuario={
    nombre:'Gustavo',
    pais:'Mexico',
};

/*if(usuario.pais==='Mexico'){
    console.log('El uasuario es de Mexico');
}
else if(usuario.pais==='Venezuela'){
    console.log('El usuario es de Venezuela');
}
else if (usuario.pais==='Colombia'){
    console.log('El usuario es de Colombia');
}
else{
    console.log('El usuario es de USA');
}
*/

switch(usuario.pais){
    case 'Mexico':
        console.log('El usuario es de México');
        break;
    case 'Venezuela':
        console.log('El usuario es Venezuela');
        break;
    case 'Colombia':
        console.log('El usuario es de Colombia');
    break;

    default:
        console.log('El usuario es de usa')

}