document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    // Get form data
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");
    // Perform login AJAX request and handle response
    // ...
});

document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();
    // Get form data
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    // Perform registration AJAX request and handle response
    // ...
});
