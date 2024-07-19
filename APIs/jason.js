//JASON Javascript Object Notion

/*
Tipos de datos que podemos usar en JSON:
-cadena de texto
- numeros
- objetos (en formato JSON)
- arreglos
-booleanos
- null

Tipos de datos que no podemos usar en jSON:
- funciones
- objetos de fecha
- undefined
*/

const datos=`{
    "id": 1,
    "nombre": "Elias",
    "suscripor_activo": true,

    "posts":[
        {
            "id":1,
            "titulo": "titulo del primer post",
            "texto": "texto del primer post"
        },
        {
            "id":2,
            "titulo": "titulo del segundo post",
            "texto": "texto del segundo post"
        }

    ]
}`

/*
parse()
le pasamos una cadena de texto con formato json y nos devuelve objeto de javascript
*/
//console.log(JSON.parse(datos));


/*
stringify()
Nos permite pasarle un objeto de javascript y nos devuelve una cadena de texto
con objeto en formato json
*/

const usuario={
    nombre: 'Rodriguez',
    correo: 'correo@correo.com',
    coloresFav:['rojo','negro','azul']
}


console.log(JSON.stringify(usuario));