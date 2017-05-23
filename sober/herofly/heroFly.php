<?php
	require_once '../wechatapi.php';
	$access_token = autoRefresh();
	$code = $_GET['code'];
	$url = "https://api.weixin.qq.com/sns/oauth2/access_token";
	$data = "appid=wxb1cd64ccb52fa7b0&secret=e69e1dcccbb1303f9ff0ceb3e29c29e3&code={$code}&grant_type=authorization_code";
	// $data =
	$infoObj = json_decode(httpGet($url,$data));
	$openid = $infoObj->openid;
	$token = $infoObj->access_token;
	$Url = "https://api.weixin.qq.com/cgi-bin/user/info";
	$Data = "access_token={$token}&openid={$openid}";
	$userObj = json_decode(httpGet($Url,$Data));
	var_dump($userObj);
 ?>
 <!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
    <meta name="viewport" content="width=320,user-scalable=no">
		<title></title>
		<style>
      html,body { height: 100%; }
      body { margin: 0; }
		  #wrap {
		    /*box-shadow: 0 0 20px #333;*/
		    /*margin: 20px auto 0;*/
		    width: 320px; height: 100%;
		    position: relative;
		  }
		  #loading,#gameover {
		    position: absolute;
		    width: 100%; height: 100%;
		    background: rgba(128,128,128,0.5);
		    left: 0; top: 0;
		    text-align: center;
        /*display: none;*/
		  }
		  #loading img {
		    margin-top: 200px;
		    margin-bottom: 20px;
		  }
		  #gameover { display: none; }
		  #gameover div {
		    width: 200px; padding: 20px 20px 10px;
		    border-radius: 5px;
		    border: 1px solid #333;
		    margin: 100px auto 0;
		    background: rgba(211,211,211,0.8);
		    font-size: 30px;
		    text-align: center;
		    line-height: 1.5;
		  }
      #gameover a {
        color: green;
        text-decoration: none;
      }
      #sub{
        position: absolute;
        width: 200px;
        height: 100px;
        border-radius:10px;
        text-align: center;
        left: 50%;
        top:50%;
        transform: translate(-50%,-50%);
        background: #777;
      }
      #btn{
        background: #eee;
        border-radius: 5px;
      }
		</style>
	</head>
	<body>
	  <div id="wrap">
      <canvas id="cvs" width="320" height="568"></canvas>
      <div id="loading">
        <img src="img/loading.gif"/><br/>
        <span>正在加载...</span>
      </div>
      <div id="gameover">
        <div>
          <p>游戏结束</p>
          <a href="javascript:window.location.reload();">重玩</a>
        </div>
      </div>
       <div id="sub">
        <div>
          <p>输入你的昵称:</p>
          <input type="text" id="txt">
          <input type="button" id="btn" value="提交">
        </div>
      </div>
	  </div>
    <script src = "js/ajax.js"></script>
    <script src="js/sources.js"></script>
    <script src="js/game_m.js"></script>
    <script>
      var sub = document.querySelector('#sub');
      var btn = document.querySelector('#btn');
      var txt = document.querySelector('#txt');
      // btn.onclick = function(){
      //   sub.style.display = 'none';
      //   ajax({

      //   })
      // }
    </script>
	  <script>
	    var canvas = document.getElementById('cvs');
	    var loading = document.getElementById('loading'); //loading元素
	    var gameover = document.getElementById('gameover'); //游戏结束层
	    var cvs = canvas.getContext('2d');
	    var raf = null, audios = {}, images = {};
	    var i = 0; len = audio_sources.length;
	    var bgOffsetY = 0,isOver = false; //bgOffsetY 背景Y值  isOver  游戏是否结束
	    var bulletArr = [], bullet_type = 0, bullet_speed = 1;
      //bulletArr 子弹数组    bullet_type 子弹类型   bullet_speed  子弹速度
	    var heroPos = 0, count = 0,heroSpeed = 5;
      //heroPos 实现英雄机动画的控制值     count 一个公共数值，用来控制绘制子弹和敌机的频率  heroSpeed 英雄机的速度
	    var enemyArr = [], key = 0;//2 4 8 16
      //enemyArr 敌机数组   key  移动方向
	    var bomb = null, buff = null, scores = 0;
      //bomb 全屏炸弹   buff  增益buff  scores  得分
	    var json = { //表示方向的json对象  左 2 上 4  右 8  下 16
	      '37': 2, '38': 4, '39': 8, '40': 16
	    };

      var innerH = document.documentElement.clientHeight, innerW = document.documentElement.clientWidth;
      var heroFly = new Factory(30,innerH - 100,66,82,cvs); //英雄机

      loadAudios(function(){//加载音频资源
        i = 0; len = image_sources.length;
        //重置i和len的值，继续加载图片资源
        loadImages(function(){//加载图片资源
          if(audios.bgsound)audios.bgsound.loop = true;
          //设置背景音乐循环播放
          if(audios.bgsound)audios.bgsound.play();
          //当资源加载完成，播放背景音乐
//        console.log( audios , images );
          gameStart();//开始游戏
        });
      });

      var lastPos = {x: 30,y: innerH - 100}, touched = false;

      document.addEventListener('touchstart',function(ev){
        heroFly.disX = ev.touches[0].clientX - canvas.offsetLeft;
        heroFly.disY = ev.touches[0].clientY - canvas.offsetTop;

        touched =  isTouchOnHeroFly(heroFly.disX,heroFly.disY);
        document.addEventListener('touchmove',touchMove);
        document.addEventListener('touchend',touchEnd);

      });

      function touchMove(ev){
        var x = ev.touches[0].clientX - heroFly.disX;
        var y = ev.touches[0].clientY - heroFly.disY;

        if( touched ){

          var l = lastPos.x + x;
          var t = lastPos.y + y;

          if( l < 0 || l > 320 - heroFly.w ) l = l < 0 ? 0 : 320 - heroFly.w;
          if( t < 0 || t > innerH - heroFly.h ) t = t < 0 ? 0 : innerH - heroFly.h;

          heroFly.x = l;
          heroFly.y = t;
        }

        console.log(heroFly.x,heroFly.y, x ,y );

        ev.preventDefault();
      }

      function touchEnd(){
        if( touched ){
          lastPos.x = heroFly.x;
          lastPos.y = heroFly.y;
        }
        document.removeEventListener('touchmove',touchMove);
        document.removeEventListener('touchend',touchEnd);
      }

      document.onkeydown = function(ev){ //键盘控制事件
        var code = ev.keyCode;
        if( code == 32 && bomb ) {clearEnemy();return false;} //如果触发全屏炸弹，清除所有敌机
        if(code!=37&&code!=38&&code!=39&&code!=40)return; //如果按下的不是游戏控制相关的按键，则不执行任何操作
        if(!this[code] ) key += json[code];
        this[code] = true;
      };

      document.onkeyup = function(ev){
        var code = ev.keyCode;
        this[code] = false;
        if(code!=37&&code!=38&&code!=39&&code!=40)return;
        key -= json[code];
      };




      randBuff(); //随机产生一个buff, 同一时间只会有一个 buff ，buff 期间不会随机出其他buff。

	  </script>
	</body>
</html>
