$(".more").on("click",function(event){
    $(this).toggleClass("active");
    $(this).parent().next().slideToggle();
    event.stopPropagation();//이벤트버블링제거
});
$(".more").parent().on("click",function(){
    $(this).children().last().click();
});