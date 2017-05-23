$(function(){
//暂停播放背景音乐
var audio=document.getElementById("audio")
$(".kaiguan").click(function(){
	audio.pause();
	$(".kaiguan").css({"display":"none"});
	$(".kaiguanguan").css({"display":"block"});
})
$(".kaiguanguan").click(function(){
	audio.play();
	$(".kaiguanguan").css({"display":"none"});
	$(".kaiguan").css({"display":"block"});
})
	//下载图片页面
	$(".loading_img").addClass("loading_img_move");       
    var aDiv=['images/dt1.png','images/n1_bg.jpg','images/n1_mz1.png','images/n1_mz2.png','images/n1_mz3.png','images/n2_1.png','images/n2_3.png','images/n2_4.png','images/n3_1.png','images/n3_2.png','images/n4_1.png','images/n4_2.png','images/n5_2.png','images/n5_3.png','images/n7_1.png','images/n3_h.png','images/n3_s.png','images/n4_left.png','images/n4_right.png','images/yuan.png']
            //alert(aDiv[0])
    var imglength=0;
    for (var i = 0; i < aDiv.length; i++) {
      	var img=new Image();
      	img.src=aDiv[i];
        aDiv[i].index=i;
        img.onload=function(){
        	imglength++;
			$(".loading_text").html(parseInt(imglength/aDiv.length*100)+"%");
            if(imglength>=aDiv.length-1){
            	audio.play();
            	$(".loading_out").addClass("loading_move");
            	setTimeout(function(){
            		$(".loading_img").removeClass("loading_img_move");
            		$(".loading_out").css({"display":"none"});
					n1_move();
					$(".jt").addClass("jt_move");
				},500)
            }
        }
    };
	function n1_move(){
			$(".nub_bg").addClass("nub_bg_zhuan_move");
				$(".n1_mz1").addClass("n1_1");
				$(".n1_mz2").addClass("n1_2");
				$(".n1_mz3").addClass("n1_3");
				setTimeout(function(){
					$(".n1_x1").addClass("nub_bg_move");
					$(".n1_x2").addClass("nub_bg_move");
					$(".n1_x3").addClass("nub_bg_move");
					$(".n1_x4").addClass("nub_bg_move");
				},1500)
			
	}
	function n1_remove(){
		$(".nub_bg").removeClass("nub_bg_zhuan_move");
		$(".n1_mz1").removeClass("n1_1");
		$(".n1_mz2").removeClass("n1_2");
		$(".n1_mz3").removeClass("n1_3");
		$(".n1_x1").removeClass("nub_bg_move");
		$(".n1_x2").removeClass("nub_bg_move");
		$(".n1_x3").removeClass("nub_bg_move");
		$(".n1_x4").removeClass("nub_bg_move");
		$(".n1_mz1").css({"top":"263px","left":"-100%"});
		$(".n1_mz2").css({"top":"63px","left":"100%"});
		$(".n1_mz3").css({"top":"283px","left":"-100%"});
		$(".n1_x1").css({"opacity":"0"});
		$(".n1_x2").css({"opacity":"0"});
		$(".n1_x3").css({"opacity":"0"});
		$(".n1_x4").css({"opacity":"0"});
		$(".nub_bg").css({"opacity":"0"});
	}
	//n1_move();
	function n2_zhu_move(){
		var n2zs_left=0;
		var n2zs_right=0;
		var n2zs_right_timer=null;
		var n2zs_left_timer=null;
		n2zs_left_timer=setInterval(
			function(){
				n2zs_left=n2zs_left+7;	
				if(n2zs_left>=637){
					n2zs_left=637;
					clearInterval(n2zs_left_timer);
				}
				$(".n2_mz3_left span").html(n2zs_left);
			},18)
		n2zs_right_timer=setInterval(
			function(){
				n2zs_right=n2zs_right+1;	
				if(n2zs_right>=47){
					n2zs_right=47;
					clearInterval(n2zs_right_timer);
				}
				$(".n2_mz3_right span").html(n2zs_right);
			},18)
		
		$(".zhu_left").addClass("zhu_left_move");
		$(".zhu_right").addClass("zhu_right_move");
	}
	function n2_move(){
		$(".n2_mz1").addClass("n2_mz1_move");
		$(".n2_mz2").addClass("n2_mz2_move");
		$(".n2_mz3").addClass("n2_mz3_move");
		$(".n2_mz1_nr").addClass("n2_mz1_nr_move");
		setTimeout(function(){
			canvas1();
			canvas2();
			canvas3();
			canvas4();
			$("#canvas1").css({"display":"block"});
			$("#canvas2").css({"display":"block"});
			$("#canvas3").css({"display":"block"});
			$("#canvas4").css({"display":"block"});
			$(".canvas1_text").css({"display":"block"});
			$(".canvas2_text").css({"display":"block"});
			$(".canvas3_text").css({"display":"block"});
			$(".canvas4_text").css({"display":"block"});
		},1000)
		setTimeout(function(){
			n2_zhu_move();
		},3000)
	}
	//n2_move();
	function n2_remove(){
		$(".n2_mz1").removeClass("n2_mz1_move");
		$(".n2_mz2").removeClass("n2_mz2_move");
		$(".n2_mz3").removeClass("n2_mz3_move");
		$(".n2_mz1_nr").removeClass("n2_mz1_nr_move");
		$(".zhu_left").removeClass("zhu_left_move");
		$(".zhu_right").removeClass("zhu_right_move");
		$(".n2_mz1").css({"top":"100%"});
		$(".n2_mz2").css({"top":"100%"});
		$(".n2_mz3").css({"top":"100%"});
		$(".n2_mz1_nr").css({"opacity":"0"});
		$(".zhu_left").css({"height":"0"});
		$(".zhu_right").css({"height":"0"});
		$("#canvas1").css({"display":"none"});
		$("#canvas2").css({"display":"none"});
		$("#canvas3").css({"display":"none"});
		$("#canvas4").css({"display":"none"});
		$(".canvas1_text").css({"display":"none"});
		$(".canvas2_text").css({"display":"none"});
		$(".canvas3_text").css({"display":"none"});
		$(".canvas4_text").css({"display":"none"});
	}
	

	function n3_move(){
		$(".n3_1").addClass("n3_1_move");
		$(".n3_ul").addClass("n3_ul_move");
		$(".n3_2").addClass("n3_2_move");
		$(".n3_t_out").addClass("n3_ul_li_move");
		$(".ditu1").addClass("ditu1_move");
		$(".ditu2").addClass("ditu2_move");
		$(".n3_h").addClass("huo_move");
		$(".n3_s").addClass("huo_move");
		setTimeout(function(){
			$(".n3_text").addClass("nub_bg_move");
		},2500)
		setTimeout(function(){
			$(".n3_bv").addClass("nub_bg_move");
			$(".n3_rv").addClass("nub_bg_move");
		},4900)
	}
	//n3_move();
	function n3_remove(){
		$(".n3_1").removeClass("n3_1_move");
		$(".n3_ul").removeClass("n3_ul_move");
		$(".n3_2").removeClass("n3_2_move");
		$(".n3_t_out").removeClass("n3_ul_li_move");
		$(".ditu1").removeClass("ditu1_move");
		$(".ditu2").removeClass("ditu2_move");
		$(".n3_h").removeClass("huo_move");
		$(".n3_s").removeClass("huo_move");
		$(".n3_text").removeClass("nub_bg_move");
		$(".n3_bv").removeClass("nub_bg_move");
		$(".n3_rv").removeClass("nub_bg_move");
		$(".n3_1").css({"top":"100%"});
		$(".n3_ul").css({"top":"100%"});
		$(".n3_2").css({"top":"100%"});
		$(".n3_t_out").css({"width":"0"});
		$(".ditu1").css({"opacity":"0"});
		$(".ditu2").css({"opacity":"0"});
		$(".n3_text").css({"opacity":"0"});
		$(".n3_bv").css({"opacity":"0"});
		$(".n3_rv").css({"opacity":"0"});
	}

	function n4_move(){
		$(".n4_1").addClass("n4_1_move");
		$(".n4_2").addClass("n4_2_move");
		setTimeout(function(){
			$(".dk_l").addClass("dk_l_move");
			$(".dk_r").addClass("dk_r_move");
			setTimeout(function(){
				$(".n4_sd").addClass("n4_sd_move");
				setTimeout(function(){
				$(".dk_text").addClass("nub_bg_move");
				},500)
			},500)
		},500)
	}
	//n4_move();
	function n4_remove(){
		$(".n4_1").removeClass("n4_1_move");
		$(".n4_2").removeClass("n4_2_move");
		$(".dk_l").removeClass("dk_l_move");
		$(".dk_r").removeClass("dk_r_move");
		$(".n4_sd").removeClass("n4_sd_move");
		$(".dk_text").removeClass("nub_bg_move");
		$(".n4_1").css({"top":"100%"});
		$(".n4_2").css({"top":"100%"});
		$(".dk_l").css({"left":"-100%"});
		$(".dk_r").css({"right":"-100%"});
		$(".dk_text").css({"opacity":"0"});
	}

	function n5_move(){
		$(".n5_1").addClass("n5_1_move");
		setTimeout(function(){
			$(".n5_q1").addClass("n5_q1_move");
			$(".n5_q2").addClass("n5_q2_move");
			$(".n5_q3").addClass("n5_q3_move");
			$(".n5_q4").addClass("n5_q4_move");
			$(".n5_2").addClass("n5_2_move");
			$(".n5_3").addClass("n5_3_move");
		},600)
		
	}
	//n5_move();
	function n5_remove(){
		$(".n5_1").removeClass("n5_1_move");
		$(".n5_q1").removeClass("n5_q1_move");
		$(".n5_q2").removeClass("n5_q2_move");
		$(".n5_q3").removeClass("n5_q3_move");
		$(".n5_q4").removeClass("n5_q4_move");
		$(".n5_2").removeClass("n5_2_move");
		$(".n5_3").removeClass("n5_3_move");
		$(".n5_1").css({"top":"100%"});
		$(".n5_2").css({"top":"100%"});
		$(".n5_3").css({"top":"100%"});
		$(".n5_q1").css({"left":"-56px"});
		$(".n5_q2").css({"left":"-56px"});
		$(".n5_q3").css({"left":"-56px"});
		$(".n5_q4").css({"left":"-56px"});
	}

	function n6_move(){
		$(".n6_1").addClass("n6_1_move");
		setTimeout(function(){
			$(".n6_ul").css({"display":"block"});
			$(".n6_x").css({"display":"block"});
			$(".n6_q1").addClass("n6_q1_move");
			$(".n6_q2").addClass("n6_q2_move");
			$(".n6_q3").addClass("n6_q3_move");
			$(".n6_q4").addClass("n6_q4_move");
			$(".n6_q5").addClass("n6_q5_move");
			$(".n6_text1").addClass("n6_text1_move");
			$(".n6_text2").addClass("n6_text2_move");
			$(".n6_text3").addClass("n6_text3_move");
			$(".n6_text4").addClass("n6_text4_move");
			$(".n6_text5").addClass("n6_text5_move");
			$(".n6_x").addClass("n6_x_move");
		},1000)		
	}
	//n6_move();

	function n6_remove(){
		$(".n6_1").removeClass("n6_1_move");
		$(".n6_q1").removeClass("n6_q1_move");
		$(".n6_q2").removeClass("n6_q2_move");
		$(".n6_q3").removeClass("n6_q3_move");
		$(".n6_q4").removeClass("n6_q4_move");
		$(".n6_q5").removeClass("n6_q5_move");
		$(".n6_text1").removeClass("n6_text1_move");
		$(".n6_text2").removeClass("n6_text2_move");
		$(".n6_text3").removeClass("n6_text3_move");
		$(".n6_text4").removeClass("n6_text4_move");
		$(".n6_text5").removeClass("n6_text5_move");
		$(".n6_x").removeClass("n6_x_move");
		$(".n6_1").css({"top":"100%"});
		$(".n6_q1").css({"width":"0","height":"0"});
		$(".n6_q2").css({"width":"0","height":"0"});
		$(".n6_q3").css({"width":"0","height":"0"});
		$(".n6_q4").css({"width":"0","height":"0"});
		$(".n6_q5").css({"width":"0","height":"0"});
		$(".n6_text1").css({"width":"0"});
		$(".n6_text2").css({"width":"0"});
		$(".n6_text3").css({"width":"0"});
		$(".n6_text4").css({"width":"0"});
		$(".n6_text5").css({"width":"0"});
		$(".n6_x").css({"height":"0"});
		$(".n6_ul").css({"display":"none"});
		$(".n6_x").css({"display":"none"});
	}

	function n7_move(){
		$(".n7_1").addClass("n7_1_move");
		$(".n7_2").addClass("n7_2_move");
		$(".n7_3").addClass("n7_3_move");
		$(".n7_4").addClass("n7_4_move");
	}
	//n7_move();

	function n7_remove(){
		$(".n7_1").removeClass("n7_1_move");
		$(".n7_2").removeClass("n7_2_move");
		$(".n7_3").removeClass("n7_3_move");
		$(".n7_4").removeClass("n7_4_move");
		$(".n7_1").css({"top":"100%"});
		$(".n7_2").css({"top":"100%"});
		$(".n7_3").css({"top":"100%"});
		$(".n7_4").css({"top":"100%"});
	}
//滑动的js效果
//第一屏
	$(".nub1_out").eq(0).get(0).ontouchstart=function(event){
      event.preventDefault();
      var target=event.targetTouches[0]
      oldx=target.pageX
      oldy=target.pageY
    }

    $(".nub1_out").eq(0).get(0).ontouchmove=function(event){
      var target=event.targetTouches[0]
      newx=target.pageX;
      newy=target.pageY;
    }
    $(".nub1_out").eq(0).get(0).ontouchend=function(event){
    	event.preventDefault();
    	if(newy<=oldy){
    		audio.play();
    		$(".nub1_out").addClass("y1_2");
    		$(".nub2_out").css({"display":"block"});
    		$(".nub1_out").css({"z-index":"2"});
    		$(".nub2_out").css({"z-index":"1"});
    		setTimeout(function(){
    			$(".nub1_out").css({"display":"none"});
    			$(".nub1_out").css({"z-index":"1"});
    			n1_remove();
    			n2_move();
    		},1000);
    	}
    }
   
//第二屏
    $(".nub2_out").eq(0).get(0).ontouchstart=function(event){
      event.preventDefault();
      var target=event.targetTouches[0]
      oldx=target.pageX
      oldy=target.pageY
    }

    $(".nub2_out").eq(0).get(0).ontouchmove=function(event){
      var target=event.targetTouches[0]
      newx=target.pageX;
      newy=target.pageY;
    }
    $(".nub2_out").eq(0).get(0).ontouchend=function(event){
    	event.preventDefault();
    	if(newy<oldy){
    		$(".nub2_out").addClass("y1_2");
    		$(".nub3_out").css({"display":"block"});
    		$(".nub2_out").css({"z-index":"2"});
    		$(".nub3_out").css({"z-index":"1"});
    		setTimeout(function(){
    			$(".nub2_out").css({"display":"none"});
    			$(".nub2_out").removeClass("y1_2");
    		},800);
    		setTimeout(function(){
    			n2_remove();
    			n3_move();
    			$(".nub2_out").css({"z-index":"1"});
    			$(".logo").css({"display":"block"}); 
    		},1000)
    	}
    	if(newy>oldy){
    		$(".nub1_out").removeClass("y1_2");
    		$(".nub2_out").addClass("y2_3");
    		$(".nub1_out").css({"display":"block"});
    		$(".nub2_out").css({"z-index":"2"});
    		$(".nub1_out").css({"z-index":"1"});
    		setTimeout(function(){
    			$(".nub2_out").css({"display":"none"});
    			$(".nub2_out").removeClass("y2_3");
    		},800);
    		setTimeout(function(){
    			n2_remove();
    			n1_move();
    			$(".nub2_out").css({"z-index":"1"});
    		},1000)
    	}
    }

//第三屏
 $(".nub3_out").eq(0).get(0).ontouchstart=function(event){
      event.preventDefault();
      var target=event.targetTouches[0]
      oldx=target.pageX
      oldy=target.pageY
    }

    $(".nub3_out").eq(0).get(0).ontouchmove=function(event){
      var target=event.targetTouches[0]
      newx=target.pageX;
      newy=target.pageY;
    }
    $(".nub3_out").eq(0).get(0).ontouchend=function(event){
    	event.preventDefault();
    	if(newy<oldy){
    		$(".nub3_out").addClass("y1_2");
    		$(".nub4_out").css({"display":"block"});
    		$(".nub3_out").css({"z-index":"2"});
    		$(".nub4_out").css({"z-index":"1"});
    		setTimeout(function(){
    			$(".nub3_out").css({"display":"none"});
    			$(".nub3_out").removeClass("y1_2");
    		},800);
    		setTimeout(function(){
    			n3_remove();
    			n4_move();
    			$(".nub3_out").css({"z-index":"1"});
    		},1000)
    	}
    	if(newy>oldy){
    		$(".nub3_out").addClass("y2_3");
    		$(".nub2_out").css({"display":"block"});
    		$(".nub3_out").css({"z-index":"2"});
    		$(".nub2_out").css({"z-index":"1"});
    		$(".logo").css({"display":"none"});
    		setTimeout(function(){
    			$(".nub3_out").css({"display":"none"});
    			$(".nub3_out").removeClass("y2_3");
    		},800);
    		setTimeout(function(){
    			n3_remove();
    			n2_move();
    			$(".nub3_out").css({"z-index":"1"});
    		},1000)
    	}
    }


//第四屏
 $(".nub4_out").eq(0).get(0).ontouchstart=function(event){
      event.preventDefault();
      var target=event.targetTouches[0]
      oldx=target.pageX
      oldy=target.pageY
    }

    $(".nub4_out").eq(0).get(0).ontouchmove=function(event){
      var target=event.targetTouches[0]
      newx=target.pageX;
      newy=target.pageY;
    }
    $(".nub4_out").eq(0).get(0).ontouchend=function(event){
    	event.preventDefault();
    	if(newy<oldy){
    		$(".nub4_out").addClass("y1_2");
    		$(".nub5_out").css({"display":"block"});
    		$(".nub4_out").css({"z-index":"2"});
    		$(".nub5_out").css({"z-index":"1"});
    		setTimeout(function(){
    			$(".nub4_out").css({"display":"none"});
    			$(".nub4_out").removeClass("y1_2");
    		},800);
    		setTimeout(function(){
    			n4_remove();
    			n5_move();
    			$(".nub4_out").css({"z-index":"1"});
    		},1000)
    	}
    	if(newy>oldy){
    		$(".nub4_out").addClass("y2_3");
    		$(".nub3_out").css({"display":"block"});
    		$(".nub4_out").css({"z-index":"2"});
    		$(".nub3_out").css({"z-index":"1"});
    		setTimeout(function(){
    			$(".nub4_out").css({"display":"none"});
    			$(".nub4_out").removeClass("y2_3");
    		},800);
    		setTimeout(function(){
    			n4_remove();
    			n3_move();
    			$(".nub4_out").css({"z-index":"1"});
    		},1000)
    	}
    }


//第五屏
 $(".nub5_out").eq(0).get(0).ontouchstart=function(event){
      event.preventDefault();
      var target=event.targetTouches[0]
      oldx=target.pageX
      oldy=target.pageY
    }

    $(".nub5_out").eq(0).get(0).ontouchmove=function(event){
      var target=event.targetTouches[0]
      newx=target.pageX;
      newy=target.pageY;
    }
    $(".nub5_out").eq(0).get(0).ontouchend=function(event){
    	event.preventDefault();
    	if(newy<oldy){
    		$(".nub5_out").addClass("y1_2");
    		$(".nub6_out").css({"display":"block"});
    		$(".nub5_out").css({"z-index":"2"});
    		$(".nub6_out").css({"z-index":"1"});
    		setTimeout(function(){
    			$(".nub5_out").css({"display":"none"});
    			$(".nub5_out").removeClass("y1_2");
    		},800);
    		setTimeout(function(){
    			n5_remove();
    			n6_move();
    			$(".logo").css({"display":"none"});
    			$(".nub5_out").css({"z-index":"1"});
    		},1000)
    	}
    	if(newy>oldy){
    		$(".nub5_out").addClass("y2_3");
    		$(".nub4_out").css({"display":"block"});
    		$(".nub5_out").css({"z-index":"2"});
    		$(".nub4_out").css({"z-index":"1"});
    		setTimeout(function(){
    			$(".nub5_out").css({"display":"none"});	
    			$(".nub5_out").removeClass("y2_3");
    		},800);
    		setTimeout(function(){
    			n5_remove();
    			n4_move();
    			$(".nub5_out").css({"z-index":"1"});
    		},1000)
    	}
    }

//第六屏
 $(".nub6_out").eq(0).get(0).ontouchstart=function(event){
      event.preventDefault();
      var target=event.targetTouches[0]
      oldx=target.pageX
      oldy=target.pageY
    }

    $(".nub6_out").eq(0).get(0).ontouchmove=function(event){
      var target=event.targetTouches[0]
      newx=target.pageX;
      newy=target.pageY;
    }
    $(".nub6_out").eq(0).get(0).ontouchend=function(event){
    	event.preventDefault();
    	if(newy<oldy){
    		$(".nub6_out").addClass("y1_2");
    		$(".nub7_out").css({"display":"block"});
    		$(".nub6_out").css({"z-index":"2"});
    		$(".nub7_out").css({"z-index":"1"});
    		setTimeout(function(){
    			$(".nub6_out").css({"display":"none"});
    			$(".nub6_out").removeClass("y1_2");
    		},800);
    		setTimeout(function(){
    			n6_remove();
    			n7_move();
    			$(".nub6_out").css({"z-index":"1"});
    		},1000)
    	}
    	if(newy>oldy){
    		$(".nub6_out").addClass("y2_3");
    		$(".nub5_out").css({"display":"block"});
    		$(".nub6_out").css({"z-index":"2"});
    		$(".nub5_out").css({"z-index":"1"});
    		setTimeout(function(){
    			$(".nub6_out").css({"display":"none"});
    			$(".nub6_out").removeClass("y2_3");
    		},800);
    		setTimeout(function(){
    			n6_remove();
    			n5_move();
    			$(".nub6_out").css({"z-index":"1"});
    		},1000)
    	}
    }

//第七屏
 $(".nub7_out").eq(0).get(0).ontouchstart=function(event){
      event.preventDefault();
      var target=event.targetTouches[0]
      oldx=target.pageX
      oldy=target.pageY
    }

    $(".nub7_out").eq(0).get(0).ontouchmove=function(event){
      var target=event.targetTouches[0]
      newx=target.pageX;
      newy=target.pageY;
    }
    $(".nub7_out").eq(0).get(0).ontouchend=function(event){
    	event.preventDefault();
    	if(newy<oldy-150){
    		$(".nub7_out").addClass("y1_2");
    		$(".nub1_out").removeClass("y1_2");
    		$(".nub1_out").css({"display":"block"});
    		$(".nub7_out").css({"z-index":"2"});
    		$(".nub1_out").css({"z-index":"1"});
    		setTimeout(function(){
    			$(".nub7_out").css({"display":"none"});
    			$(".nub7_out").removeClass("y1_2");
    		},800);
    		setTimeout(function(){
    			n7_remove();
    			n1_move();
    			$(".nub7_out").css({"z-index":"1"});
    		},1000)
    	}
    	if(newy-150>oldy){
    		$(".nub7_out").addClass("y2_3");
    		$(".nub6_out").css({"display":"block"});
    		$(".nub7_out").css({"z-index":"2"});
    		$(".nub6_out").css({"z-index":"1"});
    		setTimeout(function(){
    			$(".nub7_out").css({"display":"none"});
    			$(".nub7_out").removeClass("y2_3");
    			$(".logo").css({"display":"block"});
    		},800);
    		setTimeout(function(){
    			n7_remove();
    			n6_move();
    			$(".nub7_out").css({"z-index":"1"});
    		},1000)
    	}
    }


//第七屏按钮
 $(".lj_out").eq(0).get(0).ontouchstart=function(event){
      event.preventDefault();
      var target=event.targetTouches[0]
      oldx=target.pageX
      oldy=target.pageY
    }

    $(".lj_out").eq(0).get(0).ontouchmove=function(event){
      var target=event.targetTouches[0]
      newx=target.pageX;
      newy=target.pageY;
    }
    $(".lj_out").eq(0).get(0).ontouchend=function(event){
    	event.preventDefault();
    	if(newy<=oldy||newy>=oldy){
    		 window.location.href="http://www.dwz.cn/Reserach360";
    	}
    }
 $(".n7_2").eq(0).get(0).ontouchstart=function(event){
      event.preventDefault();
      var target=event.targetTouches[0]
      oldx=target.pageX
      oldy=target.pageY
    }

    $(".n7_2").eq(0).get(0).ontouchmove=function(event){
      var target=event.targetTouches[0]
      newx=target.pageX;
      newy=target.pageY;
    }
    $(".n7_2").eq(0).get(0).ontouchend=function(event){
    	event.preventDefault();
    	if(newy<=oldy||newy>=oldy){
    		 window.location.href="http://m.so.com";
    	}
    }
    function canvas1(){
	    var canvas = document.getElementById("canvas1");
		var ctx = canvas.getContext("2d");
		var W = canvas.width;
		var H = canvas.height;
		var deg=0,new_deg=0,dif=0;
		var loop,re_loop;
		var text,text_w;
		var canvas1_text=0;
		var timer=null;
		timer=setInterval(function(){
			canvas1_text++;
			if(canvas1_text>=9){
				canvas1_text=9;
				clearInterval(timer);
			}
			$(".canvas1_text").html(canvas1_text+"%");
		},40)
		function init(){
			ctx.clearRect(0,0,W,H);
			ctx.beginPath();
			ctx.strokeStyle="#626262";
			ctx.lineWidth=5;
			ctx.arc(W/2,H/2,20,0,Math.PI*2,false);
			ctx.stroke();
			
			var r = deg*Math.PI/180;
			ctx.beginPath();
			ctx.strokeStyle = "#ffc200";
			ctx.lineWidth=5;
			ctx.arc(W/2,H/2,20,0-90*Math.PI/180,r-90*Math.PI/180,false);
			ctx.stroke();
			
		}
		function draw(){
			new_deg = 35;
			dif = new_deg-deg;
			loop = setInterval(to,1000/dif);
		}
		function to(){
			if(deg == new_deg){
				clearInterval(loop);
			}
			if(deg<new_deg){
				deg++;
			}else{
				deg--;
			}
			init();
		}
		draw();
    }

     function canvas2(){
	    var canvas = document.getElementById("canvas2");
		var ctx = canvas.getContext("2d");
		var W = canvas.width;
		var H = canvas.height;
		var deg=0,new_deg=0,dif=0;
		var loop,re_loop;
		var text,text_w;
		var canvas2_text=0;
		var timer=null;
		timer=setInterval(function(){
			canvas2_text++;
			if(canvas2_text>=18){
				canvas2_text=18;
				clearInterval(timer);
			}
			$(".canvas2_text").html(canvas2_text+"%");
		},40)

		function init(){
			ctx.clearRect(0,0,W,H);
			ctx.beginPath();
			ctx.strokeStyle="#626262";
			ctx.lineWidth=5;
			ctx.arc(W/2,H/2,20,0,Math.PI*2,false);
			ctx.stroke();
			
			var r = deg*Math.PI/180;
			ctx.beginPath();
			ctx.strokeStyle = "#fe9000";
			ctx.lineWidth=5;
			ctx.arc(W/2,H/2,20,0-90*Math.PI/180,r-90*Math.PI/180,false);
			ctx.stroke();
			
		}
		function draw(){
			new_deg = 68;
			dif = new_deg-deg;
			loop = setInterval(to,1000/dif);
		}
		function to(){
			if(deg == new_deg){
				clearInterval(loop);
			}
			if(deg<new_deg){
				deg++;
			}else{
				deg--;
			}
			init();
		}
		draw();
    }

    function canvas3(){
	    var canvas = document.getElementById("canvas3");
		var ctx = canvas.getContext("2d");
		var W = canvas.width;
		var H = canvas.height;
		var deg=0,new_deg=0,dif=0;
		var loop,re_loop;
		var text,text_w;
		var canvas3_text=0;
		var timer=null;
		timer=setInterval(function(){
			canvas3_text++;
			if(canvas3_text>=27){
				canvas3_text=27;
				clearInterval(timer);
			}
			$(".canvas3_text").html(canvas3_text+"%");
		},40)

		function init(){
			ctx.clearRect(0,0,W,H);
			ctx.beginPath();
			ctx.strokeStyle="#626262";
			ctx.lineWidth=5;
			ctx.arc(W/2,H/2,20,0,Math.PI*2,false);
			ctx.stroke();
			
			var r = deg*Math.PI/180;
			ctx.beginPath();
			ctx.strokeStyle = "#01abf1";
			ctx.lineWidth=5;
			ctx.arc(W/2,H/2,20,0-90*Math.PI/180,r-90*Math.PI/180,false);
			ctx.stroke();
			
		}
		function draw(){
			new_deg = 100;
			dif = new_deg-deg;
			loop = setInterval(to,1000/dif);
		}
		function to(){
			if(deg == new_deg){
				clearInterval(loop);
			}
			if(deg<new_deg){
				deg++;
			}else{
				deg--;
			}
			init();
		}
		draw();
    }

     function canvas4(){
	    var canvas = document.getElementById("canvas4");
		var ctx = canvas.getContext("2d");
		var W = canvas.width;
		var H = canvas.height;
		var deg=0,new_deg=0,dif=0;
		var loop,re_loop;
		var text,text_w;
		var canvas4_text=0;
		var timer=null;
		timer=setInterval(function(){
			canvas4_text++;
			if(canvas4_text>=46){
				canvas4_text=46;
				clearInterval(timer);
			}
			$(".canvas4_text").html(canvas4_text+"%");
		},40)

		function init(){
			ctx.clearRect(0,0,W,H);
			ctx.beginPath();
			ctx.strokeStyle="#626262";
			ctx.lineWidth=5;
			ctx.arc(W/2,H/2,20,0,Math.PI*2,false);
			ctx.stroke();
			
			var r = deg*Math.PI/180;
			ctx.beginPath();
			ctx.strokeStyle = "#89a108";
			ctx.lineWidth=5;
			ctx.arc(W/2,H/2,20,0-90*Math.PI/180,r-90*Math.PI/180,false);
			ctx.stroke();
			
		}
		function draw(){
			new_deg = 168;
			dif = new_deg-deg;
			loop = setInterval(to,1000/dif);
		}
		function to(){
			if(deg == new_deg){
				clearInterval(loop);
			}
			if(deg<new_deg){
				deg++;
			}else{
				deg--;
			}
			init();
		}
		draw();
    }


})

