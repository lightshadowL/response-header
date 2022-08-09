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
    // 클래스가 thum인 요소의 개수가 3보다 큰 것들은 숨김
    var bool=true;
    $(".more").click(function(){

        $(".thum-wrap .thum:gt(3)").fadeToggle();
        // 요소의 개수가 3보다 큰 것들은 보임
        // $(this).text("-");
        // $(this).html("<i class='fa fa-minus'></i>")
        // $(this).html('<i class="fa fa-minus"></i>')
        // $(".more>i").attr("class","fa fa-minus")
        // $(this).children("i").attr("class","fa fa-minus");
        // $(".more i").attr("class","fa fa-minus")
        // $(this).find("i").attr("class","fa fa-minus");
        if(bool){
            $(this).children("i").removeClass("fa-plus")
            $(this).children("i").addClass("fa-minus")
            bool=false;
        }else{
            $(this).children("i").removeClass("fa-minus")
            $(this).children("i").addClass("fa-plus")
            bool=true;
        }
        
    });

    // 열기닫기 버튼을 클릭하면
    // form의 너비를 200px
    // 열기닫기 버튼의 자신을 닫기 변경
    // 다시 열기 닫기 버튼을 클리하면
    //  form의 너비를 0
    // 열기닫기 버튼의 자신을 검색 아이콘으로 변경
    var boolBtn=true;
    $(".btn").click(function(){
        if(/*조건*/ boolBtn){
            // 조건이 만족하면(참,true)
            $("#d-search").css({
                "width":210
            })
            $(this).html("<i class='fa fa-close'></i>")
            boolBtn=false;
        }else{
            // 조건이 만족하지 하지 않으면(거짓, false)
            $("#d-search").css({
                "width":0
            })
            $(this).html("<i class='fa fa-search'></i>")
            boolBtn=true;
        }
        

    });


});