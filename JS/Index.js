const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");

   if (navMenu.classList.contains('active')) {
    menuIcon.classList.remove('fa-solid fa-bars');
    menuIcon.classList.add('fa-solid fa-xmark');  // fa-xmark is FontAwesome's X icon
  } else {
    menuIcon.classList.remove('fa-solid fa-xmark');
    menuIcon.classList.add('fa-solid fa-bars');
  }
});

// Optional: Close menu when clicking a nav link on mobile
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

// Optional Auto-slide
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 7000); // every 7 seconds
