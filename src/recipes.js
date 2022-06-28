const createRecipes = () => {
    const content = document.querySelector('.content');

    const recipesContainer = document.createElement('div');
    recipesContainer.className = "recipesContainer";
    recipesContainer.innerText = "This is the menu page";

    content.appendChild(recipesContainer);
}

export {createRecipes};