function arrayDiff(arr1, arr2){
    let temp = [...arr1, ...arr2]
    let temp2 = new Set()
    for (let x of temp){
        temp2.add(x)
    }
    let res = []
    for (let x of temp2){
        res.push(x)
    }
    return res
}

console.log(arrayDiff([1,2,2,2,3],[2]))
