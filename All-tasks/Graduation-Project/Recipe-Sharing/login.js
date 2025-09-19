// Get references to the form elements
const loginForm = document.querySelector('.login-card form');
const emailInput = loginForm.querySelector('input[id="email"]');
const passwordInput = loginForm.querySelector('input[id="password"]');

// Add an event listener to the form's submit event
loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Validate the input fields
    if (!emailInput.value || !passwordInput.value) {
        alert('Please fill in all required fields.');
        return;
    }

    // Retrieve the registration data from local storage (if applicable)
    const storedRegistrationData = localStorage.getItem('registrationData');
    if (storedRegistrationData) {
        registrationData = JSON.parse(storedRegistrationData);
    }

    // Check if the entered credentials match the stored data
    if (emailInput.value === registrationData.email && passwordInput.value === registrationData.password) {
        // Login successful, redirect to the home page (adjust the URL as needed)
        window.location.href = 'Index.html';
    } else {
        alert('Invalid email or password.');
    }
});