document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const navBars = document.querySelector('.nav-bars');
    const taskbar = document.querySelector('.taskbar');
    
    // Change header style on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Toggle navigation menu
    navBars.addEventListener('click', function() {
        taskbar.classList.toggle('show');
        navBars.classList.toggle('open');
    });
});
// Initialize Typed.js for typewriter effect

var typed = new Typed('#element', {
    strings: ['Student.', 'Learner.','Web Developer.'],
    typeSpeed: 80,
    loop: true,
    backSpeed: 50,
    backDelay: 2000
});

// Initialize AOS (Animate On Scroll)
AOS.init();

// Initialize Web3Form
document.addEventListener("DOMContentLoaded", function() {
    const form = new Web3Form({
        formId: 'contact-form-input-area',
        accessKey: 'c9007fa6-e9e7-4ffc-8555-76cf1c57435d',
        onSuccess: function(response) {
            alert('Message sent successfully!');
        },
        onError: function(error) {
            alert('Failed to send message.');
        }
    });
});
// Smooth scroll and update active link
document.querySelectorAll('.taskbar a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior

        // Remove active class from all links
        document.querySelectorAll('.taskbar a').forEach(item => {
            item.classList.remove('active');
        });

        // Add active class to clicked link
        this.classList.add('active');

        // Scroll to the corresponding section smoothly
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth' // Smooth scroll
        });
    });
});
