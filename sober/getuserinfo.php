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
	echo httpGet($Url,$Data);
    //var_dump($userobj) ;
}
 ?>