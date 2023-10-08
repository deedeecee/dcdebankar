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

