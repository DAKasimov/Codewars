function func(array) {
    let evaluations = {}
    for (let i = 0; i < array.length; i++){
        evaluations[i] = array[i]
    }
    let count = 0
    for (let x in evaluations){
        count += evaluations[x]
    }
    if (count <= 5){
        return 'ne ok'
    }
    else return 'ok'

}

console.log(func([1,2,3,4,5]))