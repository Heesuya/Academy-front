

const color = new Array();
const divs = document.querySelectorAll(".divs");
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