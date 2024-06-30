// Typewriter Animation for Welcome Message
const welcomeText = document.querySelector('.hero-title');
const text = "Welcome! I'm Yazan Hijazi";
let index = 0;

// Flip Skills Cards
const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});


