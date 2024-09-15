// Menu toggle for mobile view
let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
};

// ScrollReveal animations
const sr = ScrollReveal({
    distance: '40px',
    duration: 2400,
    reset: true
});

//Register Section
document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('register-form').style.display = 'none';
});

sr.reveal('.hero-text span', {delay: 400});
sr.reveal('.hero-img', {delay: 500, origin: 'top'});
sr.reveal('.hero-text h5', {delay: 600, origin: 'bottom'});
sr.reveal('.hero-text h1', {delay: 700, origin: 'bottom'});
sr.reveal('.hero-text p', {delay: 800, origin: 'top'});
sr.reveal('.hero-btn', {delay: 900, origin: 'top'});

sr.reveal('.image-box', {delay: 1000, origin: 'top'});
sr.reveal('.social-icons', {delay: 1100, origin: 'bottom'});
sr.reveal('.scroll-btn', {delay: 1150, origin: 'top'});

// Dark mode toggle
const darkModeToggle = document.querySelector('#dark-mode-switch');
const body = document.body;

// Load previously saved dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.checked = true;
}

darkModeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');

    // Save dark mode preference to localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});

// Register button functionality
document.getElementById('register-button').addEventListener('click', function() {
    var form = document.getElementById('register-form');
    // Toggle form visibility
    if (form.style.display === 'none' || form.style.display === '') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
});


//New Page for Second button of GET STARTED
document.getElementById('get-started').addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the default anchor behavior
    window.location.href = 'newpage/newpage.html'; // Replace with the URL of the new page
});


document.addEventListener('DOMContentLoaded', function() {
    const scrollDownBtn = document.getElementById('scrollDownBtn');
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    const aboutSection = document.getElementById('about');
    // Changes;;;;;;;
    const contactSection = document.getElementById('contact');

    // Scroll to the target section when "Scroll Down" button is clicked
    scrollDownBtn.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior
        aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

});


//New Page for Second button of READ MORE 
document.getElementById('Read More').addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the default anchor behavior
    window.location.href = 'readmore/read_more.html'; // Replace with the URL of the new page
});

