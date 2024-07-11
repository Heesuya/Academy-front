const stars = $(".star-wrap1>span");
stars.on("click",function(){
    //stars.css("color","gold"); // 어떤걸 클릭하더라도 5개 모두 색이 바뀜
    //$(this).css("color","gold");//클릭한 별만 색이 변함

    //this가 몇번째인지 찾는 방법
    const index = stars.index(this);//stars 중에 이벤트를 발생시킨 객체가 몇번째 인지 구해주는 함수
    //console.log(index); //확인용
    $(this).css("color","gold");//클릭한 별 색 변경
    $(this).prevAll().css("color","gold");//클릭한 별 이전에 있는 별들 색상변경
    $(this).nextAll().css("color","lightgrey");//클릭한 별 이후에 있는 별들 색상 변경
    $("#star-result").text(index+1);
});

$("#btn").on("click",function(){
    $(".star-on").css("width","0px");
    const score = $("#score").val();
    //별1개당 30px너비 확보
    const changeWidth = score * 30;
    //$(".star-on").css("width",changeWidth+"px");
    $(".star-on").animate({"width":changeWidth+"px"},3000);

    /*
    const score = $("#score").val();
    const index = $(".star-wrap2>span");
    index.css("color","lightgrey");
    index.eq(score-1).css("color","gold");
    index.eq(score-1).prevAll().css("color","gold");
    */
});

