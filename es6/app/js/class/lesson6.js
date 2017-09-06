// 数组的扩展

{
    let arr = Array.of(3,4,7,9,11); //将一组数变成一个数组
    console.log('arr---',arr)  // [3,4,7,9,11]
    
    let arr2 = Array.of();
    console.log('empty',arr2)   //[]
}

{
    // Array.from() 用法一:伪数组转成数组
    let p = document.querySelectorAll('p');
    let pArr = Array.from(p);
    pArr.forEach(function(item){
        console.log(item.textContent)   //输出标签内的文本内容
    })

    // Array.from(arr,fn) 用法二:处理数组;
    console.log(Array.from([1,3,4],function(item){return item*2}))  //[2,6,8]
}

{
    //数组的fill方法
    console.log('fill-7',[1,'a',34].fill(7))    //替换数组内所有的元素 [7,7,7]

    /**
     * fill()两个参数的情况:
     * 参数一:要用于替换的新数值,
     * 参数二:替换开始位置   (数组是以0为开始)
     * 参数三:替换的结束位置  (不包括结束位置元素)
     */
    console.log('fill-pos',[1,'a','b'].fill(7,0,1)) //[7,'a','b']
}

{
    // 数组的遍历
    for(let index of ['1','v','234'].keys()){
        console.log('keys',index);  //返回数组的下标
    }

    for(let value of ['1','v','234'].values()){
        console.log('values',value)
    }

    for(let [index,value] of ['1','v','234'].entries()){
        console.log('value',index,value)    //返回下标及对应的数值
    }
}

{
    console.log([1,3,5,3,6].find(function(item){return item > 3}))  //找到第一个符合要求的元素  //5
    console.log([1,3,5,3,6].findIndex(function(item){return item > 3}))  //找到第一个符合要求的元素对应的下标  //2  
}

{
    // 判断数组中是否包含某个元素
    console.log('number',[1,2,NaN].includes(1)) //true
    console.log('number',[1,2,NaN].includes(NaN))    //true
}