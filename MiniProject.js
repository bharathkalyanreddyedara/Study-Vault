document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.home-content h1, .home-content h3, .home-content p');
    
    sections.forEach((element) => {
        element.classList.add('animated');
    });
});
