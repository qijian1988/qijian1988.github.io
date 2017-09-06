// 对象扩展

{
    // 简洁表示法
    let o = 1;
    let k = 2;
    let es5 = {
        o:o,
        k:k
    };
    let es6 = {
        o,
        k
    }
    console.log(es5,es6)
}

{
    // 属性表达式
    let a = 'b';
    let es5_obj = {
        a: 'c'
    }
    let es6_obj = {
        [a]: 'c'    //[] 中括号内可以为变量，也可以为表达式，此处相当于 b: 'c'
    }
    console.log(es6_obj)
}

{
    // 新增API
    console.log('字符串',Object.is('abc','abc')) //true
    console.log('数组',Object.is([],[]))  //false 因为数组和对象都是引用类型，但是引用的是不同地址；所以不等；Object.is作用等同于 ‘===’
    
    /**
     * 注意：
     * 1.Object.assign为浅拷贝，拷贝引用类型时，只拷贝一个引用地址；
     * 2.Object.assign只能拷贝自有属性，继承的属性不能拷贝；
     */ 
    console.log('拷贝',Object.assign({a:'a'},{b:'b'}))

    // 对象遍历 Object.entries
    let test = {k:124,o:324};
    for(let [key,value] of Object.entries(test)){
        console.log([key,value])
    }
}

