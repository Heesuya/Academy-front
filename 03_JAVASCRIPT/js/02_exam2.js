const search = document.querySelectorAll("[name=search]");
const searchBox = document.querySelectorAll(".searchBox");


//코드를 줄이장
search.forEach(function(radio, i){
    radio.onclick = function(){
        searchBox.forEach(function(box){
            box.style.display = "none"
        });
        searchBox[i].style.display = "block";
    }
});

//이런 방식으로도 풀수 있다
/*
function changeSearchBox(param){
    console.log(param);
    searchBox.forEach(function(box){
        box.style.display = "none";
    });
    const id = param.id;
    const showBox = document.querySelector("#"+id+"Box");
    showBox.style.display = "block";
    //searchBox[index].style.display = "block";   //매개변수 안줬을때
}
*/

/*
search[0].onclick = function(){
    searchBox.forEach(function(box){
        box.style.display = "none"
    });
    searchBox[0].style.display = "block";
}

search[1].onclick = function(){
    searchBox.forEach(function(box){
        box.style.display = "none"
    });

    searchBox[1].style.display = "block";
}

search[2].onclick = function(){
    searchBox.forEach(function(box){
        box.style.display = "none"
    });
    
    searchBox[2].style.display = "block";
}
*/
