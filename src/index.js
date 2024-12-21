document.addEventListener("DOMContentLoaded", () => {
    // ** Challenge 1: Fetch and Display Dog Images **
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"; // API URL for random dog images
    const imageContainer = document.getElementById("dog-image-container"); // Container for displaying images
  
    // Fetch dog images
    fetch(imgUrl)
      .then((response) => response.json()) // Parse response as JSON
      .then((data) => {
        data.message.forEach((imageUrl) => {
          // For each image URL in the array
          const img = document.createElement("img"); // Create an image element
          img.src = imageUrl; // Set the image source
          img.alt = "A cute dog"; // Add alt text for accessibility
          img.style.width = "200px"; // Set a fixed width for the images
          img.style.margin = "10px"; // Add spacing between images
          imageContainer.appendChild(img); // Add the image to the container in the DOM
        });
      })
      .catch((error) => console.error("Error fetching images:", error)); // Handle errors gracefully
  
    // ** Challenge 2: Fetch and Display Dog Breeds **
    const breedUrl = "https://dog.ceo/api/breeds/list/all"; // API URL for dog breeds
    const breedList = document.getElementById("dog-breeds"); // List container for breeds
  
    // Fetch dog breeds
    fetch(breedUrl)
      .then((response) => response.json()) // Parse response as JSON
      .then((data) => {
        const breeds = data.message; // Extract breeds from response data
        for (let breed in breeds) {
          // Loop through each breed
          const li = document.createElement("li"); // Create a list item for each breed
          li.innerText = breed; // Set the breed name as the text
          breedList.appendChild(li); // Add the list item to the breed list in the DOM
        }
      })
      .catch((error) => console.error("Error fetching breeds:", error)); // Handle errors gracefully
  
    // ** Challenge 3: Change Font Color on Click **
    breedList.addEventListener("click", (event) => {
      // Add a click event listener to the breed list
      if (event.target.tagName === "LI") {
        // Check if the clicked element is a list item
        event.target.style.color = "blue"; // Change the font color to blue
      }
    });
  
    // ** Challenge 4: Filter Breeds by Letter **
    const breedDropdown = document.getElementById("breed-dropdown"); // Dropdown for selecting letters
  
    breedDropdown.addEventListener("change", (event) => {
      // Add a change event listener to the dropdown
      const selectedLetter = event.target.value; // Get the selected letter
      const breeds = breedList.querySelectorAll("li"); // Get all breed list items
  
      breeds.forEach((li) => {
        // Loop through each list item
        if (li.innerText.startsWith(selectedLetter)) {
          // Check if the breed starts with the selected letter
          li.style.display = ""; // Show the breed if it matches
        } else {
          li.style.display = "none"; // Hide the breed if it doesn't match
        }
      });
    });
  });
  