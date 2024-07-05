const btn1 = document.querySelector("#btn1");
btn1.onclick = function(){
    console.log("고전이벤트 모델!");
    console.log(this); //이벤트를 발생시킨 자기 자신
}

function func1(){
    console.log("인라인 이벤트 모델 2222");
}

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click",function(){
    console.log("표준이벤트 모델!");
});

const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");

btn3.onclick = function(){
    console.log("고전이벤트 테스트111");
}

btn4.addEventListener("click",function(){
    console.log("표준이벤트 테스트111");
});

btn3.onclick = function(){
    console.log("고전이벤트 테스트222");
}

btn4.addEventListener("click",function(){
    console.log("표준이벤트 테스트222");
});

const a = document.querySelector("#a");
a.addEventListener("click",function name() {
    const result = confirm("네이버로 이동하시겠습니까?");
    if(result){
        location.href = "http://www.naver.com";
    }
});

function func2(){
    const newPw = document.querySelector("#newPw");
    const newPwRe = document.querySelector("#newPwRe");
    const newPwValue = newPw.value;
    const newPwReValue = newPwRe.value;
    if(newPwValue !== newPwReValue){
        alert("비밀번호가 다르다 똑바로 입력해라");
        return false;
    }
}

/*
const submit = document.querySelector("#submit");
submit.addEventListener("click",function(event){

    //event.preventDefault();  오류확인용

    //표준이벤트 모델에서 함수의 첫번째 매개변수는 이벤트 정보가 저장된 객체
    //event 객체 중 preventDefault() 함수는 해당 dom객체가 가지고 있는 기본이벤트를 제거하는 함수


    //비밀번호 변경 제출 조건
    //1. 기존비밀번호와 새 비밀번호가 달라야함
    //2. 새 비밀번호, 비밀번호 확인은 같아야한다
    //3. 새로운 비밀번호는 반드시 입력해야 한다.
    //4.기존비밀번호가 일치해야 한다(기존비밀번호는 1111이라고 가정)

    //현재 비밀번호 변경창에 입력된 값들을 모두 가져옴
    const pw = document.querySelector("#pw");
    const newPw = document.querySelector("#newPw");
    const newPwRe = document.querySelector("#newPwRe");
    
    const pwValue = pw.value;
    const newPwValue = newPw.value;
    const newPwReValue = newPwRe.value;

    //1. 
    if(pwValue === newPwValue){
        console.log("비밀번호와 새비밀번호가 일치");
        newPw.style.border = "1px solid red";
        event.preventDefault();
    }else{
        newPw.style.border = "1px solid green";
    }

    //2.
    if(newPwValue !== newPwReValue){
        console.log("새 비밀번호와 새 비밀번호 확인이 다름");
        newPw.style.border = "1px solid red";
        newPwRe.style.border = "1px solid red";
        event.preventDefault();
    }else{
        newPw.style.border = "1px solid green";
        newPwRe.style.border = "1px solid green";
    }

    //3.
    if(newPwValue === ""){
        console.log("새 비밀번호를 입력 안함");
        newPw.style.border = "1px solid red";
        event.preventDefault();
    }else{
        newPw.style.border = "1px solid green";
    }

    //4.
    if(pwValue !== "1111"){
        console.log("기존 비밀번호 틀림");
        pw.style.border = "1px solid red";
        event.preventDefault();
    }else{
        pw.style.border = "1px solid green";
    }
});
*/

const testDivs = document.querySelectorAll(".test-div");
testDivs.forEach(function(item,index){
    item.addEventListener("click",function(event){
        const text = item.innerText;
        alert(text);
        event.stopPropagation();//이벤트 버블링을 막는 함수
    });
});

const div4 = document.querySelector("#div4");
div4.addEventListener("click",function(){
    div4.style.backgroundColor = "black";
})


const div5 = document.querySelector("#div5");
div5.addEventListener("dblclick",function(){
    div5.style.backgroundColor = "orange";
})


//hover 랑은 다르다.
const div6 = document.querySelector("#div6");
div6.addEventListener("mouseenter",function(){
    div6.style.backgroundColor = "yellow";
})
div6.addEventListener("mouseleave",function(){
    div6.style.backgroundColor = "blue";
})


//css 로 하는거 추천 나올때 또 따로 지정해야함. 
const memberId = document.querySelector("#memberId");
memberId.addEventListener("focusin",function(){
    memberId.style.backgroundColor ="aquamarine";
});
memberId.addEventListener("focusout",function(){
    memberId.style.backgroundColor ="white";
});

/*
memberId.addEventListener("keydown",function(){
    console.log("keydown");
});

memberId.addEventListener("keyup",function(){
    console.log("keyup");
});

memberId.addEventListener("keypress",function(){
    console.log("keypress");
});
*/

//아이디 중복체크 테스트용 임시배열(실제로는 DB조회)
const userArr = new Array();
userArr.push("user01");
userArr.push("user02");
userArr.push("user03");

//memberId.addEventListener("focusout",function(){ //누른후 다음 넘어가면 
//memberId.addEventListener("change",function(){  //더많이 사용 //작업량이 더 적다  
memberId.addEventListener("keyup",function(){ //키보드를 누룰때 마다 반응 //규모큰 서비스는 사용하지 않음
    console.log("아이디 중복체크로직 동작");
    const inputId = memberId.value;
    const searchResult = userArr.indexOf(inputId);
    if(searchResult == -1){
        //사용가능
        idCheckMsg.innerText = "사용 가능한 아이디 입니다.";
        idCheckMsg.style.color = "green";
    }else{
        //이미 사용중
        idCheckMsg.innerText = "이미 사용중인 아이디 입니다.";
        idCheckMsg.style.color = "red";
    }
});