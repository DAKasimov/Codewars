function f(array){
    let res = []
    let result = []
    let i = 0
    while (i !== array.length){
        if (i === 0){
            res.push(array[i])
        }
        else{
            if (i % 8 !== 0){
                res.push(array[i])
            }
            else{
                result.push(res)
                res = []
                res.push(array[i])
            }
        }
    }
    console.log(result)
}

f([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0])