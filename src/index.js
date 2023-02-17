import './css-reset.css';
import './style.css';
import initialPageLoad from './initialload.js';
import aboutUs from './about.js';

initialPageLoad();


// aboutButton.classList.add('menu-button-clicked'). Similarly, instead of menuButton.removeAttribute('class', 'menu-button-clicked'), you can use menuButton.classList.remove('menu-button-clicked').

const aboutButton = document.querySelector("#about-button");
const menuButton = document.querySelector("#menu-button");
const contactButton = document.querySelector("#contact-button");

function setClickEvents() {
    aboutButton.addEventListener('click', aboutUsClick);
    menuButton.addEventListener('click', menuButtonClick);
    contactButton.addEventListener('click', contactButtonClick);
};

setClickEvents();

function aboutUsClick() {
    aboutUs();
    setClickEvents();
    aboutButton.classList.add('menu-button-clicked');
    aboutButton.removeEventListener('click', aboutUsClick);
    menuButton.classList.remove('menu-button-clicked');
    contactButton.classList.remove('menu-button-clicked');
};

function menuButtonClick() {
    // imported function
    const grabCardsToClear = document.querySelectorAll(".content-card");
    grabCardsToClear.forEach((card) => {
        card.parentElement.removeChild(card);
    });
    setClickEvents();
    menuButton.classList.add('menu-button-clicked');
    menuButton.removeEventListener('click', menuButtonClick);
    aboutButton.classList.remove('menu-button-clicked');
    contactButton.classList.remove('menu-button-clicked');
};

function contactButtonClick() {
    //imported function
    setClickEvents();
    contactButton.classList.add('menu-button-clicked');
    contactButton.removeEventListener('click', contactButtonClick);
    menuButton.classList.remove('menu-button-clicked');
    aboutButton.classList.remove('menu-button-clicked');
};