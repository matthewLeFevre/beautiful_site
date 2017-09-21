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



//Having issues with URL.createObjectURL
 var uploadImage = {
//    self: uploadImage,
    imgElGroup: [],
    imgInput:     document.getElementsByName("imgIn")[0],
    imgOutput:    document.getElementsByTagName("main")[0],
    clickImages:  document.getElementsByClassName('js-upload--img'),
    imgInputFile: " ",
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
      var url = URL.createObjectURL(item);
      return url;
    },
    
   
    renderImgFromInput: function () {
//      var imgEl;
      uploadImage.imgInput.addEventListener("change", function () {
        uploadImage.removeExistingImages(uploadImage.imgElGroup);
        for (var i = 0; i < uploadImage.imgInput.files.length; i++) {
          uploadImage.imgEl = document.createElement("img");
          this.imgInputFile = uploadImage.imgInput.files[i];
          uploadImage.imgEl.src = uploadImage.convertUrl(this.imgInputfile);
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
  

  
 uploadImage.renderImgFromInput();