<?php
require_once "curl.php";
function getAccessToken(){
	$appId = "wxb1cd64ccb52fa7b0";
	$appSec = "e69e1dcccbb1303f9ff0ceb3e29c29e3";
	$url = "https://api.weixin.qq.com/cgi-bin/token";
	$data = "grant_type=client_credential&appid={$appId}&secret={$appSec}";
	$res = json_decode(httpGet($url,$data));
	return $res->access_token;
}





 ?>