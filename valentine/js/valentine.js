var wrap = document.querySelector("#wrap");
lis = document.querySelectorAll("#wrap li");
winH = $(window).innerHeight();
winW = $(window).innerWidth();
var timer = null;
var num = 0;
$("#wrap").css({
    width: winW,
    height: (lis.length + 1) * winH
}),
$("#wrap li").each(function() {
    $(this).css({
        width: winW,
        height: winH
    })
});
var index = 0;
document.addEventListener("touchstart",function(i) {
    this.startY = i.touches[0].clientY,
    i.preventDefault()
}),
document.addEventListener("touchmove",function(i) {
    this.moveY = i.touches[0].clientY,
    i.preventDefault()
}),
document.addEventListener("touchend",function() {
    var i = this.moveY - this.startY;
    i < -100 ? (index++, index > lis.length - 1 && (alert("葛丽博，情人节快乐!"), index--)) : i > 100 && (index--, index < 0 && (alert("已经是第一页了!"), index = 0));
    for (var e = 0; e < lis.length; e++) lis[e].className = "page" + (e + 1);
    lis[index].className = "focus page" + (index + 1);
    if(lis[1].className == "focus page2"){
    	console.log(1);
    	$('#p2-word').text('');
		num = 0;
    	write();
    }
    wrap.style.transform = "translateY(-" + index * winH + "px)"
});
//打字
var str = "假如人生不曾相遇，我还是那个我，偶尔做做梦，然后开始日复一日地奔波，淹没在这喧嚣的城市里。茫茫人海中，相识了你，是一种缘份；只希望有一天，你走得太倦，只要一转身，我就在你身边!"
function write(){
	setTimeout(function(){
		timer = setInterval(function(){
			$("#p2-word")[0].innerHTML += str.charAt(num);
			num++;
			if(num > str.length){
				//console.log(num);
				clearInterval(timer);
			}
		},400);
	},4500)
}

var voice = document.querySelector("audio"),
play_voice = document.querySelector(".play-voice");
voice.oncanplay = function() {
    this.play()
},
play_voice.addEventListener("touchend",
function(i) {
    var e = i || window.event;
    voice.paused ? (voice.play(), play_voice.src = "img/music_on.png") : (voice.pause(), play_voice.src = "img/music_off.png"),
    e.stopPropagation()
});
for (var Src = [ "img/arrow.svg","img/music_on.png","img/3.jpg","img/music_off.png", "img/music_on.png","img/p1-bg2.png","img/p1-qiqiu.png","img/p1-val.png","img/happy.png","img/p1-bg2.png","img/letter-open.png","img/p2-1.png","img/letter.png","img/title.png","img/p2-val.png","img/paper.png","img/p2-roseleft.png","img/p2-mydear.png","img/p2-roseright.png","img/p3-heart.png","img/p3-4.jpg","img/p3-5.jpg","img/p3-clamp1.png","img/p3-paper.png","img/p3-paper2.png","img/p3-clamp2.png","img/p3-2.jpg","img/p3-3.jpg","img/p3-1.jpg"], count = 0, mask = document.querySelector("#mask"), pro_bar = document.querySelector(".progress"), per = document.querySelector("#mask p"), i = 0; i < Src.length; i++) {
    var img = new Image;
    img.src = Src[i],
    img.onload = function() {
        count++;
        var i = parseInt(100 * count / Src.length);
        per.innerHTML = "Loading" + i + "%",
        pro_bar.style.width = 200 * count / Src.length + "px",
        count == Src.length && (mask.style.display = "none", lis[0].className = "focus page1")
    }
}