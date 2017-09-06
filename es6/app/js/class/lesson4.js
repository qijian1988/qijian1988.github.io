// 字符串扩展
{
    let str = 'string';
    console.log('includes',str.includes('tr'))  //是否包含
    console.log('starts',str.startsWith('st'))   //是否以某些字符开始
    console.log('ends',str.endsWith('ng'))  //是否以某些字符结尾
}

{
    let str = 'abc';
    console.log(str.repeat(2))  //复制两遍该字符串
}

// 字符串拼接

{
    let name = 'list';
    let info = 'hello world';
    console.log(`I am ${name},${info}`)
}

// 补白

{
    console.log('1'.padStart(3,'0'))    //01   2表示总位数,前面的字符位数不够,用第二个参数补全;
    console.log('1'.padEnd(2,'0'))    
}