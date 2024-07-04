console.log(111);
const btn6 = document.querySelector("#btn6");
    console.log(btn6);

let lat;
let lng;

window.onload = function(){
    //만들고 자바스크립트 만들고~ 실행하고 화면 준비
    //전체적으로 초기화 할때 사용함
    const btn6 = document.querySelector("#btn6");
    btn6.onclick = function(){
        alert("6번버튼클릭");
    }


    console.log(333);

    //현재화면 로드가 완료되면 
    //현재 위치의 위도/경도를 구해서 매개변수로 전달한 함수에 파라미터 정보로 전달
    //매개변수로 전달한 함수 한번 실행 
    navigator.geolocation.getCurrentPosition(myLocation); //선언적 함수를 줘야한다. 

    const btn10 = document.querySelector("#btn10");
    btn10.onclick = function(){
        console.log("위도 : "+lat);
        console.log("경도 : "+lng);
    }
}

function myLocation(position){
    console.log(position);
    lat = position.coords.latitude;
    lng = position.coords.longitude;
}