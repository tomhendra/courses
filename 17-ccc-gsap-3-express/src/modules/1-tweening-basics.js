import { gsap } from "gsap";

gsap.set("#owl-blue", {
  visibility: "visible",
});

gsap.fromTo(
  "#owl-blue",
  { x: 400, y: 200, scale: 2 },
  { x: 200, y: 300, scale: 1, duration: 3, repeat: -1, yoyo: true }
);

gsap.set("#owl-orange", {
  visibility: "visible",
});

gsap.fromTo(
  "#owl-orange",
  { x: 600, y: 600, scale: 2 },
  { x: 800, y: 300, scale: 1, duration: 3, repeat: 3, yoyo: true }
);
