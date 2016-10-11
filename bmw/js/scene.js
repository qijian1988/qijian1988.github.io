function Scene(){
	//跳转到场景一
	$('#scene1').fadeIn(1000,function(){
		$(this).addClass('go');
		//点击按钮，播放开门音效之后整个页面淡出
		$(".wj_father_pic").on('touchend',function(){
			myAudio.pause();
			myAudio.src = 'media/kaimen.mp3';
			myAudio.loop = false;
			myAudio.play();
			// $(this).addClass('disable')
			$("#scene1").fadeOut();
			app.pageTo('#scene2',function(){
			    $("#scene2").fadeIn('slow');
			    $("#last_text").fadeIn('slow');
			    myAudio.pause();
				myAudio.src = 'media/ei.mp3';
				myAudio.loop = 'loop';
				myAudio.play();
				$('#last_text>p:eq(0)')
					.transition({y:-50,opacity:1},800,'ease-in-out')
					.transition({y:-100,opacity:0,delay:3000},800,'ease-in-out')
				$('#last_text>p:eq(1)')
					.transition({y:-50,opacity:1,delay:800},800,'ease-in-out')
					.transition({y:-150,opacity:0,delay:3100},800,'ease-in-out')
				$('#last_text>p:eq(2)')
					.transition({y:-50,opacity:1,delay:1600},800,'ease-in-out')
					.transition({y:-250,opacity:0,delay:3200},800,'ease-in-out')
				$('#last_text>p:eq(3)')
					.transition({y:-250,opacity:1,delay:6500},1500,'ease-in-out')
				$('#last_text>p:eq(4)')
					.transition({y:-250,opacity:1,delay:7500},1500,'ease-in-out')
				$('#last_text>p:eq(5)')
					.transition({y:-250,opacity:1,delay:9500},1500,'ease-in-out')
				setTimeout(function(){
					$('#last_text').transition({y:180,'background':'rgba(0, 0, 0, 0)'},2000)
				},11000)
				//当点击再嗨一次时刷新页面
				$('.left_btn').on('touchend',function(){
					location.href = './';
				})
				//当点击嗨翻好友时弹出一个黑屏
				$('.right_btn').on('touchend',function(){
					$('.grayDiv').fadeIn('slow');
				})
				//当点击黑屏时让黑屏消失
				$('.grayDiv').on('touchend',function(){
					$(this).fadeOut('slow');
				})
			})
		})
	})
}