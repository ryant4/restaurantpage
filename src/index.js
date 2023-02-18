import './css-reset.css';
import './style.css';
import initialPageLoad from './initialload.js';
import aboutUs from './about.js';
import contactInfo from './contact.js';
import menuMaker from './menu';

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
    const grabCardsToClear = document.querySelectorAll(".content-card");
    grabCardsToClear.forEach((card) => {
        card.parentElement.removeChild(card);
    });
    aboutUs();
    setClickEvents();
    aboutButton.classList.add('menu-button-clicked');
    aboutButton.removeEventListener('click', aboutUsClick);
    menuButton.classList.remove('menu-button-clicked');
    contactButton.classList.remove('menu-button-clicked');
};

function menuButtonClick() {
    const grabCardsToClear = document.querySelectorAll(".content-card");
    grabCardsToClear.forEach((card) => {
        card.parentElement.removeChild(card);
    });
    menuMaker();
    setClickEvents();
    menuButton.classList.add('menu-button-clicked');
    menuButton.removeEventListener('click', menuButtonClick);
    aboutButton.classList.remove('menu-button-clicked');
    contactButton.classList.remove('menu-button-clicked');
};

function contactButtonClick() {
    const grabCardsToClear = document.querySelectorAll(".content-card");
    grabCardsToClear.forEach((card) => {
        card.parentElement.removeChild(card);
    });
    contactInfo();
    setClickEvents();
    contactButton.classList.add('menu-button-clicked');
    contactButton.removeEventListener('click', contactButtonClick);
    menuButton.classList.remove('menu-button-clicked');
    aboutButton.classList.remove('menu-button-clicked');
};