'use strict';

// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?
// Consigli del giorno:
// Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”

// --Creo un ciclo for che parte da i=1 a i<=100 
// --all'interno inserisco delle condizioni dove se il numero è multiplo di 3 quindi i%===3 stampo "Fizz" mentre per i multipli di 5 quindi i%===5 stampo Buzz.
// --invece per i numeri che sono multipli di entrambi invece stampiamo "FizzBuzz".

// for(let i=1; i<=100; i++){
//     if (i%3===0 && i%5===0){
//         console.log('FizzBuzz')
//     } else if (i%5===0){
//         console.log('Buzz');
//     } else if (i%3===0){
//         console.log('Fizz');
//     } else {
//         console.log(i);
//     }
// }


// --BONUS 1 + 2

// Selezioniamo il div
const container = document.getElementById('table');
// Inseriamogli la classe container
container.classList.add('container');

for (let i = 1; i <= 100; i++) {
  // creiamo un box da js
  const box = document.createElement('div');
  // Box dentro al container
  container.append(box);

  if (i % 3 === 0 && i % 5 === 0) {
    // Inseriamo la classe nel box
    box.classList.add('FizzBuzz')
    // Inseriamo dentro al box le scritte
    box.innerHTML = "FizzBuzz";
  } else if (i % 5 === 0) {
    box.classList.add('Buzz');
    box.innerHTML = "Buzz";
  } else if (i % 3 === 0) {
    box.classList.add('Fizz')
    box.innerHTML = "Fizz";
  } else {
    box.classList.add('normale')
    box.innerHTML = i;
  }
}