//Pull a picture from a form in real time

/*
Listen for a file to be uploaded to the html document
Pull the image from the form
Render it back to the user
*/

window.onload = function () {
  
  function createCSSClass (className, css) {
    var sallyStyles = document.getElementsByName("sallyStyles")[0];
    if(sallyStyles !== undefined){
      document.getElementsByTagName("head")[0].removeChild(sallyStyles);
    }
   
   var style = document.createElement("style");
    style.type= "text/css";
    style.setAttribute("name", "sallyStyles");
    style.innerHTML = "." + className + "{" + css + "}";
    document.getElementsByTagName("head")[0].appendChild(style);
  }
 
  
  var typeFormat = {
    submit: document.getElementsByName("btn")[0],
    typeFamily: " ",
    typeColor: " ",
    typeOutput: document.getElementsByClassName("js-type--format")[0],
//    typeOutput_text: this.typeOutput.value,
    
    ready: function () {
      this.createStyleTag();
      this.submit.addEventListener("click", this.typeData);
    },
    
    typeData: function() {
      this.typeFamily = document.getElementsByName("type-family")[0].value;
      this.typeColor = document.getElementsByName("type-color")[0].value;
      if(this.typeFamily === null && this.typeColor === null){
        
        if(this.typeFamily === null) {
          window.alert('you need to fill in this field');
        } else {
          var family = "font-family: " + this.typeFamily + ";";
          typeFormat.makeCSS(family);
        }

        if(this.typeColor === null) {
          window.alert('you need to fill in this field');
        } else {
          var color ="color: " + this.typeColor + ";";
          typeFormat.makeCSS(color);
        } 
      } else {
        var family = "font-family: " + this.typeFamily + ";";
        var color ="color: " + this.typeColor + ";";
        typeFormat.makeCSS(family + " " + color);
      }
    },
    
    createStyleTag: function () {
      var style = document.createElement("style");
      style.type= "text/css";
      style.setAttribute("name", "sallyStyles");
      document.getElementsByTagName("head")[0].appendChild(style);
    },
    
    createCSSClass: function (className, css) {
      var style = document.getElementsByName("sallyStyles")[0];
      var currentStyle = style.innerHTML + " ." + className + "{" + css + "}";
      style.innerHTML = currentStyle;
    },
    
    makeCSS: function (css) {
      var randomNumber = " ";
      for (var i = 0; i < 10; i++) {
        randomNumber += Math.floor(Math.random() * 20);
      }
      var className = "havery" + randomNumber;
      this.createCSSClass(className, css);
      this.typeOutput.setAttribute(className, "harvey");
      
    }
    
  }
  
  
  
  var model = {
    model: document.getElementsByClassName("model--container")[0],
    closeBtn: document.getElementsByClassName("js-model--close-toggle")[0],
    
    openModel: function () {
      setTimeout (
        function () {
          model.model.style.display = "block";
        }, 3000);
    },
    
    ready: function () {
      this.openModel();
      this.closeBtn.addEventListener("click", function () {
        model.model.style.display = "none";
      });
    },
    
  }
  model.ready();
  typeFormat.ready();
  
   var imgElGroup = [],
    imgInput = document.getElementsByName("imgIn")[0],
    imgOutput = document.getElementsByTagName("main")[0],
    imgInputFile;
  
  function clickableImages () {
    var clickImages = document.getElementsByClassName('js-upload--img');
    for (var i = 0; i < clickImages.length; i++){
      clickImages[i].addEventListener("click", function () {
        this.classList.toggle('upload--img__blowup');
      });
    }
  }
  
  function removeExistingImages(images) {
    var id, image;
    for (var i = 0; i < images.length; i++) {
        id = "imgNum" + i;
        image = document.getElementById(id);
        imgOutput.removeChild(image);
        imgElGroup = [];
      }
  }
  
  var renderImgFromInput = function () {
    imgInput.addEventListener("change", function () {
      removeExistingImages(imgElGroup);
      for (var i = 0; i < imgInput.files.length; i++) {
        var imgEl = document.createElement("img");
        imgInputFile = imgInput.files[i];
        imgEl.src = URL.createObjectURL(imgInputFile);
        imgEl.setAttribute("id", "imgNum" + i);
        imgEl.setAttribute("class", "upload--img js-upload--img");
        imgElGroup.push(imgEl);
        imgOutput.appendChild(imgEl);
      }
      clickableImages();
    });
  };

  renderImgFromInput();
  
};

 





