const booklist = document.getElementById("booklist");
const form = document.getElementById("form");
const txtTitle = document.getElementById("title");
const txtAuthor = document.getElementById("author");
const txtPages = document.getElementById("pages");
const txtImageURL = document.getElementById("image");
const formBtn = document.getElementById("form-btn");

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

formBtn.addEventListener("click", (e) => {
  if (
    txtTitle.value === "" ||
    txtAuthor.value === "" ||
    txtPages.value === ""
  ) {
    alertForm();
  } else {
    let title = txtTitle.value;
    let author = txtAuthor.value;
    let pages = txtPages.value;

    let book = new Book(title, author, pages, false);

    console.log(book);
    createBook(book);
    removeAlertForm();
    Mclose();
  }
});

function alertForm() {
  let div = document.createElement("div");
  div.classList.add("alert");
  div.innerText = "Complete todos los campos";

  if (form.children[0].textContent === "Complete todos los campos") {
    return;
  }

  form.insertBefore(div, txtTitle.parentNode);
}

function removeAlertForm() {
  let div = form.children[0];
  if (div.textContent === "Complete todos los campos") {
    console.log("hola");
    form.removeChild(div);
  }
  txtTitle.value = "";
  txtAuthor.value = "";
  txtPages.value = "";
  txtImageURL.value = "";
}

function createBook(
  book,
  img = "https://cdna.artstation.com/p/assets/images/images/042/438/256/large/min-yum-pastel.jpg?1634531075"
) {
  let divBook = document.createElement("div");
  divBook.classList.add("book");

  divBook.innerHTML = `
    <div class="img">
        <img src="${img}" alt="">
    </div>
    <div class="content">	
        <h2>${book.title}</h2>
        <p>${book.author}</p>
        <p>${book.pages}</p>
    </div>
    `;

  booklist.appendChild(divBook);
}
