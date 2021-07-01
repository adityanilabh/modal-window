'use strict';
const modal= document.querySelector('.modal');
const overlay= document.querySelector('.overlay');
const btnCloseModal= document.querySelector('.close-modal');
const btnsOpenModal= document.querySelectorAll('.show-modal');

const openModal=function(){
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

}
const closeModal= function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
for(let i=0;i<btnsOpenModal.length;i++)
{
   btnsOpenModal[i].addEventListener('click',openModal);
}
// fuction for refactory  

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal); 

document.addEventListener('keydown',function(eventx){
    console.log(eventx.key);
    if(eventx.key==='Escape')
    {
        if(!modal.classList.contains('hidden'))
        {
            closeModal();
        }
    }
});