{
    let regex = new RegExp('xyz','i');
    let regex2 = new RegExp(/xyz/i);
    console.log(regex.test('xyz123'),regex2.test('xyz123'))

    let regex3 = new RegExp(/xyz/ig,'i');   //es6中正则构造函数中的第二个参数可以覆盖正则表达式中的修饰符;
    console.log(regex3.flags)   //flags用来获取正则修饰符
}