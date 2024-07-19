/*const saludo=(nombre='hola desconocido')=>{
    console.log(`hola ${nombre}`);
}

saludo('Pepe');
saludo('Roberto');
saludo('Cristian');
saludo();
*/

const operaciones=(tipo,numero1, numero2)=>{
  


if(tipo==='suma'){
    console.log(numero1+numero2);
} else if (tipo==='resta'){
    console.log(numero1-numero2);
}
};


operaciones('suma',200,6)
operaciones('resta',100,50)

