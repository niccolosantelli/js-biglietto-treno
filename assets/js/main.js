alert("Ciao! Calcola il prezzo del tuo biglietto!")
// Numero di km che vuoi percorrere
var kmPercorso = Number(prompt("Quanti km devi percorrere?"));

if (isNaN(kmPercorso)){
  alert("Attenzione! Non hai inserito un numero!")
};

// Quanti anni ha il passeggero?
var anniUtente = Number(prompt("Quanti anni ha il passeggero?"));

if (isNaN(anniUtente)){
  alert("Attenzione! Non hai inserito un numero!")
}

//prezzo biglietto con calcolo sconto
var prezzo = kmPercorso * 0.21;
var scontoMinorenni = (20 * prezzo) / 100;
var scontoAnziani = (40 * prezzo) / 100;
var prezzoMinori = prezzo - scontoMinorenni;
var prezzoAnziani = prezzo - scontoAnziani;


  if (anniUtente < 18) {
   alert( "il prezzo del biglietto applicando lo sconto del 20% è "  + prezzoMinori);

   document.getElementById('prezzoBiglietto').innerHTML = "Buon Viaggio!";

} else if (anniUtente > 65) {
  alert( "il prezzo del biglietto applicando lo sconto del 40% è "  + prezzoAnziani);

  document.getElementById('prezzoBiglietto').innerHTML = "Buon Viaggio!";


} else {
  alert( "il prezzo per te è " + prezzo );

  document.getElementById('prezzoBiglietto').innerHTML = "Buon Viaggio!";
}


if (isNaN(anniUtente)) {
  alert("Attenzione non hai inserito un numero!")
} else {

}
