<?php
$mysqli = new mysqli('w.rdc.sae.sina.com.cn','xn04ykjmo5','4yzx34l1255xyiiyjkmhzh4y0j1j5jli5m51z45m','app_sober','3307');
if($mysqli->connect_errno){
	exit("数据库连接失败,错误码:{$mysqli->connect_error}");
}
$mysqli->query("set names utf8");
$sql = "SELECT * FROM userlist";
$res = $mysqli->query($sql);
$row = $res->fetch_assoc();
print_r($row);
$mysqli->close();




 ?>