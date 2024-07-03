function func1() {
    /*
    innerHTML : 해당 dom객체(HTML요소)의 시작태그와 종료태그 사이의 내용을 모두 가져옴(자료형 : 문자열)
                -> 내부의 가져온 데이터에 태그가 포함되어있으면 태그를 포함해서 다 가져옴
                -> 요소노드와 텍스트를 모두 다 가져옴
    innerText : 해당 dom객체(HTML요소)의 시작태그와 종료태그 사이의 내용을 모두 가져옴(자료형 : 문자열)
                -> 내부의 가져온 데이터에 태그가 포함되어있으면 태그를 제외하고 글씨만 가져옴
                -> 텍스트노드만 가져옴
    */

    const d1 = document.querySelector("#d1");
    const html = d1.innerHTML;
    const text = d1.innerText;
    console.log(html);
    console.log(text);
    //innerHTML, innerText 속성 값을 수정
    // -> 태그를 포함하지않은 문자열로 수정하면 innerHTML, innerText 동일
    //d1.innerHTML = "html값 변경";
    //d1.innerText = "text 값 변경";
    //태그를 포함한 문자열로 수정하면
    // -> innerHTML : 문자열에 있는 태그가 HTML 태그로 동작
    // -> innerText : 문자열에 있는 태그가 문자열로 화면에 표현
    //d1.innerHTML = "<a href='#'>테스트</a>";
    d1.innerText = "<a href='#'>테스트</a>";
    /*
    dom객체.appendChild(데이터) : 데이터의 자료형이 객체(요소노드객체 or 텍스트노드객체) / 요소노드, 텍스트노드 모두 가능 / 사용시 기존데이터를 유지하고 가장 마지막에 추가
    dom객체.innerHTML - 데이터 : 데이터의 자료형은 문자열 / 요소노드, 텍스트노드 모두 가능 / 기존데이터를 대체
    dom객체.innerText - 데이터 : 데이터의 자료형은 문자열 / 텍스트노드만 가능(요소노드 넣어도 텍스트로 처리) / 기존 데이터를 대체
     */
    //outerHTML : 해당 요소의 시작태그와 종료태그를 포함한 모든 내용을 문자열로 가져옴(읽기전용 -> 수정불가능)
    const out = d1.outerHTML;
    console.log(out);
}

const btn2 = document.querySelector("#btn2");
btn2.onclick = function(){
    const dd2 = document.querySelectorAll(".dd2");
    console.log(dd2[0].innerHTML);
    console.log(dd2[1].innerText);
    dd2[0].innerHTML = "세번째 데이터 변경";
    dd2[1].innerText = "네번째도 변경!!!!!";
}

const btn3 = document.querySelector("#btn3");
btn3.onclick = function(){
    const name2 = document.querySelectorAll("[name=name2]");
    name2.forEach(function (item) {
        item.style.color = "blue";
    })

    /*
    for(let i=0; i <name2.length; i++){
        name2[i].style.color = "blue";
    }
    */

    /*
    name2[0].style.color = "blue";
    name2[1].style.color = "blue";
    name2[2].style.color = "blue";
    */
}

function func4() {
    //input태그에 현재 입력된 값을 가져오려면 value속성에 있는 값을 읽어오면 됨
    const input1 = document.querySelector("#input1");
    const inputValue = input1.value;
    console.log(inputValue);
}

function func5() {
    const input1 = document.querySelector("#input1");
    //input 태그의 value속성값을 변경하면 화면에 입력된 값도 변경됨
    input1.value = "변경!!";
}

function func6() {
    const input2 = document.querySelector("#input2");
    const inputValue = input2.value;
    console.log(inputValue);
    if(isFinite(inputValue)){
        alert("비밀번호는 숫자로만 구성할 수 없습니다.")
    };
    //console.log(isNaN(inputValue));
}

function minus() {
    const count = document.querySelector("#count");
    const currentCount = count.value;
    if(currentCount == 1){
        alert("취소 주문수량은 1개입니다.")
    }else{
        count.value = Number(currentCount)-1;
    }
}
function plus() {
    const count = document.querySelector("#count");
    const currentCount = count.value;//vlaue속성으로 읽어오면 문자열타입
    if(currentCount == 10){
        alert("최대 주문수량은 10개 입니다.");
    }else{
        count.value = Number(currentCount)+1;
    }
}
function func7() {
    const input2 = document.querySelector("#input2");
    const checkbox = document.querySelector("#check");
    //태그의 속성 값을 읽어오거나 변경하는 방법
    //읽어보는방법 -> dom객체.속성이름
    //수정하는방법 -> dom객체:속성이름 변경값;
    console.log(input2.type);
    input2.type = "text";
    //input태그에서 속성이름 = 값 형태가 아니라 속성이름으로 설정하는 경우
    //->checked, disabled, readonly  (대표적으로)
    //활성화/비활성화 -> true/false
    console.log(checkbox.checked);
    if(checkbox.checked === true){
        checkbox.checked = false;
    }else{
        checkbox.checked = true;
    }
    
    //속성에 직접적인 접근이 막힌경우(dom객체.속성이름으로 값을 못읽어오고, 수정도 안되는 경우) -> readonly
    //console.log(input2.readonly);//접근이 불가능해서 undefined 처리
    // -> dom객체.getAttribute("속성이름") 으로 가져옴
    // -> dom객체.getAttribute("속성이름",수정값) 으로 수정
    console.log(input2.getAttribute("readonly"));
    input2.removeAttribute("readonly");
    input2.getAttribute("readonly", true);
    console.dir(input2);
}

const allAgree = document.querySelector("#allAgree");
allAgree.onclick = function() {
    const agree = document.querySelectorAll("[name=agree]");
    const status = allAgree.checked;//전체 체크 버튼의 체크상태
    console.log(status);
    agree.forEach(function(item){
        item.checked = status;
    });

    /*
    if(status == true){
        agree[0].checked = true;
        agree[1].checked = true;
        agree[2].checked = true;
    }else{
        agree[0].checked = false;
        agree[1].checked = false;
        agree[2].checked = false;
    }
    */
    /*
    agree.forEach(function(item){
        item.checked = ture;
    });
    */
}

//만들어야하는 기능이 있는경우
//1. 사용자가 어떤행동을 했을 때
    //-> ex. 구글로 이동으로 변경 버튼을 눌렀을 때
//2. HTML 태그의 속성을 변경
    //-> 어떤 태그의 어떤 속성값을 무엇으로 변경할지
    //-> ex. 2-1) 아이디가 link인 a태그의 href속성값을 구글주소로 변경
    //->     2-2) 아이디가 link인 a태그의 내부 글씨를 구글로 이동으로 변경

const btn8 = document.querySelector("#btn8");
btn8.onclick = function(){                          //1
    const link = document.querySelector("#link");
    link.href = "http://www.google.com";            //2-1
    link.innerText = "구글로 이동";                  //2-2
} 

const btn11 = document.querySelector("#btn11");
btn11.onclick = function() {    //키우기 버튼눌렀을 때
    const divs = document.querySelectorAll(".test-div");
    divs.forEach(function(item){
        item.style.width = "300px";
        item.style.height = "300px";
        item.style.backgroundColor = "pink";
    });
}

function func12() {//원래대로 버튼을 눌렀을 때
    const divs = document.querySelectorAll(".test-div");
    divs.forEach(function(item){
        item.style.width = "150px";
        item.style.height = "150px";
        item.style.backgroundColor = "darkgray";
    });
}

const btn13 = document.querySelector("#btn13");
btn13.onclick = function () {
    const divs = document.querySelectorAll(".test-div");
    //dom객체.classlist : 해당 요소가 가지고 있는 클래스를 리스트로 가져옴
    console.log(divs[0].classList);
    divs.forEach(function(item){
        //class속성을 dom객체.class 로 직접 접근 불가
        //-> 가져올 땐 getAttribute("class");
        //-> 변경할 땐 setAttribute("class",변경값);
        //item.setAttribute("class", "test-div big");
        //dom객체.classlist.add("클래스이름") : 매개변수로 전달한 클래스를 기존클래스에 추가
        //매개변수로 전달한 클래스를 이미 dom객체가 가지고있으면 추가하지 않음
    item.classList.add("big");
    });
}

const btn14 = document.querySelector("#btn14");
btn14.onclick = function(){
    const divs = document.querySelectorAll(".test-div");
    divs.forEach(function(item){
        //item.setAttribute("class","test-div");
        //dom객체.classlist.remove("클래스이름") : 매개변수로 전달한 클래스를 기존클래스에서 삭제
        //매개변수로 전달한 클래스가 dom객체에 없으면 아무작업안함
        item.classList.remove("big");
    });
}

function func15() {
    const divs = document.querySelectorAll(".test-div");
    divs.forEach(function (item) {
        //dom객체.classlist.toggle("클래스이름");
        //매개변수로 전달한 클래스가 dom객체에 없으면 add / 있으면 remove
        item.classList.toggle("big");
    });
}