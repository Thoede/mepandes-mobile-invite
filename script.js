document.addEventListener("DOMContentLoaded", function() {
    let countdownDate = new Date("Dec 24, 2024 17:00:00").getTime();
    
    let interval = setInterval(function() {
        let now = new Date().getTime();
        let distance = countdownDate - now;
  
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
  
        if (distance < 0) {
            clearInterval(interval);
        }
    }, 1000);
  
    const slideshowImages = document.querySelectorAll(".slideshow img");
    let currentSlide = 0;
  
    function changeSlide() {
        slideshowImages[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slideshowImages.length;
        slideshowImages[currentSlide].classList.add("active");
    }
  
    setInterval(changeSlide, 5000);
  
    const scrollButton = document.getElementById("scrollButton");
    scrollButton.addEventListener("click", function() {
        document.querySelector(".content2").classList.add("show");
    });
  });
  
const scrollButton = document.getElementById('scrollButton');
const audio = new Audio('assets/audio.mp3');

scrollButton.addEventListener('click', (e) => {
    e.preventDefault();
    audio.play();
});


setTimeout(function() {
    document.getElementById('loading-screen').style.display = 'none';
    
    document.getElementById('main-content').style.display = 'block';
}, 3000); 
