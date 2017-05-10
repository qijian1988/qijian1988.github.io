/*点击期数 展示对应的主播*/
var leftListH = $('#leftList li').height();
 $('#leftList li').each(function(){
	$(this).on('touchend',function(e){
		e.preventDefault();
		console.log(leftListH);
		// $('#leftList').scrollTop(leftListH*$(this).index());
		$(this).addClass('leftChecked').siblings().removeClass('leftChecked')
		$('#rightList ul').eq($(this).index()).show().siblings().hide();
		$('#rightList ul').eq($(this).index()).children().eq(0).addClass('leftChecked').siblings().removeClass('leftChecked');
		$('#container ul').eq($(this).index()).show().siblings().hide();
		$('#container ul').eq($(this).index()).addClass('select').siblings().removeClass('select');
	})
})

/*点击主播 展示该主播的视频*/
$('#rightList li').each(function(){
	$(this).on('touchend',function(e){
		e.preventDefault();
		$(this).addClass('leftChecked').siblings().removeClass('leftChecked');
		$('.select li').eq($(this).index()).show().siblings().hide();
	})
})
