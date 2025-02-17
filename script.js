// script.js

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login');
    const registerForm = document.getElementById('register');
    const toggleButton = document.getElementById('btn');
    const signInButton = document.querySelector('.toggle-btn[onclick="login()"]');
    const signUpButton = document.querySelector('.toggle-btn[onclick="register()"]');

    function register() {
        loginForm.style.left = '-400px';
        registerForm.style.left = '50px';
        toggleButton.style.left = '110px';
        signInButton.classList.remove('active');
        signUpButton.classList.add('active');
    }

    function login() {
        loginForm.style.left = '50px';
        registerForm.style.left = '450px';
        toggleButton.style.left = '0';
        signUpButton.classList.remove('active');
        signInButton.classList.add('active');
    }

    signInButton.addEventListener('click', login);
    signUpButton.addEventListener('click', register);

    // Local Storage Helpers
    function saveData(username, email, password) {
        const users = JSON.parse(localStorage.getItem('users') || '[]'); // Get existing users or create new
        users.push({username: username, email: email, password: password}); // add new user
        localStorage.setItem('users', JSON.stringify(users)); // save the updated list back to local storage
    }

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = loginForm.querySelector('input[type="text"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;

        if (!email || !password) {
            alert('Please fill in all fields.');
            return;
        }

        //  Simulate authentication (replace with actual server-side auth)
        const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
        const user = storedUsers.find(u => u.email === email && u.password === password);

        if (user) {
            alert('Sign in successful!');
            window.location.href = 'success.html'; // Redirect
        } else {
            alert('Invalid credentials. Please try again.');
        }
    });

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = registerForm.querySelector('input[type="text"]').value;
        const email = registerForm.querySelector('input[type="email"]').value;
        const password = registerForm.querySelector('input[type="password"]').value;

        if (!username || !email || !password) {
            alert('Please fill in all fields.');
            return;
        }

        //Save Email and password
        saveData(username, email, password);

        alert('Sign up successful!');
        window.location.href = 'success.html'; // Redirect
    });

    login();
});