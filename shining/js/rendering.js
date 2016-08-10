//窗口大小改变时自动加载;
//window.onresize = function () {
//	location.reload();
//};
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
//轮播图
var Img=document.querySelectorAll('#wrapImg img');
var dotLi=document.querySelectorAll('#dot li');
var num=0;
var timer=null;
//自动播放函数
function autoPlay(){
		timer=setInterval(function(){
		num++;
		if(num>2){
			num=0;
		}
		for (var i=0;i<Img.length;i++) {
			Img[i].style.display='none';
			dotLi[i].style.background='white';
		}
		Img[num].style.display='block';
		dotLi[num].style.background='red';
	},3000)
}
autoPlay();
//清除自动播放
function clearPlay(){
	clearInterval(timer);
}
//轮播图下方点击按钮控制图片
$('#dot li').each(function(){
	$(this).hover(function(){
		clearPlay();
		$('#dot li').css({
			background:'white',
		})
		$('#wrapImg img').eq($(this).index()).show().siblings().hide();
		$(this).css({
			background:'red',
		})
		num=$(this).index();
		autoPlay();
	})
})
//content瀑布流 内容栏
var uls=document.querySelectorAll('#content ul');
var imgSrc=['img/rendering/1.jpg','img/rendering/2.jpg','img/rendering/3.jpg','img/rendering/4.jpg','img/rendering/5.jpg','img/rendering/6.jpg','img/rendering/7.jpg','img/rendering/8.jpg','img/rendering/9.jpg','img/rendering/10.jpg','img/rendering/11.jpg','img/rendering/12.jpg','img/rendering/13.jpg','img/rendering/14.jpg','img/rendering/15.jpg','img/rendering/16.jpg','img/rendering/17.jpg','img/rendering/18.jpg','img/rendering/19.jpg','img/rendering/20.jpg','img/rendering/21.jpg','img/rendering/22.jpg','img/rendering/23.jpg','img/rendering/24.jpg','img/rendering/25.jpg','img/rendering/26.jpg','img/rendering/27.jpg','img/rendering/28.jpg','img/rendering/29.jpg','img/rendering/30.jpg','img/rendering/31.jpg','img/rendering/32.jpg','img/rendering/33.jpg','img/rendering/34.jpg','img/rendering/35.jpg',];
//创建li函数;
function randFn(min,max){
	return parseInt(Math.random()*(max-min+1)+min);
}
function creatFn(num){
	for(var i=0;i<num;i++){
		var img=new Image();
		var li=document.createElement('li');
		li.style.height=randFn(250,300)+'px';
		li.innerHTML='<a><img src="'+imgSrc[i]+'"/></a><p id="min-mask"><img src="img/rendering/fangda.png"/></p>';
		//建立数组存储ul高度
		var ulHeight=[];
		for(var j=0;j<uls.length;j++){
			var h=uls[j].offsetHeight;
			ulHeight.push(h);
		}
		//判断最低ul
		var minHeight=ulHeight[0];
		var index=0;
		for(var k=0;k<uls.length;k++){
			if(ulHeight[k]<minHeight){
				minHeight=ulHeight[k];
				index=k;
			}
		}
		uls[index].appendChild(li);
		//移到li上蒙版出现;
		$('#content li').each(function(){
			$(this).hover(function(){
				$('p').hide();
				$('p',$(this)).stop().fadeIn('slow');
			})
		})
		//点击蒙版出现大图
		$('#content p').each(function(){
			$(this).click(function(){
				var newImg=$(this).siblings().clone();
				$('#max-mask').show();
				$('#max-mask').html(newImg);
			})
		})
	}
}
creatFn(35)
$('#max-mask').click(function(){
	$(this).hide('slow');
})
//email,facebook,linkedin等鼠标移上图标改变;
$('#footer li a').each(function(){
	$(this).hover(function(){
		$('img',$(this)).stop().toggle();
	})
})
