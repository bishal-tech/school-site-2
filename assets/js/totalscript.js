$(document).ready(function () {
    $(".teacher-slider").slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: true,
        dots: true,
        speed: 300,
        slidesToScroll: 1,
        pauseOnHover: true,
        centerMode: false,
        centerPadding: "0px",
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              arrows: false,
              centerMode: false,
              centerPadding: "0px",
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 908,
            settings: {
              arrows: false,
              centerMode: false,
              centerPadding: "0px",
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 650,
            settings: {
              arrows: false,
              centerMode: false,
              centerPadding: "0px",
              slidesToShow: 1,
            },
          },
        ],
      });


    $(".review-slider").slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: true,
        dots: true,
        speed: 300,
        slidesToScroll: 1,
        pauseOnHover: true,
        centerMode: false,
        centerPadding: "0px",
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              arrows: false,
              centerMode: false,
              centerPadding: "0px",
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 908,
            settings: {
              arrows: false,
              centerMode: false,
              centerPadding: "0px",
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 650,
            settings: {
              arrows: false,
              centerMode: false,
              centerPadding: "0px",
              slidesToShow: 1,
            },
          },
        ],
      });
    $(".sports-slider").slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: true,
        dots: true,
        speed: 300,
        slidesToScroll: 1,
        pauseOnHover: true,
        centerMode: false,
        centerPadding: "0px",
        slidesToShow: 4,
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              arrows: false,
              centerMode: false,
              centerPadding: "0px",
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 908,
            settings: {
              arrows: false,
              centerMode: false,
              centerPadding: "0px",
              slidesToShow: 2,
            },
          },
        ],
      });
});