$("#btn1").on("click",function(){
/*
    //js방식(비교용)
    const divs = document.querySelectorAll("#test1>div");
    
    for(let i = 0; i < divs.length; i++){
        console.log(i + " : "+divs[i].innerText);
    }

    divs.forEach(function(item,i){
        console.log(i + " : "+item.innerText);
    });
    
    //만약 회차번호가 필요없으면(i값이 필요없으면 선언하지않고 사용안하면 됨)
    divs.forEach(function(item){
        console.log(item.innerText);
    });
    */
    //jQuery 방식
    const divs = $("#test1>div");
    /*
    for(let i = 0; i < divs.length; i++){
        console.log(i + " : "+divs.eq(i).text());
    }
    */
   /*
   each : js의 forEach와 유사한 함수로 배열 전체를 순회
        -> 내부 함수의 매개변수 순서가 js forEach와 반대
        -> 첫번째 매개변수가 순회번호/두번째매개변수가 해당 순번의 배열의 데이터 
        -> 이때 두번째 매개변수 item은 js형 객체
        -> 두번째 배개변수에서 jquery dom객체 함수를 사용하려면 $(item)형태로 사용해야 함

    배열.each(function(i,item){});
    divs.each(function(i, item){
        console.log(i+" : "+$(item).text());
    });
  
    //만약 회차번호가 필요없으면(i값이 필요없어도 매개변수를 2개 모두선언하고 사용)
    //i 값을 사용하지 않더라도 매개변수 순서를 맞춰야해서 선언은 무조건 해야함
    divs.each(function(i, item){
        console.log($(item).text());
    });

    //each의 두번째 문법
    //$.each(배열,function(i,item){})
    $.each(divs,function(i,item){
        console.log($(item).text());
    });  //둘중 편한거 쓰면 됨
    */
    //객체.is("선택자") : 객체가 해당 선택자에 맞으면 true/틀리면 false를 리턴하는 함수
    
    divs.each(function(i,item){
        const div = $(item);   // <<변수 저장해서 쓰기도 함 취향 따라~
        console.log(i +" : "+$(item).text());
        //if($(item).is(".d1")) : 이번회차 객체가 d1클래스를 가지고 있으면 true/아니면 false
        //console.log($(item).is(".d1"));
        if($(item).is(".d1")){
            $(item).css("color","red");
        }else if($(item).is(".d2")){
            $(item).css("color","blue");
        }else{
            $(item).css("color","green");
        }
    });
});