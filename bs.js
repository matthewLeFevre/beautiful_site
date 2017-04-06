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

  var carousel = {
    c: $('#c'),
    imgs: ['https://static.pexels.com/photos/63596/fruit-pepper-vegetable-vegetables-63596.jpeg', 'https://static.pexels.com/photos/238140/pexels-photo-238140.jpeg', 'https://static.pexels.com/photos/40120/pexels-photo-40120.jpeg', 'https://static.pexels.com/photos/59523/pexels-photo-59523.jpeg'],
    nextimg: 0,
    doSlideshow: function () {
      if(carousel.nextimg >= carousel.imgs.length){carousel.nextimg = 0};
      carousel.c
        .css('background-image', 'url("'+carousel.imgs[carousel.nextimg++]+'")')
        .fadeIn(1000, function(){
          setTimeout(carousel.doSlideshow, 5000);
      })
    }
  }



//  function doSlideshow() {
//    if(nextimg>=imgs.length){nextimg=0;}
//    $(car.el)
//      .css('background-image', 'url("'+imgs[nextimg++]+'")')
//      .fadeIn(1000,function(){
//        setTimeout(doSlideshow,5000);
//      });
//  }



  carousel.doSlideshow();
  nav.simple_drop();
  nav.bottom_drop();
  };





