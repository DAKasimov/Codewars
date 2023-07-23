function func(multyArray){
    let t = multyArray.map((item)=>{
        return item.length
    })
    if (t.length === 0){
        return 0
    }
    t.sort()
    for ( let i = 0; i < t.length-1; i++){
        if (t[i+1]-t[i] !== 1){
            return t[i+1] - 1
        }
    }
}

console.log(func([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]))