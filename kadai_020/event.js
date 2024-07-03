const button = document.getElementById("btn");
const text = document.getElementById("text");
const clickedText = document.getElementById("text-click");

button.addEventListener("click", () => {
  text.style.display = "none";
  clickedText.style.display = "block";
});
