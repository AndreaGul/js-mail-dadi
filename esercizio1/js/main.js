'use strict';
// Dichiaro una variabile che sara definita con un array che al suo interno conterra le email gia registrate

const emailAccettate = [
  'mariorossi@gmail.com',
  'francescoesposito@gmail.com',
  'andreagulino@gmail.com',
];

// tramite un prompt chiedo all'utente di inserire il suo indirizzo email
// per sicurezza trasformo tutti i caratteri in minuscolo
const emailUtente = prompt('inserisci la tua email').toLowerCase();

// tramite un ciclo for e una condizione ad ogni iterazione controllo se la stringa con l'email dell'utente
// è uguale ad una delle mail all'interno dell'array email registrate

for (i = emailAccettate.length - 1; i >= 0; i--) {
  // se il risultato è positivo stamperemo in console accesso effettuato

  if (emailUtente === emailAccettate[i]) {
    console.log('accesso effettuato');

    break;
  } else if ((emailUtente === emailAccettate[i]) === false && i === 0) {
    // altrimenti stamperemo in console accesso negato
    console.log('accesso negato');
  }
}
