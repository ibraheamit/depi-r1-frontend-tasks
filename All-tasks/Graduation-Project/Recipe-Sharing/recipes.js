document.addEventListener("DOMContentLoaded", function () {
  const tabLinks = document.querySelectorAll(".tab-link");
  const tabs = document.querySelectorAll(".tab");

  tabLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Remove active class from all tabs and tab links
      tabLinks.forEach((link) => link.classList.remove("active"));
      tabs.forEach((tab) => tab.classList.remove("active"));

      // Add active class to the clicked tab and the corresponding tab content
      this.classList.add("active");
      const target = document.getElementById(this.dataset.target);
      target.classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const categories = {
    breakfast: document.querySelector("#breakfast .live-cards"),
    main_course: document.querySelector("#main_course .live-cards"),
    dinner: document.querySelector("#dinner .live-cards"),
    dessert: document.querySelector("#dessert .live-cards"),
  };

  // Retrieve the recipes from localStorage
  const recipes = JSON.parse(localStorage.getItem("recipes")) || [];

  // Check if recipes exist
  if (recipes.length === 0) {
    console.log("No recipes found.");
    return;
  }

  // Loop through the recipes and create the cards in the appropriate category
  recipes.forEach((recipe) => {
    const categoryContainer = categories[recipe.category];

    // Make sure the category exists in the DOM
    if (!categoryContainer) {
      console.error(`Category ${recipe.category} does not exist in the DOM.`);
      return;
    }

    // Create a new card element
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
          <img src="${recipe.image}" alt="Recipe Image" class="card-img">
          <div class="card-content">
              <h5>${recipe.title}</h5>
              <p class="description">${recipe.description}</p>
              <div class="hidden-text">
                  <p>Total time: ${recipe.time}</p>
                  <p>Difficulty: ${recipe.level}</p>
              </div>
              <a href="#" class="button">Details</a>
          </div>
      `;

    // Append the card to the appropriate category container
    categoryContainer.appendChild(card);
  });
});
