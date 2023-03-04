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
		url: "https://media.cntraveller.com/photos/611bf0b8f6bd8f17556db5e4/4:3/pass/gettyimages-1146431497.jpg",
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
