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

var form = document.getElementById("form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("form-status"); // Add a div with this ID for messages
  var data = new FormData(event.target);
  
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      alert("Thanks! Your message has been sent to Indigo Kitchen.");
      form.reset();
    } else {
      alert("Oops! There was a problem submitting your form");
    }
  }).catch(error => {
    alert("Oops! There was a problem submitting your form");
  });
}
form.addEventListener("submit", handleSubmit)
