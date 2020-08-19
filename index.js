
// Testimonial Slide
let tesStart = 1;
tesSlides(tesStart);

function forwardSlides(n) {
  tesSlides(tesStart += n);
}

function tesSlides(n) {
  var i;
  var shifts = document.getElementsByClassName("content");
  //var dots = document.getElementsByClassName("dot");
  if (n > shifts.length) {tesStart = 1}
  if (n < 1) {tesStart = shifts.length}
  for (i = 0; i < shifts.length; i++) {
      shifts[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  // }
  shifts[tesStart-1].style.display = "block";
  //dots[tesStart-1].className += " active";
}

let tesAuto = 0;
function tesSlidesAuto(tesAuto) {
  var i;
  var shiftAuto = document.getElementsByClassName("content");
  for (i = 0; i < shiftAuto.length; i++) {
    shiftAuto[i].style.display = "none";
  }
  
  tesAuto++;
  if (slideIndex > shiftAuto.length) {
    slideIndex = 1}
  shiftAuto[slideIndex-1].style.display = "block";
  setTimeout(tesSlidesAuto, 4000); // Change image every 2 seconds
}

tesSlidesAuto();

// End Testimonial Slide