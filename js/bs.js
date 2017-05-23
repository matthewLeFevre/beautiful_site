//
// - BS JavaScript
//

// Window.onload ensures that all the assets of the browser are loaded before
// executing code in this file.

window.onload = function () {

  // The header object contains the class selector for all of the
  // header styles and types created by BS.

  var header = {
    simple: $('.simple-header'),
    top:    $('.top-header'),
  };

  // Creates an on scroll function for a header element
  var scroll = {
    w: $(window),
    d: $(document),
    h: $('header'),
    l: $(".logo"),
    n: $('.name'),
    na: $('.na'),

    shrink: function () {
      scroll.w.on('scroll touchmove', function () {
        console.log('scroll');
        scroll.na.toggleClass('na-shrink', header.d.scrollTop() > 0);
        scroll.l.toggleClass('l-shrink', header.d.scrollTop() > 0);
        scroll.n.toggleClass('n-shrink', header.d.scrollTop() > 0);
        scroll.h.toggleClass('shrink', header.d.scrollTop() > 0);
      });
    }




    carousel.doSlideshow();
    nav.simple_drop();
    nav.bottom_drop();
    nav.menu_drop();
  };

  /* Similarly to the header object the nav object contains class
  * selectors for navigations present in BS instead of just comming
  * with a single selector for the main element itself other classes
  * are provided to attach to other elements inside of a navigation
  * for more information on bs navigations visit BS wiki.
  */

  var nav = {
    simple:       $('.n-simple'),
    simple_img:   $('.n-image'),
    simple_bar:   $('.n-bar'),
    simple_drop:  function () {

      nav.simple_img.click(function () {nav.simple_bar.slideToggle(200); })

    },

    bottom:       $('.n-bottom'),
    bottom_img:   $('.bn-img'),
    bottom_bar:   $('.bn-bar'),
    bottom_drop:  function () {

      nav.bottom_img.click(function (){nav.bottom.slideToggle(200); })

    },

    menu:         $('.n-menu'),
    menu_btn:     $('.n-menu-btn'),
    menu_bar:     $('.nm-bar'),
    menu_drop:    function () {

      nav.menu_btn.click(function (){nav.menu_bar.slideToggle(500); })

    }

  };

/* Carousel object is used to create an image carousel with css and not
* html this can be very useful however the carousel needs help it does function
* but it is slow in loading the css images which are normally loaded when the
* browser reads the css file
*/
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
