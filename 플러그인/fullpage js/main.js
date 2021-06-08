$(function(){
    $('#fullpage').fullpage({
        //options here
        anchors:['section1', 'section2', 'section3','section4','section5'],
		autoScrolling:true,
        navigation: true,
        sectionsColor: ['#c668ff','#80ff70','#64e4ff','#ffa86d','#ffdf46',],
        afterLoad: function(anchorLink, index){
            console.log(`현재 섹션 번호는 ${index}.`);
            // if(index === 5){
            //     console.log('마지막 페이지 입니다');
            // }
        },
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
            console.log(`현재 섹션 번호는 ${slideIndex}`);
        }
	});
});