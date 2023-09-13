//alert()

let nombreIngresado   = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");
let equipoFavorito = prompt("Ingresar equipo favorito");

const GOL_MIN = 1;
const GOL_MAX = 4;
 
let Boca = 0;
let River = 0;
let Racing = 0;
let Independiente = 0;

let partidosBoca = 0;
let partidosRiver = 0;
let partidosRacing= 0;
let partidosIndependiente = 0;
let Partido = 0;

function calcularGol(){
    return Math.ceil(Math.random()*(GOL_MAX - GOL_MIN) + GOL_MIN);
    console.log("Gol" , calcularGol);
}

function siguePartido(){
    return Partido < 2
}



while(siguePartido()){
    Partido +=1;
    let golBoca = calcularGol() 
    let golRiver = calcularGol()
    let golRacing = calcularGol()
    let golIndependiente = calcularGol();
  
    
    console.log("-------------------");
    console.log("------ Partido "+ Partido + "-------");

    console.log("Boca " + golBoca);
    console.log("River " + golRiver);
    console.log("-------------------");
    console.log("Racing " + golRacing);
    console.log("Independiente " + golIndependiente);
    console.log("-------------------");
     
    if(golBoca > golRiver || golBoca === golRiver){
        console.log("Pasan Boca");
        partidosBoca = partidosBoca + 1
    }else if(golBoca < golRiver){
        console.log("Pasa River");
        console.log("Es mi juego asi que pasa Boca y River no");
        partidosBoca = partidosBoca + 1
    }
    
    if(golRacing > golIndependiente || golRacing === golIndependiente){
        console.log("Pasa Racing");
        partidosRacing = partidosRacing + 1
    }else if(golRacing < golIndependiente){
        console.log("Pasa Independiente");
        partidosIndependiente = partidosIndependiente + 1
    }


    console.log("-------------------");
    console.log("--------Cantidad de Partidos-----------");
    console.log("------ Boca "+ partidosBoca + " -------");
    console.log("------ River "+ partidosRiver + " -------");
    console.log("------ Racing "+ partidosRacing + " -------");
    console.log("------ Independiente "+ partidosIndependiente + " -------");
}
console.log("-------------------");
