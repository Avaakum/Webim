const slider = () => {

  const $ = require('jquery');
  window.$ = window.jQuery = $;
  require('slick-carousel')

  $('.partners__slider').slick({
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 300,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

};

module.exports = slider;
