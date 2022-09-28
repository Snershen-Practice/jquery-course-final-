$(document).ready(function () {
  $(".nav-item").click(function (e) {
    e.preventDefault();
    $(".submenu-open").show();
  });
  $(".top-btn").click(function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });
});

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000,
  },
});

lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
  positionFromTop: window.innerHeight / 3,
  disableScrolling: true,
});
