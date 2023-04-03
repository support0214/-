$(function () {
    // 각각 내려오기 
    $(".nav>li").mouseover(function () {
        $(this).children(".submenu").stop().slideDown();
    });
    $(".nav>li").mouseout(function () {
        $(this).children(".submenu").stop().slideUp(); // stop 멈춤 필수
    });

    // 전체 내려오기
    /*
   $(".nav").mouseover(function(){
        $(".submenu").stop().slideDown();
   })
   $(".nav").mouseout(function(){
    $(".submenu").stop().slideUp();
    })
    */

    setInterval(slide, 2000);
    const x = $("#imgslide>img");
    let y = 3;
    function slide() {
        y--;
        if(y == 0) {
            x.fadeIn();
            y=3;
        } else{
            x.eq(y).fadeOut();
        }

    }

})