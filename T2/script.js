// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add form submission handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you can add code to handle form submission (e.g., sending an email, showing a success message)
    alert('Form submitted!');
});
