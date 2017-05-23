<?php
use sinacloud\sae\Storage as Storage;
require_once "curl.php";
//封装获取access_token的函数;
function getNewAccessToken(){
	$appId = "wxb1cd64ccb52fa7b0";
	$appSec = "e69e1dcccbb1303f9ff0ceb3e29c29e3";
	$id = json_decode(httpGet("https://api.weixin.qq.com/cgi-bin/token","grant_type=client_credential&appid={$appId}&secret={$appSec}"));
	return $id;
}
//将access_token存到storage中,定时获取最新access_token;
function autoRefresh(){
	$s = new Storage();
	if(@!$s->getBucket("wechat")){
		$s->putBucket("wechat",".r:*");
	}
	$res=@$s->getObject("wechat","access_token.txt");
	if(!$res){
		$obj = getNewAccessToken();
		$token = $obj->access_token;
		$expire_time = $obj->expire_in;
		$arr = [
			"access_token"=>$token,
			"expire_in"=>$expire_time + time() - 200
		];
		$s->putObject(json_encode($arr),"wechat","access_token.txt",array(),array("Content-Type"=>"text/plain;charset=utf-8"));
		return $token;
	}
	$tokenObj = json_decode($res->body);
	$time = time();
	if($time>$tokenObj->expire_in){
        $s->deleteObject("wechat","access_token.txt");
		return autoRefresh();
	}else{
		return $tokenObj->access_token;
	}
}
//autoRefresh();

function getSnsToken($code){
	$s = new Storage();
	if(@!$s->getBucket("wechat")){
		$s->putBucket("wechat",".r:*");
	}
	$res=@$s->getObject("wechat","sns_token.txt");
	if(!$res){
		$url = "https://api.weixin.qq.com/sns/oauth2/access_token";
		$data = "appid=wxb1cd64ccb52fa7b0&secret=e69e1dcccbb1303f9ff0ceb3e29c29e3&code={$code}&grant_type=authorization_code";
		$str = httpGet($url,$data);
		$s->putObject($str,"wechat","sns_token.txt",array(),array("Content-Type"=>"text/plain;charset=utf-8"));
		return $str;
    }else{
        return $res->body;}
    
	// $tokenObj = json_decode($res->body);
	// $time = time();
	// if($time>$tokenObj->expire_in){
	// 	return autoRefresh();
	// }else{
	// 	return $tokenObj->access_token;
	// }
}

 ?>