var navLinks = document.getElementById("navLinks");
const slides = document.querySelectorAll(".packages .slide");
let slideIndex = 0;
let intervalId = null;
const testimonialSlides = document.querySelectorAll(".testimonials .slide");
let testimonialIndex = 0;
let testimonialIntervalId = null;

document.addEventListener("DOMContentLoaded", initializeSliders);

function showMenu(){
    navLinks.style.right = "0";
}

function hideMenu(){
    navLinks.style.right = "-200px";
}

window.addEventListener("load", function() {
    var elements = document.getElementsByClassName("rainbowTitle");
    for (let i = 0; i < elements.length; i++) {
      generateRainbowText(elements[i]);
    }
});
  
function generateRainbowText(element) {
    var text = element.innerText;
    element.innerHTML = "";
    for (let i = 0; i < text.length; i++) {
      let charElem = document.createElement("span");
      charElem.style.color = "hsl(" + (360 * i / text.length) + ",80%,50%)";
      charElem.innerHTML = text[i];
      element.appendChild(charElem);
    }
}

function initializeSliders() {
  initializeSlider(slides, 'displaySlide', nextSlide, prevSlide);
  initializeSlider(testimonialSlides, 'displaySlide', nextTestimonial, prevTestimonial);
}

function initializeSlider(slideArray, displayClass, nextFunc, prevFunc) {
  if(slideArray.length > 0){
    slideArray[0].classList.add(displayClass);
    if (slideArray === slides) {
      intervalId = setInterval(nextFunc, 5000);
    } else {
      testimonialIntervalId = setInterval(nextFunc, 5000);
    }
  }
}

function showSlide(slideArray, index, displayClass) {
  if (index >= slideArray.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slideArray.length - 1;
  } else {
    slideIndex = index;
  }

  slideArray.forEach(slide => slide.classList.remove(displayClass));
  slideArray[slideIndex].classList.add(displayClass);
}

function prevSlide() {
  clearInterval(intervalId);
  showSlide(slides, slideIndex - 1, 'displaySlide');
  intervalId = setInterval(nextSlide, 5000);
}

function nextSlide() {
  clearInterval(intervalId);
  showSlide(slides, slideIndex + 1, 'displaySlide');
  intervalId = setInterval(nextSlide, 5000);
}

function prevTestimonial() {
  clearInterval(testimonialIntervalId);
  showSlide(testimonialSlides, testimonialIndex - 1, 'displaySlide');
  testimonialIntervalId = setInterval(nextTestimonial, 5000);
}

function nextTestimonial() {
  clearInterval(testimonialIntervalId);
  showSlide(testimonialSlides, testimonialIndex + 1, 'displaySlide');
  testimonialIntervalId = setInterval(nextTestimonial, 5000);
}

function showSlide(slideArray, index, displayClass) {
  if (index >= slideArray.length) {
    index = 0;
  } else if (index < 0) {
    index = slideArray.length - 1;
  }

  slideArray.forEach(slide => slide.classList.remove(displayClass));
  slideArray[index].classList.add(displayClass);
}