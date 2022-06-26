const createAbout = () => {
    const content = document.querySelector('.content');
    
    const aboutText = document.createElement('div');
    aboutText.className = "aboutText";
    aboutText.innerText = "This is the abouts page";

    content.appendChild(aboutText);
}

export {createAbout};