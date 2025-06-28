
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

/* 슬릭 슬라이드*/
$(function () {
  $('.mainWrap').slick({
    autoplay: true,
    infinite: true,
    autoplaySpeed: 1900
  });
});
/*인트로 슬릭슬라이드*/
$(function () {
  $('.introslide').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000
  });
});


/* 슬라이드 시작 정지 버튼*/
$(function () {
  $('.play').on('click', function () {
    $('.mainWrap').slick('slickPlay');
  });
  $('.pause').on('click', function () {
    $('.mainWrap').slick('slickPause');
  });
});

/*상품 슬라이드 */
$(function () {
  $('.proslider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 2
        }
      }
    ]
  });
});

/* 베스트 셀러 팝업창 */
$(function () {
  $('.btn_layerpopup').on('click', function (e) {
    e.preventDefault();
    var el = $($(this).attr('href'));

    if (!el.hasClass('open')) {
      el.addClass('open');
    } else {
      el.removeClass('open');
    }
  });
  $('.btn_close_layer').on('click', function (e) {
    $(this).closest('.layer-popup').removeClass('open');
  });

  $('.btn_layerpopup2').on('click', function (e) {
    e.preventDefault();
    var el = $($(this).attr('href'));

    if (!el.hasClass('open')) {
      el.addClass('open');
    } else {
      el.removeClass('open');
    }
  });
  $('.btn_close_layer').on('click', function (e) {
    $(this).closest('.layer-popup2').removeClass('open');
  });

  $('.btn_layerpopup3').on('click', function (e) {
    e.preventDefault();
    var el = $($(this).attr('href'));
    if (!el.hasClass('open')) {
      el.addClass('open');
    } else {
      el.removeClass('open');
    }
  });
  $('.btn_close_layer').on('click', function (e) {
    $(this).closest('.layer-popup3').removeClass('open');
  });

  $('.btn_layerpopup4').on('click', function (e) {
    e.preventDefault();
    var el = $($(this).attr('href'));
    if (!el.hasClass('open')) {
      el.addClass('open');
    } else {
      el.removeClass('open');
    }
  });
  $('.btn_close_layer').on('click', function (e) {
    $(this).closest('.layer-popup4').removeClass('open');
  });

});



/* 탑버튼 */
document.addEventListener('DOMContentLoaded' , function () {

  let btt = document.querySelector('.go_top'), scrollAmount;

  window.addEventListener('scroll', function () {
    scrollAmount = window.pageYOffset;

    console.log(scrollAmount);
    if (scrollAmount > 500) {
      btt.classList.add('active');
    } else {
      btt.classList.remove('active');
    }
  });//scroll

  btt.addEventListener('click', function(e){
    e.preventDefault();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  });
});//DOMContentLoaded


/* 스크롤 에니메이션 */
$(function () {
  const trigger = new ScrollTrigger.default({
    trigger: {
      once: false,
      offset: {
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
});


$(function () {
  const trigger = new ScrollTrigger.default({
    trigger: {
      once: false,
      offset: {
        viewport: {
          x: 0,
          y: function(trigger, frame, direction) {
            return trigger.visible ? 0 : 0
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
  trigger.add('[trigger]');
});
