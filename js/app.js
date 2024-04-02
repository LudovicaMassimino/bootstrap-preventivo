console.log('Bootstrap-preventivo')

/* 
CONSEGNA: 
Quando l’utente fa click sul bottone submit del form, il sito deve calcolare l’ammontare del preventivo per le ore di lavoro richieste.

Il prezzo finale è dato dal numero di ore X prezzo orario. Supponiamo per semplicità che ogni progetto richieda lo stesso numero di ore di lavoro (es: 10 ore).
Il prezzo orario per una commissione varia in questo modo:
● se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.50€/l’ora
● se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.30€/l’ora
● se la commissione riguarda l’analisi progettuale il prezzo orario è di 33.60€/l’ora

L’utente potrebbe decidere di utilizzare un codice promozionale tra i seguenti: YHDNU32, JANJC63, PWKCN25, SJDPO96, POCIE24.
Se l’utente inserisce un codice promozionale valido, ha diritto ad uno sconto del 25% sul prezzo finale. Se il codice inserito non è valido, il sito deve informare l’utente che il codice non è valido e il prezzo finale viene calcolato senza applicare sconti.

Il risultato del calcolo del prezzo finale deve essere visualizzato con 2 decimali e il simbolo dell’euro. 
*/


// dichiaro le variabili per il tipo di lavoro:
const backendDev = 20.50
const frontendDev = 15.30
const projAnalysys = 33.60
const tipoLavoroElement = document.getElementById('tipoLavoro')

// stabisco un numero di ore fisse:
const oreFisse = 13;

// form:
const form = document.getElementById('form-richiesta-preventivo')
form.addEventListener('submit' , calcolaPrezzoProvvisorio)

// creo una funzione per individuare l'elemento selezionato nella select e calcolarmi il prezzo provvisorio senza sconti:

function calcolaPrezzoProvvisorio(e) {
    e.preventDefault();

    // pre prendermi la option nella select:
    const selected = tipoLavoroElement.value
    console.log("Il tipo di lavoro selezionato dall'utente è: " + selected)
    
    let onorario = 0;
    // condizione SE viene selezionato backend o frontend o project o default:
    if (selected === 'backendDev') {
        onorario = backendDev;
    } else if (selected === 'frontendDev') {
        onorario = frontendDev;
    } else if (selected === 'projAnalysys') {
        onorario = projAnalysys;
    } else  if (selected === "Seleziona il tipo di lavoro") {
        console.log("Non hai selezionato un'opzione valida")
    }
    
    // calcolo prezzo provvisorio senza sconti opzionali:
    const totProvvisorio = oreFisse * onorario;
    console.log("Il totale provvisorio è: " + totProvvisorio + " euro")
}



