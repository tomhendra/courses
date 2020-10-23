import { gsap } from "gsap";

gsap.set("#owls svg", {
  visibility: "visible",
});

document.getElementById("play").onclick = () => tween.play();
document.getElementById("pause").onclick = () => tween.pause();
document.getElementById("reverse").onclick = () => tween.reverse();
document.getElementById("restart").onclick = () => tween.restart();

// Playground

const tween = gsap.to("#owls svg", {
  y: 350,
  stagger: {
    each: 0.5,
    from: "edges",
    paused: true,
    repeat: -1,
    yoyo: true,
  },
});
