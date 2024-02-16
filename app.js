document.addEventListener('DOMContentLoaded', ()=> {
	
	let tablero = [[0,0,0], [0,0,0], [0,0,0]];
	let enJuego = false;
	let jugadorX = false; // true = x  false = 0
	let tipoDeJugador = "O"
	let inicioAlAzar = true; // el inicio puede ser al azar o el usuario elegi que jugador comienza.
	let posSel;

	let nombreJugadorX = "";
	let nombreJugador0 = "";

	let posicion ={
		1: "00",
		2: "01",
		3: "02",
		4: "10",
		5: "11",
		6: "12",
		7: "20",
		8: "21",
		9: "22"
	}

	const pos1 = document.getElementById("1");
	const pos2 = document.getElementById("2");
	const pos3 = document.getElementById("3");
	const pos4 = document.getElementById("4");
	const pos5 = document.getElementById("5");
	const pos6 = document.getElementById("6");
	const pos7 = document.getElementById("7");
	const pos8 = document.getElementById("8");
	const pos9 = document.getElementById("9");

	pos1.addEventListener('click', ()=> {

		if(estaVacio(posicion['1'])){
			posSel = posicion['1'];
			nuevoMovimiento();
			console.log(posSel);
		}
		
	});

	pos2.addEventListener('click', ()=> {

		if(estaVacio(posicion['2'])){
			posSel = posicion['2'];
			nuevoMovimiento();
			console.log(posSel);
		}
	});

	pos3.addEventListener('click', ()=> {

		if(estaVacio(posicion['3'])){
			posSel = posicion['3'];
			nuevoMovimiento();
			console.log(posSel);
		}
	});

	pos4.addEventListener('click', ()=> {
		posSel = posicion['4'];
		console.log(posSel);
	});

	pos5.addEventListener('click', ()=> {
		posSel = posicion['5'];
		console.log(posSel);
	});

	pos6.addEventListener('click', ()=> {
		posSel = posicion['6'];
		console.log(posSel);
	});

	pos7.addEventListener('click', ()=> {
		posSel = posicion['7'];
		console.log(posSel);
	});

	pos8.addEventListener('click', ()=> {
		posSel = posicion['8'];
		console.log(posSel);
	});

	pos9.addEventListener('click', ()=> {
		posSel = posicion['9'];
		console.log(posSel);
	});


	function marcarPosicion(pos){
		if(estaVacio(posicion[pos])){
			posSel = pos;
			console.log(pos);
		}
	}

	function nuevojuego(){
		
		//inicializo variables para comenzar el juego
		enJuego = true;
		quienComienza(inicio);


	}

	//NUevo movimiento
	function nuevoMovimiento(posSel){

		if (marcarCelda(posSel)){

			if (tengoCeldasVacias()){
				siguienteJugador()
			}else{
				if(!tengoCeldasVacias() && !jugadorGanador()){
					mostrarFinDelJuego();
				}

				if(jugadorGanador()){
					mostrarGanador();
				}
			}
			
		}	

	} 



	function marcarCelda(pos){
		if(estaVacio(posicion[pos])){

			if(marcarCasilla(posicion[pos], tipoDeJugador)){

			}else{
				console.log("Error; no fue posible marcar la casilla seleccionada")
			}
		
		}


	}

	//cambia de un jugador a otro
	function siguienteJugador(){
		jugadorX = !jugadorX;
		if(jugadorX){
			tipoDeJugador = "X"
		}else{
			tipoDeJugador = "O"
		}
	}


	// //variables para el testing
	// let cantUno = 0;
	// let cantDos = 0;

	function quienComienza(inicio){
		//si inicio es = 0 el inicio se decide al azar
		// si el inicio es = 1 inicia el jugador x
		// si el inicio es = 2 inicia el jugador 0

		if(inicio == 0) {
			const resultado = Math.floor(Math.random() * 2) + 1
			console.log(resultado);

			if (resultado == 1){
				// cantUno++;
				jugadorX = true;
				tipoDeJugador = "X";
			}else if(resultado == 2){
				// cantDos++;
				jugadorX = false;
				tipoDeJugador = "O"
			}

		}else if (inicio == 1){
			jugadorX = true;
			tipoDeJugador = "X"
		}else{
			jugadorX = false;
			tipoDeJugador = "O"

		}

	}


	function mostrarGanador(){
		//mostrar Ganador en pantalla
		let ganador = ""
		if(jugadorX){
			ganador = nombreJugadorX;
		}else{
			ganador = nombreJugador0;
		}
		console.log("El Ganador es: ", ganador );
	}

	function mostrarFinDelJuego(){
		console.log("FIN DEL JUEGO # EMPATE #");
	}

	// funciones desde y hacia el almacenamiento 



	function jugadorGanador(){
		if(esGanador(jugadorX)){
			return true;
		}else{
			return false;
		}
	}


	function tengoCeldasVacias(){
		if(celdasVacias()){
			return true;
		}else{
			return false;
		}
	}




	////////////////////////////////////////////////////////(Codigo de Gaston)

	function iniciarTablero(){
		
	}
	
	// let tablero = [["X","X","O"], ["O","0","O"], ["X","X","X"]];
	// console.log(tablero[0][0])
	//Vacio


	let estaVacio = (pos) =>{
		let pos1 = Number( pos[0])
		let pos2 = Number( pos[1])

		console.log(pos1);
		console.log(pos2);

		// console.log(tablero[pos1][pos2]);
		console.log(typeof(tablero[pos1][pos2]));

		if(tablero[pos1][pos2] == 0 ){
			return true
		}else{
			return false;
		}
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


	function celdasVacias(){

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


});
