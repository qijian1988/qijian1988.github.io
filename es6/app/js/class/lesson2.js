// 块作用域
{
    let a, b, rest;
    [a, b] = [1, 2];
    console.log(a, b)
}

// 数组解构赋值
{
    let a, b, rest;
    [a, b, ...rest] = [1,2,3,4,5,6];
    console.log(a,b,rest)
}

// 对象解构赋值
{
    let a,b;
    ({a,b}={a:1,b:2});
    console.log(a,b)
}

// 默认值赋值
{
    let a, b, c, rest;
    [a,b,c=124] = [1,2]
    console.log(a,b,c) //1,2,124
}

{
    let a, b, c, rest;
    [a,b,c] = [1,2]
    console.log(a,b,c) //1,2,undefined
}


// 解构赋值 适用场景
// 1. 值互换;
{
    let a = 1;
    let b = 2;
    [a,b] = [b,a];
    console.log(a,b) //2,1 
}
// 场景2 获取函数返回值
{
    function f(){
        return [1,2]
    }
    let a, b;
    [a,b] = f();
    console.log(a,b)    //1,2
}

// 场景3  选择性获取函数返回值;
{
    function f(){
        return [1,2,3,4,5]
    }
    let a,b,c;
    [a,,,b] = f();
    console.log(a,b)    //1,4
}

// 场景4 选择性赋值
{
    function f(){
        return [1,2,3,4,5]
    }
    let a,b,c;
    [a,...b] = f();
    console.log(a,b)    //1,[2,3,4,5]
}

/**
 * 对象赋值适用场景
 */

 {
     let o = {p:32,q:true};
     let{p,q}=o;
     console.log(p,q)
 }

 {
     let { a = 10, b = 5} = {a:3};  //默认值赋值
     console.log(a,b)
 }

//  获取对象的值
 {
     let metaData = {
         title: 'abc',
         test: [{
             title: 'test',
             desc: 'description'
         }]
     }
     let {title:esTitle,test:[{title:cnTitle}]} = metaData;
     console.log(esTitle,cnTitle)   //abc,test
 }