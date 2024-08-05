// Add any custom JavaScript here

// Smooth scrolling
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a.nav-link');

    for (const link of links) {
        link.addEventListener('click', clickHandler);
    }

    function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        const offsetTop = document.querySelector(href).offsetTop;

        scroll({
            top: offsetTop - 70, // Adjusted for the fixed navbar height
            behavior: 'smooth'
        });
    }
});
