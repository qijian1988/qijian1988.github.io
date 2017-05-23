<?php
require_once "wechatapi.php";
$access_token = autoRefresh();
$url = "https://api.weixin.qq.com/cgi-bin/menu/addconditional?access_token={$access_token}";
$data= '{
 	"button":[
 	{
    	"type":"click",
    	"name":"今日歌曲",
     	"key":"music"
	},
	{
		"name":"菜单",
		"sub_button":[
		{
			"type":"view",
			"name":"搜索",
			"url":"http://www.baidu.com/"
		},
		{
			"type":"view",
			"name":"视频",
			"url":"http://v.qq.com/"
		},
		{
			"type":"click",
			"name":"赞一下我们",
			"key":"GOOD"
		}]
 }],
"matchrule":{
  "sex":"1",
  "country":"中国"
  }
}';
echo httpPost($url,$data);

 ?>