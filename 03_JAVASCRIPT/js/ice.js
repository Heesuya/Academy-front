function minus(){
    const count = document.querySelector("#count");
    const countValue = count.value;
    const won = document.querySelector("#won");
    const wonValue = won.value;
    if(countValue == 1){
        alert("최소 수량은 1부터 입니다.");
    }else{
        count.value = Number(countValue)-1;
        won.value = Number(wonValue)-3800;
    }
}

function plus(){
    const count = document.querySelector("#count");
    const countValue = count.value;
    const won = document.querySelector("#won");
    const wonValue = won.value;
    if(countValue == 10){
        alert("현재 재고는 10개 입니다.");
    }else{
        count.value = Number(countValue)+1;
        won.value = Number(wonValue)+3800;
    }
}


const tap = document.querySelectorAll(".tap>div");
const tapContent = document.querySelectorAll(".tap-content>div");

tap.forEach(function(item,i){
    item.addEventListener("click",function(){
        tapContent.forEach(function(item){
            item.classList.remove("active-content");
        });
        tap.forEach(function(item){
            item.classList.remove("active-tap");
        });
        tapContent[i].classList.add("active-content");
        tap[i].classList.add("active-tap");
    });
});

tapContent[0].classList.add("active-content");
tap[0].classList.add("active-tap");