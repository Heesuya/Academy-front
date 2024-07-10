$("#btn1").on("click",function(){
    const trs = $("#tbl1>tbody>tr");
    const p = $("#result1");
    trs.each(function(i,item){
        if(i != 0){
            const tds = $(item).children();
            tds.each(function(index,td){
                p.append($(td).text());
                if(index != 2){
                    p.append("/");
                }
            });
            p.append("<br>");
        }
    });
    /*
    const tds = $("#tbl1 td");
    console.log(tds.length);
    const p = $("#result1");
    tds.each(function(i, item){
        p.append($(item).text());
        if(i%3 == 2){
            p.append("<br>");
        }else{
            p.append("/");
        }
    });
    */
});

$("#btn2").on("click",function(){
    const trs = $("#tbl1>tbody>tr");
    trs.each(function(i, item){
        if(i == 0){
            $(item).children().addClass("title");
        }else{
            const select = $(item).children();
            select.each(function(i, item){
                if(i == 0){
                    $(item).addClass("name");
                }else if(i == 1){
                    $(item).addClass("age");
                }else{
                    $(item).addClass("addr");
                }
            });

        }
    });
});

$("#btn3").on("click",function(){
    const trs = $("#tbl1>tbody>tr");
        trs.children().removeClass();
});

//const divs = $("exam3 div").not(".copy");
let color; //투명색으로 해놓아도 됨.
$(".copy").on("click",function(){
        color = $(this).css("background-color");
        // console.log(color);
});

const div = $("#exam3 div").not(".copy");
div.on("click",function(){
    $(this).css("background-color", color);
});

$("#btn4").on("click",function(){
    div.removeAttr("style");
    //color = "transparent"  해놓고 적용 해도 됨
});

$("#btn5").on("click",function(){
    $("#result2").empty();
    //check한 checkbox 기준으로 처리
    
    const trs = $("#tbl2 input:checked").parent().parent();
    trs.each(function(i,tr){
        const td = $(tr).children();
        const text = td.eq(1).text() + "/" + td.eq(2).text() + "/" +td.eq(3).text()+"<br>";
        $("#result2").append(text);
    });
    
    
    /*
    //tr기준 처리
    const trs = $("#tbl2 tr");
    trs.each(function(i,tr){
        if(i != 0){
            const checkbox = $(tr).find("input");
            //checkbox.props("checked");
            if(checkbox.is(":checked")){
                const td = $(tr).children();
                const text = td.eq(1).text() + "/" + td.eq(2).text() + "/" +td.eq(3).text()+"<br>";
                $("#result2").append(text);
            }
        }
    });*/
});