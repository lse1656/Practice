const SHOWING_CLASS = 'showing';
const firstSlide = document.querySelector('.slider_item:first-child');
const lastSlide = document.querySelector('.slider_item:last-child');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

firstSlide.classList.add(SHOWING_CLASS);    

nextBtn.addEventListener('click',function(){
    const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
    currentSlide.classList.remove(SHOWING_CLASS);
    const nextSlide = currentSlide.nextElementSibling;
    if(nextSlide){
        nextSlide.classList.add(SHOWING_CLASS);
    }else{
        firstSlide.classList.add(SHOWING_CLASS);    
    }
    
});
prevBtn.addEventListener('click',function(){
    const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
    currentSlide.classList.remove(SHOWING_CLASS);
    const prevSlide = currentSlide.previousElementSibling;
    if(prevSlide){
        prevSlide.classList.add(SHOWING_CLASS);
    }else{
        lastSlide.classList.add(SHOWING_CLASS);
    }
})
