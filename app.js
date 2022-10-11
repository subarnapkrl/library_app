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
    let bookShow=document.querySelector('.list');

    //Deleting every existing card before looping over again

    let removeDivs=document.querySelectorAll('.bookz');

    for(let i=0;i<removeDivs.length;i++)
    {
        removeDivs[i].remove();
    }

    myLibrary.forEach((myLib)=>{
        let card=document.createElement('div');
        card.classList.add('bookz');
        bookShow.appendChild(card);

        for(let reqBook in myLib)
        {
            console.log(`${reqBook}: ${myLib[reqBook]}`);

            let paragraph=document.createElement('p');
            paragraph.textContent=(`${reqBook}: ${myLib[reqBook]}`);
            card.appendChild(paragraph);
        }

    })
}
// addBookToLibrary("The Hobbit","J.r.r Tolkien","295 pages","Not read");
// console.log("End OF First Book");
// addBookToLibrary("Harry Potter","J.K. Rowling","999 pages"," read");
// console.log("End of Second Book");

// showBooks();


let addBtn=document.querySelector('.add-book-button');

addBtn.addEventListener('click',function()
{
    document.querySelector('.form').style.display='';
})

let submitBtn=document.querySelector('#submitBtn');

submitBtn.addEventListener('click',submitForm);

function submitForm(e)
{
    let Title=document.querySelector('#bookTitle').value;
    let Author=document.querySelector('#authorName').value;
    let Pages=document.querySelector('#pages').value;
    let Status=document.querySelector('#status').value;

    if((Title=="") || (Author=="") || (Pages=="") || (Status==""))
    {
        alert("You have to fill up all the details!");
    }

    addBookToLibrary(Title,Author,Pages,Status);
   
    
    e.preventDefault();
    document.querySelector('.form').reset();
    
}

let resetBtn=document.querySelector('#resetBtn');
resetBtn.addEventListener('click',function()
{
    
    document.querySelector('.form').reset();
})