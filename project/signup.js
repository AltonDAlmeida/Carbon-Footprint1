document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.signup-form').addEventListener('submit', async function(event) {
        event.preventDefault();  // Prevent default form submission

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Prepare the data for the backend
        const data = {
            name: name,
            email: email,
            password: password
        };

        try {
            // Send a POST request to the Flask backend
            const response = await fetch('http://localhost:5500/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            // Parse the response
            const result = await response.json();

            // Check if the signup was successful
            if (response.ok) {
                alert(result.message);  // Success message
                window.location.href = '/home.html';  // Redirect to home.html
            } else {
                alert(result.error);  // Show error message if signup fails
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred during signup.');
        }
    });
});
