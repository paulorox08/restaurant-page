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
    eggsPancake.innerText = "Eggs and Pancake Stack $18.00";

    const boiledEggs = document.querySelector(".recipeDesc1");
    boiledEggs.innerText = "Boiled Eggs";

    const eggsNoodles = document.querySelector(".recipeDesc2");
    eggsNoodles.innerText = "Eggs with Noodles";

    const eggsBacon = document.querySelector(".recipeDesc3");
    eggsBacon.innerText = "Eggs and Bacon";

    const eggsBeansToast = document.querySelector(".recipeDesc4");
    eggsBeansToast.innerText = "Eggs with Beans and Toast";

    const eggsBenedict = document.querySelector(".recipeDesc5");
    eggsBenedict.innerText = "Eggs Benedict";

}

export {nameAndPrice}