const countdownDate = new Date("Dec 24, 2024 16:59:59").getTime();

const x = setInterval(function() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "EXPIRED";
    document.getElementById("hours").innerHTML = "";
    document.getElementById("minutes").innerHTML = "";
    document.getElementById("seconds").innerHTML = "";
  }
}, 1000);

document.querySelector('.rsvp button').addEventListener('click', function(e) {
  const nameInput = document.querySelector('.rsvp input[name="name"]');
  if (nameInput.value === '') {
    e.preventDefault();
    alert('Nama harus diisi!');
  }
});

//LOW TAPER FADE
const fadeElements = document.querySelectorAll('.fade-in');

function checkVisibility() {
    fadeElements.forEach(element => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        element.classList.add('visible');
      }
    });
  }
  
  checkVisibility();
  
  window.addEventListener('scroll', checkVisibility);
  
window.onload = function() {
    if (window.innerWidth > 768) {
        alert("Website ini hanya dapat diakses menggunakan perangkat mobile.");
    }
};

const playButton = document.getElementById('open-invitation');
const audio = document.getElementById('background-audio');


playButton.addEventListener('click', () => {
  audio.play(); 
});


document.getElementById("open-invitation").addEventListener("click", function () {
  document.getElementById("overlay").style.display = "none";
});


async function submitRSVP(name, attendees, email) {
  const { data, error } = await supabase
    .from('rsvps')
    .insert([
      { name: name, attendees: attendees, email: email }
    ]);

  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Data inserted:', data);
  }
}

document.getElementById('rsvp-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const attendees = document.getElementById('attendees').value;
  const email = document.getElementById('email').value;

  submitRSVP(name, attendees, email);
});

