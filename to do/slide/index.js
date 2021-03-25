let currentIdx = 0;
const slides = document.querySelector('.slide-wrapper')
const prevBtn = document.querySelector('.prev'),
      nextBtn = document.querySelector('.next');

function moveSlide(num){
    slides.style.left = -num * 1000 + 'px';
    currentIdx = num;
}

nextBtn.addEventListener('click',function(){
    moveSlide(currentIdx + 1);
})