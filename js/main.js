//  Gsap
if (window.innerWidth > 767) {
  gsap.registerPlugin(ScrollTrigger);

  function createScrollAnimationFrom(
    trigger,
    start,
    end,
    x,
    y,
    rotate,
    dura,
    op
  ) {
    const animation = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: start,
        end: end,
        markers: false,
        scrub: true,
      },
    });

    animation.from(trigger, {
      x: x,
      y: y,
      rotate: rotate,
      duration: dura,
      opacity: op,
      ease: "power2.out",
    });
  }

  createScrollAnimationFrom("#projects","top 100%","bottom 55%",-2000,0,-180,0.2,-5);
  createScrollAnimationFrom(".works","top 80%","bottom 50%",1000,0,180,5,-1);

  function createScrollAnimationTo(trigger, start, end, x, y, op) {
    const animation = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: start,
        end: end,
        markers: false,
        scrub: true,
      },
    });

    animation.to(trigger, {
      x: x,
      y: y,
      opacity: op,
      ease: "power2.out",
    });
  }

  createScrollAnimationTo("#title", "top 0%", "bottom 0%", -200, -200, -0.5);
  createScrollAnimationTo("#ipsilon", "top 44%", "bottom 30%", -350, -150, 0);
  createScrollAnimationTo(".creative", "top 60%", "bottom 30%", 500, -500, 0);
  createScrollAnimationTo(".sub", "top 60%", "bottom 30%", -500, -500, 0);
} else {
  // Non includere GSAP e/o disabilita le animazioni per la versione mobile
}


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
  const workItem = document.createElement("a");
  workItem.classList.add("worksItem");

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
