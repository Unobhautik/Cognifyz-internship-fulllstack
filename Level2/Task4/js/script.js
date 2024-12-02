const form = document.getElementById('myForm');
const messages = document.getElementById('messages');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear previous messages
    messages.innerHTML = '';
    messages.style.color = 'red';

    // Get and sanitize input values
    const username = form.username.value.trim();
    const password = form.password.value.trim();
    const confirmPassword = form.confirmPassword.value.trim();

    // Validate username
    if (!username) {
        messages.innerHTML = 'Username is required.';
        return;
    }

    // Validate password strength
    if (password.length < 8) {
        messages.innerHTML = 'Password must be at least 8 characters long.';
        return;
    }

    // Validate password match
    if (password !== confirmPassword) {
        messages.innerHTML = 'Passwords do not match.';
        return;
    }

    // If all validation passes, display success message
    messages.style.color = 'green';
    messages.innerHTML = 'Form submitted successfully!';
    
    // Reset form after successful submission
    form.reset();
});
