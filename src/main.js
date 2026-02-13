const shareBtn = document.getElementById("share-btn");
const footer = document.getElementById("footer");

shareBtn.addEventListener("click", () => {
  footer.classList.toggle("bg-dark-graish-blue");
});
