// $('.multiple-items').slick({
//   infinite: true,
//   slidesToShow: 4,
//   slidesToScroll: 4,
//   prevArrow: $('.l'),
//   nextArrow: $('.r')
// });

let sliders = [
  {
    "s": "proj__slider",
    "l": "l-p",
    "r": "r-p"
  },
  {
    "s": "exp__slider",
    "l": "l-e",
    "r": "r-e"
  },
  {
    "s": "workf__slider",
    "l": "l-w",
    "r": "r-w"
  },
  {
    "s": "com__slider",
    "l": "l-c",
    "r": "r-c"
  }
]

$.each(sliders, function() {
  $('#' + this.s).slick({
     infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: $('.' + this.l),
    nextArrow: $('.' + this.r),
      responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
  console.log(this.s);
});