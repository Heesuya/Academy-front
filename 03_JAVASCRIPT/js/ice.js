const priceSpan = document.querySelector("#price");
const price = Number(priceSpan.innerText);

function minus(){
    const count = document.querySelector("#count");
    const countValue = count.value;
    if(countValue == 1){
        alert("최소 수량은 1부터 입니다.");
    }else{
        count.value = Number(countValue)-1;
        priceSpan.innerText = price*count.value;
    }
}

function plus(){
    const count = document.querySelector("#count");
    const countValue = count.value;
    if(countValue == 10){
        alert("현재 재고는 10개 입니다.");
    }else{
        count.value = Number(countValue)+1;/*가져오는건 숫자여도 문자열로 가져와서 형변환해야한다.*/
        priceSpan.innerText = price*count.value;
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
        tap[i].classList.add("active-tap");
        tapContent[i].classList.add("active-content");
    });
});

const moreBtn = document.querySelector("#more-btn");
moreBtn.addEventListener("click", function(){
    const procutDetail = document.querySelector(".product-detail");
    procutDetail.classList.remove("hide");
    moreBtn.remove();
    const bg = document.querySelector("#bg");
    bg.remove();
});

tapContent[0].classList.add("active-content");
tap[0].classList.add("active-tap");