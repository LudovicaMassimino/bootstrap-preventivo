const backendDev = 20.50
const frontendDev = 15.30
const projAnalysys = 33.60
const tipoLavoroElement = document.getElementById('tipoLavoro')
const oreFisse = 13;
const scontoElement = document.getElementById('code')
const codiciValidi = ['YHDNU32' , 'JANJC63' , 'PWKCN25' , 'SJDPO96', 'POCIE24'];
const percentualeSconto = 0.25
const form = document.getElementById('form-richiesta-preventivo')

form.addEventListener('submit', function calcolaPrezzo(e) {
    e.preventDefault();

    const selected = tipoLavoroElement.value
    
    let onorario = 0;
    if (selected === 'backendDev') {
        onorario = backendDev;
    } else if (selected === 'frontendDev') {
        onorario = frontendDev;
    } else if (selected === 'projAnalysys') {
        onorario = projAnalysys;
    } else  if (selected === '0') {
        console.log("Non hai selezionato un'opzione valida")
    }
    
    const totProvvisorio = oreFisse * onorario;
    const sconto = scontoElement.value
    const incluso = codiciValidi.includes(sconto)
    let prezzoFinale = 0;

    if (incluso) {
        prezzoFinale = totProvvisorio - totProvvisorio * percentualeSconto    
    } else if(sconto ==''){
        prezzoFinale = totProvvisorio 
    } else {
        alert('Il codice inserito non è valido.')  
    }
    
    prezzoFinale = prezzoFinale.toFixed(2)
    const stringa = prezzoFinale.toString();
    const numDiviso = stringa.split('.');
    const parteIntera = numDiviso[0];
    const parteDecimale = numDiviso[1];
    const prezzoFormattato = '<b>' + ' &euro; ' + parteIntera + '</b>' + "<span style = 'color:gray;'>" + ',' +  parteDecimale + "</span>";
    document.getElementById('price-formatted').innerHTML = prezzoFormattato
})