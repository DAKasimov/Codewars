function isPrime(value){
    let count = 0
    for (let i = 1; i <= value; i++){
        if (Math.abs(value) % i === 0){
            count++
        }
    }
    if (count === 2){
        return true
    }
    else{
        return false
    }
}

console.log(isPrime(-1))