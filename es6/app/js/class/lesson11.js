{
    let obj = {
        time:'2017-09',
        name:'net',
        _r:123
    }

    let monitor = new Proxy(obj,{
        // 拦截对象属性的读取
        get(target,key){
            return target[key].replace('2017','2018')
        },
        // 拦截对象设置属性
        set(target,key,value){
            if(key == 'name'){
                return target[key] = value;
            }else{
                return target[key];
            }
        },
        // 拦截key in object操作；
        has(target,key){
            if(key == 'name'){
                return target[key]
            }else{
                return false
            }
        },
        // 拦截delete
        deleteProperty(target,key){
            if(key.indexOf('_')>-1){
                delete target[key];
                return true;
            }else{
                return target[key]
            }
        }
    });
    monitor.name = 'muk'    //修改name的值；
    console.log('get',monitor.time,monitor)

    console.log('has','name' in monitor,'time' in monitor)  //true false 过滤掉非name属性；

    delete monitor.time;
    console.log('delete',monitor);
    delete monitor._r;
    console.log('delete',monitor);
    
}