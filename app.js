var currentIndex = 1;
displaySlides(currentIndex);

function setSlides(num) {
  displaySlides((currentIndex += num));
}

function displaySlides(num) {
  var slides = document.getElementsByClassName("imageSlides");
  if (num > slides.length) {
    currentIndex = slides.length;
  }
  if (num < 1) {
    currentIndex = 1;
  }
  for (var x = 0; x < slides.length; x++) {
    slides[x].style.display = "none";
  }
  slides[currentIndex - 1].style.display = "block";
}

