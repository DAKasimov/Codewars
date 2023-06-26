function get_array_with_same_type(multiArray){
    let res = []
    let flag = false
    for (let i = 0; i < multiArray.length; i++){
        for (let j = 0; j < multiArray[i].length-1; j++){

            if (typeof multiArray[i][j] === typeof multiArray[i][j+1]){
                continue
            }
            else {
                flag = true
                break
            }
        }
        if (multiArray[i].length === 0){
            continue
        }
        if (flag === false){
            res.push(multiArray[i])
        }
        flag = false
    }
    return res
}

console.log(get_array_with_same_type( [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]))