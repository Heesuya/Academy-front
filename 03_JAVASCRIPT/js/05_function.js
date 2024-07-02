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


//함수의 매개변수 
//함수의 매개변수 작성시 변수의 이름은 아무 상관이 없음. 중요한건 순서
function func3(str, num){
    console.log("func3 실행");
    console.log(str, typeof str);
    console.log(num, typeof num);
}
func3("안녕",100);
func3(100,"안녕");   
func3([1,2,3],true); //자료형 보내도 상관없당~
//선언한 매개변수보다 매개변수를 부족하게 전달하는 경우 : 앞에서부터 순서대로 사용, 전달되지않은 값은 undefined로 처리
func3("안녕"); 
//선언한 매개변수보다 매개변수를 많이 전달하는 경우 : 선언한 매개변수까지만 사용하고 나머지는 사용하지 않음
func3("100", 200, 300, 400);

function func5(){
    console.log("func5 실행");
    console.log(arguments);
    for(let i=0; i<arguments.length;i++){
        console.log(arguments[i], typeof arguments[i]);
    }
}
func5();
func5(100,200,300);

function func4(str){
    console.log(str.charAt(0));
}
func4("hi");
//func4(100); error

/*
public void test4(String str){
    sysout(str.charAt(0));
}

test4("hi");
test4(100); //java는 변수타입이 안맞으면 error
*/

///////////////////////////////////////////////////////////////////
//자바스크립트 내장함수(자바스크립트에서 기본적으로 지원되는 함수)
const url = "http://www.naver.com?query=날씨";
const str1 = encodeURI(url);        //최소한의 문자만 인코딩
console.log(str1);
const str2 = decodeURI(str1);       //encodeURI로 인코딩된 문자열을 다시 디코딩하는 함수
console.log(str2);

const str3 = encodeURIComponent(url);   //알파벳, 숫자,  . 을 제외하고 모두 인코딩  (암호화 정보를 심하게 가져간다 생각하자.)
console.log(str3);
const str4 = decodeURIComponent(str3);//encodeURIComponent로 인코딩된 문자열을 다시 디코딩하는 함수
console.log(str4);

//isFinite(data) : 매개변수가 전달한 데이터가 숫자인지 확인하는 함수 -> 숫자면 true / 아니면 false
//isNaN(data) : 매개변수가 숫자가 아닌지 확인하는 함수 -> 숫자가아니면 true / 숫자면 false 
const num1 = 100;
const num2 = "100";
console.log(isFinite(num1));
console.log(isFinite(num2));//자동형변환으로 숫자로 변경될 수 있으면 true
console.log(isNaN(num1));
console.log(isNaN(num2));//자동형변환으로 숫자로 변경될 수 있으면 false
