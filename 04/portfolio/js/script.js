$(function () {
   //headerの高さを取得
  let header = $('.headerWrap');
  let headerHeight = header.height();
  //スクロールスピード
　let speed = 700;

  //別ページからの遷移時
  let urlHash = location.hash;
  if(urlHash) {
      $('body,html').stop().scrollTop(0);
      setTimeout(function(){
          let target = $(urlHash);
          let position = target.offset().top - headerHeight;///topからheaderの高さを引いて、各h2がheaderに隠れないようにする
          $('body,html').stop().animate({
            scrollTop:position
          }, speed, "swing");
      }, 200);
    }

    //smoothscroll
    $('a[href^="#"]').click(function () {
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top - headerHeight;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
});

