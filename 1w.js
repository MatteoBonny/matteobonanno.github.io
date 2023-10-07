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
setInterval(aggiornaOra, 60000)

const memoji = document.getElementById('memoji');

window.addEventListener('scroll', () => {
    const scrollValue = window.scrollY;
    memoji.style.transform = `translateY(${scrollValue * 0.3}px)`; 
});