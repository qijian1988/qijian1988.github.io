function Rotate(){
	//app.f 计数
	app.f = 0;
	//loading
	loadOver();
	//data-index点击
	$('[data-index]').hammer().on('tap',function(){
		var index = parseInt($(this).data('index'));
		var pBox = $(this).parents('.pan-box');
		var deg = (index - app.index)*60;
		if(deg<0){
			deg += 360;
		}
		app.index = index;
		pBox.find('.active').removeClass('active');
		pBox.find('.round-box').transition({rotate:'-='+deg+'deg'},500,function(){
			pBox.find('[data-index="'+index+'"]').addClass('active')
		})
	})

	//确定按钮
	$('.confirm-btn').hammer().on('tap',function(){
		var pBox = $(this).parents('.pan-box');
		pBox.addClass('disable');
		$(this).addClass('active');
		if(app.index!=5 && app.f<4){
			app.f++;
			$('.photo').each(function(){
				$(this).find('i:eq(4)').get(0).className = 'f'+app.f;
			})
		}
		$('.pan [data-index]').removeClass('active');
		//跳转
		switch(app.status){
			case 'game1':
				//game1
				$('#game1')
					.transition({y:-20},200)
					.transition({y:-1040},500);
				$('#game2')
					.css({y:1040,display:'block'})
					.transition({y:-80},500)
					.transition({y:60},200)
					.transition({y:0},200,function(){
						$('#game1').hide();
					});
				$('.pan .round-box').transition({rotate:'-=1200deg'},2000,function(){
					app.index+=2;
					if(app.index>6){
						app.index-=6;
					}
					$('.pan [data-index="'+app.index+'"]').addClass('active');
					pBox.removeClass('disable');
					$('.pan .confirm-btn').removeClass('active');
					app.status = 'game2'
				})
				break;
			case 'game2':
				//game2
				$('#game2')
					.transition({x:-20},200)
					.transition({x:-1040},500,function(){
						$('#game2').hide();
						$('#game3').show();
					});
				$('.pan .round-box').transition({rotate:'-=1020deg'},2000,function(){
					app.index-=1;
					if(app.index<1){
						app.index+=6;
					}
					$('.pan [data-index="'+app.index+'"]').addClass('active');
					pBox.removeClass('disable');
					$('.pan .confirm-btn').removeClass('active');
					app.status = 'game3'
				})
				break;
			case 'game3':
				//game3
				$('#game3')
					.transition({x:-20},200)
					.transition({x:640},500);
				$('#game4')
					.css({x:-640,display:'block'})
					.transition({x:80},500)
					.transition({x:-60},200)
					.transition({x:0},200,function(){
						$('#game3').hide();
					});
				$('.pan .round-box').transition({rotate:'-=1200deg'},2000,function(){
					app.index+=2;
					if(app.index>6){
						app.index-=6;
					}
					$('.pan [data-index="'+app.index+'"]').addClass('active');
					pBox.removeClass('disable');
					$('.pan .confirm-btn').removeClass('active');
					app.status = 'game4'
				})
				break;
			case 'game4':
				//game4
				$('#game4')
					.transition({y:-40},200)
					.transition({y:1040},500);
				$('#game5')
					.css({y:-1040,display:'block'})
					.transition({y:80},500)
					.transition({y:-60},200)
					.transition({y:0},200,function(){
						$('#game4').hide();
					});
				$('.pan .round-box').transition({rotate:'-=1020deg'},2000,function(){
					app.index-=1;
					if(app.index<1){
						app.index+=6;
					}
					$('.pan [data-index="'+app.index+'"]').addClass('active');
					pBox.removeClass('disable');
					$('.pan .confirm-btn').removeClass('active');
					app.status = 'game5'
				})
				break;
			case 'game5':
				//game5
				// console.log(app.f)
				myAudio.pause();
				myAudio.src = 'media/age_new.mp3';
				myAudio.loop = false;
				myAudio.play();
				var deg = (5 - app.index)*60;
				if(deg<0){
					deg += 360;
				}
				$('#game5 i')
					.transition({opacity:0},function(){
						if(app.f>2){
							$('#game5 i').addClass('less')
						}else{
							$('#game5 i').addClass('great')
						}
					})
					.transition({opacity:1,scale:1.1,delay:300},4500);
				pBox.find('.photo>i').transition({'-webkit-filter':'brightness(0.5)'},500)
				pBox.find('.round-box').transition({rotate:'-='+deg+'deg',delay:500},1000,function(){
					pBox.find('.photo>i:eq(4)').css({'-webkit-filter':'brightness(1.2)'})
					setTimeout(function(){
						$('#game5').fadeOut();
						$('.pan').transition({scale:3,y:200,opacity:0},2000,'linear',function(){
							$('.pan').hide();
						})
						app.pageTo('#age-video',function(){
							$('#age-video').fadeIn('slow');
							if(app.f>2){
								ageChange(2);
							}else{
								ageChange(1);
							}
						})
					},3000)
				})
				break;
		}
	})

	function loadOver(){
		$('#loading-icon,#loading-num').fadeOut();
		$('#music-tip').fadeIn(function(){
			setTimeout(function(){
				$('#music-tip').fadeOut();
				$('.lead>i:eq(0)')
					.transition({y:-50,opacity:1},800,'ease-in-out')
					.transition({y:-100,opacity:0,delay:2300},800,'ease-in-out')
				$('.lead>i:eq(1)')
					.transition({y:-50,opacity:1,delay:500},800,'ease-in-out')
					.transition({y:-100,opacity:0,delay:1900},800,'ease-in-out')
				$('.lead>i:eq(2)')
					.transition({y:-50,opacity:1,delay:1000},800,'ease-in-out')
					.transition({y:-100,opacity:0,delay:1600},800,'ease-in-out')
				$('.lead img')
					.transition({scale:1.15,delay:2000},300)
					.transition({scale:0.75},200)
				$('.lead>i:eq(3)')
					.transition({y:-50,opacity:1,delay:1500},800,'ease-in-out')
					.transition({y:-100,opacity:0,delay:1400},800,'ease-in-out',function(){
						//index
						setTimeout(function(){
							app.pageTo('#index',function(){
								$('#index').addClass('on')
								setTimeout(function(){
									$('#index')
										.transition({x:20},100)
										.transition({x:-640},500);
									$('#game1')
										.css({x:640,display:'block'})
										.transition({x:-60},500)
										.transition({x:20},200)
										.transition({x:0},200,function(){
											$('.pan .pan-box').addClass('on')
											$('.pan').removeClass('disable')
											app.status = 'game1';
											setTimeout(function(){
												$('#game1').addClass('go')
												$('.camera')
													.transition({scale:.9,opacity:1},300)
													.transition({scale:1},100)
												setTimeout(tip,800)
											},3000)
										});
								},6000)
							})
						},300)
					})
			},1500)
		});

	}
	var posi = [
		[352,447],
		[542,577],
		[512,817],
		[322,927],
		[122,827],
		[102,597]
	]
	function tip(){
		if(!app.tip) app.tip = 1;
		$('.pan [data-index]').removeClass('active');
		if(app.tip>6){
			// return
			$('.hand').hide();
			$('.pan [data-index="1"]').addClass('active');
			$('.pan .pan-box').removeClass('disable');
			$('#game1').removeClass('go')
			app.index = 1;
			return
		}
		$('.hand').show().css({
			x:posi[app.tip-1][0],
			y:posi[app.tip-1][1]
		});
		$('.pan [data-index="'+(app.tip++)+'"]').addClass('active');
		setTimeout(tip,400)
	}
}