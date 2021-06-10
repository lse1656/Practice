const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slides li')
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slideWidth = 300;
const slideMargin = 30;
const slideCount = slide.length;
let currIdx = 0;

function moveSlide(num){
    slides.style.left = -num * (slideWidth + slideMargin) + 'px';
    currIdx = num;
}

//prevBtn listener
prevBtn.addEventListener('click',()=>{
    if(currIdx > 0){
        moveSlide(currIdx - 1);
    } else {
        moveSlide(slideCount - 3);
    }
})

//nextBtn listener
nextBtn.addEventListener('click',()=>{
    if(currIdx < slideCount - 3){
        moveSlide(currIdx + 1); 
    } else {
        moveSlide(0);
    }
})