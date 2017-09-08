;(function(w){
   //提示弹层
       var option = {
            text:'',
            fontSize:'',
            color:'',
            bgcolor:'',
            time:1000
       },
       modialog = new (function(){
          return function(){
             this.name = 'modialog'
          }
       }());
       function dialog(str){
           // opt {
           //   text:'',
           //   fontSize:'',
           //   color:'',
           //   bgcolor:'',
           //   time:1000
           // }
           var opt = modialog.opt;
           console.log(opt);
           !window.mdebug?window.mdebug = true:null;
           if(!document||!mdebug) return;
           var doc = document;
           var pannel = doc.getElementById('mdialog');

           if(!pannel){

               pannel =  doc.createElement('div');
               pannel.id = 'mdialog';
               pannel.style.cssText=
               ['width:auto;white-space:normal','height:auto','padding:3%','position:fixed',
                'top:50%','left:50%','transform:translate(-50%,-50%)',
                '-webkit-transform:translate(-50%,-50%)',
                'background:'+opt.bgcolor ||'rgba(0,0,0,0.8)',
                'z-index:999',
                'text-align:center',
                'border-radius:5px',
                'font-size:' + opt.fontSize || '1rem',
                'color:'+opt.color ||'#fff'
               ].join(';');

               document.body.appendChild(pannel);

           }

               pannel.innerHTML = str || '';
               //pannel.style.opacity = 1;
               fadeIn(pannel);
           var timer = setTimeout(function(){
               timer = null;
               fadeOut(pannel);

           },opt.time || 3000)

                   
       }


       // 渐隐
       function fadeOut(el) {

         el.style.opacity = 1;

         var last = +new Date();
         var tick = function() {
           el.style.opacity = +el.style.opacity - (new Date() - last) / 400;
           last = +new Date();

           if (+el.style.opacity >= 0) {
             (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
           }else{
             el.style.display = 'none';
           }
         };

         tick();
       }


       //渐入
       function fadeIn(el) {
         el.style.opacity = 0;
         el.style.display = 'block';
         var last = +new Date();
         var tick = function() {
           el.style.opacity = +el.style.opacity + (new Date() - last) / 400;
           last = +new Date();

           if (+el.style.opacity < 1) {
             (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
           }
         };

         tick();
       }

       modialog.init = function(opt){
          if(!opt){
            return;
          }
          modialog.opt = extended(option,opt);
       }
       modialog.dialog = dialog
       window.modialog = modialog;

})(window)