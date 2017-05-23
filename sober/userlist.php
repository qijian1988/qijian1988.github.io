<?php
require_once "wechatapi.php";
$tocken = autoRefresh();
$url = "https://api.weixin.qq.com/cgi-bin/user/info/batchget?access_token=" . $tocken;
$data = '{
	"user_list":[
		{"openid":"oHsABxCZ0MIAoiHeAOTSyKjtFkPQ"},
		{"openid":"oHsABxCZBFElcSAYfLzRQ30KALMg"},
		{"openid":"oHsABxMNomqz8buPTK2HQ0THVPkE"},
		{"openid":"oHsABxPvWqvVbt01PunCbuP55jLQ"},
        {"openid":"oHsABxMJVP2UzzHE0DLjFkXklkDM"},
		{"openid":"oHsABxAXQSFYNtGXJpH6DPcvBUqY"},
		{"openid":"oHsABxOyx7P4qVXhaREGYDAMK8O8"}
	]
}';
$obj = json_decode(httpPost($url,$data));
$objlist = $obj->user_info_list;
foreach ($objlist as  $val) {
	print_r($val);
	echo "<hr>";
}





 ?>