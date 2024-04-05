console.log('Bootstrap-preventivo')

// dichiaro le variabili per il tipo di lavoro e :
const backendDev = 20.50
const frontendDev = 15.30
const projAnalysys = 33.60
const tipoLavoroElement = document.getElementById('tipoLavoro')

// stabisco un numero di ore fisse:
const oreFisse = 13;

// dichiaro la variabile per il codice promozionale opzionale e un array di codici validi grazie al quale avrà diritto ad uno sconto del 25% cioè 0.25:
const scontoElement = document.getElementById('code')
const codiciValidi = ['YHDNU32' , 'JANJC63' , 'PWKCN25' , 'SJDPO96', 'POCIE24'];
const percentualeSconto = 0.25

// form:
const form = document.getElementById('form-richiesta-preventivo')


// creo una funzione per individuare l'elemento selezionato nella select e calcolarmi il prezzo provvisorio senza sconti:

form.addEventListener('submit', function calcolaPrezzo(e) {
    e.preventDefault();

    // per prendermi la option nella select:
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
    } else  if (selected === 'Seleziona il tipo di lavoro') {
        console.log("Non hai selezionato un'opzione valida")
    }
    
    // calcolo prezzo provvisorio senza sconti opzionali:
    const totProvvisorio = oreFisse * onorario;
    console.log("Il totale provvisorio è: " + totProvvisorio.toFixed(2) + " euro")

    // applico uno codice sconto opzionale tra quelli validi indicati nell'array [codiciValidi]:
    const sconto = scontoElement.value
    const incluso = codiciValidi.includes(sconto)
    console.log("L'utente ha inserito il codice sconto: " + incluso)

    let prezzoFinale = 0;
    if (incluso) {
        console.log('Il codice inserito è valido.')

        prezzoFinale = totProvvisorio - totProvvisorio * percentualeSconto
        prezzoFinale = prezzoFinale.toFixed(2)
        console.log('Il prezzo finale è: ' + parseFloat(prezzoFinale) + ' euro')

    } else {
        console.log('Il codice inserito non è valido.')

        prezzoFinale = totProvvisorio
        prezzoFinale = prezzoFinale.toFixed(2)
        console.log('Il prezzo finale è: ' + parseFloat(prezzoFinale) + ' euro')
    }
    

    const stringa = prezzoFinale.toString();
    const numDiviso = stringa.split('.');
    const parteIntera = numDiviso[0];
    const parteDecimale = numDiviso[1];
    const prezzoFormattato = '<b>' + ' &euro; ' + parteIntera + '</b>' + "<span style = 'color:gray;'>" + ',' +  parteDecimale + "</span>";

    console.log(prezzoFormattato)

    document.getElementById('price-formatted').innerHTML = prezzoFormattato

})









