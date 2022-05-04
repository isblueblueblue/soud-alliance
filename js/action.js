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
    prevArrow: "<button type='button' class='slick-prev'>Previous</button>",
    nextArrow: "<button type='button' class='slick-next'>Next</button>",
  });
}

function sub() {}
