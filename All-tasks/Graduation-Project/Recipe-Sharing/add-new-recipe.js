    // JavaScript for Image Preview
    document.getElementById('imageUpload').addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('previewImage').src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // JavaScript for Dynamic Ingredients
    document.getElementById('ingredientList').addEventListener('input', function(event) {
        const inputElements = document.querySelectorAll('.ingredient');
        const lastInput = inputElements[inputElements.length - 1];

        if (lastInput.value !== "") {
            // Add a new empty input if the last one is not empty
            const newInput = document.createElement('input');
            newInput.type = 'text';
            newInput.className = 'form-control mb-2 ingredient';
            newInput.placeholder = `Ingredient ${inputElements.length + 1}`;
            document.getElementById('ingredientList').appendChild(newInput);
        }
    });

    // JavaScript for Dynamic Preparation Steps
    document.getElementById('preparationList').addEventListener('input', function(event) {
        const prepInputElements = document.querySelectorAll('.preparation');
        const lastPrepInput = prepInputElements[prepInputElements.length - 1];

        if (lastPrepInput.value !== "") {
            // Add a new empty input if the last one is not empty
            const newPrepInput = document.createElement('input');
            newPrepInput.type = 'text';
            newPrepInput.className = 'form-control mb-2 preparation';
            newPrepInput.placeholder = `Step ${prepInputElements.length + 1}`;
            document.getElementById('preparationList').appendChild(newPrepInput);
        }
    });










    // document.querySelector('.btn-publish').addEventListener('click', function(event) {
    //     event.preventDefault(); // Prevent the form from submitting
    
    //     // Get input values
    //     const title = document.getElementById('recipeTitle').value;
    //     const category = document.getElementById('categorySelect').value.toLowerCase().replace(" ", "_");
    //     const description = document.getElementById('description').value;
    //     const time = document.getElementById('prepTime').value;
    //     const level = document.getElementById('level').value;
    
    //     // Handle image upload
    //     const imageInput = document.getElementById('imageUpload');
    //     let image = "https://via.placeholder.com/150"; // Default image
    //     if (imageInput.files && imageInput.files[0]) {
    //         const reader = new FileReader();
    //         reader.onload = function(e) {
    //             image = e.target.result;
    //         };
    //         reader.readAsDataURL(imageInput.files[0]);
    //     }
    
    //     // Validate input (simple validation)
    //     if (!title || !description || !time || !level) {
    //         alert("Please fill in all required fields.");
    //         return;
    //     }
    
    //     // Create the new recipe object
    //     const newRecipe = {
    //         title,
    //         category,
    //         description,
    //         time,
    //         level,
    //         image
    //     };
    
    //     // Get existing recipes from localStorage
    //     const existingRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    
    //     // Append the new recipe to the existing recipes
    //     existingRecipes.push(newRecipe);
    
    //     // Save the updated recipes back to localStorage
    //     localStorage.setItem('recipes', JSON.stringify(existingRecipes));
    
    //     // Optionally redirect to the Recipes page to see the new recipe
    //     window.location.href = 'Recipes.html';
    // });
    


    document.querySelector('.btn-publish').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form submission and page reload
    
        // Get the input values
        const title = document.getElementById('recipeTitle').value;
        const category = document.getElementById('categorySelect').value.toLowerCase().replace(' ', '_');
        const description = document.getElementById('description').value;
        const time = document.getElementById('prepTime').value;
        const level = document.getElementById('level').value;
    
        // Handle image upload
        const imageInput = document.getElementById('imageUpload');
        let image = 'https://via.placeholder.com/150'; // Default image
    
        if (imageInput.files && imageInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                image = e.target.result;
                // Call the function to store recipe after the image is processed
                saveRecipe(title, category, description, time, level, image);
            };
            reader.readAsDataURL(imageInput.files[0]);
        } else {
            // No image selected, proceed with default image
            saveRecipe(title, category, description, time, level, image);
        }
    });
    
    function saveRecipe(title, category, description, time, level, image) {
        // Basic validation (make sure required fields are filled)
        if (!title || !description || !time || !level) {
            alert('Please fill in all required fields.');
            return;
        }
    
        // Create a new recipe object
        const newRecipe = {
            title,
            category,
            description,
            time,
            level,
            image
        };
    
        // Get the existing recipes from localStorage
        const existingRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    
        // Append the new recipe
        existingRecipes.push(newRecipe);
    
        // Save the updated recipes back to localStorage
        localStorage.setItem('recipes', JSON.stringify(existingRecipes));
    
        // Redirect to the Recipes page
        window.location.href = 'Recipes.html';
    }
    

