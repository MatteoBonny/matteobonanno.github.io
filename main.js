

// var cardWork = document.getElementById("work1");

// cardWork.addEventListener('click', function() {
//     window.location.href = "prova.html";
    
// });



function aggiornaOra() {
    let elementoOra = document.getElementById('ora');
    let dataAttuale = new Date();
    let ora = dataAttuale.getHours();
    let minuti = dataAttuale.getMinutes();
    minuti = minuti < 10 ? '0' + minuti : minuti;
    let oraFormattata = "Bonny IT " + ora + ':' + minuti;
    elementoOra.textContent = oraFormattata;
}
aggiornaOra();
setInterval(aggiornaOra, 60000);






