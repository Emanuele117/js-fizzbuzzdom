// scrivi un programma che esegua un ciclo da 1 a 100
let list = document.querySelector('.list');


for (let i = 1; i <= 100; i++) {


    const element = `<li class="box">${i}</li>`




    if (i % 3 == 0 && i % 5 == 0) {
        list.innerHTML += `<li class="box" id="lista1">fizzBuzz</li>`
    } else if (i % 5 == 0) {
        list.innerHTML += `<li class="box" id="lista2">Buzz</li>`
    } else if (i % 3 == 0) {
        list.innerHTML += `<li class="box" id="lista3">Fizz</li>`
    } else {
        list.innerHTML += `<li class="box">${i}</li>`
    }

}





//  ogni interazione appenda un elemento html al container con uno stile differente a seconda del valore dell'indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.

/* i % 3 == 0 */

// se i è divisibile per 3 e 5 
// stampo fizzbuzz

// se è divisibile per 5 
// stampo buzz

// se è divisibile per 3
// stampo fizz

//altrimenti 

// stampo i