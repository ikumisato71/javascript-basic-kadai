const button = document.getElementById("btn");
const text = document.getElementById("text");

button.addEventListener("click", () => {
  setTimeout(() => {
    text.textContent = "ボタンをクリックしました";
  }, 2000);
});
