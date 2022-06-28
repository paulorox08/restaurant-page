const createContacts = () => {
    const content = document.querySelector('.content');

    const contactContainer = document.createElement('div');
    contactContainer.className = "contactContainer";
    contactContainer.innerText = "This is the contacts page";

    content.appendChild(contactContainer);
}

export {createContacts};