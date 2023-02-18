import Egg from './images/egg.jpeg';
import Avocado from './images/avocado.jpg';
import Burger from './images/burger.jpg';
import Salad from './images/salad.jpeg';

const pageContent = document.getElementById('content');

export default function menuMaker() {
    const pageContent = document.getElementById('content');
    
    function createMenuCard(title, content, picture) {
        const newCard = document.createElement('div');
        newCard.setAttribute('class', 'content-card');
        const newCardTitle = document.createElement("h2");
        newCardTitle.innerHTML = title;
        newCard.appendChild(newCardTitle);
        const newCardText = document.createElement('p');
        newCardText.innerHTML = content;
        newCard.appendChild(newCardText);
        const newCardImage = document.createElement('img');
        newCardImage.src = picture;
        newCard.appendChild(newCardImage);
        pageContent.appendChild(newCard);
    }

    createMenuCard("Avocado", "Just one single slice of avocado with sea salt", Avocado);
    createMenuCard("Egg", "One egg, scrambled or fried", Egg);
    createMenuCard("Burger", "Grass-fed angus beef from Upstate New York", Burger);
    createMenuCard("Salad", "House salad with lemon dressing", Salad);
};