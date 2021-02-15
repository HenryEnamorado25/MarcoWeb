const aboutMe = document.querySelector('#about');
const  services= document.querySelector('#service');
const  contactMe= document.querySelector('#contact');



aboutMe.addEventListener('click', () => {
    window.scrollTo({ top: 700, left: 0, behavior: 'smooth' });
});

services.addEventListener('click', () => {
    window.scrollTo({ top: 1400, left: 0, behavior: 'smooth' });
});

contactMe.addEventListener('click', () => {
    window.scrollTo({ top: 2100, left: 0, behavior: 'smooth' });
});