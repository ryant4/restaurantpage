import './css-reset.css';
import './style.css';
import initialPageLoad from './initialload.js';
import aboutUs from './about.js';


initialPageLoad();

const aboutButton = document.querySelector("#about-button")
aboutButton.addEventListener('click', function() {
    aboutUs();
    aboutButton.setAttribute('class', 'menu-button-clicked');
});