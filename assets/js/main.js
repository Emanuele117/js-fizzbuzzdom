// scrivi un programma che esegua un ciclo da 1 a 100
let list = document.querySelector('.list')

for (let i = 1; i <= 100; i++) {
    console.log(i);
    const element = `<li class="box">${i}</li>`

    list.innerHTML += element
}
//  ogni interazione appenda un elemento html al container con uno stile differente a seconda del valore dell'indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.

