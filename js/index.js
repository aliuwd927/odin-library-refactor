const topContainer = (() => {
    
    const addButtonElem = document.querySelector('.addBookBtn');
    
    addButtonElem.addEventListener('click',(e)=>{
        return topFormContainer.formDisplay(e);
    });
   
    return{
        addButtonElem,
    };
})();

const topFormContainer = (() =>{
   
    const formContainer = document.querySelector('.formContainer');
    
    const formDisplay = (e) =>{
        //console.log(e.srcElement.nextElementSibling);
        //console.log('formDisplay Triggered');
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
        formContainerReset,
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
        bookInfoValue,
        
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

    const bottomContainer = document.querySelector('.bottomContainer');

    const displayToDom = () => {
        let booksAdded = document.createElement('div');
            booksAdded.classList.add('booksAdded');
            addToLibrary.listOfBooks.forEach((books) =>{
                booksAdded.innerHTML = `${books.title}<br>
                                        ${books.author}<br>
                                        ${books.page}`;
            bottomContainer.appendChild(booksAdded);
            });
    };

    return{
        bottomContainer,
        displayToDom
    };

})();