import gsap from "https://cdn.skypack.dev/gsap";

const flowers = document.querySelectorAll(".flower-inner");
const petals = document.querySelectorAll(".petals path");

gsap.fromTo(flowers, 
  { opacity: 0 }, 
  { opacity: 1, duration: 3, ease: "power1.inOut" }
);

flowers.forEach((flower, index) => {
  gsap.to(flower, {
    rotation: index % 2 === 0 ? 8 : -8,
    y: "+=6",
    duration: 2.5 + gsap.utils.random(-0.3, 0.3),
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: index * 0.2
  });
});

petals.forEach((petal) => {
  gsap.to(petal, {
    opacity: gsap.utils.random(0.7, 1),
    duration: gsap.utils.random(0.8, 1.5),
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: gsap.utils.random(0, 2)
  });
});
