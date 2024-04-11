var imageUrls = [
  "./images/main_image_1.jpg",
  "./images/main_image_2.jpg",
  "./images/main_image_3.jpg"
];

function changeImage() {
  var img = document.getElementById("imageRoller").getElementsByTagName("img")[0];
  var currentSrc = img.getAttribute("src");
  var currentIndex = imageUrls.indexOf(currentSrc);
  var nextIndex = (currentIndex + 1) % imageUrls.length;

  img.classList.add("fade-out");

  setTimeout(function () {
    img.setAttribute("src", imageUrls[nextIndex]);

    img.classList.remove("fade-out");
  }, 500); 
}

setInterval(changeImage, 3000);
