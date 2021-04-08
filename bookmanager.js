
class bookClass {
      bookid;
      name;
      author;
      price;
      rating;

 constructor(bookid, name, author,price,rating) {
      this.bookid=bookid;
      this.name = name;
      this.author = author;
      this.price =price;
      this.rating=rating;
    }
 }

//  class BookManager{
//     constructor(){
//       this.BookManager = []
//     }
//     // create a new player and save it in the collection
//     newBook(bookid,name,author,price,rating){
//       let p = new bookClass(bookid,name,author,price,rating)
//       this.BookManager.push(p)
//       return p
//     }
    
//   }
  
//   let book = new BookManager()
//   book.newBook(2,"Mark","dqdq",567,8);
//   book.newBook(3,"Roger","refe",532,5);

let book = [
    {
      bookid : 1,
      name: "Let Us C",
      author : 'yashavant kanetkar',
      price : '200',
      rating : '5',
    },
    {
        bookid: 2,
        name: "Cricket World Cup: The Indian Challenge",
        author : 'Ashis Ray',
        price : '270',
        rating : '3',
    },
    {
        bookid: 3,
        name: "My Journey",
        author : 'Dr. A.P.J. Abdul Kalam',
        price : '180',
        rating : 5,
    },
    {
        bookid: 4,
        name: "Making of New India",
        author : 'Dr. Bibek Debroy',
        price : 300,
        rating : 5,
    },
    {
        bookid: 5,
        name: "Whispers of Time",
        author : 'Dr. Krishna Saksena',
        price : '280',
        rating : 4,  
    },
]

  
function add(){
    location.assign("file:///C:/Users/jayes/OneDrive/Desktop/mini%20project/index.html");
}

function showlist(){

    
    let table= document.getElementById("table");
    for(let i=0;i<book.length;i++)
    {
        let row=`<tr>
                 <td>${book[i].bookid}</td>
                 <td>${book[i].name}</td>
                 <td>${book[i].author}</td>
                 <td>${book[i].price}</td>
                 <td>${book[i].rating}</td>
                 <td><button class= "delete-button"onclick="deleteRow(this)">delete</button></td>
        </tr>`
        table.innerHTML +=row;
    }  
    
}

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("table").deleteRow(i);
  }
  

function searchBook(){

    let search=document.getElementById("form")["books"].value;
    
    switch(search){
 
        case "name":
            let title=document.getElementById("title").value;
            searchBookByTitle(title);
            break;
        case "author":
            let author=document.getElementById("title").value;
            searchBookByAuthor(author);
            break;
        case "id":
            let id=Number('document.getElementById("tilte").value');
            searchBookById(id);
            break;
        case "price":
            let price=Number('document.getElementByPrice("tilte").value');
            searchBookByPrice(price);
            break;
    }
    
}

function searchBookByTitle(title){
    myFunction(1)
    // let table= document.getElementById("table");
   
    // for(let i=0;i<book.length;i++)
    // {
    //     if(title===book[i].name)
    //     {
    //     let row=`<tr>
    //              <td>${book[i].bookid}</td>
    //              <td>${book[i].name}</td>
    //              <td>${book[i].author}</td>
    //              <td>${book[i].price}</td>
    //              <td>${book[i].rating}</td>
    //              <td><button onclick="deleteRow(this)">delete</button></td>
    //     </tr>`
    //     table.innerHTML +=row;
    //     }
    // }

}

function searchBookByAuthor(author){
    myFunction(2)
    // let table= document.getElementById("table");
    // for(let i=0;i<book.length;i++)
    // {
    //     if(author===book[i].author)
    //     {
    //     let row=`<tr>
    //              <td>${book[i].bookid}</td>
    //              <td>${book[i].name}</td>
    //              <td>${book[i].author}</td>
    //              <td>${book[i].price}</td>
    //              <td>${book[i].rating}</td>
    //              <td><button onclick="deleteRow(this)">delete</button></td>
    //     </tr>`
    //     table.innerHTML +=row;
    //     }
    // }

}

function searchBookById(id){
    myFunction(0);
    // let table= document.getElementById("table");
    // for(let i=0;i<book.length;i++)
    // {
    //     if(id==book[i].bookid)
    //     {
    //     let row=`<tr>
    //              <td>${book[i].bookid}</td>
    //              <td>${book[i].name}</td>
    //              <td>${book[i].author}</td>
    //              <td>${book[i].price}</td>
    //              <td>${book[i].rating}</td>
    //              <td><button onclick="deleteRow(this)">delete</button></td>
    //     </tr>`
    //     table.innerHTML +=row;
    //     }
    // }
}

function searchBookByPrice(price){
    myFunction(3);

        // let table= document.getElementById("table");
        // for(let i=0;i<book.length;i++)
        // {
        //     if(price===book[i].price)
        //     {
        //     let row=`<tr>
        //              <td>${book[i].bookid}</td>
        //              <td>${book[i].name}</td>
        //              <td>${book[i].author}</td>
        //              <td>${book[i].price}</td>
        //              <td>${book[i].rating}</td>
        //              <td><button onclick="deleteRow(this)">delete</button></td>
        //     </tr>`
        //     table.innerHTML +=row;
        //     }
        // }

    }

function myFunction(n) {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("title");
        filter = input.value.toUpperCase();
        table = document.getElementById("table");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[n];
            if (td) {
              txtValue = td.textContent || td.innerText;
              if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
              } else {
                tr[i].style.display = "none";
              }
            }       
          }
}