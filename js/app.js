// console.log('Bootstrap-preventivo')

// dichiaro le variabili per il tipo di lavoro, stabilisco le ore di lavoro, creo un array con i codici promozionali validi:

const backendDev = 20.50
const frontendDev = 15.30
const projAnalysys = 33.60
const tipoLavoroElement = document.getElementById('tipoLavoro')
const oreFisse = 13;
const scontoElement = document.getElementById('code')
const codiciValidi = ['YHDNU32' , 'JANJC63' , 'PWKCN25' , 'SJDPO96', 'POCIE24'];

// inserendo il codice giusto, l'utente avrà diritto ad uno sconto del 25% cioè 0.25:
const percentualeSconto = 0.25

// variabile button
const button = document.getElementById('form-richiesta-preventivo')

// validation form
const forms = document.querySelectorAll('.needs-validation')
  
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        event.preventDefault();
        if (!form.checkValidity()) {
          event.stopPropagation()
        } else {
            calcolaPrezzo();
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  
// creo la funzione per calcolare il prezzo
function calcolaPrezzo() {
   

    const selected = tipoLavoroElement.value
    // console.log("Il tipo di lavoro selezionato dall'utente è: " + selected)
    
    let onorario = 0;
    if (selected === 'backendDev') {
        onorario = backendDev;
    } else if (selected === 'frontendDev') {
        onorario = frontendDev;
    } else if (selected === 'projAnalysys') {
        onorario = projAnalysys;
    } else if (selected === '0') {
        alert('Non hai selezionato un tipo di lavoro valido.')
        // console.log("Non hai selezionato un'opzione valida")
    }
    
    // calcolo prezzo provvisorio senza sconti opzionali:
    const totProvvisorio = oreFisse * onorario;
    // console.log("Il totale provvisorio è: " + totProvvisorio.toFixed(2) + " euro")

    // applico uno codice sconto opzionale tra quelli validi indicati nell'array [codiciValidi]:
    const sconto = scontoElement.value
    const incluso = codiciValidi.includes(sconto)
    // console.log("L'utente ha inserito il codice sconto: " + incluso)
    let prezzoFinale = 0;

    if (incluso) {
        // console.log('Il codice inserito è valido.')
        prezzoFinale = totProvvisorio - totProvvisorio * percentualeSconto   
        // console.log('Il prezzo finale è: ' + parseFloat(prezzoFinale) + ' euro') 
    } else if(sconto ==''){
        prezzoFinale = totProvvisorio 
        // console.log('Il prezzo finale è: ' + parseFloat(prezzoFinale) + ' euro')
    } else {
        alert('Il codice inserito non è valido.')  
        prezzoFinale = totProvvisorio 
        // console.log('Il prezzo finale è: ' + parseFloat(prezzoFinale) + ' euro')
    }
    
    prezzoFinale = prezzoFinale.toFixed(2)
    const stringa = prezzoFinale.toString();
    const numDiviso = stringa.split('.');
    const parteIntera = numDiviso[0];
    const parteDecimale = numDiviso[1];
    const prezzoFormattato = '<b>' + ' &euro; ' + parteIntera + '</b>' + "<span style = 'color:gray;'>" + ',' +  parteDecimale + "</span>";
    document.getElementById('price-formatted').innerHTML = prezzoFormattato
}