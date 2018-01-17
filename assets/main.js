
// let menu_btn = document.getElementById("js-menu-btn"),
//     menu_ico = document.getElementsByClassName("bs-hdr__sml--menu")[0],
//     menu_nav = document.getElementById("js-bs-nav"),
//     menu_height = document.getElementsByClassName("bs-nav--item").length * 50,
//     logo        = document.getElementsByClassName("bs-hdr__sml--logo")[0];

// var open = false;

// menu_btn.addEventListener("click", slideToggle);
  

// function slideToggle() {
//   menu_ico.classList.toggle("bs-hdr__sml--menu__closed");
//   menu_nav.classList.toggle("drop-down");
//   logo.classList.toggle("bs-b__black");
// }


// let btn = document.getElementsByClassName("js-btn")[0];
// let btn_back = document.getElementsByClassName("js-btn-back")[0];
// let fields = document.getElementsByClassName("js-fldst-hook");
// let step = 0;

// btn.addEventListener("click", moveInput);
// function moveInput() {
//   step++; console.log(step);
//   if(step == 3) { btn.style.visibility = "hidden";}
//   if(step > 0) {btn_back.style.visibility = "visible";}
//   if(step == 0) {btn_back.style.visibility = "hidden";}
//   for( let i = 0; i < fields.length; i++) {
//       fields[i].classList.add("form--fldst__hidden");
//   }
//   fields[step].classList.remove("form--fldst__hidden");
// }

// btn_back.addEventListener("click", moveInputDown);

// function moveInputDown() {
//   step--; console.log(step);
//   if(step == 3) { btn.style.visibility = "hidden";}
//   if(step < 3) { btn.style.visibility = "visible";}
//   if(step > 0) {btn_back.style.visibility = "visible";}
//   if(step == 0) {btn_back.style.visibility = "hidden"; btn.style.visibility = "visible";}
//   for( let i = 0; i < fields.length; i++) {
//       fields[i].classList.add("form--fldst__hidden");
//   }
//   fields[step].classList.remove("form--fldst__hidden");
// }


// var last_known_scroll_position = 0;
// var ticking = false;
// var hdr = document.getElementsByClassName("hdr")[0];
// function doSomething(scroll_pos) {
//   if(scroll_pos > 10) {
    
//     hdr.classList.add("hdr__shrink");
//   } else {
//     hdr.classList.remove("hdr__shrink");
//   }
// }

// window.addEventListener('scroll', function(e) {

//   last_known_scroll_position = window.scrollY;
//   console.log(last_known_scroll_position);

//     window.requestAnimationFrame(function() {
//       doSomething(last_known_scroll_position);
//       ticking = false;
//     });
    
// });



//Alert


// 





// Alert js code

let success = document.getElementsByClassName("bs-alert__success"),
    neutral = document.getElementsByClassName("bs-alert__neutral"),
    error   = document.getElementsByClassName("bs-alert__error");

function removeAlert (alerts) {
  for( let i = 0; i < alerts.length; i++) {
    alerts[i].addEventListener("click", function(){
      alerts[i].style.display = "none";
    });
  }
}

removeAlert(success);
removeAlert(neutral);
removeAlert(error);



