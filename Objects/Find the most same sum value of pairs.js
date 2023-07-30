function findPair(arr1, arr2){
    let res
    let result = []
    let obj = {}
    for (let i = 0; i < arr1.length; i++){
        obj[arr1[i]] = arr2[i]
    }
    res = Object.entries(obj)
    res = res.map((item)=>{
        return [Number(item[0]),item[1]]
    })
    let temp = res.map((item)=>{
        return item[0] + item[1]
    })
    for (let i = 0; i < temp.length; i++){
        for (let j = 0; j < temp.length; j++){
            if (i !== j) {
                if (temp[i] === temp[j]) {
                    result.push(res[i])
                }
            }
        }
    }
    console.log(result)
}

findPair([1,2,3,4,5],[9,8,0,0,0])