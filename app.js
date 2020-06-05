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

Ui.prototype.showAlert = function (message, className) {
  // Create Error Element
  const div = document.createElement("div");
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(message));

  const container = document.querySelector(".container");
  const form = document.querySelector("#book-form");
  container.insertBefore(div, form);

  // Timeout after 3sec
  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 3000);
};

// Event Listener
document.getElementById("book-form").addEventListener("submit", createBook);

// Create Book
function createBook(e) {
  // Get Form Values
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  // Create Book Object
  const book = new Book(title, author, isbn);

  // create the UI
  const ui = new Ui();

  // Validate data
  if (title === "" || author === "" || isbn === "") {
    // Error Alert
    ui.showAlert("Please Pass In All the Fields", "error");
  } else {
    // Add to Book to Ui
    ui.addBookToList(book);

    // Show Success
    ui.showAlert("Book Added", "success");

    // Clear fields
    ui.clearFields();
  }

  e.preventDefault();
}
