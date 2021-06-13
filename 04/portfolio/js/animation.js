//--------
//top
//--------
//h1横のテキストボックス（読み込み後少し遅れて作動）
setTimeout(function () {
	$('#delayAnimation').addClass('fadeUp');
}, 2000);

//スクロールしたらフェード
function scrollAnimation() {
	$('.fadeUpTrigger').each(function () {
		var elemPos = $(this).offset().top - 10;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass('fadeUp');
		} else {
			$(this).removeClass('fadeUp');
		}
	});
	$('.fadeInTrigger').each(function () {
		var elemPos = $(this).offset().top - 10;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass('fadeIn');
		} else {
			$(this).removeClass('fadeIn');
		}
	});
}
$(window).scroll(function () {
	scrollAnimation();
});
