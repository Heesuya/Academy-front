function addMember() {
    const inputName = prompt("이름을 입력하세요.");
    const inputAge = prompt("나이를 입력하세요.");
    const inputAddr = prompt("주소를 입력하세요.");
    
    const memberArr = new Array();
    const addMember = mekeMember(inputName, inputAge, inputAddr);
    memberArr.push(addMember); //굳이 배열에 저장 안해도 됨~
    /*
    // 강사님
    const exam1 = document.querySelector("#exam1");
    const tr = document.createElement("tr");
    const namdTd = document.createElement("td");
    const ageTd = document.createElement("td");
    const addrTd = document.createElement("td");
    */
    const exam1 = document.querySelector("#exam1>tbody"); //웹브라우저 해석할때 tbody 들어가서 규칙 깨지지 않게 선택자 사용해서 넣어야함.
    const tr = document.createElement("tr");
    const th1 = document.createElement("td");
    const th2 = document.createElement("td");
    const th3 = document.createElement("td");
    const name = document.createTextNode(inputName);
    const age = document.createTextNode(inputAge);
    const addr = document.createTextNode(inputAddr);
    th1.appendChild(name);
    th2.appendChild(age);
    th3.appendChild(addr);
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    exam1.appendChild(tr);

    function mekeMember(param1,param2,param3) {
        const member = {
            name : param1,
            age : param2,
            addr : param3
        }
        return member;
    }//만들필요 없었다. 
}


///////////////////////////////////////////////////////////////////
function addMember2() {
    const inputName = prompt("이름을 입력하세요.");
    const inputAge = prompt("나이를 입력하세요.");
    const inputAddr = prompt("주소를 입력하세요.");
    
    const tr = document.createElement("tr");
    const th1 = document.createElement("td");
    const th2 = document.createElement("td");
    const th3 = document.createElement("td");
    const th4 = document.createElement("td");
    const btn = document.createElement("button");
    const delBtn = document.createTextNode("삭제");
    const name = document.createTextNode(inputName);
    const age = document.createTextNode(inputAge);
    const addr = document.createTextNode(inputAddr);
    th1.appendChild(name);
    th2.appendChild(age);
    th3.appendChild(addr);
    btn.appendChild(delBtn)
    th4.appendChild(btn);
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);
    const exam2 = document.querySelector("#exam2>tbody");
    exam2.appendChild(tr);

    btn.onclick = function(){
        tr.remove();
    }
    //객체라고 생각하면 된당~
}
