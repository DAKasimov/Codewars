function sumPositive(arr){
    return arr.reduce((acc, item)=>{
        if (item > 0){
            acc += item
        }
        return acc
    },0)
}

