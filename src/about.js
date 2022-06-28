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

    aboutContainer.appendChild(aboutText);
}

export {createAboutText};

const createAboutTextText = () => {
    const aboutText = document.querySelector('.aboutText');

    const aboutTextText = document.createElement('div');
    aboutTextText.className = "aboutTextText";
    aboutTextText.innerText = "From omelettes to soufles, we have a dish for you!"

    aboutText.appendChild(aboutTextText);
}

export {createAboutTextText};

const createAboutLocation = () => {
    const aboutText = document.querySelector('.aboutText');

    const aboutLocation = document.createElement('div');
    aboutLocation.className = "aboutLocation";

    aboutText.appendChild(aboutLocation);

    const locationLogo = document.createElement('div');
    locationLogo.className = "location material-symbols-outlined";
    locationLogo.innerText = "pin_drop";

    aboutLocation.appendChild(locationLogo);

    const locations = document.createElement('div');
    locations.className = "locations";

    aboutLocation.appendChild(locations);

    const locationOne = document.createElement('li');
    locationOne.className = "locationOne";
    locationOne.innerText = "556 Pennant Hills Rd, West Pennant Hills NSW 2125";

    locations.appendChild(locationOne);

    const locationTwo = document.createElement('li');
    locationTwo.className = "locationTwo";
    locationTwo.innerText = "Westfield Hornsby Shopping Centre Store 3014-3015, Level 3/236 Pacific Hwy, Hornsby NSW 2077";

    locations.appendChild(locationTwo);

    const locationThree = document.createElement('li');
    locationThree.className = "locationThree";
    locationThree.innerText = "Store Gr, 16 White Hart Dr, Rouse Hill NSW 2155";

    locations.appendChild(locationThree);
}

export {createAboutLocation};

const createAboutTime = () => {
    const aboutText = document.querySelector('.aboutText');

    const aboutTime = document.createElement('div');
    aboutTime.className = "aboutTime";

    aboutText.appendChild(aboutTime);

    const timeOne = document.createElement('li');
    timeOne.className = "timeOne";
    timeOne.innerText = "Mon - Fri: 7am - 10pm";

    aboutTime.appendChild(timeOne);

    const timeTwo = document.createElement('li');
    timeTwo.className = "timeTwo";
    timeTwo.innerText = "Sat & Sun: 8am - 7pm";

    aboutTime.appendChild(timeTwo);
}

export {createAboutTime};