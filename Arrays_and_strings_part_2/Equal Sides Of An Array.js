function getIndex(array){
    let n
    let s1 = 0
    let s2 = 0
    for (let i = 1; i < array.length; i++){
        for (let j = 0; j < array.length; j++){
            if (j < i){
                s1 += array[j]
            }
            if (j > i){
                s2 += array[j]
            }
            else {
                continue
            }
            n = i
        }
        if (s1 === s2){
            return n
        }
        s1 = 0
        s2 = 0
    }
}

console.log(getIndex([1,0,-1,2]))