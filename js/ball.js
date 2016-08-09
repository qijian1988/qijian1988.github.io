var num=0;
		var x=0;
		var y=0;
		//创建构造函数
		function Box(){
			this.element=$('<span></span>');
		}
		//创建原型
		Box.prototype={
//			插入div;
			show:function(){
				$('#bg').append(this.element);
				return this;
			},
//			随机颜色.大小
			randSpan:function(){
				var w=randFn(30,50);
				var boxborder=randFn(1,5);
				this.element.css({
					background:randColor(),
					width:w,
					height:w,
//					border:boxborder+'px'+' '+'solid'+' '+randColor(),
				})
				num=w;
				return this;
			},
			//运动
			move:function(){
				var self=this;
				var speedX=randFn(2,3);
				var speedY=randFn(2,3);
				var x=randFn(0,window.innerWidth-num);
				var y=randFn(0,window.innerHeight-num);
//				var d=number().toFixed(1);   //随机数保留一位小数;
				setInterval(function(){
					if(x>window.innerWidth-num){
						speedX=speedX*(-1);
					}else if(x<0){
						speedX=speedX*(-1);
					}
					if(y>window.innerHeight-num){
						speedY=speedY*(-1);
					}else if(y<0){
						speedY=speedY*(-1);
					}
					x=x+speedX;
					y=y+speedY;
					self.element.css({
						left:x,
						top:y,
//						 opacity:number().toFixed(1),
					});
				},10)
				return this;
			}
		}
		//所有小球加载完成再执行动画;
		$(function(){
			var num=30;
			var lis=[];
			for(var i=0;i<num;i++){
				lis[i]=new Box();
				lis[i].show().randSpan().move();
			}
		})
		//随机取整函数
		function randFn(min,max){
			return parseInt(Math.random()*(max-min+1)+min);
		}
		//随机数0-1;
		function number(){
			return Math.random();
		}
		//随机颜色
		function randColor(){
			var a=randFn(0,255);
			var b=randFn(0,255);
			var c=randFn(0,255);
			return 'rgb('+a+','+b+','+c+')';
		}