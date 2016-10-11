var wrap = document.querySelector('#wrap');
var lis = document.querySelectorAll('#wrap li');
var winH = $(window).innerHeight();
var winW = $(window).innerWidth();
$('#wrap').css({
	width:winW,
	height:(lis.length+1)*winH,
})
$('#wrap li').each(function(){
	$(this).css({
		width:winW,
		height:winH,
	})
})
//上下滑动控制页面
var index = 0;
document.addEventListener('touchstart',function(e){
	this.startY = e.touches[0].clientY;
	e.preventDefault();
})
document.addEventListener('touchmove',function(ev){
	this.moveY = ev.touches[0].clientY;
	ev.preventDefault();
})
document.addEventListener('touchend',function(){
	var Y = this.moveY - this.startY;
	if(Y < -100){
		index ++;
		if(index > lis.length - 1){
			alert('我是有底线的!');
			index --;
		}
	}else if(Y > 100){
		index --;
		if(index < 0){
			alert('已经是第一页了!');
			index = 0;
		}
	}
	for (var i = 0;i<lis.length;i++) {
		lis[i].className = 'page'+(i+1);
	}
	lis[index].className = 'focus page'+(index+1);
	wrap.style.transform = 'translateY(-' + index*winH + 'px)';
	console.log(index);
})
// 音频
var voice = document.querySelector('audio');
var play_voice = document.querySelector('.play-voice');
voice.oncanplay=function(){
	this.play();
};
play_voice.addEventListener('touchend',function(ev){
	var e = ev||window.event;
	if(voice.paused){
		voice.play();
		play_voice.src = 'img/p1/music_on.png';
	}else{
		voice.pause();
		play_voice.src = 'img/p1/music_off.png';
	}
	e.stopPropagation();
})
//预加载
var Src = ["img/p1/p1img01.png","img/p2/p2img_0006_bg.png","img/p3/p3img_bg.png","img/p4/p4img_0007.png","img/p5/p5bg.png","img/p6/p6_bg_02.png","img/p6/p8_02.png","img/p6/p8bg.png","img/p1/music_off.png","img/p1/music_on.png","img/p1/p1imglogo.png","img/p1/p1img_0004.png","img/p1/p1img_0003.png","img/p1/p1img_0002.png","img/p1/p1img_0001.png","img/p1/p1imglogo.png","img/p1/p1img_0004.png","img/p1/p1img_0003.png","img/p1/p1img_0002.png","img/p1/p1img_0001.png","img/p1/p1imglogo.png","img/p2/p2img_0003.png","img/p2/p2img_0002.png","img/p2/p2img_0001.png","img/p2/p2img_0005.png","img/p1/p1imglogo.png","img/p1/p1imglogo.png","img/p4/p4img_0006.png","img/p1/p1imglogo.png","img/p1/p1imglogo.png","img/p1/p1imglogo.png","img/p6/click1.svg","img/p6/video2.svg","img/p1/p1imglogo.png"];
var count = 0;
var mask = document.querySelector('#mask');
var pro_bar = document.querySelector('.progress');
var per = document.querySelector('#mask p');
for (var i = 0; i < Src.length; i++) {
	var img = new Image();
	img.src = Src[i];
	img.onload = function(){
		count ++;
		var percent = parseInt(100*count/Src.length);
		per.innerHTML = 'Loading'+percent + '%';
		pro_bar.style.width = 200*count/Src.length + 'px';
		if(count == Src.length){
			mask.style.display = 'none';
			lis[0].className = 'focus page1';
		}
	}
}
//page-7
var video_link = document.querySelector('.video-link');
video_link.addEventListener('touchstart',function(){
	window.open('http://www.le.com/ptv/vplay/21294750.html#vid=21294750','_blank');
})






