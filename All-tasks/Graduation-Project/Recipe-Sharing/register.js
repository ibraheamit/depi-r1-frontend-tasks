// Get references to the form elements
const registerForm = document.querySelector('.account-box form');
const usernameInput = registerForm.querySelector('input[placeholder="Username"]');
const emailInput = registerForm.querySelector('input[placeholder="Email Address"]');
const passwordInput = registerForm.querySelector('input[placeholder="Password"]');
const termsCheckbox = registerForm.querySelector('input[id="terms"]');

// Create an object to store the registration data
let registrationData = {};

// Add an event listener to the form's submit event
registerForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Validate the input fields and checkbox
    if (!usernameInput.value || !emailInput.value || !passwordInput.value || !termsCheckbox.checked) {
        alert('Please fill in all required fields and agree to the terms.');
        return;
    }

    // Save the user's input values to the registrationData object
    registrationData = {
        username: usernameInput.value,
        email: emailInput.value,
        password: passwordInput.value
    };

    // Optionally, store the registrationData object in local storage for persistence
    localStorage.setItem('registrationData', JSON.stringify(registrationData));

    // Redirect to the login page (adjust the URL as needed)
    // window.location.href = 'Login.html';
    setTimeout(() => {
        window.location.href = 'Login.html';
    }, 500);
    
});