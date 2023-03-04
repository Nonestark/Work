const photos = [
	{
		url: "https://cdn.pixabay.com/photo/2017/08/06/20/53/nature-2595919_1280.jpg",
		alt: "Mountain Landscape"
	},
	{
		url: "https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_1280.jpg",
		alt: "Elephant in the Wild"
	},
	{
		url: "https://cdn.pixabay.com/photo/2015/09/18/20/21/forest-948384_1280.jpg",
		alt: "Misty Forest"
	},
	{
		url: "https://cdn.pixabay.com/photo/2017/03/02/19/52/panorama-2117310_1280.jpg",
		alt: "Sunset over the Ocean"
	}
];

const exploreButton = document.getElementById("explore-button");
const photoGallery = document.getElementById("photo-gallery");

exploreButton.addEventListener("click", function() {
	photoGallery.innerHTML = "";
	photos.forEach(function(photo) {
		const image = document.createElement("img");
		image.src = photo.url;
		image.alt = photo.alt;
		photoGallery.appendChild(image);
	});
});
