function func(str, n){
    str = str.split('')
    let res = str.map((item)=>{
        return item.charCodeAt()
    })
    let s = 0
    res.forEach((item)=>{
        s += item
    })
    if (n * 0.7 < s){
        return 'Fire!'
    }
    else {
        return 'ok'
    }
}

console.log(func('abc',1000))