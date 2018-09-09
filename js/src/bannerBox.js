//  bannerBox.js

(function($){
  
  var bn04 = $('.banner04');
  var bn04H = bn04.innerHeight();
  var bntop = (bn04.offset().top) - $(window).outerHeight();
  var nowT =0, per, myP;
  console.log(bn04H);

  var myScroll = function(){
    per = (nowT-bntop)/ bn04H * 40;
    if(per >= 100){
      per = 100;
    }else if(per <= 0){
      per = 0;
    }
    myP = 'center' +' '+ per;
    bn04.css({backgroundPosition:myP+'%'});
  };
  myScroll();
  $(window).on('scroll',function(){
    nowT = $(this).scrollTop();
      myScroll();  
  });

})(jQuery);