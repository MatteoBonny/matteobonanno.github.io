//  Gsap
if (window.innerWidth > 767) {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".creative", {
    x: 0,
    y: 200,
    duration: 2,
    ease: "power2.out",
  });
  gsap.from(".sub", {
    x: 0,
    y: 200,
    duration: 2,
    ease: "power2.out",
  });
  gsap.from("#title", {
    x: 0,
    y: -500,
    duration: 2,
    ease: "power2.out",
  });
  gsap.from("#ipsilon", {
    x: 0,
    y: -500,
    duration: 2,
    ease: "power2.out",
  });




  // function createScrollAnimationFrom(
  //   trigger,
  //   start,
  //   end,
  //   x,
  //   y,
  //   rotate,
  //   dura,
  //   op
  // ) {
  //   const animation = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: trigger,
  //       start: start,
  //       end: end,
  //       markers: false,
  //       scrub: true,
  //     },
  //   });

  //   animation.from(trigger, {
  //     x: x,
  //     y: y,
  //     rotate: rotate,
  //     duration: dura,
  //     opacity: op,
  //     ease: "power2.out",
  //   });
  // }

  // createScrollAnimationFrom("#projects","top 100%","bottom 55%",-2000,0,-180,0.2,-5);
  // createScrollAnimationFrom(".works","top 80%","bottom 50%",1000,0,180,5,-1);

  function createScrollAnimationTo(trigger, start, end, op) {
    const animation = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: start,
        end: end,
        markers: true,
        scrub: true,
      },
    });

    animation.to(trigger, {
      opacity: op,
      ease: "power2.out",
    });
  }

  // createScrollAnimationTo("#title", "top: -50%", "bottom: 100%" ,-0.5);
  // createScrollAnimationTo("#ipsilon",  "top: 0%", "bottom: 0%" ,1);
  createScrollAnimationTo(".prova", "top: 0%", "bottom: -40%", -0.5);
  createScrollAnimationTo("#ipsilon", "top: 0%", "bottom: -100%", -0.5);
  createScrollAnimationTo(".creative", "top: 70%", "bottom: 0%", -0.5);
  createScrollAnimationTo(".sub","top: 70%", "bottom: 0%", -0.5);
} else {
  // Non includere GSAP e/o disabilita le animazioni per la versione mobile
}

// console.log(window.location.pathname);

// if (window.location.pathname === "/" || window.location.pathname === "/index.html") {
//   console.log("Sono nella pagina index.html");
// } else if (window.location.pathname === "/works.html") {
//   console.log("Sono nella pagina works.html");
// }

if (window.location.pathname === "/" || window.location.pathname === "/index.html") {
  
// worksData
  const worksData = [
    {
      text: "Creative Curriculum",
      imgSrc: "img/Works/CreativeCurriculmBonny.png",
      alt: "Creative Curriculum",
    },
    {
      text: "Business Card",
      imgSrc: "img/Works/buisness card.png",
      alt: "Business Card",
    },
    {
      text: "La Bottega di Iaia",
      imgSrc: "img/Works/LaBottega.png",
      alt: "La Bottega di Iaia",
    },
    {
      text: "Villa Reale",
      imgSrc: "img/Works/Villa.png",
      alt: "Villa Reale",
    },
    {
      text: "BSP-Polymers",
      imgSrc: "img/Works/BSP-POLYMERS.png",
      alt: "BSP-Polymers",
    },
  ];


  const worksContainer = document.getElementById("worksContainer");
  worksData.forEach((work) => {
    const workItem = document.createElement("div");
    workItem.classList.add("worksItem");

    workItem.addEventListener("click", () => {
      // Imposta l'URL della pagina "works.html" con un parametro "workIndex" per identificare il lavoro
      window.location.href = `html/works.html`;
    });

    const arrowImage = document.createElement("img");
    arrowImage.classList.add("arrow");
    arrowImage.src = "img/arrow.png";

    const workImage = document.createElement("img");
    workImage.classList.add("imgeffect");
    workImage.src = work.imgSrc;
    workImage.alt = work.alt;
    workImage.style.width = "100px";
    workImage.style.height = "auto";
    workImage.style.marginTop = "3vh";

    workItem.appendChild(arrowImage);
    workItem.appendChild(document.createTextNode(work.text));
    workItem.appendChild(workImage);

    worksContainer.appendChild(workItem);
  });

}


