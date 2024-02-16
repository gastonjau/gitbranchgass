document.addEventListener('DOMContentLoaded', ()=> {
	
	let tablero = [["","",""], ["","",""], ["","",""]];
	let enJuego = false;
	let jugadorX = false; // true = x  false = 0
	let tipoDeJugador = "O"
	let inicioAlAzar = true; // el inicio puede ser al azar o el usuario elegi que jugador comienza.
	let posSel;
	quienComienza(0);
	nuevojuego();
	let nombreJugadorX = ""
	let nombreJugador0 = ""

	let botonconf = document.getElementById("botonconf")
	botonconf.addEventListener("click", () => {
		nombreJugadorX = document.getElementById("jugador1").value;
		nombreJugador0 = document.getElementById("jugador2").value;
		alert("Nombres Actualizados")
	})

	let botonconf2 = document.getElementById("botonconf2")
	botonconf2.addEventListener("click", () => {
		tablero = [["","",""], ["","",""], ["","",""]];
		img1.style.visibility = "hidden";
		img2.style.visibility = "hidden";
		img3.style.visibility = "hidden";
		img4.style.visibility = "hidden";
		img5.style.visibility = "hidden";
		img6.style.visibility = "hidden";
		img7.style.visibility = "hidden";
		img8.style.visibility = "hidden";
		img9.style.visibility = "hidden";
		img10.style.visibility = "hidden";
		img11.style.visibility = "hidden";
		img12.style.visibility = "hidden";
		img13.style.visibility = "hidden";
		img14.style.visibility = "hidden";
		img15.style.visibility = "hidden";
		img16.style.visibility = "hidden";
		img17.style.visibility = "hidden";
		img18.style.visibility = "hidden";
		alert("Tablero Reseteado")
	})

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

    let img1 = document.getElementById("imagen1")
	let img2 = document.getElementById("imagen2")
	let img3 = document.getElementById("imagen3")
	let img4 = document.getElementById("imagen4")
	let img5 = document.getElementById("imagen5")
	let img6 = document.getElementById("imagen6")
	let img7 = document.getElementById("imagen7")
	let img8 = document.getElementById("imagen8")
	let img9 = document.getElementById("imagen9")
	let img10 = document.getElementById("imagen10")
	let img11 = document.getElementById("imagen11")
	let img12 = document.getElementById("imagen12")
	let img13 = document.getElementById("imagen13")
	let img14 = document.getElementById("imagen14")
	let img15 = document.getElementById("imagen15")
	let img16 = document.getElementById("imagen16")
	let img17 = document.getElementById("imagen17")
	let img18 = document.getElementById("imagen18")



	pos1.addEventListener('click', ()=> {

		if(enJuego){
			if(casillaVacia(posicion['1'])){

				if(tipoDeJugador == "X"){
					img1.style.visibility = "visible";
				}else{
					img2.style.visibility = "visible";
				}
				posSel = posicion['1'];
				nuevoMovimiento(posSel);
				console.log(tablero);

			}
		}
		
	});

	pos2.addEventListener('click', ()=> {

		
		if(enJuego){
			if(casillaVacia(posicion['2'])){
				if(tipoDeJugador == "X"){
					img7.style.visibility = "visible";
				}else{
					img8.style.visibility = "visible";
				}
				posSel = posicion['2'];
				nuevoMovimiento(posSel);
				console.log(tablero);
			}
		}
	});

	pos3.addEventListener('click', ()=> {

		if(enJuego){

			if(casillaVacia(posicion['3'])){
				if(tipoDeJugador == "X"){
					img13.style.visibility = "visible";
				}else{
					img14.style.visibility = "visible";
				}
				posSel = posicion['3'];
				nuevoMovimiento(posSel);
				console.log(tablero);
			}
		}
	});

	pos4.addEventListener('click', ()=> {

		if(enJuego){

			if(casillaVacia(posicion['4'])){
				if(tipoDeJugador == "X"){
					img3.style.visibility = "visible";
				}else{
					img4.style.visibility = "visible";
				}
				posSel = posicion['4'];
				nuevoMovimiento(posSel);
				console.log(tablero);
			}
		}
	});

	pos5.addEventListener('click', ()=> {
		
		if(enJuego){
			if(casillaVacia(posicion['5'])){
				if(tipoDeJugador == "X"){
					img9.style.visibility = "visible";
				}else{
					img10.style.visibility = "visible";
				}
				posSel = posicion['5'];
				nuevoMovimiento(posSel);
				console.log(tablero);
			}
		}
	});

	pos6.addEventListener('click', ()=> {

		if(enJuego){
			if(casillaVacia(posicion['6'])){
				if(tipoDeJugador == "X"){
					img15.style.visibility = "visible";
				}else{
					img16.style.visibility = "visible";
				}
				posSel = posicion['6'];
				nuevoMovimiento(posSel);
				console.log(tablero);
			}
		}
	});

	pos7.addEventListener('click', ()=> {

		if(enJuego){
			if(casillaVacia(posicion['7'])){
				if(tipoDeJugador == "X"){
					img5.style.visibility = "visible";
				}else{
					img6.style.visibility = "visible";
				}
				posSel = posicion['7'];
				nuevoMovimiento(posSel);
				console.log(tablero);
			}
		}
	});

	pos8.addEventListener('click', ()=> {

		if(enJuego){
			if(casillaVacia(posicion['8'])){
				if(tipoDeJugador == "X"){
					img11.style.visibility = "visible";
				}else{
					img12.style.visibility = "visible";
				}
				posSel = posicion['8'];
				nuevoMovimiento(posSel);
				console.log(tablero);
			}
		}
	});

	pos9.addEventListener('click', ()=> {

		if(enJuego){
			if(casillaVacia(posicion['9'])){
				if(tipoDeJugador == "X"){
					img17.style.visibility = "visible";
				}else{
					img18.style.visibility = "visible";
				}
				posSel = posicion['9'];
				nuevoMovimiento(posSel);
				console.log(tablero);
			}
		}
	});


	function nuevojuego(){
		
		//inicializo variables para comenzar el juego
		enJuego = true;
		quienComienza(0);
		tablero = [["","",""], ["","",""], ["","",""]];

	}

	//NUevo movimiento
	function nuevoMovimiento(posSel){

		if(enJuego){

			if (marcarCasilla(posSel, tipoDeJugador)){

				console.log("JUgador::", tipoDeJugador);

				console.log("Celda marcada ok");


				if( esGanador(tipoDeJugador) ){
					enJuego = false

					console.log("aca", tipoDeJugador)
                    mostrarGanador();
					if(tipoDeJugador == "O"){
						alert ("Tengo ganador  "+ nombreJugador0);
					}
					if(tipoDeJugador == "X"){
						alert ("Tengo ganador  "+ nombreJugadorX);
					}

				}else{

					console.log("No tengo ganador");

					if (hayUnaCasillaVacia() ){

						console.log("Tengo celdas libres");
						siguienteJugador()
		
					}else{
						console.log("NO tengo celdas libres");
						enJuego = false
						mostrarFinDelJuego();
					}
				}
				
			}else{
				console.log("Error al marcar la celda o no se marco por otro motivo");
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
			// console.log(resultado);

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
		return tipoDeJugador;

	}


	function mostrarGanador(){
		//mostrar Ganador en pantalla
		let ganador = ""

		if(jugadorX){
			ganador = nombreJugadorX;
		}else{
			ganador = nombreJugador0;
		}

		if(ganador == ""){
			ganador == tipoDeJugador;
		}

		console.log("El Ganador es: ", ganador );
	}


	function mostrarFinDelJuego(){
		console.log("FIN DEL JUEGO # EMPATE #");
	}

	// funciones desde y hacia el almacenamiento 



	////////////////////////////////////////////////////////(Codigo de Gaston)

	// let tablero = [["X","X","O"], ["O","0","O"], ["X","X","X"]];
	// console.log(tablero[0][0])
	//Vacio


	function casillaVacia(pos){

		let pos1 = Number( pos[0] )
		let pos2 = Number( pos[1] )

		// console.log(tablero[pos1][pos2]);

		if(tablero[pos1][pos2] == "" ){
			// console.log("ok");
			return true
		}else{
			// console.log("no");
			return false;
		}
	}

	//Esta vacio?
	// console.log(estaVacio(tablero[0,0], "X"))"


	function marcarCasilla(pos , jugador){

		try{
			let pos1 = Number( pos[0] )
			let pos2 = Number( pos[1] )

			tablero[pos1][pos2] = jugador //Nuevo arreglo modificado
			return true;

		}catch(err){
			console.error(err)
		}
	
	}
	// console.log(marcarCasilla(0,1, "X"))

	function lineaTres (pos1, pos2, pos3, jugadorAct){

		if ( pos1 != jugadorAct || pos2 != jugadorAct || pos3 != jugadorAct ){
				return false;
		}else if(pos1 == jugadorAct && pos2 == jugadorAct && pos3 == jugadorAct){
				return true;
		}
	}


	function esGanador (jugador) {

		let jugadorAct = "";

		if(jugador == "X"){
			jugadorAct = jugador;
		}else if(jugador == "O"){
			jugadorAct = jugador;
		}else{

			console.log("Error: Jugador incorrecto");
		}


		if(lineaTres(tablero[0][0], tablero[0][1], tablero[0][2], jugadorAct )){
            console.log("ganador horizontal jugador: "+ jugador)
            return true
        } 
		if(lineaTres(tablero[1][0], tablero[1][1], tablero[1][2], jugadorAct )){
            console.log("ganador horizontal jugador: "+ jugador)
            return true
        }
        if(lineaTres(tablero[2][0], tablero[2][1], tablero[2][2], jugadorAct )){
            console.log("ganador horizontal jugador: "+ jugador)
            return true
        }

		if(lineaTres(tablero[0][0], tablero[1][0], tablero[2][0], jugadorAct )){
            console.log("ganador vertical jugador: "+ jugador)
            return true
        }
		if(lineaTres(tablero[0][1], tablero[1][1], tablero[2][1], jugadorAct )){
            console.log("ganador vertical jugador: "+ jugador)
            return true
        }
		if(lineaTres(tablero[0][2], tablero[1][2], tablero[2][2], jugadorAct )){
            console.log("ganador vertical jugador: "+ jugador)
            return true
        } 

		if(lineaTres(tablero[0][0], tablero[1][1], tablero[2][2], jugadorAct )){
            console.log("ganador diagonal jugador: "+ jugador)
            return true
        }
		if(lineaTres(tablero[0][2], tablero[1][1], tablero[2][0], jugadorAct )){
            console.log("ganador diagonal jugador: "+ jugador)
            return true
        }

		return false;
	}
	// esGanador("O")


	function hayUnaCasillaVacia(){

		for(let i = 0; i < 3; i++){
			for(let j = 0 ; j < 3; j++){

				// console.log("i", i, "j", j)
				let celda  = tablero[i][j];
				// console.log("celda::", celda)
				
				if( celda  == ""){
					return true;
				}
					
			}
		}

		return false;
		
	} //Funciona bie


});



