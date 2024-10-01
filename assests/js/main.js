// 1 --> Preparazione
// creo una variabile per il messaggio di output per i multipli di 3
let multiples_of_three;

// creo una variabile per il messaggio di output per i multipli di 5
let multiples_of_five;

// creo una variabile message
let message

// 2 --> Raccolta dei dati
// dichiaro le variabili
multiples_of_three = "Fizz";
multiples_of_five = "Buzz";

// 3 --> Elaborazione codice 
// creazione del loop
for (i = 1; i <= 100; i++) {

    // inserimento del conditional block
    // verifico se i numeri sono multipli di 3 e di 5
    if (i % 3 === 0 && i % 5 === 0) { 
        message = `${multiples_of_three} ${multiples_of_five}`

        // verifico se sono multipli di 3
    } else if (i % 3 === 0) {
        message = multiples_of_three

        // verifico se sono multipli di 5
    } else if (i % 5 === 0) {
        message = multiples_of_five

        // altrimenti non sono multipli di nessuno dei due
    } else {
        message = i
    }

    // 4 --> Stampare output
    console.log(message);
}

