// Get the current page URL
const currentPage = window.location.href;

// Get all the navigation links
const navLinks = document.querySelectorAll("nav a");

// Loop through the links and add the "active" class to the current page link
navLinks.forEach(function(link) {
	if (link.href === currentPage) {
		link.classList.add("active");
	}
});

// Add a click event listener to all links that display a message
navLinks.forEach(function(link) {
	link.addEventListener("click", function(event) {
		event.preventDefault();
		alert("You clicked " + link.innerHTML);
	});
});
