let tablero = [["X",0,0], [0,"X",0], [0,0,"X"]];
// let tablero = [["X","X","O"], ["O","0","O"], ["X","X","X"]];
// console.log(tablero[0][0])
//Vacio
let estaVacio = (pos) =>{
    if(pos != 0 )return false
    return true;
}
//Esta vacio?
// console.log(estaVacio(tablero[0,0], "X"))"


let marcarCasilla = (pos , jugador)=>{

    try{
        let pos1 = Number( pos[0])
        let pos2 = Number( pos[1])
        console.log("posicion: "+ pos1, pos2)
        tablero[pos1][pos2] = jugador //Nuevo arreglo modificado
        return true;
    }catch(err){
        console.error(err)
    }
   
}
// console.log(marcarCasilla(0,1, "X"))

let esGanador = (jugador) =>{
    function lineaTres (pos1, pos2, pos3){
        if (estaVacio(pos1, jugador) || estaVacio(pos2, jugador) || estaVacio(pos3, jugador))return false
        return true
    }

    if(lineaTres(tablero[0][0], tablero[0][1], tablero[0][2]))return true && console.log("ganador horizontal")
    if(lineaTres(tablero[1][0], tablero[1][1], tablero[1][2]))return true && console.log("ganador horizontal")
    if(lineaTres(tablero[2][0], tablero[2][1], tablero[2][2]))return true && console.log("ganador horizontal")

    if(lineaTres(tablero[0][0], tablero[1][0], tablero[2][0]))return true && console.log("ganador vertical")
    if(lineaTres(tablero[0][1], tablero[1][1], tablero[2][1]))return true && console.log("ganador vertical")
    if(lineaTres(tablero[0][2], tablero[1][2], tablero[2][2]))return true && console.log("ganador vertical")

    if(lineaTres(tablero[0][0], tablero[1][1], tablero[2][2]))return true && console.log("ganador diagonal")
    if(lineaTres(tablero[0][2], tablero[1][1], tablero[2][0]))return true && console.log("ganador diagonal")
}
// esGanador("O")


function celdasVacias (){

    for(let i = 0; i <= tablero[0].length -1; i++){
        for(let j = 0 ; j < 3; j++){
            let nuevo = tablero[i][j]
            
            if(nuevo == 0)return console.log("Celda vacia encontrada") 
        }
    }
    console.log("NO hay celdas vacias")
    
} //Funciona bien

// celdasVacias()

//Pruebas
