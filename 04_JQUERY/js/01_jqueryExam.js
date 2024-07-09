function func1(){
    console.log($("#text").text());
}
function func2(){
    console.log($(".text").text());
}
function func3(){
    console.log($("[name=text]").text());
}

$("#btn1").on("click", function(){
    console.log($("[name=study]:checked").length);
    console.log($("[name=study]").filter(":checked").length);
});

$("#btn2").on("click", function(){
    //$("#pp").siblings("ul").children().first().css("border-color","red");

    //const p = $("#pp");
    //const select = p.prev().children().first();
    //const select = p.parent().children().first().children().eq(0);
    //const select = p.parent().find("li").first();
    //select.css("border-color","red");
});

$("#btn3").on("click", function(){
    $(".test ul").next().children().eq(1).css("border-color","red");
    //const ul = $(".test ul");
    //const select = ul.next().children().eq(1);
    //const select = ul.parent().children().eq(1).children().eq(1);
    //const select = ul.parent().find("#pica").next();
    //select.css("border-color","red");
});

$("#btn4").on("click", function(){
    //$("#pica").parent().parent().css("border-color","blue");
    //$("#pica").parents().eq(1).css("border-color","blue");
    $("#pica").parents("div").first().css("border-color","blue");
});

$("#btn5").on("click", function(){
    //$(".test").children().find("li").css("border-color","blue");   -확인용
    //console.log($(".test").children().children().first().children().text());
    //console.log($(".test").find("li").text());
    const text = $(".text").find("li");
    for(let i = 0; i <text.length; i++){
        console.log(text.eq(i).text());
    }
});
