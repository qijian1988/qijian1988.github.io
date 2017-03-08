$('.tab').mouseover(function() {
	$(this).css({
		background: '#e44d26'
	}).siblings().css({
		background: 'black'
	})
});
//隐藏列表
$('.btn').click(function(){
	$(this).toggleClass('out click');
	$('#con-list').slideToggle(1000);
})
$('#con-list div').each(function(){
	$(this).css({'animation-delay':($(this).index()/6)+'s'});
})
//轮播栏
var count = 0;
setInterval(function(){
	$(window).resize(function(){
		$('#nav ul').css({
			width:5*$(window).innerWidth(),
		})
		$('#nav ul li').css({
			width:$(window).innerWidth(),
		})
	})
	var x = $(window).innerWidth();
	$('#nav ul img').css({
		transform:'scale(1)',
	})
	count ++;
	if(count > 2){
		count = 0;
	}
	$('#nav ul').css({
		left:-x*count,
	})
	$('#nav ul img').eq(count).css({
		transform:'scale(1.1)',
	})
},4000)
$('#nav ul').css({
	width:5*$(window).innerWidth(),
})
$('#nav ul li').css({
	width:$(window).innerWidth(),
})
//article栏


//联系方式栏

//底部背景图片连播
var num=0;
setInterval(function(){
	$(window).resize(function(){
		$('#bottom').css({
			width:3*$(window).innerWidth(),
		})
		$('#bottom img').css({
			width:$(window).innerWidth(),
		})
	})
	num++;
	if(num>$(window).innerWidth()){
		num=0;
	}
	$('#bottom').css({
		left:-num,
	})
},20)
$('#bottom').css({
		width:3*$(window).innerWidth(),
	})
$('#bottom img').css({
		width:$(window).innerWidth(),
})
