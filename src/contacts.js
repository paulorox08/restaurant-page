const createContacts = () => {
    const contactText = document.createElement('div');
    contactText.className = "contactText";
    contactText.innerText = "This is the contacts page";

    content.appendChild(contactText);
}

export {createContacts};