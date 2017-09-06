{
    let list = new Set();
    list.add(5);
    list.add(7);

    console.log('size', list.size);
}

{
    let arr = [1, 2, 5, 6];
    let list = new Set(arr);
    console.log('size', list.size)
}

{
    // Set 添加
    let list = new Set();
    list.add(1);
    list.add(3);
    list.add(1);
    console.log('list', list) //[1,3] Set只能放独一无二的元素，重复则不显示；
}

{
    // Set 删除，清空，判断    
    let arr = ['add', 'delete', 'clear', 'has'];
    let list = new Set(arr);
    console.log('has', list.has('add')) //返回布尔值；
    console.log('delete', list.delete('add'), list) //删除元素，返回布尔值；
    list.clear(); //清空
    console.log('list', list)
}

{
    // Set 读取元素    
    let arr = ['add', 'delete', 'clear', 'has'];
    let list = new Set(arr);
    for (let key of list.keys()) {
        console.log('keys', key)
    }

    for (let value of list.values()) {
        console.log('value', value)
    }

    for (let [key, value] of list.entries()) {
        console.log('entries', key, value)
    }

    list.forEach(function (item) {
        console.log(item)
    })

    // Set实例，读取的key和value值是一样的。
}

{
    let weakList = new WeakSet();
    let arg = {};
    weakList.add(arg);
    //  WeakSet只支持对象,不能遍历
}

/**
 * Map用法
 */
{
    let map = new Map();
    let arr = ['124'];
    map.set(arr, 345); //Map添加元素用set
    console.log('Map', map, map.get(arr)) //获取元素用get；
}

{
    let map = new Map([
        ['a', 124],
        ['b', 345]
    ]);
    console.log('map args', map)

    console.log('size', map.size) //获取map中元素个数；
    console.log('delete', map.delete('a'), map) // 删除元素
    map.clear(); //清空元素
    console.log(map);

    //  Map遍历跟Set一样；
}

/**
 * Map,Set与Array的对比
 */

{
    //  增 删 改 查
    let map = new Map();
    let array = [];
    //增
    map.set('t', 1);
    array.push({
        't': 1
    });
    console.info('map,array', map, array)

    // 查

    let map_exist = map.has('t'); //返回布尔值；
    let array_exist = array.find(item => item.t) //如果存在就返回该元素,不存在返回undefined;
    console.info('map-array', map_exist, array_exist)

    // 改
    map.set('t', 2);
    array.forEach(item => item.t ? item.t = 2 : null)
    console.info('map,array', map, array)

    // 删
    map.delete('t');
    let index = array.findIndex(item=>item.t);
    array.splice(index,1)
    console.info('map,array', map, array)
    
}
    // Set与Array对比
{
    let set = new Set();
    let array = [];

    // 增
    set.add({t:1});
    array.push({t:1});
    console.info('set-array',set,array)

    // 查
    let set_exist = set.has({t:1}); //false 因为是对象，为引用型，如果保存了就可以查到；
    let array_exist = array.find(item=>item.t)

    // 改
    set.forEach(item=>item.t?item.t=2:null)

    // 删
    set.forEach(item=>item.t?set.delete(item):'')
}

/**
 * Set Map Object对比
 */

 {
     let item = {t:1};
     let map = new Map();
     let set = new Set();
     let obj = {};

    //  增
 }