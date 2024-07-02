//JAVA - > HashMap 
//key1:value1, key2:value2, key3:value3....
//객체생성
const obj1 = {
    name:"유저1",
    age:100,
    addr:"서울시",
    test1:[1,2,3,4],
    test2:true,
    test3 : function(){
        console.log("hi");
    }
};
console.log(obj1);
//객체이름.key -> 해당 value를 가져옴
console.log(obj1.name);
console.log(obj1.addr);
console.log(obj1["test2"]);//객체이름["key"] -> value를 가져옴
console.log(obj1.test1[2]);
obj1.test3();
//객체 값 변경
obj1.age = 50;
console.log(obj1);
obj1.name = 100;
console.log(obj1);

//객체 값 추가하는 방법(객체 값 변경방법과 동일 -> 없는 키를 사용해서 )
obj1.test4 = 1000;
console.log(obj1);
obj1.a = "테스트";
console.log(obj1);

//in : 객체에서 해당 key값을 사용하고 있는지 체크하는 기능 
console.log("a" in obj1);//obj1 객체에서 a라는 키를 사용중이면 true / 아니면 false
console.log("b" in obj1);
console.log(obj1);

//객체에서 속성 삭제하는 방법
delete obj1.age;        //obj1 객체에서 age속성 삭제
console.log(obj1);

//자유도가 높지만 하나하나 챙겨야하마 

const obj2 = {
    a:100,
    b:200,
    c:function () {
        console.log("객체 내부 함수");
        return "객체 내부 함수 리턴";
    }
}
console.log(obj2.a);
console.log(obj2.b);
obj2.c();
const data1 = obj2.c;       //익명함수 만들어진것과 똑같다.
const data2 = obj2.c();
console.log(data1);
console.log(data2);
data1();

//회원(이름/나이/주소) 여러명 정보 관리 
const memberArr = new Array();
const member1 = {
    name : "유저1",
    age : 20,
    addr : "서울시 강남구"
}
memberArr.push(member1);
const member2 = {
    name : "유저2",
    age : 30,
    addr : "서울시 종로구"
}
memberArr.push(member2);

const member3 = makeMember("유저3",25,"서울시 영등포구");
memberArr.push(member3);

const member4 = new Member("유저4",33,"경기도 양평");

console.log(memberArr);

//1. 함수를 이용해서 객체를 생성(매개변수로 데이터를 받아서 객체 생성 후 리턴하는 함수)
function makeMember(param1,param2,param3){
    const obj = {
        name : param1,
        age : param2,
        addr : param3
    }
    return obj;
}

//2.생성자를 이용한 객체생성
function Member(param1, param2, param3) {
    this.name = param1;
    this.age = param2;
    this.addr = param3;
}