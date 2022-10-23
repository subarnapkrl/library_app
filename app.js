let myLibrary=[];

class Book{
    constructor(Title,Author,Pages,Status)
    {
        this.Title=Title;
        this.Author=Author;
        this.Pages=Pages;
        this.Status=Status;
    }
}


function addBookToLibrary(title,author,pages,status)
{
   let yourBooks=new Book(title,author,pages,status);
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
        index++;
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

        for(let key in myLib)
        {
            console.log(`${key}:${myLib[key]}`);

            let parag=document.createElement("p");
            parag.textContent=(`${key} : ${myLib[key]}`);
            card.appendChild(parag);

        }
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
    let Status;
    let Read=document.getElementById("Read");
    let NotRead=document.getElementById("NotRead");


    if(Read.checked)
    {
        Status=Read.value;

    }
    else if(NotRead.checked)
    {
        Status=NotRead.value;
    }

    if(Title=="" || Author=="" || Pages=="" || Status=="")
    {
        return;
    }

    addBookToLibrary(Title,Author,Pages,Status);

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
