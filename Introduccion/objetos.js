const personaArreglo=['Eduardo',24,true,true];

const persona={
    Nombre: 'Eduardo',
    Edad: 24,
    correo: 'Eduardo14@gmail.com',
    suscripciones:{
        web: true,
        correo: true,
    },
    coloresFavoritos:['Negro','Azul'],
    saludo:function(){
        alert('HOlA ');
    },

};

persona.pais='Mexico'
console.log(persona)
persona.saludo();
//console.log(persona.Nombre);
//console.log(persona.Edad);