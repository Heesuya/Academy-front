//한줄주석
/*
범위주석
범위주석
*/ 
//console.log(내용) : 개발자도구 화면의 console에 내용을 출력
// -> 개발 도중 확인을 위한 목적을 사용 -> 개발이 끝나면 삭제
console.log("메세지");
console.log("메세지");
console.log(100);
console.log(100+200);
console.log("문자열"+100);
console.log("문자열",100,"hi",200);//매개변수를 여러개 전달하면 모두 출력(띄어쓰기로 구분)

//alert(내용) : 내용을 알림창으로 출력

//alert("메세지");
//alert(100);
//alert(100+200);
//alert("문자열"+100);
//alert("문자열",100,"hi",200);//매개변수를 여러개 전달하면 첫번째 매개변수만 나오고 나머지는 다 버림

//confirm 과 prompt 잘 사용 안함 모달 사용
//confirm("질문") : 사용자에게 질문을 보여주고 질문에 대한 결과를 true/false로 받아옴
if(confirm("자바스크립트는 css보다 괜찮아요?")){
    console.log("js");
}else{
    console.log("css");
}

//prompt(질문) : 사용자에게 질문을 보여주고 값을 입력받아서 그 결과를 문자열로 가져옴
console.log(prompt("당신의 이름은?"));

