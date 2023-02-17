export default function initialPageLoad() {
    const pageContent = document.querySelector('#content');

    const header = document.createElement('header');
    pageContent.appendChild(header);

    const headerLogo = document.createElement('div');
    headerLogo.setAttribute('id', 'logo-container');
    headerLogo.innerHTML = "LOGO";
    header.appendChild(headerLogo);

    const menuBorder = document.createElement('div');
    menuBorder.setAttribute("class", "menu-border");
    header.appendChild(menuBorder);

    const mainMenu = document.createElement('div');
    mainMenu.setAttribute("id", "main-menu");
    const makeUl = document.createElement('ul');
    mainMenu.appendChild(makeUl);

    function makeNavMenu(text) {
        const newListItem = document.createElement('li');
        newListItem.setAttribute("class", "main-menu-button");
        newListItem.setAttribute("id", (text.toLowerCase() + "-button"));
        newListItem.innerHTML = text;
        makeUl.appendChild(newListItem);
    }

    makeNavMenu("About");
    makeNavMenu("Menu");
    makeNavMenu("Contact");

    header.appendChild(mainMenu);

    const lowerMenuBorder = document.createElement('div');
    lowerMenuBorder.setAttribute("class", "menu-border");
    header.appendChild(lowerMenuBorder);
};