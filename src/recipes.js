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
    
    const actualRecipeImages = document.createElement('div');
    actualRecipeImages.className = "actualRecipeImages";
    
    actualRecipes.appendChild(actualRecipeImages);

    let j = 0;
    while (j < 11) {
        let recipeImage = document.createElement('div');
        recipeImage.className = `recipeImage ${j}`;

        actualRecipeImages.appendChild(recipeImage);
        j ++;
    }

    const actualRecipeDesc = document.createElement('div');
    actualRecipeDesc.className = "actualRecipeDesc";
    
    actualRecipes.appendChild(actualRecipeDesc);

    let i = 0;
    while (i < 11) {
        let recipeDesc = document.createElement('div');
        recipeDesc.className = `recipeDesc ${i}`;

        actualRecipeDesc.appendChild(recipeDesc);
        i ++;
    }

}

export {createActualRecipes}