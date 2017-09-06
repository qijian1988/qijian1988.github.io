//函数扩展
{
    //传默认值
    function test(x, y = 'world') {
        console.log('默认值：', x, y)
    }
    test('hello') //hello world
    test('hello', 'kill') //hello kill 覆盖默认值
}

{
    let x = 'test';

    function test2(x, y = x) {
        console.log('作用域：', x, y)
    }
    test2('kill') //kill kill
    test2() //undefined undefined

    function test3(c, y = x) {
        console.log('作用域：', c, y)
    }
    test3('kill') //kill test
}

{
    function test4(...arg) {
        for (let v of arg) {
            console.log(v)
        }
    }
    test4(1, 2, 3, 4, 5, 6) //1,2,3,4,5,6
}

{
    console.log(...[1, 2, 4]) //1 2 4
    console.log('a', ...[1, 54, 6]) // a 1 54 6
}


{
    // 箭头函数
    let arrow = v => v * 3;
    let arrow2 = () => 4;
    console.log('arrow',arrow(2))
    console.log('arrow2',arrow2())
}

{
    function tail(x){
        console.log('tail',x);
    }
}