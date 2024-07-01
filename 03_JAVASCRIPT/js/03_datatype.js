/* 
javascript의 자료형 -> 변수에 저장되는 자료의 형태
문자열/숫자/논리형/undefined
객체/배열/function
*/
//undefined : 정의되지 않음 -> 변수를 선언했으나 변수의 자료형이 정의되지 않은 상태

let test1;
console.log(test1);

//문자열 -> string : "문자열", '문자열'
const str = "JavaScript";
console.log(typeof str, str);
//typeof의 다른 문법
console.log(typeof(str));
//javascript string 타입에서 사용할 수 있는 함수(내장되어있는 함수)
console.log(str.length);//문자열의 길이 리턴
console.log(str.toLowerCase());//전부 다 소문자로 변환해서 리턴
console.log(str);              //변수에 있는 원본데이터는 영향을 받지 않음
console.log(str.toUpperCase());//전부 다 대문자로 변환해서 리턴
//매개변수로 전달한 문자열이 대상 문자열의 몇번째에 있는지 찾아서 그 위치를 리턴(앞에서부터 검색시작)
console.log(str.indexOf("a"));
//매개변수로 전달한 문자열이 대상 문자열의 몇번째에 있는지 찾아서 그 위치를 리턴(뒤에서부터 검색시작)
console.log(str.lastIndexOf("a"));
console.log(str.indexOf("z"));//매개변수로 전달한 문자열이 존재하지 않으면 -1을 리턴
//해당인덱스에 존재하는 문자열 1개를 추출해서 리턴
console.log(str.charAt(4));
//for(int i=3; i<7, i++)
console.log(str.substring(3,7));//문자열에서 3번인덱스부터 7번인덱스 앞까지 문자열을 리턴
console.log(str.substring(3));//3번인덱스부터 끝까지 리턴

const study = "java,oracle,jdbc,html,css,javascript";
const arr = study.split(",");//매개변술 전달한 값을 기준으로 문자열을 잘라서 배열로 리턴
console.log(arr);

//숫자타입 -> number -> 정수/실수 구분하지않고 모두 number타입
const num = 3.5;
console.log(num, typeof num);

console.log(Math.abs(num));
console.log(Math.abs(-100));
console.log(Math.random());//0~1사이의 랜덤 실수 1개를 추출
console.log(Math.round(num));//반올림
console.log(Math.ceil(3.1));//올림
console.log(Math.floor(3.9));//버림

//논리형 : true / false
const test2 = true;
console.log(typeof test2, test2);
const test3 = (100==200);
console.log(typeof test3, test3);

//자동형변환
const userName = "유저1";
const userAge = 20;
const userGrade = "2";
console.log(typeof userName, typeof userAge, typeof userGrede);
console.log(userName+ userAge);//"유저1" + 20 -> "유저1" + "20" -> "유저120"
console.log(userName + userGrade);//"유저1" + "2" -> "유저12";
console.log(userAge + userGrade)//20 + "2" -> "20" + "2" -> "202";
//javascript에서는 +를 제외한 산술연산은 무조건 숫자연산
console.log(userAge - userGrade);//20 - "2" -> 20 - 2 -> 18
//NaN(Not a Number) -> 산술연산을 해야하는데 숫자로 변경이 불가능한경우 NaN처리
console.log(userAge - userName);//20 - "유저1" -> 20  - NaN -> NaN

//제 이름은 user1이고, 나이는 20살 2학년 입니다.
console.log("제 이름은 "+userName+"이고, 나이는 "+userAge+"살 "+userGrade+"학년 입니다");
//백틱(`)을 이용한 문법
console.log(`제 이름은 ${userName}이고, 나이는 ${userAge}살, ${userGrade}학년입니다`);
console.log("제 이름은 ${userName}이고, 나이는 ${userAge}살, ${userGrade}학년입니다");

//수동 형변환
const test11 = "100";
console.log(test11, typeof test11);
const test22 = Number(test11);//test11에 있는 테이터를 number타입으로 변환
console.log(test22, typeof test22);
const test33 = String(test22);//test22에 있는 데이터를 string타입으로 변환
console.log(test33, typeof test33);

//연산자, 제어문 -> 자바와 거의 동일

//자바스크립트에만 있는 연산자 : a == b / a != b
const oper1 = "1";
const oper2 = 1;
console.log(oper1 == oper2);        //자료형과 상관없이 자동형변환을하여 값이 일치하면 true(!=)

console.log(oper1 === oper2);       //자료형과 모두 일치해야 true(부정 : !==) //권고

//제어문 
for(let i = 0; i < 3 ; i++){
    console.log("안녕하세요");
}

const input = prompt("숫자를 입력하세요");
console.log(input, typeof input);
//입력받은 값이 홀수인지 짝수인지 구분해서 출력

const inputNumber = Number(input);
if(inputNumber%2 == 1){
    console.log("홀수");
}else{
    console.log("짝수");
}

//잛은 조건문
//&&연산과 || 연산의 동작 방식을 이용하는 조건문
inputNumber%2 == 0 || console.log("홀수!!!!");
inputNumber%2 == 0 && console.log("짝수!!!!!!!"); //이런 코드를 볼수도 있다.

