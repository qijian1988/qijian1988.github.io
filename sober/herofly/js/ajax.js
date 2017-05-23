
function ajax( options ){

  // alert( options['method'] );
  // return;

  var opts = {
    method: options['method'] || 'get',
    url : options['url'] || '',
    data : options['data'] || '',
    dataType : options['dataType'] || '',
    succ : options['succ'] || function(){},
    fail : options['fail'] || function(){}
  };

  var xhr = null;

  if( window.XMLHttpRequest ){
    xhr = new XMLHttpRequest();
  }else{
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xhr.onreadystatechange = function(){

    if( xhr.readyState == 4 ){
      if( xhr.status == 200 ){
        if( typeof opts.succ == 'function'){

          // var json = JSON.parse(xhr.responseText);
          // opts.succ( json );
          // opts.succ( xhr.responseXML );
          // opts.succ( xhr.responseText );

          switch(opts.dataType){
            case "xml":
              opts.succ( xhr.responseXML );
              break;
            case "json":
              opts.succ( JSON.parse(xhr.responseText) );
              break;
            default:
              opts.succ( xhr.responseText );
          }

          /*
            xhr.responseXML : 会自动将取到的数据解析成一个xml文档，并以DOM对象方式返回
          */
        
        }
      }else{
        if( typeof opts.fail == 'function'){
          opts.fail( xhr.status );
        }
      }
    }

  }

  if( opts.method == 'post' ){
    xhr.open(opts.method,opts.url); 
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xhr.send(opts.data);
  }else{
    xhr.open(opts.method,opts.url+"?"+opts.data); 
    xhr.send(null);
  }

}


