function func(array){
    let res = []
    let obj = {}
    for (let i = 0; i < array.length; i++){
        if (array[i] in obj){
            obj[array[i]]++
        }
        else {
            obj[array[i]] = 1
        }
    }
    for (let x in obj){
        if (obj[x] === 1){
            res.push(x)
        }
    }
    return res.join(' ')
}

console.log(func([ 1, 8, 4, 4, 6, 1, 8 ]))