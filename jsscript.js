// Menu toggle for mobile
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Contact form submission (placeholder)
const contactForm = document.getElementById('contactForm');
if(contactForm){
    contactForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        alert('Merci! Votre message a été envoyé. | شكراً! تم إرسال رسالتك.');
        contactForm.reset();
    });
}
