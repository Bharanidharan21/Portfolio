// Toggle Menu
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

// Scroll animations
const faders = document.querySelectorAll('.fade-in');

function showOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  faders.forEach(fade => {
    const fadeTop = fade.getBoundingClientRect().top;

    if (fadeTop < triggerBottom) {
      fade.classList.add('show');
    }
  });
}

window.addEventListener('scroll', showOnScroll);
showOnScroll(); // run once on load
// Page load animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// Animate sections on page load + scroll
const sections = document.querySelectorAll("section");

function revealSections() {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach((sec, index) => {
    const secTop = sec.getBoundingClientRect().top;

    if (secTop < triggerBottom) {
      setTimeout(() => {
        sec.classList.add("show");
      }, index * 200); // stagger effect
    }
  });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);
// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
// Close navbar when scrolling
window.addEventListener("scroll", () => {
  const navLinks = document.getElementById("navLinks");
  if (navLinks.classList.contains("active")) {
    navLinks.classList.remove("active");
  }
});
