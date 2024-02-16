
let tablero = [["X","O","X"], ["O","X","O"], ["X","O","X"]];

//** TESTING **

// prueba de inicio aleatorio
function pruebaAzar(cantPruebas){

	for(let i =0; i< cantPruebas ; i++){
		console.log("Prueba: ",i );
		quienComienza(0)
	}

	console.log(`Total de pruabas: ${cantPruebas} - con resultado 1: ${cantUno} - con resultado 2: ${cantDos}- Total de caso procesados: ${cantUno + cantDos} `);
	
}


// pruebaAzar(100);

// Testing del objeto posicion

function pruebaPosiciones(){
	for(let i =1; i < 10; i++){
		console.log(posicion[i]);
	}
}

// pruebaPosiciones()


function hayUnaCasillaVacia(){

	for(let i = 0; i < 3; i++){
		for(let j = 0 ; j < 3; j++){

			console.log("i", i, "j", j)
			let celda  = tablero[i][j];
			console.log("celda::", celda)
			
			if( celda  == ""){
				return true;
			}
				
		}
	}

	return false;
	
} //Funciona bie


let resultado = hayUnaCasillaVacia()
console.log(resultado);