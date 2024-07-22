document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.intro, .services, .pricing, .skills, .footer');
    elements.forEach(element => {
        element.style.animationDelay = `${Math.random() * 2}s`;
    });
});
