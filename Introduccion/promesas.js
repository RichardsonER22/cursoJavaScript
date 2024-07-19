const promesa=new Promise((resolve,reject)=>{
    setTimeout(()=>{
const exito=false;
if(exito){
    resolve('La operacion tuvo exito');

} else{
    reject('Lo siento papu, no se encontro Lana rhoades vs mia khalifa');
}

    },4000);
});

promesa.then((mensaje)=>{
alert(mensaje);
});

promesa.catch((mensaje)=>{
    alert(mensaje);

});