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

const taps = document.querySelectorAll(".tap>div");
const tapContents = document.querySelectorAll(".tap-content>div");
taps.forEach(function(tap, i){
    tap.addEventListener("click",function(){
        taps.forEach(function(tap){
            tap.classList.remove("active-tap");
        });
        tap.classList.add("active-tap");

        tapContents.forEach(function(contents){
            contents.classList.remove("active-content");
        });
        tapContents[i].classList.add("active-content");
    });
});


taps[0].classList.add("active-tap");
tapContents[0].classList.add("active-content");


const cartFavorite = document.querySelector("#cart-favorite");
cartFavorite.addEventListener("click",function(){
    if(cartFavorite.innerText === "favorite_border"){
        cartFavorite.innerText = "favorite";
        cartFavorite.style.color = "red";
        alert("관심상품에 등록되었습니다.");
    }else{
        cartFavorite.innerText = "favorite_border";
        cartFavorite.style.color = "black";
        alert("관심상품 해제 되었습니다.");
    }
    
});

const cartBtn = document.querySelector(".cart-btn");
cartBtn.addEventListener("click",function(){
    const result = confirm("장바구니로 이동하겠습니까?");
    if(result){
        location.href = 'teamLogin.html';
    }else{

    }
});