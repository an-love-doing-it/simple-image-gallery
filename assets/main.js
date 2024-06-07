// Toggle dark layer on the preview element via button
let darken_button = document.getElementById("darken");
let lighten_button = document.getElementById("lighten");
let dark_layer = document.getElementById("layer");

darken_button.addEventListener("click", () => {
  darken_button.style.display = "none";
  lighten_button.style.display = "inline";
  dark_layer.style.display = "block";
});

lighten_button.addEventListener("click", () => {
  darken_button.style.display = "inline";
  lighten_button.style.display = "none";
  dark_layer.style.display = "none";
});

// Changing image
let images = document.querySelectorAll("#gallery img");
let imgLinks = [
  "./image/pic1.jpg",
  "./image/pic2.jpg",
  "./image/pic3.jpg",
  "./image/pic4.jpg",
  "./image/pic5.jpg",
];
let previewImage = document.querySelector("#preview img");

for (let image of images) {
  image.addEventListener("click", (e) => {
    previewImage.src = e.target.src;
  });
}
