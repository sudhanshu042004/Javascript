const dialog = document.querySelector(".dialog");
const addForm = document.querySelector(".addForm");
const formDiv = document.createElement("form");
const titleInput = document.createElement("input");
const authorInput = document.createElement("input");
const pagesInput = document.createElement("input");
const submit = document.createElement("button");
const askRead = document.createElement("input");
const label = document.createElement("label");
const shelf = document.querySelector(".shelf");
//classAdd
titleInput.classList.add("titleInput");
titleInput.placeholder = "Title";
authorInput.classList.add("authorInput");
authorInput.placeholder = "Author";
pagesInput.classList.add("pageInput");
pagesInput.type = "number";
formDiv.classList.add("form");
submit.classList.add("submit");
askRead.classList.add("askRead");
label.htmlFor="askRead";
askRead.type="checkbox";
//appenChild
dialog.appendChild(formDiv);
formDiv.appendChild(titleInput);
formDiv.appendChild(authorInput);
formDiv.appendChild(pagesInput);
formDiv.appendChild(submit);
formDiv.appendChild(askRead);
formDiv.appendChild(label);
//innerText
submit.textContent = "Submit";
label.textContent="Read";

let readValue = false;

class Book{
    constructor(title,author,page,read){
        this.title=title;
        this.author = author;
        this.page = page;
    }
}

const library = [];

function addToLibary(a, b, c, d) {
    library.push(new Book(a, b, c));
    x(library); //testing
}


// testing
function x(a) {
    console.log(a);
}

addForm.addEventListener("click", () => {
    dialog.showModal();
});

submit.addEventListener("click", (event) => {
    event.preventDefault();
    addToLibary(titleInput.value, authorInput.value, pagesInput.value);
    dialog.close();
    card();

});

function card(book) {  //create card
    //card
    const titleDiv = document.createElement("div");
    const authorDiv = document.createElement("div");
    const pagesDiv = document.createElement("div");
    const cardDiv = document.createElement("div");
    const Delete = document.createElement("button");
    const checkbox = document.createElement("input");
    const label = document.createElement("label");
    //classAdd
    titleDiv.classList.add("titleDiv");
    authorDiv.classList.add("authorDiv");
    pagesDiv.classList.add("pagesDiv");
    cardDiv.classList.add("cardDiv");
    checkbox.classList.add("checkbox");
    checkbox.type="checkbox";
    label.htmlFor="checkbox";
    //appendChild
    shelf.appendChild(cardDiv);
    cardDiv.appendChild(titleDiv);
    cardDiv.appendChild(authorDiv);
    cardDiv.appendChild(pagesDiv);
    cardDiv.appendChild(Delete);
    cardDiv.appendChild(checkbox);
    cardDiv.appendChild(label);
    Delete.textContent="delete";
    label.textContent="Read";
    if(askRead.checked){
        checkbox.checked=true;
    }
    //iterate every book
    library.map(function (item) {
        titleDiv.textContent = item.title;
        authorDiv.textContent = item.author;
        pagesDiv.textContent = item.page;
    });
    //will delete selected book
    Delete.addEventListener("click",(e)=>{
        cardDiv.style.display="none";
        x(library);
    })
}
