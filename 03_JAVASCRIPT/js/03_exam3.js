const color = new Array();
const divs = document.querySelectorAll(".divs");
let arr = new Array();


//알고리즘과 코테 준비하면 봐야하는 구조.
//내부에서 자기 자신을 호출하는 함수를 재귀함수
divs.forEach(function(div){
    div.onclick = function(){
    removeDiv(div);
    }
});


function removeDiv(obj){ 
    arr.push(obj.id);//다시 div 생성할 때 지워진 순서대로 생성하려고
    obj.remove();
    if(arr.length == 5){
        const divWarp = document.querySelector("#divWrap");
        arr.forEach(function(color){
            const newDiv = document.createElement("div");//<div></div>
            newDiv.classList.add("divs");//<div class="divs"></div>
            newDiv.id = color;//<div class="divs" id="배열에들어있는순서대로"></div>
            newDiv.onclick =function(){
                removeDiv(newDiv);
            }
            divWarp.appendChild(newDiv);
        });
        arr = new Array();
    }
}


/*
//강사님
divs.forEach(function(div){
    div.onclick = function(){
        arr.push(div);
        div.remove();
        console.log(arr[0]);
        if(arr.length == 5){
            const divWarp = document.querySelector("#divWrap");
            for(let i = 0; i < 5; i ++){
                //돔객체를 바로 푸쉬한거라 같은애라 클릭이 바로 적용 //버린거 다시 붙여놓기한거라 생각하면 됨.
                divWarp.appendChild(arr[i]);
                //객체지향으로 보면 처음 만들어진애와 나중에 만들애는(주소) 다른 애이다. 
                //divWarp.innerHTML += arr[i].outerHTML;
            }
            arr = new Array();
        }
    }
})
*/

/*
//강사님
divs.forEach(function(div){
    div.onclick = function(){
        div.style.display = "none";
        arr.push(div.id);
        console.log(arr);
        if(arr.length == 5 ){
            divs.forEach(function(changeDiv, i){
                changeDiv.id = arr[i];
                changeDiv.style.display = "block";       
            });
            arr = new Array();
        }
    }
});
*/

/*
divs.forEach(function(item){
    item.onclick = function(){
        color.push(item.id);
        item.style.display = "none";
        if(color.length ==5){
            for(let i = 0; i < 5; i++){
                divs[i].id = color[i];
            }
            divs.forEach(function(item){
                item.style.display = "block";
            });
            color.splice(0,5);
        }
    }
});
*/


/*
const red = document.querySelector("#red");
red.onclick = function () {
    color.push(red.id);
    red.style.display = "none";
    if (color.length == 5) {
        for (let i = 0; i < 5; i++) {
            divs[i].id = color[i];
        }
        divs.forEach(function(item){
            item.style.display = "block";
        });
        color.splice(0,5);  
    }
    console.log(color.length);
}


const blue = document.querySelector("#blue");
blue.onclick = function () {
    color.push(blue.id);
    blue.style.display = "none";

    if (color.length == 5) {
        for (let i = 0; i < 5; i++) {
            divs[i].id = color[i];
        }
        divs.forEach(function(item){
            item.style.display = "block";
        });  
        color.splice(0,5);  
    }
}


const green = document.querySelector("#green");
green.onclick = function () {
    color.push(green.id);
    green.style.display = "none";

    if (color.length == 5) {
        for (let i = 0; i < 5; i++) {
            divs[i].id = color[i];
        }
        divs.forEach(function(item){
            item.style.display = "block";
        });  
        color.splice(0,5);  
    }
}


const pink = document.querySelector("#pink");
pink.onclick = function () {
    color.push(pink.id);
    pink.style.display = "none";

    if (color.length == 5) {
        for (let i = 0; i < 5; i++) {
            divs[i].id = color[i];
        }
        divs.forEach(function(item){
            item.style.display = "block";
        });  
        color.splice(0,5);  
    }
}


const yellow = document.querySelector("#yellow");
yellow.onclick = function () {
    color.push(yellow.id);
    yellow.style.display = "none";

    if (color.length == 5) {
        for (let i = 0; i < 5; i++) {
            divs[i].id = color[i];
        }
        divs.forEach(function(item){
            item.style.display = "block";
        });  
        color.splice(0,5);  
    }
}
*/