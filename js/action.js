$(function () {
  common();
  main();
  sub();
});

function common() {}

function main() {
  $(".event__items").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    prevArrow:
      "<button type='button' class='slick-prev'><i class='bx bx-chevron-left'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next'><i class='bx bx-chevron-right' ></i></button>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  });
}

function sub() {}
