var numeriRandomBombe=[];

//creo un ciclo che mi restituisca 16 numeri random tra 1 e 100
for (var i=1; i<=16;i++){
    var numero = Math.floor(Math.random()*100)+1;
    var check = numeriRandomBombe.includes(numero);
    if(check === false) {
        numeriRandomBombe.push(numero);
      }  else {
        while(check === true){
            numero = Math.floor(Math.random()*100)+1;
          check = numeriRandomBombe.includes(numero);
            if(check === false){
                numeriRandomBombe.push(numero);
            }
          }
    // se il numero NON è  prensente nella array numeriRandomBome allora lo inserisco
    // numeriRandomBombe.push(numero);
    
}
console.log(numeriRandomBombe);
};