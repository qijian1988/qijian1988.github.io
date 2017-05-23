var ageIncreaseNum = 1;
function action(){
  $('#action').show(1000,function(){
        $(this).on('touchend',function(){
            $(this).hide();
            $('.age-dh').transition({scale:1.2,y:100,opacity:0},1500,'linear',function(){
                $(this).fadeIn();
                $('#age-video').hide();
            })
            Scene();
        })
    });
}

function ageChange(e){
	if(e==1){
        //变老
		ageIncrease();
	}else{
		//变年轻
		ageDecline();
	}
}

function ageIncrease() {
    $("#age1-v" + ageIncreaseNum).transition({opacity:1},1500,'linear');
    ageIncreaseNum++;
    if (ageIncreaseNum == 16) {
        clearTimeout(yBT);
        action();
        return false;
    }
    yBT = setTimeout(ageIncrease, 1700)
}
function ageDecline() {
    $("#age2-v" + ageIncreaseNum).transition({opacity:1},1500,'linear');
    ageIncreaseNum++;
    //console.log(ageIncreaseNum);
    if (ageIncreaseNum == 16) {
        clearTimeout(yBT);
        action();
        return false;
    }
    yBT = setTimeout(ageDecline, 1700)
}