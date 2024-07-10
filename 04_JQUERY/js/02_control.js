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

$("#btn2").on("click",function(){
    //js방식
    /*
    const divs = document.querySelectorAll("#test2>div");
    divs[0].classList.add("bg-yellow");
    divs[1].classList.add("bg-yellow");
    divs[2].classList.add("bg-yellow");
    divs[3].classList.add("bg-yellow");
    divs[4].classList.add("bg-yellow");
    divs.forEach(function(item){
        item.classList.add("bg-yellow");
    });
    */
    

    //jQuery 방식
    const divs = $("#test2>div")

    //일괄적용
    //divs.addClass("bg-yellow");   //선택자로 선택된 모든 태그에 bg-yellow클래스를 일괄적으로 적용
    /*
    divs.each(function(i, item){
        $(item).addClass("bg-yellow");
    });
    */
    /*
    for(let i = 0; i < divs.length; i++){
        divs.eq(i).addClass("bg-yellow");
    }
    divs.eq(0).addClass("bg-yellow");
    divs.eq(1).addClass("bg-yellow");
    divs.eq(2).addClass("bg-yellow");
    divs.eq(3).addClass("bg-yellow");
    divs.eq(4).addClass("bg-yellow");
    */
    //divs.eq(0).addClass("bg-red").css("color","pink"); //클래스만 포함된다
    divs.eq(1).addClass("bg-yellow");
    divs.eq(2).addClass("t-red");
    divs.eq(3).addClass("bg-yellow").addClass("t-red");
});

$("#btn3").on("click",function(){
    const divs = $("#test2>div");
    divs.eq(1).removeClass("bg-yellow");
    divs.eq(0).removeClass("bg-yellow");//dom객체에 현재 클래스가 없어도 remove할때 에러발생x(아무동작도 일어나지 않음)
    divs.eq(2).removeClass("t-red");
    divs.eq(3).removeClass("bg-yellow").removeClass("t-red");
});

$("#btn4").on("click",function(){
    const divs = $("#test2>div");
    const data = divs.eq(2).hasClass("t-red");
    //console.log(data);
    if(data){ //이 로직 구현해준게 toggleClass
        divs.eq(2).removeClass("t-red");
    }else{
        divs.eq(2).addClass("t-red");
    }
});

$("#btn5").on("click",function(){
    const divs = $("#test2>div");
    divs.toggleClass("t-red");
    //divs.eq(4).toggleClass("t-red");
});

$("#btn6").on("click",function(){
    /*
    const input = $("#test3>input").first();
    //const label = $("#test3>label").first();
    //attr(param1) : param1속성에 해당하는 값을 가져옴
    const id = label.prev().attr("id");
    //attr(param1,param2) : param1속성에 param2값을 대입
    label.attr("for",id);
    //label.attr("for","java");
    */
    
    const labels = $("#test3>label");
    /*
    for(let i = 0; i < labels.length; i++){
        const label = labels.eq(i);
        const id = label.prev().attr("id");
        labels.iq(i).attr("for",id);
    }
    */
    labels.each(function(i, item){
        const label = $(item);
        const id = label.prev().attr("id");
        label.attr("for",id);
    });
});

$("#btn7").on("click",function(){
    const labels = $("#test3>label");
    labels.removeAttr("for");
    /*
    labels.each(function(i, item){
        const label = $(item);
        label.removeAttr("for");
    });
    */
});

$("#btn8").on("click",function(){ //ture나 false 값으로 조절하는것 중 prop 로 많이함
    const inputs = $("#test3>input");
    inputs.prop("checked",true);
});

$("#btn9").on("click",function(){
    const divs = $("#test4>div");
    //css함수에 매개변수를 한개만 넣으면(css속성이름만) 해당속성에 적용된 값을 가져옴
    const data1 = divs.eq(0).css("background-color");
    console.log(data1);
    console.log(divs.eq(1).css("background-color"));
    //css함수에 매개변수를 두개 넣으면 해당 속성값을 변경
    divs.eq(1).css("background-color","pink");
    //css속성을 한번에 여러개 변경하는 방법1
    //divs.eq(0).css("background-color","yellow").css("float","none");
    //css속성을 한번에 여러개 변경하는 방법2  ___ 객체로 주는 방법
    divs.eq(0).css({
        "background-color" : "yellow",
        "float" : "none"
    })
});

$("#btn10").on("click",function(){
    const h1 = $("#test5>h1");
    //html()을 매개변수없이 사용하면 값을 가져옴
    const data = h1.html();
    console.log(data);
    //html(param)에 매개변수를 주면 매개변수로 컨텐츠 영역을 변경
    h1.html("<span>변경</span>");
});

$("#btn11").on("click",function(){
    const h1 = $("#test5>h1");
    //text()를 매개변수없이 사용하면 값을 가져옴
    const data = h1.text();
    console.log(data);
    //text(param)를 매개변수를 주면 컨텐츠영역을 변경
    h1.text("<span>변경</span>");
});

$("#btn12").on("click",function(){
    const input = $("#test5>input");
    //val()을 매개변수없이 사용하면 value 속성에 있는 값을 가져옴(input태그의 입력값)
    const data = input.val();
    console.log(data);
    //val(param)에 매개변수를 주면 value속성값이 변경(input태그의 입력값이 변경)
    input.val("쉬는시간시작");
});

let index = 1;
$("#btn13").on("click",function(){
    //새로운 dom객체를 생성하는방법 -> <p>test</p>
    //js
    /*
    const p = document.createElement("p");//<p></p>
    p.innerHTML = "test";//<p>test</p>
    */
    //jQuery
    const p = $("<p>");//<p></p>
    p.html("test"+index);//<p>test</p>
    index++;
    const div = $("#test6");
    //객체1.append(객체2) : 객체1의 마지막 자식으로 객체2를 추가
    div.append(p);
    //객체2.appendTo(객체1)
    //p.appendTo(div);
});

$("#btn14").on("click",function(){
    const p = $("<p>");//<p></p>
    p.text("test"+index);//<p>test</p>
    index++;
    const div = $("#test6");
    //객체1.prepend(객체2) : 객체1의 첫번째 자식으로 객체2를 추가
    div.prepend(p);
    //객체2.prependTo(객체1)
});

$("#btn15").on("click",function(){
    const p = $("<p>");//<p></p>
    p.text("test"+index);//<p>test</p>
    index++;
    const div = $("#test6");
    //객체1.after(객체2) : 객체 1의 바로 다음 요소로 객체2를 추가
    div.after(p);
    //객체2.insertAfter(객체1)
});

$("#btn16").on("click",function(){
    const p = $("<p>");//<p></p>
    p.text("test"+index);//<p>test</p>
    p.text("text"+index);
    index++;
    const div = $("#test6");
    //객체1.before(객체2) : 객체1의 바로 이전요소로 객체2를 추가
    div.before(p);
    //객체2.insertBefore(객체1)
});

$("#btn17").on("click",function(){
    const h3 = $("#test7>h3");
    h3.remove();//대상객체를 제거
});
$("#btn18").on("click",function(){
    const div = $("#test7");
    div.empty();//대상객체는 남겨두고 내부의 후손들을 모두 제거
});
$("#btn19").on("click",function(){
    const h2 = $("#test7>h2");
    const div = $("#test8");
    div.append(h2);
});
$("#btn20").on("click",function(){
    const h2 = $("#test7>h2").clone();
    const div = $("#test8");
    div.append(h2);
});