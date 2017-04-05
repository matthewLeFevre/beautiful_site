window.onload = function () {

  var header = {
    simple: $('.simple-header'),
    top:    $('.top-header'),
  };

  var nav = {
    simple:       $('.simple-nav'),
    simple_img:   $('.n-image'),
    simple_bar:   $('.n-bar'),
    simple_drop:  function () {

      nav.simple_img.click(function () {nav.simple_bar.slideToggle(200); })

    },

    bottom:       $('.bottom-nav'),
    bottom_img:   $('.bn-image'),
    bottom_bar:   $('bn-bar'),
    bottom_drop:  function () {

      nav.bottom_img.click(function (){nav.bottom.slideToggle(200); } )

    },


  };

  nav.simple_drop();
  nav.bottom_drop();
  };





