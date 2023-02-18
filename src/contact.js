export default function contactInfo() {

    const pageContent = document.getElementById('content');

    function createAboutCard(title, content) {
        const newCard = document.createElement('div');
        newCard.setAttribute('class', 'content-card');
        const newCardTitle = document.createElement("h2");
        newCardTitle.innerHTML = title;
        newCard.appendChild(newCardTitle);
        const newCardText = document.createElement('p');
        newCardText.innerHTML = content;
        newCard.appendChild(newCardText);
        pageContent.appendChild(newCard);
    }

    createAboutCard("Phone", "646-646-6464")
    createAboutCard("Email", "brooklynrestaurant@gmail.com");
    createAboutCard("Location", "89 Bedford Ave <br> Brooklyn, NY 11222");
}