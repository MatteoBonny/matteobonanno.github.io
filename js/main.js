
if (window.innerWidth > 767) {
  gsap.registerPlugin(ScrollTrigger);


    // const animationProjects = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: ".projects",
    //       start: "top 45%",
    //       end: "bottom 25%",
    //     //   markers: true,
    //       scrub: true,
    //     },
    //   });
      
    // animationProjects.from(".projects", {
    //     x: -1000,
    //     duration: 3,
    //     ease: "power2.out",
    //   });
      
    // const animationWorks = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: ".works",
    //       start: "top 60%",
    //       end: "bottom 25%",
    //       markers: true,
    //       scrub: true,
    //     },
    //   });
      
    //   animationWorks.from(".works", {
    //     x: 1000,
    //     duration: 3,
    //     ease: "power2.out",
    //   });
    
    
    function createScrollAnimationFrom(trigger, start, end, x, y, rotate, dura, op) {
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
      
      createScrollAnimationFrom("#projects", "top 100%", "bottom 55%", -1000, 0, -180, 0.2, -5);
      createScrollAnimationFrom(".works", "top 80%", "bottom 50%", 1000, 0, 180, 5, -1);
      
    
    
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
      createScrollAnimationTo("#ipsilon", "top 44%", "bottom 30%", -350, -220, 0);
      createScrollAnimationTo(".creative", "top 60%", "bottom 30%", 500, -500, 0);
      createScrollAnimationTo(".sub", "top 60%", "bottom 30%", -500, -500, 0);
    
    //   const animation = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: ".sub",
    //       start: "top 60%",
    //       end: "bottom 30%",
    //       markers: false,
    //       scrub: true,
    //     },
    //   });
      
    //   animation.to(".sub", {
    //     x: -500,
    //     y: -500,
    //     opacity: 0, // Imposta l'opacità a 0 all'inizio
    //     ease: "power2.out",
    //   });
    
    


  } else {
    // Non includere GSAP e/o disabilita le animazioni per la versione mobile
  }
  


//   gsap.registerPlugin(ScrollTrigger);

//   // const animationProjects = gsap.timeline({
//   //     scrollTrigger: {
//   //       trigger: ".projects",
//   //       start: "top 45%",
//   //       end: "bottom 25%",
//   //     //   markers: true,
//   //       scrub: true,
//   //     },
//   //   });
    
//   // animationProjects.from(".projects", {
//   //     x: -1000,
//   //     duration: 3,
//   //     ease: "power2.out",
//   //   });
    
//   // const animationWorks = gsap.timeline({
//   //     scrollTrigger: {
//   //       trigger: ".works",
//   //       start: "top 60%",
//   //       end: "bottom 25%",
//   //       markers: true,
//   //       scrub: true,
//   //     },
//   //   });
    
//   //   animationWorks.from(".works", {
//   //     x: 1000,
//   //     duration: 3,
//   //     ease: "power2.out",
//   //   });
  
  
  
  
//   function createScrollAnimationFrom(trigger, start, end, x, y, rotate, dura, op) {
//       const animation = gsap.timeline({
//         scrollTrigger: {
//           trigger: trigger,
//           start: start,
//           end: end,
//           markers: false,
//           scrub: true,
//         },
//       });
    
//       animation.from(trigger, {
//         x: x,
//         y: y,
//         rotate: rotate,
//         duration: dura,
//         opacity: op,
//         ease: "power2.out",
//       });
//     }
    
//     createScrollAnimationFrom("#projects", "top 100%", "bottom 55%", -1000, 0, -180, 0.2, -5);
//     createScrollAnimationFrom(".works", "top 80%", "bottom 50%", 1000, 0, 180, 5, -1);
    
  
  
//     function createScrollAnimationTo(trigger, start, end, x, y, op) {
//       const animation = gsap.timeline({
//         scrollTrigger: {
//           trigger: trigger,
//           start: start,
//           end: end,
//           markers: false,
//           scrub: true,
//         },
//       });
    
//       animation.to(trigger, {
//         x: x,
//         y: y,
//         opacity: op,
//         ease: "power2.out",
//       });
//     }
  
//     createScrollAnimationTo("#title", "top 0%", "bottom 0%", -200, -200, -0.5);
//     createScrollAnimationTo("#ipsilon", "top 44%", "bottom 30%", -350, -220, 0);
//     createScrollAnimationTo(".creative", "top 60%", "bottom 30%", 500, -500, 0);
//     createScrollAnimationTo(".sub", "top 60%", "bottom 30%", -500, -500, 0);
  
//   //   const animation = gsap.timeline({
//   //     scrollTrigger: {
//   //       trigger: ".sub",
//   //       start: "top 60%",
//   //       end: "bottom 30%",
//   //       markers: false,
//   //       scrub: true,
//   //     },
//   //   });
    
//   //   animation.to(".sub", {
//   //     x: -500,
//   //     y: -500,
//   //     opacity: 0, // Imposta l'opacità a 0 all'inizio
//   //     ease: "power2.out",
//   //   });
  
  
  