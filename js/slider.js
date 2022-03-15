$(window).scroll(function(){
    //scrollTop(), offset().top, height()

    let scroll = $(this).scrollTop();

    let main_top = $('#main').offset().top;
    let section1_top = $('#section1').offset().top-100;
    let section2_top = $('#section2').offset().top-200;
    let section3_top = $('#section3').offset().top-300;
    let section4_top = $('#section4').offset().top-400;

    //첫 번째 li에 on
    if(scroll<section1_top){
        $('.reset_nav li').removeClass('on');
        $('.reset_nav li').eq(0).addClass('on');
    }
    //두 번째 li에 on
    if(scroll>=section1_top && scroll<section2_top){
        $('.reset_nav li').removeClass('on');
        $('.reset_nav li').eq(1).addClass('on');
    }
    //세 번째 li에 on
    if(scroll>=section2_top && scroll<section3_top){
        $('.reset_nav li').removeClass('on');
        $('.reset_nav li').eq(2).addClass('on');

        $('#section2_innerWrap li').eq(0).stop().delay(100).animate({'opacity':'1', 'left':'0'},500);
        $('#section2_innerWrap li').eq(1).stop().delay(400).animate({'opacity':'1', 'left':'418px'},500);
        $('#section2_innerWrap li').eq(2).stop().delay(700).animate({'opacity':'1', 'left':'836px'},500);
    }
    //네 번째 li에 on
    if(scroll>=section3_top && scroll<section4_top){
        $('.reset_nav li').removeClass('on');
        $('.reset_nav li').eq(3).addClass('on');
        
        $('#section3 h1').eq(0).stop().delay(0).animate({'opacity':'1', 'padding-top':'0'},500);
        $('#section3 li').eq(0).stop().delay(100).animate({'opacity':'1', 'left':'47px'},500);
        $('#section3 li').eq(1).stop().delay(300).animate({'opacity':'1', 'right':'52px'},500);
        $('#section3 li').eq(2).stop().delay(500).animate({'opacity':'1', 'left':'47px'},500);
        $('#section3 li').eq(3).stop().delay(700).animate({'opacity':'1', 'right':'52px'},500);
    }
    //다섯번째 li에 on
    if(scroll>=section4_top){
        $('.reset_nav li').removeClass('on');
        $('.reset_nav li').eq(4).addClass('on');

        $('#section4 h1').eq(0).stop().delay(0).animate({'opacity':'1', 'padding-top':'0'},500);
    }
});