let myLibrary=[];

class Book{
    constructor(Title,Author,Pages,Read)
    {
        this.Title=Title;
        this.Author=Author;
        this.Pages=Pages;
        this.Read=Read;
    }
}


function addBookToLibrary(title,author,pages,read)
{
   let yourBooks=new Book(title,author,pages,read);
   myLibrary.push(yourBooks);
   showBooks();
}


function showBooks()
{
    let books=document.querySelector(".books");

    //Deleting Multiple same card on submit
    let removeDiv=document.querySelectorAll(".card");
    for(let i=0;i<removeDiv.length;i++)
    {
        removeDiv[i].remove();
    }

    // LOOPING AND DISPLAYING CARD
    let index=0;
    myLibrary.forEach(myLib=>{
        let card=document.createElement("div");
        card.classList.add("card");
        books.appendChild(card);

        //Creating Remove Book Button

        let removeBookBtn=document.createElement("button");
        removeBookBtn.classList.add("remove-book-button");
        removeBookBtn.textContent="Remove";
        console.log("Show me my current array ",myLibrary);

        //Link the data attribute of the remove button to the array and card
        removeBookBtn.dataset.linkedArray=index;
        
        console.log("Show me the dataset link back to the array",removeBookBtn.dataset.linkedArray);
        card.appendChild(removeBookBtn);

        removeBookBtn.addEventListener("click",function()
        {
            let retrieveBookToRemove=removeBookBtn.dataset.linkedArray;
            console.log("Trying to remove array to int",parseInt(retrieveBookToRemove));
            myLibrary.splice(parseInt(retrieveBookToRemove),1);
            card.remove();
            showBooks();
        })

        //CREATE TOGGLE BUTTON
        let readStatusButton=document.createElement("button");
        readStatusButton.classList.add("read-status-btn");
        readStatusButton.textContent="Change Status";

        //LINK THE DATA ATTRIBUTE OF THE TOGGLE BUTTON TO THE ARRAY AND THE CARD
        readStatusButton.dataset.linkedArray=index;
        console.log("Show the dataset link back to the array",readStatusButton.dataset.linkedArray);
        card.appendChild(readStatusButton);

        readStatusButton.addEventListener("click",toggleReadStatus);

        function toggleReadStatus()
        {
            let retreiveBookToToggle=readStatusButton.dataset.linkedArray;
            Book.prototype=Object.create(Book.prototype);
            let toggleBook=new Book();
            console.log("What is the toggle initial value?",myLibrary[parseInt(retreiveBookToToggle)].Read);

            if((myLibrary[parseInt(retreiveBookToToggle)].Read)=="Already Read")
            {
                toggleBook.Read="Not Yet";
                myLibrary[parseInt(retreiveBookToToggle)].Read=toggleBook.Read;
            }else if((myLibrary[parseInt(retreiveBookToToggle)].Read)=="Not Yet"){
                toggleBook.Read="Already Read";
                myLibrary[parseInt(retreiveBookToToggle)].Read=toggleBook.Read;
            }
            showBooks();
        }

        for(let key in myLib)
        {
            console.log(`${key}:${myLib[key]}`);

            let parag=document.createElement("p");
            parag.textContent=(`${key} : ${myLib[key]}`);
            card.appendChild(parag);

        }
        index++;
    })
}

let addNewBookBtn=document.querySelector(".add-book-btn");
addNewBookBtn.addEventListener("click",function()
{
    document.querySelector("#add-book-form").style.display="";
})

let submitBtn=document.querySelector(".submitBtn");
submitBtn.addEventListener("click",takeTheForm);

function takeTheForm()
{
    let Title=document.getElementById("Title").value;
    let Author=document.getElementById("Author").value;
    let Pages=document.getElementById("Pages").value;
    let Read=document.getElementById("Read").value;

    // if(Read.checked)
    // {
    //     Status=Read.value;

    // }
    // else if(NotRead.checked)
    // {
    //     Status=NotRead.value;
    // }

    if(Title=="" || Author=="" || Pages=="" || Read=="")
    {
        return;
    }

    addBookToLibrary(Title,Author,Pages,Read);

    document.querySelector("#add-book").reset();
}

let resetBtn=document.querySelector(".resetBtn");
resetBtn.addEventListener("click",function()
{
    document.querySelector("#add-book").reset();
})


// addBookToLibrary("The Hobbit","J.R.R Tolkien","295","Not Read");
// addBookToLibrary("Harry Potter","J.K. Rowling","2950","Read");
// console.log(myLibrary);
