$(document).ready(function(){
    // $("html,body").css({
    //     "background-color":"red"
    // })
    $("#m-open").click(function(){
        $(".m-content").css({
            "left":0
        });
    })
    $(".m-close").click(function(){
        $(".m-content").css({
            "left":"-100%"
        });
    });
    $("#s-bt").click(function(){
        $("#search").toggle()
        
    });
    
    $(".thum-wrap .thum:gt(3)").hide();
    $(".more").click(function(){
        $(".thum-wrap .thum:gt(3)").fadeToggle();
    });
});