Consegna:
// 1. chiedi all’utente il cognome
// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

// array con altri cognomi
var list = ['Derossi', 'Totti', 'Amadei', 'Di Bartolomei', 'Pellegrini'];

// chiedi il cognome all'utente e inseriscilo nella lista
var utente = prompt('inserisci il tuo cognome');
utente = utente.charAt(0).toUpperCase() + utente.slice(1).toLowerCase();
list.push(utente);

console.log(list);
console.log(list.sort());

// scrivi la posizione umana della lista in cui il nuovo utente si trova
var ordered_list = list.sort();
console.log(ordered_list.indexOf(utente) + 1);

//scrivo a schermo la lista
for (i = 0; i < list.length; i++) {
    var contenuto_precedente = document.getElementById('list').innerHTML;
    document.getElementById('list').innerHTML = contenuto_precedente + '<li>' + ordered_list[i] + '</li>';
}