const createAbout = () => {
    const aboutText = document.createElement('div');
    aboutText.className = "aboutText";
    aboutText.innerText = "This is the abouts page";

    content.appendChild(aboutText);
}

export {createAbout};