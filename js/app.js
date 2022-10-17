// loader 
$(window).on("load", function () {
  $(".loader-div").fadeOut(500);
});

// slick
$('.pricing-carousel').slick({
    infinite: true,
    // mobileFast: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    dots: true,
    arrows: false,
    autoplay: true,
    responsive: [
  {
    breakpoint: 1000,
    settings: {
      slidesToShow: 3,
    }
  },
  {
    breakpoint: 800,
    settings: {
      slidesToShow: 2,
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
    }
  }]
});

// to deal with nav on sm 
$(document).ready(function(){
    $('.navbar-toggler').click(function() {
        $('.header').toggleClass('white-header')
    })
})
$('.nav-link').click(() => {
  //  $('.navbar-toggler').attr('aria-expanded','false');
    $('.navbar-collapse').removeClass('show');
})
// to deal with nav on sm 


//nav on scroll
window.addEventListener("scroll", () => {
    let header = document.querySelector('#header');
    header.classList.toggle('sticky', window.scrollY > 0);
    $('.header').removeClass('white-header')

})

// one page nav 
$(document).ready(function() {
$('.navbar-nav').onePageNav({
    currentClass : 'active',
});
});

//wow js
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();


//animation on scroll
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry);
//     if (entry.isIntersecting) {
//       entry.target.classList.add('animate__slideInLeft');
//     }else {
//       entry.target.classList.remove('animate__slideInLeft')
//     }
//   })
// });

// const hiddenEl = document.querySelectorAll('.element');
// hiddenEl.forEach( (el) => observer.observe(el));