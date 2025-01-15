const images = [
  "IMG_7029.jpeg",
  "IMG_8681.JPG",
  "IMG_8695.jpeg",
  "IMG_9390.jpeg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = "img/" + chosenImage;

document.body.appendChild(bgImage);
