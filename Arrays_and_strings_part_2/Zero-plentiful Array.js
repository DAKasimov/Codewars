function getCountZero(array){
    let count = 0
    let resCount = 0
    for (let i = 0; i < array.length; i++){
        if (array[i] === 0){
            count++
            if (count === 4){
                resCount++
                count = 0
            }
        }
        else {
            count = 0
        }
    }
    return resCount
}

console.log(getCountZero([0, 0, 0, 0, 1, 0]))