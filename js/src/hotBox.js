// hotBox.js
(function($){
 
  var hotW = $('.hot_wrap');
  var hotL = hotW.children('div');
  var hotList, ckattr, j;
  
  for (var i=0; i<8; i+=1) {
    var i;
    hotList = hotW.children('div').eq(0).clone(true)[0];
    hotW.append(hotList);
    hotL = hotW.children('div');
    (i<10) ? j = '0'+(i+1) : j=i+1;
    ckattr = hotL.eq(i).addClass('hot'+j);
  }
  hotW.children('div').eq(-1).remove();
  hotL.eq(0).nextAll().removeClass('hot1');
 
})(jQuery);