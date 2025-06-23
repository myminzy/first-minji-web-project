/*서브메뉴 내려오게*/
$(function () {
  $("#1").mouseover(function () {
    $("#1").children('.sub').css('display', 'inline');
    $("#rgbblack").css('display', 'inline');
    $('.sub2').css('display', 'none');
    $('.sub3').css('display', 'none');
    $('.sub4').css('display', 'none');
  });
  $("#sub").mouseout(function () {
    $("#1").children('.sub').css('display', 'none');
    $('.sub2').css('display', 'none');
    $('.sub3').css('display', 'none');
    $('.sub4').css('display', 'none');
    $("#rgbblack").css('display', 'none');
  });

  $("#2").mouseover(function () {
    $("#2").children('.sub2').css('display', 'inline');
    $("#rgbblack").css('display', 'inline');
    $('.sub').css('display', 'none');
    $('.sub3').css('display', 'none');
    $('.sub4').css('display', 'none');
  });
  $("#sub2").mouseout(function () {
    $("#2").children('.sub2').css('display', 'none');
    $('.sub').css('display', 'none');
    $('.sub3').css('display', 'none');
    $('.sub4').css('display', 'none');
    $("#rgbblack").css('display', 'none');
  });

  $("#3").mouseover(function () {
    $("#3").children('.sub3').css('display', 'inline');
    $('.sub').css('display', 'none');
    $('.sub2').css('display', 'none');
    $('.sub4').css('display', 'none');
    $("#rgbblack").css('display', 'inline');
  });
  $("#sub3").mouseout(function () {
    $("#3").children('.sub3').css('display', 'none');
    $('.sub').css('display', 'none');
    $('.sub2').css('display', 'none');
    $('.sub4').css('display', 'none');
    $("#rgbblack").css('display', 'none');
  });

  $("#4").mouseover(function () {
    $("#4").children('.sub4').css('display', 'inline');
    $('.sub2').css('display', 'none');
    $('.sub3').css('display', 'none');
    $('.sub').css('display', 'none');
    $("#rgbblack").css('display', 'inline');
  });
  $("#sub4").mouseout(function () {
    $("#4").children('.sub4').css('display', 'none');
    $('.sub2').css('display', 'none');
    $('.sub3').css('display', 'none');
    $('.sub').css('display', 'none');
    $("#rgbblack").css('display', 'none');
  });
  /*           
   //PC메뉴 
  $("#1").mouseover(function(){
    $( "#1" ).children( '#sub' ).css( 'display', 'inline' ); //display :none 일떄
    $("#sub").show(  function(){
        $( '#rgbblack' ).show(  );
    });
  });
  //자식요소로 이벤트 확산 X leave 랑 out 차이 
  $("#1").mouseleave(function(){
    $("#sub").hide( function(){
        $( '#rgbblack' ).hide(  );
    });
   });
  
  $("#2").mouseover(function(){
    $("#sub2").show(  function(){
     $( '#rgbblack' ).show(  );
    });
    
  });
  $("#2").mouseleave(function(){
    $("#sub2").hide( function(){
        $( '#rgbblack' ).hide(  );
    });
  });
  
  $("#3").mouseover(function(){
    $("#sub3").show(  function(){
        $( '#rgbblack' ).show(  );
    });
  });
  $("#3").mouseleave(function(){
    $("#sub3").hide( function(){
        $( '#rgbblack' ).hide(  );
    });
  });
  $("#4").mouseover(function(){
    $("#sub4").show(  function(){
        $( '#rgbblack' ).show(  );
    });
  });
  $("#4").mouseleave(function(){
    $("#sub4").hide( function(){
        $( '#rgbblack' ).hide(  );
    });
   });
  */

  /* 모바일 메뉴 내려오게 */
  $("#m1").click(function () {
    if ($("#m1").children('.minuse').css("display") == "none") {
      $('.minuse').css('display', 'none');  
      $('.pluse').css('display', 'inline'); 
    } else { };

    $(".m-sub").slideToggle(500, 'swing', function () {
      if ($("#m1").children('.pluse').css("display") == "none") {
        $("#m1").children('.pluse').css('display', 'inline'); 
        $("#m1").children('.minuse').css('display', 'none');  
      } else {
        $("#m1").children('.minuse').css('display', 'inline');  
        $("#m1").children('.pluse').css('display', 'none'); 
      }
      $('.m-sub2').hide(500);
      $('.m-sub3').hide(500);
      $('.m-sub4').hide(500);

    });
  });
  $("#m2").click(function () {
    if ($("#m2").children('.minuse').css("display") == "none") {
      $('.minuse').css('display', 'none');  
      $('.pluse').css('display', 'inline'); 
    } else { };

    $(".m-sub2").slideToggle(500, 'swing', function () {
      if ($("#m2").children('.pluse').css("display") == "none") {
        $("#m2").children('.pluse').css('display', 'inline'); 
        $("#m2").children('.minuse').css('display', 'none'); 
      } else {
        $("#m2").children('.minuse').css('display', 'inline');  
        $("#m2").children('.pluse').css('display', 'none'); 
      }
      $('.m-sub').hide(500);
      $('.m-sub3').hide(500);
      $('.m-sub4').hide(500);
    });
  });
  $("#m3").click(function () {
    if ($("#m3").children('.minuse').css("display") == "none") {
      $('.minuse').css('display', 'none');  
      $('.pluse').css('display', 'inline');
    } else { };
    $(".m-sub3").slideToggle(500, 'swing', function () {
      if ($("#m3").children('.pluse').css("display") == "none") {
        $("#m3").children('.pluse').css('display', 'inline'); 
        $("#m3").children('.minuse').css('display', 'none');  
      } else {
        $("#m3").children('.minuse').css('display', 'inline');  
        $("#m3").children('.pluse').css('display', 'none'); 
      }
      $('.m-sub').hide(500);
      $('.m-sub2').hide(500);
      $('.m-sub4').hide(500);
    });
  });
  $("#m4").click(function () {
    if ($("#m4").children('.minuse').css("display") == "none") {
      $('.minuse').css('display', 'none'); 
      $('.pluse').css('display', 'inline'); 
    } else { };
    $(".m-sub4").slideToggle(500, 'swing', function () {
      if ($("#m4").children('.pluse').css("display") == "none") {
        $("#m4").children('.pluse').css('display', 'inline'); 
        $("#m4").children('.minuse').css('display', 'none');  
      } else {
        $("#m4").children('.minuse').css('display', 'inline');  
        $("#m4").children('.pluse').css('display', 'none');
      }
      $('.m-sub').hide(500);
      $('.m-sub2').hide(500);
      $('.m-sub3').hide(500);

    });
  });

});

/* 모바일 메뉴버튼 */
$(function () {
  $('#menuicon').click(function () {
    $('#moblie_bt').show();
  })
  $('#close').click(function () {
    $('#moblie_bt').hide();
  })
});

/*슬릭 슬라이드*/
$(function () {
  $('.brandSlide').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  });
});

/*스토어 슬라이드 */
$(function () {
  $('.storeslick').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          centerPadding: '0px'
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false
        }
      }
    ]
  });
});
/*
$(function(){
  $(window).scroll(function(){
    if($(this).scrollTop() >= 300){
      $('.go_top').fadeIn();
    }else{
      $('.go_top').fadeOut();
    }
  });
  $('go_top').click(function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop:0},500);
  });

});
*/

/* 탑버튼 */
document.addEventListener('DOMContentLoaded' , function () {

  let btt = document.querySelector('.go_top'), scrollAmount;
  // docElement = document.documentElement;

  window.addEventListener('scroll', function () {
    //let scrollAmount = docElement.scrollTop;//문서의 스크롤 양
    //let scrollAmount = window.pageYOffset;
    scrollAmount = window.pageYOffset;

    console.log(scrollAmount);
    // 스크롤양 300보다 많으면 btt 나타나고, 0면 사라진다.
    if (scrollAmount > 500) {
      btt.classList.add('active');
    } else {
      btt.classList.remove('active');
    }
  });//scroll

  /*스크롤 양 지정 widow.scrollTo(x,y)
    스크롤 양 변경 widow.srollBy(x,y)*/
  //btt 클릭하면 링크기능 x 스크롤 양은 0
  btt.addEventListener('click', function(e){
    e.preventDefault();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  });
  // window.scrollTo(0,0);
  // window.srollBy(0,-50);
  /*  let scrollInterval = setInterval(function(){
        if(scrollAmount != 0){
          window.scrollBy(0,-50);
        }else{
          clearInterval(scrollInterval);
        }
      }, 10);
    });*/
});//DOMContentLoaded

/* 스크롤 에니메이션 */
$(function () {
  const trigger = new ScrollTrigger.default({
    trigger: {
      once: false,
      offset: {
        /*   element: {
               x: 0,
               y: 0.5
           },*/
        viewport: {
          x: 0,
          y: function(trigger, frame, direction) {
            return trigger.visible ? 0 : 0.3
          }
        }
      },
      toggle: {
        class: {
          in: 'animatedIn',
          out: 'animatedOut'
        }
      }

    }
  });
  trigger.add('[data-trigger]');
  trigger.add('[trigger-image]');
  trigger.add('[trigger]');
});

