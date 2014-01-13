
$(function(){
	$('.topmenu ul li').eq(4).mouseover(function(){
		$('.topmenu ul li ul').show();
	})
	$('.topmenu ul li').eq(4).mouseout(function(){
	$('.topmenu ul li ul').hide();
	})

	$('.c33').mouseover(function(){
	$(this).find('.sub').css('display','block');

	});

	$('.c33').mouseout(function(){
	$(this).find('.sub').css('display','none');

	});

	$('.boxgrid').hover(
		function(){
			$(this).find('.boxcaption').stop().animate({right:0},500);
		},function(){
			$(this).find('.boxcaption').stop().animate({right:230},500);
		}

	);
	
	$('')


	
})