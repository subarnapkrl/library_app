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
addBookToLibrary("The Hobbit","J.r.r Tolkien","295 pages","Not read");
console.log("End OF First Book");
addBookToLibrary("Harry Potter","J.K. Rowling","999 pages"," read");
console.log("End of Second Book");

showBooks();