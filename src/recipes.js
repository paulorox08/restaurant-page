const createRecipes = () => {
    const content = document.querySelector('.content');
    
    const recipesText = document.createElement('div');
    recipesText.className = "recipesText";
    recipesText.innerText = "This is the menu page";

    content.appendChild(recipesText);
}

export {createRecipes};