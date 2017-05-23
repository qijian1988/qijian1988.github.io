<?php
require_once "wechatapi.php";
$token = autoRefresh();
$url = "https://api.weixin.qq.com/cgi-bin/user/info";
$data = "access_token={$token}&openid=oHsABxOyx7P4qVXhaREGYDAMK8O8";
$str = httpGet($url,$data);
$userObj = json_decode($str);
echo "<img src ='{$userObj->headimgurl}'>";
 ?>








