$(function () {

    setInterval(fnslide, 3000);   //함수명();-함수를 실행시키는 코드(함수호출=콜call)

    function fnslide() { //함수가 호출되었을때 실행해야하는 내용
                        //(함수정의=define,definition)
        $("#slideShuttleFrame").animate({
                "margin-left": "-1000px"
            },
            2000,
            function () {

                $("#slideShuttleFrame>a:first-child").insertAfter("#slideShuttleFrame>a:last-child");
                //insertAfter 적용위치
                $("#slideShuttleFrame").css({
                    "margin-left": "0"
                });
        });
    }


});
