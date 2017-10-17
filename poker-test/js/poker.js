(function() {
    var data = [{
            url: 'https://v.qq.com/iframe/player.html?vid=v05563wuxy8&tiny=0&auto=0',
            title: '小梅花与群友1V1Battle',
            desc: '操作我只服小梅花'
        },
        {
            url: 'https://v.qq.com/iframe/player.html?vid=o05363r0b6h&tiny=0&auto=0',
            title: '免费SNG群友直播奖励赛',
            desc: '宝师傅Allin遇天顺'
        },
        {
            url: 'https://v.qq.com/iframe/player.html?vid=z0537tziibq&tiny=0&auto=0',
            title: '第三季 第10期精华版',
            desc: '收官之战'
        },
        {
            url: 'https://v.qq.com/iframe/player.html?vid=g0536l1csjs&tiny=0&auto=0',
            title: '第三季 第9期精华版',
            desc: 'Tina一胜一败仍然稳健'
        },
        {
            url: 'https://v.qq.com/iframe/player.html?vid=z0536hgu4tw&tiny=0&auto=0',
            title: '第三季 第8期精华版',
            desc: '小芮4战全胜'
        },
        {
            url: 'https://v.qq.com/iframe/player.html?vid=s0536lax0m5&tiny=0&auto=0',
            title: '第三季 第7期精华版',
            desc: '小梅花深爱操作 无奈水下'
        },
        {
            url: 'https://v.qq.com/iframe/player.html?vid=u0536k16ige&tiny=0&auto=0',
            title: '第三季 第6期精华版（下）',
            desc: '宝师傅携手小芮超短吗爬沟'
        },
        {
            url: 'https://v.qq.com/iframe/player.html?vid=z0536dgkdac&tiny=0&auto=0',
            title: '第三季 第6期精华版（上）',
            desc: 'Tina小姐姐神奇表演3战全胜'
        },
        {
            url: 'https://v.qq.com/iframe/player.html?vid=u05369v0p2b&tiny=0&auto=0',
            title: '第三季 第5期精华版',
            desc: '宝师傅 33抓bluff'
        },
        {
            url: 'https://v.qq.com/iframe/player.html?vid=m0536uqi5to&tiny=0&auto=0',
            title: '第三季 第4期精华版',
            desc: '稳健小芮细腻操作 3号全胜'
        },
        {
            url: 'https://v.qq.com/iframe/player.html?vid=f0536rr4o6q&tiny=0&auto=0',
            title: '第三季 第3期精华版',
            desc: '宝师傅精准读牌 妙弃2nd Nuts'
        },
        {
            url: 'https://v.qq.com/iframe/player.html?vid=d0536mqds2k&tiny=0&auto=0',
            title: '第三季 第2期精华版',
            desc: '小梅花爆炸tilt 全世界都是假的'
        },
        {
            url: 'https://v.qq.com/iframe/player.html?vid=c053674qc74&tiny=0&auto=0',
            title: '第三季 第1期精华版',
            desc: '第三季开播 小梅花首秀'
        }
    ];
    data.forEach(function(val) {
        var div = document.createElement('div')
        div = ' <div>\
	                <iframe src="' + val.url + '" frameborder=0 "allowfullscreen"></iframe>\
	                <h4>' + val.title + '</h4>\
	                <p>' + val.desc + '</p>\
	            </div>';
        document.querySelector('.video-con').innerHTML += div;
    })
})()