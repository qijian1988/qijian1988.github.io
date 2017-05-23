function loadAudios(callback){ //加载音频资源
  // var aud = new Audio();
  var aud = document.createElement('audio');
  // console.log( onloadedmetadata in aud );
  isWx = !(onloadedmetadata in aud);

  if( isWx ){
    audios[audio_sources[i].name] = aud;
  }

  aud.onloadedmetadata = function(){
    if(audio_sources[i])audios[audio_sources[i].name] = this;
    //{ bgsound: 1.mp3}
    i ++;
    if( i < len ) loadAudios(callback);
    //判断音频资源如果没有加载完成，就继续回调加载。
    if( i == len ) callback && callback();
    //当资源加载完成之后，执行回调函数。
  };
  aud.onerror = function(){
    //如果当前资源加载失败，跳过当前资源，继续加载后面的资源
    i ++;
    if( i < len ) loadAudios(callback);
    if( i == len ) callback && callback();        
  };
  aud.src = audio_sources[i].url;
}

function loadImages(callback){ // 加载视频资源
  var img = new Image();
  img.onload = function(){
    images[image_sources[i].name] = this;
    i ++;
    if( i < len ) loadImages(callback);
    if( i == len ) callback && callback();
  };
  img.onerror = function(){
    i ++;
    if( i < len ) loadImages(callback);
    if( i == len ) callback && callback();        
  };
  img.src = image_sources[i].url;
}

function Factory(x,y,w,h,cvs){ //用来生成canvas图形的构造函数，这是一个公共类，所有图形都通过它实例化
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.cvs = cvs;
}

Factory.prototype.draw = function(){ //绘制图形的方法
  var cvs = this.cvs;
  cvs.beginPath();
  cvs.drawImage.apply(cvs,arguments);
};

function getRand(x,y,b){ //随机产生x~y之间的数字 ，如果b为false ，则会根据随机出来的数字返回 0 1 2.
  var num = Math.round(Math.random()*(y-x)+x);
  if( b )return num;
  if( num < 45 )return 0;
  if( num > 85 )return 2;
  return 1;
}

function isCrash(obj1,obj2){//碰撞检测函数
  var L1 = obj1.x;
  var R1 = obj1.x + obj1.w;
  var T1 = obj1.y;
  var B1 = obj1.y + obj1.h;
  
  var L2 = obj2.x;
  var R2 = obj2.x + obj2.w;
  var T2 = obj2.y;
  var B2 = obj2.y + obj2.h;
  
  if( L1 >= R2 || R1 <= L2 || T1 >= B2 || B1 <= T2)
  return false;
  return true;
}

function createEnemy(){//创建敌机
  var enemy,img,x,y,w,y,num = getRand(0,100),arrW = [38,46,110];
  var img = images['enemy'+(num+1)];
  var sound = new Audio;
  sound.src = audios['enemy'+(num+1)].src;
  w = arrW[num];
  h = img.height;
  x = getRand(w,canvas.width-w,true);
  y = -h;
  enemy = new Factory(x,y,w,h,cvs);
  enemy.img = img;
  enemy.sound = audios['enemy'+(num+1)].cloneNode();
  enemy.life = 3*num;
  enemy.posX = 0;
  enemy.length = img.width / w;
  enemy.index = num;
  enemy.speed = getRand(3,6,true) - Math.floor(1.5*num);
  enemyArr.push(enemy);
}

function randBuff(){//随机产生buff
  setTimeout(function(){
    if(!bomb && bullet_speed==1 && bullet_type==0)createBuff();
    randBuff();
  },getRand(5000,8000,true));
}

function drawEnemy(){ //绘制敌机  创建和绘制敌机分开，是因为每次绘制都是绘制所有敌机。
  var sound;
  for(var i=0; i<enemyArr.length; i++){
    if( enemyArr[i].die ){
      enemyArr[i].posX ++;
    }else{
      enemyArr[i].y += enemyArr[i].speed;
    }
    if( enemyArr[i].posX == enemyArr[i].length || enemyArr[i].y > canvas.height ){
      //如果敌机已经阵亡，并且已经播放完死亡动画，或者敌机已经跑出画面之外，则从数组中删除敌机
      sound = enemyArr[i].sound;
      scores += 100*(enemyArr[i].index+1);
      enemyArr.splice(i,1);
      // sound.play();
      continue;
    }          
    enemyArr[i].draw(enemyArr[i].img,enemyArr[i].posX*enemyArr[i].w,0,enemyArr[i].w,enemyArr[i].h,enemyArr[i].x,enemyArr[i].y,enemyArr[i].w,enemyArr[i].h);
    if( isCrash( enemyArr[i], heroFly ) ){
      //如果敌机撞到英雄机，游戏结束
      // audios.gameover.play();
      href = window.location.href + "?" + Math.random();
      gameover.innerHTML = '<div><p>游戏结束</p><p>你的得分为'+scores+'</p><a href="'+href+'">重玩</a></div>';
      gameover.style.display = 'block';
      audios.bgsound.pause();
      isOver = true;
    }
  }
}

function drawBullet(){//绘制子弹 
  for(var i=0; i<bulletArr.length; i++){
    bulletArr[i].y -= 7;
    if(bullet_type == 1 ){
      bulletArr[i].draw(images.doubleBullet,bulletArr[i].x,bulletArr[i].y);
    }else{
      bulletArr[i].draw(images.singleBullet,bulletArr[i].x,bulletArr[i].y);            
    }
    if( checkEnemyDie(bulletArr[i]) || bulletArr[i].y < 0 ){
      bulletArr.splice(i,1);
      i --;
    }
  }
}

function createBullet(){//创建子弹
  var bullet,x,y,w,h = 14;
  // var sound = audios.bullet.cloneNode();
  //console.log(audios);
  //从已加载资源中取出子弹音效。
  if( bullet_type == 1 ){
    w = images.doubleBullet.width;
  }else{
    w = images.singleBullet.width;
  }
  //根据英雄机算出子弹是的x,y坐标
  x = heroFly.x + (heroFly.w-w) / 2;
  y = heroFly.y - h;
  bullet = new Factory(x,y,w,h,cvs);
  bulletArr.push( bullet );
  // sound.play();
  sound = null;//手动释放一下资源
}

function checkEnemyDie(obj){//检查敌机是否已经死亡，如果死亡则做一次标记，下次不再绘制该敌机
  for(var i=0; i<enemyArr.length; i++){
    if( isCrash(enemyArr[i],obj) ){
      enemyArr[i].life -= bullet_type+1;
      obj.die = true;
      if( enemyArr[i].life <= 0 ) enemyArr[i].die = true;
      return true;
    }
  }
  return false;
}

function checkHeroDie(){//检查英雄机是否死亡
  for(var i=0; i<enemyArr.length; i++){
    if( isCrash(heroFly,enemyArr[i]) ){
      heroFly.die = true;
    }
  }          
}      

function drawBuff(){//绘制增益buff
  buff.y += 3;
  if( isCrash(buff,heroFly) ){

    if(buff.type == 2 ){
      bullet_speed = 2.5;
    }else if(buff.type == 1 ){
      bullet_type = 1;
    }else{
      bullet_type = 0;
    }

    if( buff.type == 0 ) createBomb();
    setTimeout(function(){
      bullet_speed = 1;
      bullet_type = 0;
    },10000); 
    buff = null;
    return;
  }
  buff.draw(images.buff,buff.type*39,0,39,68,buff.x,buff.y,39,68);
  if( buff.y > canvas.height ) buff = null;
}

function createBuff(){//创建增益buff
  var arr = [0,39,78], i = getRand(0,100),
    x = getRand(60,260,true), y = -70, w = arr[i], h = 68;
  if( buff )return;
  buff = new Factory(x,y,w,h,cvs);
  buff.type = i;
}
function createBomb(){//创建全屏炸弹
  if( bomb )return;
  bomb = new Factory(270,innerH - 40,42,36,cvs);
  canvas.onclick = doBomb;
  canvas.addEventListener('touchstart',doBomb);
  function doBomb(event){
    document.title = 'boom!';
    var ev = event.touches ? event.touches[0] : event;
    var x = canvas.offsetLeft + ev.clientX, y = canvas.offsetTop + ev.clientY;

    if( x > 270 && x < 312 && y > innerH - 40 && y < innerH - 2){
      clearEnemy();
    }
  };
}
function clearEnemy(){//触发全屏全屏炸弹时清除所有敌机
  for(var i=0; i<enemyArr.length; i++){
    enemyArr[i].life = 0;
    enemyArr[i].die = true;
    scores += enemyArr[i].index*100;
  }
  canvas.onclick = null;
  bomb = null;
  buff = null;
}

function isTouchOnHeroFly(x,y){
  return (x > heroFly.x && x < heroFly.x + heroFly.w) && (y > heroFly.y && y < heroFly.y + heroFly.h);
}

function gameStart(){
  var bgImg = images.background;
  //从已经加载的资源中取得背景图片
  count ++;
  //辅助变量，利用该变量可以控制游戏节奏
cvs.clearRect(0,0,canvas.width,canvas.height);
cvs.beginPath();
cvs.drawImage(bgImg,0,bgOffsetY);
cvs.drawImage(bgImg,0,-canvas.height + bgOffsetY);
  bgOffsetY += 2;//控制背景滚动的频率。
  if(bgOffsetY>canvas.height) bgOffsetY = 0;
  //背景图片超出画布就拉回到原点，重新开始滚动
  
  /*
   左  2
   上  4 
   右  8
   下  16
   
   左上   6 
   右上   12
   左下   18
   右下   24
  */

  switch(key){
    case 2:
      heroFly.x -= heroSpeed;
      if( heroFly.x < 0 ) heroFly.x = 0;
      break;
    case 4:
      heroFly.y -= heroSpeed;
      if(heroFly.y<0) heroFly.y = 0;
      break;
    case 8:
      heroFly.x += heroSpeed;
      if( heroFly.x > canvas.width - heroFly.w ) heroFly.x = canvas.width - heroFly.w;
      break;
    case 16:
      heroFly.y += heroSpeed;
      if(heroFly.y > canvas.height - heroFly.h ) heroFly.y = canvas.height - heroFly.h;
      break;
  }
  
heroFly.draw(images.heroFly,heroPos*66,0,heroFly.w,heroFly.h,heroFly.x,heroFly.y,heroFly.w,heroFly.h);
  //绘制英雄机到画布中
  heroPos += 1;
  heroPos %= 2;
  
  if( count % (10/bullet_speed) == 0 )createBullet(); //创建子弹
  drawBullet();//绘制子弹到画布中
  
  if( count % 30 == 0 ) createEnemy(); //创建敌机
  drawEnemy(); //绘制敌机到画布中
  
  if( bomb ) bomb.draw(images.bomb,bomb.x,bomb.y);
  //绘制右下角的导弹图标
  if( buff ) drawBuff(); 
  //绘制随机buff（增益效果）。
  
  loading.style.display = 'none';  
  //隐藏 loading 层
  if(!isOver) window.requestAnimationFrame(gameStart);
  //isOver 判断游戏是否结束，如果没有结束就继续重复绘制
}