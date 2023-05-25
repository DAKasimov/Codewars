const isPerfect = (value) =>{
    let division = []
    for (let i = 1; i < value; i++){
        if (value % i === 0){
            division.push(i)
        }
    }
    let s = 0
    for (let i = 0; i < division.length; i++){
        s += division[i]
    }
    if (s === value){
        return true
    }
    else {
        return false
    }
}

