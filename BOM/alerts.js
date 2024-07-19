// alerta para informar al usuario de algo

//alert('No se encontro el archivo');

/* ventana de confirmacion
una ventana donde el usuario puede aceptar o cancelar.
retorna verdadero o falso dependiendo de la respuesta del usuario
*/
/*
const ingresar=()=>{
    const accesoPermitido=confirm('eres mayor de edad');
    if(accesoPermitido){
        alert('Bienvenido')

    }else{
        alert('denunciado ')
    }
}
*/

/*
ventana con input
una ventana donde el usuario puede introducir un valor
retorna una cadena de texto con la respuesta del usuario
*/

const saludar=()=>{
    const nombre=prompt('Escribe tu nombre');
    alert(`bienvenido ${nombre}`);
};