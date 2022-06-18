import './style.css';

const content = document.querySelector('.content');

function skeleton() {
    
    const header = document.createElement('div');
    header.className = "header";
    header.innerText = "Eggcellence"

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
    recipes.innerText = "Recipes";

    tabs.appendChild(recipes);

    const contact = document.createElement('div');
    contact.className = 'contact';
    contact.innerText = "Contact Us";

    tabs.appendChild(contact);

};

skeleton();

function body() {

    const aboutText = document.createElement('div');
    aboutText.className = "aboutText";
    aboutText.innerText = "This is the abouts page";

    content.appendChild(aboutText);

    const recipesText = document.createElement('div');
    recipesText.className = "recipesText";
    recipesText.innerText = "This is the recipes page";

    content.appendChild(recipesText);

    const contactText = document.createElement('div');
    contactText.className = "contactText";
    contactText.innerText = "This is the contacts page";

    content.appendChild(contactText);
}

body();

function showAbout() {
    const about = document.querySelector('.about');
    const aboutText = document.querySelector('.aboutText');

    about.addEventListener('click', () => {
        aboutText.style.visibility = "visible";
    })
}

showAbout();