// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function Ui() {}

Ui.prototype.addBookToList = function (book) {
  const list = document.getElementById("book-list");
  //   Create Elelemt
  const row = document.createElement("tr");

  //   Insert Columns
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete">X</a></td>
  `;
  list.appendChild(row);
};

Ui.prototype.clearFields = function () {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

// Event Listener
document.getElementById("book-form").addEventListener("submit", createBook);

// Create Book
function createBook(e) {
  // Get Form Values
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;
  console.log(title, author, isbn);

  // Create Book Object
  const book = new Book(title, author, isbn);
  console.log(book);

  // create the UI
  const ui = new Ui();

  // Add to Book to Ui
  ui.addBookToList(book);

  // Clear fields
  ui.clearFields();

  e.preventDefault();
}
