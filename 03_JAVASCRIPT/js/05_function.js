/*
자바에서 메소드 선언방법 
[접근제어지시자] 리턴타입 메소드이름(매개변수){
    수행코드
    return 되돌려줄 데이터;
}
public int testMethod(int num){
    int data = num*num;
    return data;    
}
*/
//1. 선언적 함수 : javascript코드가 동작할때 가장 먼저 만들어짐
//                -> 함수생성코드보다 먼저 실행코드가 있어도 문제
/*
function 함수이름(매개변수){
    수행코드
    [return]    
}
*/
function func1(){
    console.log("tunc1 함수 동작");
}
//선언적 함수 호출 : 함수이름(매개변수);
const data1 = func1();
console.log(data1);

const data2 = func2();
console.log(data2);

function func2(){
    console.log("func2 함수 동작");
    return "hi";
}

//2. 익명함수1 : function에 이름을 붙여주는게아니라 변수에 저장하는 형태
// 변수에 저장하는 형태이므로, 반드시 변수를 선언한 후 사용해야 함. 
const data3 = function (){
    console.log("익명함수1");
}
console.log(data3, typeof data3);
const data4 = data3();
console.log(data4);

const data5 = function(){
    console.log("익명함수2");
    return 100;
}

const data6 = data5();
console.log(data6);

//3. 익명함수2 : function에 이름을 붙이지않음, 변수에 저장도 안함
//              -> 스스로 한번만 실행하고 재사용하지 않는 경우
(function (){
    console.log("익명함수 - 저는 스스로 동작하고 아무도 나를 부를순없죠!!")
})();