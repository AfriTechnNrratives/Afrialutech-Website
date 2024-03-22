function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}


document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        const targetId = link.getAttribute('href').substring(1); 
        link.addEventListener('click', (event) => {
            event.preventDefault();
            scrollToSection(targetId);
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.querySelector('#contact button');

    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const blogPostLinks = document.querySelectorAll('.blog-post a');

    blogPostLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            
            event.preventDefault();
            
            const blogPostUrl = link.getAttribute('href');
            
        });
    });
});
