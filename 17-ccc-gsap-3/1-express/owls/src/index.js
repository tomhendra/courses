import { gsap } from "gsap";

gsap.set("#owls svg", {
  visibility: "visible",
});

document.getElementById("play").onclick = () => tl.play();
document.getElementById("pause").onclick = () => tl.pause();
document.getElementById("reverse").onclick = () => tl.reverse();
document.getElementById("restart").onclick = () => tl.restart();

// ---------------------------- Playground ----------------------------

const tl = gsap.timeline();

tl.from("#title", { opacity: 0, scale: 0, ease: "back" });
tl.from("#button-group", { xPercent: 110, duration: 0.2 });
tl.from("#owls", { autoAlpha: 0 });
tl.from("#owls svg", {
  y: 450,
  ease: "back",
  stagger: {
    each: 0.5,
    from: "edges",
    paused: true,
    repeat: -1,
    yoyo: true,
  },
});
