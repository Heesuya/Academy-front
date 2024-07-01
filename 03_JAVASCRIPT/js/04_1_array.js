//어떤 언어든 배열은 중요하지만, 자바스크립트는 특별히 중요
//배열 : 여러개 데이터를 인덱스로 관리하는 자료형
//자바스크립트에서 배열을 선언한 방법
//방법 1 : 대괄호를 이용한 방법 
const arr1 = [1,2,3];//길이가 3인 배열을 선언하고 값을 순서대로 대입
console.log(arr1);
console.log(arr1[1]);//대괄호를 이용해서 해당인덱스에 접근이 가능
arr1[1] = 100;
console.log(arr1);
arr1[3] = 200;      //자바스크립트 배열을 최초 선언 후에도 길이가 변경될 수 있음
console.log(arr1);
arr1[5] = 500;      
console.log(arr1);
console.log(arr1[4]);
console.log(typeof arr1);

//방법2 : 배열 생성자를 이용하는 방법
//const arr2 = [];//길이가 0인 배열 생성
const arr2 = new Array();
console.log(arr2);
arr2[0] = 100;
arr2[1] = 200;
console.log(arr2);

//번회
const arr3 = new Array(1,2,3);//길이가 3인 배열을 선언하고 매개변수로 전달한 값을 순서대로 대입 
console.log(arr3);

for(let i=0;i<arr3.length;i++){
    console.log(arr1[i]);
}

//자바배열과 자바스크립트 배열의 차이점
//자바배열 : 동일한 자료 여러개를 인덱스로 관리
//자바스크립트 : 자료형과 무관하게 여러개 데이터를 인덱스로 관리
const arr4 = ["유저1",100,true,[1,2,3]];
for(let i = 0; i <arr4.length; i++){
    console.log(arr4[i], typeof arr4);
}

//배열에서 제공하는 기본함수
const arr = [1,2,3,4];
//indesOf(value) : 매개변수로 넓은 값이 배열에 존재하면 해당 인덱스번호를 리턴 / 없으면 -1리턴
console.log(arr.indexOf(3));
console.log(arr.indexOf(5));

//concat() : 여러 배열을 하나의 배열로 합쳐주는 함수
const fruits1 = ["사과","바나나","딸기"];
const fruits2 = ["복숭아","파인애플","귤"];
const testArr1 = [100,25,10,50];
const testArr2 = [true,false, [1,2,3,4]];

const data1 = fruits1.concat(fruits2,testArr1,testArr2);
console.log(fruits1);
console.log(fruits2);
console.log(testArr1);
console.log(testArr2);
console.log(data1);

//join(value) : 배열 내부의 데이터를 매개변수를 기준으로 구분해서 하나의 문자열로 리턴
const data2 = fruits1.join(",");
console.log(data2, typeof data2);
const data3 = fruits1.join(" ");
console.log(data3);
const data4 = fruits1.join();//매개변수를 주지않으면 기본값(,)으로 처리
console.log(data4);
const data5 = fruits1.join("");
console.log(data5);
//HTML태그를 자바스크립트에서 작성해야 하는 경우 
/* 
    <div>
    <ul>
        <li><a href="#">메뉴1</a></li>
        <li><a href="#">메뉴2</a></li>
    </ul>
</div> 
*/
//const data6 = "<div><ul><li><a href='#'>메뉴1</a></li><li><a href='#'>메뉴2</a></li></ul></div>";
const data6 = [
    "<div>",
    "   <ul>",
    "       <li><a href='#'>메뉴1</a></li>",
    "       <li><a href='#'>메뉴2</a></li>",
    "   </ul>",
    "</div>"
].join("");

console.log(testArr1);
//원본배열의 순서를 변경
//sort()함수에 매개변수를 주지않으면 유니코드기준으로 오름차순 정렬 
testArr1.sort();
console.log(testArr1);

function sortASC(a,b){
    return a-b;
}
function sortDESC(a,b){
    return b-a;
}
testArr1.sort(sortASC);
console.log(testArr1);
testArr1.reverse();//원본배열순서를 반전
console.log(testArr1);

//push,pop,unshift,shift : 배열에 데이터를 추가하거나 삭제하는 함수
const testArr3 = [1,2,"hello",true];
console.log(testArr3);
//push(data) : 매개변수로 전달한 데이터를 배열의 가장 뒤에 추가
testArr3.push(100);
console.log(testArr3);
testArr3.push("bye");
console.log(testArr3);
//pop() : 배열에서 가장 마지막값을 제거
testArr3.pop();
console.log(testArr3);

//unshift(data) : 매개변수로 전달한 데이터를 배열의 가장 앞에 추가(기존 데이터들은 인덱스번호가 1씩 밀림)
testArr3.unshift("안녕");
console.log(testArr3);
//shitf() : 배열의 첫번째 데이터를 삭제(0번인덱스 데이터 삭제) -> 나머지데이터들은 인덱스번호가 1씩 당겨짐
testArr3.shift();
console.log(testArr3);

//slice, splice
//slice : 배열의 지정된 인덱스번호를 복사해서 리턴 -> 원본배열에 변화가 없음
const testArr4 = testArr3.slice(1,3);//배열인덱스 1번부터 3번 앞까지 복사
console.log(testArr3);
console.log(testArr4);
//slice에 매개변수를 1개만 주면 해당인덱스부터 끝까지 복사
const testArr5 = testArr3.slice(3);
console.log(testArr3);
console.log(testArr5);

//testArr3 배열 전체를 복사하고 싶으면?
const testArr6 = testArr3;//얕은복사 -> 같은 배열의 주소를 복사(동일데이터를 공유)
console.log(testArr3);                  
console.log(testArr6);
testArr6[4] = 200;
console.log(testArr3);
console.log(testArr6);
//만약 깊은복사를 하고싶다면? slice
const testArr7 = testArr3.slice(0);
console.log(testArr3);
console.log(testArr7);
testArr7[4] = 300;
console.log(testArr3);
console.log(testArr7);
//깊은 복사 2번째 방법 -> 전개연산자를 활용 (이 방법 많이 씀)
const testArr8 = [...testArr3];
console.log(testArr3);
console.log(testArr8);
testArr8[4] = 400;
console.log(testArr3);
console.log(testArr8);
const testArr88 = [...testArr3,"추가데이터"];
console.log(testArr88);

//splice : 배열을 잘라내는 함수 -> 원본배열에서 잘라낸데이터가 사라짐
//splice함수의 매개변수가 2개인 경우
//첫번째 매개변수 : 잘라오기 시작할 인덱스번호 
//두번째 매개변수 : 잘라올 데이터 갯수 
const testArr9 = testArr3.splice(1,3);//1번인덱스부터 3개 잘라와 
console.log(testArr3);
console.log(testArr9);
//splice의 매개변수가 3개인 경우
//첫번째 매개변수 : 잘라오기 시작할 인덱스번호
//두번째 매개변수 : 잘라올 데이터 갯수 
//세번째 매개변수 : 잘라낸 자기에 삽일할 데이터 
console.log(testArr8);
const testArr10 = testArr8.splice(2,2,'test');
console.log(testArr8);
console.log(testArr10);

//splice를 이용한 배열의 중간 데이터를 수정/삭제/추가 하는 방법
//수정 : 배열.splice(수정하고싶은 인덱스번호,1,수정할 데이터);
//삭제 : 배열.splice(수정하고싶은 인덱스번호,1);
//추가 : 배열.splice(수정하고싶은 인덱스번호,0,삽입하고싶은 데이터);
console.log(testArr8);
testArr8.splice(2,1,"안녕");
console.log(testArr8);
testArr8.splice(2,1);
console.log(testArr8);
testArr8.splice(1,0,"안녕");
console.log(testArr8);