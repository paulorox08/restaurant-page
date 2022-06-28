const createAbout = () => {
    const content = document.querySelector('.content');

    const aboutContainer = document.createElement('div');
    aboutContainer.className = "aboutContainer";

    content.appendChild(aboutContainer);
}

export {createAbout};

const createAboutText = () => {
    const aboutContainer = document.querySelector('.aboutContainer');

    const aboutText = document.createElement('div');
    aboutText.className = "aboutText";
    aboutText.innerText = "At Eggcellence we only serve dishes that focus on the beauty of the egg."

    aboutContainer.appendChild(aboutText);
}

export {createAboutText};

const createAboutLocation = () => {
    const aboutContainer = document.querySelector('.aboutContainer');

    const aboutLocation = document.createElement('div');
    aboutLocation.className = "aboutLocation";
    aboutLocation.innerText = "122 Shepherds Drive"

    aboutContainer.appendChild(aboutLocation);
}

export {createAboutLocation};