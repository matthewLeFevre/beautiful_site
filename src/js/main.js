//Pull a picture from a form in real time

/*
Listen for a file to be uploaded to the html document
Pull the image from the form
Render it back to the user
*/
window.onload = function () {
  
  var imgElGroup = [],
    imgInput = document.getElementsByName("imgIn")[0],
    imgOutput = document.getElementsByTagName("main")[0],
    imgInputFile;
  
  function removeExistingImages(images) {
    var id, image;
    console.log(imgElGroup, "fireing");
    for (var i = 0; i < images.length; i++) {
        id = "imgNum" + i;
      console.log(id);
        image = document.getElementById(id);
      console.log(image);
      console.log("before", imgElGroup);
        imgOutput.removeChild(image);
        imgElGroup = [];
      console.log("after", imgElGroup);
      }
  }
  
  var renderImgFromInput = function () {
    imgInput.addEventListener("change", function () {
      removeExistingImages(imgElGroup, imgOutput);
      for (var i = 0; i < imgInput.files.length; i++) {
        var imgEl = document.createElement("img");
        imgInputFile = imgInput.files[i];
        imgEl.src = URL.createObjectURL(imgInputFile);
        imgEl.setAttribute("id", "imgNum" + i);
        imgEl.setAttribute("class", "upload--img");
        imgElGroup.push(imgEl);
        imgOutput.appendChild(imgEl);
      }
      console.log(imgInput.files);
    });
  };
  
  
  renderImgFromInput();
};





