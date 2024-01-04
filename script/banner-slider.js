//Banner slider
let BannerSlideIndex = 0;
BannerSlides();

function BannerSlides() {
  let i;
  let slides = document.getElementsByClassName("HomeSlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length;i++){
    slides[i].style.display = "none";  
  }
  BannerSlideIndex++;
  if (BannerSlideIndex > slides.length) {BannerSlideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[BannerSlideIndex-1].style.display = "block";  
  dots[BannerSlideIndex-1].className += " active";
  setTimeout(BannerSlides, 3000); // loop in 3 seconds
}