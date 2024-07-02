//텍스트노드를 갖고있는 태그를 화면에 추가
function func1() {
    //<p>안녕</p> 태그를 생성해서
    //add-zone내부에 추가
    //1. 요소노드 생성(내가 추가하고싶은 태그를 생성)
    const p = document.createElement("p");//<p></p>
    //2. 텍스트노드 생성(내가 추가하고싶은 글씨)
    const text = document.createTextNode("안녕");//안녕 이란 글씨 생성
    //appendChild(node) : 매개변수로 받은 node를 마지막 자식으로 추가
    p.appendChild(text);//<p>안녕</p>

    //이미 작성된 문서(07_dom1.html)에서 특정 태그를 가져오는 방법 
    //문서에서 아이디가 add-zone인 태그를 객체형식으로 가지고오는 방법
    const addZone = document.getElementById("add-zone");
    //가지고온 addZone에 생성한 p태그를 마지막 자식으로 추가
    addZone.appendChild(p);
}
//텍스트노드가 없는 태그를 화면에 추가
function func2() {
    //<img src="image/dora.png">태그를 생성해서
    //add-zone 내부에 추가
    const img = document.createElement("img");//<img>
    //img태그는 속성을 통해서 컨텐츠를 표현 -> 속성을 설정해줘야 함
    img.src = "image/dora.png";//<img src="image/dora.png">

    //id가 add-zone인 태그를 가져옴
    const addZone = document.getElementById("add-zone");

    //addZone에 방금생성한 img태그 마지막자식으로 추가
    addZone.appendChild(img);
}
{/* 
<ul>
    <li><a href="#">메뉴1</a></li>
    <li><a href="#">메뉴2</a></li>
    <li><a href="#">메뉴3</a></li>
</ul> 
*/}
function func3() {
    const ul = document.createElement("ul");
    const arr = ["메뉴1", "메뉴2", "메뉴3"];
    arr.forEach(function (item) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        const text = document.createTextNode(item);
        a.href = "#";
        a.appendChild(text);
        li.appendChild(a);
        ul.appendChild(li);
    });
    /*
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");

    const a1 = document.createElement("a");
    a1.href="#";
    const a2 = document.createElement("a");
    a2.href="#";
    const a3 = document.createElement("a");
    a3.href="#";

    const text1 = document.createTextNode("메뉴1");
    const text2 = document.createTextNode("메뉴2");
    const text3 = document.createTextNode("메뉴3");

    a1.appendChild(text1);
    a2.appendChild(text2);
    a3.appendChild(text3);
    
    li1.appendChild(a1);
    li2.appendChild(a2);
    li3.appendChild(a3);

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    */

    const testzone = document.getElementById("test-zone");
    testzone.appendChild(ul);
}

function func31() {
    const testZone = document.getElementById("test-zone");
    const ul = document.createElement("ul");

    const li = document.createElement("li");
    const a = document.createElement("a");
    li.appendChild(a);
    const text = document.createTextNode("메뉴1");
    li.appendChild(text);
    li.appendChild(a);

    const li2 = document.createElement("li");
    const a2 = document.createElement("a");
    li2.appendChild(a2);
    const text2 = document.createTextNode("메뉴2");
    li2.appendChild(text2);
    li2.appendChild(a2);

    const li3 = document.createElement("li");
    const a3 = document.createElement("a");
    li3.appendChild(a3);
    const text3 = document.createTextNode("메뉴3");
    li3.appendChild(text3);
    li3.appendChild(a3);

    ul.appendChild(li);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(ul);
}
//자바스크립트에서 dom을 이용한 css 변경방법
//dom객체.style.css속성이름 = css값;
function func4() {
    //비밀번호가 입력되어있는 input의 type 속성을 text로 변경
    const pw = document.getElementById("pw");
    pw.type = "text";

    //비밀번호 보이기버튼 숨김
    const showBtn = document.getElementById("show-btn");
    //비밀번호 보이기버튼 숨김(css중 display속성을 none으로 변경)
    showBtn.style.display = "none";

    //비밀번호 숨기기 버튼을 화면에 표시(css 중 display속성을 inline-block으로 변경)
    const hideBtn = document.getElementById("hide-btn");
    hideBtn.style.display = "inline-block";
}

function func5() {
    //비밀번호가 입력되어있는 input의 type 속성을 password로 변경
    const pw = document.getElementById("pw");
    pw.type = "password";

    //비밀번호 보이기 버튼 화면에 표시
    const showBtn = document.getElementById("show-btn");
    showBtn.style.display = "inline-block";

    //비밀번호 숨기기 버튼 숨김
    const hideBtn = document.getElementById("hide-btn");
    hideBtn.style.display = "none";
}

function func6() {
    //id가 h2인태그의 글씨색(white)/배경색변경(black)
    const h2 = document.getElementById("h2");
    h2.style.color = "white";
    //적용하려는 css 속성이름에 - 들어가면 카멜표기법으로변경
    h2.style.backgroundColor = "black";
}

function func7() {
    //const delDiv = document.querySelector("#del-div3");
    //delDiv.remove();
    /*
    const delDiv = document.getElementById("del-div3");
    //해당요소 삭제 
    */
    // const delDiv = document.querySelectorAll(".del-div");
    // delDiv[2].remove();

    const divs= document.querySelectorAll("#del-div3");
    divs[0].remove();
}

function func8() {
    const divs = document.querySelectorAll(".del-div");
    divs.forEach(function(item){
        item.remove();
    });
    
    // for(let i=0; divs.length; i++){
    //     divs[i].remove();
    // }
    //문서에서 요소를 가져오는방법
    //document.querySelector("css선택자") : 
    // -> 해당 선택자에 해당하는 요소를 1개 가져옴(만약에 동일한 섵개자로 요소가 여러개면 제일 먼저 작성된것 1개)
    //document.querySeletorAll("css선택자") : 
    // -> 해당 선택자에 해당하는 요소를 모두 배열형태로 가져옴(선택자로 선택된요소가 1개여도 배열)


    //del-div클래스를 가지고 있는 요소를 전부 다 가져와 -> 배열
    //해당 클래스를 가진 요소가 만약 1개여도 무조건 배열로 가져옴
    /*
    const divs = document.getElementsByClassName("del-div");
    for(let i=0; divs.length; i++){
        divs[0].remove();
    }
    */
    //console.log(divs);
}

function func9() {
    const btn = document.querySelector("#btn");
    //onclick속성을 설정할때는 반드시 함수형태로 적용
    btn.onclick = function(){
        const div5 = document.querySelector("#del-div5")
        div5.remove();
    }
}
function func10() {
    const btn = document.querySelector("#btn");
    btn.onclick = null;
    
}