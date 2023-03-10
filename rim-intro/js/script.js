document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".js-intro-slider", {
    grabCursor: true,
    autoplay: {
      delay: 6000,
    },
    loop: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-110%", 0, -500],
      },
      next: {
        shadow: true,
        translate: ["110%", 0, -500],
      },
    },
  });
});