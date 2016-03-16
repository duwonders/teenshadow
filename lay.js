img_arr = ['./image/bg3.jpg', 'image/bg4.jpg', 'image/bg5.jpg', 'image/bg6.png', 'image/bg7.png'];
var i = -1;
$('a').on('touchstart', function(){
	if($('.img-top').hasClass('fadein')){
		$('.img-top').removeClass('fadein').addClass('fadeout');
	}else if($('.img-top').hasClass('fadeout')){
		$('.img-top').removeClass('fadeout').addClass('fadein');
	}
	if($('.img-top').hasClass('fadeout')){
		$('.img-bot').removeClass('fadeout').addClass('fadein');
	}else if($('.img-bot').hasClass('fadein')){
		$('.img-bot').removeClass('fadein').addClass('fadeout');
	}
});

$('.img-top, .img-bot').on('webkitAnimationEnd', function(){
	console.log($('.img-top').hasClass('fadeout'));
	$('.img-top').hasClass('fadeout') ? $('.img-top')[0].src = img_arr[i] : '';
	$('.img-bot').hasClass('fadeout') ? $('.img-bot')[0].src = img_arr[i] : '';
	console.log(i);
});