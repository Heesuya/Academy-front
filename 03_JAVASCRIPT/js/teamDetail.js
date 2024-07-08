const minusBtn = document.querySelector(".minusBtn");
const plusBtn = document.querySelector(".plusBtn");

minusBtn.addEventListener("click",function(){
    const countSpna = document.querySelector("#count");
    const count = Number(countSpna.innerText);
    const priceSpan = document.querySelector("#price");
    const price = Number(priceSpan.innerText);
    if(count == 1){
        alert("최소 수량은 1부터 입니다.");
    }else{
        countSpna.innerText = count-1;
        priceSpan.innerText = price-11700;
    }
});

plusBtn.addEventListener("click",function(){
    const countSpna = document.querySelector("#count");
    const count = Number(countSpna.innerText);
    const priceSpan = document.querySelector("#price");
    const price = Number(priceSpan.innerText);
    if(count == 10){
        alert("현재 재고는 10개 입니다.");
    }else{
        countSpna.innerText = count+1;
        priceSpan.innerText = price+11700;
    }
});



const tabs = document.querySelectorAll(".tab>div");
const contents = document.querySelectorAll(".tab-content>div");



tabs.forEach(function(tab, i){
    tab.addEventListener("click",function(){
        tabs.forEach(function(item){
            item.classList.remove("active-tap");
        });
        contents.forEach(function(item){
            item.classList.remove("active-content");
        });
        tab.classList.add("active-tap");
        contents[i].classList.add("active-content");
    });
});


taps[0].classList.add("active-tap");
contents[0].classList.add("active-content");


