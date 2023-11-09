// Tramite la funzione math random generiamo un numero da 1 a 6 (faremo il calcolo randmath *5 e il risultato+1)
// Creeremo due variabili che al suo interno conterranno la funzione math random

const numUtente = Math.floor(Math.random() * 6) + 1;

console.log('giocatore N =', numUtente);

const numComputer = Math.floor(Math.random() * 6) + 1;

console.log('computer N =', numComputer);

// Tramite più codizioni verifichiamo chi ha vinto

// Se il numero dell''utente e maggiore del computer stamperemRo ha vinto il giocatore
if (numUtente > numComputer) {
  console.log('Ha vinto il giocatore');
}

// Altrimenti se il numero dell'utente e minore del computer stamperemo ha vinto il computer
else if (numUtente < numComputer) {
  console.log('Ha vinto il computer');
}

// Altrimenti stamperemo la partita e finita in pareggio
else {
  console.log('Pareggio');
}
