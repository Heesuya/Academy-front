const div = $("#div");
$("#btn1").on("click",function(){
    div.show(400);//display 속성을 원래 속성으로
});
$("#btn2").on("click",function(){
    div.hide(400);//display : none;
});
$("#btn3").on("click",function(){
    div.toggle(400);
});

$("#btn4").on("click",function(){
    div.slideDown(5000);
});
$("#btn5").on("click",function(){
    div.slideUp();
});
$("#btn6").on("click",function(){
    div.slideToggle();
});

$("#btn7").on("click",function(){
    div.fadeIn();
});
$("#btn8").on("click",function(){
    div.fadeOut(5000);//5초
});
$("#btn9").on("click",function(){
    div.fadeToggle();
});

$("#btn10").on("click",function(){
    div.animate({
        "width" : "100px",
        "height" : "150px",
        "background-color" : "yellow"
    },5000);
});