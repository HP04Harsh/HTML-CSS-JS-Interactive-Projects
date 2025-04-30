// Get the search input and search icon
const searchInput = document.getElementById('searchInput');
const searchIcon = document.getElementById('searchIcon');

// Add a click event listener to the search icon
searchIcon.addEventListener('click', () => {
    // Toggle the 'show' class to animate the input field
    searchInput.classList.toggle('show');
});
