<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>网页授权</title>
	<meta name="viewport" content="width=device-width,initial-scale=1.0, maximum-scale=1.0, minimun-scale=1.0">
</head>
<body>
	<?php
	require_once "wechatapi.php";
	//print_r($_GET);
	$code =$_GET['code'];
	// $url = "https://api.weixin.qq.com/sns/oauth2/access_token?appid=wxb1cd64ccb52fa7b0&secret=e69e1dcccbb1303f9ff0ceb3e29c29e3&code={$code}&grant_type=authorization_code";
	// echo httpGet($url);
	//echo $code;
	$dataStr = getSnsToken($code);
	$dataObj = json_decode($dataStr);
	$token = $dataObj->access_token;
	$openid = $dataObj->openid;
	$url = "https://api.weixin.qq.com/sns/userinfo";
	$data = "access_token={$token}&openid={$openid}&lang=zh_CN";
	//echo httpGet($url,$data);
	$infoObj = json_decode(httpGet($url,$data));
	$nick = $infoObj->nickname;
	$sex = $infoObj->sex;
	$imgUrl = $infoObj->headimgurl;
	$arr1 = array("未填写","男","女");
	$sex1 = $arr1[$sex];
	echo "昵称:{$nick},性别:{$sex1}<br>,头像:<img width=300 src='{$imgUrl}'>";
	 ?>
</body>
</html>
