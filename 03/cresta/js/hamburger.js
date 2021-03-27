// メニューを開く
let $win = $(window);

$win.on('load resize', function () {
	let windowWidth = window.innerWidth;

	if (windowWidth <= 769) {
		$(function () {
			$('.menu').hide();
			$('.hamburger').click(function () {
				$('.menu').stop().toggle(300);
			});
		});
	}else{
		$('.menu').show();
	}
});
