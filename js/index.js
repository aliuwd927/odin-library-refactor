const topContainer = (() => {
    const addButtonElem = document.querySelector('.addBookBtn');
    
    addButtonElem.addEventListener('click',(e)=>{
        return topFormContainer.formDisplay(e);
    });
   
    return{
        addButtonElem,
    }

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
        addToLibrary.test(e);
        
    });

    return{
        formContainer,
        formDisplay,
        submitBtn,
    }

})();

const addToLibrary = (() =>{

    const test = (e) =>{
        console.log(e.target);
    }

    
    return{
        test,
    }
})();