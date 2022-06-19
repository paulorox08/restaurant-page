import './style.css';

const content = document.querySelector('.content');

function skeleton() {
    
    const header = document.createElement('div');
    header.className = "header";
    header.innerText = "Eggcellence";

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

    const footer = document.createElement('div');
    footer.className = "footer";
    footer.innerText = "Copyright Paulo Adeva"

    content.appendChild(footer);

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

function showContent() {
    const about = document.querySelector('.about');
    const aboutText = document.querySelector('.aboutText');

    const recipes = document.querySelector('.recipes');
    const recipesText = document.querySelector('.recipesText');

    const contact = document.querySelector('.contact');
    const contactText = document.querySelector('.contactText');

    about.addEventListener('click', () => {
        aboutText.style.display = "initial";
        recipesText.style.display = "none";
        contactText.style.display = "none";
    })

    recipes.addEventListener('click', () => {
        recipesText.style.display = "initial";
        aboutText.style.display = "none";
        contactText.style.display = "none";
    })

    contact.addEventListener('click', () => {
        contactText.style.display = "initial";
        aboutText.style.display = "none";
        recipesText.style.display = "none";
    })
}

showContent();