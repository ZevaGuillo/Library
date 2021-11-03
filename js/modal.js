const closeModal = document.getElementById("close");
const newBook = document.getElementById("new-book");
const modal = document.getElementById("modal");
const modalContainer = document.getElementById("modal-container");
const searchBook = document.getElementById("search-book");


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

searchBook.addEventListener('focus', (e) => {
  let i = e.target.nextElementSibling;
  i.style.color = '#6849ac';
})

searchBook.addEventListener('blur', (e) => {
  let i = e.target.nextElementSibling;
  i.style.color = '#966BF2';
})

searchBook.addEventListener('keyup', filterBook);

function filterBook(e){
  let filter = e.target.value;
  let h2 = document.querySelectorAll('.content h2');
  Array.from(h2).forEach((i)=>{
    if(i.textContent.toLocaleLowerCase().trim().indexOf(filter.toLocaleLowerCase()) === -1) {
      i.parentNode.parentNode.style.display = 'none';
    }else {
      i.parentNode.parentNode.style.display = '';
    }
  });
}