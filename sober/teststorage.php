<?php
use sinacloud\sae\Storage as Storage;
$s = new Storage();
$s->putBucket("wechat");
$s->putObject("hello 创建一个bucket", "wechat", "token.txt", array(), array('Content-Type' => 'text/plain;charset=utf8'));
print_r($s->getObject("wechat", "token.txt"));




 ?>