function rowWeights(arr){
    let res1 = []
    let res2 = []
    arr.forEach((item, index)=>{
        if (index % 2 === 0){
            res1.push(item)
        }
        else {
            res2.push(item)
        }
    })
    let sum1 = res1.reduce((acc, item)=> acc += item, 0)
    let sum2 = res2.reduce((acc, item)=> acc += item, 0)
    return [sum1,sum2]
}

console.log(rowWeights([50]))