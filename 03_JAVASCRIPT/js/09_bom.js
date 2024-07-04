console.log(222);

const btn1 = document.querySelector("#btn1");
btn1.onclick = function(){
    /*
    window.open(param1,param2,param3);
    param1 : 주소(새 창에서 열릴 페이지 주소)
    param2 : 창이름
    param3 : 창옵션
     */
    window.open("http://www.naver.com","네이버","width=500, height-500");
}


const btn2 = document.querySelector("#btn2");
let timeoutId;
btn2.onclick = function(){
    /*
    window.setTimeout(param1,param2);
    param1 : 일정시간 후 실행할 함수
    param2 : 일정시간(ms)
     */
    timeoutId = window.setTimeout(function(){
        alert("짠!!!!!!");
    },5*1000);
}

const btn3 = document.querySelector("#btn3");
btn3.onclick = function(){
    window.clearTimeout(timeoutId);
}

const btn4 = document.querySelector("#btn4");
let intervalId;
btn4.onclick = function(){
    /*
    window.setInterval(param1,param2);
    param1 : 일정시간 마다 반복해서 실행할 함수
    param2 : 일정시간(ms)
    */
    intervalId = window.setInterval(function(){
        console.log("인터벌함수로 출력");
    },3*1000);
}


const btn5 = document.querySelector("#btn5");
btn5.onclick = function(){
    window.clearInterval(intervalId);
}

const timeStart = document.querySelector("#timeStart");
let timeId;
timeStart.onclick = function(){

    timeId = window.setInterval(function(){
        const date = new Date();
        //const currentTime = date.getHours()+" : "+date.getMinutes+()" : "+date.getSeconds();
        const currentTime = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}.${date.getMilliseconds()}`;
        const timeZone = document.querySelector("#time-zone");
        timeZone.innerText = currentTime;
    },0.01*1000);


}


const timeStop = document.querySelector("#timeStop");
timeStop.onclick = function(){
    window.clearTimeout(timeId);
}

const btn7 = document.querySelector("#btn7");
btn7.onclick = function(){
    console.log("화면 높이 : "+screen.height);
    console.log("화면 넓이 : "+screen.width);
    console.log("실제 사용 가능 높이 : "+screen.availHeight);
    console.log("실제 사용 가능 너비 : "+screen.availWidth);
    console.log("사용 가능한 색상 수 : "+screen.colorDepth);
    console.log("한 픽셀 당 비트 수 : "+screen.pixelDepth);
}

const btn8 = document.querySelector("#btn8");
btn8.onclick = function(){
    location.href = "http://www.naver.com";
}


const btn9 = document.querySelector("#btn9");
btn9.onclick = function(){
    location.reload();
}