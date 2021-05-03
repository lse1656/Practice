const slideList = document.querySelector('.slide-list');
const slideContent = document.querySelectorAll('.slide-content')
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const pagination = document.querySelector('.slide_pagination')
const slideLength = slideContent.length;
const slideWidth = 400;
const startNum = 0;

// Copy first and last slide
let firstSlide = slideList.firstElementChild;
let lastSlide = slideList.lastElementChild;
let cloneFirst = firstSlide.cloneNode(true);
let cloneLast = lastSlide.cloneNode(true);

//Add copied slide
slideList.appendChild(cloneFirst);
slideList.insertBefore(cloneLast, firstSlide);

let curIndex = 0;
let curSlide = slideContent[curIndex];

// Next button
nextBtn.addEventListener('click',function(){
    if(curIndex <= slideLength - 1){
        slideList.style.transition = 400 + 'ms';
        slideList.style.transform = "translate3d(-" + (slideWidth * (curIndex + 1)) + "px, 0px, 0px)"
    } else if (curIndex === slideLength - 1){
        setTimeout(function(){
            slideList.style.transition = '0ms';
            slideList.style.transform = "translate3d(-" + slideWidth + "px, 0px, 0px)";
        },300)
        curIndex = -1;
    }

    curSlide = slideContent[++curIndex];

})

/** Prev Button Event */
prevBtn.addEventListener('click', function() {
    if (curIndex >= 0) {
        slideList.style.transition = 400 + "ms";
        slideList.style.transform = "translate3d(-" + (slideWidth * curIndex) + "px, 0px, 0px)";
    }
    if (curIndex === 0) {
        setTimeout(function() {
            slideList.style.transition = "0ms";
            slideList.style.transform = "translate3d(-" + (slideWidth * slideLength) + "px, 0px, 0px)";
        }, 400);
        curIndex = slideLength;
    }

    curSlide = slideContent[--curIndex];
    });
