function twoSum(array, initValue){
    for (let i = 0; i < array.length; i++){
        for (let j = 1; j < array.length; j++){
            if (array[i] + array[j] === initValue){
                return [i,j]
            }
        }
    }
}

console.log(twoSum([1,2,3],4))




