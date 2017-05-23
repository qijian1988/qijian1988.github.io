<?php
require_once "wechatapi.php";
$token = autoRefresh();
$url = "https://api.weixin.qq.com/cgi-bin/user/get";
$data = "access_token={$token}&next_openid=";
$obj = json_decode(httpGet($url,$data));
$objinfo = $obj->data->openid;
foreach ($objinfo as $val) {
	$Url = "https://api.weixin.qq.com/cgi-bin/user/info";
	$Data = "access_token={$token}&openid={$val}";
	$userobj = json_decode(httpGet($Url,$Data));
	$subscribe = $userobj->subscribe;
	$openid = $userobj->openid;
	$nickname = $userobj->nickname;
	$sex = $userobj->sex;
	$language = $userobj->language;
	$city = $userobj->city;
	$province = $userobj->province;
	$country = $userobj->country;
	$headimgurl = $userobj->headimgurl;
	$subscribe_time = $userobj->subscribe_time;
	$mysqli = new mysqli('w.rdc.sae.sina.com.cn','xn04ykjmo5','4yzx34l1255xyiiyjkmhzh4y0j1j5jli5m51z45m','app_sober','3307');
	if($mysqli->connect_errno){
		exit("数据库连接失败,错误码:{$mysqli->connect_error}");
	}
	$mysqli->query("set names utf8");
	$sql = "INSERT INTO userlist (subscribe,openid,nickname,sex, language,city,province,country,headimgurl, subscribe_time,score) VALUES ({$subscribe},'{$openid}','{$nickname}','{$sex}','{$language}','{$city}','{$province}','{$country}','{$headimgurl}',{$subscribe_time},0)";
	$mysqli->query($sql);
}
$mysqli->close();
 ?>