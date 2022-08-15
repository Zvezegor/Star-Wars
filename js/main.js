$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 12,
    nav: true,
    navClass: ["slider__nav--prev", "slider__nav--next"],
    responsive: {
      0: {
        items: 1,
      },
      700: {
        items: 3,
      },
      900: {
        items: 4,
      },
      1200: {
        items: 4,
      },
    },
  });
});
