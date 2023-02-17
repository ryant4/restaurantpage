import './css-reset.css';
import './style.css';
import initialPageLoad from './initialload.js';
import aboutUs from './about.js';

initialPageLoad();

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
    aboutButton.setAttribute('class', 'menu-button-clicked');
    aboutButton.removeEventListener('click', aboutUsClick);
    menuButton.removeAttribute('class', 'menu-button-clicked')
    contactButton.removeAttribute('class', 'menu-button-clicked')
};

function menuButtonClick() {
    // imported function
    const grabCardsToClear = document.querySelectorAll(".content-card");
    grabCardsToClear.forEach((card) => {
        card.parentElement.removeChild(card);
    });
    setClickEvents();
    menuButton.setAttribute('class', 'menu-button-clicked');
    menuButton.removeEventListener('click', menuButtonClick);
    aboutButton.removeAttribute('class', 'menu-button-clicked')
    contactButton.removeAttribute('class', 'menu-button-clicked')
};

function contactButtonClick() {
    //imported function
    setClickEvents();
    contactButton.setAttribute('class', 'menu-button-clicked');
    contactButton.removeEventListener('click', contactButtonClick);
    menuButton.removeAttribute('class', 'menu-button-clicked')
    aboutButton.removeAttribute('class', 'menu-button-clicked')
};