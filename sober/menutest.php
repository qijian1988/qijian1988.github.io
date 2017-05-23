<?php
require_once "testaccesstoken.php";
$access_token = getAccessToken();
$url = "https://api.weixin.qq.com/cgi-bin/menu/create?access_token={$access_token}";
$data= '{
	"button":[
		{
			"name":"多媒体",
			"sub_button":[
				{
					"name":"公众号推广",
					"type":"click",
					"key":"click1"
				},
				{
					"name":"发送音频",
					"type":"click",
					"key":"click2"
				},
				{
					"name":"发送视频",
					"type":"click",
					"key":"click3"
				}
			]
		},
		{
			"name":"共享",
			"sub_button":[
				{
					"name":"位置共享",
					"type":"location_select",
					"key":"location"
				},
				{
					"name":"拍照",
					"type":"pic_photo_or_album",
					"key":"photo"
				},
				{
					"name":"扫码",
					"type":"scancode_push",
					"key":"scan"
				}
			]
		},
        {
			"name":"链接",
			"sub_button":[
				{
					"name":"主页",
					"url":"http://www.zengbo.online",
					"type":"view"
				},
				{
					"name":"英菲尼迪",
					"url":"http://1.sober.applinzi.com/index.html",
					"type":"view"
				}
			]
		}
	]
}';
echo httpPost($url,$data);

 ?>