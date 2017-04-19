window.onload = function () {

  var header = {
    simple: $('.simple-header'),
    top:    $('.top-header'),
  };

  var nav = {
    simple:       $('.n-simple'),
    simple_img:   $('.n-image'),
    simple_bar:   $('.n-bar'),
    simple_drop:  function () {

      nav.simple_img.click(function () {nav.simple_bar.slideToggle(200); })

    },

    bottom:       $('.n-bottom'),
    bottom_img:   $('.bn-image'),
    bottom_bar:   $('bn-bar'),
    bottom_drop:  function () {

      nav.bottom_img.click(function (){nav.bottom.slideToggle(200); } )

    },

  };

  var carousel = {
    c: $('#c'),
    ch: $('#ch'),
    imgs: ['https://static.pexels.com/photos/63596/fruit-pepper-vegetable-vegetables-63596.jpeg', 'https://static.pexels.com/photos/238140/pexels-photo-238140.jpeg', 'https://static.pexels.com/photos/40120/pexels-photo-40120.jpeg', 'https://static.pexels.com/photos/59523/pexels-photo-59523.jpeg'],
    text: ['build your place on the web', 'find joy in your surroundings', 'discover things you never knew', 'Make friends along the way'],
    nextimg: 0,
    doSlideshow: function () {
      if(carousel.nextimg >= carousel.imgs.length){carousel.nextimg = 0};
        carousel.ch.html(carousel.text[carousel.nextimg])
      carousel.c
        .css('background-image', 'url("'+carousel.imgs[carousel.nextimg++]+'")')
        .fadeIn(1000, function(){
          setTimeout(carousel.doSlideshow, 4000);
      })
    }
  };


  carousel.doSlideshow();
  nav.simple_drop();
  nav.bottom_drop();
  };





