function addMember() {
    const inputName = prompt("이름을 입력하세요.");
    const inputAge = prompt("나이를 입력하세요.");
    const inputAddr = prompt("주소를 입력하세요.");
    
    const memberArr = new Array();
    const addMember = mekeMember(inputName, inputAge, inputAddr);
    memberArr.push(addMember);
    
    const exam1 = document.getElementById("exam1");
    const tr = document.createElement("tr");
    const th1 = document.createElement("th");
    const th2 = document.createElement("th");
    const th3 = document.createElement("th");
    const name = document.createTextNode(memberArr[0].name);
    const age = document.createTextNode(memberArr[0].age);
    const addr = document.createTextNode(memberArr[0].addr);
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
    }
}


///////////////////////////////////////////////////////////////////
function addMember2() {
    const inputName = prompt("이름을 입력하세요.");
    const inputAge = prompt("나이를 입력하세요.");
    const inputAddr = prompt("주소를 입력하세요.");
    
    const exam2 = document.getElementById("exam2");
    const tr = document.createElement("tr");
    const th1 = document.createElement("th");
    const th2 = document.createElement("th");
    const th3 = document.createElement("th");
    const th4 = document.createElement("th");
    const btn = document.createElement("button");
    const btnDel = document.createTextNode("삭제");
    const name = document.createTextNode(inputName);
    const age = document.createTextNode(inputAge);
    const addr = document.createTextNode(inputAddr);
    th1.appendChild(name);
    th2.appendChild(age);
    th3.appendChild(addr);
    btn.appendChild(btnDel)
    th4.appendChild(btn);
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);
    exam2.appendChild(tr);

    btn.onclick = function(){
        tr.remove();
    }
}
