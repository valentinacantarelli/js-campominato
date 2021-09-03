// /Consegna
// Il computer deve generare 16 numeri casuali tra 1 e 100 (bombe).
// I numeri non possono essere duplicati.
// In seguito il giocatore clicca sulle celle numerate (non può cliccare più volte sulla stessa cella)
// La partita termina quando il giocatore clicca su un numero “vietato” o clicca su tutte le celle che non sono delle bombe.
// Al termine della partita il software deve comunicare il punteggio.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50

//funzioni
function creazioneGriglia(num1){
    for (var i=1;i<=num1;i++){
        document.getElementById("campo").innerHTML+=`<div class="caselle">${i}</div>`;
    } 
   }

function inArray(arr, el) {
	var count = 0;
	while ( count < arr.length ) {
		if ( arr[count] == el ) {
			return true;
		}
		count++;
	}
	return false;
}

var livelloBase=100;
creazioneGriglia(livelloBase);

//array che conterrà i numeri random per le caselle in cui ci sono le bombe
var numeriRandomBombe=[];
//creo un ciclo che mi restituisca 16 numeri random tra 1 e 100
for (var i=1; i<=16;i++){
    var numero = Math.floor(Math.random()*100)+1;
    var check = numeriRandomBombe.includes(numero);
    if(check === false) {
        numeriRandomBombe.push(numero);
    }else{
        while(check === true){
            numero = Math.floor(Math.random()*100)+1;
          check = numeriRandomBombe.includes(numero);
            if(check === false){
                numeriRandomBombe.push(numero);
            }
          }
    }
};
console.log(numeriRandomBombe);
//livello gioco
// var livello = document.getElementById("livello-gioco").value;
// var livelloBase=100;
// var livelloMedio=80;
// var livelloAvanzato=50;


// if (livello == "base"){
//     livello=livelloBase;
// }else if(livello == "medio"){
//     livello=livelloMedio;
// }else{
//     livello=livelloAvanzato;
// }
// console.log(livello);
 

  

// // var numeroCelle=parseInt(prompt("Ciao,scegli il numero di celle tra 1 e 100"));
// // // console.log(numeroCelle);

// //  function creazioneGriglia(num1){
// //     for (var i=1;i<=num1;i++){
// //         document.getElementById("campo").innerHTML+=`<div class="caselle">${i}</div>`;
// //     } 
// //    }

// //   creazioneGriglia(numeroCelle);

// // document.getElementById("campo").addEventListener("click",
// //    function(event){
// //        event.target.classList.add("caselle-click");
// //        alert(event.target.innerHTML);
// //    }

// // );