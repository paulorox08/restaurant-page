const createRecipes = () => {
    const content = document.querySelector('.content');

    const recipesContainer = document.createElement('div');
    recipesContainer.className = "recipesContainer";

    content.appendChild(recipesContainer);
}

export {createRecipes};

const createRecipesText = () => {
    const recipesContainer = document.querySelector('.recipesContainer');

    const recipesText = document.createElement('div');
    recipesText.className = "recipesText";

    recipesContainer.appendChild(recipesText);
}

export {createRecipesText};

const createRecipesTitle = () => {
    const recipesText = document.querySelector('.recipesText');

    const recipesTitle = document.createElement('div');
    recipesTitle.className = "recipesTitle";
    recipesTitle.innerText = "Menu";

    recipesText.appendChild(recipesTitle);
}

export { createRecipesTitle };

const createActualRecipes = () => {
    const recipesText = document.querySelector('.recipesText');

    const actualRecipes = document.createElement('div');
    actualRecipes.className = "actualRecipes";

    recipesText.appendChild(actualRecipes)

    let j = 0;
    while (j < 6) {
        let recipeImage = document.createElement('div');
        recipeImage.className = `recipeImage ${j}`;

        actualRecipes.appendChild(recipeImage);

        let recipeDesc = document.createElement('div');
        recipeDesc.className = `recipeDesc${j}`;

        actualRecipes.appendChild(recipeDesc);
        j ++;
    }
    

}

export {createActualRecipes}

const nameAndPrice = () => {
    const eggsPancake = document.querySelector(".recipeDesc0");
    eggsPancake.innerHTML = "Eggs and Pancake Stack <br /> $14.00";

    const boiledEggs = document.querySelector(".recipeDesc1");
    boiledEggs.innerHTML = "Boiled Eggs <br /> $2.00/egg";

    const eggsNoodles = document.querySelector(".recipeDesc2");
    eggsNoodles.innerHTML = "Eggs with Noodles <br /> $18.00";

    const eggsBacon = document.querySelector(".recipeDesc3");
    eggsBacon.innerHTML = "Eggs and Bacon <br /> $8.00";

    const eggsBeansToast = document.querySelector(".recipeDesc4");
    eggsBeansToast.innerHTML = "Eggs with Beans and Toast <br /> $12.00";

    const eggsBenedict = document.querySelector(".recipeDesc5");
    eggsBenedict.innerHTML = "Eggs Benedict <br /> $15.00";

}

export {nameAndPrice}