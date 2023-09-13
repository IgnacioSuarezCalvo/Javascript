alert('Es un filtro de pj de un juego, si bien uno que lo conoce es facil. Pero el mas adecuado para usar, para los que no lo conoces, es el filtro de precio de uno o dos que separa cuanto sale comprar cada personaje dentro del juego')

let nombre = prompt("Solicitar nombre")
let articulos = prompt("Solicitar articulos")
let precio = prompt("Solicitar precio")
let rango = prompt("Solicitar rango")
let habilidad = prompt("Solicitar habilidad")
let clase = prompt("Solicitar clase")
let origen = prompt("Solicitar origen")
let sinergias = prompt("Solicitar sinergias")


const datosBusqueda = {
    nombre: nombre,
    articulos: articulos,
    precio: precio,
    rango: rango,
    habilidad: habilidad,
    clase: clase,
    origen: origen,
    sinergias: sinergias
}

function mostrarPersonajes(personajes){
    personajes.forEach( personajes => {
        console.log("Nombre del PJ: " + personajes.nombre + "," + " Puede tener " + personajes.articulos + "," + " Coste: " + personajes.precio + " , " + " Rango: " + personajes.rango + " , " + personajes.habilidad + " , " + personajes.origen + " , " + personajes.clase + " , " + " Sus sinergias son: " + personajes.sinergias )
    })
}

function noRsultdos(){
    console.log("No hay Resultados")
}


function filtrarNombre(personajes){
    if(datosBusqueda.nombre){
        return personajes.nombre == datosBusqueda.nombre
    }
    return personajes;
}

function filtrarArticulos(personajes){
    if(datosBusqueda.articulos){
        return personajes.articulos == datosBusqueda.articulos
    }
    return personajes;
}

function filtrarPrecio(personajes){
    if(datosBusqueda.precio){
        return personajes.precio == datosBusqueda.precio
    }
    return personajes;
}

function filtrarRango(personajes){
    if(datosBusqueda.rango){
        return personajes.rango == datosBusqueda.rango
    }
    return personajes;
}

function filtrarHabilidad(personajes){
    if(datosBusqueda.habilidad){
        return personajes.habilidad == datosBusqueda.habilidad
    }
    return personajes;
}

function filtrarOrigen(personajes){
    if(datosBusqueda.origen){
        return personajes.origen == datosBusqueda.origen
    }
    return personajes;
}

function filtrarClase(personajes){
    if(datosBusqueda.clase){
        return personajes.clase == datosBusqueda.clase
    }
    return personajes;
}

function filtrarSinergias(personajes){
    if(datosBusqueda.sinergias){
        return personajes.sinergias == datosBusqueda.sinergias
    }
    return personajes;
}


function filtrarPersonajes(){
    let resultado = personajes.filter(filtrarNombre).filter(filtrarArticulos).filter(filtrarPrecio).filter(filtrarRango).filter(filtrarHabilidad).filter(filtrarOrigen).filter(filtrarClase).filter(filtrarSinergias);
    console.log(resultado.length)
    if(resultado.length){
        mostrarPersonajes(resultado)
    }else {
        noRsultdos()
    }
}


filtrarPersonajes();
//mostrarPersonajes(personajes)