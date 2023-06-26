function arrayDiff(arr1, arr2){
   let res = []
    let flag = false
    for (let i = 0; i< arr1.length; i++){
        for (let j = 0; j < arr2.length;j++){
            if (arr2[j] === arr1[i]){
                flag = true
            }
        }
        if (flag === false){
            res.push(arr1[i])
        }
        flag = false
    }
    return res
}

console.log(arrayDiff([1,2,2,2],[1,2]))
