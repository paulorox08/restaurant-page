const createContacts = () => {
    const content = document.querySelector('.content');
    
    const contactText = document.createElement('div');
    contactText.className = "contactText";
    contactText.innerText = "This is the contacts page";

    content.appendChild(contactText);
}

export {createContacts};