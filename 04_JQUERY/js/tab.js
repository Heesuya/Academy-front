const tabs = $(".tab>div");
const contents = $(".tab-content>div");
tabs.on("click",function(){
    tabs.removeClass("active-tab");
    contents.removeClass("active-content");
    $(this).addClass("active-tab");
    const index = tabs.index(this);
    contents.eq(index).addClass("active-content");
});
tabs.first().click();