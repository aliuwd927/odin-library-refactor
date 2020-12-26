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
/*
function AddToList (title,author,page) {
    this.title = title;
    this.author = author;
    this.page = page;
}
*/

class AddToList{
    constructor(title,author,page){
        this.title = title;
        this.author = author;
        this.page = page;
    };
};

const addToLibrary = (() =>{

    const listOfBooks = [];

    return{
        listOfBooks,
    }

})();

const renderToDom = (() =>{

    const displayToDom = () => {
        removeChild();
        for(let i = 0; i < addToLibrary.listOfBooks.length; i++){
            createBook.renderItems(addToLibrary.listOfBooks[i]);
        };
      };

      const removeChild = () => {
        const btmContainer = document.querySelector('.bottomContainer');
        while(btmContainer.firstChild) {
          btmContainer.removeChild(btmContainer.firstChild);

        };
      };

    return{
        displayToDom,
        removeChild,
    };

})();

//Have displayToDom trigger a new function to create the books with createElement.
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
        const status = document.createElement('div')

        //adding css
        bookContainerDiv.classList.add('booksAdded');
        titleDiv.classList.add('tiles');
        authorDiv.classList.add('authors');
        pageDiv.classList.add('pages');
        readBtn.classList.add('btnRead');
        notReadBtn.classList.add('notReadBtn');
        removeBtn.classList.add('removeBtn');
        status.classList.add('status');

        //render text elements.
        titleDiv.textContent = `Title : ${renderBkItems.title}`;
        authorDiv.textContent = `Author : ${renderBkItems.author}`;
        pageDiv.textContent = `Pages : ${renderBkItems.page}`;
        readBtn.textContent = `Read`;
        notReadBtn.textContent = `Not Read`;
        removeBtn.textContent = `Remove`;
        status.textContent = `Status: Just Added`;
        
        //appending child to the bookContainer
        bookContainerDiv.appendChild(titleDiv);
        bookContainerDiv.appendChild(authorDiv);
        bookContainerDiv.appendChild(pageDiv);
        bookContainerDiv.appendChild(readBtn);
        bookContainerDiv.appendChild(notReadBtn);
        bookContainerDiv.appendChild(removeBtn);
        bookContainerDiv.appendChild(status);

        //append bookContainer and everything within the the parent
        btmContainer.appendChild(bookContainerDiv);

        //btn event listeners
        readBtn.addEventListener('click', (e)=>{
            e.preventDefault();
            status.textContent =`Status: Read`; 
        });

        notReadBtn.addEventListener('click', (e)=>{
            e.preventDefault();
            status.textContent =`Status: Not Read`;
        });

        removeBtn.addEventListener('click',(e)=>{
            e.preventDefault();
            addToLibrary.listOfBooks.splice(addToLibrary.listOfBooks.indexOf(renderBkItems),1);
            renderToDom.displayToDom();
        })
    };

       
    return{
        renderItems,
    };
})();
