// adBox.js
(function($){

// ad indicator 선택자
  var indiW        = $('.indicator');
  var indi         = indiW.children('ul');
  var indiLi       = indi.children('li');
  var adWW         = $('#adBox');
  var adW          = $('.slide_wrap');
  var adb          = adW.children('ul');
  var ad           = adb.children('li');
  var ad_clone     = adb.children('li').eq(0).clone(); 
  adb.append(ad_clone);
 
  adb              = adW.children('ul');
  ad               = adb.children('li');
  var zero         = 0;
  var autoStart;

  var slideFn = function(zero){
    var per = zero * -100 + '%';
    if(zero < ad.length-1){
      adb.stop().animate({marginLeft:per}, 500);  
    }else{
      zero = 0;
      adb.stop().animate({marginLeft:per}, 500, function(){
      $(this).css({marginLeft:0});
     });   
    }
    indiLi.eq(zero).children('a').addClass('active');
    indiLi.eq(zero).siblings('li').children('a').removeClass('active');
  };
  slideFn(zero);

// adslide
indiLi.on('click',function(e){
  e.preventDefault();
  zero = $(this).index();
  slideFn(zero);
});

// adslide _auto
var StartSlide = function(){
  autoStart = setInterval(function(){
              (zero < ad.length-1) ? zero+=1 : zero=1;
              slideFn(zero);}, 2500);
};

var StopSlide = function(){clearInterval(autoStart);};

StartSlide();
console.log(StartSlide);
console.log(ad.length-1);

adWW.off('mouseout').on('mouseout',function(){
  StartSlide();
});
adWW.off('mouseover').on('mouseover',function(){
  StopSlide();
});

})(jQuery);