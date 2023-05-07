const toggleButton = document.getElementById("toggle-button-id");
const navLinks = document.getElementById("navbar-links-id");

toggleButton.addEventListener('click', function() {
    navLinks.classList.toggle('active');
})

 console.log(toggleButton);

