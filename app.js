let myLibrary=[];

function Book(Title,Author,Pages,Status)
{
    this.Title=Title;
    this.Author=Author;
    this.Pages=Pages;
    this.Status=Status;
    

}
function addBookToLibrary(title,author,page,status)
{
    let newBook=new Book(title,author,page,status);
    myLibrary.push(newBook);
    displayBooks();
    console.log(myLibrary);
}

let showDiv=document.querySelector(".yourBooks");
let addBookBtn=document.querySelector(".dispForm");

addBookBtn.addEventListener("click",function(){
    document.querySelector(".form").style.display="";
})

function displayBooks()
{
    let index=0;
    
    removeBookCards();

    myLibrary.forEach((book)=>{

      
      let bookCard=document.createElement("div");
      bookCard.classList.add(".card");
      let bookTitle=document.createElement("h2");
      let bookAuthor=document.createElement("h2");
      let bookPages=document.createElement("h2");
      let bookStatus=document.createElement("h2");


      let bookDeleteBtn=document.createElement("button");
      bookDeleteBtn.classList.add("Delbttn");
      
      let bookDeleteBtnText=document.createTextNode("Delete");
      bookDeleteBtn.appendChild(bookDeleteBtnText);

      let statusModifyBtn=document.createElement("button");
      statusModifyBtn.classList.add("Modbttn");
      
      let statusModifyBtnText=document.createTextNode("Read/Unread");
      statusModifyBtn.appendChild(statusModifyBtnText);

      bookTitle.textContent=`Title:- ${book.Title}`;
      bookAuthor.textContent=`Author:- ${book.Author}`;
      bookPages.textContent=`Pages:- ${book.Pages}`;
      bookStatus.innerText=`Status:- ${book.Status}`;

    
    

      bookCard.appendChild(bookTitle);
      bookCard.appendChild(bookAuthor);
      bookCard.appendChild(bookPages);
      bookCard.appendChild(bookStatus);
      bookCard.appendChild(bookDeleteBtn);
      bookCard.appendChild(statusModifyBtn);


      

      showDiv.appendChild(bookCard);

        

      bookDeleteBtn.dataset.linkedArray=index;
        bookDeleteBtn.addEventListener("click",function()
        {
            let retrieveBookToRemove=bookDeleteBtn.dataset.linkedArray;
            console.log(bookDeleteBtn.dataset.linkedArray)
            console.log("Trying to remove array to int",parseInt(retrieveBookToRemove));
            myLibrary.splice(parseInt(retrieveBookToRemove),1);
            bookCard.remove();
            displayBooks();
        })

        statusModifyBtn.dataset.linkedArray=index;

        statusModifyBtn.addEventListener("click",function()
        {
            let retrieveBookToRemove=statusModifyBtn.dataset.linkedArray;

            Book.prototype=Object.create(Book.prototype);
            let toggleBook=new Book();
            console.log("What is the toggle initial value?",myLibrary[parseInt(retrieveBookToRemove)].Status);

            if(myLibrary[parseInt(retrieveBookToRemove)].Status=="Already Read")
            {
                toggleBook.Status="Not Read Yet";
                myLibrary[parseInt(retrieveBookToRemove)].Status=toggleBook.Status;
            }else if(myLibrary[parseInt(retrieveBookToRemove)].Status=="Not Read Yet"){
                toggleBook.Status="Already Read";
                myLibrary[parseInt(retrieveBookToRemove)].Status=toggleBook.Status;
            }

            displayBooks();
        })

       
        index++;
       
    })
    

    
}

function removeBookCards()
{
    
    while(showDiv.firstChild)
    {
        showDiv.removeChild(showDiv.lastChild);
    }
}
let submitBtn=document.querySelector("#submitBtn");

      submitBtn.addEventListener("click",submitFunc);
      

      function submitFunc(e)
      {
        event.preventDefault();
        let Title=document.getElementById("name").value;
        let Author=document.getElementById("author").value;
        let Pages=document.getElementById("pages").value;
        let Status=document.getElementById("read").value;
        

        if(Title=="" || Author=="" || Pages=="" || Status=="")
        {
            alert("Please you have to complete all details to proceed!");
            return;
        }
    
        addBookToLibrary(Title,Author,Pages,Status);

        document.querySelector(".form").reset();
      }

      
   


