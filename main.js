// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);

        if (target) {
            const targetOffset = target.getBoundingClientRect().top + window.scrollY;
            const headerHeight = document.querySelector('header').offsetHeight;

            window.scrollTo({
                top: targetOffset - headerHeight,
                behavior: 'smooth'
            });
        }
    });
});

// JavaScript for Mobile Navigation
function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

// Close the menu when a menu item is clicked (optional)
var menuItems = document.querySelectorAll('.menu a');
menuItems.forEach(function (item) {
    item.addEventListener('click', function () {
        var menu = document.querySelector('.menu');
        menu.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);

        if (target) {
            const targetOffset = target.getBoundingClientRect().top + window.scrollY;
            const headerHeight = document.querySelector('header').offsetHeight;

            window.scrollTo({
                top: targetOffset - headerHeight,
                behavior: 'smooth'
            });
        }
    });
});
