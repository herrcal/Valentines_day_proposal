// script.js

// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'yes') {
        // Flash colors
        flashColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayCatHug(); // Display the hello-kitty-hug.gif
        });
    } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'You sure?'; 
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by  * 2px
        yesButton.style.fontSize = newSize + 'px';
    } else {
        // If neither "Yes" nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
}

// Function to flash colors and then execute a callback function
function flashColors(callback) {
    var colors = ['#f9ade3', '#f573d0', '#c81eb0', '#cc1a7b', '#d1154b', '#cc1a7b', '#c81eb0'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the kitty-heart-arrow.gif initially
function displayCat() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat
    var catImage = new Image();
    // Set the source (file path) for the cat image
    catImage.src = 'kitty-heart-arrow.gif'; // Assuming the cat image is named "kitty-heart-arrow.gif"
    // Set alternative text for the image (for accessibility)
    catImage.alt = 'Cat';
    // When the cat image is fully loaded, add it to the image container
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

// Function to display the hello-kitty-hug.gif
function displayCatHug() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the hello-kitty-hug
    var catHugImage = new Image();
    // Set the source (file path) for the cat-heart image
    catHugImage.src = 'hello-kitty-hug.gif'; // Assuming the hello-kitty-hug image is named "hello-kitty-hug.gif"
    // Set alternative text for the image (for accessibility)
    catHugImage.alt = 'Cat Hug';
    // When the hello-kitty-hug image is fully loaded, add it to the image container
    catHugImage.onload = function() {
        imageContainer.appendChild(catHugImage);
        // Hide the options container
        document.getElementById('options').style.display = 'none';
    };
}

// Display the kitty-heart-arrow.gif initially
displayCat();