import './style.css';

import { createAbout } from './about';
import { createContacts } from './contacts';
import { createRecipes } from './recipes';

const content = document.querySelector('.content');

function skeleton() {
    
    const header = document.createElement('div');
    header.className = "header";

    const headerText = document.createElement('div');
    headerText.className = "headerText";
    headerText.innerText = "Eggcellence";
    header.appendChild(headerText);

    content.appendChild(header);

    const tabs = document.createElement('div');
    tabs.className = "tabs";
    
    content.appendChild(tabs);

    const about = document.createElement('div');
    about.className = "about";
    about.innerText = "About";

    tabs.appendChild(about);

    const recipes = document.createElement('div');
    recipes.className = 'recipes';
    recipes.innerText = "Menu";

    tabs.appendChild(recipes);

    const contact = document.createElement('div');
    contact.className = 'contact';
    contact.innerText = "Contact Us";

    tabs.appendChild(contact);

    const footer = document.createElement('div');
    footer.className = "footer";
    footer.innerText = "Copyright Paulo Adeva"

    content.appendChild(footer);

};

skeleton();

function showContent() {
    const about = document.querySelector('.about');
    const aboutText = document.querySelector('.aboutText');

    const recipes = document.querySelector('.recipes');
    const recipesText = document.querySelector('.recipesText');

    const contact = document.querySelector('.contact');
    const contactText = document.querySelector('.contactText');

    about.addEventListener('click', () => {
        about.style.border = "1px solid black";
        recipes.style.border = "1px solid var(--background-colour)";
        contact.style.border = "1px solid var(--background-colour)";
        aboutText.style.display = "initial";
        recipesText.style.display = "none";
        contactText.style.display = "none";
    })

    recipes.addEventListener('click', () => {
        recipes.style.border = "1px solid black";
        about.style.border = "1px solid var(--background-colour)";
        contact.style.border = "1px solid var(--background-colour)";
        recipesText.style.display = "initial";
        aboutText.style.display = "none";
        contactText.style.display = "none";
    })

    contact.addEventListener('click', () => {
        contact.style.border = "1px solid black";
        about.style.border = "1px solid var(--background-colour)";
        recipes.style.border = "1px solid var(--background-colour)";
        contactText.style.display = "initial";
        aboutText.style.display = "none";
        recipesText.style.display = "none";
    })
}

createAbout();
createRecipes();
createContacts();

showContent();
