const createAbout = () => {
    const content = document.querySelector('.content');

    const aboutContainer = document.createElement('div');
    aboutContainer.className = "aboutContainer";

    content.appendChild(aboutContainer);

    const aboutText = document.createElement('div');
    aboutText.className = "aboutText";
    aboutText.innerText = "At Eggcellence we only serve dishes that focus on the beauty of the egg."

    aboutContainer.appendChild(aboutText);
}

export {createAbout};