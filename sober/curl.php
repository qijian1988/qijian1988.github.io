<?php
//get方式:
function httpGet($url,$data){
	$curl = curl_init();
	curl_setopt($curl, CURLOPT_URL, $url . "?" . $data);
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
	$res = curl_exec($curl);
	curl_close($curl);
	return $res;
}

//post方式
function httpPost($url,$data){
	$curl = curl_init();
	curl_setopt($curl, CURLOPT_URL, $url);
	curl_setopt($curl, CURLOPT_POST, true);
	curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
	$res = curl_exec($curl);
	curl_close($curl);
	return $res;
}







 ?>