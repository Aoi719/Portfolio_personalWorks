$('.center').not('.slick-initialized').slick({
  centerMode: true,
  centerPadding: '150px',
  slidesToShow: 3,
  autoplay:  true,
  autoplaySpeed: 5000,
  speed: 600,
  arrows: true,
  prevArrow: '<button type="button" class="slick-prev">Previous</button>',
  nextArrow: '<button type="button" class="slick-next">Next</button>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});