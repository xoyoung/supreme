//  headBox.js

(function($){

  var winW = $(window).outerWidth();
  var winH = $(window).outerHeight();
  var headW = $('.head_wrap').innerWidth();
  var headBox = $('#headBox');
  var menuBg = $('.menu_bg');
  var gnbBtn = $('.ham_wrap');
  var gnbBox = $('.gnb_box');
  var gnb = $('.gnb');
  var gnbUl = gnb.children('ul');
  var gnbMenu = gnbUl.children('li');
  var unb = $('.unb');
  var under = $('.under_menu');
  var user = $('.under_menu4');
  var underM = under.find('li');
  var slideT = 300;
  var toggleT = 500;

  // headBox fixed
   $(window).on('scroll',function(e){
      e.preventDefault();
      var ht = $(this).scrollTop();
      if (ht > 50) {
        headBox.css({position:'fixed',top:'0', zIndex:'1000',backgroundColor:'rgba(0,0,0,0.8)'});
      }else{
        headBox.css({position:'static',backgroundColor:'#141313'});
      }
    });

  // mobile&tab 
  if(winW < 768){
    gnb.innerWidth(headW);
    menuBg.height(gnb.outerHeight()*2.6);
    unb.innerWidth(winW);

    if(winW <= 340){
      user.css({right:'12%'});
    }
    // menu show
      gnbBtn.on('click',function(e){
        gnb.stop().slideToggle();
        user.stop().slideToggle();
        $(this).children('button').toggleClass('active');
        menuBg.stop().slideToggle();
      });
    // under menu accordion
      gnbMenu.on('click',function(e){
        e.preventDefault();
        var thisNext = $(this).children('div').css('display');
      
        if(thisNext === 'block'){
          $(this).children('div').stop().slideUp(toggleT);
          $(this).children('a').removeClass('minus');

        }else{
          $(this).children('div').stop().slideDown(toggleT);      
          $('.gnb02').children('a').addClass('minus');
          $('.gnb03').children('a').addClass('minus');
          $('.gnb05').children('a').addClass('minus');
          $(this).siblings('li').children('a').removeClass('minus');
        } 
        $(this).siblings('li').children('div').stop().slideUp(toggleT);
        gnbMenu.removeClass('active');
        $(this).addClass('active');
        });   
  }else{ 
    gnbBox.on('mouseover',function(e){
      e.preventDefault();
      under.stop().slideDown(slideT);
      menuBg.stop().slideDown(slideT);
    });
    menuBg.on('mouseleave',function(e){
      e.preventDefault();
      under.stop().slideUp(slideT);
      menuBg.stop().slideUp(slideT);
    });
  }

  // 리사이즈 
  $(window).on('resize',function(e){
    var nowW = $(window).outerWidth();
    if(winW !== nowW){
      location.reload();
    }  
  });







})(jQuery);