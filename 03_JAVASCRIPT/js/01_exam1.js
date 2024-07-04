function changeInfo() {
    const nameText = prompt("이름 : ");
    const ageText = prompt("나이 : ");
    const addrText = prompt("주소 : ");

    const nameChange = document.querySelector("#name");
    nameChange.innerText = nameText;
    const ageChange = document.querySelector("#age");
    ageChange.innerText = ageText;
    const addrChange = document.querySelector("#addr");
    addrChange.innerText = addrText;
}


const q2 = document.querySelector("#q2");
q2.onclick = function () {
    const input1 = document.querySelector("#input1");
    const inputValue = input1.value;
    if (isFinite(inputValue)) {
        if (inputValue % 2 == 0) {
            input1.innerText = "짝수";
        } else if (inputValue % 2 == 1) {
            input1.innerText = "홀수";
        }

    } else {
        input1.innerText = "숫자가 아니";
    }
}

//함수를 실행하면서 this를 매개변수로 전달하면
//함수를 실행시킨 태그를 dom객체로 받을 수 있음
function changeImage(param) {
    //const img = document.querySelector("#img");
    img.src = "image/angel.png";
}

const q4 = document.querySelector("#q4");
q4.onclick = function () {
    const result = document.querySelector("#result");
    result.style.color = "navy";
}