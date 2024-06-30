// Typewriter Animation for Welcome Message
const welcomeText = document.querySelector('.hero-title');
const text = "Welcome! I'm Yazan Hijazi";
let index = 0;


// JavaScript for Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

mobileMenuToggle.addEventListener('click', function() {
    mobileMenuOverlay.classList.toggle('open');
});


// Flip Skills Cards
const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});


