<?php
require_once "wechatapi.php";
$access_token = autoRefresh();
$url = "https://api.weixin.qq.com/cgi-bin/menu/delconditional?access_token={$access_token}";
$data= '{"menuid":"576373977"}';
echo httpPost($url,$data);

 ?>