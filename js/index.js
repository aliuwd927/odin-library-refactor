const topContainer = (() => {
    
    const addButtonElem = document.querySelector('.addBookBtn');
    
    addButtonElem.addEventListener('click',(e)=>{
        return topFormContainer.formDisplay(e);
    });
   
    return{
        addButtonElem
    };
})();

const topFormContainer = (() =>{
   
    const formContainer = document.querySelector('.formContainer');
    
    const formDisplay = (e) =>{
 
        let elemSibling = e.srcElement.nextElementSibling;
        
        if(elemSibling === formContainer){
            formContainer.classList.toggle('show');
        }else{
            return false;
        };
    };

    const submitBtn = document.querySelector('.addBook');

    submitBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        bookInfo.bookInfoValue();
        topFormContainer.formContainerReset();
        renderToDom.displayToDom();
        //renderToDom.displayBottomBorder();
    });

    const formContainerReset = () =>{
        document.querySelector('.title').value = '';
        document.querySelector('.author').value = '';
        document.querySelector('.pages').value = '';
    };

    return{
        formContainer,
        formDisplay,
        submitBtn,
        formContainerReset
    };
})();

const bookInfo = (() =>{

    const bookInfoValue = () =>{

        const titleBook = document.querySelector('.title').value;
        const authorBook = document.querySelector('.author').value;
        const pageOfBook = document.querySelector('.pages').value;

        addToLibrary.listOfBooks.push(new AddToList(titleBook,authorBook,pageOfBook));

    };
    
    return{
        bookInfoValue
    };

})();

function AddToList (title,author,page) {
    this.title = title;
    this.author = author;
    this.page = page;
}

const addToLibrary = (() =>{

    const listOfBooks = [];

    return{
        listOfBooks,
    }

})();

const renderToDom = (() =>{

    const displayToDom = () => {
        createBook.renderItems(addToLibrary.listOfBooks);
    };

    return{
        displayToDom
    };

})();

//Have displayToDom trigger a new fuctino to create the book with createElement.
const createBook = (() =>{

    const renderItems = (renderBkItems) => {

        const btmContainer = document.querySelector('.bottomContainer');

        //create container div for book <div class='bookContainer'></div>
        const bookContainerDiv = document.createElement('div');

        //everything below is within the bookContainer div
        const titleDiv = document.createElement('div');
        const authorDiv = document.createElement('div');
        const pageDiv = document.createElement('div');
        const readBtn = document.createElement('button');
        const notReadBtn = document.createElement('button');
        const removeBtn = document.createElement('button');

        //adding css
        bookContainerDiv.classList.add('booksAdded');
        titleDiv.classList.add('tiles');
        authorDiv.classList.add('authors');
        pageDiv.classList.add('pages');
        readBtn.classList.add('btnRead');
        notReadBtn.classList.add('notReadBtn');
        removeBtn.classList.add('removeBtn');

        //render text elements.
        renderBkItems.forEach((books) =>{
        titleDiv.textContent = `${books.title}`;
        authorDiv.textContent = `${books.author}`;
        pageDiv.textContent = `${books.page}`;
        readBtn.textContent = `Read`;
        notReadBtn.textContent = `Not Read`;
        removeBtn.textContent = `Remove`;
        });
        

        //appending child to the bookContainer
        bookContainerDiv.appendChild(titleDiv);
        bookContainerDiv.appendChild(authorDiv);
        bookContainerDiv.appendChild(pageDiv);
        bookContainerDiv.appendChild(readBtn);
        bookContainerDiv.appendChild(notReadBtn);
        bookContainerDiv.appendChild(removeBtn);

        //append bookContainer and everything within the the parent
        btmContainer.appendChild(bookContainerDiv);

        }
    
    return{
        renderItems
    };
})();