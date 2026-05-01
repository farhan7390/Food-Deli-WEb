// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navMenu = document.getElementById('nav-menu');
    const navButton = document.getElementById('nav-button');

    // Toggle Mobile Menu
    menuIcon.addEventListener('click', () => {
        navMenu.classList.toggle('active');

        // Change icon from 'menu' to 'x' when open
        if (navMenu.classList.contains('active')) {
            menuIcon.classList.replace('bx-menu', 'bx-x');
        } else {
            menuIcon.classList.replace('bx-x', 'bx-menu');
        }
    });

    // Close menu when a link is clicked
    document.querySelectorAll('#nav-menu li a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuIcon.classList.replace('bx-x', 'bx-menu');
        });
    });
});

const dropBtn = document.querySelector('.dropbtn');
const dropdownParent = document.querySelector('.dropdown');

dropBtn.addEventListener('click', (e) => {
    // Only apply this logic on mobile screens
    if (window.innerWidth < 992) {
        e.preventDefault(); // Stop page jump
        dropdownParent.classList.toggle('active');

        // Optional: Rotate the chevron icon when open
        const icon = dropBtn.querySelector('i');
        icon.style.transform = dropdownParent.classList.contains('active')
            ? 'rotate(180deg)'
            : 'rotate(0deg)';
    }
});

// Add this to your script.js
const menuToggle = document.querySelector('.dropbtn');
const parentLi = document.querySelector('.dropdown');

menuToggle.addEventListener('click', function (e) {
    if (window.innerWidth < 992) {
        e.preventDefault();
        parentLi.classList.toggle('active');
    }
});

const form = document.querySelector('form');
const data = new FormData(form);
const value = Object.fromEntries(data.entries()); // Converts FormData to a plain JS Object

fetch("https://formspree.io/f/your_id", {
  method: "POST",
  body: JSON.stringify(value), // Now it's a valid JSON string
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});
