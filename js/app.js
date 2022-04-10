//loader
$(window).on("load", function () {
  $(".loader-box").fadeOut(500);
})

//slick
$(document).ready(function () {
    $('.mulitple-items').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: true,
      arrows: false,
      autoplay: true,
      responsive: [
        {
          breakpoint: 820,
          settings:{
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 576,
          settings:{
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      
    });
});
    
//wow
wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       4,          // default
  mobile:       true,       // default
  live:         true,        // default
  delay:      0.5
  
}
)
wow.init();

//waypoint
function onScroll() {
  $("header").removeClass("nav-section-scroll");
  $("header").addClass("nav-section-scroll");
}

var waypoints = $('#about').waypoint({
  handler: function() {
    onScroll();
    $(".nav-link").removeClass("active");
    $("a[href='#about']").addClass('active');
  },
})
var waypoints = $('#services').waypoint({
  handler: function() {
    onScroll();
    $(".nav-link").removeClass("active");
    $("a[href='#services']").addClass('active');
  },
  // offset: 10
})
var waypoints = $('#pricing').waypoint({
  handler: function() {
    onScroll();
    $(".nav-link").removeClass("active");
    $("a[href='#pricing']").addClass('active');
  },
  // offset: "100"
})
var waypoints = $('#contact').waypoint({
  handler: function() {
    onScroll();
    $(".nav-link").removeClass("active");
    $("a[href='#contact']").addClass('active');
  },
  // offset: "100"
})
var waypoints = $('#home').waypoint({
  handler: function() {
    console.log('home');
    $("header").removeClass("nav-section-scroll");
    $(".nav-link").removeClass("active");
    $("a[href='#home']").addClass('active');
  },
  offset: "-20%"
})