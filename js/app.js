const booklist = document.getElementById("booklist");
const form = document.getElementById("form");
const txtTitle = document.getElementById("title");
const txtAuthor = document.getElementById("author");
const txtPages = document.getElementById("pages");
const txtImageURL = document.getElementById("image");
const formBtn = document.getElementById("form-btn");
let isModify = false;
let bookModify = undefined;

if(localStorage.length === 0) localStorage.setItem('books', JSON.stringify(['nada']));
renderBookList();

function getLocalStorage(){

    let books = JSON.parse(localStorage.getItem('books'));
    return books;
}

function renderBookList(){
    let books = getLocalStorage();


    console.log(books);

    for (let b of books){
        if(b !== 'nada') createBook(b);
    }

}

function Book(title, author, pages, imageURL, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.imageURL = imageURL;
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

    if(!isModify){
        saveBook();
    }else{

        let books = getLocalStorage();

        for(let b of books){
            if(b.title === bookModify.title && b.author === bookModify.author && b.pages === bookModify.pages && b.imageURL === bookModify.imageURL){
                b.title = txtTitle.value;
                b.author = txtAuthor.value;
                b.pages = txtPages.value;
                b.imageURL = txtImageURL.value;
            }
        }

        localStorage.setItem('books', JSON.stringify(books));
        location.reload();
    }

    removeAlertForm();
    modalClose();
  }
});

function checkUrl(url){
    return url.match(/\w+\.(jpg|jpeg|gif|png|tiff|bmp)$/gi);
}

function saveBook(){
    let title = txtTitle.value;
    let author = txtAuthor.value;
    let pages = txtPages.value;
    let imageURL = txtImageURL.value;

    let book = new Book(title, author, pages, imageURL, false);

    if(!checkUrl(String(imageURL)) || imageURL === ''){
        book.imageURL = "https://cdna.artstation.com/p/assets/images/images/042/438/256/large/min-yum-pastel.jpg?1634531075";
    }

    saveInLocalStorage(book);
    createBook(book);
}

function saveInLocalStorage(book){
    let item = JSON.parse(localStorage.getItem('books'));
    item.push(book);
    localStorage.setItem('books', JSON.stringify(item));
}


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
    form.removeChild(div);
  }
  txtTitle.value = "";
  txtAuthor.value = "";
  txtPages.value = "";
  txtImageURL.value = "";
}

function createBook(
  book) {
  let divBook = document.createElement("div");
  divBook.classList.add("book");

  divBook.innerHTML = `
    <div class="img">
        <img src="${book.imageURL}" alt="">
    </div>
    <div class="content">	
        <h2>${book.title}</h2>
        <p>${book.author}</p>
        <p>${book.pages}</p>
        <div class="modify">
            <i class="fas fa-pen edit"></i>
            <i class="fas fa-trash delete"></i>
        </div>
    </div>
    `;

  divBook.querySelector('.edit').addEventListener("click", (e)=>{
    editBook(book);
  });

  divBook.querySelector('.delete').addEventListener("click", (e)=>{
    deleteBook(e, book);
  });

  booklist.appendChild(divBook);

}

function editBook(book){
    modalOpen();
    isModify= true;
    txtTitle.value = book.title;
    txtAuthor.value = book.author;
    txtPages.value = book.pages;
    txtImageURL.value = book.imageURL;
    bookModify = book;
}

function deleteBook(e, book){
    let books = getLocalStorage();

    for(let b in books){
        if(books[b].title === book.title && books[b].author === book.author && books[b].pages === book.pages && books[b].imageURL === book.imageURL){
            
            books.splice(b,1);

        }
    }
    localStorage.setItem('books', JSON.stringify(books));

    location.reload();

}
