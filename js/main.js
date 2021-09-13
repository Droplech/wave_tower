$(function() {
    ////////////////
	 $('.slider').slick({
  slidesToShow: 1,
  infinite: true,
  autoplay: true,
  speed: 3000,
  slidesToScroll: 1,
  arrows: true,
  variableWidth: true,
  responsive: [
    // {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//       }
//     },
    {
      breakpoint: 90000,
      settings: {
        arrows: false,
      }
    },
    {
      breakpoint: 767,
      settings: {
        arrows: true,
      }
    }
  ]




});
	////////////////////
////////////

 $('.slider-for').slick({
   
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  arrows: true,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  adaptiveWidth: true,
  arrows: false,
  dots: false,
  centerMode: false,
  focusOnSelect: true,
  swipeToSlide: true
});

//////////////////////

$(document).ready(function(){
    $(".icon-navRight").mouseenter(function(){
        $('.panorama').css('background-position', '100% 0');
    })
    $(".icon-navRight").mouseout(function(){
        $('.panorama').css('background-position', 'center center');
    })
});

$(document).ready(function(){
    $(".icon-navLeft").mouseenter(function(){
        $('.panorama').css('background-position', '0 100%');
    })
    $(".icon-navLeft").mouseout(function(){
        $('.panorama').css('background-position', 'center center');
    })
});

/////////////////////
	
jQuery(window).scroll(function(){
         var $sections = $('section');
	$sections.each(function(i,el){
        var top  = $(el).offset().top-100;
        var bottom = top +$(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
    	if( scroll > top && scroll < bottom){
            $('a.active').removeClass('active');
			$('a[href="#'+id+'"]').addClass('active');

        }
    })
 });

$("#scrollNav").on("click","a", function (event) {
        // исключаем стандартную реакцию браузера
        event.preventDefault();
 
        // получем идентификатор блока из атрибута href
        var id  = $(this).attr('href'),
 
        // находим высоту, на которой расположен блок
            top = $(id).offset().top;
         
        // анимируем переход к блоку, время: 800 мс
        $('body,html').animate({scrollTop: top}, 200);
    });
	
});


//////////////////////////////

window.setInterval(function(){
    $(".looking").toggleClass("looking-anim");
},1000);





////////////////////////////////





// var bg_Offset = 0;
// function scroll_bg(){
//     bg_Offset = bg_Offset + 1;
//     if (bg_Offset > 1440) bg_Offset = 0;
//     $(".panorama").css("backgroundPosition", bg_Offset + "px 0px");
// }
// $(document).ready(function(){
//     $(".panRight").hover(function(){
//         setInterval("scroll_bg()",50)
//     })});
   


// $(".panRight").mouseenter(function(){
//    setInterval("scroll_bg()",50); 
// });