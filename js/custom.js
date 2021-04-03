jQuery("#carousel").owlCarousel({
  autoplay: true,
  lazyLoad: true,
  loop: true,
  margin:0,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 6000,
  smartSpeed: 1000,
  nav: false,
  dots:false,
  responsive: {
    0: {
      items: 1
    }
  }
});
jQuery("#carouselicon").owlCarousel({
  autoplay: true,
  lazyLoad: true,
  loop: true,
  margin:0,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 6000,
  smartSpeed: 1000,
  nav: false,
  dots:false,
  responsive: {
    0: {
      items: 4
    }
  }
});
jQuery("#carousel2").owlCarousel({
  items: 1,
  loop: true,
  nav: true,
  autoplay: true,
  autoplayTimeout: 5000,
  smartSpeed: 1000,
  animateOut: 'fadeOut',
       animateIn: 'fadeIn',
       navText: [' <img src="imgs/left-arrow.svg">', '<img src="imgs/right-arrow.svg">'],
});

  $(window).scroll(function () {
if ($(window).scrollTop() >= 1) {
    $('.header').addClass('fixedHeader');
} else {
    $('.header').removeClass('fixedHeader');
}
});

jQuery("#carousel3").owlCarousel({
  autoplay: true,
  lazyLoad: true,
  loop: true,
  margin:15,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 4000,
  smartSpeed: 800,
  nav: true,
  navText: [' <img src="imgs/left-arrow.svg">', '<img src="imgs/right-arrow.svg">'],
  dots:true,
  responsive: {
    0: {
      items: 3
    }
  }
});

  $(window).scroll(function () {
if ($(window).scrollTop() >= 1) {
    $('.header').addClass('fixedHeader');
} else {
    $('.header').removeClass('fixedHeader');
}
});


$('.counter').counterUp({
	delay: 10,
	time: 2000
});
$('.counter').addClass('animated fadeInDownBig');
$('h2').addClass('animated fadeIn');