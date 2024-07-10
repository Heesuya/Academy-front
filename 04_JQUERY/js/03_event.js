function func1(){
    console.log("인라인 이벤트 테스트");
}


//const d1 = $(".d1");
/*
//고전이벤트 모델
d1.click(function(){
    console.log($(this).text());
});
*/


/*
//표준이벤트 모델
d1.on("click",function(){
    console.log($(this).text());
});
*/
//문서 전체에 클릭이벤트를 적용 -> 그중에 대상이 .d1이랑 일치하면 이벤트가 적용
//페이지에 요소가 많아지면 -> 클릭이벤트도 많아짐 -> 페이지 속도가 느려짐
$(document).on("click",".d1",function(){
    console.log($(this).text());
});//사용하면 안됨 (비추)




//아래 같은 방법이 동적인 방법
$("#btn1").on("click",function(){
    const div = $("<div>");//<div></div>
    div.addClass("d1");//<div class="d1"></div>
    div.text("test");//<div class="d1">test</div>
    //새로 생성한 div클래스는 d1이라는 클래스를 가지고 있긴함 
    //최초에 d1클래스를 가진 요소들에 이벤트를 연결하는 시점에는 새로 생성한 div는 존재하지 않았음
    //이벤트가 연결되어있지 않음 -> 동일한 이벤트를 연결하고 싶으면 따로 설정

    /*
    div.on("click",function(){
    console.log($(this).text());
    text(); 
    });
    */
    $("#test1").append(div);
});
//요즘 쇼핑몰들 스크롤 내리면 추가로 나올때 , 이벤트 동적으로 걸음
function text(){ //코드가 길면 function으로 호출하는 방식으로 하면 된다. //페이지가 최적화됨

}