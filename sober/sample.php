<?php
require_once "jssdk.php";
$jssdk = new JSSDK("wxb1cd64ccb52fa7b0", "e69e1dcccbb1303f9ff0ceb3e29c29e3");
$signPackage = $jssdk->GetSignPackage();
echo($signPackage['appId'] . ',' .  $signPackage['timestamp'] . ',' .  $signPackage['nonceStr'] . ',' .  $signPackage['signature']);
exit();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0, maximum-scale=1.0, minimun-scale=1.0">
  <title>选照片/录音</title>
  <style>
    div{
      background:red;
      width: 50px;
      height: 30px;
      line-height: 30px;
      margin: 0 auto;
    }
  </style>
</head>
<body>
  <div id="div1">选照片</div>
  <div id="div2">录音</div>
</body>
<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script>
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
  wx.config({
    debug: false,
    appId: '<?php echo $signPackage["appId"];?>',
    timestamp: <?php echo $signPackage["timestamp"];?>,
    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
    signature: '<?php echo $signPackage["signature"];?>',
    jsApiList: [
      // 所有要调用的 API 都要加到这个列表中
      'onMenuShareTimeline',
      'chooseImage',
      'startRecord',
      'stopRecord',
      'playVoice',
      'translateVoice'
    ]
  });
  var oDiv = document.querySelector('#div1');
  oDiv.addEventListener('touchstart',function(){
    wx.chooseImage({
      count: 2, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
        var img = new Image();
        img.src = localIds;
        img.width = 100;
        document.body.appendChild(img);
      }
    });
  });
  var oSong = document.querySelector('#div2');
  oSong.addEventListener('touchstart',function(ev){
    this.style.background = 'green';
    wx.startRecord();
    ev.preventDefault();
  });
  oSong.addEventListener('touchend',function(){
    this.style.background = 'red';
    wx.stopRecord({
       success: function (res) {
        var localId = res.localId;
        wx.playVoice({
          localId: localId // 需要播放的音频的本地ID，由stopRecord接口获得
      });
        wx.translateVoice({
         localId:localId, // 需要识别的音频的本地Id，由录音相关接口获得
          isShowProgressTips: 1, // 默认为1，显示进度提示
          success: function (res) {
              alert(res.translateResult); // 语音识别的结果
          }
      });
    }
    });
  });
  wx.ready(function () {
    // 在这里调用 API
    wx.onMenuShareTimeline({
    title: '标题测试', // 分享标题
    link: 'http://1.sober.applinzi.com/1.html', // 分享链接
    imgUrl: 'http://1.sober.applinzi.com/showqrcode.jpg', // 分享图标
    success: function () {
        // 用户确认分享后执行的回调函数
        alert("感谢分享");
    },
    cancel: function () {
        // 用户取消分享后执行的回调函数
        alert("分享失败");
    }
  });
  });
</script>
</html>
