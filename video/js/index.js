/*点击期数 展示对应的主播*/
 $('#leftList li').each(function(){
	$(this).on('touchend',function(e){
		e.preventDefault();
		$(this).addClass('leftChecked').siblings().removeClass('leftChecked');
		$('#rightList li').eq($(this).index()).addClass('leftChecked').siblings().removeClass('leftChecked');
		$('#container li').eq($(this).index()).show().siblings().hide();
	})
})

 $('#rightList li').each(function(){
	$(this).on('touchend',function(e){
		e.preventDefault();
		$(this).addClass('leftChecked').siblings().removeClass('leftChecked');
		$('#leftList li').eq($(this).index()).addClass('leftChecked').siblings().removeClass('leftChecked');
		$('#container li').eq($(this).index()).show().siblings().hide();
	})
})
