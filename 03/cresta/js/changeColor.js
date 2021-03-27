$(function () {
  let header = $(".header");
  let concept = $(".concept");
  let offset = concept.offset().top;
  $(window).scroll(function () {
    let scroll = $(this).scrollTop();
    if (scroll > offset) {
      header.addClass("hDark");
    } else {
      header.removeClass('hDark');
    }
  });
});