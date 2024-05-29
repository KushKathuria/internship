const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container .section__subheader", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container .btn", {
  ...scrollRevealOption,
  delay: 1000,
});
function openDatePicker() {
    // You can implement your own custom date picker logic here
    // For simplicity, we're not implementing it in this example
    console.log('Date picker opened');
  }

// room container
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});

// feature container
ScrollReveal().reveal(".feature__card", {
  ...scrollRevealOption,
  interval: 500,
});

// news container
ScrollReveal().reveal(".news__card", {
  ...scrollRevealOption,
  interval: 500,
});
// script.js
document.getElementById('popupButton').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'none';
});

// Optional: Hide the popup when clicking outside of it
window.addEventListener('click', function(event) {
  if (event.target === document.getElementById('popup')) {
      document.getElementById('popup').style.display = 'none';
  }
});
document.getElementById("myButton").addEventListener("click", function() {
  var popup = document.getElementById("myPopup");
  popup.style.display = "block";
  setTimeout(function() {
    popup.style.display = "none";
  }, 3000); // hide the popup after 3 seconds
});document.getElementById("king").addEventListener("click", function() {
  var whatsappLink = "https://wa.me/8295024253";
  window.open(whatsappLink, "_blank");
});
