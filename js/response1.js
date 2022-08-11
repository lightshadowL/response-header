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

    // 네비의 li을 클릭한다ㅏ
    $(".m-gnb>li").click(function(){
        // 현재 li의 drop이 표시되어 있지 않으면 표시를 하고(참)
        // 현재 li의 drop이 표시되어 있다면 현재li의 drop은 숨겨라(거짓)
        if( $(this).find(".drop").is(":hidden") ){
            // 표시
            // 모든 drop은 위로 올리고 
            $(".m-gnb>li .drop").slideUp();
            $(".m-gnb>li span").html('<i class="fa fa-chevron-right"></i>')
            // 현재 클릭한 li의 drop만 내려오도록 한다.
            $(this).find(".drop").slideDown();
            // 현재 li의 오른쪽 방향 아이콘을 아래 아이콘으로 변경
            $(this).find("span").html('<i class="fa fa-chevron-down"></i>')
        }else{
            //숨겨야 한다.
            $(".m-gnb>li .drop").slideUp();
            $(".m-gnb>li span").html('<i class="fa fa-chevron-right"></i>')
        }
        
    });
    // 스크롤을 했을 때 특정위치에서 헤더를 고정한다.
    /* $(window).scroll(function(){
        var sTop=$(window).scrollTop();
        // console.log("스크롤바의 탑 : "+sTop)
        if(sTop>200){
            //스크롤바의 탑의 값이 200보다 크면 동작을 실행
            $("header").css({
                "position":"fixed",

            })
        }else{
            //스크롤바의 탑의 값이 200이하면 동작을 실행
            $("header").css({
                "position":"relative",
                
            })
        }
    }); */

    // 스크롤을 했을 때 특정위치에서 네비를 고정
    $(window).scroll(function(){
        var sTop=$(window).scrollTop();
        console.log("스크롤바의탑: "+sTop)
        if(sTop>200){
            $("#d-nav").css({
                position:"fixed",
                "margin-top":0
            })
        }else{
            $("#d-nav").css({
                position:"relative",
                "margin-top":"40px"
            })
        }
    });

});