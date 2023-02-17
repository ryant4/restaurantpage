import './css-reset.css';
import './style.css';
import initialPageLoad from './initialload.js';
import aboutUs from './about.js';


initialPageLoad();

const pageContent = document.querySelector("#content");

const aboutButton = document.querySelector("#about-button");
const menuButton = document.querySelector("#menu-button");
const contactButton = document.querySelector("#contact-button");
aboutButton.addEventListener('click', aboutUsClick);
menuButton.addEventListener('click', menuButtonClick);
contactButton.addEventListener('click', contactButtonClick);

function aboutUsClick() {
    aboutUs();
    aboutButton.setAttribute('class', 'menu-button-clicked');
    aboutButton.removeEventListener('click', aboutUsClick);
};

function menuButtonClick() {
    // imported function
    menuButton.setAttribute('class', 'menu-button-clicked');
    menuButton.removeEventListener('click', menuButtonClick);
}

function contactButtonClick() {
    //imported function
    contactButton.setAttribute('class', 'menu-button-clicked');
    contactButton.removeEventListener('click', contactButtonClick);
}