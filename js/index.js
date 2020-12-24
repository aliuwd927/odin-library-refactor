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
        bookInfo.test();
        topFormContainer.formContainerReset();
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

    const test = () =>{

        const titleBook = document.querySelector('.title').value;
        const authorBook = document.querySelector('.author').value;
        const pageOfBook = document.querySelector('.pages').value;
        console.log(titleBook.toString(), authorBook.toString(), pageOfBook.toString());
    };
    
    return{
        test,
    };

})();

const addToLibrary = (() =>{


})();