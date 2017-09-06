// 数值的扩展

{
    console.log('25', Number.isInteger(25)) //判断是否为整数,接受的参数必须是数字型,不能是其他类型;
    console.log('25.0', Number.isInteger(25.0)) //25.0 = 25所以为真.
    console.log('25.1', Number.isInteger(25.1))
}

//  Number.MAX_SAFE_INTEGER数字的最大上限,Number.MIN_SAFE_INTEGER数字的最小下限,超过这个范围后数据存储不准.
{
    console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER)
    // Number.isSafeInteger(),判断数字是否是安全的(即在上下限范围内)
    console.log('10', Number.isSafeInteger(10)) //true
}

{
    //获取数值的整数部分;
    console.log('4.1', Math.trunc(4.1)) //4
    console.log('4.9', Math.trunc(4.9)) //4
}

// 判断数字的正负;
{
    console.log('-5',Math.sign(-5)) //-1
    console.log('5',Math.sign(5)) //1
    console.log('0',Math.sign(0)) //0
    console.log('foo',Math.sign('foo')) //NaN        
}

// 立方根

{
    console.log('-1',Math.cbrt(-1)) //-1
    console.log('8',Math.cbrt(8)) //2    
}