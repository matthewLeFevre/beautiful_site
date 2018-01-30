
// Nav Btn Js

let menu_btn    = document.getElementById("js-menu-btn"),
    menu_ico    = document.getElementsByClassName("bs-nav--btn")[0],
    menu_nav    = document.getElementById("js-bs-nav"),
    menu_height = document.getElementsByClassName("bs-nav--item").length * 50,
    menu_on     = false;

var open = false;

if(menu_btn != null) {
  menu_btn.addEventListener("click", slideToggle);
}

  

function slideToggle() {
  menu_ico.classList.toggle("bs-nav--btn__closed");
  if(menu_nav.classList.contains("bs-nav--basic")){
    menu_nav.classList.toggle("bs-nav--basic__drop");
  }
  if(menu_nav.classList.contains("bs-nav--toggle")){
    menu_nav.classList.toggle("bs-nav--toggle__drop");
  }
  if(menu_nav.classList.contains("bs-nav--3")) {
    menu_nav.classList.toggle("bs-nav--3__drop");
  }
  
  // if (menu_on && window.innerWidth < 800) {
  //   menu_on = false;
  //   menu_nav.style.height = "0px";
  // } else {
  //   menu_on = true;
  //   menu_nav.style.height = menu_height + "px";
  // }
  // logo.classList.toggle("bs-b__black");
}

// color code js

let code = document.getElementsByClassName("bs-code");

for (let i = 0; i < code.length; i++) {
  let colored = colorCode(code[i]);
  code[i].innerHTML = colored;
}

function colorCode(codeString) {
  codeString = codeString.innerHTML.trim();
  let words  = codeString.split(" ");
  let code   = "";
  for(let i = 0; i < words.length; i++) {

    words[i] = checkTag(words[i]);
    // words[i] = checkAttr;
    
    code += " " + words[i];
  }
  return code;
}
function checkTag(word){
  // Check if it is a full tag
  if(word.startsWith("-") && word.endsWith("-") && word.length > 3) {

    let wordLen = word.length;
    if(word.indexOf("/")){
      let tag     = word.substr(2, wordLen - 3);
          tag     = "&lt;/<span class='bs-tag'>" + tag + "</span>&gt;",
          word    = tag;
      return word;
    }
    let tag     = word.substr(1, wordLen - 2);
        tag     = "&lt;<span class='bs-tag'>" + tag + "</span>&gt;",
        word    = tag;
    return word;
  } else { // Check to see if it is closing or opening

    if(word.startsWith("-") && word.length > 1) { // its an opening tag
      let wordLen = word.length,
          tag     = "&lt;<span class='bs-tag'>" + word.substr(1, wordLen) + "</span>";
          word    = tag;
      return word;
    }
    if (word.endsWith("-")) { // its a closing tag
      let wordLen = word.length,
          tag     = word.substr(1, wordLen - 1) + "&gt;";
          word    = tag;
      return word;
    }

  }

  return word;
}
function checkAttr(word) {
  return word;
}


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

let alerts = document.getElementsByClassName("bs-alert");

function removeAlert (alertsArr) {
  for( let i = 0; i < alertsArr.length; i++) {
    alertsArr[i].addEventListener("click", function(){
      alertsArr[i].style.display = "none";
    });
  }
}

removeAlert(alerts);



