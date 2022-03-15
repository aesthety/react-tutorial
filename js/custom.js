//1.메인메뉴
$('.submenu').hide();
$('.menu>li').mouseenter(function(){
    $(this).find('.submenu').fadeIn(200);
    $(this).children('a').css('border-bottom','3px solid #f80');
}).mouseleave(function(){
    $('.submenu').fadeOut(200);
    $(this).children('a').css('border-bottom','3px solid transparent');
});

$('.sns li').eq(0).hover(function(){
    $(this).find('img').attr('src','img/ico_cafe_hover.png');
}, function(){
    $(this).find('img').attr('src','img/ico_cafe.png');
});
$('.sns li').eq(1).hover(function(){
    $(this).find('img').attr('src','img/ico_blog_hover.png');
}, function(){
    $(this).find('img').attr('src','img/ico_blog.png');
});

//2.하단고정배너
$('.banner').fadeIn();
$('.close').click(()=>{
    $('.banner').fadeOut();
});

//3.패밀리사이트
$('.selected').click(()=>{
    $('.option_ln').css('display','block');
});
$('.option_ln, .ft_family').mouseleave(()=>{
    $('.option_ln').css('display','none');
});

//4. gotop / reset
$('.goTop, .reset_nav li').click(function(e){
    e.preventDefault();
    let target = $(this).children('a').attr('href');
    let target_pos = $(target).offset().top;
    $('html, body').animate({'scrollTop':target_pos},1000);
});

//5. scroll
$('.goTop').fadeOut();

$(window).scroll(function(){
    let scroll = $(this).scrollTop();
    console.log(scroll);
    if(scroll>350){
        $('.goTop').fadeIn();
    }else{
        $('.goTop').fadeOut();
    }     
});

//6. main slider : fadeInOut
let current, next;
let timer = setInterval(fadeInOut,2000);
function fadeInOut(){
    current = $('#sliderWrap li').eq(0);
    next = $('#sliderWrap li').eq(1);

    next.addClass('on');
    next.css('opacity','0').animate({'opacity':'1'},1000, function(){
        $('#sliderWrap>ul').append(current);
        current.removeClass('on');
    });
}

$('#sliderWrap').mouseenter(function(){
    clearInterval(timer);
}).mouseleave(function(){
    timer = setInterval(fadeInOut,2000);
});



