/*マウスオーバー/マウスアウト
$(function(){
	$('.box1').mouseover(function(){
		$('.box1').addClass('box1-ext');
	});

	$('.box1').mouseout(function(){
		$('.box1').removeClass('box1-ext');

	});
});
*/

/*マウスクリック検知*/
$(function(){
  $('.box1').on('click', function(){
  	$('.box1').addClass('box1-ext');
});
  $('.box1').mouseout('click', function(){
  	$('.box1').removeClass('box1-ext');
});

});


/*ダブルクリック*/
/*
$(function(){
  $('.box1').dblclick(function(){
  	$('.box1').slideUp();
  });
});
*/