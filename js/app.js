const closeModal = document.getElementById("close");
const newBook = document.getElementById("new-book");
const modal = document.getElementById("modal");
const modalContainer = document.getElementById("modal-container");

newBook.addEventListener("click", (e) => {
  e.preventDefault();
  modalContainer.style.opacity = "1";
  modalContainer.style.visibility = "visible";
  modal.classList.toggle("modal-close");
});

closeModal.addEventListener("click", (e) => {
  modalContainer.style.opacity = "0";
  modalContainer.style.visibility = "hidden";
  modal.classList.toggle("modal-close");
});

window.addEventListener("click", (e) => {
  if (e.target === modalContainer) {
    modalContainer.style.opacity = "0";
    modalContainer.style.visibility = "hidden";
    modal.classList.toggle("modal-close");
  }
});

