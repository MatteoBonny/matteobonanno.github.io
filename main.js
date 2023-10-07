

// var cardWork = document.getElementById("work1");

// cardWork.addEventListener('click', function() {
//     window.location.href = "1w.html";
    
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



// let img_cv = document.querySelector(".cv");

// window.addEventListener("scroll", function(){
//     let win_pos = window.scrollY;
//     let element_move = img_cv.getBoundingClientRect();
//     // Calcola la trasformazione in base alla distanza dall'alto
//     let translateY =   element_move.top * 0.4;

//     if (win_pos > element_move.top) {
//         img_cv.style.transform = "translateY(" + -1 * translateY + "px)";
//     }
// });




