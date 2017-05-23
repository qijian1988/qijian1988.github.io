//图片路径数组
app.imgArr = ['bg.jpg','music-on.png','music-off.png','camera.png','confirm-btn.png','game-bg1.jpg','game-bg2.jpg','game-bg3.jpg','game-bg4.jpg','game-bg5.jpg','game-word.png','game-word-g.png','game-word-l.png','index-bg.jpg','index-word.png','lead-word.png','pan-name-curr.png','pan-name.png','pan.png','wj_father.jpg','wj_father_text.png','wj_last.jpg','wj_logo.jpg','y/1.jpg','y/2.jpg','y/3.jpg','y/4.jpg','y/5.jpg','y/6.jpg','y/7.jpg','y/8.jpg','y/leave.png','photo/1.png','photo/2.png','photo/3.png','photo/4.png','photo/5.png','photo/51.png','photo/52.png','photo/53.png','photo/54.png','photo/6.png'];
//音频播放
var myAudio = document.createElement('audio');
myAudio.src = 'media/fun.mp3';
myAudio.oncanplay=function(){
	myAudio.play();
}