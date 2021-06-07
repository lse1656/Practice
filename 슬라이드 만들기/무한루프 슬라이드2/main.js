const carouselSlide = document.querySelector('.carousel-slide');
const carouselImg = document.querySelectorAll('.carousel-slide img');

//button
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter
let counter = 1;
const size = carouselImg[0].clientWidth;


//Button Listeners
nextBtn.addEventListener('click',()=>{
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translate(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click',()=>{
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translate(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend',()=>{
    if(carouselImg[counter].id === 'lastClone'){
        carouselSlide.style.transition = 'none';
        counter = carouselImg.length - 2;
        carouselSlide.style.transform = 'translate(' + (-size * counter) + 'px)';
    }
    if(carouselImg[counter].id === 'firstClone'){
        carouselSlide.style.transition = 'none';
        counter = carouselImg.length - counter;
        carouselSlide.style.transform = 'translate(' + (-size * counter) + 'px)';
    }
});