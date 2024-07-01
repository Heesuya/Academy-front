/*
자바에서 변수선언
자료형 변수명;
int num;
String str;

자바스크립트에서 변수선언
var 변수명;
var num;
var str;
-> 자바스크립트는 변수 선언 시 데이터 타입을 지정하지 않음
-> 변수에 데이터가 입력될 때 그때 자료형이 자동으로 결정
 */

var name1;//변수를 선언만하고 값을 대입하지않으면 자료형도, 데이터도 모두 지정되지 않은 상태
console.log(name1);
console.log(typeof name1);//typeof 변수명 -> 해당 변수의 자료형을 출력
name1 = "이윤수";         //변수에 값을 대입하면 그때 자료형과 데이터가 정의
console.log(name1);
console.log(typeof name1);

var age1;
console.log(age1, typeof age1);
age1 = 30;
console.log(age1, typeof age1);
age1 = "안녕";          //변수에 대입되는 데이터의 타입이 변경되면 변수의 자료형도 같이 변경
console.log(age1, typeof age1);

{
    var test1 = "test1";
    console.log(test1, typeof test1);
}
//var를 이용해서 변수를 사용하면 변수의 범위효과가 없음 -> 복잡한코드 작성 시 이미 사용한 변수인지 체크가 불가능
console.log(test1);

//es6 변수선언하는 방법(let, const)
//2. let
let name2;
console.log(name2, typeof name2);
name2 = "이윤수";
console.log(name2, typeof name2);

let age2;
console.log(age2, typeof age2);
age2 = 25;
console.log(age2, typeof age2);

{
    let test2 = "test2";
    console.log(test2, typeof test2);
}
//console.log(test2);   //test2변수는 중괄호 안에서 만들어진 변수로 해당 변수의 사용범위는 만들어진 중괄호 내부까지

//3. const(상수) : 한번 값이 대입되고나면 변경이 불가능한 변수
//변수선언 -> 대입 순서로 사용이 불가능하고, 선언하면서 바로대입(이때 입력된 값을 변경불가)
const name3 = "이윤수";
console.log(name3, typeof name3);
const age3 = 33;
console.log(age3, typeof age3);
//name3 = "이윤수4";         //상수형 변수는 한변 대입된 값을 변경하려고하면 에러
//console.log(name3);

{
    const test3 = "test3";
    console.log(test3);
}
//console.log(test3);

let arr1 = [1,2,3,4,5];
console.log(arr1);
arr1[2] = 100;
console.log(arr1);

const arr2 = [1,2,3,4,5];
console.log(arr2);
arr2[2] = 200;
console.log(arr2);
//배열의 주소는 안바뀐 상태로 내부 데이터만 바뀌어서 제한이 없당
