const loginBtn = document.querySelector('.loginbtn');
const modal = document.querySelector('.modal');


function clickHandler(){
    modal.style.display = 'block';
}

loginBtn.addEventListener('click',clickHandler);