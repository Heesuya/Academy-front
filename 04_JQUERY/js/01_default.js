function func1() {
    /*
    //js방식
    //const p1 = document.getElementById("p1");
    const p1 = document.querySelector("#p1"); //자바 업데이트 되면서 querySelector
    const text = p1.innerText;
    console.log(text);
    */

    const p1 = $("#p1");        //jQuery에서 dom객체에 접근 $("선택자");
    //js에서 가지고온 dom각체와 jQuery에서 가지고온 dom객체는 지치하는 태그는 같음
    //-> 단, 객체의 형태가 다름 -> 사용할 수 있는 속성/함수 다름
    //jquery는 dom객체 속성에 직접접근하는 방식은 없음 -> 대신 함수로 다 제공
    const text = p1.text();//innerText -> text()
    console.log(text);
    const html = p1.html();//innerHTML -> html()
    console.log(html);
    //innerText or innerHTML 속성값을 수정하고 싶으면?
    //객체.innerText = "수정값"; -> 객체.text("수정값");
    //객체.innerHTML = "수정값"; -> 객체.html("수정값");
    p1.text("값 수정");

    ///////////////////////////////////////////////////////////
    //글씨색, 배경색 변경
    /*

    //js
    //p1.style.color = "red";
    //p1.style.backgroundColor = "yellow";
    */

    //jQuery 방식
    //css()함수 사용 : 객체.css("속성이름","속성값");
    //->속성이름 작성 시 원래 css속성이름을 그대로 문자열로 사용(카멜표기법 변환 없음)
    /*
    p1.css("color","red");
    p1.css("background-color","yellow");
    */
    //css속성을 한번에 여러개 변경하는 경우 css함수를 이어서 사용
    //p1.css("color", "red").css("background-color", "yellow");
    //css속성을 한번에 여러개 변경하는 경우 -> 객체형태로 제공
    p1.css({
        "color" : "red",
        "background-color" : "yellow"
    });
    //css함수를 이용할 때 매개변수로 속성이름만 전달하면 해당 속성의 값을 가져옴
    const color = p1.css("color");
    console.log(color);
}


//////////////////////////////////////////////////////
//이벤트 적용
//const p = document.querySelectorAll(".p");
/*
p[0].addEventListener("click",function(){
    const text = p[0].innerText;
    console.log(text);
});
p[1].addEventListener("click",function(){
    const text = p[1].innerText;
    console.log(text);
});
p[2].addEventListener("click",function(){
    const text = p[2].innerText;
    console.log(text);
});
*/
/*
p.forEach(function(item){
    item.addEventListener("click",function(){
        const text = this.innerText;
        console.log(text);
    });
});
*/

//jquery방식으로 이벤트를 적용
const p = $(".p");//p클래스를 가진 dom객체 3개를 한번에 가져옴
//jQuery는 여러 dom에 이벤트를 한번에 설정하는게 가능
p.on("click", function(){
    console.log(111);
    //this를 이용해서 일괄 적용될 이벤트 중 이벤트를 발생시킨 요소를 구별
    //this는 이벤트를 발생시킨 dom 객체 -> javascript dom 객체
    //javascript dom 객체를 jquery dom객체로 변경하는 방법 -> $(객체)
    console.log($(this).text());
    //console.log($(this.innerText));
});

const btn1 = $("#btn1");
btn1.on("click",function(){
    //클래스가 p인 태그 3개를 가지고와서 내부 글씨를 값 수정으로 변경
    //js방식
    /*
    const pp = document.querySelectorAll(".p");
    pp.forEach(function(item){
        item.innerText = "값수정";
        item.style.color ="red";
        item.style.backgroundColor = "yellow";
    });

    p[0].innerText = "값수정";
    p[0].style.color ="red";
    p[0].style.backgroundColor = "yellow";
    p[1].innerText = "값수정";
    p[1].style.color ="red";
    p[1].style.backgroundColor = "yellow";
    p[2].innerText = "값수정";
    p[2].style.color ="red";
    p[2].style.backgroundColor = "yellow";
    */

    //jquery 방식           //일괄적용이 jquery 가장 큰 장점
    const pp = $(".p");
    const ppText = pp.text();
    console.log(ppText); //적용은 한번에, 꺼낼때는 한번씩
    pp.text("값 수정");
    pp.css("color","red").css("background-color","yellow");
    //jquery dom 배열에 설정(이벤트적용, css적용, 속성변경)을 넣으면 배열에 있는 모든 dom에 일괄 적용 -> 반복문사용 필요x
    //단, 값 적용은 일괄적용
    //값은 꺼내올때는 하나씩 꺼내야 함     //pp[0] < 자바스크립트에서만 쓰는거
});

const btn2 = $(".btn2");
btn2.on("click",function(){
    const filter = $(".filter>p");
    console.log("선택된 엘리먼트 수 : "+filter.length);
    //first() : 선택자로 선택된 요소 중 첫번째 요소
    const first = filter.first();
    console.log("first : "+first.text());
    const last = filter.last();
    console.log("last : "+last.text());
    //eq(인덱스번호) : 선택자로 선택된 요소 중 해당 인덱스번호의 요소([인덱스번호]);
    const eq = filter.eq(2);
    console.log("eq : "+eq.text());
    //first() == eq(0)
    //last() == eq(length -1) 

    //filter("선택자") : 선택자로 선택된 요소 중 다시 선택자에 해당하는 요소만
    const filter2 = filter.filter(".pp1");
    console.log(filter2.eq(0).text());
    console.log(filter2.last().text());
    
    //not("선택자") : 선택자로 선택된 요소 중 다시 선택자에 해당하지 않는 요소만
    const not = filter.not(".pp1");
    console.log(not.first().text());
    console.log(not.eq(1).text());
    //2차 필터링된 요소들도 기존 query dom객체와 동일하게 사용
    filter2.css("color","blue");
    not.css("background-color","yellow");
});

const btn3 = $("#btn3");
btn3.on("click",function(){
    const span = $(".ancestors span");   
    //spans.css("border-color", "blue");    (확인용)
    //parent() : 선택된 요소의 바로 위 상위요소
    const ele = span.parent();
    ele.css("border-color","red");
});

const btn4 = $("#btn4");
btn4.on("click",function(){
    const span = $(".ancestors span");
    //parents([매개변수])      /[] 있어도 되고 없어도 되고~
    //매개변수가 없는경우 : 선택된 요소를 기준으로 모든 상위요소
    //const ele = span.parents()
    //매개변수가 있는경우 : 선택된 요소를 기준으로 모든 상위요소 중 매개변수로 전달한 선택자에 해당하는 요소만
    const ele = span.last().parents("div");
    ele.first().css("border","2px solid red");
});

const btn5 = $("#btn5");
btn5.on("click",function(){
    const span = $(".ancestors span");
    //parentsUntil(인자) : 선택된 요소부터 인자로 전달된 요소까지 범위에 해당하는 모든요소
    //최초선택요소, 인자로 주어진요소는 선택에서 제외
    const ele = span.parentsUntil("div");
    ele.css("border-color","red");
});



const btn6 = $("#btn6");
btn6.on("click",function(){
    const div = $(".descendants");
    //children([인자])
    //매개변수가 없는 경우 : 모든 직계자식요소만
    //const ele = div.children();
    //매개변수가 있는 경우 : 모든 직계자식 중 매개변수의 선택자에 해당되는 요소만
    //const ele = div.children(".child2");
    const ele = div.children().last();
    ele.css("border-color","red");
});

const btn7 = $("#btn7");
btn7.on("click",function(){
    const div = $(".descendants");
    //find(인자) : 모든 후손요소 중 인자로 전달한 선택자에 해당하는 요소만
    const ele = div.find(".child1");//후손만이 아닌 자손도 포함
    ele.css("border-color","red");
});

$("#btn8").on("click",function(){
    const h3 = $(".siblings h3");
    //siblings([인자])
    //매개변수 없는 경우 : 형제관계에 있는 모든 요소
    //const ele = h3.siblings();
    //매개변수가 있는 경우 : 형제관계에 있는 요소 중 매개변수 선택자에 해당되는 요소만
    const ele = h3.siblings("p");    
    ele.css("border-color","red");
});

$("#btn9").on("click",function(){
    const h3 = $(".siblings h3");
    //next() : 선택된 요소의 바로 다음요소
    const ele = h3.next();
    ele.css("border-color","red");
});

$("#btn10").on("click",function(){
    const h3 = $(".siblings h3");
    //nextAll([인자])
    //매개변수 없는경우 : 선택된 요소의 형제요소 중 선택된 요소 이후에 있는 모든 요소
    //const ele = h3.nextAll();
    //매개변수 있는경우 : 선택된 요소의형제요소 중 선택된 요소 이후에 있는 요소들 중 매개변수로 준 선택자에 해당되는 요소만
    const ele = h3.nextAll("p");
    ele.css("border-color","red");
});

$("#btn11").on("click",function(){
    const h3 = $(".siblings h3");
    //nextUntil(인자) : 선택된 요소부터 매개변수로 전달한 요소 사이의 모든 요소
    const ele = h3.nextUntil("p");
    ele.css("border-color","red");
});

$("#btn12").on("click",function(){
    const h3 = $(".siblings h3");
    //prev : 선택된 요소의 바로 이전 요소
    const ele = h3.prev();
    ele.css("border-color","red");
});

$("#btn13").on("click",function(){
    const h3 = $(".siblings h3");
    //prevAll([인자]) 
    //매개변수 없는경우 : 선택된 요소의 형제요소 중 이전에 있는 모든 요소
    //const ele = h3.prevAll();
    //매개변수 있는 경우 : 선택된 요소의 형제요소 중 이전에 있는 요소 중 매개변수로 전달된 선택자에 해당되는 요소만
    const ele = h3.prevAll("p");
    ele.css("border-color","red");
});

$("#btn14").on("click",function(){
    const h3 = $(".siblings h3");
    //prevUntil(인자) : 선택된 요소의 이전 형제요소 중 선택된 요소로 매개변수 요소 사이의 모든 요소
    const ele = h3.prevUntil("p");
    ele.css("border-color","red");
});