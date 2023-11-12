'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

//USING A LOOP TO APPLY A EVENT FUNCTION TO THE BUTTONS WITH THE btnsOpenModal CLASS

//A FUNCTION STORED IN A VAR TO SHOW THE MODAL AND OVERLAY
const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

//A FUNCTION STORED IN A VAR TO HIDE THE MODAL AND OVERLAY
const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

//USING A LOOP TO APPLY A EVENT LISTENER TO THE BUTTONS WITH THE btnsOpenModal CLASS, EXECUTING THE OPEN MODAL FUNCTION
for(let i = 0; i < btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener('click', openModal);
}


//AN EVENT LISTENER WITH THE CLOSE MODAL VAR AS THE INSTRUCITON WHEN THE CLICK IS ACKOWLEDGED
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);


//IF ESC KEY IS PRESSED  AND MODAL CONTAINS CLASS LIST 
// HIDDEN, EXECUTE CLOSE MODAL FUNCTION
document.addEventListener('keydown', function(e){
    console.log(e);
    
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal()
    }
})

