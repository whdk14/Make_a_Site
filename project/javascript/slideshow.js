var slides = document.querySelectorAll("#slides > img");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

var imgIndex = 0;

showSlides(imgIndex);
prev.onclick = prevSlide;
next.onclick = nextSlide;

function showSlides(n) {
    for (var i= 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[n].style.display = "block"; 
}
function prevSlide(){
    
    if(imgIndex > 0) imgIndex -= 1;
    else imgIndex = slides.length - 1;
    showSlides(imgIndex);
}
function nextSlide(){
    if(imgIndex < slides.length-1) imgIndex += 1;
    else imgIndex = 0;
    showSlides(imgIndex);
}