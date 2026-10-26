const openButton = document.querySelector("#openLetter");
const closeButton = document.querySelector("#closeLetter");
const letter = document.querySelector("#letter");

openButton.addEventListener("click", () => {
  letter.classList.add("open");
  letter.setAttribute("aria-hidden", "false");
  openButton.textContent = "Carta aberta 💖";
  letter.scrollIntoView({ behavior: "smooth", block: "center" });
});

closeButton.addEventListener("click", () => {
  letter.classList.remove("open");
  letter.setAttribute("aria-hidden", "true");
  openButton.textContent = "Abrir minha carta 💌";
  openButton.focus();
});
