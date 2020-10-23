import { gsap } from "gsap";

gsap.set("#owls svg", {
  visibility: "visible",
});

gsap.to("#owls svg", {
  y: -50,
  stagger: {
    each: 0.1,
    from: "edges",
  },
});
