
class Book {
    constructor(bookid, name, author,price,rating) {
        this.bookid=bookid;
        this.name = name;
        this.author = author;
        this.price =price;
        this.rating=rating;
    }
}

function home(){
    location.assign("file:///C:/Users/jayes/OneDrive/Desktop/mini%20project/miniproject.html");
}

function getDetails(){
    let bookid=document.getElementById("bid").value;
    let name=document.getElementById("bname").value;
    let author=document.getElementById("aname").value;
    let price=document.getElementById("price").value;
    let rating=document.getElementById("rating").value;

    let book = new Book(bookid,name,author,price,rating);

    let table= document.getElementById("tables");
    
        let row=`<tr>
                 <td>${book.bookid}</td>
                 <td>${book.name}</td>
                 <td>${book.author}</td>
                 <td>${book.price}</td>
                 <td>${book.rating}</td>
                 <td><button class="delete-button" onclick="deleteRow(this)">delete</button></td>
        </tr>`
        tables.innerHTML +=row;
        
}

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("tables").deleteRow(i);
  }