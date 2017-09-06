// symbol

{
    //声明的变量是独一无二的，永不相等；
    let a1 = Symbol();
    let a2 = Symbol();
    console.log(a1 === a2)  //false

    // Symbol.for
    let a3 = Symbol.for('a3');  //a3表示该变量对应的key值。
    let a4 = Symbol.for('a3');  //获取a3对应的变量
    console.log(a3 === a4) //true

}