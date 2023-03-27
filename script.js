``javascript
// Responsive navigation menu
document.querySelector('.nav-toggle').addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('show');
});

// Smooth scrolling navigation
$('nav a').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();
        const hash = this.hash;
        $('html, body').animate({scrollTop: $(hash).offset().top}, 800, function() {
            window.location.hash = hash;
        });
    }
});
``