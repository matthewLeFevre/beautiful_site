//Pull a picture from a form in real time

/*
Listen for a file to be uploaded to the html document
Pull the image from the form
Render it back to the user
*/
window.onload = function () {
  
  var uploadImage = {
//    self: uploadImage,
    imgElGroup: [],
    imgInput:     document.getElementsByName("imgIn")[0],
    imgOutput:    document.getElementsByTagName("main")[0],
    clickImages:  document.getElementsByClassName('js-upload--img'),
    imgInputFile,
    imgEl: " ",
    
    clickableImages: function () {
      for (var i = 0; i < uploadImage.clickImages.length; i++) {
        uploadImage.clickImages[i].addEventListener("click", function () {
          uploadImage.clickImager[i].classList.toggle('upload--img__blowup');
        });
      }
    },
    
    removeExistingImages: function (images) {
      var id, image;
      for (var i = 0; i < images.length; i++) {
        id = "imgNum" + i;
        image = document.getElementById(id);
        uploadImage.imgOutput.removeChild(image);
        uploadImage.imgElGroup = [];
      }
    },
    
    convertUrl: function(item) {
      return URL.createObjectURL(item)
    },
    
   
    renderImgFromInput: function () {
//      var imgEl;
      uploadImage.imgInput.addEventListener("change", function () {
        uploadImage.removeExistingImages(uploadImage.imgElGroup);
        for (var i = 0; i < uploadImage.imgInput.files.length; i++) {
          uploadImage.imgEl = document.createElement("img");
          uploadImage.imgInputFile = uploadImage.imgInput.files[i];
          uploadImage.imgEl.src = uploadImage.convertUrl(uploadImage.imgInputfile);
          uploadImage.imgEl.setAttribute("id", "imgNum" + i);
          uploadImage.imgEl.setAttribute("class", "upload--img js-upload--img");
          uploadImage.imgElGroup.push(uploadImage.imgEl);
          uploadImage.imgOutput.appendChild(uploadImage.imgEl);
        }
      });
    },
    
    ready: function () {
      uploadImage.renderImgFromInput();
    }
  }
  
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
//  uploadImage.ready();
  
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
      this.submit.addEventListener("click", this.typeData);
    },
    
    typeData: function() {
      this.typeFamily = document.getElementsByName("type-family")[0].value;
      this.typeColor = document.getElementsByName("type-color")[0].value;
      console.log("typeData");
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
    
    makeCSS: function (css) {
      createCSSClass("harvey", css);
      this.typeOutput.setAttribute("class", "harvey");
    }
    
  }
  
  typeFormat.ready();
};

 





