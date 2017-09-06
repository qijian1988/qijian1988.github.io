function test() {
    let a = 1;
    // let a = 2;  //不能重复声明
    for (let i = 0; i < 3; i++) {
        console.log(i)
    }
    // console.log(i)  //es6 默认严格模式.所以报错信息为引用错误,变量未声明.
}

function last(){
    const PI = 3.1415926;
    // PI = 8; 
    // 常量声明时必须赋值;
    // 常量不能修改.但是对象例外,因为对象指向的是一个引用.

    const K = {     //声明的K只是指向了某一块内存;
        a: 1,
    }
    K.b = 2
    console.log(PI,K)

}

// test()
last()