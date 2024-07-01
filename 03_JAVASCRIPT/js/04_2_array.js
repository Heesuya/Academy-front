//forEach, map, filter 자주 사용함~
//리액트 등 쓰면 map, filter 많이 씀

const arr1 = ["hi","hello",100,true,[1,2,3,4]];
console.log(arr1);

for(let i = 0; i < arr1.length; i++){
    console.log(i, arr1[i]);
}
//forEach : 해당배열에 처음부터 끝까지 순회하면서 필요한 동작을 수행하는 함수
//필요한 동작을 함수형태로 forEach의 매개변수로 전달
//이때 내부함수의 매개변수는 2개
//첫번째 매개변수 : 반복하면서 접근하는 배열의 각 요소 -> arr1[i]
//두번째 매개변수 : 반복회차의 인덱스번호 -> i
//배열의 길이만큼 자동으로 반복하는 반복문
arr1.forEach(function(item, i){
    console.log(i, item);
});
//매개변수는 순서가 중요하며, 이름은 아무 상관없음
arr1.forEach(function(data1, data2){
    console.log(data2, data1);
});
//인덱스번호가 필요 없는경우 선언하지 않고 사용하지 않아도 됨
arr1.forEach(function(item){
    console.log(item);
});
//인덱스번호는 필요하고 데이터는 필요없을때 
arr1.forEach(function(i){
    console.log(i); //위에랑 다를게 없당
});

//map : forEach와 마찬가지로 배열을 순회하는함수 + return을 작성하면 리턴하는값을 다시 배열로 묶어서 줌
const arr2 = arr1.map(function(item, i){
    const str = `${i}번째 아이템은 ${item}`;
    console.log(str);
    return str;
});
console.log(arr2);

//filter : 배열에서 특정 조건에 만족하는 데이터만 필터링할때 사용
const arr4 = [6,2,3,4,5,1];
//arr4에 있는 데이터 중 3보다큰 데이터만 다시 배열로 저장
const arr5 = new Array();
arr4.forEach(function(item){
    if(item > 3){
        arr5.push(item);
    }
});
console.log(arr5);

const arr6 = arr4.map(function(item){
    if(item>3){
        return item;
    }
});
console.log(arr6);
const arr7 = arr4.filter(function(item){
    //해당회차에서 true/false를 리턴 -> 이때 true를 리턴하는 회차의 item을 결과 배열에 추가
    return item>3;
});
console.log(arr7);


//reduce : 배열값을 이용해서 연산을하여 특정값을 도출할때 사용   (합계 구할때)
//[6,2,3,4,5,1]
let sum = 0;
arr4.forEach(function(item){
    sum += item;
});
console.log(sum);

const sum2 = arr4.reduce(function(acc,curr,i){
    /*
    세번째 매개변수 : 반복회차 변수
    반복 첫번째회차 : acc - 배열 첫번째 수, curr - 배열 두번째 수
    반복 두번째회차부터 끝까지 : acc - 이전회차에서 리턴한 수, curr - 배열의 이번회차 item
    */
    console.log(acc,curr,i);
    return acc+curr;
});
console.log(sum2);