const aboutMe = document.querySelector('#about');
const  services= document.querySelector('#service');
const contactMe = document.querySelector('#contact');
const burger = document.querySelector('#navBar');
const list = document.querySelector(".list");
const btnContact = document.querySelector("#contactBtn");


btnContact.addEventListener('click', () => {
    window.scrollTo({ top: 2100, left: 0, behavior: 'smooth' });
});


aboutMe.addEventListener('click', () => {
    window.scrollTo({ top: 700, left: 0, behavior: 'smooth' });
});

services.addEventListener('click', () => {
    window.scrollTo({ top: 1400, left: 0, behavior: 'smooth' });
});

contactMe.addEventListener('click', () => {
    window.scrollTo({ top: 2100, left: 0, behavior: 'smooth' });
});

let active = true;
burger.addEventListener('click', () => {
    

    if (active) {
        active = false;
        burger.classList.toggle("fa-times");
        burger.style.color = "#02b5ae";

        list.style.right = "20px";
        list.style.transition = "0.5s"
        list.style.zIndex= "5";

       active = false;
        
        
    }else {
        burger.classList.toggle("fa-times");
        burger.style.color = "white";
        console.log('in');
        list.style.right = "-200%";
        list.style.transition = "0.5s"
        active = true;
        
        
    }
    console.log('active');
   // list.style.transition = "1s";//
})