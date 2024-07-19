/*
const nombres=['Alondra','Astrid','Benito','Sebastian']

for(let i=0; i<nombres.length; i++){

    if(nombres[i][0] !=='b'){
        console.log('Alto hay un nombre que no empieza por la leta A');
        console.log(nombres[i]+ ' no empieza con la letra b')
        break;
    }
    console.log(nombres[i])
}
*/

const invitados=['Jose', 'Juan','Pedro','Pablo']
console.log('Invitados aceptados');

for(let i=0;i<invitados.length; i++){
    if(invitados[i]==='Jose'){
        continue;
    }
    console.log(invitados[i]);
}
