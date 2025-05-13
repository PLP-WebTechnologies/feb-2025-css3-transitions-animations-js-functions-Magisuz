// Trigger CSS animation
document.getElementById('animateBtn').addEventListener('click', () => {
    const box = document.getElementById('box');
    box.classList.add('animate');
    // Remove class after animation completes to allow retriggering
    setTimeout(() => box.classList.remove('animate'), 1000);
});

// Store and retrieve username using localStorage
document.getElementById('saveBtn').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    if (username) {
        localStorage.setItem('username', username);
        displayUsername();
    }
});

// Display stored username
function displayUsername() {
    const displayName = document.getElementById('displayName');
    const username = localStorage.getItem('username');
    displayName.textContent = username || 'None';
}

// Load username on page load
document.addEventListener('DOMContentLoaded', displayUsername);