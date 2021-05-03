/* tab-content 안의 div들을 모두 안 보이게 한다.
   링크를 클릭하면 클릭한 그 요소의 href 속성의 값을 변수 tabTarget에 저장 -> 저장된 값에서 #을 삭제한다.
   ex) tabTarget = tabs-1
   document.getElementById(tabs-1).style.display = 'block'
*/

var targetLink = document.querySelectorAll('.tab-menu a');
var tabContent = document.querySelectorAll('#tab-content > div');
console.log(tabContent)

for(i = 0; i < targetLink.length; i++){
    targetLink[i].addEventListener('click',function(e){
        e.preventDefault();
        var orgTarget = e.target.getAttribute('href');

        var tabTarget = orgTarget.replace('#','');

        for(j = 0; j < tabContent.length; j++){
            tabContent[j].style.display = 'none';
        }

        document.getElementById(tabTarget).style.display = 'block';

        for(k = 0; k < targetLink.length; k++){
            targetLink[k].classList.remove('active');
            e.target.classList.add('active');
        }
    })
}

document.getElementById('tabs-1').style.display = 'block';

