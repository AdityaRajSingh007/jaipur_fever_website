//pre loader
window.addEventListener('load', () => {
  const preloader = document.querySelector('.loader_new');
  preloader.style.opacity = '0';
  setTimeout(() => {
    preloader.style.display = 'none';
  }, 3000); // Adjust delay as needed
});

//slide show
/*let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("destination");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}*/

//video show
const videos = document.querySelectorAll('.video-slide');
let currentVideo = 0;

function showVideo(n) {
  videos.forEach(video => {
    video.pause();
    video.style.display = 'none';
  });
  videos[n].style.display = 'block';
  videos[n].play();
}

showVideo(0);

