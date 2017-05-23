<?php
require_once "wechatapi.php";
function checkSignature(){

}
responseMsg();
function responseMsg(){
    //获取其他页面post过来的原始数据;
    $postStr = $GLOBALS["HTTP_RAW_POST_DATA"];
    if(!empty($postStr)){
        //提高xml文档的安全级别,防止服务器被恶意攻击;
        libxml_disable_entity_loader(true);
        /*

            simplexml_load_string()将post过来的XML字符串转换成XML对象;
            第一个参数:要转换的XML字符串
            第二个参数:一个可选的类名
            第三个参数:规定以哪种格式来解析XML文档.LIBXML_NOCDATA 以标准的XML文档来解析(将XML中的CDATA作为文本节点来解析;)
        */
        $postObj = simplexml_load_string($postStr, 'SimpleXMLElement', LIBXML_NOCDATA);
        $type = $postObj->MsgType;
            switch ($type) {
                case 'text':
                    //给微信服务器回复消息,微信将该消息回复给用户;
                    echo handleText($postObj);
                    break;
                case 'image':
                    echo handleImg($postObj);
                    break;
                case 'event':
                    echo handleEvent($postObj);
                    break;
                default:
                    # code...
                    break;
        }
    }
}

function handleText($postObj){
    $toUser = $postObj->ToUserName;
    $fromUser = $postObj->FromUserName;
    $creatTime = $postObj->CreateTime;
    $content = $postObj->Content;
    $timestamp = time();
    $xml =<<<END
        <xml>
        <ToUserName><![CDATA[{$fromUser}]]></ToUserName>
        <FromUserName><![CDATA[{$toUser}]]></FromUserName>
        <CreateTime>{$timestamp}</CreateTime>
        <MsgType><![CDATA[text]]></MsgType>
        <Content><![CDATA[收到你的消息了,你发送的内容是:{$content}]]></Content>
        </xml>
END;
    return $xml;
}
function handleImg($postObj){
    $toUser = $postObj->ToUserName;
    $fromUser = $postObj->FromUserName;
    $creatTime = $postObj->CreateTime;
    $media_id = $postObj->MediaId;
    $timestamp = time();
    $xml =<<<END
        <xml>
        <ToUserName><![CDATA[{$fromUser}]]></ToUserName>
        <FromUserName><![CDATA[{$toUser}]]></FromUserName>
        <CreateTime>{$timestamp}</CreateTime>
        <MsgType><![CDATA[image]]></MsgType>
        <Image>
        <MediaId><![CDATA[{$media_id}]]></MediaId>
        </Image>
        </xml>
END;
    return $xml;
}
function handleEvent($postObj){
    $event = $postObj->Event;
    $toUser = $postObj->ToUserName;
    $fromUser = $postObj->FromUserName;
    $creatTime = $postObj->CreatTime;
    $timestamp = time();
    switch ($event) {
        case 'subscribe':
            $key = $postObj->EventKey;
            if(property_exists($postObj, 'EventKey')){
                $str = "你是通过扫描带参数二维码关注的本公众号,参数为:{$key}";
            }else{
                $str = "";
            }
          $xml =<<<END
            <xml>
            <ToUserName><![CDATA[{$fromUser}]]></ToUserName>
            <FromUserName><![CDATA[{$toUser}]]></FromUserName>
            <CreateTime>{$timestamp}</CreateTime>
            <MsgType><![CDATA[text]]></MsgType>
            <Content><![CDATA[感谢你关注本公众号,祝你生活愉快!{$str}]]></Content>
            </xml>
END;
    return $xml;
            break;
        case 'SCAN':
            $key = $postObj->EventKey;
          $xml =<<<END
            <xml>
            <ToUserName><![CDATA[{$fromUser}]]></ToUserName>
            <FromUserName><![CDATA[{$toUser}]]></FromUserName>
            <CreateTime>{$timestamp}</CreateTime>
            <MsgType><![CDATA[text]]></MsgType>
            <Content><![CDATA[欢迎回来,好久不见!{$key}]]></Content>
            </xml>
END;
    return $xml;
            break;
        case 'LOCATION':
            $latitude = $postObj->Latitude;
            $longitude = $postObj->Longitude;
            $precision = $postObj->Precision;
          $xml =<<<END
            <xml>
            <ToUserName><![CDATA[{$fromUser}]]></ToUserName>
            <FromUserName><![CDATA[{$toUser}]]></FromUserName>
            <CreateTime>{$timestamp}</CreateTime>
            <MsgType><![CDATA[text]]></MsgType>
            <Content><![CDATA[感谢你的支持,你的位置信息为:纬度:{$latitude};经度:{$longitude};精度为:{$precision}]]></Content>
            </xml>
END;
    return $xml;
            break;
        case 'CLICK':
            return handleCustomEvent($postObj);
            break;
    }
}
function handleCustomEvent($postObj){
    $toUser = $postObj->ToUserName;
    $fromUser = $postObj->FromUserName;
    $creatTime = $postObj->CreatTime;
    $key = $postObj->EventKey;
    $timestamp = time();
    switch ($key) {
        case 'music':
            $xml =<<<END
            <xml>
            <ToUserName><![CDATA[{$fromUser}]]></ToUserName>
            <FromUserName><![CDATA[{$toUser}]]></FromUserName>
            <CreateTime>{$timestamp}</CreateTime>
            <MsgType><![CDATA[text]]></MsgType>
            <Content><![CDATA[1,Sober\r\n2,Good Times\r\n3,Talking Body]]></Content>
            </xml>
END;
            return $xml;
            break;
        case 'click1':
        require_once "wechatapi.php";
        $link = "@" . realpath("showqrcode.jpg");
        $token = autoRefresh();
        $url = "https://api.weixin.qq.com/cgi-bin/media/upload?access_token={$token}&type=image";
        $data = array("media"=>$link);
        $responseObj = json_decode(httpPost($url,$data));
        $media_id = $responseObj->media_id;
            $xml =<<<END
             <xml>
            <ToUserName><![CDATA[{$fromUser}]]></ToUserName>
            <FromUserName><![CDATA[{$toUser}]]></FromUserName>
            <CreateTime>{$timestamp}</CreateTime>
            <MsgType><![CDATA[image]]></MsgType>
            <Image>
            <MediaId><![CDATA[{$media_id}]]></MediaId>
            </Image>
            </xml>
END;
            return $xml;
            break;
    }
}
//获取带参数的临时二维码,默认有效期7天;
function getQRCode($time = 604800){
    $token = autoRefresh();
    $url = "https://api.weixin.qq.com/cgi-bin/qrcode/create?access_token=" . $token;
    $data = '{"expire_seconds":' . $time . ', "action_name": "QR_SCENE", "action_info": {"scene": {"scene_id": 123}}}';
    $ticketObj = json_decode(httpPost($url,$data));
    // https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=TICKET
     $ticket = urlencode($ticketObj->ticket);
     $qrUrl = "https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket={$ticket}";
     echo "<script>location.href='{$qrUrl}'</script>";

}
//getQRCode();
 ?>



























