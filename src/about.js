export default function aboutUs() {

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

    const hours = "Monday: Closed <br> Tuesday: Closed <br> Wednesday: Closed <br> Thursday: Closed <br> Friday: Closed <br> Saturday: Closed <br> Sunday: 11am-4pm"
    createAboutCard("Our History", "We're super old, so you should come here. We don't really care either way. Our founders are rich now and they're using all of the revenue to fund their #nomadiclifestyle. Thanks for coming!");
    createAboutCard("Hours", hours);

};