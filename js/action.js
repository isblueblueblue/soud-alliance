$(".event__items").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
  prevArrow:
    "<button type='button' class='slick-prev'><i class='fa-solid fa-chevron-left'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next'><i class='fa-solid fa-chevron-right'></i></button>",
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

AOS.init({
  duration: 800,
  easing: "ease",
  once: true,
  offset: -100,
});

$(function () {
  floatingLabel();
});

//navbar-motion
let header = document.querySelector(".navbar");
let headerHeight = header.offsetHeight;

window.onscroll = function () {
  let windowTop = window.scrollY;
  // 스크롤 세로값이 헤더높이보다 크거나 같으면
  // 헤더에 클래스 'drop'을 추가한다
  if (windowTop >= headerHeight) {
    header.classList.add("drop");
  }
  // 아니면 클래스 'drop'을 제거
  else {
    header.classList.remove("drop");
  }
};

// form-motion
var floatingLabel = function () {
  $(".form-control").on("input", function () {
    var $field = $(this).closest(".form-group");
    if (this.value) {
      $field.addClass("field--not-empty");
    } else {
      $field.removeClass("field--not-empty");
    }
  });
};
