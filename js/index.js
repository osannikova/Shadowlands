/*document.querySelector('submit').addEventListener('click', getData);
function getData() {
    fetch('')
    .then(response => response.json())
    .then(json => console.log(json))
}
*/

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
const clock = document.querySelector('.clock');
const updateTime = () => (clock.innerHTML = new Date().toLocaleTimeString());
setInterval(updateTime, 1000);

