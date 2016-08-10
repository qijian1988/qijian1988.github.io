//窗口大小改变时自动加载;
window.onresize = function () {
	location.reload();
};
//导航栏li样式变化
$('#nav-list li').each(function(){
	$(this).hover(function(){
		$('#nav-list li').css({
			background:'',
		})
		$('#nav-list li a').css({
			color:'',
		})
		$(this).css({
			background:'white',
		})
		$('a',$(this)).css({
			color:'black',
		})
	})
})
//点击导航图标,列表显示;
$('#push-down').click(function(){
	$('#down-list').slideToggle(800);
	$('#down-list li').each(function(){
		$(this).hover(function(){
			$('#down-list li').css({
				background:'',
			})
			$('#down-list li a').css({
				color:'',
			})
			$(this).css({
				background:'white',
			})
			$('a',$(this)).css({
				color:'black',
			})
		})
	})
})
//email,facebook,linkedin等鼠标移上图标改变;
$('#footer li a').each(function(){
	$(this).hover(function(){
		$('img',$(this)).stop().toggle();
	})
})
