const tabs = document.querySelectorAll(".tab>div");
const contents = document.querySelectorAll(".tab-content>div");

tabs.forEach(function(tab, i){
    tab.addEventListener("click",function(){
        tabs.forEach(function(item){
            item.classList.remove("active-tab");
        });
        contents.forEach(function(item){
            item.classList.remove("active-content");
        });
        tab.classList.add("active-tap");
        contents[i].classList.add("active-content");
    });
});

//페이지가 처음 로드외면 아무탭도 활성화가 안되있으므로 첫번째 탭 활성화
tabs[0].classList.add("active-tab");
contents[0].classList.add("active-content");


/* 일반 for문으로 비교
for(let i = 0; i<tabs.length; i++){
    tabs[i].addEventListener("click",function(){
        for(let j = 0; tabs.length; j++){
            tabs[j].classList.remove("active-tab");
        }
        
        for(let j = 0; contents.length; j++){
            contents[j].classList.remove("active-content");
        }
        tabs[j].classList.add("active-tab");
        contents[j].classList.add("active-content");
    });
}
*/

/*
tabs[0].addEventListener("click",function(){
    tabs.forEach(function(item){
        item.classList.remove("active-tab");
    });
    contents.forEach(function(item){
        item.classList.remove("active-content");
    });
    tabs[0].classList.add("active-tap");
    contents[0].classList.add("active-content");
});    

tabs[1].addEventListener("click",function(){
    tabs.forEach(function(item){
        item.classList.remove("active-tab");
    });
    contents.forEach(function(item){
        item.classList.remove("active-content");
    });
    tabs[1].classList.add("active-tap");
    contents[1].classList.add("active-content");
});    

tabs[2].addEventListener("click",function(){
    tabs.forEach(function(item){
        item.classList.remove("active-tab");
    });
    contents.forEach(function(item){
        item.classList.remove("active-content");
    });
    tabs[2].classList.add("active-tap");
    contents[2].classList.add("active-content");
});    
*/

/*
tabs[0].addEventListener("click",function(){
    tabs.forEach(function(item){
        item.classList.remove("active-tab");
    });

    tabs[0].classList.remove("active-tab");
    tabs[1].classList.remove("active-tab");
    tabs[2].classList.remove("active-tab");

    contents.forEach(function(item){
        item.classList.remove("active-content");
    });

    contents[0].classList.remove("active-content");
    contents[1].classList.remove("active-content");
    contents[2].classList.remove("active-content");

    tabs[0].classList.add("active-tap");
    contents[0].classList.add("active-content");

    
});
tabs[1].addEventListener("click",function(){
    tabs[0].classList.remove("active-tab");
    tabs[1].classList.remove("active-tab");
    tabs[2].classList.remove("active-tab");
        
    contents[0].classList.remove("active-content");
    contents[1].classList.remove("active-content");
    contents[2].classList.remove("active-content");

    tabs[1].classList.add("active-tap");
    contents[1].classList.add("active-content");
});
tabs[2].addEventListener("click",function(){
    tabs[0].classList.remove("active-tab");
    tabs[1].classList.remove("active-tab");
    tabs[2].classList.remove("active-tab");
        
    contents[0].classList.remove("active-content");
    contents[1].classList.remove("active-content");
    contents[2].classList.remove("active-content");

    tabs[2].classList.add("active-tap");
    contents[2].classList.add("active-content");
});
*/
