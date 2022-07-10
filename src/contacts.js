const createContacts = () => {
    const content = document.querySelector('.content');

    const contactsContainer = document.createElement('div');
    contactsContainer.className = "contactsContainer";

    content.appendChild(contactsContainer);
}

export {createContacts};

const createContactsText = () => {
    const contactsContainer = document.querySelector('.contactsContainer');

    const contactsText = document.createElement('div');
    contactsText.className = "contactsText";

    contactsContainer.appendChild(contactsText);
}

export {createContactsText};

const createContactsTitle = () => {
    const contactsText = document.querySelector('.contactsText');

    const contactsTitle = document.createElement('div');
    contactsTitle.className = "contactsTitle";
    contactsTitle.innerText = "Have a question?"

    contactsText.appendChild(contactsTitle);
 }

export {createContactsTitle};

const phoneAndEmail = () => {
    const contactsText = document.querySelector('.contactsText');

    const phoneAndEmail = document.createElement('div');
    phoneAndEmail.className = "phoneAndEmail";
    phoneAndEmail.innerHTML = "Phone - 0298764326 <br /> Email - eggcellent.restaurant@restaurants.com"

    contactsText.appendChild(phoneAndEmail);
 }

export {phoneAndEmail};

const leaveAMessage = () => {
    const contactsText = document.querySelector('.contactsText');

    const title = document.createElement('div');
    title.className = "title";
    title.innerText = "Leave a message below!";

    contactsText.appendChild(title);

    const name = document.createElement('input');
    name.className = "name";
    name.setAttribute("type", "text");
    name.setAttribute("placeholder", "Name")

    title.appendChild(name);

    const email = document.createElement('input');
    email.className = "email";
    email.setAttribute("type", "email");
    email.setAttribute("placeholder", "Email");

    title.appendChild(email);

    const message = document.createElement('input');
    message.className = "message";
    message.setAttribute("type", "text");
    message.setAttribute("placeholder", "What is your question?");

    contactsText.appendChild(message);

}

export {leaveAMessage};
