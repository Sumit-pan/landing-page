const images = ["./pictures1/sachin.jpg", "./"];

const imageElement = document.getElementById("slider-image");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
let currentIndex = 0;

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  imageElement.src = images[currentIndex];
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  imageElement.src = images[currentIndex];
});

imageElement.src = images[currentIndex];
