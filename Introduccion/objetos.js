const personaArreglo=['Benimaru',24,true,true];

const persona={
    Nombre: 'Benimaru',
    Edad: 24,
    correo: 'benimaru14@gmail.com',
    suscripciones:{
        web: true,
        correo: true,
    },
    coloresFavoritos:['Negro','Azul'],
    saludo:function(){
        alert('HOlA PAPULINCE');
    },

};

persona.pais='Loreto'
console.log(persona)
persona.saludo();
//console.log(persona.Nombre);
//console.log(persona.Edad);