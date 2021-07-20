Consegna:
// 1. chiedi all’utente il cognome
// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

// array con altri cognomi
var list = ['Bianchi', 'Rossi', 'Neri', 'Gialli', 'Verdi'];

// chiedi il cognome all'utente e inseriscilo nella lista
var utente = prompt('inserisci il tuo cognome');
list.push(utente);

console.log(list);
console.log(list.sort());

var ordered_list = list.sort();
// scrivi la posizione umana della lista in cui il nuovo utente si trova
console.log(ordered_list.indexOf(utente) + 1);