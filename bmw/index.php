<?php
	require_once "jssdk.php";
	$jssdk = new JSSDK("wxb1cd64ccb52fa7b0", "e69e1dcccbb1303f9ff0ceb3e29c29e3");
	$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=640,user-scalable=no">
<title>你最想和谁一起HIGH？</title>
<link rel="stylesheet" href="css/reset.css">
<link rel="stylesheet" href="css/animate.min.css">
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/game.css">
<link rel="stylesheet" href="css/age.css">
<link rel="stylesheet" href="css/scene.css">
</head>
<body>
	<!--======加载进度及蒙版======-->
	<div id="mask">
		<div class="progress"></div>
		<p></p>
	</div>
	<!--=======内容======-->
	<div id="wrap">
		<div id="loading" class="page active">
			<div id="music-tip">
				<img src="img/music.png">
				<span>为了最佳体验<br>请打开声音</span>
			</div>
			<div class="lead">
				<i></i>
				<i></i>
				<i></i>
				<i>
					<img src="img/sei.png" alt="">
				</i>
			</div>
		</div>
		<!--======转盘一======-->
		<div id="index" class="page">
			<div class="pan-box disable">
				<div class="rotate-box">
					<div class="round-box">
						<div class="photo">
							<i data-index="1"></i>
							<i data-index="2"></i>
							<i data-index="3"></i>
							<i data-index="4"></i>
							<i data-index="5"></i>
							<i data-index="6"></i>
						</div>
						<div class="name-box">
							<span data-index="1">同事</span>
							<span data-index="2">死党</span>
							<span data-index="3">同学</span>
							<span data-index="4">男友</span>
							<span data-index="5">父亲</span>
							<span data-index="6">女友</span>
						</div>
					</div>
				</div>
				<i class="confirm-btn active"></i>
			</div>
			<div id="index-word">
				<img src="img/index-word.png" alt="">
			</div>
		</div>
		<!--======game======-->
		<div id="game1" class="page"></div>
		<div id="game2" class="page"></div>
		<div id="game3" class="page"></div>
		<div id="game4" class="page"></div>
		<div id="game5" class="page">
			<i></i>
		</div>
		<!--======转盘二======-->
		<div class="pan disable">
			<div class="pan-box disable">
				<div class="rotate-box">
					<div class="round-box">
						<div class="photo">
							<i data-index="1"></i>
							<i data-index="2"></i>
							<i data-index="3"></i>
							<i data-index="4"></i>
							<i data-index="5"></i>
							<i data-index="6"></i>
						</div>
						<div class="name-box">
							<span data-index="1">同事</span>
							<span data-index="2">死党</span>
							<span data-index="3">同学</span>
							<span data-index="4">男友</span>
							<span data-index="5">父亲</span>
							<span data-index="6">女友</span>
						</div>
					</div>
				</div>
				<i class="confirm-btn"></i>
			</div>
			<img src="img/camera.png" alt="" class="camera">
		</div>
		<img src="img/hand.png" alt="" class="hand">
		<!--======agechange======-->
		<div id="age-video" class="page">
			<div id="age-change">
				<!-- 变老 -->
				<div id="age1-v1" class="age-dh"></div>
				<div id="age1-v2" class="age-dh"></div>
				<div id="age1-v3" class="age-dh"></div>
				<div id="age1-v4" class="age-dh"></div>
				<div id="age1-v5" class="age-dh"></div>
				<div id="age1-v6" class="age-dh"></div>
				<div id="age1-v7" class="age-dh"></div>
				<div id="age1-v8" class="age-dh"></div>
				<div id="age1-v9" class="age-dh"></div>
				<div id="age1-v10" class="age-dh"></div>
				<div id="age1-v11" class="age-dh"></div>
				<div id="age1-v12" class="age-dh"></div>
				<div id="age1-v13" class="age-dh"></div>
				<div id="age1-v14" class="age-dh"></div>
				<div id="age1-v15" class="age-dh"></div>
				<div id="age1-v16" class="age-dh"></div>
				<!-- 变年轻 -->
				<div id="age2-v1" class="age-dh"></div>
				<div id="age2-v2" class="age-dh"></div>
				<div id="age2-v3" class="age-dh"></div>
				<div id="age2-v4" class="age-dh"></div>
				<div id="age2-v5" class="age-dh"></div>
				<div id="age2-v6" class="age-dh"></div>
				<div id="age2-v7" class="age-dh"></div>
				<div id="age2-v8" class="age-dh"></div>
				<div id="age2-v9" class="age-dh"></div>
				<div id="age2-v10" class="age-dh"></div>
				<div id="age2-v11" class="age-dh"></div>
				<div id="age2-v12" class="age-dh"></div>
				<div id="age2-v13" class="age-dh"></div>
				<div id="age2-v14" class="age-dh"></div>
				<div id="age2-v15" class="age-dh"></div>
				<div id="age2-v16" class="age-dh"></div>
			</div>
			<span id="action"></span>
		</div>
			<!-- scene1 -->
		<div id="scene1" class="page go">
		    <img src="img/wj_father_text.png" width="160" height="32" id="wj_father_pic" class="wj_father_pic textanimation">
		</div>
		<!-- scene2 -->
		<div id="last_text">
			<p>多一点时间陪伴父亲</p>
			<p>带他走进你的生活</p>
			<p>感受你的爱</p>
			<p class="father-day">HAPPY FATHER'S DAY</p>
			<p class="father-day">#父亲节快乐!#</p>
			<p>
				<span class="left_btn">再玩一次</span>
				<span class="right_btn">提醒好友</span>
			</p>
		</div>
		<div id="scene2" class="page" >
			<img src="img/wj_logo.png" alt="" id="last_logo">
		</div>
		<div class="grayDiv">
			<img src="img/share_right.png" class="share"></img>
		</div>
	</div>
<script type="text/javascript" src="js/jq_tran.js"></script>
<script type="text/javascript" src="js/prepare.js"></script>
<script type="text/javascript" src="js/game.js"></script>
<script type="text/javascript" src="js/age.js"></script>
<script type="text/javascript" src="js/scene.js"></script>
<script type="text/javascript" src="js/jweixin-1.0.0.js"></script>
<script type="text/javascript">
//图片预加载,加载完成开始动画;
	var count = 0;
	for(var i = 0 ; i < app.imgArr.length ; i ++){
		var img = new Image;
		img.src = 'img/'+app.imgArr[i];
		img.onload = function(){
			count ++;
			percent = parseInt(100*count/app.imgArr.length) + '%';
			$('#mask p').text('Loading'+percent);
			var _width = 200*count/app.imgArr.length;
			$('.progress').css({
				width:_width,
			})
			if(count == app.imgArr.length){
				$('#mask').hide();
				Rotate();
			}
		}
	}
 /*
   * 注意：
   * 1. 所有的JS接口只能在公众号绑定的域名下调用，公众号开发者需要先登录微信公众平台进入“公众号设置”的“功能设置”里填写“JS接口安全域名”。
   * 2. 如果发现在 Android 不能分享自定义内容，请到官网下载最新的包覆盖安装，Android 自定义分享接口需升级至 6.0.2.58 版本及以上。
   * 3. 常见问题及完整 JS-SDK 文档地址：http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html
   *
   * 开发中遇到问题详见文档“附录5-常见错误及解决办法”解决，如仍未能解决可通过以下渠道反馈：
   * 邮箱地址：weixin-open@qq.com
   * 邮件主题：【微信JS-SDK反馈】具体问题
   * 邮件内容说明：用简明的语言描述问题所在，并交代清楚遇到该问题的场景，可附上截屏图片，微信团队会尽快处理你的反馈。
   */

	// =======微信分享======
	wx.config({
	    debug: false,
	    appId: '<?php echo $signPackage["appId"];?>',
	    timestamp: <?php echo $signPackage["timestamp"];?>,
	    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
	    signature: '<?php echo $signPackage["signature"];?>',
	    jsApiList: [
	    // 所有要调用的 API 都要加到这个列表中
	        'checkJsApi',
	        'onMenuShareTimeline',
	        'onMenuShareAppMessage',
	        'onMenuShareWeibo'
	    ]
	});
	var otitle = '你最想和谁一起HIGH？';
	var desc = '据说，99%的人做完这个测试后都去找了同一个人……';
	var olink = 'http://1.sober.applinzi.com/sample.php';
	var oimgUrl = 'http://1.sober.applinzi.com/img/wj_last.jpg';
	wx.ready(function () {
	//======分享给朋友======
	    wx.onMenuShareAppMessage({
	        title: otitle,
	        desc: desc,
	        imgUrl: oimgUrl,
	        link:olink,
	        success: function () {
	            // 用户确认分享后执行的回调函数
	        },
	        fail: function () {
					// 用户取消分享后执行的回调函数
					alert('真遗憾,您取消了分享');
	        }
	    });
	//======分享到朋友圈======
	    wx.onMenuShareTimeline({
	        title: otitle, // 分享标题
	        link: olink, // 分享链接
	        imgUrl: oimgUrl,// 分享图标
	        success: function () {
	            // 用户确认分享后执行的回调函数
	        },
	        fail: function () {
					// 用户取消分享后执行的回调函数
					alert('真遗憾,您取消了分享');
	        }
	    });
	   //======分享到腾讯微博======
	    wx.onMenuShareWeibo({
	        title: otitle, // 分享标题
	        desc: desc,   //分享描述
	        link: olink, // 分享链接
	        imgUrl: oimgUrl,// 分享图标
	        success: function () {
	            // 用户确认分享后执行的回调函数
	        },
	        fail: function () {
					// 用户取消分享后执行的回调函数
					alert('真遗憾,您取消了分享');
	        }
	    });
	})
</script>
</body>
</html>