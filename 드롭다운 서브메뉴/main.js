const header = document.querySelector('header');
const nav = document.querySelector('nav');
const subMenu = document.querySelectorAll('.submenu');
const headerHeight = header.offsetHeight;
let subMenuHeight = 0;

for(var i = 0; i < subMenu.length; i++){
    if(subMenu[i].offsetHeight > subMenuHeight){
        subMenuHeight = subMenu[i].offsetHeight;
    }
}

nav.addEventListener('mouseover', function(){
    header.style.height = headerHeight + subMenuHeight + 'px';
})
nav.addEventListener('mouseout',function(){
    header.style.height = headerHeight + 'px';
})