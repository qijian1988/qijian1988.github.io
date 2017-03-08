	//蒙版动画
	$('#btn').click(function(){
		// $('#max-mask').slideUp('slow');
		$('#max-mask').animate({
			top:'-100%',
		},800);

	})
	$('#text').focus(function(){
		$('#introduce').show();
		$('#introduce').animate({
			top:'40%',
			right:'20%',
			width:300,
			height:400,
		},800)
	})
	//画布视频播放;
	var canvas=document.querySelector('#play canvas');
	var context=canvas.getContext('2d');
	var video=document.querySelector('#play video');
	var audio=document.querySelector('audio');
	$('#play video').on('canplay',function(){
		//播放按钮控制视频播放.暂停;
		$('#play-s').click(function(){
			video.play();
			audio.pause();
			DrawPlay();
			$('#play img').toggle('slow');
			$('#play img').css({
				left:'10%',
				top:'85%'
			});
		})
		$('#play-h').click(function(){
			video.pause();
			audio.play();
			$('#play img').toggle('slow');
		})
		$('#play').mouseover(function(){
			$('#play-s,#play-h').css({
				opacity:1,
			})
		})
		$('#play').mouseout(function(){
			$('#play-s,#play-h').css({
				opacity:0.4,
			})
		})
	})
	function DrawPlay(){
		if(!video.ended){
			context.drawImage(video,0,0,canvas.width,canvas.height);
			window.requestAnimationFrame(DrawPlay);
		}else{
			window.cancelAnimationFrame(DrawPlay);
		}
	}
	//联系方式栏
	$('#contact li').each(function(){
		$(this).mouseover(function(){
			$('a',$(this)).stop().animate({
				top:-105,
			},'slow')
		})
		$(this).mouseout(function(){
			$('a',$(this)).stop().animate({
				top:0,
			},'slow')
		})
	})
	//底部背景图片轮播
	$(window).resize(function(){
		$('#bottom').css({
			width:100*$(window).innerWidth(),
		})
		$('#bottom li').css({
			width:$(window).innerWidth(),
		})
	})
	$('#bottom').css({
			width:100*$(window).innerWidth(),
		})
	$('#bottom li').css({
			width:$(window).innerWidth(),
	})
	var num=0;
	setInterval(function(){
		num++;
		if(num>$(window).innerWidth()){
			num=0;
		}
		$('#bottom').css({
			left:-num,
		})
	},20)