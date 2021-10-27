const closeModal = document.getElementById("close");
const newBook = document.getElementById("new-book");
const modal = document.getElementById("modal");
const modalContainer = document.getElementById("modal-container");

newBook.addEventListener("click", (e) => {
  e.preventDefault();
  modalOpen();
});

function modalOpen(){
  modalContainer.style.opacity = "1";
  modalContainer.style.visibility = "visible";
  modal.classList.toggle("modal-close");
}

function modalClose() {
  modalContainer.style.opacity = "0";
  modalContainer.style.visibility = "hidden";
  modal.classList.toggle("modal-close");
  removeAlertForm();
}


closeModal.addEventListener("click", (e) => {
  modalClose();
});

window.addEventListener("click", (e) => {
  if (e.target === modalContainer) {
    modalClose();
  }
});


