gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline();
tl.from(".content", {
   y: "-40%",
   opacity: 0,
   duration:1,
   ease: Power4.easeOut,
});
tl.from(
   ".stagger1",
   {
      opacity: 0,
      y: -50,
      stagger: 0.3,
      duration: 0.7,
      ease: Power4.easeOut,
   },
   "-=1.5"
);
tl.from(
   ".stagger2",
   {
      opacity: 0,
      x: -50,
      stagger: 0.2,
      duration:0.7,
      ease: Power4.easeOut,
   },
   "-=1.5"
);
tl.from(
   ".hero-design",
   {
      opacity: 0,
      y: 50,
      ease: Power4.easeOut,
      duration: 0.2,
   },
   "-=2"
);
gsap.from(".square-anim", {
   opacity: 0,
   stagger: 0.2,
   scale: 0.1,
   duration: 0.7,
   ease: Back.easeOut.config(1.4),
});
gsap.from(".avatar-transition", {
   scrollTrigger: {
      trigger: ".avatar-transition",
      start: "top bottom",
   },
   y: 60,
   opacity: 0,
   duration: 0.7,
   stagger: 0.3,
});

gsap.from(".transition2", {
   scrollTrigger: {
      trigger: ".transition2",
      start: "bottom bottom",
   },
   y: 60,
   opacity: 0,
   duration: 0.4,
   stagger: 0.3,
});
gsap.from(".transition3", {
   scrollTrigger: {
      trigger: ".transition3",
      start: "top center",
   },
   y: 50,
   opacity: 0,
   duration: 0.4,
   stagger: 0.4,
});

gsap.from(".bye-transition", {
   scrollTrigger: {
      trigger: ".bye-transition",
      start: "top bottom",
   },
   y: 60,
   opacity: 0,
   duration: 0.4,
});
