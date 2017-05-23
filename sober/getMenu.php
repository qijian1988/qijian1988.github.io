<?php
require_once "wechatapi.php";
$access_token = autoRefresh();
$url = "https://api.weixin.qq.com/cgi-bin/menu/get";
$data= "access_token={$access_token}";
echo httpGet($url,$data);

 ?>