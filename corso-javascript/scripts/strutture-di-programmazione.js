// Selezione

var x = 7;

if (x < 10) {
    // blocco se vero
}
else {
    // blocco se falso
}

//Iterazione
var i = 0;

while (i < x) {
    // blocco da ripetere
    console.log(i);
    i++;
}

for (var i = 0; i < 10; i++)  {
    console.log(i);
}

var colori=['Rosso', 'Verde', 'Blu'];

for(var i = 0; i < colori.length; i++) {
    console.log(colori[i]);
}

colori.forEach(colore => {
    // Blocco di codice da ripetere
} );

do {
// Blocco da eseguire
} while (i < 10);