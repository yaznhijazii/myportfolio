// Typewriter Animation for Welcome Message
const welcomeText = document.querySelector('.hero-title');
const text = "Welcome! I'm Yazan Hijazi";
let index = 0;


// JavaScript for Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
const navLinks = document.getElementById('nav-links'); // Desktop navigation links

mobileMenuToggle.addEventListener('click', function() {
    // Toggle mobile menu overlay visibility
    mobileMenuOverlay.classList.toggle('open');

    // Optional: Hide desktop navigation links when mobile menu is open
    navLinks.style.display = navLinks.style.display === 'none' ? 'flex' : 'none';
});



// Flip Skills Cards
const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});


